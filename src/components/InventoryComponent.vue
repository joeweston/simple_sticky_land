<template>
  <div id="inventory-component">
    <div id=inventory>
      <div>
        <p>Gold: {{getGold}}</p>
      </div>
      <div>
        <h3>Weapons</h3>
          <weapon-component
          v-for="(item, name) in getInventory.weapons" :key="name"
          :name="name"></weapon-component>
      </div>
      <div>
        <h3>Amour</h3>
          <armour-component
          v-for="(item, name) in getInventory.armours" :key="name"
          :name="name"></armour-component>
      </div>
      <div>
        <h3>Passives:</h3>
          <item-component class="item"
          v-for="(item, name) in getInventory.passives" :key="name"
          :name="name" type="passives"></item-component>
      </div>
      <div>
        <h3>Key:</h3>
          <item-component class="item"
          v-for="(item, name) in getInventory.key" :key="name"
          :name="name" type="key"></item-component>
      </div>
    </div>
    <player-stats-component></player-stats-component>


  </div>



</template>

<script>
import { mapGetters } from 'vuex';
import ItemComponent from './ItemComponent.vue';
import WeaponComponent from './WeaponComponent.vue';
import ArmourComponent from './ArmourComponent.vue';
import PlayerStatsComponent from './PlayerStatsComponent.vue';
export default {
  components: {
    ItemComponent, WeaponComponent, ArmourComponent, PlayerStatsComponent
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
#inventory-component{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
#inventory{
  padding-bottom: 20px;
  div{
    position: relative;
    font-size: 25px;
    line-height: 25px;
    padding: 10px 14px 0 14px;

    .item{
      display: inline-block;
      font-family: 'Amatic SC', cursive;
      font-size: 25px;
      line-height: 25px;
      padding: 0 14px;
    }
  }
}
button{
  border: none;
  font-size: 25px;
  line-height: 25px;
  position: relative;
  padding: 0 14px;
  &:disabled{
    background: none;
    color: black;
    &:before, &:after{
      content: "";
      top: 9px;
      position: absolute;
      border: 5px solid grey;
      border-radius: 50%;
    }
    &:before{
      left: 0;
    }
    &:after{
      right: 0;
    }
  }
}


</style>