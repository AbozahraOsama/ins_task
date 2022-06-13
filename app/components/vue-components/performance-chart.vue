<template>
  <div class="c-chart__container">
    <v-chart ref="chart" :option="chartOptions"/>
  </div>
</template>

<script>
import moment from 'moment';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { LineChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
} from 'echarts/components';
import VChart from 'vue-echarts';
import { mapState } from 'vuex';

use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
]);

export default {
  name: 'PerformanceChartComponent',

  components: {
    VChart,
  },

  mounted() {
    this.$store.dispatch('getChartData');
  },

  computed: {
    initOptions() {
      return {
        width: 'auto',
        height: '300px',
      };
    },

    chartOptions() {
      return {
        title: {
          text: 'Team Performance Index',
          left: 'center',
        },
        tooltip: {
          trigger: 'axis',
          transitionDuration: 0,
          confine: false,
          hideDelay: 0,
          padding: 10,
          backgroundColor: '#16253f',
          textStyle: {
            color: '#ffffff',
          },
          formatter: function (params) {
            return (
              `<div class="c-chart__tooltip">
              <strong>${params[0].axisValue}</strong>
               <div>${params[0].marker}Team Performance Index ${params[0].value}%</div>
                </div>`
            );
          },
        },
        grid: {
          left: '30px',
          right: '12px',
          bottom: '2px',
          top: '6px',
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          showGrid: false,
          data: this.xAxisData,
          axisLine: {
            show: true,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            fontSize: 11,
          },
        },
        yAxis: {
          axisLabel: { show: true },
          axisTick: { show: true },
          splitLine: { show: true },
        },
        series: [
          {
            data: this.yAxisData,
            type: 'line',
            symbol: 'circle',
            symbolSize: 2,
            cursor: 'default',
            lineStyle: {
              width: 2,
            },
          },
        ],
        visualMap: {
          show: true,
          right: 0,
          top: 45,
          bottom: 0,
          pieces: [
            {
              min: 0,
              max: 50,
              color: '#f4674c',
            },
            {
              min: 50,
              max: 80,
              color: '#fbdb10',
            },
            {
              min: 80,
              max: 100,
              color: '#01984f',
            },
          ],
        },
      };
    },

    xAxisData() {
      return this.filteredChartData.map((item) => this.formatDate(item.date_ms));
    },

    yAxisData() {
      return this.filteredChartData.map((item) => +item.performance * 100);
    },

    ...mapState(['filteredChartData']),
  },

  methods: {
    formatDate(dateInMs) {
      return moment(dateInMs)
        .format('DD MMM YYYY');
    },
  },
};
</script>
