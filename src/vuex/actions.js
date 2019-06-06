

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
  },
  initialiseOfferings({commit}){
    commit('initialiseOfferings');
  },
  donateRed({commit}){
    commit('donateRed');
  },
  donateGreen({commit}){
    commit('donateGreen');
  },
  donateBlue({commit}){
    commit('donateBlue');
  },
  gainItems({commit}, items){
    commit('gainItems', items);
  },
}