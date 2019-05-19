import Area from './Area.js';
import Birds from '../enemies/Birds.js'

import Fields4 from './Fields4.js';

import helperFunctions from '@/vuex/gameMechanics/helperFunctions.js';
const weightedRandom =  x => helperFunctions.weightedRandom(x);

export default class Fields3 extends Area{
  constructor(player){
    let NextArea = weightedRandom([[Fields4, 50], [false, 50]] );
    super(
      player,
[ '                                                            ',
  '                                                            ',
  '                                   ___                      ',
  '        ,--,                      (   \\                     ',
  '       (    )       _____       (______)                    ',
  '      (_______)    (     \\_____               ,--,          ',
  '                  (            ),__          (    )         ',
  "                 (_________________)        '      ),       ",
  '                                           (        _)      ',
  '                                             \\\\ ___)        ',
  '                                              \\  |          ',
  '                                               | |          ',
  '_______________________________________________| |__________' ],
      [
        [ 0, 0],[ 1, 0],[ 2, 0],[ 3, 0],[ 4, 0],[ 5, 0],[ 6, 0],[ 7, 0],[ 8, 0],[ 9 ,0],
        [10, 0],[11, 0],[12, 0],[13, 0],[14, 0],[15, 0],[16, 0],[17, 0],[18, 0],[19 ,0],
        [20, 2],[21, 4],[22, 6],[23, 8],[24, 8],[25, 8],[26, 6],[27, 4],[28, 2],[29 ,0],
        [30, 0],[31, 0],[32, 0],[33, 0],[34, 0],[35, 0],[36, 0],[37, 0],[38, 0],[39 ,0],
        [40, 0],[41, 0],[42, 0],[43, 0],[44, 0],[45, 0],[46, 0],[47, 0],[48, 0],[49 ,0],
        [50, 0],[51, 0],[52, 0],[53, 0],[54, 0],[55, 0],[56, 0],[57, 0],[58, 0],[59 ,0],
      ],
      [
        {common: Birds, uncommon: Birds, rare: Birds, position: [25, 25]},
      ],
      NextArea ? new NextArea(player) : false,
      );
  }
}