<template>
  <div id="app">
    <h1>{{ title }}</h1>

    <div class="tabs">
      <div class="tabs__caption">
        <button v-for="(tab, index) in tabs"
          :key="index"
          :class="['h3 tabs__button', { 'is-active': currentTab === tab }]"
          @click="currentTab = tab"
          type="button"
          name="button">
            {{ tab }}
        </button>
      </div>

      <div class="tabs__in">
        <div v-if="activeTab"
          class="tabs__content">

          <div class="container">
            <app-info></app-info>
          </div>
        </div>
        <div v-else
          class="tabs__content">
          <div class="container">
            <app-search></app-search>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import appInfo from './components/Info.vue';
import appSearch from './components/Search.vue';

export default {
  name: 'app',
  data() {
    return {
      title: 'Welcome to weather app 🙈',
      currentTab: 'my-weather',
      tabs: ['my-weather', 'search']
    }
  },
  components: {
    appInfo,
    appSearch
  },
  computed: {
    activeTab() {
      return this.currentTab === this.tabs[0] ? true : false
    }
  }
}
</script>

<style lang="sass">
@import '@/assets/helpers/_reset.sass'
@import '@/assets/helpers/_variables.sass'
@import '@/assets/helpers/_mixins.sass'

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: $black
  margin-top: 60px
  min-width: 320px
  +r(767)
    margin-top: 20px

h1
  margin-bottom: 40px
  +r(767)
    margin-bottom: 20px
    font-size: 22px

h5
  margin-bottom: 10px

.title
  font-size: 16px
  color: rgba($black, .8)
  margin-bottom: 10px

.text-left
  text-align: left

.text-center
  text-align: center

button
  background: transparent

.tabs
  &__caption
    display: flex
    flex-flow: row nowrap
    align-items: center
    background: #eaeaea
    margin-bottom: 10px
  &__button
    flex: 1 0 auto
    text-transform: uppercase
    padding: 10px 0
    &.is-active
      background: $gray
    &:not(:last-child)
      border-right: 1px solid black

img
  max-width: 100%

.container
  max-width: 1024px
  width: 100%
  margin: 0 auto
  padding: 0 20px

</style>
