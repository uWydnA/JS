### Event 对象

> ​	Event 对象代表事件的状态，比如事件在其中发生的元素、键盘按键的状态、鼠标的位置、鼠标按钮的状态。
>
> ​	事件通常与函数结合使用，函数不会在事件发生前被执行！
>
> ​	注意，所有事件的语法都是一样的，行为的触发方式有区别

**只有在事件发生的时候，才会产生事件对象，无法手动创建，并且事件对象只能在处理函数内部访问，处理函数允许结束后该对象自动销毁**

绑定方式：赋值式

```js
元素.事件名 = function(){};
```

- 事件源：元素，绑定事件的元素
- 事件类型：onclick：触发事件的行为
- 事件处理函数：function：触发这个事件时要做的事情

#### 获取事件对象

事件处理函数的第一个参数：正常浏览器

```js
var obox = document.querySelector(".box");
obox.onclick = function(eve){
    console.log(eve);
}
```



通过window找event属性：IE浏览器

```js
var obox = document.querySelector(".box");
obox.onclick = function(eve){
	console.log(window.event);
}
```

##### 兼容性写法

```js
var obox = document.querySelector(".box");
obox.onclick = function(eve){
	var e = eve || window.event;
}
```

##### type

事件类型

```js
var obox = document.querySelector(".box");
obox.onclick = function(eve){
	var e = eve || window.event;
	console.log(e.type)//click，这里显示触发事件的类型
}
```

##### target

> 触发事件的对象 (某个DOM元素) 的引用。当事件处理程序在事件的冒泡或捕获阶段被调用时，它与[`event.currentTarget`](https://developer.mozilla.org/zh-CN/docs/Web/API/Event/currentTarget)不同。

```js
var obox = document.querySelector(".box");
obox.onclick = function(eve){
	var e = eve || window.event;
	console.log(e.target)//<div class="box></div>"，这里显示触发事件的对象
}
```

##### button

> **`mouseEvent.button`**是只读属性，它返回一个值，代表用户按下并触发了事件的鼠标按键。
>
> 这个属性只能够表明在触发事件的单个或多个按键按下或释放过程中哪些按键被按下了。因此，它对判断`mouseenter`, `mouseleave`, `mouseover`, `mouseout` or `mousemove`这些事件并不可靠。
>
> 用户可能会改变鼠标按键的配置，因此当一个事件的**`MouseEvent.button`**值为0时，它可能不是由物理上设备最左边的按键触发的。但是对于标准按键布局的鼠标设备来说，这个值应该是能正确使用的。

- 语法

  ```js
  var buttonPressed = instanceOfMouseEvent.button
  ```

- 返回值

  一个数值，代表按下的鼠标按键：
  
  0：主按键被按下，通常指鼠标左键 or the un-initialized state
  1：辅助按键被按下，通常指鼠标滚轮 or the middle button (if present)
  2：次按键被按下，通常指鼠标右键
  3：第四个按钮被按下，通常指浏览器后退按钮
  4：第五个按钮被按下，通常指浏览器的前进按钮
  对于配置为左手使用的鼠标，按键操作将正好相反。此种情况下，从右至左读取值。
  
- 实例

  ```js
  var whichButton = function (e) {
      // Handle different event models
      var e = e || window.event;
      var btnCode;
  
      if ('object' === typeof e) {
          btnCode = e.button;
  
          switch (btnCode) {
              case 0:
                  console.log('Left button clicked.');
              break;
  
              case 1:
                  console.log('Middle button clicked.');
              break;
  
              case 2:
                  console.log('Right button clicked.');
              break;
  
              default:
                  console.log('Unexpected code: ' + btnCode);
          }
      }
  }
  ```

  

##### buttons

返回对应的鼠标按键



#### MouseEvent.

![img](file:///D:/APP/feiq/Recv%20Files/JavaScript/%E8%AF%BE%E4%BB%B6/day11/%E4%BA%8B%E4%BB%B6%E5%AF%B9%E8%B1%A1-%E4%B8%8A_files/Image%20[3].png)

鼠标相对于事件源的坐标

##### offsetX

> [`MouseEvent`](https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent) 接口的只读属性 **offsetX** 规定了事件对象与目标节点的内填充边（padding edge）在 X 轴方向上的偏移量。
>
> 鼠标相对于事件源的坐标

- 语法

  ```js
  var xOffset = instanceOfMouseEvent.offsetX;
  ```

- 返回值

  ```js
  一个双精度浮点值。早期的规范将其规定为整数值。详见浏览器兼容性部分。
  ```

- 实例

  ```js
  var box = document.querySelector(".box");
  box.onclick = (eve)=>{
  var e = eve || window.event;
  console.log(e.offsetX,e.offsetY)
  console.log(e.clientX,e.clientY)
  console.log(e.pageX,e.pageY)
  console.log(e.screenX,e.screenY)
  
  }
  ```

  

##### offsetY

> [`MouseEvent`](https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent) 接口的只读属性 **offsetX** 规定了事件对象与目标节点的内填充边（padding edge）在 X 轴方向上的偏移量。
>
> 鼠标相对于事件源的坐标

- 语法

  ```js
  var xOffset = instanceOfMouseEvent.offsetX;
  ```

- 返回值

  ```js
  一个双精度浮点值。早期的规范将其规定为整数值。详见浏览器兼容性部分。
  ```

- 实例

  ```js
  var box = document.querySelector(".box");
  box.onclick = (eve)=>{
  var e = eve || window.event;
  console.log(e.offsetX,e.offsetY)
  console.log(e.clientX,e.clientY)
  console.log(e.pageX,e.pageY)
  console.log(e.screenX,e.screenY)
  
  }
  ```





鼠标相对于页面可视区域的坐标

##### clientX

> **`MouseEvent.clientX`** 是只读属性， 它提供事件发生时的应用客户端区域的水平坐标 (与页面坐标不同)。例如，不论页面是否有水平滚动，当你点击客户端区域的左上角时，鼠标事件的 `clientX` 值都将为 0 。最初这个属性被定义为长整型（long integer），如今 **CSSOM** 视图模块将其重新定义为双精度浮点数（double float）。
>
> 鼠标相对于页面可视区域的坐标

- 语法

  ```js
  var x = instanceOfMouseEvent.clientX
  ```

- 返回值

  ```js
  被 CSSOM View Module 重新定义为一个 double 类型的浮点值. 原来这个属性是被定义为一个 long 整数. 可以在 "浏览器兼容性" 那里查看详细内容.
  ```

- 实例

  ```js
  var box = document.querySelector(".box");
  box.onclick = (eve)=>{
  var e = eve || window.event;
  console.log(e.offsetX,e.offsetY)
  console.log(e.clientX,e.clientY)
  console.log(e.pageX,e.pageY)
  console.log(e.screenX,e.screenY)
  
  }
  ```





##### clientY

> **`MouseEvent.clientX`** 是只读属性， 它提供事件发生时的应用客户端区域的Y坐标 (与页面坐标不同)。例如，不论页面是否有水平滚动，当你点击客户端区域的左上角时，鼠标事件的 `clientX` 值都将为 0 。最初这个属性被定义为长整型（long integer），如今 **CSSOM** 视图模块将其重新定义为双精度浮点数（double float）。
>
> 鼠标相对于页面可视区域的坐标

- 语法

  ```js
  var x = instanceOfMouseEvent.clientY
  ```

- 返回值

  ```js
  被 CSSOM View Module 重新定义为一个 double 类型的浮点值. 原来这个属性是被定义为一个 long 整数. 可以在 "浏览器兼容性" 那里查看详细内容.
  ```

- 实例

  ```js
  var box = document.querySelector(".box");
  box.onclick = (eve)=>{
  var e = eve || window.event;
  console.log(e.offsetX,e.offsetY)
  console.log(e.clientX,e.clientY)
  console.log(e.pageX,e.pageY)
  console.log(e.screenX,e.screenY)
  
  }
  ```







鼠标相对于页面的坐标

##### pageX

> `pageX` 是一个由[`MouseEvent`](https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent)接口返回的相对于整个文档的x（水平）坐标以像素为单位的只读属性。
>
> 这个属性将基于文档的边缘，考虑任何页面的水平方向上的滚动。举个例子，如果页面向右滚动 200px 并出现了滚动条，这部分在窗口之外，然后鼠标点击距离窗口左边 100px 的位置，pageX 所返回的值将是 300。
>
> 起初这个属性被定义为长整型。 CSSOM 视图模块将它重新定位为双浮点数类型。请参阅浏览器兼容性部分了解详情。
>
> 鼠标相对于页面的坐标

- 语法

  ```js
  var pos = event.pageX
  ```

- 实例

  ```js
  var box = document.querySelector(".box");
  box.onclick = (eve)=>{
  var e = eve || window.event;
  console.log(e.offsetX,e.offsetY)
  console.log(e.clientX,e.clientY)
  console.log(e.pageX,e.pageY)
  console.log(e.screenX,e.screenY)
  
  }
  ```





##### pageY

> pageY` 是一个由[`MouseEvent`](https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent)接口返回的相对于整个文档的Y（水平）坐标以像素为单位的只读属性。
>
> 鼠标相对于页面的坐标

- 语法

  ```js
  var pos = event.pageY
  ```

- 实例

  ```js
  var box = document.querySelector(".box");
  box.onclick = (eve)=>{
  var e = eve || window.event;
  console.log(e.offsetX,e.offsetY)
  console.log(e.clientX,e.clientY)
  console.log(e.pageX,e.pageY)
  console.log(e.screenX,e.screenY)
  }
  ```







鼠标相对于屏幕的坐标

##### screenX

> **`screenX`** 是只读属性，他提供了鼠标相对于屏幕坐标系的水平偏移量。
>
> 鼠标相对于屏幕的坐标

- 语法

  ```js
  var pixelNumber = instanceOfMouseEvent.screenX
  ```

- 返回值

  ```js
  一个双浮点值。早期版本的规格定义这是一个 整数指的像素数。有关详细信息，请参见浏览器兼容性部分。
  ```

- 实例

  ```js
  var box = document.querySelector(".box");
  box.onclick = (eve)=>{
      var e = eve || window.event;
      console.log(e.offsetX,e.offsetY)
      console.log(e.clientX,e.clientY)
      console.log(e.pageX,e.pageY)
      console.log(e.screenX,e.screenY)
  }
  ```





##### screenY

> **`screenY`** 是只读属性，他提供了鼠标相对于屏幕坐标系的垂直偏移量。
>
> 鼠标相对于屏幕的坐标

- 语法

  ```js
  var pixelNumber = instanceOfMouseEvent.screenY
  ```

- 返回值

  ```js
  一个双浮点值。早期版本的规格定义这是一个 整数指的像素数。有关详细信息，请参见浏览器兼容性部分。
  ```

- 实例

  ```js
  var box = document.querySelector(".box");
  box.onclick = (eve)=>{
  var e = eve || window.event;
  console.log(e.offsetX,e.offsetY)
  console.log(e.clientX,e.clientY)
  console.log(e.pageX,e.pageY)
  console.log(e.screenX,e.screenY)
  
  }
  ```



#### KeyboardEvent.

> `KeyboardEvent `对象描述了键盘的交互方式。 每个事件都描述了一个按键（Each event describes a key）；事件类型`keydown`， `keypress` 与 `keyup` 可以确定是哪种事件在活动。



##### keyCode

> 返回当前按键的ASCII码

|      | ASCII码 |
| ---- | ------- |
| 空格 | 32      |
| 回车 | 13      |
| 左   | 37      |
| 上   | 38      |
| 右   | 39      |
| 下   | 40      |



##### which 

##### 兼容性写法

```js
document.onkeydown = function(eve){
        var e = eve || window.event;
        var code = e.keyCode || e.which;
    }
```

##### ctrlKey

> 鼠标事件**ctrlKey是只读属性，可返回一个布尔值，当ctrl键被按下，返回true，否则返回false**

- 语法

  ```js
  var ctrlKeyPressed = instanceOfMouseEvent.ctrlKey
  ```

- 返回值

  ```js
  A boolean
  ```

- 实例

  ```
  document.onkeypress = ()=>{
  	console.log(e.ctrlKey);/如果按下了ctrl就为true,没按下ctrl就为false
  }
  ```

  

##### altKey

> 鼠标事件**altKey是只读属性，可返回一个布尔值，当alt键被按下，返回true，否则返回false**

- 语法

  ```js
  var altKeyPressed = instanceOfMouseEvent.altKey
  ```

- 返回值

  ```js
  A boolean
  ```

- 实例

  ```js
  document.onkeypress = ()=>{
  	console.log(e.altKey);/如果按下了alt就为true,没按下alt就为false
  }
  ```

  

##### shiftKey

> 鼠标事件**shiftKey是只读属性，可返回一个布尔值，当shift键被按下，返回true，否则返回false**

- 语法

  ```js
  var shiftKeyPressed = instanceOfMouseEvent.shiftKey
  ```

- 返回值

  ```js
  A boolean
  ```

- 实例

  ```
  document.onkeypress = ()=>{
  	console.log(e.shiftKey);/如果按下了shift就为true,没按下shift就为false
  }
  ```

  

#### 事件冒泡

> 当内层元素的事件被触发时，会依次向上触发所有父级的相同事件，即便父级没有事件处理函数，但父级有事件，因此依然会往上冒泡



##### event.stopPropagation

> 阻止捕获和冒泡阶段中当前事件的进一步传播。

- 语法

  ```js
  event.stopPropagation(); 
  ```

- 实例

  ```js
  function stopBubble(e) {
      if (e.stopPropagation) {
          e.stopPropagation();
      } else {
          e.cancelBubble = true;
      }
  }
  ```

  

##### event.cancelBubble

> 获取或设置一个布尔值,表明当前事件是否要取消冒泡.

- 语法

  ```js
  event.cancelBubble = bool;
  var bool = event.cancelBubble;
  ```

  如果一个事件是可冒泡的,则它的cancelBubble`属性的默认值为 `false`,代表允许该事件向上冒泡. 将`cancelBubble`属性设置为`true以后,可以阻止该事件的进一步冒泡行为.

- 实例

  ```js
  function stopBubble(e) {
      if (e.stopPropagation) {
          e.stopPropagation();
      } else {
          e.cancelBubble = true;
      }
  }
  ```



#### 阻止浏览器默认行为

##### Event.returnValue

>  `Event.returnValue` 属性表示该事件的默认操作是否已被阻止。默认情况下，它被设置为true，允许发生默认操作。将该属性设置为false，可以防止默认操作。

- 语法

  ```js
  event.returnValue = bool;
  var bool = event.returnValue;
  ```

- 实例

  ```js
  e.returnValue = false;
  ```

##### Event.preventDefault

> [`Event`](https://developer.mozilla.org/zh-CN/docs/Web/API/Event) 接口的 `preventDefault()`方法，告诉[user agent](https://developer.mozilla.org/en-US/docs/Glossary/user_agent)：如果此事件没有被显式处理，那么它默认的动作也不要做（因为默认是要做的）。此事件还是继续传播，除非碰到事件侦听器调用[`stopPropagation()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Event/stopPropagation) 或[`stopImmediatePropagation()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Event/stopImmediatePropagation)，才停止传播。

- 语法

  ```js
  event.preventDefault();
  ```

- 返回值

  **undefined**

- 实例

  ```js
  e.preventDefault()
  ```




##### 兼容性写法

```js
function stopDefault(e){
    if(e.preventDefault)	e.preventDefault();//兼容其他浏览器
    else	e.returnValue = false;//兼容IE
}
```



##### return false

在某一事件类型的事件处理函数结尾加上`return false`会阻止该事件类型的默认行为



#### 事件流

>  事件触发阶段主要由于事件流：DOM0级事件处理阶段和DOM2级事件处理

##### 	DOM0级事件

​		通过一种赋值方式，是被所有浏览器所支持的，简单易懂容易操作：元素.onclick = function(){}

##### 	DOM2级事件

​		通过所有DOM节点中的方法，可以重复绑定，但是浏览器兼容存在问题

##### 	触发顺序

 - 事件冒泡：从里向外
 - 事件捕获：从外向内
 - 目标阶段：当前元素的当前事件

![img](file:///D:/APP/feiq/Recv%20Files/JavaScript/%E8%AF%BE%E4%BB%B6/day12/%E4%BA%8B%E4%BB%B6%E5%AF%B9%E8%B1%A1-%E4%B8%8B_files/Image.jpg)





#### 事件监听器

##### addEventListener()

> **EventTarget.addEventListener()** 方法将指定的监听器注册到 [`EventTarget`](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget) 上，当该对象触发指定的事件时，指定的回调函数就会被执行。 事件目标可以是一个文档上的元素 [`Element`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element),[`Document`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document)和[`Window`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window)或者任何其他支持事件的对象 (比如 `XMLHttpRequest`)`。`
>
> `addEventListener()`的工作原理是将实现[`EventListener`](https://developer.mozilla.org/zh-CN/docs/Web/API/EventListener)的函数或对象添加到调用它的[`EventTarget`](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget)上的指定事件类型的事件侦听器列表中。

- 语法

  ```js
  target.addEventListener(type, listener[, options]);
  target.addEventListener(type, listener[, useCapture]);
  target.addEventListener(type, listener[, useCapture, wantsUntrusted  ]);  // Gecko/Mozilla only
  ```

- 返回值

  **undefined**

- 实例

  ```js
  var obox = document.querySelector(".box");
  obox.addEventListener("click",function(){
      console.log(1);
  })
  ```




##### add兼容性写法

```js
function addEvent(ele,type,callback){
    if(ele.attachEvent)	ele.attachEvent("on"+type,callback);//兼容IE
    else	ele.addEventListener(type,callback);
}
```



##### removeEventListener()

> 删除使用 [`EventTarget.addEventListener()`](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener) 方法添加的事件。使用事件类型，事件侦听器函数本身，以及可能影响匹配过程的各种可选择的选项的组合来标识要删除的事件侦听器。

- 语法

  ```js
  target.removeEventListener(type, listener[, options]);
  target.removeEventListener(type, listener[, useCapture]);
  ```

  

- 实例

  ```js
  var obox = document.querySelector(".box");
  function fn1(){
      console.log(1);
  }
  obox.addEventListener("click",fn1)
  obox.removeEventListener("click",fn1)
  ```




##### remove兼容性写法

```js
function removeEvent(ele,type,callback){
	if(ele.detachEvent)	ele.detachEvent("on"+type,callback);//兼容IE
    else	ele.removeEventListener(type,callback);
}
```



#### 事件委托

> 将多个子元素的相同事件，加给共同的现有的父元素，实现节省事件的目的

##### 事件委托的好处4

- 节省性能
- 可以给页面上暂时不存在的元素绑定事件

##### event.target

> 触发事件的对象 (某个DOM元素) 的引用。当事件处理程序在事件的冒泡或捕获阶段被调用时，它与[`event.currentTarget`](https://developer.mozilla.org/zh-CN/docs/Web/API/Event/currentTarget)不同。

- 语法

  ```js
  let theTarget = event.target
  ```

- 实例

  ```js
  // Make a list
  var ul = document.createElement('ul');
  document.body.appendChild(ul);
  
  var li1 = document.createElement('li');
  var li2 = document.createElement('li');
  ul.appendChild(li1);
  ul.appendChild(li2);
  
  function hide(e){
    // e.target 引用着 <li> 元素
    // 不像 e.currentTarget 引用着其父级的 <ul> 元素.
    e.target.style.visibility = 'hidden';
  }
  
  // 添加监听事件到列表，当每个 <li> 被点击的时候都会触发。
  ul.addEventListener('click', hide, false);
  ```




##### 兼容写法

```js
 otable.onclick = function(eve){
        var e = eve || window.event;
        var target = e.target || e.srcElement;//只看这行
        if(target.nodeName === "TD"){
            var ipt = document.createElement("input");
            ipt.value = target.innerHTML;
            target.innerHTML = "";
            target.appendChild(ipt);
            ipt.focus();

            var that = target;
            ipt.onblur = function(){
                that.innerHTML = this.value;
            }
            ipt.onclick = function(eve){
                var e = eve || window.event;
                e.stopPropagation();
            }
        }
    }
```



##### 闭包封装写法

HTML：

```html
<div class="box">
    <p class="red">段落1</p>
    <span>文本1</span>
    <p>段落2</p>
    <span>文本2</span>
    <p class="red">段落3</p>
    <span>文本3</span>
    <h2>二级标题1</h2>
</div>
<div class="box1">
    <p>段落1</p>
    <span class="red">文本1</span>
    <p>段落2</p>
    <span>文本2</span>
    <p class="red">段落3</p>
    <span>文本3</span>
    <h2 class="red">二级标题2</h2>
</div>
```



JS：

```js
let obox = document.querySelector(".box");
    let obox1 = document.querySelector(".box1");
    let aspan = document.querySelectorAll(".box span")
    let ap = document.querySelectorAll(".box1 p")
    let ared = document.querySelectorAll(".box1 .red")
    obox.onclick = fn(aspan,function(){
        console.log(this);
        this.style.color = "red";
    });
    obox1.onclick = fn(ared,function () { 
        console.log(this);
     })

    function fn(achild,callback){
        return function(eve){
            let e = eve ||window.event;
            let target = e.target || e.srcElement;
            for(let i=0;i<achild.length;i++)
            {
                if(target == achild[i])
                {
                    callback.call(target);
                }
            }
        }

    }
```







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

##### 鼠标拖拽效果

> 1. 按下鼠标
> 2. 移动鼠标 
> 3. 松开鼠标

1. 给目标元素添加onmousedown事件，拖拽的前提是在目标元素按下鼠标左键

2. 当onmousedown发生以后，此刻给document添加onmousemove事件，意味着此刻鼠标在网页的移动都将改变目标元素的位置

3. 在onmousemove事件中，设定目标元素的left和top

   公式：

   目标元素的left = 鼠标的clientX – （鼠标和元素的横坐标差，即offsetX）

   目标元素的top = 鼠标的clientY– （鼠标和元素的纵坐标差，即offsetY）

4. 当onmousedown发生以后，此刻给document添加onmouseup事件，意味着此刻鼠标在网页的任意位置松开鼠标，都会放弃拖拽的效果   在onmouseup事件中，取消document的onmousemove事件即可。

 [弹出窗口拖拽.html](..\作业\day12\弹出窗口拖拽.html) 



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

  因此，当JS代码放在body前面执行时，需要配合onload事件才能触发JS