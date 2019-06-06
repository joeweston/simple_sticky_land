import Enemy from './Enemy.js';
import helperFunctions from '@/vuex/gameMechanics/helperFunctions.js';
const weightedRandom =  x => helperFunctions.weightedRandom(x);
let melvinAscii = ["•"];
export default class MelvinTheSnake extends Enemy{
  constructor(){
    super(530,7,melvinAscii, "melvinsHat", 100, 100);
  }
}
