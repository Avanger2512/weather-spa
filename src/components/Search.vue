<template lang="html">
  <div class="search">

    <form @submit.prevent="loadItems">
      <input v-model="search" placeholder="Search city">
      <button @click="loading = true"
        name="button">Search</button>
    </form>

    <template v-if="showContent">
      <app-spinner v-if="loading"></app-spinner>

      <template v-else>
        <template v-if="loadData">
          <div class="weather__city text-center">
            <h3>{{ searchItems.list[0].name }}, {{ searchItems.list[0].sys.country }}</h3>
            <p>{{ searchItems.list[0].weather[0].description }}</p>
            <img :src="getIcon"
              class=""
              id="wicon-search"
              alt="Weather icon" >
            <h2>{{ Math.ceil(searchItems.list[0].main.temp) }}&nbsp;°C</h2>
          </div>
          <div class="text-left">
            <h5>Description </h5>
            <app-weather-desc :desc="searchItems.list[0]"></app-weather-desc>
          </div>
        </template>

        <p v-else>Something went wrong :( "<strong>{{ errorText }}</strong>"  - not found!</p>
      </template>
    </template>

  </div>
</template>

<script>
import appSpinner from './Spinner.vue'
import {mapGetters} from 'vuex'
import appWeatherDesc from './Weather-desc.vue'

export default {
  name: 'search',
  data() {
    return {
      search: '',
      loading: false,
      loadData: false,
      showContent: false,
      errorText: ''
    }
  },
  methods: {
    loadItems() {
      this.showContent = true;
      this.loadData = false;
      this.$store.commit('updateCounty', this.search);

      this.$store.dispatch('loadSearchItems', this.search);
      this.onError();
      this.onErrorText();
    },
    onError() {
      setTimeout(() => {
        if (this.searchItems.list.length === 0 ) {
          this.loadData = false;
          this.loading = false;

        } else {
          this.loadData = true;
          this.loading = false;
        }
      },200)
    },
    onErrorText() {
      this.errorText = this.search;
    }
  },
  computed: {
    ...mapGetters({
      searchItems: 'getSearchItems',
      searchItems2: 'getCountry'
    }),
    getIcon() {
      return `http://openweathermap.org/img/w/${this.searchItems.list[0].weather[0].icon}.png`
    },

  },
  components: {
    appSpinner,
    appWeatherDesc,
  }
}
</script>

<style lang="sass" scoped>
  @import '@/assets/helpers/_variables.sass'
  @import '@/assets/helpers/_mixins.sass'

  form
    margin-bottom: 40px

  img
    height: 50px
    width: 50px

  input
    border: 1px solid $gray
    padding: 5px 10px
    max-width: 300px
    width: 100%
    border-radius: 5px

  button
    background: $green
    color: #fff
    padding: 5px 10px
    border-radius: 5px
    margin-left: 5px
    transition: opacity .15s
    &:hover
      opacity: 0.8
    +r(460)
      max-width: 300px
      width: 100%
      margin-top: 5px

</style>
