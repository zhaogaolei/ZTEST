<template>
  <i :class="['icon iconfont',name]" />
</template>

<script>
/**
 * @module zmjd-mobile/icon
 * 支持修改大小，根据设计稿定义
 */

const COMPONENET_NAME = 'zmjd-icon'
export default {
  name: COMPONENET_NAME,
  props: {
    name: String
  }
}
</script>
