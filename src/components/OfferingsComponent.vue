<template>
  <div>
    <button @click="donateRed">Burn your Gold</button>
    <button @click="donateGreen">Bury your Gold</button>
    <button @click="donateBlue">Flush your Gold</button>
    <p>Red Favour: {{getRedFavour}}</p>
    <p>Green Favour: {{getGreenFavour}}</p>
    <p>Blue Favour: {{getBlueFavour}}</p>
  </div>

</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
export default {
  computed: {...mapGetters([
      "getRedFavour", "getBlueFavour", "getGreenFavour",
    ]),
  },
  methods:{
    ...mapActions([
      "donateRed","donateGreen","donateBlue"
    ]),
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>