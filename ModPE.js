RER = {
	chat:function(prefix,str) {
		if(prefix == null || prefix == undefined || prefix == 0) {
			clientMessage(str);
		}
		if(prefix != null || prefix != undefined || prefix != 0) {
			clientMessage(prefix,str);
		}
	}
	spawnMob:function(ent,xx,yy,zz,skin) {
		if(ent != null || ent != undefined || ent != 0) {
			if(xx == 0 || yy == 0 || zz == 0) {
				if(skin == null || skin == undefined || skin == 0) {
					Level.spawnMob(ent,getPlayerX(),getPlayerY(),getPlayerZ());
				}
				if(skin != null || skin != undefined || skin != 0) {
					Level.spawnMob(ent,getPlayerX(),getPlayerY(),getPlayerZ(),skin);
				}
			}
			if(xx != 0 || yy != 0 || zz != 0) {
				if(skin == null || skin == undefined || skin == 0) {
					Level.spawnMob(ent,xx,yy,zz);
				}
				if(skin != null || skin != undefined || skin != 0) {
					Level.spawnMob(ent,xx,yy,zz,skin);
				}
			}
		}
	}
}

RER.chat("$4[RER]","Hellow World");
RER.spawnMob(34,0,0,0);
