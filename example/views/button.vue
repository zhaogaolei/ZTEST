<template>
  <div>
    <h2>按钮组件</h2><br>
    默认按钮<br>
    <zmjd-button type="default">
      default
    </zmjd-button>
    <zmjd-button type="primary">
      primary
    </zmjd-button>
    <zmjd-button type="danger">
      danger
    </zmjd-button>
    <br> <br> <br>
    改变颜色
    <zmjd-button
      type="default"
      size="large"
    >
      default
    </zmjd-button>
    <br>
    <zmjd-button
      type="primary"
      size="large"
    >
      primary
    </zmjd-button>
    <br>
    <zmjd-button
      type="danger"
      size="large"
    >
      danger
    </zmjd-button>
    <br> <br> <br>
    朴素按钮
    <zmjd-button
      type="default"
      size="large"
      plain
    >
      default
    </zmjd-button>
    <br>
    <zmjd-button
      type="primary"
      size="large"
      plain
    >
      primary
    </zmjd-button>
    <br>
    <zmjd-button
      type="danger"
      size="large"
      plain
      @click="handleClick"
    >
      点我啊
    </zmjd-button><br>
    <zmjd-button icon="icon-icon_back">
      返回
    </zmjd-button>
    <zmjd-button
      type="primary"
      icon="icon-img_search1"
    >
      搜索
    </zmjd-button>
    <zmjd-button
      type="danger"
      icon="icon-shanchu"
    >
      删除
    </zmjd-button>
    <br><br>
    <zmjd-button>
      <img
        src="//gw.alicdn.com/tfs/TB1jwakrbH1gK0jSZFwXXc7aXXa-20-20.png"
        height="20"
        width="20"
        slot="icon"
      >
      带自定义图标
    </zmjd-button><br>
    <zmjd-button disabled>
      按钮禁用
    </zmjd-button>
  </div>
</template>
<script>
export default {
  methods: {
    handleClick (e) {
      console.log('e============>', e)
      alert('测试点击事件')
    }
  }
}
</script>
