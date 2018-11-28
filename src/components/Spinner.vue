<template lang="html">
  <div class="loader"></div>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
@import '@/assets/helpers/_variables.sass'

.loader
  border: 16px solid $gray
  border-radius: 50%
  border-top: 16px solid $green
  border-bottom: 16px solid $green
  margin: 50px auto
  width: 60px
  height: 60px
  animation: spin 2s linear infinite


@keyframes spin
  0%
    transform: rotate(0deg)
  100%
    transform: rotate(360deg)

</style>
