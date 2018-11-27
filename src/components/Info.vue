<template lang="html">
  <div class="weather">
    <h2 class="title">Current weather in your city</h2>

    <div class="weather__city">
      <h3>{{ items.city.name }}, {{ items.city.country }}</h3>
      <p>{{ items.list[0].weather[0].description }}</p>
      <h2>{{ getTemp }}&nbsp;°C</h2>
    </div>

    <div class="weather__in">
      <div class="weather__desc text-left">
        <h5>Description on the {{ items.list[0].dt_txt }}</h5>
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
      </div>

      <div class="weather__forecast text-left">
        <h5>Forecast</h5>
        <app-forecast :options="items.list"></app-forecast>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import appForecast from './Forecast.vue'


export default {
  created() {
    this.$getLocation()
      .then(coordinates => {
        this.$store.dispatch('getGeolocation', coordinates);
      })
      .then(coordinates => {
        this.$store.dispatch('loadItems');
      })
      .catch(
        error => {
          console.log(error);
        }
      )
  },
  computed: {
    ...mapGetters({
      items: 'getItems'
    }),
    getTemp() {
      return Math.ceil(this.items.list[0].main.temp)
    }
  },
  components: {
    appForecast
  }
}
</script>

<style lang="sass" scope>
  @import '@/assets/helpers/_variables.sass'

  .weather
    &__list
      display: flex
      flex-flow: row wrap
    &__desc
      margin-bottom: 40px
    &__in
      padding: 0 20px
      text-align: left
    &__city
      margin-bottom: 20px
      p
        font-size: 12px
      h2
        font-size: 40px
    &__item
      flex-basis: 50%
      max-width: 50%
      padding: 5px 0
      border-bottom: 1px solid $green
    &__title
      font-size: 12px
      color: rgba($black, 0.6)
    &__meta
      font-size: 16px
      font-weight: 600
      color: $black
    &__icon
      display: inline-block
      vertical-align: middle


</style>
