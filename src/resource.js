var res = {
    HelloWorld_png : "res/HelloWorld.png",
    CloseNormal_png : "res/CloseNormal.png",
    CloseSelected_png : "res/CloseSelected.png",
    background_png : "res/mainMenu/bg.png",
    flare_jpg : "res/mainMenu/flare.jpg",
    logo_png : "res/mainMenu/logo.png",
    textureTransparentPack_plist : "res/mainMenu/textureTransparentPack.plist",
    textureTransparentPack_png : "res/mainMenu/textureTransparentPack.png",
    menu_png : "res/mainMenu/menu.png",
    //main game
    explosion_png : "res/gamePlay/explosion.png",
    explosion_plist : "res/gamePlay/explosion.plist",
    textureopaquepack_png : "res/gamePlay/textureOpaquePack.png",
    textureopaquepack_plist : "res/gamePlay/textureOpaquePack.plist"
};

var g_resources = [];
for(var i in res){
	g_resources.push(res[i]);
}
