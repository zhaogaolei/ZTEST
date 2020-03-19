## 周末酒店UI组件库

### 基础组件
> button

> icon

### 弹出层
> popup

> toast

> dialog

### 表单组件
> input 

> radio

> checkbox 

> switch

### 引入方式
```
第一步：
项目目录./lib/components.zmjd.use.js 中，统一注册组件库，例如：
import {
  Button,
  Icon
}
from 'zmjd-mobile'
Vue.use(Button)
Vue.use(Icon)

注: 1、省去每个页面都需要引入zmjd-mobile
    2、页面上可以直接用 zmjd-* 开头的组件
    3、为后续组件库独立项目做准备

第二步：
项目入口文件main.js
// 引入zmjd组件
import './lib/components.zmjd.use'
```
### 使用方式
```
属性配置参考组件注释
<zmjd-button type="primary" size="large" >primary</zmjd-button>
<zmjd-icon name="icon-shanchu" />


```
