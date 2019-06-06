<template>
  <button @click="changeWeapon(name)" :disabled="isEquipped">
  <item-component
  v-if="hasItem"
  :name="name" type="weapons"
  ></item-component>
  </button>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
import ItemComponent from './ItemComponent.vue';
export default {
  components: {
    ItemComponent
  },
  props:{
    name: String,
  },
  computed: {...mapGetters([
      'getInventory'
    ]),
    isEquipped(){
      return this.getInventory.currentWeapon === this.name
    },
    hasItem(){
      if (this.getItemName === "none"){
        return false;
      }
      return this.getInventory.weapons[this.name].owned
    },
    getItemName(){
      return this.getInventory.weapons[this.name].name;
    },
  },
  methods:{
    ...mapActions([
      "changeWeapon",
    ]),
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>