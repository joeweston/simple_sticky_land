import Area from './Area.js';
import MelvinTheSnake from '../enemies/MelvinTheSnake.js'

export default class MelvinsBarn3 extends Area{
  constructor(player){
    super(
      player,
[ '                       _____                                ',
  '                      \\-----\\                               ',
  '                      | OO|                                 ',
  '                     (_---_)                                ',
  '                       (  )       WOO! HISS! SPLURT!        ',
  '                       (  )                                 ',
  '                      (  )                                  ',
  '                       (  )        |                        ',
  '                        (  )      ()                        ',
  '                        (  )     ( )                        ',
  '                      (  )      (  )                        ',
  '                     (  )______(  )                         ',
  '______________________(__________)__________________________' ],
      [
        [16, 0],[17,0],[18, 0],[19,0],[20, 0],
        [20, 1],[20, 2],[20, 3],[20, 4],[20, 5],[20, 6],[20, 7],
      ],
      [
        {common: MelvinTheSnake, uncommon: MelvinTheSnake, rare: MelvinTheSnake, position: [5, 5]},
      ],
      );
  }
}