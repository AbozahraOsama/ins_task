import Vue from 'vue';
import 'ngVue';
import 'ngVue/build/plugins.js';
import ngSanitize from 'angular-sanitize';
import PerformancePageComponent from './pages/performance-page.vue';
import NotFoundPageComponent from './pages/not-found-page.vue';
import PerformanceChartComponent from './components/vue-components/performance-chart.vue';
import HighlightFilterComponent from './components/vue-components/highlight-filter.vue';

import store from './store/index';

angular.module('appModule', [
  'ui.router',
  'ngVue',
  'ngVue.plugins',
  ngSanitize,
]);

angular.module('appModule').config(($ngVueProvider) => {
  $ngVueProvider.setRootVueInstanceProps({
    store,
  });
});

angular.module('appModule').directive('vPerformancePage', (createVueComponent) => {
  return createVueComponent(Vue.component('performancePageComponent', PerformancePageComponent));
});

angular.module('appModule').directive('vPerformanceChart', (createVueComponent) => {
  return createVueComponent(Vue.component('performanceChartComponent', PerformanceChartComponent));
});

angular.module('appModule').directive('vHighlightFilter', (createVueComponent) => {
  return createVueComponent(Vue.component('HighlightFilterComponent', HighlightFilterComponent));
});

angular.module('appModule').directive('vNotFoundPage', (createVueComponent) => {
  return createVueComponent(Vue.component('NotFoundPageComponent', NotFoundPageComponent));
});
