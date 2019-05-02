import Player from '@/vuex/gameMechanics/adventureMechanics/Player.js';
import Enemy from '@/vuex/gameMechanics/adventureMechanics/enemies/Enemy.js';
import Area from '@/vuex/gameMechanics/adventureMechanics/areas/Area.js';
import Adventure from '@/vuex/gameMechanics/adventureMechanics/Adventure.js';
class TestPlayer extends Player{
  constructor(){
    super();
    this.attack = 10;
    this.hp = { max: 100, current: 100 };
  }
}
class WeakEnemy extends Enemy{
  constructor(){
    super(20,20,["O","|","|"],"brokenBottle", 100);
  }
}
class WeakArea extends Area{
  constructor(player){
    super(
      player,
    ["0123456789","0123456789","0123456789"],
    [[ 0, 0],[ 1, 0],[ 2, 0],[ 3, 0],[ 4, 0],[ 5, 0],[ 6, 0],[ 7, 0],[ 8, 0],[ 9 ,0]],
    [{common: WeakEnemy, uncommon: WeakEnemy, rare: WeakEnemy, position: [6, 6]}]
    )
  }
}
describe("adventure that will be won", ()=>{
  let adventure
  beforeEach(() => {
    adventure = new Adventure(new WeakArea(new TestPlayer()));
  });
  it('weak area is rendered correctly', ()=>{
    expect(adventure.area.renderedAscii).toEqual([ '0o2345O789', '0|\\345|789', '/|2345|789' ]);
  });
  it('weak area is rendered correctly after one sucessfull tick', ()=>{
    adventure.tick();
    expect(adventure.area.renderedAscii).toEqual( ["01o345O789", "01|345|789", "01|345|789"]);
  });
  it('weak area is rendered correctly after two sucessfull ticks', ()=>{
    adventure.tick().tick();
    expect(adventure.area.renderedAscii).toEqual( ["012o45O789", "01/|45|789", "012|\\5|789"]);
  });
  it('weak area is rendered correctly and fighting is true three sucessfull ticks', ()=>{
    adventure.tick().tick().tick();
    expect(adventure.area.renderedAscii).toEqual( ["0123o5O789", "0123|5|789", "0123|5|789"]);
    expect(adventure.fighting).toEqual(true);
  });
  it('After four ticks, player does not move forwoud as they are in fight', ()=>{
    adventure.tick().tick().tick().tick();
    expect(adventure.area.renderedAscii).toEqual( ["0123o5O789", "0123|5|789", "0123|5|789"]);
  });
  describe("after four ticks", ()=>{
    let adventure;
    beforeAll(()=>{
      adventure = new Adventure(new WeakArea(new TestPlayer()));
      adventure.tick().tick().tick().tick();
    })
    it("player does not move forwoud as they are in fight'",()=>{
      expect(adventure.area.renderedAscii).toEqual( ["0123o5O789", "0123|5|789", "0123|5|789"]);
    })
    it("current enemy has 10hp after losing 10",()=>{
      expect(adventure.currentEnemy.hp).toBe(10);
    })
    it("current playerhas 10hp after losing 10",()=>{
      expect(adventure.player.hp.current).toBe(80);
    })
  })
  describe("after 5 ticks", ()=>{
    let adventure;
    beforeAll(()=>{
      adventure = new Adventure(new WeakArea(new TestPlayer()));
      adventure.tick().tick().tick().tick().tick();
    })
    it("Enemy no longer rendered",()=>{
      expect(adventure.area.renderedAscii).toEqual(["0123o56789", "0123|56789", "0123|56789"]);
    })
    it("current enemy is false, as he has died",()=>{
      expect(adventure.currentEnemy).toBe(false);
    })
    it("current player still has 80hp as the enemy died",()=>{
      expect(adventure.player.hp.current).toBe(80);
    })
    it("fighting is false",()=>{
      expect(adventure.fighting).toBe(false);
    })
    it("enemies array is empty", ()=>{
      expect(adventure.area.enemies).toEqual([]);
    })
    it("itemDrops contains brokenBottle", ()=>{
      expect(adventure.itemDrops).toEqual(["brokenBottle"]);
    })
  })
  describe("after 9 ticks", ()=>{
    let adventure;
    beforeAll(()=>{
      adventure = new Adventure(new WeakArea(new TestPlayer()));
      for(let i = 0; i < 9;i++){
        adventure.tick();
      }
    })
    it("player is one away from end of screen",()=>{
      expect(adventure.area.renderedAscii).toEqual(["01234567o9", "01234567|9", "01234567|9"]);
    })
    it("adventure is not over",()=>{
      expect(adventure.stillAdventuring).toBe(true);
    })
  })
  describe("after 10 ticks", ()=>{
    let adventure;
    beforeAll(()=>{
      adventure = new Adventure(new WeakArea(new TestPlayer()));
      for(let i = 0; i < 10;i++){
        adventure.tick();
      }
    })
    it("player is at end of screen",()=>{
      expect(adventure.area.renderedAscii).toEqual(["012345678o", "012345678|", "01234567/|"]);
    })
    it("adventure is not over",()=>{
      expect(adventure.stillAdventuring).toBe(true);
    })
  })
  describe("after 11 ticks", ()=>{
    let adventure;
    beforeAll(()=>{
      adventure = new Adventure(new WeakArea(new TestPlayer()));
      for(let i = 0; i < 11;i++){
        adventure.tick();
      }
    })
    it("player is still at end of screen",()=>{
      expect(adventure.area.renderedAscii).toEqual(["012345678o", "012345678|", "01234567/|"]);
    })
    it("adventure is over",()=>{
      expect(adventure.stillAdventuring).toBe(false);
    })
  })
});










