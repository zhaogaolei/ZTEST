<template>
  <div class="demo-home">
    <h1 class="demo-home-title">
      <span>ZMJD</span>
    </h1>
    <div
      v-for="(group,index) in navs"
      :key="index"
    >
      <div
        class="demo-nav-title"
        v-text="group.title"
      />
      <router-link
        class="demo-nav-block"
        v-for="(item,i) in group.list"
        :key="i"
        :to="item.path"
      >
        {{ item.title || item.name }}
        <i class="demo-nav-icon" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { navs } from '../router'
export default {
  name: 'Home',
  data () {
    return {
      navs: []
    }
  },
  created () {
    this.navs = navs
  }
}
</script>
<style lang="less" scoped>
.demo-home {
    box-sizing: border-box;
    width: 100%;
    min-height: 100vh;
    padding: 46px 20px 20px;
    background: #fff;
  .demo-home-title {
    margin: 0 0 16px;
    font-size: 32px;
    span{
      margin-left: 16px;
      font-weight: 500;
    }
  }
}
.demo-nav-title {
    margin: 24px 0 8px 16px;
    color: #455a6499;
    font-size: 14px;
}
.demo-nav-block {
    position: relative;
    display: flex;
    margin: 0 0 12px;
    padding-left: 20px;
    color: #323233;
    font-weight: 500;
    font-size: 14px;
    line-height: 40px;
    background: #f7f8fa;
    border-radius: 99px;
    transition: background 0.3s;
}
 .demo-nav-icon::after{
    content: ' ';
    border: solid 2px  #B6C3D2;
    border-bottom-width: 0;
    border-left-width: 0;
    position: absolute;
    top: 50%;
    right: 16px;
    width: 5px;
    height: 5px;
    transform: translateY(-50%) rotate(45deg)
  }
</style>
