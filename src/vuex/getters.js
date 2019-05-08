
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
  getStillAdventuring(state){
    return state.currentAdventure.stillAdventuring;
  },
  getInventory(state){
    return state.player.inventory;
  }
}
