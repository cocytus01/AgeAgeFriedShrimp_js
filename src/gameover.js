//thirdScene.js
var ThirdLayer = cc.Layer.extend({
    ctor: function() {
        this._super();
        var size = cc.director.getWinSize();
        audioEngine.playEffect(res.se_death);
        var gameoverBG_png = cc.Sprite.create(res.gameoverBG_png);
        gameoverBG_png.setPosition(size.width / 2, size.height / 2);
        this.addChild(gameoverBG_png);

        var label = cc.LabelTTF.create("GAME OVER", "怨霊", 60);
        label.setPosition(size.width / 2, size.height * 4 / 5);
        this.addChild(label, 1);

        var scorelabel = cc.LabelTTF.create("Score:"+score, "怨霊", 30);
        scorelabel.setPosition(size.width / 2, size.height /2);
        this.addChild(scorelabel, 1);


        var replay_png = cc.Sprite.create(res.replay_png);
        replay_png.setPosition(size.width / 2, size.height / 6);
        this.addChild(replay_png);

        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: this.onTouchBegan,
            onTouchMoved: this.onTouchMoved,
            onTouchEnded: this.onTouchEnded
          }, this);
          return true;
        },
    onTouchBegan: function(touch, event) {
        return true;
    },
    onTouchMoved: function(touch, event) {},
    onTouchEnded: function(touch, event) {
      //score 初期化
      score = 0;
      audioEngine.setMusicVolume(audioEngine.getMusicVolume(res.bgm_main) + 0.3);
      audioEngine.setMusicVolume(audioEngine.getMusicVolume(res.bgm_main2) + 0.3);
      audioEngine.playEffect("res/zabun.mp3");
      cc.director.runScene(new gameScene());
    },
});


var GameOverScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        // 背景レイヤーをその場で作る
        var backgroundLayer = new cc.LayerColor(new cc.Color(0, 0, 0, 200));
        this.addChild(backgroundLayer);

        var layer3 = new ThirdLayer();
        this.addChild(layer3);
    }
});
