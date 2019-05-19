<template>
  <div id="app">
    <h1>RPG</h1>
    <div id="mainNav">
      <ul>
        <li><button @click="changeMenu('main')" :disabled="currentMenu==='main'">Main</button></li>
        <li><button @click="changeMenu('inventory')" :disabled="currentMenu==='inventory'">Inventory</button></li>
        <li><button @click="changeMenu('options')" :disabled="currentMenu==='options'">Options</button></li>
      </ul>
    </div>
    <div>
      
    </div>
    <div class="page-content">
      <inventory-component v-if="currentMenu==='inventory'"></inventory-component>
      <options-component  v-if="currentMenu==='options'"></options-component>
      <hp-bar-component></hp-bar-component>
      <div v-if="currentMenu==='main'">
        <ascii-grid-component></ascii-grid-component>
        <button :disabled="!canAdventure" @click="goAdventure('fields')">fields</button>
        <button :disabled="!canAdventure" @click="goAdventure('cliffs')">cliffs</button>
        <button @click="fullHp">CHEAT</button>
      </div>
    </div>
  </div>
</template>

<script>

import OptionsComponent from './components/OptionsComponent.vue';
import AsciiGridComponent from './components/AsciiGridComponent.vue';
import InventoryComponent from './components/InventoryComponent.vue';

import HpBarComponent from './components/HpBarComponent.vue';

import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
  name: 'app',
  data(){
    return {
      currentMenu: "main",
    };
  },
  components: {
    OptionsComponent,
    AsciiGridComponent,
    InventoryComponent,

    HpBarComponent,
  },
  mounted(){
    this.load();
    this.initialisePlayer();
  },
  computed: {...mapGetters([
      'getPlayerHp', "getStillAdventuring"
    ]),
    hpFull(){
      return this.getPlayerHp.current === this.getPlayerHp.max
    },
    canAdventure(){
      return !this.getStillAdventuring && this.hpFull 
    }
  },
  methods: {...mapActions([
      "load","goAdventure","initialisePlayer",
    ]),
    fullHp(){
      this.getPlayerHp.current = this.getPlayerHp.max;
    },
    changeMenu(newMenu){
      this.currentMenu = newMenu;
    }
 }
}
</script>

<style lang="scss">
@import './assets/reset';

*{
  box-sizing: border-box;
}
#mainNav ul{
  display: flex;
}



</style>










