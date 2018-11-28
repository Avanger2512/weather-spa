import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueResource from 'vue-resource';
import VueGeolocation from 'vue-browser-geolocation';

Vue.config.productionTip = false

Vue.use(VueResource);
Vue.use(VueGeolocation);
Vue.http.options.root = 'https://api.openweathermap.org/data/2.5/';

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
