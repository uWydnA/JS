## DOM

### 元素选择器

#### getElementById()

>  getElementById() 方法可返回对拥有指定 ID 的第一个对象的引用。 

- 语法

  ```js
  document.getElementById(id)
  ```

- 实例

  ```js
  var c = document.body.children;
  ```

  

#### getElementsByClassName()

>  getElementsByClassName() 方法可返回带有指定标签名的对象的**集合**。 

- 语法

  ```js
  document.getElementsByTagName(classname)
  ```

- 实例

  ```js
  var aCont = document.getElementsByClassName("cont");//返回的是一个集合
  ```

  

#### getElementsByTagName()

>  getElementsByTagName() 方法可返回带有指定标签名的对象的**集合**。 

- 语法

  ```js
  document.getElementsByTagName(tagname)
  ```

- 实例

  ```js
  var aSpan = document.getElementsByTagName("span");//返回的是一个集合
  ```

  

#### getElementsByName()

>  getElementsByName() 方法可返回带有指定名称的对象的**集合**。  

- 语法

  ```js
  document.getElementsByName(name)
  ```

- 实例

  ```js
  var x=document.getElementsByName("myInput");//返回的是一个集合
  ```

  

#### querySelector()

>  querySelector() 方法返回文档中匹配指定 CSS 选择器的**一个元素**。 

- 语法

  ```js
  elementList = document.querySelectorAll(selector);
  ```

- 实例

  ```js
  var ele = document.querySelector("#box");
  var ele = document.querySelector(".cont");
var ele = document.querySelector("span");
  var ele = document.querySelector(".msg h2");
  var ele = document.querySelector(".msg>h2");
  var ele = document.querySelector("input[name=pass]");
  ```
  
  

#### querySelectorAll()

>  querySelectorAll() 方法返回文档中匹配指定 CSS 选择器的**所有元素**，返回NodeList对象。 

- 语法

  ```js
  elementList = document.querySelectorAll(selectors);
  ```

- 实例

  ```js
  var ele = document.querySelectorAll("#box");
  var ele = document.querySelectorAll(".cont");
var ele = document.querySelectorAll("span");
  var ele = document.querySelectorAll(".msg h2");
  var ele = document.querySelectorAll(".msg>h2");
  var ele = document.querySelectorAll("input[name=pass]");
  var ele = document.querySelectorAll("span,p,input,div,#box,.cont")
  ```
  
  



### 关系选择器

#### .children

> children 属性返回元素的子元素的集合，是一个 HTMLCollection 对象。 

- 语法

  ```js
  element.children
  ```

- 实例

  ```js
  var c = document.body.children;
  ```

  



#### .parentNode

> parentNode 属性以 Node 对象的形式返回指定节点的父节点。
>
> 如果指定节点没有父节点，则返回 null。

- 语法

  ```js
  node.parentNode
  ```

- 实例

  ```js
  document.getElementById("item1").parentNode;
  ```

  



#### .firstElementChild

> firstElementChild 返回指定节点的最后一个子元素节点

- 语法

  ```js
  var last = oXbox.lastElementChild;
  ```

- 实例

  ```js
  var last = oXbox.lastElementChild;
  ```

  



#### .lastElementChild

> lastElementChild 返回指定节点的最后一个子元素节点

- 语法

  ```js
  var last = oXbox.lastElementChild;
  ```

- 实例

  ```js
  var last = oXbox.lastElementChild;
  ```

  



#### .previousElementSibling

>  previousElementSibling 属性返回指定元素的前一个兄弟元素（相同节点树层中的前一个元素节点）。 

- 语法

  ```js
  node.previousElementSibling
  ```

- 实例

  ```js
  var x = document.getElementById("item2").previousElementSibling.innerHTML;
  ```

  



#### .nextElementSibling

>  nextElementSibling 属性返回指定元素之后的下一个兄弟元素（相同节点树层中的下一个元素节点）

- 语法

  ```js
  node.nextElementSibling
  ```

- 实例

  ```js
  var x = document.getElementById("item1").nextElementSibling.innerHTML;
  ```

  

### 其他节点选择器

#### .childNodes

>   **Node.childNodes** 返回包含指定节点的子节点的集合，该集合为即时更新的集合（live collection）

- 语法

  ```js
  var ndList = elementNodeReference.childNodes; 
  ```

- 实例

  ```js
  var child = oxbox.childNodes;
  console.log(child);
  console.log(child[0]);
  console.log(child[1]);
  console.log(child[2]);
  console.log(child[3]);
  ```

  



#### .firstChild

>  firstChild 属性返回指定节点的首个子节点，以 Node 对象。 

- 语法

  ```js
  var childNode = node.firstChild;
  ```

- 实例

  ```js
  document.firstChild;//<!DOCTYPE html>(是一个对象)
  ```

  



#### .lastChild

>  lastChild 属性返回指定节点的最后一个子节点，以 Node 对象。 

- 语法

  ```js
  node.lastChild;
  ```

- 实例

  ```js
  document.firstChild;//<html></html>
  ```




#### .previousSibling

>   返回当前节点的前一个兄弟节点,没有则返回`null.` 

- 语法

  ```js
  previousNode = node.previousSibling
  ```

- 实例

  ```js
  // <a><b1 id="b1"/><b2 id="b2"/></a>
  alert(document.getElementById("b1").previousSibling); // null
  alert(document.getElementById("b2").previousSibling.id); // "b1"
  ```

  



#### .nextSibling

>   Node.nextSibling 是一个只读属性，返回其父节点的 [`childNodes`](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/childNodes) 列表中紧跟在其后面的节点，如果指定的节点为最后一个节点，则返回 `null`。 

- 语法

  ```js
  nextNode = node.nextSibling
  ```

- 实例

  ```js
  // <a><b1 id="b1"/><b2 id="b2"/></a>
  alert(document.getElementById("b1").nextSibling.id); // "b2"
  alert(document.getElementById("b2").nextSibling); // null
  ```

  



#### .attributes

>  `Element.attributes` 属性返回该元素所有属性节点的一个实时集合。该集合是一个 [`NamedNodeMap`](https://developer.mozilla.org/zh-CN/docs/Web/API/NamedNodeMap) 对象，不是一个数组，所以它没有 [`数组`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Array) 的方法，其包含的 [`属性`](https://developer.mozilla.org/zh-CN/docs/Web/API/Attr) 节点的索引顺序随浏览器不同而不同。更确切地说，`attributes` 是字符串形式的名/值对，每一对名/值对对应一个属性节点。 

- 语法

  ```js
  var attr = element.attributes;
  ```

- 实例

  ```js
  var obox = document.querySelector(".box");
  console.log(obox.attributes);
  console.log(obox.attributes[0]);
console.log(obox.attributes[1]);
  console.log(obox.attributes[2]);
  console.log(obox.attributes[3]);
  console.log(obox.attributes[3].abc);
  console.log(obox.attributes[4]);
  ```
  
  

### 元素的操作

#### document.createElement()

> **`Document.createElement() `**方法创建由**tagName** 指定的HTML元素，或一个[`HTMLUnknownElement`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLUnknownElement)，如果tagName不被识别。 

- 语法

  ```js
  let element = document.createElement(tagName[, options]);
  ```

- 返回值

  ```js
  新的元素[Element]
  ```

  - element 是创建的[`Element`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element)对象。
  - tagName 指定将要创建的元素类型的字符串。创建的element的[`nodeName`](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/nodeName)会被初始化为tagName的值。该方法不接受带条件的元素名字(例如: html:a)。
  - options 是一个可选的 ElementCreationOptions 对象. 如果这个对象被定义并赋予了一个 is 特性，则创建的element的 is 属性会被初始化为这个特性的值. 如果这个对象没有 is 特性，则值为空.

- 实例

  ```js
  var mydiv = document.createElement("div");//创建了一个div元素节点
  ```

  

#### childNode.remove()

> `ChildNode.remove()` 方法，把对象从它所属的 DOM 树中删除。

- 语法

  ```js
  node.remove();
  ```

- 实例

  ```js
  var el = document.getElementById('div-02');
  el.remove();//"id为'div-02"的元素被删掉了
  ```

  当你遍历一个父节点的子节点并进行删除操作时，要注意，`children`属性是一个只读属性，并且它在子节点变化时会实时更新。删除多个节点时，要注意`children`属性时刻都在变化。




#### node.removeChild()

> **Node.removeChild()** 方法从DOM中删除一个子节点。返回删除的节点。

- 语法

  ```js
  let oldChild = node.removeChild(child);
  //OR
  element.removeChild(child);
  ```

- 返回值

  注意到删除后的节点虽然不在文档树中了，但其实它还在内存中，可以随时再次被添加到别的位置。
  因此,你还可以把这个节点重新添加回文档中,当然,实现要用另外一个变量取得它的返回值。

- 实例

  ```js
  // 拿到待删除节点:
  var self = document.getElementById('to-be-removed');
  // 拿到父节点:
  var parent = self.parentElement;
  // 删除:
  var removed = parent.removeChild(self);
  console.log(removed === self )// true
  ```

  

### 属性的操作

#### setAttribute()

>   setAttribute() 方法添加指定的属性，并为其赋指定的值。
>
>   如果这个指定的属性已存在，则仅设置/更改值。

- 语法

  ```js
  element.setAttribute(attributename,attributevalue)
  ```

- 实例

  ```js
  document.getElementsByTagName("INPUT")[0].setAttribute("type","button");
  ```

  

#### getAttribute()

>    getAttribute() 方法返回指定属性名的属性值。 

- 语法

  ```js
  element.getAttribute(attributename)
  ```

- 实例

  ```js
  document.getElementsByTagName("a")[0].getAttribute("target");//_blank
  ```

  

#### removeAttribute()

>   removeAttribute() 方法删除指定的属性。
>
>   此方法与 removeAttributeNode() 方法的差异是：removeAttributeNode() 方法删除指定的 Attr 对象，而此方法删除具有指定名称的属性。结果是相同的。同时此方法不返回值，而 removeAttributeNode() 方法返回被删除的属性，以 Attr 对象的形式

- 语法

  ```js
  element.getAttribute(attributename)
  ```

- 实例

  ```js
  document.getElementsByTagName("H1")[0].removeAttribute("style");
  ```

  

#### 内置属性

可见

- 作为对象操作（点语法,中括号语法）

  ```js
  var obox = document.getElementsByClassName("box")[0];
  var a = document.getElementsByTagName("a")[0];
  var img = document.getElementsByTagName("img")[0];
  obox.className;
  obox["title"];
  obox.id;
  a.href;
  img.src;
  img["alt"];
  ```

  

- Attribute系列：set，get，remove

  ```js
  console.log(obox.getAttribute("title"))//可获得内置可见属性
  obox.setAttribute("title","123123132")//可设置内置可见属性
  obox.removeAttribute("title")//可删除内置可见属性
  ```

  

不可见

- 作为对象操作（点语法,中括号语法）

  ```js
  innerHTML,innerText,tagName
  console.log(obox.innerHTML)
  console.log(obox.innerText)
  console.log(obox.tagName)
  obox.tagName = "SPAN";//不可更改
  ```

  



#### 自定义属性

可见

- Attribute系列：set，get，remove

  ```js
  console.log(obox.abc)
  console.log(obox.href)
  console.log(obox.getAttribute("abc"))//可以获得自定义可见属性的值
  console.log(obox.getAttribute("href"))
  obox.setAttribute("qwe","hahahahah")//可以设置或修改自定义可见属性的值
  obox.setAttribute("abc","world")
  obox.removeAttribute("abc")//可以删除自定义可见属性的值
  obox.removeAttribute("href")
  ```

  

不可见

- 作为对象操作（点语法,中括号语法）

  ```js
  obox.aaa = "bbb"
  console.log(obox.aaa);//bbb
  ```



### 样式的操作

#### element.style

> 由.style设置的所有样式都会以行内样式的形式体现

- 语法

  ```js
  element.style.attribute =  ""
  ```

- 实例

  ```js
  obox.style.width = 20 + "px";
  ```



#### getComputedStyle()

>  `Window.getComputedStyle()`方法返回一个对象，该对象在应用活动样式表并解析这些值可能包含的任何基本计算后报告元素的所有CSS属性的值。 私有的CSS属性值可以通过对象提供的API或通过简单地使用CSS属性名称进行索引来访问。 
>
> **注意：该属性只能获取属性不能设置属性**

- 语法

  ```js
  let style = window.getComputedStyle(element, [pseudoElt]);
  ```

- 返回值

  ```js
  返回的style是一个实时的 CSSStyleDeclaration 对象，当元素的样式更改时，它会自动更新本身。
  ```

- 实例



#### element.currentStyle

>  **`Element.currentStyle`** 是一个与 [`window.getComputedStyle`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/getComputedStyle)方法功能相同的属性。这个属性实现在旧版本的IE浏览器（IE8及以下）中。
>
> **注意：该属性只能获取属性不能设置属性**

- 语法

  ```js
  element.currentStyle.attribute
  ```

- 实例

  ```js
  obox.currentStyle.width;
  ```



#### 兼容性获取样式方法

```js
function getStyle(ele,attr){
    if(ele.currentStyle){//判断获取到的是不是true，那么就执行IE的currentStyle，如果是undefined那么就是false，那就执行getComputedStyle()
        return ele.currentStyle[attr];//IE8及以下支持
    }else{
        return getComputedStyle(ele,false)[attr];//其他正常浏览器支持
    }
}
```



### 尺寸类样式的获取

#### offsetHeight

>  **`HTMLElement.offsetHeight`** 是一个只读属性，它返回该元素的像素高度，高度包含该元素的垂直内边距和边框，且是一个整数。**(content+padding+border)**
>
> 通常，元素的offsetHeight是一种元素CSS高度的衡量标准，包括元素的边框、内边距和元素的水平滚动条（如果存在且渲染的话），不包含:before或:after等伪类元素的高度。
>
> 对于文档的body对象，它包括代替元素的CSS高度线性总含量高。浮动元素的向下延伸内容高度是被忽略的。 
>
> 如果元素被隐藏（例如 元素或者元素的祖先之一的元素的style.display被设置为none），则返回0

- 语法

  ```js
  var intElemOffsetHeight = document.getElementById(id_attribute_value).offsetHeight;
  ```

- 实例

  ```js
  var hei = obox.offsetHeight;//返回一个整数数值
  ```

   ![Image:Dimensions-offset.png](https://developer.mozilla.org/@api/deki/files/186/=Dimensions-offset.png)

   上面的图片中显示了scollbar和窗口高度的offsetHeight.但是不能滚动的元素可能会有一个很大的高度值，大于可以看见的内容。这些元素原则上是被包含在滚动元素之中的。所以，这些不能滚动的元素可能会因为scrollTop的值会被完全隐藏或者部分隐藏； 

#### offsetWidth

>  **HTMLElement.offsetWidth** 是一个只读属性，返回一个元素的布局宽度。一个典型的（译者注：各浏览器的offsetWidth可能有所不同）offsetWidth是测量包含元素的边框(border)、水平线上的内边距(padding)、竖直方向滚动条(scrollbar)（如果存在的话）、以及CSS设置的宽度(width)的值。 
>
> **content+padding+border**

- 语法

  ```js
  var offsetWidth =element.offsetWidth;
  ```

  这个属性将会 round(四舍五入)为一个整数。如果你想要一个fractional(小数)值,请使用[`element.getBoundingClientRect()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect)

- 分类

  1. 假如元素无padding无滚动无border 

     ```
     offsetWidth = clientWidth = style.width
     ```

  2. 假如元素有padding无滚动有border

     ```
     offsetWidth = style.width + style.padding*2 + border宽度*2
     ```

  3. 假如元素有padding有滚动，有border，且滚动是显示的 

     ```
     offsetWidth = style.width + style.padding*2 + (border-width)*2
     offsetWidth = clientWidth + 滚轴宽度 + border宽度*2
     ```

      **offsetHeight同理** 

- 实例

  ```js
  var wid = obox.offsetWidth;//返回一个整数数值
  ```

  

   ![Image:Dimensions-offset.png](https://developer.mozilla.org/@api/deki/files/186/=Dimensions-offset.png) 

  



#### clientWidth

> clientWeight是一个只读属性。尺寸范围为：**padding+content**
>
> 内联元素以及没有 CSS 样式的元素的 `**clientWidth**` 属性值为 0。`**Element.clientWidth**` 属性表示元素的内部宽度，以像素计。该属性包括内边距，但不包括垂直滚动条（如果有）、边框和外边距。

- 语法

  ```js
  var intElemClientWidth = element.clientWidth;
  //intElemClientWidth 是一个整数，表示元素的 clientWidth。
  ```

- 分类

  1. 假如元素无padding无滚动

     ```
     clientWidth = style.width
     ```

  2. 假如元素有padding无滚动

     ```
     clientWidth = style.width + style.padding*2
     ```

  3. 假如元素有padding有滚动，且滚动是显示的

     ```
     clientWidth = style.width + style.padding*2 - 滚动轴宽度
     ```

     **clientHeight同理**

- 实例

  ```js
  var cw = obox.clientWidth;//返回一个整数数值
  ```

   ![Image:Dimensions-client.png](https://developer.mozilla.org/@api/deki/files/185/=Dimensions-client.png) 

#### clientHeight

> clientHeight是一个只读属性。尺寸范围为：**padding+content**

- 语法

  ```js
  var intElemClientHeight = element.clientHeight;
  //intElemClientHeight 是一个整数，表示元素的 clientHeight。
  ```

- 实例

  ```js
  var ch = obox.clientHeight;//返回一个整数数值
  ```

   ![Image:Dimensions-client.png](https://developer.mozilla.org/@api/deki/files/185/=Dimensions-client.png) 

#### offsetTop

>  **HTMLElement.offsetTop** 为只读属性，它返回当前元素相对于其 [`offsetParent`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetParent) 元素的顶部内边距的距离。 
>
> 相对于页面或包含块偏移的位置

- 语法

  ```js
  topPos = element.offsetTop;
  ```

- 实例

  ```js
  var d = document.getElementById("div1");
  var topPos = d.offsetTop;
   
  if (topPos > 10) {
    // div1 距离它的 offsetParent 元素的顶部的距离大于 10 px
  }
  ```

  

#### offsetLeft

>  **HTMLElement.offsetLeft** 为只读属性，它返回当前元素相对于其 [`offsetParent`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetParent) 元素的左边内边距的距离。 
>
> 相对于页面或包含块偏移的位置

- 语法

  ```js
  leftPos = element.offsetLeft;
  ```

- 实例

  ```js
  var d = document.getElementById("div1");
  var topLeft = d.offsetLeft;
   
  if (topLeft > 10) {
    // div1 距离它的 offsetParent 元素的顶部的距离大于 10 px
  }
  ```



#### 以上属性只能获取不能设置



#### scrollTop

> `Element.scrollTop` 属性可以获取或设置一个元素的内容垂直滚动的像素数。
>
> 一个元素的 `scrollTop` 值是这个元素的顶部到视口可见内容（的顶部）的距离的度量。当一个元素的内容没有产生垂直方向的滚动条，那么它的 `scrollTop 值为0。`

- 语法

  ```js
  // 获得滚动的像素数
  var  intElemScrollTop = someElement.scrollTop;
  
  // 设置滚动的距离
  element.scrollTop = intValue;
  ```

- 实例

  ```js
  document.onclick = function(){
      // console.log(obox.scrollTop);
      obox.scrollTop = 666;
  }
  ```

  ​								 ![Image:scrollTop.png](https://developer.mozilla.org/@api/deki/files/842/=ScrollTop.png)

#### scrolLeft

> **`Element.scrollLeft`** 属性可以读取或设置元素滚动条到元素左边的距离。
>
> 注意如果这个元素的内容排列方向（[`direction`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/direction)） 是`rtl` (right-to-left) ，那么滚动条会位于最右侧（内容开始处），并且scrollLeft值为0。此时，当你从右到左拖动滚动条时，scrollLeft会从0变为负数（这个特性在chrome浏览器中不存在）。

- 语法

  ```js
  //获取滚动条到元素左边的距离
  var sLeft = element.scrollLeft;
  
  //设置滚动条滚动了多少像素
  element.scrollLeft = 10;
  ```

  `scrollLeft` 可以是任意整数，然而：

  - 如果元素不能滚动（比如：元素没有溢出），那么`scrollLeft` 的值是0。
  - 如果给`scrollLeft` 设置的值小于0，那么`scrollLeft` 的值将变为0。
  - 如果给`scrollLeft` 设置的值大于元素内容最大宽度，那么`scrollLeft` 的值将被设为元素最大宽度。

- 实例

  ```js
  document.onclick = function(){
      // console.log(obox.scrollLeft);
      obox.scrollLeft = 666;
  }
  ```

   ![Image:Dimensions-client.png](https://developer.mozilla.org/@api/deki/files/185/=Dimensions-client.png) 





### Node类型的操作

>  DOM将任何HTML和XML文档描绘成一个由多层节点构成的结构。有几个不同类型的节点，节点又有各自的特点、数据和方法，同时节点之间存在着某种关系，这些关系构成层次。 

DOM内的节点分为四种：元素，文本，注释和属性



除 IE 之外，在其他所有浏览器中都可以访问到Node类型。
JavaScript 中的所有节点类型都继承 Node 类型，因此所有节点类型都共享着相同的基本属性和方法。

#### 12种节点类型

> **Node.ELEMENT_NODE(1);（常用）			//元素节点**
> **Node.ATTRIBUTE_NODE(2);						//属性节点**
> **Node.TEXT_NODE(3);（常用）					//文本节点**
> Node.CDATA_SECTION_NODE(4);
> Node.ENTITY_REFERENCE_NODE(5)
> Node.ENTITY_NODE(6) ;
> Node.PROCESSING_INSTRUCTION_NODE(7);
> **Node.COMMENT_NODE(8)							//注释节点**
> Node.DOCUMENT_NODE(9);
> Node.DOCUMENT_TYPE_NODE(10);
> Node.DOCUMEN_FRAGME_NODE(11);
> Node.NOTATION_NODE(12)



####  nodeType 属性 

> nodeType 属性返回以数字值返回指定节点的节点类型。
>
> 如果节点是元素节点，则 nodeType 属性将返回 1。
>
> 如果节点是属性节点，则 nodeType 属性将返回 2。

- 语法

  ```js
  node.nodeName
  ```

- 实例

  ```js
  document.body.nodeType;//1
  ```

  

#### nodeName属性

> nodeName 属性指定节点的节点名称。
>
> 如果节点是元素节点，则 nodeName 属性返回标签名。
>
> 如果节点是属性节点，则 nodeName 属性返回属性的名称。
>
> 对于其他节点类型，nodeName 属性返回不同节点类型的不同名称。

- 语法

  ```js
  node.nodeName
  ```

- 实例

  ```js
  document.body.nodeName;//BODY
  ```

  

#### nodeValue属性

> nodeValue 属性设置或返回指定节点的节点值。
>
> **注释：**如果您希望返回元素的文本，**请记住文本始终位于文本节点中**，并且您必须返回文本节点的值（element.childNodes[0].nodeValue）。
>
> **提示：**nodeValue 属性的替代选择是 textContent 属性。
>
> **更改文本节点的nodeValue属性值即可改变文本节点的内容**

- 语法

  ```js
  node.nodeValue = value;
  ```

- 实例

  ```js
  var txt = document.createTextNode("123");
  txt.nodeValue = "456";
  console.log(txt)//内容变成了456；
  ```
```
  



### 操作DOM

由于HTML文档被浏览器解析后就是一棵DOM树，要改变HTML的结构，就需要通过JavaScript来操作DOM。

始终记住DOM是一个树形结构。操作一个DOM节点实际上就是这么几个操作：

- 更新：更新该DOM节点的内容，相当于更新了该DOM节点表示的HTML的内容；
- 遍历：遍历该DOM节点下的子节点，以便进行进一步操作；
- 添加：在该DOM节点下新增一个子节点，相当于动态增加了一个HTML节点；
- 删除：将该节点从HTML中删除，相当于删掉了该DOM节点的内容以及它包含的所有子节点。



在操作一个DOM节点前，我们需要通过各种方式`先拿到这个DOM节点`。

**第一种方法**或者**最常用的方法**是：

- **document.getElementById()**

- **document.getElementsByTagName()**

- **CSS选择器document.getElementsByClassName()**

由于ID在HTML文档中是唯一的，所以`document.getElementById()`可以直接定位唯一的一个DOM节点。`document.getElementsByTagName()`和`document.getElementsByClassName()`总是返回一组DOM节点。要精确地选择DOM，可以先定位父节点，再从父节点开始选择，以缩小范围。

​```js
// 返回ID为'test'的节点：
var test = document.getElementById('test');

// 先定位ID为'test-table'的节点，再返回其内部所有tr节点：
var trs = document.getElementById('test-table').getElementsByTagName('tr');

// 先定位ID为'test-div'的节点，再返回其内部所有class包含red的节点：
var reds = document.getElementById('test-div').getElementsByClassName('red');

// 获取节点test下的所有直属子节点:
var cs = test.children;

// 获取节点test下第一个、最后一个子节点：
var first = test.firstElementChild;
var last = test.lastElementChild;
```



**第二种方法**是使用`querySelector()`和`querySelectorAll()`，需要了解selector语法，然后使用条件来获取节点，更加方便：

```
// 通过querySelector获取ID为q1的节点：
var q1 = document.querySelector('#q1');

// 通过querySelectorAll获取q1节点内的符合条件的所有节点：
var ps = q1.querySelectorAll('div.highlighted > p');
```

注意：低版本的IE<8不支持`querySelector`和`querySelectorAll`。IE8仅有限支持。

严格地讲，我们这里的DOM节点是指`Element`，但是DOM节点实际上是`Node`，在HTML中，`Node`包括`Element`、`Comment`、`CDATA_SECTION`等很多种，以及根节点`Document`类型，但是，绝大多数时候我们只关心`Element`，也就是实际控制页面结构的`Node`，其他类型的`Node`忽略即可。根节点`Document`已经自动绑定为全局变量`document`。

#### 更新DOM

#####  innerHTML 

>  可以修改一个DOM节点的文本内容，还可以直接通过HTML片段修改DOM节点内部的子树 

```js
// 获取<p id="p-id">...</p>
var p = document.getElementById('p-id');
// 设置文本为abc:
p.innerHTML = 'ABC'; // <p id="p-id">ABC</p>
// 设置HTML:
p.innerHTML = 'ABC <span style="color:red">RED</span> XYZ';
// <p>...</p>的内部结构已修改
```

 用`innerHTML`时要注意，是否需要写入HTML。如果写入的字符串是通过网络拿到了，要注意对字符编码来避免XSS攻击。 

通过**innerHTML**和**数组遍历**实现多行多列的商品列表： [商品列表.html](..\作业\day08\商品列表.html) 



##### innerText || textContent

>  可以自动对字符串进行HTML编码，保证无法设置任何HTML标签 

```js
// 获取<p id="p-id">...</p>
var p = document.getElementById('p-id');
// 设置文本:
p.innerText = '<script>alert("Hi")</script>';
// HTML被自动编码，无法设置一个<script>节点:
// <p id="p-id">&lt;script&gt;alert("Hi")&lt;/script&gt;</p>
```

 两者的区别在于读取属性时，`innerText`不返回隐藏元素的文本，而`textContent`返回所有文本。另外注意IE<9不支持`textContent`。 



#####  修改CSS 

>  DOM节点的`style`属性对应所有的CSS，可以直接获取或设置 

 因为CSS允许`font-size`这样的名称，但它并非JavaScript有效的属性名，所以需要在JavaScript中改写为**驼峰式命名**`fontSize` ：

```js
// 获取<p id="p-id">...</p>
var p = document.getElementById('p-id');
// 设置CSS:
p.style.color = '#ff0000';
p.style.fontSize = '20px';
p.style.paddingTop = '2em';
```



#### 插入DOM



##### appendChild()

>  把一个子节点添加到父节点的最后一个子节点 

```js
<!-- HTML结构 -->
<p id="js">JavaScript</p>
<div id="list">
    <p id="java">Java</p>
    <p id="python">Python</p>
    <p id="scheme">Scheme</p>
</div>
```

```js
var
    js = document.getElementById('js'),
    list = document.getElementById('list');
list.appendChild(js);
```

现在，HTML结构变成了这样：

```js
<!-- HTML结构 -->
<div id="list">
    <p id="java">Java</p>
    <p id="python">Python</p>
    <p id="scheme">Scheme</p>
    <p id="js">JavaScript</p>
</div>
```

 因为我们插入的`js`节点已经存在于当前的文档树，因此这个节点首先会从原先的位置删除，再插入到新的位置。 

##### insertBefore()

>  把子节点插入到指定的位置 

- 语法

  ```js
  document.getElementById("myList").insertBefore(newItem,existingItem);
  ```

- 实例

  ```js
  var
      list = document.getElementById('list'),
      ref = document.getElementById('python'),
      haskell = document.createElement('p');
  haskell.id = 'haskell';
  haskell.innerText = 'Haskell';
  list.insertBefore(haskell, ref);//把haskell节点 放在ref节点之前
  ```

  









### Event 对象

> ​	Event 对象代表事件的状态，比如事件在其中发生的元素、键盘按键的状态、鼠标的位置、鼠标按钮的状态。
>
> ​	事件通常与函数结合使用，函数不会在事件发生前被执行！
>
> ​	注意，所有事件的语法都是一样的，行为的触发方式有区别

#### 鼠标事件

| 定义     | 事件名      |
| -------- | ----------- |
| 左键单击 | click       |
| 双击     | dblclick    |
| 右键单击 | contextmenu |
| 按下     | mousedown   |
| 移动     | mousemove   |
| 抬起     | mouseup     |
| 进入     | mouseover   |
| 离开     | mouseout    |



#### 键盘事件

| 定义 | 事件名   | 备注                     |
| ---- | -------- | ------------------------ |
| 按下 | keydown  | 一般作用于能加焦点的元素 |
| 抬起 | keyup    | 一般作用于能加焦点的元素 |
| 敲击 | keypress | 一般作用于能加焦点的元素 |



#### 表单事件

| 定义     | 事件名 | 备注           |
| -------- | ------ | -------------- |
| 获取焦点 | focus  |                |
| 失去焦点 | blur   |                |
| 内容改变 | change | 失去焦点后触发 |
| 提交     | submit | 作用于form元素 |
| 重置     | reset  | 作用于form元素 |
| 输入     | input  | 立即触发       |



#### 浏览器事件

| 浏览器事件 | window |
| ---------- | ------ |
| 加载完成   | load   |
| 滚动       | scroll |
| 改变大小   | resize |

#####  onscroll

> 事件在元素滚动条在滚动时触发。 

- 语法

  ```js
  window.onscroll = ()=>{
  	console.log(1);
  }
  ```

- 实例

  ```js
  <body style="height: 5000px;">//有滚动条时才可以触发滚动事件
  </body>
  
  <script>
     
      window.onscroll = () => {
          console.log(1);
      }
  </script>
  ```

- 相关变量

  1. **document.documentElement.scrollTop**

     获取右滚动条的位置，可以赋值给该变量，赋值后配合事件触发会改变滚动条的位置

     ```js
         document.onclick = function(){
             document.documentElement.scrollTop += 100;
         }
     ```

     

  2. **document.documentElement.scrollLeft**

     获取下滚动条的位置，可以赋值给该变量，赋值后配合事件触发会改变滚动条的位置

     ```js
         document.onclick = function(){
             document.documentElement.scrollLeft += 100;
         }
     ```



##### onresize()

>  onresize 事件会在窗口或框架被调整大小时发生。 

- 语法

  ```js
  onresize="SomeJavaScriptCode"
  ```

- 实例

  ```js
  window.onresize = ()=>{
      console.log(document.documentElement.clientWidth);
      console.log(document.documentElement.clientHeight);
  }
  ```

- 相关变量

  1. **document.documentElement.clientWidth**

     浏览器窗口宽度

  2. **document.documentElement.clientHeight**

     浏览器窗口高度



##### onload()

>  onload 事件会在页面或图像加载完成后立即发生。 

- 语法

  ```js
  onload="SomeJavaScriptCode"
  ```

- 实例

  ```js
  <head>
      <script>
          // onload：页面和资源加载完成触发
          onload = function(){
              // console.log(1)
              var box = document.getElementById("box");
              console.log(box);
          }
  
      </script>
  </head>
  <body style="height: 3000px;">
      <div id="box">123</div>
  </body>
  ```

  按照**浏览器的渲染规则**，该实例的**JS代码**放在了body**前面**去执行，会造成先渲染到JS的时候找不到div元素，因此无法正常工作。

  因此，当JS代码放在body前面执行时，需要配合onload事件才能触发JS。