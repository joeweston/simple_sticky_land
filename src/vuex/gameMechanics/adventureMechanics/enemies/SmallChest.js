import Enemy from './Enemy.js';
import helperFunctions from '@/vuex/gameMechanics/helperFunctions.js';
const weightedRandom =  x => helperFunctions.weightedRandom(x);
let smallChestAscii = [ 
    "•__•",
    "[^^]"
]
export default class SmallChest extends Enemy{
  constructor(){
    super(100, 0, smallChestAscii, "cliffsMap", 100, 100);
  }
}
