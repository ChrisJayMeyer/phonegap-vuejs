<template>
<div id="loading">
  <div id="load-title">{{appName}}</div>
  <div class="spinner">
    <div class="bounce1"></div>
    <div class="bounce2"></div>
    <div class="bounce3"></div>
  </div>
</div>
</template>

<script>
export default {
  name: 'loading',
  computed: {
    appName () {
  	   return this.$store.getters.appName
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#loading {
    color: white;
    vertical-align: middle;
    text-align: center;
    background-color: rgb(198,40,40);
    width:      100vw;
    height:     100vh;
    z-index:    10;
    top:        0;
    left:       0;
    position:   fixed;
}
#load-ad{
    margin-top: 20px;
    width: 95vw;
    max-width: 500px;
    border: 3px solid white;
    border-radius: 5%;
}
#load-title{
    padding-top: 20vh;
    font-size: 4em;
}
/*Loading Screen*/

/*Line loader*/
.spinner {
    margin: 30px auto 0;

    text-align: center;
}

.spinner > div {
  width: 25px;
  height: 25px;
  background-color: white;

  border-radius: 100%;
  display: inline-block;
  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

.spinner .bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.spinner .bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

@-webkit-keyframes sk-bouncedelay {
  0%, 80%, 100% { -webkit-transform: scale(0) }
  40% { -webkit-transform: scale(1.0) }
}

@keyframes sk-bouncedelay {
  0%, 80%, 100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  } 40% {
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
  }
}
</style>
