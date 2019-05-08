<template>
  <div>
    <div>
      <h3>Weapons:</h3>
      <item-component name="fists" type="weapons"></item-component>
      <item-component name="brokenBottle" type="weapons"></item-component>
    </div>
    <div>
      <h3>Armours:</h3>
      <item-component name="cowSkin" type="armours"></item-component>
    </div>
    <div>
      <h3>Passives:</h3>
      <item-component name="pigTrotters" type="passives"></item-component>
      <item-component name="pieceOfCandy" type="passives"></item-component>
    </div>
  </div>


</template>

<script>
import { mapGetters } from 'vuex';
import ItemComponent from './ItemComponent.vue';
export default {
  components: {
    ItemComponent,
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
code{
  font-family: "Courier New", Courier, monospace;
}
</style>