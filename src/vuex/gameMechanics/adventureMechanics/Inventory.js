export default class Inventory{
  constructor(){
    this.gold = 0;
    this.currentWeapon = "fists";
    this.currentArmour = "none";
    this.weapons = {
      fists: { owned: true, name: "fists", stats: { attack:{base: 10} } },
      brokenBottle: {  owned: false, name: "broken bottle", stats: { attack:{base: 15} } }
    }
    this.armours = {
      none: {owned: true, stats:{}},
      woolenJumper: {owned: false},
    }
    this.passives = {

    }
    this.key = {

    }
  }
  hasItem(itemName){
    let itemType;
    if (this.weapons.hasOwnProperty(itemName)){
      itemType = "weapons";
    } else if(this.armours.hasOwnProperty(itemName)){
      itemType = "armours";
    } else if(this.passives.hasOwnProperty(itemName)){
      itemType = "passives";
    } else if(this.key.hasOwnProperty(itemName)){
      itemType = "key";
    }
    if(this[itemType][itemName].owned){
      return true;
    } else {
      return false;
    }
  }

  obtainItem(itemName){
    let itemType;
    if (this.weapons.hasOwnProperty(itemName)){
      itemType = "weapons";
    } else if(this.armours.hasOwnProperty(itemName)){
      itemType = "armours";
    } else if(this.passives.hasOwnProperty(itemName)){
      itemType = "passives";
    } else if(this.key.hasOwnProperty(itemName)){
      itemType = "key";
    }
    if(this[itemType][itemName].owned){
      return false; //already have
    } else{
      this[itemType][itemName].owned = true;
      return itemType;
    }
  }
}


