<template lang="html">
  <ul class="weather__list">
    <li class="weather__item">
      <p class="weather__title">Minimum temperature at the moment</p>
      <p class="weather__meta"> {{ items.list[0].main.temp_min }}&nbsp;°C</p>
    </li>
    <li class="weather__item">
      <p class="weather__title">Maximum temperature at the moment.</p>
      <p class="weather__meta"> {{ items.list[0].main.temp_max }}&nbsp;°C</p>
    </li>
    <li class="weather__item">
      <p class="weather__title">Atmospheric pressure</p>
      <p class="weather__meta"> {{ items.list[0].main.pressure }} hPa</p>
    </li>
    <li class="weather__item">
      <p class="weather__title">Humidity</p>
      <p class="weather__meta"> {{ items.list[0].main.humidity }} %</p>
    </li>
    <li class="weather__item">
      <p class="weather__title">Wind</p>
      <p class="weather__meta"> {{ items.list[0].wind.speed }} m/s</p>
    </li>
    <li class="weather__item">
      <p class="weather__title">Atmospheric pressure on the sea level</p>
      <p class="weather__meta"> {{ items.list[0].main.sea_level }} hPa</p>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    desc: Object
  }
}
</script>

<style lang="css">
</style>
