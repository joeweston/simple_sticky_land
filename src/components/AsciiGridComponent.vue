<template>
  <div>
    <div v-if="getAsciiGrid">
      <pre><code v-for="(i, index) in getAsciiGrid.length"><template v-for="(j, index) in getAsciiGrid[0].length">{{getAsciiGrid[i-1][j - 1]}}</template><br></code></pre>
    </div>
    <div>
      <p>Hp:{{getPlayerHp.current}}/{{getPlayerHp.max}}</p>
    </div>
    <div v-if="getFighting">
      <p>{{getCurrentEnemy.name}}</p>
      <p>HP: {{getCurrentEnemy.hp}}</p>
      <p>Attack: {{getCurrentEnemy.attack}}</p>
    </div>
  </div>


</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {...mapGetters([
      'getAsciiGrid', 'getCurrentEnemy', 'getFighting','getPlayerHp'
    ]),
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
code{
  font-family: "Courier New", Courier, monospace;
}
</style>