import Enemy from './Enemy.js';
import helperFunctions from '@/vuex/gameMechanics/helperFunctions.js';
const weightedRandom =  x => helperFunctions.weightedRandom(x);
let blokeAscii = [ 
    "\\(]",
    "-\\|",
    "_/|"
]
export default class Man extends Enemy{
  constructor(){
    super(weightedRandom([[15,5],[23,5]]),13,blokeAscii);
  }
}
