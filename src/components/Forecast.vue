<template lang="html">
  <ul class="forecast">
    <li v-for="(item, index) in options"
      v-if="index >= 1"
      :key="index"
      class="forecast__in">
      <div class="forecast__item">
        <p class="forecast__date">{{ item.dt_txt }}</p>
      </div>
      <div class="forecast__item">
        <img :src="`http://openweathermap.org/img/w/${item.weather[0].icon}.png`"
          class="forecast__icon"
          id="wicon"
          alt="Weather icon" >
      </div>
      <div class="forecast__item">
        <p class="forecast__title">temperature</p>
        <p class="forecast__text"> {{ Math.ceil(item.main.temp_min) }}&nbsp;°C</p>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    options: Array
  }
}
</script>

<style lang="sass" scope>

  .forecast
    white-space: nowrap
    overflow: auto
    margin-bottom: 50px
    padding-bottom: 20px
    &__in
      display: inline-block
      vertical-align: top
      max-width: 33.3%
      margin: 0 10px
    &__date
      white-space: normal
      font-size: 12px
      max-width: 100px
    &__item
      text-align: center
    &__title
      font-size: 10px
    &__text
      font-size: 18px
</style>
