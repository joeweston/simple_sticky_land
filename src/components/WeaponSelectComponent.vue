<template>
  <select @change="selectorChanged">
    <option
      v-for="(item) in ownedWeapons" :key="item"  :value="item"
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
    ownedWeapons(){
      return Object.keys(this.getInventory.weapons).filter((item)=>{
        return this.getInventory.weapons[item].owned;
      });
    }
  },
  methods:{
    ...mapActions([
      "changeWeapon",
    ]),
    getItemName(name){
      return this.getInventory.weapons[name].name
    },
    selectorChanged(event){
      this.changeWeapon(event.target.value);
    }

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>