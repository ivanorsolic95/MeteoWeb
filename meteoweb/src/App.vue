<template>
  <div id="app">
    <div class="chart">
      <LineChart/>
  </div>
  <div class="map">
      <MapLocation/>
    </div>
  </div>
</template>

<script>
import LineChart from './components/LineChart.vue'
import MapLocation from './components/MapLocation.vue';

export default {
  name: 'App',
  components: {
    LineChart,
    MapLocation
  }
};
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}

.chart {
  width: 80%;
  height: 60vh;
  margin-bottom: 20px; 
}

.map {
  width: 80%;
  height: 30vh;
}

@media (max-width: 768px) {
  .chart, .map {
    width: 95%;
  }
}
</style>

