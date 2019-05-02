<template>
  <div>
    <pre><code v-for="(i, index) in 7"><template v-for="(j, index) in 60">{{getAsciiGrid[i-1][j - 1]}}</template><br></code></pre>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {...mapGetters([
      'getAsciiGrid'
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