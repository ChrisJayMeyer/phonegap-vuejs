<template>
<div id="app">

  <!-- Main View -->
  <router-view></router-view>
  <!-- Main View -->

</div>
</template>

<script>
export default {
  name: 'app',
  mounted: function() {
    this.$router.replace({ name: 'Loading' });
    this.$store.dispatch('getData', {
      cb: function(success){
        if(success){
          this.$router.replace('/pageone')
        } else {
          console.log('Failed to get resource.')
        }
      }.bind(this)
    });
  }
}
</script>

<style>
</style>
