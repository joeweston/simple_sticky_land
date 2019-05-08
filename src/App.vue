<template>
  <div id="app">
    <h1>RPG</h1>
    <div class="page-content">
      <options-component></options-component>
      <ascii-grid-component></ascii-grid-component>
    </div>
    <button :disabled="!canAdventure" @click="goAdventure('cliffs')">goAdventure</button>
    <inventory-component></inventory-component>
  </div>
</template>

<script>

import OptionsComponent from './components/OptionsComponent.vue';
import AsciiGridComponent from './components/AsciiGridComponent.vue';
import InventoryComponent from './components/InventoryComponent.vue';

import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
  name: 'app',
  components: {
    OptionsComponent,
    AsciiGridComponent,
    InventoryComponent,

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
  methods: mapActions([
    "load","goAdventure","initialisePlayer",
  ])
}
</script>

<style lang="scss">
@import './assets/reset';

*{
  box-sizing: border-box;
}



</style>










