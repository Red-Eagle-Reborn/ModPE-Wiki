var readExternal = android.os.Environment.getExternalStorageDirectory();
var musicPlayer = new android.media.MediaPlayer();

R = {
	getData:function(x,y,z) {
		if(!R.isNull(x) && !R.isNull(y) && !R.isNull(z)) Level.getData(x,y,z);
			
	}
	worldDir:function() {
		Level.getWorldDir();
	},
	worldName:function() {
		Level.getWorldName();
	},
	addItem:function(i,a,d) {
		if(!R.isNull(i)) {
			if(!R.isNull(a)) {
				if(!R.isNull(d)) {
					Player.addItemInventory(i,a,d);
				} else {
					Player.addItemInventory(i,a,0);
				}
			} else {
				if(!R.isNull(d)) {
					Player.addItemInventory(i,1,d);
				} else {
					Player.addItemInventory(i,1,0);
				}	
			}
		}
	},
	creativeItem:function(i,a,d) {
		if(!R.isNull(i)) {
			if(!R.isNull(a)) {
				if(!R.isNull(d)) {
					Player.addItemCreativeInv(i,a,d);
				} else {
					Player.addItemCreativeInv(i,a,0);
				}
			} else {
				if(!R.isNull(d)) {
					Player.addItemCreativeInv(i,1,d);
				} else {
					Player.addItemCreativeInv(i,1,0);
				}	
			}
		}
	},
	setCanFly:function(t) {
		if(!R.isNull(t)) {
			if(t == 1 || t == true) {
				Player.setCanFly(1);
			}
			if(t == 0 || t == false) {
				Player.setCanFly(0);
			}
		}
	},
	setNameTag:function(e,n) {
		if(!R.isNull(e) && !R.isNull(n)) {
			Entity.setNameTag(e,n);
		}
	},
	getAge:function(e) {
		if(!R.isNull(e)) {
			Entity.getAnimalAge(e);
		}
	},
	setAge:function(e,a) {
		if(!R.isNull(e) && !R.isNull(a)) {
			Entity.setAnimalAge(e,a);
		}
	},
	setPitch:function(e,p) {
		if(!R.isNull(e) && !R.isNull(p)) {
			Entity.setPitch(e,p);	
		} else {
			Entity.setPitch(R.playerEnt(),p);
		}
	},
	setYaw:function(e) {
		if(!R.isNull(e) && !R.isNull(p)) {
			Entity.setYaw(e,p);	
		} else {
			Entity.setYaw(R.playerEnt(),p);
		}
	},
	getPitch:function(e) {
		if(!R.isNull(e)) {
			Entity.getPitch(e);	
		} else {
			Entity.getPitch(R.playerEnt());
		}
	},
	getYaw:function(e) {
		if(!R.isNull(e)) {
			Entity.getYaw(e);	
		} else {
			Entity.getYaw(R.playerEnt());
		}
	},
	ride:function(rider,mount) {
		if(R.isNull(rider)) {
			if(!R.isNull(mount)) {
				Entity.rideAnimal(R.playerEnt(),mount);
			}
		} else {
			if(!R.isNull(mount)) {
				Entity.rideAnimal(rider,mount);
			}
		}
	},
	newBlock:function(id,name,texture,msid,opq,rntype,color,destroytime,explostionRes,lightlvl,lightopq) {
		if(!R.isNull(id) && !R.isNull(name) && !R.isNull(texture) && !R.isNull(msid)) {
			if(R.isNull(opq)) {
				if(R.isNull(rntype)) {
					if(R.isNull(color)) {
						if(R.isNull(destroytime)) {
							if(R.isNull(explostionRes)) {
								if(R.isNull(lightlvl)) {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,false,0);
									} else {
										Block.defineBlock(id,name,texture,msid,false,0);
										Block.setLightOpacity(id,lightopq);
									}
								} else {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,false,0);
										Block.setLightLevel(id,lightlvl);
									} else {
										Block.defineBlock(id,name,texture,msid,false,0);
										Block.setLightOpacity(id,lightopq);
										Block.setLightLevel(id,lightlvl);
									}
								}
							} else {
								if(R.isNull(lightlvl)) {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,false,0);
										Block.setExplosionResistance(id,explostionRes);
									} else {
										Block.defineBlock(id,name,texture,msid,false,0);
										Block.setLightOpacity(id,lightopq);
										Block.setExplosionResistance(id,explostionRes);
									}
								} else {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,false,0);
										Block.setLightLevel(id,lightlvl);
										Block.setExplosionResistance(id,explostionRes);
									} else {
										Block.defineBlock(id,name,texture,msid,false,0);
										Block.setLightOpacity(id,lightopq);
										Block.setLightLevel(id,lightlvl);
										Block.setExplosionResistance(id,explostionRes);
									}
								}
							}
						} else {
							if(R.isNull(explostionRes)) {
								if(R.isNull(lightlvl)) {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,false,0);
										Block.setDestroyTime(id,destroytime);
									} else {
										Block.defineBlock(id,name,texture,msid,false,0);
										Block.setLightOpacity(id,lightopq);
										Block.setDestroyTime(id,destroytime);
									}
								} else {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,false,0);
										Block.setLightLevel(id,lightlvl);
										Block.setDestroyTime(id,destroytime);
									} else {
										Block.defineBlock(id,name,texture,msid,false,0);
										Block.setLightOpacity(id,lightopq);
										Block.setLightLevel(id,lightlvl);
										Block.setDestroyTime(id,destroytime);
									}
								}
							} else {
								if(R.isNull(lightlvl)) {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,false,0);
										Block.setExplosionResistance(id,explostionRes);
										Block.setDestroyTime(id,destroytime);
									} else {
										Block.defineBlock(id,name,texture,msid,false,0);
										Block.setLightOpacity(id,lightopq);
										Block.setExplosionResistance(id,explostionRes);
										Block.setDestroyTime(id,destroytime);
									}
								} else {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,false,0);
										Block.setLightLevel(id,lightlvl);
										Block.setExplosionResistance(id,explostionRes);
										Block.setDestroyTime(id,destroytime);
									} else {
										Block.defineBlock(id,name,texture,msid,false,0);
										Block.setLightOpacity(id,lightopq);
										Block.setLightLevel(id,lightlvl);
										Block.setExplosionResistance(id,explostionRes);
										Block.setDestroyTime(id,destroytime);
									}
								}
							}
						}
					} else {
						if(R.isNull(destroytime)) {
							if(R.isNull(explostionRes)) {
								if(R.isNull(lightlvl)) {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,false,0);
										Block.setColor(id,color);
									} else {
										Block.defineBlock(id,name,texture,msid,false,0);
										Block.setLightOpacity(id,lightopq);
										Block.setColor(id,color);
									}
								} else {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,false,0);
										Block.setLightLevel(id,lightlvl);
										Block.setColor(id,color);
									} else {
										Block.defineBlock(id,name,texture,msid,false,0);
										Block.setLightOpacity(id,lightopq);
										Block.setLightLevel(id,lightlvl);
										Block.setColor(id,color);
									}
								}
							} else {
								if(R.isNull(lightlvl)) {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,false,0);
										Block.setExplosionResistance(id,explostionRes);
										Block.setColor(id,color);
									} else {
										Block.defineBlock(id,name,texture,msid,false,0);
										Block.setLightOpacity(id,lightopq);
										Block.setExplosionResistance(id,explostionRes);
										Block.setColor(id,color);
									}
								} else {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,false,0);
										Block.setLightLevel(id,lightlvl);
										Block.setExplosionResistance(id,explostionRes);
										Block.setColor(id,color);
									} else {
										Block.defineBlock(id,name,texture,msid,false,0);
										Block.setLightOpacity(id,lightopq);
										Block.setLightLevel(id,lightlvl);
										Block.setExplosionResistance(id,explostionRes);
										Block.setColor(id,color);
									}
								}
							}
						} else {
							if(R.isNull(explostionRes)) {
								if(R.isNull(lightlvl)) {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,false,0);
										Block.setDestroyTime(id,destroytime);
										Block.setColor(id,color);
									} else {
										Block.defineBlock(id,name,texture,msid,false,0);
										Block.setLightOpacity(id,lightopq);
										Block.setDestroyTime(id,destroytime);
										Block.setColor(id,color);
									}
								} else {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,false,0);
										Block.setLightLevel(id,lightlvl);
										Block.setDestroyTime(id,destroytime);
										Block.setColor(id,color);
									} else {
										Block.defineBlock(id,name,texture,msid,false,0);
										Block.setLightOpacity(id,lightopq);
										Block.setLightLevel(id,lightlvl);
										Block.setDestroyTime(id,destroytime);
										Block.setColor(id,color);
									}
								}
							} else {
								if(R.isNull(lightlvl)) {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,false,0);
										Block.setExplosionResistance(id,explostionRes);
										Block.setDestroyTime(id,destroytime);
										Block.setColor(id,color);
									} else {
										Block.defineBlock(id,name,texture,msid,false,0);
										Block.setLightOpacity(id,lightopq);
										Block.setExplosionResistance(id,explostionRes);
										Block.setDestroyTime(id,destroytime);
										Block.setColor(id,color);
									}
								} else {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,false,0);
										Block.setLightLevel(id,lightlvl);
										Block.setExplosionResistance(id,explostionRes);
										Block.setDestroyTime(id,destroytime);
										Block.setColor(id,color);
									} else {
										Block.defineBlock(id,name,texture,msid,false,0);
										Block.setLightOpacity(id,lightopq);
										Block.setLightLevel(id,lightlvl);
										Block.setExplosionResistance(id,explostionRes);
										Block.setDestroyTime(id,destroytime);
										Block.setColor(id,color);
									}
								}
							}
						}
					}
				} else {
					if(R.isNull(color)) {
						if(R.isNull(destroytime)) {
							if(R.isNull(explostionRes)) {
								if(R.isNull(lightlvl)) {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,false,rntype);
									} else {
										Block.defineBlock(id,name,texture,msid,false,rntype);
										Block.setLightOpacity(id,lightopq);
									}
								} else {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,false,rntype);
										Block.setLightLevel(id,lightlvl);
									} else {
										Block.defineBlock(id,name,texture,msid,false,rntype);
										Block.setLightOpacity(id,lightopq);
										Block.setLightLevel(id,lightlvl);
									}
								}
							} else {
								if(R.isNull(lightlvl)) {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,false,rntype);
										Block.setExplosionResistance(id,explostionRes);
									} else {
										Block.defineBlock(id,name,texture,msid,false,rntype);
										Block.setLightOpacity(id,lightopq);
										Block.setExplosionResistance(id,explostionRes);
									}
								} else {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,false,rntype);
										Block.setLightLevel(id,lightlvl);
										Block.setExplosionResistance(id,explostionRes);
									} else {
										Block.defineBlock(id,name,texture,msid,false,rntype);
										Block.setLightOpacity(id,lightopq);
										Block.setLightLevel(id,lightlvl);
										Block.setExplosionResistance(id,explostionRes);
									}
								}
							}
						} else {
							if(R.isNull(explostionRes)) {
								if(R.isNull(lightlvl)) {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,false,rntype);
										Block.setDestroyTime(id,destroytime);
									} else {
										Block.defineBlock(id,name,texture,msid,false,rntype);
										Block.setLightOpacity(id,lightopq);
										Block.setDestroyTime(id,destroytime);
									}
								} else {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,false,rntype);
										Block.setLightLevel(id,lightlvl);
										Block.setDestroyTime(id,destroytime);
									} else {
										Block.defineBlock(id,name,texture,msid,false,rntype);
										Block.setLightOpacity(id,lightopq);
										Block.setLightLevel(id,lightlvl);
										Block.setDestroyTime(id,destroytime);
									}
								}
							} else {
								if(R.isNull(lightlvl)) {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,false,rntype);
										Block.setExplosionResistance(id,explostionRes);
										Block.setDestroyTime(id,destroytime);
									} else {
										Block.defineBlock(id,name,texture,msid,false,rntype);
										Block.setLightOpacity(id,lightopq);
										Block.setExplosionResistance(id,explostionRes);
										Block.setDestroyTime(id,destroytime);
									}
								} else {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,false,rntype);
										Block.setLightLevel(id,lightlvl);
										Block.setExplosionResistance(id,explostionRes);
										Block.setDestroyTime(id,destroytime);
									} else {
										Block.defineBlock(id,name,texture,msid,false,rntype);
										Block.setLightOpacity(id,lightopq);
										Block.setLightLevel(id,lightlvl);
										Block.setExplosionResistance(id,explostionRes);
										Block.setDestroyTime(id,destroytime);
									}
								}
							}
						}
					} else {
						if(R.isNull(destroytime)) {
							if(R.isNull(explostionRes)) {
								if(R.isNull(lightlvl)) {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,false,rntype);
										Block.setColor(id,color);
									} else {
										Block.defineBlock(id,name,texture,msid,false,rntype);
										Block.setLightOpacity(id,lightopq);
										Block.setColor(id,color);
									}
								} else {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,false,rntype);
										Block.setLightLevel(id,lightlvl);
										Block.setColor(id,color);
									} else {
										Block.defineBlock(id,name,texture,msid,false,rntype);
										Block.setLightOpacity(id,lightopq);
										Block.setLightLevel(id,lightlvl);
										Block.setColor(id,color);
									}
								}
							} else {
								if(R.isNull(lightlvl)) {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,false,rntype);
										Block.setExplosionResistance(id,explostionRes);
										Block.setColor(id,color);
									} else {
										Block.defineBlock(id,name,texture,msid,false,rntype);
										Block.setLightOpacity(id,lightopq);
										Block.setExplosionResistance(id,explostionRes);
										Block.setColor(id,color);
									}
								} else {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,false,rntype);
										Block.setLightLevel(id,lightlvl);
										Block.setExplosionResistance(id,explostionRes);
										Block.setColor(id,color);
									} else {
										Block.defineBlock(id,name,texture,msid,false,rntype);
										Block.setLightOpacity(id,lightopq);
										Block.setLightLevel(id,lightlvl);
										Block.setExplosionResistance(id,explostionRes);
										Block.setColor(id,color);
									}
								}
							}
						} else {
							if(R.isNull(explostionRes)) {
								if(R.isNull(lightlvl)) {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,false,rntype);
										Block.setDestroyTime(id,destroytime);
										Block.setColor(id,color);
									} else {
										Block.defineBlock(id,name,texture,msid,false,rntype);
										Block.setLightOpacity(id,lightopq);
										Block.setDestroyTime(id,destroytime);
										Block.setColor(id,color);
									}
								} else {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,false,rntype);
										Block.setLightLevel(id,lightlvl);
										Block.setDestroyTime(id,destroytime);
										Block.setColor(id,color);
									} else {
										Block.defineBlock(id,name,texture,msid,false,rntype);
										Block.setLightOpacity(id,lightopq);
										Block.setLightLevel(id,lightlvl);
										Block.setDestroyTime(id,destroytime);
										Block.setColor(id,color);
									}
								}
							} else {
								if(R.isNull(lightlvl)) {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,false,rntype);
										Block.setExplosionResistance(id,explostionRes);
										Block.setDestroyTime(id,destroytime);
										Block.setColor(id,color);
									} else {
										Block.defineBlock(id,name,texture,msid,false,rntype);
										Block.setLightOpacity(id,lightopq);
										Block.setExplosionResistance(id,explostionRes);
										Block.setDestroyTime(id,destroytime);
										Block.setColor(id,color);
									}
								} else {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,false,rntype);
										Block.setLightLevel(id,lightlvl);
										Block.setExplosionResistance(id,explostionRes);
										Block.setDestroyTime(id,destroytime);
										Block.setColor(id,color);
									} else {
										Block.defineBlock(id,name,texture,msid,false,rntype);
										Block.setLightOpacity(id,lightopq);
										Block.setLightLevel(id,lightlvl);
										Block.setExplosionResistance(id,explostionRes);
										Block.setDestroyTime(id,destroytime);
										Block.setColor(id,color);
									}
								}
							}
						}
					}	
				}
			} else {
				if(R.isNull(rntype)) {
					if(R.isNull(color)) {
						if(R.isNull(destroytime)) {
							if(R.isNull(explostionRes)) {
								if(R.isNull(lightlvl)) {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,opq,0);
									} else {
										Block.defineBlock(id,name,texture,msid,opq,0);
										Block.setLightOpacity(id,lightopq);
									}
								} else {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,opq,0);
										Block.setLightLevel(id,lightlvl);
									} else {
										Block.defineBlock(id,name,texture,msid,opq,0);
										Block.setLightOpacity(id,lightopq);
										Block.setLightLevel(id,lightlvl);
									}
								}
							} else {
								if(R.isNull(lightlvl)) {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,opq,0);
										Block.setExplosionResistance(id,explostionRes);
									} else {
										Block.defineBlock(id,name,texture,msid,opq,0);
										Block.setLightOpacity(id,lightopq);
										Block.setExplosionResistance(id,explostionRes);
									}
								} else {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,opq,0);
										Block.setLightLevel(id,lightlvl);
										Block.setExplosionResistance(id,explostionRes);
									} else {
										Block.defineBlock(id,name,texture,msid,opq,0);
										Block.setLightOpacity(id,lightopq);
										Block.setLightLevel(id,lightlvl);
										Block.setExplosionResistance(id,explostionRes);
									}
								}
							}
						} else {
							if(R.isNull(explostionRes)) {
								if(R.isNull(lightlvl)) {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,opq,0);
										Block.setDestroyTime(id,destroytime);
									} else {
										Block.defineBlock(id,name,texture,msid,opq,0);
										Block.setLightOpacity(id,lightopq);
										Block.setDestroyTime(id,destroytime);
									}
								} else {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,opq,0);
										Block.setLightLevel(id,lightlvl);
										Block.setDestroyTime(id,destroytime);
									} else {
										Block.defineBlock(id,name,texture,msid,opq,0);
										Block.setLightOpacity(id,lightopq);
										Block.setLightLevel(id,lightlvl);
										Block.setDestroyTime(id,destroytime);
									}
								}
							} else {
								if(R.isNull(lightlvl)) {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,opq,0);
										Block.setExplosionResistance(id,explostionRes);
										Block.setDestroyTime(id,destroytime);
									} else {
										Block.defineBlock(id,name,texture,msid,opq,0);
										Block.setLightOpacity(id,lightopq);
										Block.setExplosionResistance(id,explostionRes);
										Block.setDestroyTime(id,destroytime);
									}
								} else {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,opq,0);
										Block.setLightLevel(id,lightlvl);
										Block.setExplosionResistance(id,explostionRes);
										Block.setDestroyTime(id,destroytime);
									} else {
										Block.defineBlock(id,name,texture,msid,opq,0);
										Block.setLightOpacity(id,lightopq);
										Block.setLightLevel(id,lightlvl);
										Block.setExplosionResistance(id,explostionRes);
										Block.setDestroyTime(id,destroytime);
									}
								}
							}
						}
					} else {
						if(R.isNull(destroytime)) {
							if(R.isNull(explostionRes)) {
								if(R.isNull(lightlvl)) {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,opq,0);
										Block.setColor(id,color);
									} else {
										Block.defineBlock(id,name,texture,msid,opq,0);
										Block.setLightOpacity(id,lightopq);
										Block.setColor(id,color);
									}
								} else {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,opq,0);
										Block.setLightLevel(id,lightlvl);
										Block.setColor(id,color);
									} else {
										Block.defineBlock(id,name,texture,msid,opq,0);
										Block.setLightOpacity(id,lightopq);
										Block.setLightLevel(id,lightlvl);
										Block.setColor(id,color);
									}
								}
							} else {
								if(R.isNull(lightlvl)) {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,opq,0);
										Block.setExplosionResistance(id,explostionRes);
										Block.setColor(id,color);
									} else {
										Block.defineBlock(id,name,texture,msid,opq,0);
										Block.setLightOpacity(id,lightopq);
										Block.setExplosionResistance(id,explostionRes);
										Block.setColor(id,color);
									}
								} else {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,opq,0);
										Block.setLightLevel(id,lightlvl);
										Block.setExplosionResistance(id,explostionRes);
										Block.setColor(id,color);
									} else {
										Block.defineBlock(id,name,texture,msid,opq,0);
										Block.setLightOpacity(id,lightopq);
										Block.setLightLevel(id,lightlvl);
										Block.setExplosionResistance(id,explostionRes);
										Block.setColor(id,color);
									}
								}
							}
						} else {
							if(R.isNull(explostionRes)) {
								if(R.isNull(lightlvl)) {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,opq,0);
										Block.setDestroyTime(id,destroytime);
										Block.setColor(id,color);
									} else {
										Block.defineBlock(id,name,texture,msid,opq,0);
										Block.setLightOpacity(id,lightopq);
										Block.setDestroyTime(id,destroytime);
										Block.setColor(id,color);
									}
								} else {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,opq,0);
										Block.setLightLevel(id,lightlvl);
										Block.setDestroyTime(id,destroytime);
										Block.setColor(id,color);
									} else {
										Block.defineBlock(id,name,texture,msid,opq,0);
										Block.setLightOpacity(id,lightopq);
										Block.setLightLevel(id,lightlvl);
										Block.setDestroyTime(id,destroytime);
										Block.setColor(id,color);
									}
								}
							} else {
								if(R.isNull(lightlvl)) {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,opq,0);
										Block.setExplosionResistance(id,explostionRes);
										Block.setDestroyTime(id,destroytime);
										Block.setColor(id,color);
									} else {
										Block.defineBlock(id,name,texture,msid,opq,0);
										Block.setLightOpacity(id,lightopq);
										Block.setExplosionResistance(id,explostionRes);
										Block.setDestroyTime(id,destroytime);
										Block.setColor(id,color);
									}
								} else {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,opq,0);
										Block.setLightLevel(id,lightlvl);
										Block.setExplosionResistance(id,explostionRes);
										Block.setDestroyTime(id,destroytime);
										Block.setColor(id,color);
									} else {
										Block.defineBlock(id,name,texture,msid,opq,0);
										Block.setLightOpacity(id,lightopq);
										Block.setLightLevel(id,lightlvl);
										Block.setExplosionResistance(id,explostionRes);
										Block.setDestroyTime(id,destroytime);
										Block.setColor(id,color);
									}
								}
							}
						}
					}
				} else {
					if(R.isNull(color)) {
						if(R.isNull(destroytime)) {
							if(R.isNull(explostionRes)) {
								if(R.isNull(lightlvl)) {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,opq,rntype);
									} else {
										Block.defineBlock(id,name,texture,msid,opq,rntype);
										Block.setLightOpacity(id,lightopq);
									}
								} else {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,opq,rntype);
										Block.setLightLevel(id,lightlvl);
									} else {
										Block.defineBlock(id,name,texture,msid,opq,rntype);
										Block.setLightOpacity(id,lightopq);
										Block.setLightLevel(id,lightlvl);
									}
								}
							} else {
								if(R.isNull(lightlvl)) {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,opq,rntype);
										Block.setExplosionResistance(id,explostionRes);
									} else {
										Block.defineBlock(id,name,texture,msid,opq,rntype);
										Block.setLightOpacity(id,lightopq);
										Block.setExplosionResistance(id,explostionRes);
									}
								} else {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,opq,rntype);
										Block.setLightLevel(id,lightlvl);
										Block.setExplosionResistance(id,explostionRes);
									} else {
										Block.defineBlock(id,name,texture,msid,opq,rntype);
										Block.setLightOpacity(id,lightopq);
										Block.setLightLevel(id,lightlvl);
										Block.setExplosionResistance(id,explostionRes);
									}
								}
							}
						} else {
							if(R.isNull(explostionRes)) {
								if(R.isNull(lightlvl)) {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,opq,rntype);
										Block.setDestroyTime(id,destroytime);
									} else {
										Block.defineBlock(id,name,texture,msid,opq,rntype);
										Block.setLightOpacity(id,lightopq);
										Block.setDestroyTime(id,destroytime);
									}
								} else {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,opq,rntype);
										Block.setLightLevel(id,lightlvl);
										Block.setDestroyTime(id,destroytime);
									} else {
										Block.defineBlock(id,name,texture,msid,opq,rntype);
										Block.setLightOpacity(id,lightopq);
										Block.setLightLevel(id,lightlvl);
										Block.setDestroyTime(id,destroytime);
									}
								}
							} else {
								if(R.isNull(lightlvl)) {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,opq,rntype);
										Block.setExplosionResistance(id,explostionRes);
										Block.setDestroyTime(id,destroytime);
									} else {
										Block.defineBlock(id,name,texture,msid,opq,rntype);
										Block.setLightOpacity(id,lightopq);
										Block.setExplosionResistance(id,explostionRes);
										Block.setDestroyTime(id,destroytime);
									}
								} else {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,opq,rntype);
										Block.setLightLevel(id,lightlvl);
										Block.setExplosionResistance(id,explostionRes);
										Block.setDestroyTime(id,destroytime);
									} else {
										Block.defineBlock(id,name,texture,msid,opq,rntype);
										Block.setLightOpacity(id,lightopq);
										Block.setLightLevel(id,lightlvl);
										Block.setExplosionResistance(id,explostionRes);
										Block.setDestroyTime(id,destroytime);
									}
								}
							}
						}
					} else {
						if(R.isNull(destroytime)) {
							if(R.isNull(explostionRes)) {
								if(R.isNull(lightlvl)) {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,opq,rntype);
										Block.setColor(id,color);
									} else {
										Block.defineBlock(id,name,texture,msid,opq,rntype);
										Block.setLightOpacity(id,lightopq);
										Block.setColor(id,color);
									}
								} else {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,opq,rntype);
										Block.setLightLevel(id,lightlvl);
										Block.setColor(id,color);
									} else {
										Block.defineBlock(id,name,texture,msid,opq,rntype);
										Block.setLightOpacity(id,lightopq);
										Block.setLightLevel(id,lightlvl);
										Block.setColor(id,color);
									}
								}
							} else {
								if(R.isNull(lightlvl)) {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,opq,rntype);
										Block.setExplosionResistance(id,explostionRes);
										Block.setColor(id,color);
									} else {
										Block.defineBlock(id,name,texture,msid,opq,rntype);
										Block.setLightOpacity(id,lightopq);
										Block.setExplosionResistance(id,explostionRes);
										Block.setColor(id,color);
									}
								} else {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,opq,rntype);
										Block.setLightLevel(id,lightlvl);
										Block.setExplosionResistance(id,explostionRes);
										Block.setColor(id,color);
									} else {
										Block.defineBlock(id,name,texture,msid,opq,rntype);
										Block.setLightOpacity(id,lightopq);
										Block.setLightLevel(id,lightlvl);
										Block.setExplosionResistance(id,explostionRes);
										Block.setColor(id,color);
									}
								}
							}
						} else {
							if(R.isNull(explostionRes)) {
								if(R.isNull(lightlvl)) {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,opq,rntype);
										Block.setDestroyTime(id,destroytime);
										Block.setColor(id,color);
									} else {
										Block.defineBlock(id,name,texture,msid,opq,rntype);
										Block.setLightOpacity(id,lightopq);
										Block.setDestroyTime(id,destroytime);
										Block.setColor(id,color);
									}
								} else {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,opq,rntype);
										Block.setLightLevel(id,lightlvl);
										Block.setDestroyTime(id,destroytime);
										Block.setColor(id,color);
									} else {
										Block.defineBlock(id,name,texture,msid,opq,rntype);
										Block.setLightOpacity(id,lightopq);
										Block.setLightLevel(id,lightlvl);
										Block.setDestroyTime(id,destroytime);
										Block.setColor(id,color);
									}
								}
							} else {
								if(R.isNull(lightlvl)) {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,opq,rntype);
										Block.setExplosionResistance(id,explostionRes);
										Block.setDestroyTime(id,destroytime);
										Block.setColor(id,color);
									} else {
										Block.defineBlock(id,name,texture,msid,opq,rntype);
										Block.setLightOpacity(id,lightopq);
										Block.setExplosionResistance(id,explostionRes);
										Block.setDestroyTime(id,destroytime);
										Block.setColor(id,color);
									}
								} else {
									if(R.isNull(lightopq)) {
										Block.defineBlock(id,name,texture,msid,opq,rntype);
										Block.setLightLevel(id,lightlvl);
										Block.setExplosionResistance(id,explostionRes);
										Block.setDestroyTime(id,destroytime);
										Block.setColor(id,color);
									} else {
										Block.defineBlock(id,name,texture,msid,opq,rntype);
										Block.setLightOpacity(id,lightopq);
										Block.setLightLevel(id,lightlvl);
										Block.setExplosionResistance(id,explostionRes);
										Block.setDestroyTime(id,destroytime);
										Block.setColor(id,color);
									}
								}
							}
						}
					}	
				}
			}
		}
	}
	removeEffect:function(m,e) {
		if(R.isNull(m)) {
			if(!R.isNull(e))
				Entity.removeEffect(R.playerEnt(), e);
			else 
				Entity.removeAllEffects(R.playerEnt());
		} else {
			if(!R.isNull(e))
				Entity.removeEffect(m, e);
			else 
				Entity.removeAllEffects(m);
		}
	}
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
