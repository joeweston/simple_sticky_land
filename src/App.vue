<template>
  <div id="app">
    <div id="content">
      <h1>Simple Sticky Land</h1>
      <div id="adventureNav">
        <ul>
          <li><button @click="changeMenu('adventure')" :disabled="currentMenu==='adventure'">Adventure</button></li>
          <li><button @click="changeMenu('inventory')" :disabled="currentMenu==='inventory'">Inventory</button></li>
          <li><button @click="changeMenu('offerings')" :disabled="currentMenu==='offerings'">Offerings</button></li>
          <li><button @click="changeMenu('options')" :disabled="currentMenu==='options'">Options</button></li>
          <button @click="fullHp">CHEAT</button>
        </ul>
      </div>
      <div>
        
      </div>
      <div class="page-content">
        <hp-bar-component></hp-bar-component>
        <inventory-component v-if="currentMenu==='inventory'"></inventory-component>
        <offerings-component v-if="currentMenu==='offerings'"></offerings-component>
        <options-component  v-if="currentMenu==='options'"></options-component>
        <div v-if="currentMenu==='adventure'">
          <ascii-grid-component v-if="getStillAdventuring"></ascii-grid-component>
          <map-component v-if="!getStillAdventuring"></map-component>
        </div>
      </div>
    </div>
    <log-component></log-component>
  </div>
</template>

<script>

import MapComponent from './components/MapComponent.vue';

import OptionsComponent from './components/OptionsComponent.vue';
import AsciiGridComponent from './components/AsciiGridComponent.vue';
import InventoryComponent from './components/InventoryComponent.vue';
import OfferingsComponent from './components/OfferingsComponent.vue';

import HpBarComponent from './components/HpBarComponent.vue';

import LogComponent from './components/LogComponent.vue';

import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
  name: 'app',
  data(){
    return {
      currentMenu: "adventure",
    };
  },
  components: {
  MapComponent,

    OptionsComponent,
    AsciiGridComponent,
    InventoryComponent,
    OfferingsComponent,

    HpBarComponent,
    LogComponent,
  },
  mounted(){
    this.load();
    this.initialisePlayer();
    this.initialiseOfferings();
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
      "load","goAdventure","initialisePlayer","initialiseOfferings"
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
@mixin important-text{
 font-family: 'Amatic SC', cursive;
 font-size: 30px;
}


@mixin default-text{
  font-family: 'Josefin Slab', serif;
}
*{
  box-sizing: border-box;
}
html, body, #app {
  height: 100%;
  @include default-text;

}

button{
  border: 2px solid black;
  @include important-text;
  outline: none;
  &[disabled]{
    color: #fff;
    background-color: #000;
  }
  &:focus{
    outline: none;
  }
  &:hover:enabled{
    text-shadow: 0px 3px 3px rgba(0,0,200,0.2);
    cursor: pointer;
  }
}
h1{
  @include important-text;
  font-size: 60px;
  line-height: 70px;
  text-align: center;
}
#app {

}
#content{
 padding-bottom: 110px;
}


#adventureNav ul{
  display: flex;
  justify-content: space-around;
  button{
    border-radius: 5px 5px 0 0;
    padding: 0 20px;
  }
}


</style>










