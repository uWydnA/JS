# REMARK

## JSON的格式规范

## 选择排序

## 如何开启严格模式

```js
"use strict"
```

## 严格模式下作了哪些变更
## 堆栈的概念与关系

## this指向问题

![1574904127818](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\1574904127818.png)



## 哪些操作可以刷新浏览器
1. window.history.go(0)
2. window.location.reload()

## 哪些操作可以实现跳转
1. window.open()
2. window.location.href
3. window.location.assign()

## document选择器有哪些
1.document.getElementById()
2.document.getElementsByTagName()
3.document.getElementsByClassName()
4.document.getElementsName()

## 如何操作元素的可见属性
1. Element.getAttribute(attr)
2. Element.setAttribute(attr,atrrValue)
3. Element.removeAttribute(atrr)

## windos身上的子对象有哪些
1. window.document
2. window.history
3. window.location
4. window.navigator
5. window.frames
6. window.screen

## 如何拿到三天之后的日期对象
var d = new Date();
d.setDate(d.getDate() +3);

## 事件委托的好处

- 节省性能
- 可以给页面上暂时不存在的元素绑定事件

## 事件目标的获取方式及其兼容
```js
var target = e.target || e.srcElement
```



## 对象的本质和意义

本质：键值对

意义：储存数据，编程



## JSON的书写格式

1. 必须是字符
2. 字符的格式与JS中的数组和对象大体一致
3. 如果与对象一致，对象的key必须加双引号
4. 不允许出现没有意义的逗号
5. 不允许出现undefined,function,NaN

## 下列哪些不是es6中新增的:

- [x] A	Object.assign
	 [ ] B	Array.from
	 [x] C	forEach
	 [ ] D	for of 循环 

解析：forEach是es5



## 下列关于window.onload事件的相关说法正确的是

- [ ] A	window.onload事件可能触发多次
	 [ ] B	window.onload事件是指的 DOM结构加载完成之后
	 [ ] C	window.onload 事件可以绑定多个处理函数,并且都会触发
	 [ ] D	window.onload 事件在页面所有的内容都加载完毕之后才触发

解析：在文档装载完成后会触发  `load` 事件。此时，在文档中的所有对象都在DOM中，所有图片，脚本，链接以及sub-frames都完成了装载。 



## 给元素添加事件监听正确的方法

- [ ] A	oDiv.onclick（）
	 [x] B	oDiv.attachEvent（）
	 [x] C	oDiv.addEventListener（）
	 [ ] D	for of 循环 

解析：A的正确用法为oDiv.onclick = function () {}，D为IE8接触事件绑定的方法



## 对象的深拷贝



## 事件流的状态及含义

1. 事件冒泡：从内向外，依次触发所有父级的相同事件
2. 事件捕获：从外向内，依次触发从最大的父级到目标的相同事件
3. 目标事件：当前真正要触发的事件



## AJAX的封装



## mysql如何对数据进行增删改查



## get与post的区别完整版



## 关系选择器的兼容



## localStorage的方法有哪些

1. localStorage.setItem(key)
2. localStorage.getItem(key,val)
3. localStorage.removeItem(key)
4. localStorage.clear()

## 如何设置一条３天之后过期的在根目录下的cookie

```js
var d = new Date();
d.setDate(d.getDate()+3);
document.cookie = "user=admin;path=/;expires="+d;
```



## cookie的特点

1. 文本
2. 大小4K
3. 不能跨域
4. 条数50
5. 时间限制