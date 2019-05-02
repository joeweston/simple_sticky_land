<template>
  <div id="app">
    <h1>RPG</h1>
    <div class="page-content">
      <options-component></options-component>
      <ascii-grid-component></ascii-grid-component>
    </div>
    <button @click="goAdventure">goAdventure</button>
  </div>
</template>

<script>

import OptionsComponent from './components/OptionsComponent.vue';
import AsciiGridComponent from './components/AsciiGridComponent.vue';

import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
  name: 'app',
  components: {
    OptionsComponent,
    AsciiGridComponent

  },
  mounted(){
    this.load();
  },
  computed: mapGetters([
    "getAsciiGrid"
  ]),
  methods: mapActions([
    "load","goAdventure"
  ])
}
</script>

<style lang="scss">
@import './assets/reset';

*{
  box-sizing: border-box;
}



</style>










