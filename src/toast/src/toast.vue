<template>
  <transition name="zmjd-toast-pop">
    <div
      class="zmjd-toast"
      v-show="visible"
      :class="customClass"
      :style="{ 'padding': iconClass === '' ? '10px' : '20px' }"
    >
      <i
        class="zmjd-toast-icon"
        :class="iconClass"
        v-if="iconClass !== ''"
      />
      <span
        class="zmjd-toast-text"
        :style="{ 'padding-top': iconClass === '' ? '0' : '10px' }"
      >{{ message }}</span>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    message: String,
    className: {
      type: String,
      default: ''
    },
    position: {
      type: String,
      default: 'middle'
    },
    iconClass: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      visible: false
    }
  },

  computed: {
    customClass () {
      let classes = []
      switch (this.position) {
        case 'top':
          classes.push('is-placetop')
          break
        case 'bottom':
          classes.push('is-placebottom')
          break
        default:
          classes.push('is-placemiddle')
      }
      classes.push(this.className)
      return classes.join(' ')
    }
  }
}
</script>
<style lang="less">
  @import './toast.less';
</style>
