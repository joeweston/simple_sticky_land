<template>
  <button
    :class="name"
    @click="goAdventure(jsName)"
    :disabled="!canAdventure"

  >
    {{text}}
  </button>
</template>

<script>
import{ mapActions } from 'vuex';
import { mapGetters } from 'vuex';


export default {
  props:{
    name: String,
    text: String
  },
  computed: {...mapGetters([
    'getPlayerHp', "getStillAdventuring"
    ]),
    hpFull(){
      return this.getPlayerHp.current === this.getPlayerHp.max
    },
    canAdventure(){
      return !this.getStillAdventuring && this.hpFull 
    },
    jsName(){
      return this.name.replace(/(-\w)/g, function(m){return m[1].toUpperCase();});
    }
  },
  methods: {...mapActions([
      "goAdventure"
    ]),
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>