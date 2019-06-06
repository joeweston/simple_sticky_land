<template>
  <select @change="selectorChanged">
    <option
      v-for="(item) in ownedArmours" :key="item"  :value="item"
      :selected="isEquipped(item)"
      >
      {{getItemName(item)}}
    </option> 
  </select>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
export default {
  computed: {...mapGetters([
      'getInventory'
    ]),
    ownedArmours(){
      return Object.keys(this.getInventory.armours).filter((item)=>{
        return this.getInventory.armours[item].owned;
      });
    }
  },
  methods:{
    ...mapActions([
      "changeArmour",
    ]),
    getItemName(name){
      return this.getInventory.armours[name].name
    },
    selectorChanged(event){
      this.changeArmour(event.target.value);
    },
    isEquipped(item){
      return this.getInventory.currentArmour === item;
    }

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>