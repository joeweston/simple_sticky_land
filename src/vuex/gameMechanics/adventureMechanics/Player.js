import Inventory from "./Inventory.js";
export default class Player {
  constructor(inventory=new Inventory()){
    this.position = 0;
    this.inventory = inventory;
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

    this.regen = {
      base: 1,
    }
    this.updateRegen();
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
  updateRegen(){
    this.regen.value = this.regen.base;
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
      case "regen":
      this.updateRegen();
      break;
    }
  }
  obtainItem(item){
    let itemType = this.inventory.obtainItem(item);
    if (itemType === "passives"){
      this.obtainPassive(item);
    }
    return item;
  }
  obtainItems(items){
    for(let item of items){
      this.obtainItem(item);
    }
    return items;
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
  regenerateHealth(){
    let newHealth = this.hp.current + this.regen.value;
    if (newHealth > this.hp.max){
      this.hp.current = this.hp.max;
    } else{
      this.hp.current = newHealth;
    }
  }






}