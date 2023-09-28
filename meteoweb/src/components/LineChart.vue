<template>
  <div class="chart-container">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
import { Chart, LinearScale, LineController, CategoryScale, PointElement, LineElement, Title, Tooltip, Legend} from 'chart.js';
Chart.register(LinearScale, LineController, CategoryScale, PointElement, LineElement, Title, Tooltip, Legend);

export default {
  name: 'LineChart',
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      const ctx = this.$refs.canvas.getContext('2d');

      const labels = ["Sep 01", "Sep 05", "Sep 10", "Sep 15", "Sep 20", "Sep 25", "Sep 30"];
      const data = {
        labels: labels,
        datasets: [
          {
            label: 'Temperature (°C)',
            data: [24, 23, 28, 24, 26, 18, 21],
            borderColor: "red",
            backgroundColor: "red",
            yAxisID: 'y',
          },
          {
            label: 'Humidity (%)',
            data: [57, 53, 39, 50, 47, 94, 73],
            borderColor: "blue",
            backgroundColor: "blue",
            yAxisID: 'y1',
          }
        ]
      };

      const config = {
        type: 'line',
        data: data,
        options: {
          responsive: true,
          interaction: {
            mode: 'index',
            intersect: false,
          },
          plugins: {
            title: {
              display: true,
              text: 'September 2023: Temperature (°C) and Humidity (%) measured at 12:00 PM'
            }
          },
          scales: {
            y: {
              type: 'linear',
              display: true,
              position: 'left',
            },
            y1: {
              type: 'linear',
              display: true,
              position: 'right',
              grid: {
                drawOnChartArea: false,
              },
            },
          },
        },
      };

      this.chart = new Chart(ctx, config);
    },
  },
};
</script>

<style scoped>
.chart-container {
  width: 33%; /* Adjust this value according to your design preference */
  position: relative;
  margin: auto; /* Centers the chart container */
}
</style>

