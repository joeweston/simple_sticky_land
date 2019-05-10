import Enemy from './Enemy.js';
import helperFunctions from '@/vuex/gameMechanics/helperFunctions.js';
const weightedRandom =  x => helperFunctions.weightedRandom(x);
let manAscii = [ '_O_', '•|•', '/•\\' ]
export default class Man extends Enemy{
  constructor(){
    super(weightedRandom([[40,5],[60,5]]),3,manAscii, "pieceOfCandy", 20, 12);
  }
}
