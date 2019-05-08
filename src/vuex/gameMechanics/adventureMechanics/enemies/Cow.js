import Enemy from './Enemy.js';
import helperFunctions from '@/vuex/gameMechanics/helperFunctions.js';
const weightedRandom =  x => helperFunctions.weightedRandom(x);
let cowAscii = [ '•__••••••••', "(Oo)-----/'", '(_ ) \\__ |•', '•••||--w||•' ];
export default class Cow extends Enemy{
  constructor(){
    super(weightedRandom([[110,5],[150,5]]),2,cowAscii, "cowSkin", 5);
  }
}
