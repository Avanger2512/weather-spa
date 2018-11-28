<template lang="html">
  <div class="weather">
    <h2 class="title">Current weather in your city</h2>

    <template v-if="loading">
      <app-spinner></app-spinner>
    </template>
    <template v-else>
      <div class="weather__in">
        <div class="weather__desc text-left">

          <app-city-desc :options="items"></app-city-desc>

          <h5>Description on the {{ items.list[0].dt_txt }}</h5>
          <app-weather-desc :desc="items.list[0]"></app-weather-desc>
        </div>

        <div class="weather__forecast text-left">
          <h5>Forecast</h5>
          <app-forecast :options="items.list"></app-forecast>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import appForecast from './Forecast.vue'
import appSpinner from './Spinner.vue'
import appWeatherDesc from './Weather-desc.vue'
import appCityDesc from './City-desc.vue'


export default {
  name: 'info',
  data() {
    return {
      loading: false,
    }
  },
  created() {
    this.getDataFromApi();
  },
  methods: {
    getDataFromApi() {
      this.loading = true;
      this.$getLocation()
        .then(coordinates => {
          this.$store.dispatch('getGeolocation', coordinates);
        })
        .then( ()=> {
          this.$store.dispatch('loadItems');
          setTimeout(()=> {
            this.loading = false;
          },200)
        })
        .catch( ()=> {
            this.loading = false;
          }
        )
    }
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
    appForecast,
    appSpinner,
    appWeatherDesc,
    appCityDesc
  }
}
</script>

<style lang="sass">
  @import '@/assets/helpers/_variables.sass'

  .weather
    &__list
      display: flex
      flex-flow: row wrap
    &__desc
      margin-bottom: 40px
    &__in
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
