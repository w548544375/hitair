var MainGameLayer = cc.Layer.extend({
	ctor : function(){
		this._super();
	},
	init : function(){
		//init background
		var winsize = cc.director.getWinSize();
		var center = cc.p(winsize.width/2, winsize.height/2);
		var air = new cc.Sprite("#bg01.png");
		air.setPosition(center);
		this.addChild(air);
	}
});
var MainGameScene = cc.Layer.extend({
	onEnter : function(){
		cc.log("run MainGame Scene......");
		this._super();
		var gameLayer = new MainGameLayer();
		gameLayer.init();
		this.addChild(gameLayer);
	}
});








