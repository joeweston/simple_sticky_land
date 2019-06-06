<template>
  <div id="ascii">
    <!-- MORE EFFICIENT??
    <div v-if="getAsciiGrid">
      <pre><code v-for="(i, index) in getAsciiGrid.length"><template v-for="(j, index) in getAsciiGrid[0].length">{{getAsciiGrid[i-1][j - 1]}}</template><br></code></pre>
    </div>
    -->
    <div v-if="getAsciiGrid">
      <pre><code v-for="(i, index) in getAsciiGrid" :key="index">{{i}}<br></code></pre>
    </div>
    <div id="enemy" v-if="getFighting">
          <h4>{{getCurrentEnemy.name}}</h4>
          <p>HP: {{getCurrentEnemy.hp}}</p>
          <p>Attack: {{getCurrentEnemy.attack}}</p>
    </div>
  </div>


</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {...mapGetters([
      'getAsciiGrid', 'getCurrentEnemy', 'getFighting',
    ]),
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#ascii{
 display: flex;
 flex-direction: column;
 align-items: center;

}
pre{
  display: inline-block;
  padding: 10px;
  border: 2px solid black;
}
code{
  font-family: "Courier New", Courier, monospace;
}
#enemy{
  width: 500px;
  padding: 10px 0;
  h4{
    font-size: 20px;
    line-height: 30px;
  }
}



</style>