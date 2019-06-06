<template>
  <button @click="changeArmour(name)" :disabled="isEquipped">
  <item-component
  v-if="hasItem"
  :name="name" type="armours"
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
      return this.getInventory.currentArmour === this.name
    },
    hasItem(){
      return this.getInventory.armours[this.name].owned
    },
    getItemName(){
      return this.getInventory.armours[this.name].name;
    },
  },
  methods:{
    ...mapActions([
      "changeArmour",
    ]),
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>