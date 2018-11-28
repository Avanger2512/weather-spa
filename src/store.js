import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const APIKEY = '3e3251ee4094aeb4c54a6a52f4acfecc';




// Vue.http.get(`http://api.openweathermap.org/data/2.5/forecast?q=${state.getters.getCountry}&cnt=7&units=metric&id=524901&APPID=${APIKEY}`
// find
export default new Vuex.Store({
  state: {
    items: [],
    searchItems: [],
    geolocation: {},
    error: '',
    country: '',
  },
  getters: {
    getItems: (state) => state.items,
    getCountry: (state) => state.country,
    getGeolocationLat: (state) => state.geolocation.lat,
    getGeolocationLng: (state) => state.geolocation.lng,
    getSearchItems: (state) => state.searchItems,

  },
  mutations: {
    updateLoadItems: (state, data) => state.items = data,
    updateCounty: (state, data) => state.country = data,
    setGeolocation: (state, data) => state.geolocation = data,
    setDefaultGeolocation: (state, data) => state.geolocation = data,
    updateSearchItems: (state, data) => state.searchItems = data,

    // TODO: fix error state
    onError: (state, data) => state.error = data,
  },
  actions: {
    loadItems(state) {
      Vue.http.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${state.getters.getGeolocationLat}&lon=${state.getters.getGeolocationLng}&units=metric&id=524901&APPID=${APIKEY}`)
      .then(response => {
        if (response.body.cod === '200') {
          state.commit('updateLoadItems', response.body);
        } else {
          state.commit('onError', true);
        }
      }, () => {
        // error callback
        state.commit('onError', true);
        // console.log(response);
      });
    },
    getGeolocation(state, payload) {
      if (payload) {
        state.commit('setGeolocation', payload);
      } else {
        state.commit('setDefaultGeolocation', {
          lat: 50.439880,
          lng: 30.533609
        });
      }
    },
    loadSearchItems(state) {
      Vue.http.get(`http://api.openweathermap.org/data/2.5/find?q=${state.getters.getCountry}&units=metric&id=524901&APPID=${APIKEY}`)
      .then(response => {
        if (response.body.cod === '200') {
          state.commit('updateSearchItems', response.body);
          console.log(response.body);
        } else {
          state.commit('onError', true);
        }
      }, () => {
        // error callback
        state.commit('onError', true);
        // console.log(response);
      });
    },

  }
})
