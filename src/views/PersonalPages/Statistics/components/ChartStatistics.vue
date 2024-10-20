<script setup>
import { data } from '@/constants/statisticsPage'

import { Chart, registerables } from 'chart.js'
import { LineChart } from 'vue-chart-3'

Chart.register(...registerables)
const dataChart = data.map((row) => row.count)
const labels = data.map((row) => row.year)
const chartData = {
  labels,
  datasets: [
    {
      label: 'Количество прослушиваний',
      data: dataChart,
      pointBackgroundColor: '#535ff6',
      fill: {
        target: 'origin',
        above: 'rgba(83, 95, 246, 0.1)'
      }, 
      tension: 0.4,
    }
  ]
}
const chartOptions = {
  responsive: true,
  scales: {
    x: {
      border: {
        display: true,
        dash: [5, 15]
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.1)'
      }
    },
    y: {
      border: {
        display: true
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.1)'
      }
    }
  },
  elements: {
    line: {
      borderColor: '#535ff6',
      borderWidth: 1
    }
  }
}
</script>

<template>
  <LineChart class="chart" :chartData="chartData" :options="chartOptions" />
</template>

<style scoped>
@media (max-width: 562px) {
  .chart {
    display: none;
  }
}
</style>
