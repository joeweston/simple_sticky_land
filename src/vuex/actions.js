

export default {
  save({commit}){
    commit('save');
  },
  load({commit}){
    commit('load');
  },
  goAdventure({commit}, areaName){
    commit('goAdventure', areaName);
  },
  initialisePlayer({commit}){
    commit('initialisePlayer');
  },
  changeWeapon({commit},newWeapon){
    commit('changeWeapon', newWeapon);
  },
  changeArmour({commit},newArmour){
    commit('changeArmour', newArmour);
  }
}