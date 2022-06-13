import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const apiUrl = 'https://fe-task.getsandbox.com/performance';

export default new Vuex.Store({
  state: {
    chartData: [],
    filteredChartData: [],
  },
  actions: {
    getChartData({ commit }) {
      axios.get(apiUrl)
        .then((res) => {
          commit('SET_CHART_DATA', res.data);
          commit('SET_FILTERED_CHART_DATA', res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mutations: {
    SET_CHART_DATA: (state, payload) => {
      state.chartData = payload;
    },
    SET_FILTERED_CHART_DATA: (state, payload) => {
      state.filteredChartData = payload;
    },
  },
});
