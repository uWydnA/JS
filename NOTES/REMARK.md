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

## 写出document选择器有哪些
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

**本质：键值对**

意义：储存数据，编程



## JSON的书写格式

1. 必须是字符
2. 字符的格式与JS中的数组和对象大体一致
3. 如果与对象一致，对象的key必须加双引号
4. 不允许出现没有意义的逗号
5. 不允许出现undefined,function,NaN