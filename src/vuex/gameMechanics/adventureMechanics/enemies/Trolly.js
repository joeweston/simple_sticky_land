import Enemy from './Enemy.js';
import helperFunctions from '@/vuex/gameMechanics/helperFunctions.js';
const weightedRandom =  x => helperFunctions.weightedRandom(x);
let trollyAscii = [ '••••_', '\\--/ ', 'o""o ' ]
export default class Trolly extends Enemy{
  constructor(){
    super(weightedRandom([[200,5],[200,5]]),0,trollyAscii, "trollyWheels", 100, 60);
  }
}
