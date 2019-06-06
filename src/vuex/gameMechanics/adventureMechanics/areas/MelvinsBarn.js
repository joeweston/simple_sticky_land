import Area from './Area.js';
import Melvin from '../enemies/Melvin.js'

import MelvinsBarn2 from './MelvinsBarn2.js'

export default class MelvinsBarn extends Area{
  constructor(player){
    super(
      player,
[ '                                                            ',
  '                                                            ',
  '                                GET OUT OF HERE!            ',
  '                                                            ',
  '                       _____                                ',
  '                      \\-----\\                               ',
  '                    (\\| ><|                                 ',
  '                    /-(_-__)                                ',
  '                   /  |   |                                 ',
  '                  /   /   |                                 ',
  '                 /   / /\\ |                                 ',
  '                /   | |  \\ \\                                ',
  '______________///__(__)___(_)_______________________________' ],
      [
        [ 0, 0],[ 1, 0],[ 2, 0],[ 3, 0],[ 4, 0],[ 5, 0],[ 6, 0],[ 7, 0],[ 8, 0],[ 9 ,0],
        [10, 0],[11, 0],[12, 0],[13, 0],[14, 0],[15, 0],[15, 0]
      ],
      [
        {common: Melvin, uncommon: Melvin, rare: Melvin, position: [15, 15]},
      ],
      new MelvinsBarn2(player)
      );
  }
}