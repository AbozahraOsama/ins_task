<template>
  <div class="c-date-filter__container">
    <label class="c-date-filter__input">
      Start Date:
      <input type="date" name="startDate" id="startDateInput" v-model="startDate" @input="onDateChange">
    </label>
    <label class="c-date-filter__input">
      End Date:
      <input type="date" name="endDate" id="endDateInput" v-model="endDate" @input="onDateChange">
    </label>
    <button class="c-button" @click="clearFilter">Clear</button>
  </div>
</template>

<script>
const getDataInDateRange = require('../../utils/getDataInDateRange');

export default {
  name: 'dateRangeFilter',
  data() {
    return {
      startDate: '',
      endDate: '',
    };
  },
  methods: {
    onDateChange() {
      if (this.startDate !== '' && this.endDate !== '') {
        const newChartData = getDataInDateRange(this.$store.state.chartData, this.startDate, this.endDate);
        if (newChartData.length > 0) {
          this.$store.commit('SET_FILTERED_CHART_DATA', newChartData);
        }

      }
    },
    clearFilter() {
      this.startDate = '';
      this.endDate = '';
      this.$store.commit('SET_FILTERED_CHART_DATA', this.$store.state.chartData);
    },
  },
};
</script>


