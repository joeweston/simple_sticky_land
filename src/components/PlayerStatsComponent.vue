<template>
  <div id="player-stats-component">
    <h3>Stats</h3>
    <p>Attack: {{getPlayerAttack}}</p>
    <p>Armour: {{getPlayerArmour}}</p>
  </div>



</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {...mapGetters([
      "getPlayerAttack", "getPlayerArmour"
    ]),
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#player-stats-component{
  position: relative;
  font-size: 25px;
  line-height: 25px;
  padding: 10px 14px 10px 14px;
  border: 2px solid black;
  &:nth-child(2){
    padding-top: 20px;
  }
}
h3{
  position: absolute;
  top: -10px;
  margin: 0 20px;
  background-color: white;
  padding: 0 4px;
}
</style>