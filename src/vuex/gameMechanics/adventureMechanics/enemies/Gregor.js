import Enemy from './Enemy.js';
import helperFunctions from '@/vuex/gameMechanics/helperFunctions.js';
const weightedRandom =  x => helperFunctions.weightedRandom(x);
let gregorAscii = [ '••,"",',
  '•/Oo \\',
  '/..  |',
  '~~~) )',
  '\\_^ _/',
  '•(  )|',
  '•| | |',
  '/ /  )',
  'WW  (•',
  '••|  )',
  '••| /•',
  '•_| \\•',
  'C____)' ]
export default class Gregor extends Enemy{
  constructor(){
    super(2000,4,gregorAscii);
  }
}
