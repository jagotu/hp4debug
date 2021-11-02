//console.log("begin")
const types = ["i", "f", "b", "id", "s", "e"]


var hp4_base = Module.findBaseAddress("gof_f.exe")


var sprintf = hp4_base.add(0x2E1BFE)

// Singleton<EAUK::Modules::CLI::cCommandParser>::s_pSingleton, this is actually prepared by the game in RWS::StartUp::Open
var CommandParserSingleton = hp4_base.add(0x542BCC)

// Singleton<EAUK::Modules::CLI::cConsole>::s_pSingleton, this is not created by the game so we need to create our own
var ConsoleSingleton = hp4_base.add(0x542BC8)

var fakeConsoleVtable = Memory.alloc(8);

var fakeConsoleObject = Memory.alloc(8);
fakeConsoleObject.writePointer(fakeConsoleVtable);

// TODO: trampoline:
var printf_output = ""
var printf_buffer = Memory.alloc(65535)
var printf_trampoline = Memory.alloc(128)

function printBuffer()
{
    printf_output += printf_buffer.readCString();
}

var printCallback = new NativeCallback(printBuffer, "void", [])

var trampasm = new X86Writer(printf_trampoline.add(8))
//trampasm.putBreakpoint()
trampasm.putMovNearPtrReg(printf_trampoline.add(4), "eax") //preserve eax
trampasm.putPopReg("eax") //pop original return address
trampasm.putMovNearPtrReg(printf_trampoline, "eax") //store it
trampasm.putPopReg("eax") //pop thisptr, we don't need it
trampasm.putPushU32(printf_buffer.toInt32()) //sprintf target
trampasm.putCallAddress(sprintf) // call sprintf
trampasm.putCallAddress(printCallback) // call sprintf
trampasm.putPopReg("eax") //pop buffer ptr
trampasm.putPushU32(fakeConsoleObject.toInt32()) //push fake thisptr, we don't need it
trampasm.putMovRegNearPtr("eax", printf_trampoline) //restore original return address
trampasm.putPushReg("eax") //push it
trampasm.putMovRegNearPtr("eax", printf_trampoline.add(4)) //restore eax
trampasm.putRet()

fakeConsoleVtable.writePointer(printf_trampoline.add(8));

ConsoleSingleton.writePointer(fakeConsoleObject);

var requestbuff = Memory.alloc(256)

// int __fastcall EAUK::Modules::CLI::cCommandParser::RunString(void* this, const char *cmdToRun, void *errorHandler)
var RunStringPtr = hp4_base.add(0x30B80)
var RunStringFunc = new NativeFunction(RunStringPtr, 'int32', ['pointer', 'pointer', 'int32'], 'thiscall');


function do_it(request)
{
    requestbuff.writeUtf8String(request);
    printf_buffer.writeU8(0);    
    printf_output = ""
    RunStringFunc(CommandParserSingleton.readPointer(), requestbuff, 0x1337);
    console.log(printf_output);

}

function _get_params(regInfoPtr)
{
    var out = ""
    var paramPtr = regInfoPtr.add(0x4).readPointer();
    while(!paramPtr.isNull())
    {
        
        var name = paramPtr.add(8).readPointer().readCString();
        var type = types[paramPtr.add(0xC).readU8()];
        var voluntary = paramPtr.add(0x18).readU8();
        var parName = name + "|" + type;
        if(voluntary)
        {
            parName = "[" + parName + "]";
        }
        out += " " + parName;
        paramPtr = paramPtr.add(0x14).readPointer()   
    }
    return out;
}


//Walk CCLICommandRegInfo
function _dump_cmdreginfo(reginfoPtr, depth, parent)
{
    
    var childPtr = reginfoPtr.add(0xC).readPointer();
    while(!childPtr.isNull())
    {
        var cmd = parent + childPtr.readPointer().readCString();
        var params = _get_params(childPtr);
        console.log(" ".repeat(depth) + cmd + params );
        _dump_cmdreginfo(childPtr, depth+1, cmd + ".")
        childPtr = childPtr.add(0x10).readPointer()
    }
}

function help()
{
    _dump_cmdreginfo(CommandParserSingleton.readPointer().add(8).readPointer(), 0, "");
}


//AptDebugVersionStringFunc();
