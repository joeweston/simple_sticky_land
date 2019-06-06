import Enemy from './Enemy.js';
import helperFunctions from '@/vuex/gameMechanics/helperFunctions.js';
const weightedRandom =  x => helperFunctions.weightedRandom(x);
let johnDwaneAscii = [ '••.__•••', '•/ . \\••', '/    / \\', '\\_^____/'];
export default class JohnDwane extends Enemy{
  constructor(){
    super(weightedRandom([[800,6],[920,7]]),4,johnDwaneAscii, "shinyRock", 80,5);
  }
}
