<template>
  <div id="app">
    <h1>Welcome to weather app 🙈</h1>

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
            <p>search</p>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import appInfo from './components/Info.vue'



export default {
  name: 'app',
  data() {
    return {
      currentTab: 'my-weather',
      tabs: ['my-weather', 'search']
    }
  },
  components: {
    appInfo
  },

  computed: {
    activeTab() {
      return this.currentTab === this.tabs[0] ? true : false
    }
  },

}
</script>

<style lang="sass">

@import '@/assets/helpers/_reset.sass'
@import '@/assets/helpers/_variables.sass'

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: $black
  margin-top: 60px
  min-width: 320px

h1
  margin-bottom: 40px

h5
  margin-bottom: 10px

.title
  font-size: 16px
  color: rgba($black, .8)
  margin-bottom: 10px

.text-left
  text-align: left

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
  
</style>
