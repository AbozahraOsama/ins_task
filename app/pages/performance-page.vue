<template>
  <div class="c-dashboard">
    <div class="c-filters__container">
      <date-range-filter />
    </div>
    <div class="c-dashboard__header">
      <performance-chart-component />
    </div>
  </div>
</template>

<script>
import PerformanceChartComponent from '../components/vue-components/performance-chart.vue';
import DateRangeFilter from '../components/vue-components/date-range-filter.vue';

export default {
  name: 'AboutPageComponent',
  components: {
    PerformanceChartComponent,
    DateRangeFilter,
  },
};
</script>
