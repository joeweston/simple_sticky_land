import helperFunctions from '@/vuex/gameMechanics/helperFunctions.js';
const weightedRandom =  x => helperFunctions.weightedRandom(x);
export default class Enemy{
  constructor(hp, attack, sprite, itemDrop, itemDropPercent){
    this.hp = hp;
    this.attack = attack;
    this.sprite = sprite;
    this.itemDrop = itemDrop;
    this.itemDropPercent = itemDropPercent;
  }

}