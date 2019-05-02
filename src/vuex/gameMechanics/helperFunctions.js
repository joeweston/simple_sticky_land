
export default{
/**
 * Chooses a psuedo random item from an array which is weighted such that higher
 * weighted items are more likely to be chosen
 * @param  {Array} pool An array af $arrays.
 *  $array[0] being the item that could be chosen
 *  $array[1] being the weight, higher weights mean better chance
 * @return {Object|null} The object chosen
 */
  weightedRandom(pool){
    let total = 0;
    for(let i in pool){
      total += pool[i][1];
    }
    let rand = this.random(total);
    let sum = 0;
    for(let i in pool){
      sum += pool[i][1];
      if( rand <= sum ) return pool[i][0]
    }
  },
  /**
   * Generates a random integer
   * @param  {Number} max The upper bound - inclusive
   * @return {Number}     The generated number between 1 and max inclusive
   */
  random(max){
    return Math.floor( Math.random() * max + 1);
  },
  minMaxRandom(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
