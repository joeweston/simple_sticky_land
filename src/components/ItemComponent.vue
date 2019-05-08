<template>
  <p v-if="hasItem">{{getItemName}}</p>  
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props:{
    name: String,
    type: String,
  },
  computed: {...mapGetters([
      'getInventory'
    ]),
    hasItem(){
      return this.getInventory[this.type][this.name].owned
    },
    getItemName(){
      return this.getInventory[this.type][this.name].name;
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
code{
  font-family: "Courier New", Courier, monospace;
}
</style>