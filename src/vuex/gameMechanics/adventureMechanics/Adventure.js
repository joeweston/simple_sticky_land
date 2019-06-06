import helperFunctions from '@/vuex/gameMechanics/helperFunctions.js';
const weightedRandom =  x => helperFunctions.weightedRandom(x);
export default class Adventure{
  constructor(area){ 
    this.area = area;
    this.player = this.area.player;
    this.player.position = 0;
    this.fighting = false;
    this.stillAdventuring = true;
    this.alive = true;
    this.itemDrops = [];
    this.goldDrops = 0;
    this.findCurrentEnemy();
    this.log = false; //false if no message
  }
  resetAdventure(){
    this.area = this.area.nextArea;
    this.player.position = 0;
    this.findCurrentEnemy();
  }
  playerMove(){
    this.area.player.position += 1;
    this.area.updateAscii()
  }
  advanceFight(){
    this.currentEnemy.hp -= this.player.attack.value;
    if (this.currentEnemy.hp <= 0 ){
      this.fighting = false;
      let itemDrop = this.getItemDrop();
      this.getGoldDrop();
      this.log = `${this.currentEnemy.name} has been defeated, you get ${this.currentEnemy.goldDrop} gold.`
      if (itemDrop){
        this.getItem(itemDrop);
        let itemString = this.itemDrops[this.itemDrops.length - 1];
        this.log += `  You found the ${this.player.inventory.getItemName(itemString)}!`;
      }
      this.area.enemyDie();
      this.findCurrentEnemy();
      return;
    }
    if (this.player.armour.value >= this.currentEnemy.attack){
      return;
    }
    this.player.hp.current -= (this.currentEnemy.attack - this.player.armour.value);
    if ( this.player.hp.current <= 0){
      this.log = "You have been defeated!";
      this.stillAdventuring = false;
      this.player.position = 0;
      return;
    }
  }
  findCurrentEnemy(){
    if(this.area.enemies.length === 0){
      this.currentEnemy = false;
    } else {
      this.currentEnemy = this.area.enemies[0][0];
    }
  }
  tick(){
    this.log = false; //Old message persists
    if (this.fighting){
      this.advanceFight();
      return this;
    }
    if (this.player.position +2 ===  this.area.positions.length) {
      if (this.area.nextArea){  //another area after so load new
        this.resetAdventure();
        return;
      }
      //adventure succesfully finished
      this.stillAdventuring = false;
      this.player.position = 0;
      for (let item of this.itemDrops){
        this.player.obtainItem(item);
      }
      this.player.inventory.gold += this.goldDrops;
      this.log = "You completed the adventure."
      return this;
    }
    this.playerMove();
    if (this.currentEnemy && this.area.enemies[0][1] === this.player.position + 3){
      this.fighting = true;
      this.log = `You are fighting ${this.currentEnemy.name}`;
    }
    return this;
  }
  getItemDrop(){
    let itemName = this.currentEnemy.itemDrop;
    if(!itemName){
      return false;
    }
    if (this.itemDrops.includes(itemName)){
      return false;
    }
    if (!this.player.inventory.hasItem(itemName)){
      return weightedRandom([[itemName, this.currentEnemy.itemDropPercent], [false, 100 - this.currentEnemy.itemDropPercent]] );
    }
    return false;
  }
  getItem(itemName){
    this.itemDrops.push(itemName);
  }
  getGoldDrop(){
    this.goldDrops += this.currentEnemy.goldDrop;
  }

}



