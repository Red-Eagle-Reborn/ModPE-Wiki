var readExternal = android.os.Environment.getExternalStorageDirectory();
var musicPlayer = new android.media.MediaPlayer();

R = {
	
	addEffect:function(ent,eff,dur,amp,amb,parts) {
		if(R.isNull(ent)) {
			if(!R.isNull(eff)) {
				if(eff == "saturation" || eff == "absorption" || eff === "healthBoost" || eff == "wither" || eff == "poison" || eff == "weakness" || eff=="hunger" || eff === "nightVision" || eff == "blindness" || eff == "invisibility" || eff === "waterBreathing" || eff == "fireResistance" || eff === "damageResistance" || eff == "regeneration" || eff == "confusion" || eff == "jump" || eff == "heal" || eff == "harm" || eff === "damageBoost" || eff === "digSlowdown" || eff === "digSpeed" || eff === "movementSlowdown" || eff === "movementSpeed") {
					if(!R.isNull(dur)) {
						if(!R.isNull(amp)) {
							if(!R.isNull(amb)) {
								if(!R.isNull(parts)) {
									Entity.addEffect(getPlayerEnt(),MobEffect. + eff,dur*20,amp,amp,parts);
									
								} else {
									Entity.addEffect(getPlayerEnt(),MobEffect. + eff,dur*20,amp,amb,true);
								}
							} else {
								if(!R.isNull(parts)) {
									Entity.addEffect(getPlayerEnt(),MobEffect. + eff,dur*20,amp,false,parts);	
								} else {
									Entity.addEffect(getPlayerEnt(),MobEffect. + eff,dur*20,amp,false,true);
								}
							}	
						} else {
							if(!R.isNull(amb)) {
								if(!R.isNull(parts)) {
									Entity.addEffect(getPlayerEnt(),MobEffect. + eff,dur*20,1,amb,parts);	
								} else {
									Entity.addEffect(getPlayerEnt(),MobEffect. + eff,dur*20,1,amb,true);
								}
							} else {
								if(!R.isNull(parts)) {
									Entity.addEffect(getPlayerEnt(),MobEffect. + eff,dur*20,1,false,parts);	
								} else {
									Entity.addEffect(getPlayerEnt(),MobEffect. + eff,dur*20,1,false,true);
								}
							}
						}		
					} else {
						if(!R.isNull(amp)) {
							if(!R.isNull(amb)) {
								if(!R.isNull(parts)) {
									Entity.addEffect(getPlayerEnt(),MobEffect. + eff,60*20,amp,amp,parts);	
								} else {
									Entity.addEffect(getPlayerEnt(),MobEffect. + eff,60*20,amp,amb,true);
								}
							} else {
								if(!R.isNull(parts)) {
									Entity.addEffect(getPlayerEnt(),MobEffect. + eff,60*20,amp,false,parts);	
								} else {
									Entity.addEffect(getPlayerEnt(),MobEffect. + eff,60*20,amp,false,true);
								}
							}	
						} else {
							if(!R.isNull(amb)) {
								if(!R.isNull(parts)) {
									Entity.addEffect(getPlayerEnt(),MobEffect. + eff,60*20,1,amb,parts);	
								} else {
									Entity.addEffect(getPlayerEnt(),MobEffect. + eff,60*20,1,amb,true);
								}
							} else {
								if(!R.isNull(parts)) {
									Entity.addEffect(getPlayerEnt(),MobEffect. + eff,60*20,1,false,parts);	
								} else {
									Entity.addEffect(getPlayerEnt(),MobEffect. + eff,60*20,1,false,true);
								}
							}
						}
					}
				} else { 
					if(!R.isNull(dur)) {
						if(!R.isNull(amp)) {
							if(!R.isNull(amb)) {
								if(!R.isNull(parts)) {
									Entity.addEffect(getPlayerEnt(),,dur*20,amp,amp,parts);
									
								} else {
									Entity.addEffect(getPlayerEnt(),eff,dur*20,amp,amb,true);
								}
							} else {
								if(!R.isNull(parts)) {
									Entity.addEffect(getPlayerEnt(),eff,dur*20,amp,false,parts);	
								} else {
									Entity.addEffect(getPlayerEnt(),eff,dur*20,amp,false,true);
								}
							}	
						} else {
							if(!R.isNull(amb)) {
								if(!R.isNull(parts)) {
									Entity.addEffect(getPlayerEnt(),eff,dur*20,1,amb,parts);	
								} else {
									Entity.addEffect(getPlayerEnt(),eff,dur*20,1,amb,true);
								}
							} else {
								if(!R.isNull(parts)) {
									Entity.addEffect(getPlayerEnt(),eff,dur*20,1,false,parts);	
								} else {
									Entity.addEffect(getPlayerEnt(),eff,dur*20,1,false,true);
								}
							}
						}		
					} else {
						if(!R.isNull(amp)) {
							if(!R.isNull(amb)) {
								if(!R.isNull(parts)) {
									Entity.addEffect(getPlayerEnt(),eff,60*20,amp,amp,parts);	
								} else {
									Entity.addEffect(getPlayerEnt(),eff,60*20,amp,amb,true);
								}
							} else {
								if(!R.isNull(parts)) {
									Entity.addEffect(getPlayerEnt(),eff,60*20,amp,false,parts);	
								} else {
									Entity.addEffect(getPlayerEnt(),eff,60*20,amp,false,true);
								}
							}	
						} else {
							if(!R.isNull(amb)) {
								if(!R.isNull(parts)) {
									Entity.addEffect(getPlayerEnt(),eff,60*20,1,amb,parts);	
								} else {
									Entity.addEffect(getPlayerEnt(),eff,60*20,1,amb,true);
								}
							} else {
								if(!R.isNull(parts)) {
									Entity.addEffect(getPlayerEnt(),eff,60*20,1,false,parts);	
								} else {
									Entity.addEffect(getPlayerEnt(),eff,60*20,1,false,true);
								}
							}
						}
					}
				}
			}
		} else {
			if(!R.isNull(eff)) {
				if(!R.isNull(dur)) {
					if(!R.isNull(amp)) {
						if(!R.isNull(amb)) {
							if(!R.isNull(parts)) {
								Entity.addEffect(ent,eff,dur*20,amp,amp,parts);	
							} else {
								Entity.addEffect(ent,eff,dur*20,amp,amb,true);
							}
						} else {
							if(!R.isNull(parts)) {
								Entity.addEffect(ent,eff,dur*20,amp,false,parts);	
							} else {
								Entity.addEffect(ent,eff,dur*20,amp,false,true);
							}
						}	
					} else {
						if(!R.isNull(amb)) {
							if(!R.isNull(parts)) {
								Entity.addEffect(ent,eff,dur*20,1,amb,parts);	
							} else {
								Entity.addEffect(ent,eff,dur*20,1,amb,true);
							}
						} else {
							if(!R.isNull(parts)) {
								Entity.addEffect(ent,eff,dur*20,1,false,parts);	
							} else {
								Entity.addEffect(ent,eff,dur*20,1,false,true);
							}
						}
					}		
				} else {
					if(!R.isNull(amp)) {
						if(!R.isNull(amb)) {
							if(!R.isNull(parts)) {
								Entity.addEffect(ent,eff,60*20,amp,amp,parts);	
							} else {
								Entity.addEffect(ent,eff,60*20,amp,amb,true);
							}
						} else {
							if(!R.isNull(parts)) {
								Entity.addEffect(ent,eff,60*20,amp,false,parts);	
							} else {
								Entity.addEffect(ent,eff,60*20,amp,false,true);
							}
						}	
					} else {
						if(!R.isNull(amb)) {
							if(!R.isNull(parts)) {
								Entity.addEffect(ent,eff,60*20,1,amb,parts);	
							} else {
								Entity.addEffect(ent,eff,60*20,1,amb,true);
							}
						} else {
							if(!R.isNull(parts)) {
								Entity.addEffect(ent,eff,60*20,1,false,parts);	
							} else {
								Entity.addEffect(ent,eff,60*20,1,false,true);
							}
						}
					}
				}
			}
		}
	},
	x:function() {
		getPlayerX();;
	},
	y:function() {
		getPlayerY();
	},
	z:function() {
		getPlayerZ();
	},
	playerEnt:function(m) {
		getPlayerEnt();
	},
	mobsX:function(m) {
		Entity.getX(m);
	},
	mobsY:function(m) {
		Entity.getY(m);
	},
	mobsZ:function(m) {
		Entity.getZ(m);
	},
	setPost:function(m,x,y,z) {
		if(!R.isNull(m) && !R.isNull(x) && !R.isNull(y) && !R.isNull(z)) 
			Entity.setPosition(m,x,y,z);
		if(R.isNull(m) && !R.isNull(x) && !R.isNull(y) && !R.isNull(z))
			Entity.setPosition(R.playerEnt(),x,y,z);
	},
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
		if(R.isNull(prefix)) 
			clientMessage(str);
		else 
			clientMessage(prefix,str);
	},
	spawnMob:function(ent,xx,yy,zz,skin) {
		if(!R.isNull(ent)) {
			if(xx == 0 || yy == 0 || zz == 0) {
				if(R.isNull(skin)) {
					Level.spawnMob(ent,R.x(),R.y(),R.z());
				}
				if(!R.isNull(skin)) {
					Level.spawnMob(ent,R.x(),R.y(),R.z(),skin);
				}
			}
			if(xx != 0 || yy != 0 || zz != 0) {
				if(R.isNull(skin)) {
					Level.spawnMob(ent,xx,yy,zz);
				}
				if(!R.isNull(ent)) {
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
		R.allSword.push([id,damage,uses]);
	}
}
function attackHook(a,v) {
	mainattackHook(a,v);
	for(var i in R.allSword) {
		if(a==getPlayerEnt()) {
			if(Player.getCarriedItem()==R.allSword[i][0]) {
				damageSword(R.allSword[i][0],R.allSword[i][2]);
				Entity.setHealth(v,Entity.getHealth(v)-R.allSword[i][1]);
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
		Level.playSound(R.x(),R.y(),R.z(),"random.break",30,1)
	}
}
function mainattackHook(a,v) {
//Your code here
}
/*
Examples : 
R.newSword(700,"sword",0,"Blazing Sword",7,500);
R.chat("[R]","Hello World !");
*/
