# CSS

## 1- 基础

### 派生选择器  div p

### id选择器   #tag

### 类选择器  .tag

### 属性选择器   input[type="text"]

## 2- 样式

### 2.1背景

- 基本写法：background: #00FF00 url(bgimage.gif) no-repeat fixed top;
- 参数说明：

	- 1- 颜色 background-color
	- 2- 背景图片 background-image
	- 3- 重复方式 background-repeat
	- 4- 固定 background-attachment
	- 5- 位置 background-position

		- 方式一：top left / top right / bottom /center 等：如果仅规定一个值，另一个值默认是center
		- 方式二：x% y%

			- 左上角：0%  0%
			- 右下角：100%  100%
			- 如果您仅规定了一个值，另一个值将是 50%。

		- 方式三： xpos ypos	

			- 第一个值是水平位置，第二个值是垂直位置
			- 左上角是 0 0。单位是像素 (0px 0px) 或任何其他的 CSS 单位
			- 如果您仅规定了一个值，另一个值将是50%
			- 您可以混合使用 % 和 position 值 (如 30%  center)

- 运用：雪碧图

### 2.2文本

- color设置文本颜色

	- color_name。规定颜色值为颜色名称的颜色（比如 red）
	- hex_number。规定颜色值为十六进制值的颜色（比如 #ff0000）
	- rgb_number。规定颜色值为 rgb 代码的颜色（比如 rgb(255,0,0)）
	- inherit。规定应该从父元素继承颜色

- direction：文本方向

	- ltr默认。文本方向从左到右。
	- rtl：从右向左。
	- inherit：规定应该从父元素继承 direction 属性的值。

- line-height：行高（不允许使用负值）

	- normal：默认。设置合理的行间距。
	- number：设置数字，此数字会与当前的字体尺寸相乘来设置行间距。
	- length：设置固定的行间距。
	- %：基于当前字体尺寸的百分比行间距。
	- inherit定应该从父元素继承 line-height 属性的值。

- letter-spacing : 字符间距

	- normal：	默认。规定字符间没有额外的空间。
	- length：	定义字符间的固定空间（允许使用负值）。
	- inherit	规定应该从父元素继承 letter-spacing 属性的值。

- text-align：对齐元素中的文本

	- left：	把文本排列到左边。默认值：由浏览器决定。
	- right：	把文本排列到右边。
	- center：	把文本排列到中间。
	- justify：	实现两端对齐文本效果。
	- inherit：	规定应该从父元素继承 text-align 属性的值。

- text-decoration：文本修饰

	- none	默认。定义标准的文本。
	- underline	定义文本下的一条线。
	- overline	定义文本上的一条线。
	- line-through	定义穿过文本下的一条线。
	- blink	定义闪烁的文本。
	- inherit：	规定应该从父元素继承 text-decoration 属性的值。

- text-indent：文本缩进

	- length	定义固定的缩进。默认值：0。

		- 首行缩进p {text-indent: 5em;}
		- 悬挂缩进p {text-indent: -5em; padding-left: 5em;}

	- %	定义基于父元素宽度的百分比的缩进。
	- inherit	规定应该从父元素继承 text-indent 属性的值。

- text-shadow(文本阴影，在CSS2.1中舍弃)
- text-transform: 控制元素中的字母。

	- none	默认。定义带有小写字母和大写字母的标准的文本。
	- capitalize：文本中的每个单词以大写字母开头。
	- uppercase	定义仅有大写字母。
	- lowercase	定义无大写字母，仅有小写字母。
	- inherit	规定应该从父元素继承 text-transform 属性的值。

- white-space：设置元素中空白的处理方式

	- normal：默认。空白会被浏览器忽略。
	- pre：空白会被浏览器保留。其行为方式类似 HTML 中的 <pre> 标签。
	- nowrap：文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。
	- pre-wrap：保留空白符序列，但是正常地进行换行。
	- pre-line：合并空白符序列，但是保留换行符。
	- inherit：规定应该从父元素继承 white-space 属性的值。

- word-spacing：设置字间距

	- normal：默认。定义单词间的标准空间。
	- length：定义单词间的固定空间。
	- inherit：规定应该从父元素继承 word-spacing 属性的值。

### 2.3字体

- 概述

	- 作用：CSS 字体属性定义文本的字体系列、大小、加粗、风格（如斜体）和变形（如小型大写字母）。
	- CSS 字体系列

		- 通用字体系列 - 拥有相似外观的字体系统组合

			- Serif 字体。字符宽度就不同
			- Sans-serif 字体。字符宽度就不同
			- Monospace 字体。字符的宽度都必须完全相同，用于打印、老式终端
			- Cursive 字体。模仿人的手写体
			- Fantasy 字体。其他类型

		- 特定字体系列 - 具体的字体系列（比如 "Times" 或 "Courier"）

- font:按顺序设置。font-style font-variant font-weight font-size/line-height font-family
- font-family 规定元素的字体系列

	- family-name：用于某个元素的字体族名称或/及类族名称的一个优先表
	- inherit：规定应该从父元素继承字体系列。

- font-size 属性可设置字体的尺寸

	- xx-small，x-small，small，medium(默认)，large，x-large，xx-large
	- smaller：把 font-size 设置为比父元素更小的尺寸。
	- larger：把 font-size 设置为比父元素更大的尺寸。
	- length：把 font-size 设置为一个固定的值。
	- %：把 font-size 设置为基于父元素的一个百分比值。
	- inherit：规定应该从父元素继承字体尺寸。

- font-size-adjust	当首选字体不可用时，对替换字体进行智能缩放。（CSS2.1 已删除该属性。）
- font-stretch	对字体进行水平拉伸。（CSS2.1 已删除该属性。）
- font-style	设置字体风格。

	- normal	默认值。浏览器显示一个标准的字体样式。
	- italic	浏览器会显示一个斜体的字体样式。
	- oblique	浏览器会显示一个倾斜的字体样式。
	- inherit	规定应该从父元素继承字体样式。

- font-variant	以小型大写字体或者正常字体显示文本。

	- normal	默认值。浏览器会显示一个标准的字体。
	- small-caps	浏览器会显示小型大写字母的字体。
	- inherit	规定应该从父元素继承 font-variant 属性的值。

- font-weight	设置字体的粗细。

	- normal	默认值。定义标准的字符。
	- bold	定义粗体字符。
	- bolder	定义更粗的字符。
	- lighter	定义更细的字符。
	- 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900   定义由粗到细的字符。400 等同于 normal，而 700 等同于 bold。
	- inherit	规定应该从父元素继承字体的粗细。

### 2.4链接

- a:link - 普通的、未被访问的链接
- a:visited - 用户已访问的链接
- a:hover - 鼠标指针位于链接的上方
- a:active - 链接被点击的时刻
- 次序规则

	- a:hover 必须位于 a:link 和 a:visited 之后
	- a:active 必须位于 a:hover 之后
	- 建议次序： link-->visited-->hover-->active

### 2.5列表。允许你放置、改变列表项标志，或者将图像作为列表项标志。

- list-style	简写属性。用于把所有用于列表的属性设置于一个声明中（顺序：type、position、image）。
- list-style-image	将图象设置为列表项标志。

	- URL	图像的路径。
	- none	默认。无图形被显示。
	- inherit	规定应该从父元素继承 list-style-image 属性的值。

- list-style-position	设置列表中列表项标志的位置。

	- inside	列表项目标记放置在文本以内，且环绕文本根据标记对齐。
	- outside	默认值。保持标记位于文本的左侧。列表项目标记放置在文本以外，且环绕文本不根据标记对齐。
	- inherit	规定应该从父元素继承 list-style-position 属性的值。

- list-style-type	设置列表项标志的类型。

	- none	无标记。
	- disc	默认。标记是实心圆。
	- circle	标记是空心圆。
	- square	标记是实心方块。
	- decimal	标记是数字。
	- decimal-leading-zero	0开头的数字标记。(01, 02, 03, 等。)
	- lower-roman	小写罗马数字(i, ii, iii, iv, v, 等。)
	- upper-roman	大写罗马数字(I, II, III, IV, V, 等。)
	- lower-alpha	小写英文字母The marker is lower-alpha (a, b, c, d, e, 等。)
	- upper-alpha	大写英文字母The marker is upper-alpha (A, B, C, D, E, 等。)
	- lower-greek	小写希腊字母(alpha, beta, gamma, 等。)
	- lower-latin	小写拉丁字母(a, b, c, d, e, 等。)
	- upper-latin	大写拉丁字母(A, B, C, D, E, 等。)
	- hebrew	传统的希伯来编号方式
	- armenian	传统的亚美尼亚编号方式
	- georgian	传统的乔治亚编号方式(an, ban, gan, 等。)
	- cjk-ideographic	简单的表意数字
	- hiragana	标记是：a, i, u, e, o, ka, ki, 等。（日文片假名）
	- katakana	标记是：A, I, U, E, O, KA, KI, 等。（日文片假名）
	- hiragana-iroha	标记是：i, ro, ha, ni, ho, he, to, 等。（日文片假名）
	- katakana-iroha	标记是：I, RO, HA, NI, HO, HE, TO, 等。（日文片假名）

### 2.6表格

- border-collapse	设置是否把表格边框合并为单一的边框。

	- separate	默认值。边框会被分开。不会忽略 border-spacing 和 empty-cells 属性。
	- collapse	如果可能，边框会合并为一个单一的边框。会忽略 border-spacing 和 empty-cells 属性。
	- inherit	规定应该从父元素继承 border-collapse 属性的值。

- border-spacing	设置分隔单元格边框的距离。

	- length length

		- 规定相邻单元的边框之间的距离。使用 px、cm 等单位。不允许使用负值。
		- 如果定义一个 length 参数，那么定义的是水平和垂直间距。
		- 如果定义两个 length 参数，那么第一个设置水平间距，而第二个设置垂直间距。

	- inherit	规定应该从父元素继承 border-spacing 属性的值。

- caption-side	设置表格标题的位置。

	- top	默认值。把表格标题定位在表格之上。
	- bottom	把表格标题定位在表格之下。
	- inherit	规定应该从父元素继承 caption-side 属性的值。

- empty-cells	设置是否显示表格中的空单元格。

	- hide	不在空单元格周围绘制边框。
	- show	在空单元格周围绘制边框。默认。
	- inherit	规定应该从父元素继承 empty-cells 属性的值。

- table-layout	设置显示单元、行和列的算法。

	- automatic	默认。列宽度由单元格内容设定。
	- fixed	列宽由表格宽度和列宽度设定。
	- inherit	规定应该从父元素继承 table-layout 属性的值。

### 2.7轮廓。绘制于元素周围的一条线，位于边框边缘的外围，可起到突出元素的作用

- outline	在一个声明中设置所有的轮廓属性（顺序：outline-coloroutline-style、outline-width）。
- outline-color	设置轮廓的颜色。

	- color_name	规定颜色值为颜色名称的轮廓颜色（比如 red）。
	- hex_number	规定颜色值为十六进制值的轮廓颜色（比如 #ff0000）。
	- rgb_number	规定颜色值为 rgb 代码的轮廓颜色（比如 rgb(255,0,0)）。
	- invert	默认。执行颜色反转（逆向的颜色）。可使轮廓在不同的背景颜色中都是可见。
	- inherit	规定应该从父元素继承轮廓颜色的设置。

- outline-style	设置轮廓的样式。

	- none	默认。定义无轮廓。
	- dotted	定义点状的轮廓。
	- dashed	定义虚线轮廓。
	- solid	定义实线轮廓。
	- double	定义双线轮廓。双线的宽度等同于 outline-width 的值。
	- groove	定义 3D 凹槽轮廓。此效果取决于 outline-color 值。
	- ridge	定义 3D 凸槽轮廓。此效果取决于 outline-color 值。
	- inset	定义 3D 凹边轮廓。此效果取决于 outline-color 值。
	- outset	定义 3D 凸边轮廓。此效果取决于 outline-color 值。
	- inherit	规定应该从父元素继承轮廓样式的设置。

- outline-width	设置轮廓的宽度（不允许设置负长度值）。

	- thin	规定细轮廓。
	- medium	默认。规定中等的轮廓。
	- thick	规定粗的轮廓。
	- length	允许您规定轮廓粗细的值。
	- inherit	规定应该从父元素继承轮廓宽度的设置。

## 3- 框模型

### 模型概述

- CSS 框模型 (Box Model) 规定了元素框处理元素内容、内边距、边框 和 外边距 的方式。
- 背景应用于由内容和内边距、边框组成的区域
- 外边距可以是负值

### 内边距 padding 

- padding简写属性。作用是在一个声明中设置元素的所内边距属性(上-右-下-左)。
- padding-bottom 设置元素的下内边距。

	- length	规定以具体单位计的固定的下内边距值，比如像素、厘米等。默认值是 0px。
	- %	定义基于父元素宽度的百分比下内边距。此值不会如预期地那样工作于所有的浏览器中。
	- inherit	规定应该从父元素继承下内边距。

- padding-left	设置元素的左内边距。
- padding-right	设置元素的右内边距。
- padding-top	设置元素的上内边距。

### 边框 border （宽度、样式，以及颜色）

- border 简写属性，用于把针对四个边的属性设置在一个声明(顺序：border-width，border-style，border-color)。
- border-style	用于设置元素所有边框的样式，或者单独地为各边设置边框样式。

	- none	定义无边框。
	- hidden	与 "none" 相同。不过应用于表时除外，对于表，hidden 用于解决边框冲突。
	- dotted	定义点状边框。在大多数浏览器中呈现为实线。
	- dashed	定义虚线。在大多数浏览器中呈现为实线。
	- solid	定义实线。
	- double	定义双线。双线的宽度等于 border-width 的值。
	- groove	定义 3D 凹槽边框。其效果取决于 border-color 的值。
	- ridge	定义 3D 垄状边框。其效果取决于 border-color 的值。
	- inset	定义 3D inset 边框。其效果取决于 border-color 的值。
	- outset	定义 3D outset 边框。其效果取决于 border-color 的值。
	- inherit	规定应该从父元素继承边框样式。

- border-width	简写属性，用于为元素的所有边框设置宽度，或者单独地为各边边框设置宽度。

	- thin	定义细的边框。
	- medium	默认。定义中等的边框。
	- thick	定义粗的边框。
	- length	允许您自定义边框的宽度。
	- inherit	规定应该从父元素继承边框宽度。

- border-color	简写属性，设置元素的所有边框中可见部分的颜色，或为 4 个边分别设置颜色。

	- color_name	规定颜色值为颜色名称的边框颜色（比如 red）。
	- hex_number	规定颜色值为十六进制值的边框颜色（比如 #ff0000）。
	- rgb_number	规定颜色值为 rgb 代码的边框颜色（比如 rgb(255,0,0)）。
	- transparent	默认值。边框颜色为透明。
	- inherit	规定应该从父元素继承边框颜色。

- border-bottom	简写属性，用于把下边框的所有属性设置到一个声明中。
- 以上属性可分别单独定义四个边（eg: border-bottom,border-bottom-color,border-bottom-style,border-bottom-width）

### 外边距 margin 

- margin	简写属性。在一个声明中设置所有外边距属性。

	- auto	浏览器计算外边距。
	- length	规定以具体单位计的外边距值，比如像素、厘米等。默认值是 0px。
	- %	规定基于父元素的宽度的百分比的外边距。
	- inherit	规定应该从父元素继承外边距。

- margin-bottom	设置元素的下外边距。
- margin-left	设置元素的左外边距。
- margin-right	设置元素的右外边距。
- margin-top	设置元素的上外边距。

### 外边距合并

- 外边距合并指的是，当两个垂直外边距相遇时，它们将形成一个外边距。
- 合并后的外边距的高度等于两个发生合并的外边距的高度中的较大者。
- 只有普通文档流中块框的垂直外边距才会发生外边距合并。行内框、浮动框或绝对定位之间的外边距不会合并。

## 4- 定位

### 概述

- CSS 有三种基本的定位机制：普通流、浮动和绝对定位。

### 相对定位 relative

- “相对于”它的起点进行移动
- 素仍然占据原来的空间

### 绝对定位 position: absolute;

- 绝对定位的元素的位置相对于最近的已定位祖先元素，如果元素没有已定位的祖先元素，那么它的位置相对于最初的包含块。
- 元素原先在正常文档流中所占的空间会关闭，就好像该元素原来不存在一样
- 元素定位后生成一个块级框，而不论原来它在正常流中生成何种类型的框。
- 会覆盖页面上的其它元素

### 浮动

- 浮动的框可以向左或向右移动，直到它的外边缘碰到包含框或另一个浮动框的边框为止。
- 由于浮动框不在文档的普通流中，所以文档的普通流中的块框表现得就像浮动框不存在一样。

## 5-选择器

### 元素选择器 html {color:black;}

### 选择器分组 h2, p {color:gray;}

### 类选择器

### ID选择器

### 属性选择器

### 后代选择器 h1 em {color:red;}

### 子元素选择器 h1 > strong {color:red;}    table.company td > p

### 相邻兄弟选择器 h1 + p {margin-top:50px;}

### 伪类

- CSS 伪类用于向某些选择器添加特殊的效果。
- 在 CSS 定义中，a:hover 必须被置于 a:link 和 a:visited 之后，才是有效的。
- 在 CSS 定义中，a:active 必须被置于 a:hover 之后，才是有效的。
- 伪类名称对大小写不敏感。
- 属性

	- :active	向被激活的元素添加样式。
	- :focus	向拥有键盘输入焦点的元素添加样式。
	- :hover	当鼠标悬浮在元素上方时，向元素添加样式。
	- :link	向未被访问的链接添加样式。
	- :visited	向已被访问的链接添加样式。
	- :first-child	向元素的第一个子元素添加样式。
	- :lang	向带有指定 lang 属性的元素添加样式。

### 伪元素

-  CSS 伪元素用于向某些选择器设置特殊效果。
- 写法举例：selector:pseudo-element {property:value;}
- 属性

	- :first-letter	向文本的第一个字母添加特殊样式。
	- :first-line	向文本的首行添加特殊样式。
	- :before	在元素之前添加内容。
	- :after	在元素之后添加内容。

## 6- 高级

### 对齐

- 使用 margin 属性来水平对齐
- 使用 position 属性进行左和右对齐
- 使用 float 属性来进行左和右对齐

### 尺寸

- CSS 尺寸 (Dimension) 属性允许你控制元素的高度和宽度。同样，它允许你增加行间距。
- 允许你控制元素的高度和宽度。同样，还允许你增加行间距。

	- height	设置元素的高度。
	- line-height	设置行高（不允许使用负值）。
	- max-height	设置元素的最大高度。
	- max-width	设置元素的最大宽度。
	- min-height	设置元素的最小高度。
	- min-width	设置元素的最小宽度。
	- width	设置元素的宽度。

### 分类 Classification。规定如何以及在何处显示元素

- 1clear	设置一个元素的侧面是否允许其他的浮动元素。

	- left	在左侧不允许浮动元素。
	- right	在右侧不允许浮动元素。
	- both	在左右两侧均不允许浮动元素。
	- none	默认值。允许浮动元素出现在两侧。
	- inherit	规定应该从父元素继承 clear 属性的值。

- 2cursor	规定当指向某元素之上时显示的指针类型。

	- url。需使用的自定义光标的 URL。请在此列表的末端始终定义一种普通的光标，以防没有由 URL 定义的可用光标。
	- default	默认光标（通常是一个箭头）
	- auto	默认。浏览器设置的光标。
	- crosshair	光标呈现为十字线。
	- pointer	光标呈现为指示链接的指针（一只手）
	- move	此光标指示某对象可被移动。
	- e-resize	此光标指示矩形框的边缘可被向右（东）移动。
	- ne-resize	此光标指示矩形框的边缘可被向上及向右移动（北/东）。
	- nw-resize	此光标指示矩形框的边缘可被向上及向左移动（北/西）。
	- n-resize	此光标指示矩形框的边缘可被向上（北）移动。
	- se-resize	此光标指示矩形框的边缘可被向下及向右移动（南/东）。
	- sw-resize	此光标指示矩形框的边缘可被向下及向左移动（南/西）。
	- s-resize	此光标指示矩形框的边缘可被向下移动（南）。
	- w-resize	此光标指示矩形框的边缘可被向左移动（西）。
	- text	此光标指示文本。
	- wait	此光标指示程序正忙（通常是一只表或沙漏）。
	- help	此光标指示可用的帮助（通常是一个问号或一个气球）。

- 3display	设置是否及如何显示元素。

	- none	此元素不会被显示。
	- block	此元素将显示为块级元素，此元素前后会带有换行符。
	- inline	默认。此元素会被显示为内联元素，元素前后没有换行符。
	- inline-block	行内块元素。（CSS2.1 新增的值）
	- list-item	此元素会作为列表显示。
	- run-in	此元素会根据上下文作为块级元素或内联元素显示。
	- compact	CSS 中有值 compact，不过由于缺乏广泛支持，已经从 CSS2.1 中删除。
	- marker	CSS 中有值 marker，不过由于缺乏广泛支持，已经从 CSS2.1 中删除。
	- table	此元素会作为块级表格来显示（类似 <table>），表格前后带有换行符。
	- inline-table	此元素会作为内联表格来显示（类似 <table>），表格前后没有换行符。
	- table-row-group	此元素会作为一个或多个行的分组来显示（类似 <tbody>）。
	- table-header-group	此元素会作为一个或多个行的分组来显示（类似 <thead>）。
	- table-footer-group	此元素会作为一个或多个行的分组来显示（类似 <tfoot>）。
	- table-row	此元素会作为一个表格行显示（类似 <tr>）。
	- table-column-group	此元素会作为一个或多个列的分组来显示（类似 <colgroup>）。
	- table-column	此元素会作为一个单元格列显示（类似 <col>）
	- table-cell	此元素会作为一个表格单元格显示（类似 <td> 和 <th>）
	- table-caption	此元素会作为一个表格标题显示（类似 <caption>）
	- inherit	规定应该从父元素继承 display 属性的值。

- 4float	定义元素在哪个方向浮动。

	- left	元素向左浮动。
	- right	元素向右浮动。
	- none	默认值。元素不浮动，并会显示在其在文本中出现的位置。
	- inherit	规定应该从父元素继承 float 属性的值。

- 5position	把元素放置到一个静态的、相对的、绝对的、或固定的位置中。

	- absolute
	- 生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。
	- 元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。
	- fixed
	- 生成绝对定位的元素，相对于浏览器窗口进行定位。
	- 元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。
	- relative
	- 生成相对定位的元素，相对于其正常位置进行定位。
	- 因此，"left:20" 会向元素的 LEFT 位置添加 20 像素。
	- static	默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）。
	- inherit	规定应该从父元素继承 position 属性的值。
	- 6visibility	设置元素是否可见或不可见。

		- visible	默认值。元素是可见的。
		- hidden	元素是不可见的。
		- collapse	当在表格元素中使用时，此值可删除一行或一列，但是它不会影响表格的布局。被行或列占据的空间会留给其他内容使用。如果此值被用在其他的元素上，会呈现为 "hidden"。
		- inherit	规定应该从父元素继承 visibility 属性的值。

### 导航栏

### 图片库

### 图片透明

### 媒介类型

- 媒介类型(Media Types)允许你定义以何种媒介来提交文档。文档可以被显示在显示器、纸媒介或者听觉浏览器等等。
- @media 规则使你有能力在相同的样式表中，使用不同的样式规则来针对不同的媒介。
- 不同的媒介类型（大小写不敏感）

	- all	用于所有的媒介设备。
	- aural	用于语音和音频合成器。
	- braille	用于盲人用点字法触觉回馈设备。
	- embossed	用于分页的盲人用点字法打印机。
	- handheld	用于小的手持的设备。
	- print	用于打印机。
	- projection	用于方案展示，比如幻灯片。
	- screen	用于电脑显示器。
	- tty	用于使用固定密度字母栅格的媒介，比如电传打字机和终端。
	- tv	用于电视机类型的设备。

