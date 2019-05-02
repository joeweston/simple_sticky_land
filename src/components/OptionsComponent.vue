<template>
  <div>
    <button class="default-button" @click="save"> Save </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: mapActions([
    'save'
  ])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
