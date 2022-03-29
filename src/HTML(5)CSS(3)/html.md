#                                 HTML5

### 1.1 盒子模型

在网页中，一个元素占有空间的大小由几个部分构成，其中包括元素的内容（content），元素的内边距（padding），元素的边框（border），元素的外边距（margin）四个部分。这四个部分占有的空间中，有的部分可以显示相应的内容，而有的部分只用来分隔相邻的区域或区域。4个部分一起构成了css中元素的盒模型。

### 1.2 行内元素、块级元素、空元素

行内元素：a、b、span、img、input、strong、select、label、em、button、textarea
块级元素：div、ul、li、dl、dt、dd、p、h1-h6、blockquote
空元素：即没有内容的HTML元素，例如：br、meta、hr、link、input、img

### 1.3 src 与href的区别

href 是指向网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的链接，用于超链接。

src是指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置；在请求src资源时会将其指向的资源下载并应用到文档内，例如js脚本，img图片和frame等元素。当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执行完毕，图片和框架等元素也如此，类似于将所指向资源嵌入当前标签内。这也是为什么将js脚本放在底部而不是头部。

### 1.4 px 与 em

px和em都是长度单位，区别是，px的值是固定的，指定是多少就是多少，计算比较容易。em得值是相对的，em会继承父级元素的字体大小。假设浏览器的默认字体高都是16px，所以未经调整的浏览器都符合: 1em=16px。那么12px=0.75em, 10px=0.625em；

### 1.5 各个浏览器内核

| 浏览器  | 内核                                                    |
| ------- | ------------------------------------------------------- |
| IE      | trident内核                                             |
| Firefox | gecko内核                                               |
| Safari  | webkit内核                                              |
| Opera   | 以前是presto内核，Opera现已改用Google Chrome的Blink内核 |
| Chrome  | Blink(基于webkit，Google与Opera Software共同开发)       |

### 1.6 meta

参考： [meta-w3c](https://www.w3school.com.cn/tags/tag_meta.asp)  [meta-博客园](https://www.cnblogs.com/wanghuilt/archive/2012/12/23/2830073.html)

```html
<!-- keywords用来告诉搜索引擎你网页的关键字是什么 -->
    <meta name ="keywords" content="science, education,culture,politics,ecnomics，relationships, entertaiment, human">
    <!-- 网站内容描述。用来告诉搜索引擎你的网站主要内容 -->
    <meta name="description" content="This page is about the meaning of science, education,culture.">
    <!-- 
        robots用来告诉搜索机器人哪些页面需要索引，哪些页面不需要索引。
        content的参数有all,none,index,noindex,follow,nofollow。默认是all。
     -->
    <meta name="robots" content="none">


    <!-- 
        http-equiv顾名思义，类似于HTTP的头部协议，它回应给浏览器一些有用的信息，
		以帮助正确和精确地显示网页内容。
        与之对应的属性值为content，content中的内容其实就是各个参数的变量值 
    -->

    <!-- 强制页面在当前窗口以独立页面显示,用来防止别人在框架里调用自己的页面 -->
    <meta http-equiv="Window-target" content="_top">
    <!-- 设定页面使用的字符集 -->
    <meta http-equiv="content-Type" content="text/html; charset=utf-8">
```

百度首页的meta:

```html
    <!-- 百度首页的meta -->
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <!-- 
        浏览器向web服务器发送请求的时候，一般会带上Referer，
        告诉服务器我是从哪个页面链接过来的，服务器藉此可以获得一些信息用于处理。
        比如从我主页上链接到一个朋友那里，
        他的服务器就能够从HTTP Referer中统计出每天有多少用户点击我主页上的链接访问他的网站；
    -->
    <meta content="always" name="referrer">
    <meta name="theme-color" content="#2932e1">
    <meta name="description" content="全球最大的中文搜索引擎、致力于让网民更便捷地获取信息，找到所求。百度超过千亿的中文网页数据库，可以瞬间找到相关的搜索结果。">

```

天猫tmall.com的meta:

```html
<meta charset="utf-8"/>
<meta name="renderer" content="webkit"/>
<meta http-equiv="X-UA-Compatible" content="IE=Edge"/>

<meta name="spm-id" content="875.7931836/B"/>

<meta name="format-detection" content="telephone=no">
<meta name="format-detection" content="date=no">
<meta name="format-detection" content="address=no">
<meta name="keywords" content="商城,网上购物,网购,进口食品,美容护理,母婴玩具,家用电器,手机数码,家居生活,服饰内衣,营养保健,钟表珠宝,饰品箱包,汽车生活,图书音像,礼品卡"/>
<meta name="description" content="天猫，中国线上购物的地标网站，亚洲超大的综合性购物平台，拥有10万多品牌商家。每日发布大量国内外商品！正品网购，上天猫！天猫千万大牌正品,品类全，一站购，支付安全，退换无忧！理想生活上天猫!"/>

<meta property="og:title" content="天猫">
<meta property="og:type" content="website">
<meta property="og:url" content=" https://www.tmall.com/">
<meta property="og:image" content=" https://img.alicdn.com/tfs/TB1MaLKRXXXXXaWXFXXXXXXXXXX-480-260.png">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
```

jd的meta

```html
    <meta charset="utf8" version='1'/>
    <title>京东(JD.COM)-正品低价、品质保障、配送及时、轻松购物！</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes"/>
    <meta name="description"  content="京东JD.COM-专业的综合网上购物商城,销售家电、数码通讯、电脑、家居百货、服装服饰、母婴、图书、食品等数万个品牌优质商品.便捷、诚信的服务，为您提供愉悦的网上购物体验!"/>
    <meta name="Keywords" content="网上购物,网上商城,手机,笔记本,电脑,MP3,CD,VCD,DV,相机,数码,配件,手表,存储卡,京东"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta name="renderer" content="webkit"/>
```

腾讯网qq.com的meta:

```html
<meta charset="gb2312">
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
<!-- 这个代码是百度站长平bai台验证网站归属权的验du证代码 -->
<meta name="baidu-site-verification" content="cNitg6enc2" />
<meta name="baidu_union_verify" content="4508fc7dced37cf569c36f88135276d2">

<meta name="theme-color" content="#FFF" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="format-detection" content="telephone=no">
<meta content="资讯,新闻,财经,房产,视频,NBA,科技,腾讯网,腾讯,QQ,Tencent" name="Keywords">
<meta name="description" content="腾讯网从2003年创立至今，已经成为集新闻信息，区域垂直生活服务、社会化媒体资讯和产品为一体的互联网媒体平台。腾讯网下设新闻、科技、财经、娱乐、体育、汽车、时尚等多个频道，充分满足用户对不同类型资讯的需求。同时专注不同领域内容，打造精品栏目，并顺应技术发展趋势，推出网络直播等创新形式，改变了用户获取资讯的方式和习惯。" />
```

### 1.7 web存储

参考： [w3c-web存储](https://www.w3school.com.cn/html5/html_5_webstorage.asp)

HTML5 提供了两种在客户端存储数据的新方法：

- localStorage - 没有时间限制的数据存储
- sessionStorage - 针对一个 session 的数据存储。当用户关闭浏览器窗口后，数据会被删除。 

之前，这些都是由 cookie 完成的。但是 cookie 不适合大量数据的存储，因为它们由每个对服务器的请求来传递，这使得 cookie 速度很慢而且效率也不高。

在 HTML5 中，数据不是由每个服务器请求传递的，而是只有在请求时使用数据。它使在不影响网站性能的情况下存储大量数据成为可能。

对于不同的网站，数据存储于不同的区域，并且一个网站只能访问其自身的数据。

HTML5 使用 JavaScript 来存储和访问数据。
