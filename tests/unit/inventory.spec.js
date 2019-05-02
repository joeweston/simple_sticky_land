import Player from '@/vuex/gameMechanics/adventureMechanics/Player.js';
describe("basic inventory test", ()=>{
  let player;
  beforeEach(()=>{
    player = new Player();
    player.inventory.weapons.testWeapon = {  owned: false, name: "test weapon", stats: { attack:{base: 15, multiplier: 2} } }
    player.obtainItem("testWeapon")
  })
  it("player is created properly and can obtain test weapon", ()=>{

  });
  it("Player can obtain broken bottle", ()=>{
    expect(player.inventory.weapons.testWeapon.owned).toBe(true);
  });
})
describe("changing weapon test", ()=>{
  let player;
  beforeEach(()=>{
    player = new Player();
    player.inventory.weapons.testWeapon = {  owned: false, name: "test weapon", stats: { attack:{base: 15, multiplier: 2} } }
    player.obtainItem("testWeapon");
    player.changeWeapon("testWeapon");
  })
  it("changeWeapon() doesn't crash for test weapon", ()=>{

  });
  it("players attack base is now 15, multiplier, 3 and value 35", ()=>{
    expect(player.attack.base).toBe(15);
    expect(player.attack.multiplier).toBe(2);
    expect(player.attack.value).toBe(45);
  });
  it("changing weapon back to fists yeilds a base attack of 10, multi 1, and val 10", ()=>{
    player.changeWeapon("fists");
    expect(player.attack.base).toBe(10);
    expect(player.attack.multiplier).toBe(0);
    expect(player.attack.value).toBe(10);
  })
})
describe("changing armour test", ()=>{
  let player;
  beforeEach(()=>{
    player = new Player();
    player.inventory.armours.testArmour = {  owned: false, name: "test armour", stats: { armour:{base: 10, multiplier: 1} } }
    player.obtainItem("testArmour");
    player.changeArmour("testArmour");
  })
  it("changeArmour() doesn't crash for test armour", ()=>{

  });
  it("players armour base is now 15, multiplier, 3 and value 35", ()=>{
    expect(player.armour.base).toBe(10);
    expect(player.armour.multiplier).toBe(1);
    expect(player.armour.value).toBe(20);
  });
  it("changing armour back to none yeilds a base armour of 0, multi 0, and val 0", ()=>{
    player.changeArmour("none");
    expect(player.armour.base).toBe(0);
    expect(player.armour.multiplier).toBe(0);
    expect(player.armour.value).toBe(0);
  })
})
describe("obtaining a passive item test", ()=>{
  let player;
  beforeEach(()=>{
    player = new Player();
    player.inventory.passives.testPassive = {  owned: false, name: "test passive", stats: { attack:{base: 10, multiplier: 1}, hp:{base: 10, multiplier: 0.1}} }
    player.obtainItem("testPassive");
    //player.obtainPassive("testPassive");
  })
  it("obtainitem(passive) doesn't crash for test passive", ()=>{

  });
  it("players attack base is now 15, multiplier, 3 and value 35", ()=>{
    expect(player.attack.base).toBe(20);
    expect(player.attack.multiplier).toBe(1);
    expect(player.attack.value).toBe(40);
  });
  it("players hp base is 110, multi 0.1 and value 121", ()=>{
    expect(player.hp.base).toBe(110);
    expect(player.hp.multiplier).toBe(0.1);
    expect(player.hp.max).toBe(121);
  })
})