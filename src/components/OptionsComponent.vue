<template>
  <div>
    <button  @click="save"> Save </button>
    <button @click="gainFieldsItems">Gain Fields Items</button>
    <button @click="gainCliffsItems">Gain Cliffs Items</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods:{
    ...mapActions([
      'save', 'gainItems',"changeWeapon","changeArmour"
    ]),
    gainFieldsItems(){
      this.gainItems(['brokenBottle','cowSkin','pigTrotters','pieceOfCandy','birdBeak','cliffsMap','melvinsBarnKey'])
      this.changeWeapon('brokenBottle');
      this.changeArmour('cowSkin');
    },
    gainCliffsItems(){
      this.gainFieldsItems();
      this.gainItems(['trollMeat','trollArms','trollEssence','trollyWheels','civicBong','rock','shinyRock'])
    },
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
