import helperFunctions from '@/vuex/gameMechanics/helperFunctions.js';
const weightedRandom =  x => helperFunctions.weightedRandom(x);
const minMaxRandom =  (x,y) => helperFunctions.minMaxRandom(x,y);
export default class Area{
  constructor(player, ascii, positions, enemyPool, nextArea=false){
    this.ascii = ascii;
    this.positions = positions;
    this.player = player;
    this.nextArea = nextArea;
    this.populateArea(enemyPool);
    this.renderEnemies();
    this.renderPlayer();
  }
  populateArea(enemyPool){
    this.enemies = enemyPool.map((val, index, arr)=>{
      let enemy = weightedRandom([[val.common, 6], [val.uncommon, 3], [val.rare, 1]]);
      let position = minMaxRandom(val.position[0], val.position[1]);
      return [new enemy, position];
    });
  }

  updateSprite(ascii, sprite, right, up){
    ascii = JSON.parse(JSON.stringify(ascii));

    function replaceChars(ascii, chars, right , down){
      if ( down >= ascii.length){
        return;
      }
      chars = chars.split("");
      let line = ascii[down].split("");
      for (let i = 0; i < chars.length; i++){
        if ( chars[i] !== "•" && right + i < line.length){
          line[right + i] =  chars[i];
        }
      }
      ascii[down] = line.join("");
    }
    let down = (ascii.length - sprite.length) - up;
    for (let i = 0; i < sprite.length; i++){
      replaceChars(ascii, sprite[i], right, down + i);
    }
    return ascii;
  }
  renderEnemies(){
    let ascii = this.ascii;
    for (let i = 0; i < this.enemies.length; i++){
      let sprite = this.enemies[i][0].sprite;
      let right = this.positions[this.enemies[i][1]][0];
      let up = this.positions[this.enemies[i][1]][1];
      ascii = this.updateSprite(ascii, sprite, right, up);
    }
    this.renderedEnemyAscii =  ascii;
  }
  renderPlayer(){
    let ascii = this.renderedEnemyAscii;
    let sprite;
    if (this.player.position % 4 === 0){
      sprite = this.player.spriteA;
    } else if (this.player.position % 4 === 2){
      sprite = this.player.spriteC;
    } else {
      sprite = this.player.spriteB;
    }
    let right = this.positions[this.player.position][0];
    let up = this.positions[this.player.position][1];
    this.renderedAscii = this.updateSprite(ascii, sprite, right, up);
  }
  updateAscii(){
    this.renderEnemies();
    this.renderPlayer()
  }
  enemyDie(){
    this.enemies.shift();
    this.updateAscii();
  }
}