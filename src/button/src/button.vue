<template>
  <button
    class="zmjd-button"
    :class="['zmjd-button--' + type, 'zmjd-button--' + size, {
      'disabled': disabled,
      'plain': plain
    }]"
    @click="handleClick"
    :disabled="disabled"
  >
    <span
      class="zmjd-button-icon"
      v-if="icon || $slots.icon"
    >
      <slot name="icon">
        <i
          v-if="icon"
          :class="['icon iconfont',icon]"
        />
      </slot>
    </span><slot />
  </button>
</template>

<script>
/**
 * @module zmjd-mobile/button
 * @desc 按钮
 * @param {string} [type=default] - 显示类型，接受 default, primary, danger
 * @param {boolean} [disabled=false] - 禁用
 * @param {boolean} [plain=false] - 幽灵按钮
 * @param {string} [size=normal] - 尺寸，接受 normal, small, large
 * @param {string} [icon] - 自定义的图标
 * @param {slot} - 显示文本
 * @param {slot} [icon] 显示图标
 *
 * @example
 * <zmjd-button size="large" icon="back" type="primary">按钮</zmjd-button>
 */
const COMPONENET_NAME = 'zmjd-button'
export default {
  name: COMPONENET_NAME,
  props: {
    icon: String,
    disabled: Boolean,
    plain: Boolean,
    type: {
      type: String,
      default: 'default',
      validator (value) {
        return [
          'default',
          'danger',
          'primary'
        ].indexOf(value) > -1
      }
    },
    size: {
      type: String,
      default: 'normal',
      validator (value) {
        return [
          'small',
          'normal',
          'large'
        ].indexOf(value) > -1
      }
    }
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    }
  }
}
</script>

<style lang='less'>
  @import './button.less';
</style>
