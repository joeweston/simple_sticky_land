import Area from './Area.js';
import Troll from '../enemies/Troll.js'
import LesserTroll from '../enemies/LesserTroll.js'
import Trollo from '../enemies/Trollo.js'

import Cliffs2 from './Cliffs2.js'
export default class Cliffs extends Area{
  constructor(player){
    super(
      player,
[ '                                                            ',
  '                                                            ',
  '                                                            ',
  '                                                            ',
  '                                           _________________',
  '                                           \\__   .          ',
  '_______                                       \\     . ;     ',
  '  /   /               ________________         \\   \\        ',
  '  ~  /     _____      \\              /          \\   \\  .    ',
  '\\   /      \\ ~ /       \\   c    .   /            |          ',
  '   /        | |         |         _/             |       :  ',
  "  |         | |         |   ''   /              /    *      ",
  '  |         | |         | `     /              /            ' ],
      [
        [ 0, 6],[ 1, 6],[ 2, 6],[ 3, 6],[ 4, 6],[ 5, 6],[ 6, 6],[ 7, 7],[ 8, 8],[ 9 ,8],
        [10, 8],[11, 7],[12, 4],[13, 4],[14, 4],[15, 5],[16, 6],[17, 7],[18, 8],[19 ,7],
        [20, 5],[21, 5],[22, 5],[23, 5],[24, 5],[25, 5],[26, 5],[27, 5],[28, 5],[29 ,5],
        [30, 5],[31, 5],[32, 5],[33, 5],[34, 5],[35, 5],[36, 6],[37, 7],[38, 8],[39 ,9],
        [40,10],[41, 9],[42, 8],[43, 8],[44, 8],[45, 8],[46, 8],[47, 8],[48, 8],[49 ,8],
        [50, 8],[51, 8],[52, 8],[53, 8],[54, 8],[55, 8],[56, 8],[57, 8],[58, 8],[59 ,8],
      ],
      [
        {common: LesserTroll, uncommon: Troll, rare: Troll, position: [23, 35]},
        {common: LesserTroll, uncommon: Trollo, rare: Trollo, position: [45, 53]},
      ],
      new Cliffs2(player),
      );
  }
}