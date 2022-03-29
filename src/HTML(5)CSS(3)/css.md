# CSS

## 规范

### 1 属性书写顺序
1. 布局定位属性：display / position / float / clear / visibility / overflow（建议 display 第一个写，毕竟关系到模式）
2. 自身属性：width / height / margin / padding / border / background
3. 文本属性：color / font / text-decoration / text-align / vertical-align / white- space / break-word
4. 其他属性（CSS3）：content / cursor / border-radius / box-shadow / text-shadow / background:linear-gradient …

### 2 命名

#### 2.1 目录命名
* 项目文件夹：shoping
* 样式文件夹：css
* 脚本文件夹：js
* 样式类图片文件夹：img
* 产品类图片文件夹： upload
* 字体类文件夹： fonts

#### 2.2 ClassName命名
ClassName的命名应该尽量精短、明确，必须以**字母开头命名**，且**全部字母为小写**，单词之间**统一使用下划线** “_” 连接

.nav_top

#### 2.3 常用命名推荐

**注意**：ad、banner、gg、guanggao 等有机会和广告挂勾的不建议直接用来做ClassName，因为有些浏览器插件（Chrome的广告拦截插件等）会直接过滤这些类名，因此

```
<div class="ad"></div>
```

这种广告的英文或拼音类名不应该出现

另外，**敏感不和谐字眼**也不应该出现，如：

```
<div class="fuck"></div>
<div class="jer"></div>
<div class="sm"></div>
<div class="gcd"></div> 
<div class="ass"></div> 
<div class="KMT"></div> 
...
```

| ClassName              | 含义                   |
| ---------------------- | -------------------- |
| about                  | 关于                   |
| account                | 账户                   |
| arrow                  | 箭头图标                 |
| article                | 文章                   |
| aside                  | 边栏                   |
| audio                  | 音频                   |
| avatar                 | 头像                   |
| bg,background          | 背景                   |
| bar                    | 栏（工具类）               |
| branding               | 品牌化                  |
| crumb,breadcrumbs      | 面包屑                  |
| btn,button             | 按钮                   |
| caption                | 标题，说明                |
| category               | 分类                   |
| chart                  | 图表                   |
| clearfix               | 清除浮动                 |
| close                  | 关闭                   |
| col,column             | 列                    |
| comment                | 评论                   |
| community              | 社区                   |
| container              | 容器                   |
| content                | 内容                   |
| copyright              | 版权                   |
| current                | 当前态，选中态              |
| default                | 默认                   |
| description            | 描述                   |
| details                | 细节                   |
| disabled               | 不可用                  |
| entry                  | 文章，博文                |
| error                  | 错误                   |
| even                   | 偶数，常用于多行列表或表格中       |
| fail                   | 失败（提示）               |
| feature                | 专题                   |
| fewer                  | 收起                   |
| field                  | 用于表单的输入区域            |
| figure                 | 图                    |
| filter                 | 筛选                   |
| first                  | 第一个，常用于列表中           |
| footer                 | 页脚                   |
| forum                  | 论坛                   |
| gallery                | 画廊                   |
| group                  | 模块，清除浮动              |
| header                 | 页头                   |
| help                   | 帮助                   |
| hide                   | 隐藏                   |
| hightlight             | 高亮                   |
| home                   | 主页                   |
| icon                   | 图标                   |
| info,information       | 信息                   |
| last                   | 最后一个，常用于列表中          |
| links                  | 链接                   |
| login                  | 登录                   |
| logout                 | 退出                   |
| logo                   | 标志                   |
| main                   | 主体                   |
| menu                   | 菜单                   |
| meta                   | 作者、更新时间等信息栏，一般位于标题之下 |
| module                 | 模块                   |
| more                   | 更多（展开）               |
| msg,message            | 消息                   |
| nav,navigation         | 导航                   |
| next                   | 下一页                  |
| nub                    | 小块                   |
| odd                    | 奇数，常用于多行列表或表格中       |
| off                    | 鼠标离开                 |
| on                     | 鼠标移过                 |
| output                 | 输出                   |
| pagination             | 分页                   |
| pop,popup              | 弹窗                   |
| preview                | 预览                   |
| previous               | 上一页                  |
| primary                | 主要                   |
| progress               | 进度条                  |
| promotion              | 促销                   |
| rcommd,recommendations | 推荐                   |
| reg,register           | 注册                   |
| save                   | 保存                   |
| search                 | 搜索                   |
| secondary              | 次要                   |
| section                | 区块                   |
| selected               | 已选                   |
| share                  | 分享                   |
| show                   | 显示                   |
| sidebar                | 边栏，侧栏                |
| slide                  | 幻灯片，图片切换             |
| sort                   | 排序                   |
| sub                    | 次级的，子级的              |
| submit                 | 提交                   |
| subscribe              | 订阅                   |
| subtitle               | 副标题                  |
| success                | 成功（提示）               |
| summary                | 摘要                   |
| tab                    | 标签页                  |
| table                  | 表格                   |
| txt,text               | 文本                   |
| thumbnail              | 缩略图                  |
| time                   | 时间                   |
| tips                   | 提示                   |
| title                  | 标题                   |
| video                  | 视频                   |
| wrap                   | 容器，包，一般用于最外层         |
| wrapper                | 容器，包，一般用于最外层         |


## flex

[Flex 布局教程-语法篇](https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)   
[Flex 布局教程-实例篇](https://www.ruanyifeng.com/blog/2015/07/flex-examples.html)

display:flex 在容器上设置的6个属性
  - 1 flex-direction 决定主轴的方向（即项目的排列方向）[row | row-reverse | column | column-reverse]
    - row（默认值）：主轴为水平方向，起点在左端。
    - row-reverse：主轴为水平方向，起点在右端。
    - column：主轴为垂直方向，起点在上沿。
    - column-reverse：主轴为垂直方向，起点在下沿。

  - 2 flex-wrap：如果一条轴线排不下，如何换行[nowrap | wrap | wrap-reverse]
    - nowrap （默认）：不换行
    - wrap 换行，第一行在上方
    - wrap-reverse 换行，第一行在下方

  - 3 flex-flow 是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap
  - 4 justify-content 属性定义了项目在主轴上的对齐方式[flex-start | flex-end | center | space-between | space-around]
    - flex-start（默认值）：左对齐
    - flex-end：右对齐
    - center： 居中
    - space-between：两端对齐，项目之间的间隔都相等
    - space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍

  - 5 align-items 定义项目在交叉轴上如何对齐[flex-start | flex-end | center | baseline | stretch]
    - flex-start：交叉轴的起点对齐。
    - flex-end：交叉轴的终点对齐。
    - center：交叉轴的中点对齐。
    - baseline: 项目的第一行文字的基线对齐。
    - stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。

  - 6 align-content 属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用[flex-start | flex-end | center | space-between | space-around | stretch]
    - flex-start：与交叉轴的起点对齐。
    - flex-end：与交叉轴的终点对齐。
    - center：与交叉轴的中点对齐。
    - space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
    - space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
    - stretch（默认值）：轴线占满整个交叉轴。 
