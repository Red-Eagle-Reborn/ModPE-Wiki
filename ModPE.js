var readExternal = android.os.Environment.getExternalStorageDirectory();
var musicPlayer = new android.media.MediaPlayer();

RER = {
	isNull:function(v) {
		return v == null || v == 0 || v == undefined;
	},
	musicPlay:function(f,l,u) {
		musicPlayer.stop();
    		musicPlayer.reset();
    		musicPlayer.setDataSource(readExternal + f + l);
    		musicPlayer.prepare();
    		musicPlayer.setLooping(u);
    		musicPlayer.start();
	},
	musicStop:function() {
		musicPlayer.stop();
		musicPlayer.reset();
	},
	chat:function(prefix,str) {
		if(RER.isNull(prefix)) 
			clientMessage(str);
		else 
			clientMessage(prefix,str);
	},
	spawnMob:function(ent,xx,yy,zz,skin) {
		if(!RER.isNull(ent)) {
			if(xx == 0 || yy == 0 || zz == 0) {
				if(RER.isNull(skin)) {
					Level.spawnMob(ent,getPlayerX(),getPlayerY(),getPlayerZ());
				}
				if(!RER.isNull(skin)) {
					Level.spawnMob(ent,getPlayerX(),getPlayerY(),getPlayerZ(),skin);
				}
			}
			if(xx != 0 || yy != 0 || zz != 0) {
				if(RER.isNull(skin)) {
					Level.spawnMob(ent,xx,yy,zz);
				}
				if(!RER.isNull(ent)) {
					Level.spawnMob(ent,xx,yy,zz,skin);
				}
			}
		}
	},
	allSword:[],
	newSword:function(id,tex,data,name,damage,uses) {
		ModPE.setItem(id,tex,data,name,damage,1);
		Item.setMaxDamage(id,uses);
		Item.setHandEquipped(id,!0);
		RER.allSword.push([id,damage,uses]);
	}
}
function attackHook(a,v) {
	mainattackHook(a,v);
	for(var i in RER.allSword) {
		if(a==getPlayerEnt()) {
			if(Player.getCarriedItem()==RER.allSword[i][0]) {
				damageSword(RER.allSword[i][0],RER.allSword[i][2]);
				Entity.setHealth(v,Entity.getHealth(v)-RER.allSword[i][1]);
			}
		}
	}
}
function damageSword(id,max) {
	var pcid = Player.getCarriedItemData();
	if(pcid!=max) {
		Entity.setCarriedItem(getPlayerEnt(),id,1,pcid+1);
	} else {
		Entity.setCarriedItem(getPlayerEnt(),0,0,0);
		Level.playSound(Player.getX(),Player.getY(),Player.getZ(),"random.break",30,1)
	}
}
function mainattackHook(a,v) {
//Your code here
}
/*
Examples : 
RER.newSword(700,"sword",0,"Blazing Sword",7,500);
RER.chat("[RER]","Hello World !");
*/
