import Enemy from './Enemy.js';
import helperFunctions from '@/vuex/gameMechanics/helperFunctions.js';
const weightedRandom =  x => helperFunctions.weightedRandom(x);
let pigAscii = [ '••••____••', '^.".^   \\9', '(o O)   /•', '•`•Ww-Ww••' ]
export default class Pig extends Enemy{
  constructor(){
    super(weightedRandom([[40,5],[60,5]]),5,pigAscii, "pigTrotters", 30, 2);
  }
}
