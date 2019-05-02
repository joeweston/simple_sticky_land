import Inventory from "./Inventory.js";
export default class Player {
  constructor(){
    this.inventory = new Inventory();
    this.spriteA = [
    "•o•",
    "•|\\",
    "/|•"
    ];
    this.spriteB = [
      "•o•",
      "•|•",
      "•|•"
    ];
    this.spriteC = [
      "•o•",
      "/|•",
      "•|\\"
    ],
    this.position = 0;

    this.attack = {
      base: 10,
      flat: 0,
      multiplier: 0,
    }
    this.updateAttack();

    this.hp = {
      base: 100,
      flat: 0,
      multiplier: 0,
    }
    this.updateHp();
    this.hp.current = this.hp.max;

    this.armour = {
      base: 0,
      flat: 0,
      multiplier: 0,
    }
    this.updateArmour();
  }
  updateAttack(){
    this.attack.value = Math.floor(this.attack.base * (this.attack.multiplier + 1)) + this.attack.flat;
  }
  updateHp(){
    this.hp.max = Math.floor(this.hp.base * (this.hp.multiplier + 1)) + this.hp.flat;
  }
  updateArmour(){
    this.armour.value = Math.floor(this.armour.base * (this.armour.multiplier + 1)) + this.armour.flat;
  }
  updateStat(statType){
    switch (statType){
      case "attack":
      this.updateAttack();
      break;
      case "hp":
      this.updateHp();
      break;
      case "armour":
      this.updateArmour()
      break;
    }
  }
  obtainItem(item){
    let itemType = this.inventory.obtainItem(item);
    if (itemType === "passives"){
      this.obtainPassive(item);
    }
  }
  changeWeapon(newWeapon){
    let oldWeaponStats = this.inventory.weapons[this.inventory.currentWeapon].stats
    for (let statType in oldWeaponStats){
      let stats = oldWeaponStats[statType]
      for (let stat in stats){
        this[statType][stat] -= stats[stat];
      }
      this.updateStat(statType);
    }
    let newWeaponStats = this.inventory.weapons[newWeapon].stats
    for (let statType in newWeaponStats){
      let stats = newWeaponStats[statType]
      for (let stat in stats){
        this[statType][stat] += stats[stat];
      }
      this.updateStat(statType);
    }
    this.inventory.currentWeapon = newWeapon;
  }
  changeArmour(newArmour){
    let oldArmourStats = this.inventory.armours[this.inventory.currentArmour].stats
    for (let statType in oldArmourStats){
      let stats = oldArmourStats[statType]
      for (let stat in stats){
        this[statType][stat] -= stats[stat];
      }
      this.updateStat(statType);
    }
    let newArmourStats = this.inventory.armours[newArmour].stats
    for (let statType in newArmourStats){
      let stats = newArmourStats[statType]
      for (let stat in stats){
        this[statType][stat] += stats[stat];
      }
      this.updateStat(statType);
    }
    this.inventory.currentArmour = newArmour;
  }
  obtainPassive(newPassive){
    let newPassiveStats = this.inventory.passives[newPassive].stats
    for (let statType in newPassiveStats){
      let stats = newPassiveStats[statType]
      for (let stat in stats){
        this[statType][stat] += stats[stat];
      }
      this.updateStat(statType)
    }
    this.inventory.currentPassive = newPassive;
  }






}