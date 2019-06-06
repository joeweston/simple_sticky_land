import Player from '@/vuex/gameMechanics/adventureMechanics/Player.js'
import Adventure from '@/vuex/gameMechanics/adventureMechanics/Adventure.js';
import Fields from '@/vuex/gameMechanics/adventureMechanics/areas/Fields.js';
import Cliffs from '@/vuex/gameMechanics/adventureMechanics/areas/Cliffs.js';
import MelvinsBarn from '@/vuex/gameMechanics/adventureMechanics/areas/MelvinsBarn.js';
export default{
  initialisePlayer(state){
    if(state.persistantState.hasOwnProperty("inventory")){
      state.player = new Player(state.persistantState.inventory);
    }
    else {
      state.player = new Player();
    }
    startRegen(state);
  },
  goAdventure(state, areaName){
    clearInterval(state.regenInterval);
    switch (areaName){
      case "fields":
      state.currentAdventure = new Adventure(new Fields(state.player));
      break;
      case "cliffs":{
      state.currentAdventure = new Adventure(new Cliffs(state.player));
      }
      break;
      case "melvinsBarn":{
      state.currentAdventure = new Adventure(new MelvinsBarn(state.player));
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
  state.currentAdventure.tick();
  state.renderedAscii = state.currentAdventure.area.renderedAscii;
  if (state.currentAdventure.log){
    state.log.push(state.currentAdventure.log);
    state.log.shift();
  }
  if( !state.currentAdventure.stillAdventuring ){
    clearInterval(state.adventureInterval);
    startRegen(state);
  }
}
function regenTick(state){
  state.player.regenerateHealth();
}
function startRegen(state){
  state.regenInterval = setInterval(function(){
    regenTick(state)
  }, 500);
}
