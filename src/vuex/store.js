import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js';
import actions from './actions.js';
import mutations from './mutations.js';
import Inventory from '@/vuex/gameMechanics/adventureMechanics/Inventory.js'


Vue.use(Vuex)
const modules = {
}

const state = {
  player:{
    hp: {max: null, current: null},
    inventory: new Inventory(),
    attack:{value: null},
    armour:{value: null}
  },
  currentAdventure: {
    stillAdventuring: false,
    area:{
      renderedAscii: null,
      fighting: false,
    },
    currentEnemy:{
      exists: false,
      hp: null,
      attack: null,
    },
  },
  offerings:{
    red: {favour: 0},
    green: {favour: 0},
    blue: {favour: 0},
  },

  log:["","","",""],

  persistantState:{
  }

}
export default new Vuex.Store({
  modules,
  state,
  mutations,
  getters,
  actions
});
