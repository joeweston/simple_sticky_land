import Enemy from './Enemy.js';
import helperFunctions from '@/vuex/gameMechanics/helperFunctions.js';
const weightedRandom =  x => helperFunctions.weightedRandom(x);
let barryScottAscii = [ '••O••', '•/|\\•', '/•|•\\', '••|••', '•|"|•', '•|•|•', '_|•|_' ]
export default class BarryScott extends Enemy{
  constructor(){
    super(weightedRandom([[400,5],[600,5]]),7,barryScottAscii, "civicBong", 20, 12);
  }
}
