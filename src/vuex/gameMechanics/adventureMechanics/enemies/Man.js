import Enemy from './Enemy.js';
import helperFunctions from '@/vuex/gameMechanics/helperFunctions.js';
const weightedRandom =  x => helperFunctions.weightedRandom(x);
let manAscii = [ 
    "•[]",
    "--|",
    "•/|"
]
export default class Man extends Enemy{
  constructor(){
    super(weightedRandom([[10,5],[13,5]]),20,manAscii);
  }
}
