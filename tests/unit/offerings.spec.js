import Player from '@/vuex/gameMechanics/adventureMechanics/Player.js';
import Offerings from '@/vuex/gameMechanics/adventureMechanics/Offerings.js';
describe("Basic Offerings Test", ()=>{
  let player;
  let offerings;
  beforeEach(()=>{
    player = new Player();
    offerings = new Offerings();
  });
  it("initialises properly", ()=>{

  });
  it("donating to red 1000 gold", ()=>{
    expect( offerings.donateRed(1000) ).toEqual( ["hotCoals", "ovenMitts"] );
  });
});
describe("Player with 1000 gold donates to red", ()=>{
  let player;
  let offerings;
  beforeEach(()=>{
    player = new Player();
    player.inventory.gold = 1000;
    offerings = new Offerings();
    player.obtainItems( offerings.donateRed(player.inventory.gold) );
    player.inventory.gold = 0;
  });
  it("donating to red 1000 gold", ()=>{
    expect(player.inventory.hasItem("ovenMitts")).toBe(true);
  });
});