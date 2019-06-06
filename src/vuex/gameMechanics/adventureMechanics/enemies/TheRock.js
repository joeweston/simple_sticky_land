import Enemy from './Enemy.js';
import helperFunctions from '@/vuex/gameMechanics/helperFunctions.js';
const weightedRandom =  x => helperFunctions.weightedRandom(x);
let theRockAscii = [ '••.__•••', '•/ . \\••', '/    / \\', '\\_^____/'];
export default class TheRock extends Enemy{
  constructor(){
    super(weightedRandom([[400,6],[600,6]]),4,theRockAscii, "rock", 80,5);
  }
}
