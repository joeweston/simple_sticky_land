<template>
  <div id="map-component">
    <map-area-component name="fields" text="fields"></map-area-component>
    <map-area-component name="melvins-barn" text="Melvin's Barn" v-if="hasItem('melvinsBarnKey')"></map-area-component>
    <map-area-component name="cliffs" text="cliffs" v-if="hasItem('cliffsMap')"></map-area-component>
    <button class="cliff-monster">Cliff Monster</button>
    <button class="snow-fields">Snow Fields</button>
    <button class="ice-cave">Ice Cave</button>
    <button class="tundra">Tundra</button>
    <button class="secret-1">?</button>
    <button class="beach">Beach</button>
    <button class="ocean">Ocean</button>
    <button class="deep-ocean">Deep Ocean</button>
  </div>


</template>

<script>
import{ mapActions } from 'vuex';
import { mapGetters } from 'vuex';
import MapAreaComponent from './MapAreaComponent.vue';
export default {
  components: {
    MapAreaComponent
  },
  computed: {...mapGetters([
    'getPlayerHp', "getStillAdventuring", "getInventory"
    ]),
    hpFull(){
      return this.getPlayerHp.current === this.getPlayerHp.max
    },
    canAdventure(){
      return !this.getStillAdventuring && this.hpFull 
    },
  },
  methods: {...mapActions([
      "goAdventure"
    ]),
    hasItem(itemName){
      return this.getInventory.key[itemName].owned;
    },
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$map-size: 400px;
$gap-size: $map-size/60;
$grid-size: ($map-size - $gap-size * 10)/ 10;
#map-component{
  margin: auto;
  padding: $gap-size/2;
  width: $map-size;
  height: $map-size;
  outline: 2px solid black;
  display: grid;
  font-size: 12px;
  gap: $gap-size;
  grid-template-rows: repeat(10, $grid-size);
  grid-template-columns: repeat(10, $grid-size);
  grid-template-areas:
    ".  .  .  tu tu tu tu tu tu  ."
    ".  .  .  .  .  .  ic ic sf sf"
    ".  .  .  .  .  s1  .  .  sf sf"
    ".  .  .  fi fi .  cm cm sf sf"
    ".  .  .  fi fi cl cl .  .  . "
    ".  .  .  fm fm .  be be be  ."
    ".  .  .  .  .  .  oc oc oc oc"
    ".  .  .  .  .  .  oc oc oc oc"
    ".  .  .  .  .  do do do do do"
    ".  .  .  .  .  do do do do do";
  *{
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    outline: none;
    font-family: arial;
    font-size: 12px;
  }
  .fields{
    background-color: rgb(160,250,160);
    grid-area: fi;
  }
  .cliffs{
    background-color: #B6B1C6;
    grid-area: cl;
  }
  .melvins-barn{
    background-color: #e0efbf;
    grid-area: fm;
  }
  .cliff-monster{
    background-color:#ef9156;
    grid-area: cm;
  }
  .snow-fields{
    background-color: #abf2e6;
    grid-area: sf;
  }
  .ice-cave{
    background-color: #637f7c;
    color: white;
    grid-area: ic;
  }
  .secret-1{
    background-color: #f1d2f7;
    grid-area: s1;
  }
  .tundra{
    background-color: #f2fffd;
    grid-area: tu;
  }
  .beach{
    background-color:#fffbe0;
    grid-area: be;
  }
  .ocean{
    background-color: #eafffb;
    grid-area: oc;
  }
  .deep-ocean{
    background-color: #d9e5f9;
    grid-area: do;
  }
}
</style>