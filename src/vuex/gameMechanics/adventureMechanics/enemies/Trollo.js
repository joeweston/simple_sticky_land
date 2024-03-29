import Enemy from './Enemy.js';
import helperFunctions from '@/vuex/gameMechanics/helperFunctions.js';
const weightedRandom =  x => helperFunctions.weightedRandom(x);
let trolloAscii = [ '•/OO\\•', '( o  )', 'U uu U', '•U""U•' ];
export default class Trollo extends Enemy{
  constructor(){
    super(weightedRandom([[80,5],[120,5]]),8,trolloAscii, "trollEssence", 20, 40);
  }
}
