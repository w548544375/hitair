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
		//init player
		var position = cc.p(center.x, 100);
		var player = new Player("#ship03.png");
		var rect = player.getrect();
		player.attr({
			x:center.x,
			y:rect.height/2+10
		});
		this.addChild(player);
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

//player sprite
var Player = cc.Sprite.extend({
	_HP : 100,
	_rect : null,
	get HP(){
		return this._HP;
	},
	set HP(hp){
	//if(typeof hp == "number")
		this._HP = hp;
	},
	ctor : function(sprite){
		this._super(sprite);
		this._rect = cc.rect(0, 0, this.getContentSize().width, this.getContentSize().height);
		this.init();
		
	},
	init : function(){
		this._super();
		var animationFram = [];
		for(var i=1;i<3;i++){
			var str = "ship0"+i+".png";
			var fram = cc.spriteFrameCache.getSpriteFrame(str);
			animationFram.push(fram);
		}
		var animattion = new cc.Animation(animationFram,0.1);
		var animate = new cc.Animate(animattion);
		var action = new cc.RepeatForever(animate);
		this.runAction(action);
		this.addTouchListenter();
	},
	getrect : function() {
		return cc.rect(0, 0, this._rect.width,this._rect.height);
	},
	addTouchListenter : function(){
		cc.eventManager.addListener({
			event:cc.EventListener.TOUCH_ONE_BY_ONE,
			swallowTouches : true,
			onTouchBegan:this.onTouchBegan,
			onTouchMoved:this.onTouchMoved,
			onTouchEnded:this.onTouchEnded,
			onTouchCanceled:this.onTouchCanceled
		},this);
	},
	isTouchInPlayer : function(touch){
		var touchpoint = touch.getLocation();
		var myrect = this.getrect();
		myrect.x += this.x;
		myrect.y += this.y;
		return cc.rectContainsPoint(myrect, touchpoint);
	},
	onTouchBegan:function(touch,event){
		var target = event.getCurrentTarget();
		if(target.isTouchInPlayer(touch))
			return true;
		return false;
	},
	onTouchMoved :function(touch,event){
		//cc.log("Touch Moved");
		var target = event.getCurrentTarget();
		target.setPosition(touch.getLocation());
	},
	onTouchEnded: function(touch,event){
		//cc.log("Touch Ened");
	},
	onTouchCanceled : function(touch,event){
		//cc.log("Touch Canceled");
	}
});





