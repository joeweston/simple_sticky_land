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
    super(weightedRandom([[200,5],[400,5]]),6,trollAscii, "trollArms", 20, 60);
  }
}
