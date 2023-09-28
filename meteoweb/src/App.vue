<template>
  <div>
    <LineChart/>
    <MapLocation/>
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

<style>
#app {

}
</style>
