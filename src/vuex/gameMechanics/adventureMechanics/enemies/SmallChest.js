import Enemy from './Enemy.js';
import helperFunctions from '@/vuex/gameMechanics/helperFunctions.js';
const weightedRandom =  x => helperFunctions.weightedRandom(x);
let smallChestAscii = [ 
    "•__•",
    "[^^]"
]
export default class Man extends Enemy{
  constructor(){
    super(0,20,smallChestAscii);
  }
}
