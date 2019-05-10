import Enemy from './Enemy.js';
import helperFunctions from '@/vuex/gameMechanics/helperFunctions.js';
const weightedRandom =  x => helperFunctions.weightedRandom(x);
let trollAscii = [ "'.__.'•",
  '(o o )•',
  '(`~`_)•',
  '(\\. ./)',
  '(]/ /(]',
  '•/ / \\•',
  'c_) C_)' ]
export default class Troll extends Enemy{
  constructor(){
    super(weightedRandom([[100,5],[200,5]]),5,trollAscii, "trollArms", 20, 60);
  }
}
