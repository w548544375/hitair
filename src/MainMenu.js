//layer
var MainMenuLayer = cc.Layer.extend({
	
	_ship : null,
	ctor : function(){
		this._super();
		cc.spriteFrameCache.addSpriteFrames(res.textureTransparentPack_plist);
	},
	init : function(){
		this._super();
		//get win center
		var winsize = cc.director.getWinSize();
		var center = cc.p(winsize.width/2, winsize.height/2);
		//create background
		var background = new cc.Sprite(res.background_png);
		background.setPosition(center);
		this.addChild(background);
		//create ship
		this.initShip();
		//create logo
		var logo  = new cc.Sprite(res.logo_png);
		logo.setPosition(center.x,center.y+160);
		this.addChild(logo);
		//create menu
		//new game
		var newGameNormal = new cc.Sprite(res.menu_png,cc.rect(0, 0, 126, 33));
		var newGameSelected = new cc.Sprite(res.menu_png,cc.rect(0, 33, 126, 33));
		var newGameDisabled = new cc.Sprite(res.menu_png,cc.rect(0, 33*2, 126, 33));
		//setting
		var settingNormal = new cc.Sprite(res.menu_png,cc.rect(126, 0, 126, 33));
		var settingSelected = new cc.Sprite(res.menu_png,cc.rect(126, 33, 126, 33));
		var settingDisabled = new cc.Sprite(res.menu_png,cc.rect(126, 33*2, 126, 33));
		//about
		var aboutNormal = new cc.Sprite(res.menu_png,cc.rect(126*2, 0, 126, 33));
		var aboutSelected = new cc.Sprite(res.menu_png,cc.rect(126*2, 33, 126, 33));
		var aboutDisabled = new cc.Sprite(res.menu_png,cc.rect(126*2, 33*2, 126, 33));
		//menu item
		//NEW GAME ITEM
		var newgameItem =new cc.MenuItemSprite(newGameNormal,newGameSelected,newGameDisabled,this.onNewGame,this);
		//SETTING ITEM
		var settingItem = new cc.MenuItemSprite(settingNormal,settingSelected,settingDisabled,this.onSetting,this);
		//about
		var aboutItem = new cc.MenuItemSprite(aboutNormal,aboutSelected,aboutDisabled,this.onAbout,this);
		
		var menu = cc.Menu.create(newgameItem,settingItem,aboutItem);
		
		menu.alignItemsVerticallyWithPadding(12);
		
		menu.setPosition(center.x,center.y-80);
		
		this.addChild(menu,1,TagOfLayer.menuLayer);
	},
	onNewGame : function(){
		cc.log("new game selected");
		cc.director.runScene(new MainGameScene());
	},
	onSetting : function(){
		cc.log("setting selected.");
	},
	onAbout : function(){
		cc.log("about seleted.");
	},
	
	initShip : function(){
		var winsize =  cc.size(320, 480);
		
		var ship = new cc.Sprite("#ship01.png");
		
		this._ship = ship;
		
		this.addChild(ship);
		ship.y = 0;
		ship.x = Math.random()*winsize.width;
		ship.runAction(cc.MoveBy(2,cc.p(Math.random()*winsize.width, ship.y +winsize.height+ 100)));
		this.schedule(this.update,0.1);
	},
	update : function(){
		if(this._ship.y > 480){
			this._ship.y = 0;
			this._ship.x = Math.random()*320;
			this._ship.runAction(cc.moveBy(
					parseInt(5 * Math.random(), 10),
					cc.p(Math.random() * 320, this._ship.y + 480)
			));
		}
	}
});





//scene.
var MainMenuScene = cc.Scene.extend({
	onEnter : function(){
		this._super();//忘记添加，无法响应
		var menu = new MainMenuLayer();
		menu.init();
		this.addChild(menu);
	}
});