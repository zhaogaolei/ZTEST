<template>
  <div>
    <slot />
  </div>
</template>

<script>
const COMPONENT_NAME = 'zmjd-swipe-item'
export default {
  name: COMPONENT_NAME,

  mounted () {
    this.$parent && this.$parent.swipeItemCreated(this)
  },

  destroyed () {
    this.$parent && this.$parent.swipeItemDestroyed(this)
  }
}
</script>
