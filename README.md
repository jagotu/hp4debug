Commands available in HP4 CLI:

```
Audio
 Audio.ClearLog
 Audio.EnableDbgChan Channel|s On|b
 Audio.EnableSnapShotPresets [Value|b]
 Audio.HoldAndReleaseSnapshot SnapShotName|s ApplyTime|i HoldTime|i ReleaseTime|i
 Audio.MixerApplySnapShot SnapShotName|s Time|i
 Audio.MixerHoldSnapShot SnapShotName|s Time|i
 Audio.MixerReleaseSnapShot SnapShotName|s Time|i
 Audio.MuteMixerFader FaderName|s Mute|b
 Audio.SetMixerFaderVolume FaderName|s Volume|f
 Audio.SetReverbLevel 0|f
 Audio.SetSoloMixerFader FaderName|s
 Audio.ShowMixer On|b
 Audio.ShowMixerEvents On|b
 Audio.ShowPathfinderEvents On|b
 Audio.ShowReverbEvents On|b
CardManager
 CardManager.ListCards
 CardManager.MasterTheMagicUnlock MasterTheMagicLevel|i
 CardManager.SetAllCardsAvailable Available|b
 CardManager.SetAllCardsOwned Owned|b
 CardManager.SetCard CharacterId|s CardIndex|i CardId|s
 CardManager.SetCardAvailable CardId|s Available|b
 CardManager.SetCardOwned CardId|s Owned|b
FE
 FE.APTMEMORY
 FE.APTVERSION
 FE.INTERNALVARIABLE Level|s
 FE.ISLEVELPLAYING Level|s
 FE.LEVELCURRENTFRAME Level|s
 FE.LEVELFRAMECOUNT Level|s
 FE.MEM
 FE.RELOADSTRINGTABLE
GameRender
 GameRender.LodOffset [Value|f]
 GameRender.LodScale [Value|f]
 GameRender.MipmapBias [Value|f]
 GameRender.NullTextures
 GameRender.Resolution [Width|i] [Height|i]
 GameRender.ScreenMode [Width|i] [Height|i] [Depth|i]
 GameRender.TextureListShow
 GameRender.VblDisplay [Value|b]
 GameRender.VblReset
GlobalAllocator
 GlobalAllocator.DumpHeap [FileName|s]
 GlobalAllocator.Validate
LevelManager
 LevelManager.LoadLevelFolder LevelFolder|s
 LevelManager.LoadSavedLevelFolder LevelFolder|s
 LevelManager.LoadSaveGame
 LevelManager.UnlockAll
Lights
 Lights.Debug [Value|b]
 Lights.Emulation [OnOff|b]
 Lights.Enable [OnOff|b]
 Lights.Mixer
  Lights.Mixer.BlendByDirection [Value|b]
  Lights.Mixer.ModulateShadows [Value|f]
  Lights.Mixer.SelComplementary [Value|b]
  Lights.Mixer.SelDifferent [Value|b]
  Lights.Mixer.SelDifferentTol [Value|f]
  Lights.Mixer.SelDirection [Value|b]
  Lights.Mixer.SelPriority [Value|b]
  Lights.Mixer.ShowLights [Value|b]
  Lights.Mixer.ShowMixed [Value|b]
  Lights.Mixer.ShowRange [Value|f]
 Lights.Rim
  Lights.Rim.Enable [Value|b]
  Lights.Rim.EyeAtten [Value|b]
  Lights.Rim.SideAtten [Value|b]
LionEmitter
 LionEmitter.Activate DesName|s
 LionEmitter.ActivateAll
 LionEmitter.DeActivate DesName|s
 LionEmitter.DeActivateAll
 LionEmitter.ShowAll
LocalAllocator
 LocalAllocator.AptAux__Dynamic__ActiveTextStringAllocator
  LocalAllocator.AptAux__Dynamic__ActiveTextStringAllocator.DumpHeap [FileName|s]
 LocalAllocator.AptAux__Dynamic__TextureWrapperAllocator
  LocalAllocator.AptAux__Dynamic__TextureWrapperAllocator.DumpHeap [FileName|s]
 LocalAllocator.EARSStringHeap
  LocalAllocator.EARSStringHeap.DumpHeap [FileName|s]
 LocalAllocator.HavokHeap
  LocalAllocator.HavokHeap.DumpHeap [FileName|s]
 LocalAllocator.LocalHeap
  LocalAllocator.LocalHeap.DumpHeap [FileName|s]
 LocalAllocator.MemCard__Static__RealMemcardAllocator
  LocalAllocator.MemCard__Static__RealMemcardAllocator.DumpHeap [FileName|s]
 LocalAllocator.ShaderCore__Render_Allocator
  LocalAllocator.ShaderCore__Render_Allocator.DumpHeap [FileName|s]
 LocalAllocator.ShaderCore__Scene_Allocator
  LocalAllocator.ShaderCore__Scene_Allocator.DumpHeap [FileName|s]
ModelRender
 ModelRender.Lighting
  ModelRender.Lighting.Normal
  ModelRender.Lighting.UnLit
  ModelRender.Lighting.Xray
 ModelRender.MipmapBase [Value|f]
 ModelRender.MipmapScale [Value|f]
 ModelRender.OverrideLOD [Value|i]
 ModelRender.UnTex [Value|b]
ModuleManager
 ModuleManager.DebugRenderModule
  ModuleManager.DebugRenderModule.Enable Enable|b
 ModuleManager.FogRender
  ModuleManager.FogRender.Enable Enable|b
 ModuleManager.GroperModule
  ModuleManager.GroperModule.Enable Enable|b
 ModuleManager.Lights
  ModuleManager.Lights.Enable Enable|b
 ModuleManager.LionModule
  ModuleManager.LionModule.Enable Enable|b
 ModuleManager.LionStatsModule
  ModuleManager.LionStatsModule.Enable Enable|b
 ModuleManager.ModelAssetManager
  ModuleManager.ModelAssetManager.Enable Enable|b
 ModuleManager.ModelInstanceManager
  ModuleManager.ModelInstanceManager.Enable Enable|b
 ModuleManager.ModelPropManager
  ModuleManager.ModelPropManager.Enable Enable|b
 ModuleManager.ModelSkinManager
  ModuleManager.ModelSkinManager.Enable Enable|b
 ModuleManager.SASModule
  ModuleManager.SASModule.Enable Enable|b
 ModuleManager.ScubiModule
  ModuleManager.ScubiModule.Enable Enable|b
 ModuleManager.ShadowRender
  ModuleManager.ShadowRender.Enable Enable|b
SaveGameSystem
 SaveGameSystem.DeserialiseGlobalComponents
 SaveGameSystem.DieAndRestart
 SaveGameSystem.LoadGameData
 SaveGameSystem.LoadLevelConfig LevelConfig|i
 SaveGameSystem.SaveGame
Screen
 Screen.ColourScale [Red|f] [Green|f] [Blue|f] [Alpha|f]
 Screen.Dump OutFile|s
SCUBI
 SCUBI.ShowAll
 SCUBI.ShowNames
SharedInventory
 SharedInventory.SetBeans NumBeans|i
 SharedInventory.UnlockAll NumLevelsUnlocked|i
```
