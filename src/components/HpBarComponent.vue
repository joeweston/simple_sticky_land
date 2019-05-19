<template>
  <div id="hp-bar-container">
    <div id="hp-bar" :style="{
      'backgroundColor': `hsl(${getHpPercent}, 100%, 30%)`,
       width: `${getHpPercent}%`
     }">
    </div>
    <div id="hp-bar-text">{{getPlayerHp.current}} / {{getPlayerHp.max}}</div>
  </div>


</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {...mapGetters([
      'getPlayerHp'
    ]),
    getHpPercent(){
      if (this.getPlayerHp.current <= 0){
        return 0;
      }
      return  Math.floor((this.getPlayerHp.current / this.getPlayerHp.max) * 100 );
    },
  },

}
</script>


<style scoped lang="scss">

#hp-bar-container{
  position: relative;
  color: white;
  padding: 5px 0;
  background-color: #eee;
  outline: 2px solid black;
  height: 30px;
  display: flex;
  justify-content: center;
}
#hp-bar, #hp-bar-text{
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 0 0 #000,
  -2px 0 0 #000;
}
















</style>