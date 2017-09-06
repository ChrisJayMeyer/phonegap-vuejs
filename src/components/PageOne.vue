<template>
  <div id="page1">
    <h1>Data Returned</h1>
    <ul v-if="appDataReady" class="collection">
      <li class="collection-item avatar" v-for="item in appData">
        <a><i class="material-icons circle">star</i></a>
        <span class="title">{{item.title}}</span>
        <p>ID: {{item.id}} <br>
          {{item.body}}
        </p>
        <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'loading',
  computed: {
    appName () {
  	   return this.$store.getters.appName;
    },
    appData () {
      return this.$store.getters.data;
    },
    appDataReady () {
      return this.$store.getters.data.length > 0;
    }
  }
}
</script>