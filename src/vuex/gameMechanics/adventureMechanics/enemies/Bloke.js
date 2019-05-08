import Enemy from './Enemy.js';
import helperFunctions from '@/vuex/gameMechanics/helperFunctions.js';
const weightedRandom =  x => helperFunctions.weightedRandom(x);
let blokeAscii = [ '••O•••', '•/|\\••', '•\\|•\\•', '•/"\\••', '•\\••\\•' ];
export default class Bloke extends Enemy{
  constructor(){
    super(weightedRandom([[100,5],[120,5]]),4,blokeAscii, "brokenBottle", 5);
  }
}
