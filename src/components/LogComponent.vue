<template>
  <div id="log-component">
    <button @click="toggleLog()">{{logMessage}}</button>
    <template v-if="logShown">
      <h3 id="log-title">Log</h3>
      <p v-for="(message, index) in getLog" :key="index">{{message}}</p>
    </template>
  </div>


</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data(){
    return {
      logShown: true,
    };
  },
  computed: {...mapGetters([
      "getLog"
    ]),
    logMessage(){
      return this.logShown ? "Hide Log" : "Show Log";
    }
  },
  methods:{
    toggleLog(){
      this.logShown = !this.logShown;
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#log-component{
  position: fixed;
  bottom: 0;
  background-color: white;
  border-top: 2px solid black;
  width: 100%;
  padding: 0 20px;
  &:nth-child(2){
    padding-top: 10px;
  }
  &:last-child{
    padding-bottom: 10px;
  }
}

h3{
  position: absolute;
  top: -10px;
  margin: 0 20px;
  background-color: white;
  padding: 0 4px;
}
button{
  font-size: 15px;
  font-family: 'Josefin Slab', serif;
  position: absolute;
  top: -25px;
  right: 40px;
  width: 90px;
  background-color: white;
  padding: 5px 10px 1px;
  border-radius:20px 20px 0 0;
}




</style>