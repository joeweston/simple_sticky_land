import Area from './Area.js';
import BuffMelvin from '../enemies/BuffMelvin.js'
import MelvinsBarn3 from './MelvinsBarn3.js'

export default class MelvinsBarn2 extends Area{
  constructor(player){
    super(
      player,
[ '                       _____                                ',
  '                      \\-----\\                               ',
  '               __     | oO|    _                            ',
  '              (  )   (_---_)  ( )   THATS IT                ',
  '              |  \\_ /     \\__/  |     TIME TO GET IT!       ',
  '               \\___         ___/                            ',
  '                   \\  .  . /                                ',
  '                    \\     /                                 ',
  '                     |   |                                  ',
  '                     /   |                                  ',
  '                    / /\\ |                                  ',
  '                   | |  \\ \\                                 ',
  '__________________(__)___(_)________________________________' ],
      [
        [15,0],[15, 0],[15,0],[15, 0],[15,0],[15, 0],[15,0],[15, 0],[15,0]
      ],
      [
        {common: BuffMelvin, uncommon: BuffMelvin, rare: BuffMelvin, position: [5, 5]},
      ],
      new MelvinsBarn3(player)
      );
  }
}