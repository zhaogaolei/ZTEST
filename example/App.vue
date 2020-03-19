<template>
  <div id="app">
    <transition :name="transitionName">
      <div
        class="page-back"
        v-if="isShowTitle"
      >
        <router-link :to="'/'">
          <i class="page-back-icon" />
        </router-link>
        {{ title }}
      </div>
    </transition>
    <transition :name="transitionName">
      <router-view class="child-view" />
    </transition>
  </div>
</template>
<script>
export default {
  data () {
    return {
      title: '',
      transitionName: 'slide-left'
    }
  },
  computed: {
    isShowTitle: function () {
      return this.$route.path !== '/'
    }
  },
  watch: {
    $route (to, from) {
      const toDepth = to.path
      this.transitionName = toDepth === '/' ? 'slide-right' : 'slide-left'
      this.title = to.meta.title || ''
      console.log(to, from, toDepth, this.transitionName)
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log(to, from, next)
  }
}
</script>
<style lang="less" scoped>
.page-back{
  position: relative;
  width: 100%;
  height: 54px;
  line-height: 54px;
  text-align: center;
  font-weight: 500;
  font-size: 17px;
  box-shadow: 0 0px 1px #c8c8cd;
  .page-back-icon::before {
    content: ' ';
    border: 2px solid #969799;
    border-top-width: 0;
    border-right-width: 0;
    position: absolute;
    top: 50%;
    left: 16px;
    width: 10px;
    height: 10px;
    transform: translateY(-50%) rotate(45deg);
  }
}
.child-view {
  position: absolute;
  width: 100%;
  transition: all .2s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  transform: translate(60px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  transform: translate(-60px, 0);
}
</style>
