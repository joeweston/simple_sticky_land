
export default {
  getAsciiGrid(state){
    return state.currentAdventure.area.renderedAscii;
  },
  getCurrentEnemy(state){
    return state.currentAdventure.currentEnemy;
  },
  getFighting(state){
    return state.currentAdventure.fighting
  },
  getPlayerHp(state){
    return state.player.hp
  },
  getPlayerAttack(state){
    return state.player.attack.value;
  },
  getPlayerArmour(state){
    return state.player.armour.value;
  },
  getStillAdventuring(state){
    return state.currentAdventure.stillAdventuring;
  },
  getInventory(state){
    return state.player.inventory;
  },
  getRedFavour(state){
    return state.offerings.red.favour
  },
  getBlueFavour(state){
    return state.offerings.blue.favour
  },
  getGreenFavour(state){
    return state.offerings.green.favour
  },
  getLog(state){
    return state.log;
  }
}
