<template>
  <div>
    <div>
      <p>Gold: {{getGold}}</p>
    </div>
    <div>
      <h3>Selcted weapon</h3>
      <weapon-select-component></weapon-select-component>
    </div>
    <div>
      <h3>Selcted armour</h3>
      <armour-select-component></armour-select-component>
    </div>
    <div>
      <h3>Weapons</h3>
        <item-component
        v-for="(item, name) in getInventory.weapons" :key="name"
        :name="name" type="weapons"></item-component>
    </div>
    <div>
      <h3>Armours:</h3>
        <item-component 
        v-for="(item, name) in getInventory.armours" :key="name"
        :name="name" type="armours"></item-component>
    </div>
    <div>
      <h3>Passives:</h3>
        <item-component
        v-for="(item, name) in getInventory.passives" :key="name"
        :name="name" type="passives"></item-component>
    </div>
    <div>
      <h3>Key:</h3>
        <item-component
        v-for="(item, name) in getInventory.key" :key="name"
        :name="name" type="key"></item-component>
    </div>
  </div>


</template>

<script>
import { mapGetters } from 'vuex';
import ItemComponent from './ItemComponent.vue';
import WeaponSelectComponent from './WeaponSelectComponent.vue';
import ArmourSelectComponent from './ArmourSelectComponent.vue';
export default {
  components: {
    ItemComponent, WeaponSelectComponent, ArmourSelectComponent
  },
  computed: {...mapGetters([
      'getInventory'
    ]),
    getGold(){
      return this.getInventory.gold;
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
code{
  font-family: "Courier New", Courier, monospace;
}
</style>