const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Plugins.Keyboard,
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Behaviors.Bullet,
		C3.Plugins.Text,
		C3.Plugins.Audio,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Plugins.Sprite.Cnds.IsAnimPlaying,
		C3.Plugins.Sprite.Cnds.IsBoolInstanceVarSet,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.TiledBg.Acts.MoveForward,
		C3.Plugins.Keyboard.Cnds.OnKeyReleased,
		C3.Plugins.TiledBg.Cnds.CompareX,
		C3.Plugins.TiledBg.Exps.Width,
		C3.Plugins.TiledBg.Acts.SetX,
		C3.Plugins.TiledBg.Exps.X,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Cnds.CompareY,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Cnds.For,
		C3.Plugins.Sprite.Acts.SetX,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Sprite.Acts.StopAnim,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Sprite.Acts.SubInstanceVar,
		C3.Plugins.Sprite.Cnds.OnAnimFinished,
		C3.Plugins.Sprite.Acts.AddInstanceVar,
		C3.Plugins.Text.Acts.AddInstanceVar,
		C3.Plugins.Sprite.Acts.MoveForward,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.Sprite.Cnds.IsOutsideLayout,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.SetBoolInstanceVar,
		C3.Plugins.Text.Acts.SubInstanceVar,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.Text.Cnds.CompareInstanceVar,
		C3.Plugins.Sprite.Cnds.OnCreated,
		C3.Plugins.Sprite.Cnds.OnDestroyed,
		C3.Plugins.Sprite.Cnds.CompareFrameTag,
		C3.Plugins.Sprite.Cnds.CompareFrame,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Audio.Acts.StopAll
	];
};
self.C3_JsPropNameTable = [
	{survive_time: 0},
	{walk_distance: 0},
	{enemy1_cnt: 0},
	{bullet_cnt: 0},
	{HP: 0},
	{is_alive: 0},
	{平台: 0},
	{player: 0},
	{键盘: 0},
	{实体: 0},
	{平铺图: 0},
	{Houses: 0},
	{civilian: 0},
	{子弹: 0},
	{bullet: 0},
	{spawnPoint: 0},
	{score: 0},
	{Score: 0},
	{cnt: 0},
	{enemy1: 0},
	{enemy_bullet: 0},
	{enemy2: 0},
	{bullet_warning: 0},
	{平铺图2: 0},
	{title: 0},
	{story: 0},
	{start_tip: 0},
	{音频: 0},
	{keyboard_test: 0},
	{keyboard_tips: 0}
];

self.InstanceType = {
	player: class extends self.ISpriteInstance {},
	键盘: class extends self.IInstance {},
	平铺图: class extends self.ITiledBackgroundInstance {},
	Houses: class extends self.ITiledBackgroundInstance {},
	civilian: class extends self.ISpriteInstance {},
	bullet: class extends self.ISpriteInstance {},
	spawnPoint: class extends self.ISpriteInstance {},
	Score: class extends self.ITextInstance {},
	enemy1: class extends self.ISpriteInstance {},
	enemy_bullet: class extends self.ISpriteInstance {},
	enemy2: class extends self.ISpriteInstance {},
	HP: class extends self.ITextInstance {},
	bullet_cnt: class extends self.ITextInstance {},
	bullet_warning: class extends self.ITextInstance {},
	平铺图2: class extends self.ITiledBackgroundInstance {},
	title: class extends self.ITextInstance {},
	story: class extends self.ITextInstance {},
	start_tip: class extends self.ITextInstance {},
	音频: class extends self.IInstance {},
	keyboard_test: class extends self.ITextInstance {},
	keyboard_tips: class extends self.ITextInstance {}
}