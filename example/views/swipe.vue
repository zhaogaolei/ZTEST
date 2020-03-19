<template>
  <div>
    <h2>轮播图</h2>
    <zmjd-swipe
      @change="handleChange"
      class="zmjd-swipe"
      :show-indicators="true"
      :prevent="true"
      :default-index="2"
    >
      <zmjd-swipe-item class="slide1">
        1
      </zmjd-swipe-item>
      <zmjd-swipe-item class="slide2">
        2
      </zmjd-swipe-item>
      <zmjd-swipe-item class="slide3">
        3
      </zmjd-swipe-item>
    </zmjd-swipe>
  </div>
</template>

<script>
export default {
  methods: {
    handleChange (index) {
      // console.log('轮播索引：', index)
    }
  }
}
</script>

<style lang="less" scoped>
.zmjd-swipe{
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
}
.slide1 {
  background-color: #ff2d4b;
  color: #fff;
}

.slide2 {
  background-color: green;
  color: #000;
}

.slide3 {
  background-color: #0089dc;
  color: #fff;
}
</style>
