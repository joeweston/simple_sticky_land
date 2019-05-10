import Enemy from './Enemy.js';
import helperFunctions from '@/vuex/gameMechanics/helperFunctions.js';
const weightedRandom =  x => helperFunctions.weightedRandom(x);
let birdsAscii = ["v•","•v"]
export default class Birds extends Enemy{
  constructor(){
    super(300,1,birdsAscii, "pigTrotters", 20, 2);
  }
}
