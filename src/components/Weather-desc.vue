<template lang="html">
  <div>
    <ul class="weather__list">
      <li class="weather__item">
        <p class="weather__title">Minimum temperature at the moment</p>
        <p class="weather__meta"> {{ desc.main.temp_min }}&nbsp;°C</p>
      </li>
      <li class="weather__item">
        <p class="weather__title">Maximum temperature at the moment.</p>
        <p class="weather__meta"> {{ desc.main.temp_max }}&nbsp;°C</p>
      </li>
      <li class="weather__item">
        <p class="weather__title">Atmospheric pressure</p>
        <p class="weather__meta"> {{ desc.main.pressure }} hPa</p>
      </li>
      <li class="weather__item">
        <p class="weather__title">Humidity</p>
        <p class="weather__meta"> {{ desc.main.humidity }} %</p>
      </li>
      <li class="weather__item">
        <p class="weather__title">Wind</p>
        <p class="weather__meta"> {{ desc.wind.speed }} m/s</p>
      </li>
      <li class="weather__item">
        <p class="weather__title">Atmospheric pressure on the sea level</p>
        <p class="weather__meta"> {{ desc.main.sea_level }} hPa</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'weather-description',
  props: {
    desc: Object
  }
}
</script>

<style lang="sass">
</style>
