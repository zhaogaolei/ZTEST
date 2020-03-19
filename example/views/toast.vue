<template>
  <div>
    <h2>Toast</h2>
    <zmjd-button
      @click="openToast"
      size="large"
    >
      点击弹出 Toast
    </zmjd-button>
    <zmjd-button
      @click="openToastWithIcon"
      size="large"
    >
      点击弹出带有 icon 的 Toast
    </zmjd-button>
    <zmjd-button
      @click="openBottomToast"
      size="large"
    >
      自定义 Toast 位置
    </zmjd-button>
  </div>
</template>

<script>
export default {
  methods: {
    openToast () {
      this.$toast('超长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长提示')
    },

    openToastWithIcon () {
      this.$toast({
        message: '操作成功',
        iconClass: 'iconfont icon-shanchu'
      })
    },

    openBottomToast () {
      this.$toast({
        message: '自定义颜色',
        position: 'bottom',
        className: 'custom-toast'
      })
    }
  }
}
</script>
