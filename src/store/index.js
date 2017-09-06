import createLogger from 'vuex/dist/logger';
import * as server from '../api/server';

var debug = true;

export default {
  state: {
    appName: 'Vue Phonegap Demo',
    data: [],
  },
  getters: {
    data: state => {
      return state.data;
    }
  },
  mutations: {
    data(state, data) {
      state.data = data;
    }
  },
  actions: {
    getData({commit, getters, mutations}, req) {
      server.getData({}, function (data, err) {
        let success = false;
        if (!err) {
          commit('data', data);
          success = true;
        } else {
          console.log(err);
        }
        req.cb(success);
      });
    }
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
};
