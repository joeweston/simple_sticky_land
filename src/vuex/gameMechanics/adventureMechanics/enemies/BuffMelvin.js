import Enemy from './Enemy.js';
import helperFunctions from '@/vuex/gameMechanics/helperFunctions.js';
const weightedRandom =  x => helperFunctions.weightedRandom(x);
let melvinAscii = ["•"];
export default class BuffMelvin extends Enemy{
  constructor(){
    super(1400,4,melvinAscii, "gregorsNote", 0, 1);
  }
}
