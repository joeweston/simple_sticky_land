export default class Inventory{
  constructor(){
    this.gold = 0;
    this.currentWeapon = "fists";
    this.currentArmour = "none";
    this.weapons = {
      //fields
      fists: { owned: true, name: "fists", stats: { attack:{base: 10} } },
      brokenBottle: {  owned: false, name: "broken bottle", stats: { attack:{base: 15} } },
    }
    this.armours = {
      none: {owned: true, name: "none", stats:{}},
      //fields
      cowSkin: { owned: false, name: "cow skin", stats: { armour:{flat: 1} } },
    }
    this.passives = {
      //fields
      pigTrotters: {owned: false, name: "pig trotters", stats: {hp: {base: 30 } } },
      pieceOfCandy: {owned: false, name: "piece of candy", stats: {hp: {multiplier: 0.2 } } },
      birdBeak: {owned: false, name: "bird beak", stats: {attack: {base: 3 } } },
      //cliffs
      trollMeat: {owned: false, name: "troll meat", stats: {hp: {flat: 35 } } },
      trollArms: {owned: false, name: "troll arms", stats: {attack: {flat: 5 } } },
      trollEssence: {owned: false, name: "troll essence", stats: {regen: {base: 1 } } },
      trollyWheels: {owned: false, name: "trolly wheels", stats: {attack: {base: 3, flat: 3 } } },
      civicBong: {owned: false, name: "civic bong", stats: {attack: { flat: 6 } } },
      rock: {owned: false, name: "a rock", stats: {attack: { multiplier: 0.2 } } },
      shinyRock: {owned: false, name: "a shiny rock", stats: {attack: { multiplier: 0.1, flat: 1, base: 1 } } },

      //melvin
      melvinsHat: {owned: false, name: "Melvin's hat", stats: {hp: {multiplier: 0.5 } } },
      //red items
      hotCoals:{ owned: false, name: "hot coals", stats: {attack: {multiplier: 0.1 } } },
      ovenMitts: { owned: false, name: "oven mitts", stats: {attack: {multiplier: 0.2 } } },
      burntToast: { owned: false, name: "burnt toast", stats: {attack: {multiplier: 0.3 } } },


      //blue items
      tearsOfJoy:{ owned: false, name: "tears of joy", stats: {hp: {multiplier: 0.1 } } },
      tearsOfAnger: { owned: false, name: "tears of anger", stats: {hp: {multiplier: 0.2 } } },

      //green items
      broccolli:{ owned: false, name: "broccolli", stats: {regen: {base: 1 } } },
      kale: { owned: false, name: "kale", stats: {armour: {multiplier: 0.1 } } },


    }
    this.key = {
      //maps and keys
      cliffsMap: {owned: false, name: "Cliffs Map"},
      melvinsBarnKey: {owned: false, name: "Key to Melvin's Barn"},
      strangeMap: {owned: false, name: "strange map"},



      gregorsNote: {owned: false, name: "Gregor's note"}
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
  getItemName(property){
    return {...this.weapons, ...this.armours, ...this.passives, ...this.key}[property].name;
  }
}


