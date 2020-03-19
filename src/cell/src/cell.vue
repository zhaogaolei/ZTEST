<template>
  <a
    class="zmjd-cell"
    :href="href"
  >
    <span
      class="zmjd-cell-mask"
      v-if="isLink"
    />
    <div class="zmjd-cell-left">
      <slot name="left" />
    </div>
    <div class="zmjd-cell-wrapper">
      <div class="zmjd-cell-title">
        <slot name="icon">
          <i
            v-if="icon"
            :class="['iconfont',icon]"
          />
        </slot>
        <slot name="title">
          <span
            class="zmjd-cell-text"
            v-text="title"
          />
          <span
            v-if="label"
            class="zmjd-cell-label"
            v-text="label"
          />
        </slot>
      </div>
      <div
        class="zmjd-cell-value"
        :class="{ 'is-link' : isLink }"
      >
        <slot>
          <span v-text="value" />
        </slot>
      </div>
      <i
        v-if="isLink"
        class="zmjd-cell-allow-right"
      />
    </div>
    <div class="zmjd-cell-right">
      <slot name="right" />
    </div>
  </a>
</template>
<script>
const COMPONENT_NAME = 'zmjd-cell'
export default {
  name: COMPONENT_NAME,
  props: {
    to: [String, Object],
    url: String,
    icon: String,
    title: String,
    label: String,
    isLink: Boolean,
    value: {}
  },

  computed: {
    href () {
      if (this.to && !this.added && this.$router) {
        const resolved = this.$router.match(this.to)
        if (!resolved.matched.length) {
          return resolved.path + this.to.name.toLowerCase()
        }

        return resolved.fullPath || resolved.path
      }
      if (this.url) {
        return this.url
      }
      return this.to
    }
  }
}
</script>
<style lang="less">
  @import './cell.less';
</style>
