<template lang="html">
  <div class="weather__city text-center">
    <h3>{{ options.city.name }}, {{ options.city.country }}</h3>
    <p>{{ options.list[0].weather[0].description }}</p>
    <h2>{{ getTemp }}&nbsp;°C</h2>
  </div>
</template>

<script>
export default {
  name: 'city-description',
  props: {
    options: Object
  },
  computed: {
    getTemp() {
      return Math.ceil(this.options.list[0].main.temp);
    }
  },
}
</script>

<style lang="sass">
</style>
