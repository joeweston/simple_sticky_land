import Enemy from './Enemy.js';
import helperFunctions from '@/vuex/gameMechanics/helperFunctions.js';
const weightedRandom =  x => helperFunctions.weightedRandom(x);
let melvinAscii = ["•"];
export default class Melvin extends Enemy{
  constructor(){
    super(400,3,melvinAscii, "gregorsNote", 0, 1);
  }
}
