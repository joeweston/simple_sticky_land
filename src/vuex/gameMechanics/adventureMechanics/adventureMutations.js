import Player from '@/vuex/gameMechanics/adventureMechanics/Player.js'
import Adventure from '@/vuex/gameMechanics/adventureMechanics/Adventure.js';
import Fields from '@/vuex/gameMechanics/adventureMechanics/areas/Fields.js';
import Cliffs from '@/vuex/gameMechanics/adventureMechanics/areas/Cliffs.js';
import Cliffs2 from '@/vuex/gameMechanics/adventureMechanics/areas/Cliffs2.js';
export default{
  initialisePlayer(state){
    if(state.persistantState.hasOwnProperty("inventory")){
      state.player = new Player(state.persistantState.inventory);
    }
    else {
      state.player = new Player();
    }
    regenTick(state);
  },
  goAdventure(state, areaName){
    switch (areaName){
      case "fields":
      state.currentAdventure = new Adventure(new Fields(state.player));
      break;
      case "cliffs":{
      state.currentAdventure = new Adventure(new Cliffs(state.player));
      }
      break;
      case "cliffs2":{
      state.currentAdventure = new Adventure(new Cliffs2(state.player));
      }
      break;
    }
    state.adventureInterval = setInterval(function(){
      adventureTick(state);
    }, 50)
  },
  changeWeapon(state, newWeapon){
    state.player.changeWeapon(newWeapon);
  },
  changeArmour(state, newArmour){
    state.player.changeArmour(newArmour);
  }

}

function adventureTick(state){
  clearInterval(state.regenInterval);
  state.currentAdventure.tick();
  state.renderedAscii = state.currentAdventure.area.renderedAscii;
  if( !state.currentAdventure.stillAdventuring ){
    clearInterval(state.adventureInterval);
    regenTick(state);
  }
}
function regenTick(state){
  state.regenInterval = setInterval(function(){
    state.player.regenerateHealth();
  }, 500);
}
function updateStoreState(state){

}