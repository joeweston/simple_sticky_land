import Enemy from './Enemy.js';
import helperFunctions from '@/vuex/gameMechanics/helperFunctions.js';
const weightedRandom =  x => helperFunctions.weightedRandom(x);
let lesserTrollAscii = [ '••__••', '•/..\\•', '(`~` )', "•U''U•", '••UU••' ]
export default class LesserTroll extends Enemy{
  constructor(){
    super(weightedRandom([[60,5],[100,5]]),5,lesserTrollAscii,"trollMeat", 25, 7);
  }
}
