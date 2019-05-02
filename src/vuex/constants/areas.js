
let fields =[
"                                                            ",
"                                                            ",
"                                                            ",
"                                                            ",
"                                                            ",
"                                                            ",
"____________________________________________________________",
]
let fieldsPositions = [
[ 0, 0],[ 1, 0],[ 2, 0],[ 3, 0],[ 4, 0],[ 5, 0],[ 6, 0],[ 7, 0],[ 8, 0],[ 9 ,0],
[10, 0],[11, 0],[12, 0],[13, 0],[14, 0],[15, 0],[16, 0],[17, 0],[18, 0],[19 ,0],
[20, 0],[21, 0],[22, 0],[23, 0],[24, 0],[25, 0],[26, 0],[27, 0],[28, 0],[29 ,0],
[30, 0],[31, 0],[32, 0],[33, 0],[34, 0],[35, 0],[36, 0],[37, 0],[38, 0],[39 ,0],
[40, 0],[41, 0],[42, 0],[43, 0],[44, 0],[45, 0],[46, 0],[47, 0],[48, 0],[49 ,0],
[50, 0],[51, 0],[52, 0],[53, 0],[54, 0],[55, 0],[56, 0],[57, 0],[58, 0],[59 ,0],
]
const enemies = {
  man: {
    hp: 10,
    sprite:[
      "•[]",
      "--|",
      "•/|"
    ]
  },
  bloke: {
    hp:  20,
    sprite:[
      "\\(]",
      "-\\|",
      "_/|"
    ]
  },
  smallChest: {
    hp: 10,
    sprite: [
      "•__•",
      "[^^]"
    ]
  }
}

const areas = {
  fields:{
    ascii: fields,
    positions: fieldsPositions,
    enemies: [
      {common: "man", uncommon: "bloke", rare: "man", position: [7, 11]},
      {common: "man", uncommon: "bloke", rare: "man", position: [33, 44]},
      {common: "man", uncommon: "bloke", rare: "smallChest", position: [50, 55]},
    ]
  }
}

let renderedArea = fields;
function populateArea(area){
  area = areas[area];
  let enemies = area.enemies.map((val, index, arr)=>{
    let enemy = weightedRandom([[val.common, 6], [val.uncommon, 3], [val.rare, 1]]);
    let position = minMaxRandom(val.position[0], val.position[1]);
    return [enemy, position];
  });
  return enemies;
}
function renderEnemies(grid, area){
  let enemyArr = populateArea(area)
  for (let i = 0; i < enemyArr.length; i++){
    let sprite = enemies[enemyArr[i][0]].sprite;
    console.log(enemies);
    let positions = areas[area].positions;
    let right = positions[enemyArr[i][1]][0];
    let up = positions[enemyArr[i][1]][1];
    grid = updateSprite(grid, sprite, right, up);
  }
  return grid;
}
console.log(renderEnemies(fields, "fields").join("\n"));


function updateSprite(grid, sprite, right, up){
  grid = JSON.parse(JSON.stringify(grid));

  function replaceChars(grid, chars, right , down){
    if ( down >= grid.length){
      return;
    }
    chars = chars.split("");
    let line = grid[down].split("");
    for (let i = 0; i < chars.length; i++){
      if ( chars[i] !== "•" && right + i < line.length){
        line[right + i] =  chars[i];
      }
    }
    grid[down] = line.join("");
  }
  let down = (grid.length - sprite.length) - up;
  for (let i = 0; i < sprite.length; i++){
    replaceChars(grid, sprite[i], right, down + i);
  }
  return grid;
}

/**
 * Chooses a psuedo random item from an array which is weighted such that higher
 * weighted items are more likely to be chosen
 * @param  {Array} pool An array af $arrays.
 *  $array[0] being the item that could be chosen
 *  $array[1] being the weight, higher weights mean better chance
 * @return {Object|null} The object chosen
 */
function weightedRandom(pool){
  let total = 0;
  for(let i in pool){
    total += pool[i][1];
  }
  let rand = random(total);
  let sum = 0;
  for(let i in pool){
    sum += pool[i][1];
    if( rand <= sum ) return pool[i][0]
  }
}
/**
 * Generates a random integer
 * @param  {Number} max The upper bound - inclusive
 * @return {Number}     The generated number between 1 and max inclusive
 */
function random(max){
  return Math.floor( Math.random() * max + 1);
}
function minMaxRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}