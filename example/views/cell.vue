<template>
  <div>
    <h2>Cell</h2>
    <zmjd-cell
      title="标题文字"
      icon="icon-weixindenglu"
    />
    <zmjd-cell
      title="path 跳转"
      label="描述信息"
      to="toast"
      is-link
    />
    <zmjd-cell
      title="name 跳转"
      :to="{ name: 'toast' }"
      is-link
    />
    <zmjd-cell
      title="标题文字"
    >
      <span style="color: green">这里是元素</span>
    </zmjd-cell>
    <zmjd-cell
      title="百度"
      label="跳转到 https://www.baidu.com"
      url="https://www.baidu.com"
      is-link
      value="带链接"
    />
  </div>
</template>
