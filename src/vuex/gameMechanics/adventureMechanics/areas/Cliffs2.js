import Area from './Area.js';
import Troll from '../enemies/Troll.js'
import Trolly from '../enemies/Trolly.js'
import LesserTroll from '../enemies/LesserTroll.js'
import Trollo from '../enemies/Trollo.js'

import Cliffs3 from './Cliffs3.js'

import helperFunctions from '@/vuex/gameMechanics/helperFunctions.js';
const weightedRandom =  x => helperFunctions.weightedRandom(x);
export default class Cliffs2 extends Area{
  constructor(player){
    let NextArea = weightedRandom([[Cliffs3, 50], [false, 50]] );
    super(
      player,
[ '                                                            ',
  '                                                            ',
  '                                                            ',
  '                                                            ',
  '                                                            ',
  '                                                            ',
  '                                                            ',
  '                  __________________________                ',
  '                 //\\\\====//\\\\====//\\\\====//\\\\               ',
  '        ________//  \\\\  //  \\\\  //  \\\\  //  \\\\______________',
  '______  \\_ ____  |===\\\\//====\\\\//====\\\\//====|  .           ',
  "     /   \\      _/    ||      ||      ||     \\___  AB   '   ",
  '    |     \\     /     ||      ||      ||         \\    ;     ' ],
      [
        [ 0, 2],[ 1, 2],[ 2, 2],[ 3, 2],[ 4, 2],[ 5, 3],[ 6, 4],[ 7, 5],[ 8, 4],[ 9, 3],
        [10, 3],[11, 3],[12, 3],[13, 3],[14, 3],[15, 3],[16, 3],[17, 3],[18, 3],[19, 3],
        [20, 3],[21, 3],[22, 3],[23, 3],[24, 3],[25, 3],[26, 3],[27, 3],[28, 3],[29, 3],
        [30, 3],[31, 3],[32, 3],[33, 3],[34, 3],[35, 3],[36, 3],[37, 3],[38, 3],[39, 3],
        [40, 3],[41, 3],[42, 3],[43, 3],[44, 3],[45, 3],[46, 3],[47, 3],[48, 3],[49, 3],
        [50, 3],[51, 3],[52, 3],[53, 3],[54, 3],[55, 3],[56, 3],[57, 3],[58, 3],[59, 3],
      ],
      [
        {common: LesserTroll, uncommon: Troll, rare: Trolly, position: [23, 35]},
        {common: LesserTroll, uncommon: Trollo, rare: Trollo, position: [45, 53]},
      ],
      NextArea ? new NextArea(player) : false,
      );
  }
}