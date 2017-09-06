import Vue from 'vue';
import Vuex from 'vuex';
import router from './router';
import s from './store';
import App from './App';

Vue.use(Vuex);

var store = new Vuex.Store(s);

Vue.config.productionTip = false;

var app = {
  initialize: function () {
    this.bindEvents();
  },
  bindEvents: function () {
    document.addEventListener('deviceready', this.onDeviceReady, false)
  },
  onDeviceReady: function () {
    app.receivedEvent('deviceready');
  },
  receivedEvent: function (id) {
    console.log('Received Event: ' + id);

    // Start the app
    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      router,
      store,
      template: '<App/>',
      components: {
        App
      }});
  }
};

app.initialize();
