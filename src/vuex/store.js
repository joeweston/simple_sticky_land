import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js';
import actions from './actions.js';
import mutations from './mutations.js';
import areaAscii from './constants/areaAscii.js';

Vue.use(Vuex)
const modules = {
}
const state = {
  area: areaAscii.fields,
  renderedArea: areaAscii.fields,
  gridPositions: areaAscii.fieldsPositions,
  playerPos: 0,
  adventuring: false,

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
