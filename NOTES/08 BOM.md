## BOM

> 浏览器对象模型

### 浏览器对象

>  `window`对象不但充当全局作用域，而且表示浏览器窗口。 

 `window`对象有`innerWidth`和`innerHeight`属性，可以获取浏览器窗口的内部宽度和高度。内部宽高是指除去菜单栏、工具栏、边框等占位元素后，用于`显示网页的净宽高`。 

```js
console.log('window inner size: ' + window.innerWidth + ' x ' + window.innerHeight);
```

 //**window inner size: 1280 x 613** 

 对应的，还有一个`outerWidth`和`outerHeight`属性，可以`获取浏览器窗口的整个宽高`。



#### navigator

> `navigator`对象表示浏览器的信息

最常用的属性包括：

##### navigator.appName

​	浏览器名称

##### navigator.appVersion

​	浏览器版本

##### navigator.language

​	浏览器设置的语言

##### navigator.platform

​	操作系统类型

##### navigator.userAgent

​	浏览器设定的`User-Agent`字符串



请注意，以上属性返回的均为**字符串**`

*请注意*，`navigator`的信息可以很容易地被用户修改，所以JavaScript读取的值不一定是正确的。很多初学者为了针对不同浏览器编写不同的代码，喜欢用`if`判断浏览器版本，例如：

```js
var width;
if (getIEVersion(navigator.userAgent) < 9) {
    width = document.body.clientWidth;
} else {
    width = window.innerWidth;
}
```

但这样既可能判断不准确，也很难维护代码。正确的方法是充分利用JavaScript对不存在属性返回`undefined`的特性，直接用短路运算符`||`计算：

```js
var width = window.innerWidth || document.body.clientWidth;
```



#### screen

> `screen`对象表示屏幕的信息

常用的属性有：

- screen.width：屏幕宽度，以像素为单位；
- screen.height：屏幕高度，以像素为单位；
- screen.colorDepth：返回颜色位数，如8、16、24。

```js
console.log('Screen size = ' + screen.width + ' x ' + screen.height);
```

// **Screen size = 1920 x 1080** 



#### history//不推荐使用

> `history`对象保存了浏览器的历史记录

JavaScript可以调用`history`对象的`back()`或`forward ()`，相当于用户点击了浏览器的“后退”或“前进”按钮。

这个对象属于历史遗留对象，对于现代Web页面来说，由于大量使用AJAX和页面交互，简单粗暴地调用`history.back()`可能会让用户感到非常愤怒。

新手开始设计Web页面时喜欢在登录页登录成功时调用`history.back()`，试图回到登录前的页面。这是一种错误的方法。

任何情况，你都不应该使用`history`这个对象了。



##### length

> 历史记录的个数



##### back()

> back() 方法可加载历史列表中的前一个 URL（如果存在）。
>
> 调用该方法的效果等价于点击后退按钮或调用 history.go(-1)。

- 语法

  ```js
  history.back()
  ```

- 实例

  ```js
  history.back();//回退上一个页面
  ```

  

##### forward()

> forward() 方法可加载历史列表中的下一个 URL。
>
> 调用该方法的效果等价于点击前进按钮或调用 history.go(1)。

- 语法

  ```js
  history.forward();
  ```

- 实例

  ```js
  history.forward();//前进一个页面
  ```

  

##### go()

>  go() 方法可加载历史列表中的某个具体的页面。 跳转指定的步数，负为退，正为进，0为刷新

- 语法

  ```js
  history.go(number|URL)
  ```

- 实例

  ```js
  window.history.go(-1);//回退上一个页面
  window.history.go(5);//前进5个页面
  ```

  





#### location

>  `location`对象表示当前页面的URL信息 

例如一个完整的URL：http://www.example.com:8080/path/index.html?a=1&b=2#TOP

可以用`location.href`获取。要获得URL各个部分的值，可以这么写：

```js
location.protocol; // 'http'
location.host; // 'www.example.com'
location.port; // '8080'
location.pathname; // '/path/index.html'
location.search; // '?a=1&b=2'
location.hash; // 'TOP'
```

要加载一个新页面，可以调用`location.assign()`。如果要重新加载当前页面，调用`location.reload()`方法非常方便。

```js
if (confirm('重新加载当前页' + location.href + '?')) {
    location.reload();
} else {
    location.assign('/'); // 设置一个新的URL地址
}
```

##### href

>  href 属性是一个可读可写的字符串，可设置或返回当前显示的文档的完整 URL。
>
>  因此，我们可以通过为该属性设置新的 URL，使浏览器读取并显示新的 URL 的内容。

- 语法

  ```js
  location.href = URL
  ```

- 实例

  ```js
  console.log(location.href);//当前页面完整的URL
  ```

  



##### search

>   search 属性是一个可读可写的字符串，可设置或返回当前 URL 的查询部分（问号 ? 之后的部分）。 

- 语法

  ```js
  location.search = path_from_questionmark
  ```

- 实例

  ```js
  console.log(location.href);//返回当前 URL 的查询部分（问号 ? 之后的部分）
  ```

  



##### hash

>   hash 属性是一个可读可写的字符串，该字符串是 URL 的锚部分（从 # 号开始的部分） 

- 语法

  ```js
  location.hash = anchorname
  ```

- 实例

  ```js
  console.log(location.hash);// URL 的锚部分（从 # 号开始的部分）
  location.hash = "#3_2"//改变锚点#ID,可以到达指定位置
  ```

  



##### reload()

>   reload() 方法用于重新加载当前文档。 

- 语法

  ```js
  location.reload(force)
  ```

- 实例

  ```js
  window.location.reload()//刷新页面
  ```

  



##### assign()

>   assign() 方法可加载一个新的文档。 

- 语法

  ```js
  location.assign(URL)
  ```

- 实例

  ```js
   window.location.assign("http://www.w3school.com.cn")//重新加载新的网页
   window.location.assign("")//刷新页面
  ```

  



#### document

> `document`对象表示当前页面。由于HTML在浏览器中以DOM形式表示为树形结构，`document`对象就是整个DOM树的根节点。

`document`的`title`属性是从HTML文档中的`xxx`读取的，但是可以动态改变：

```js
document.title = '努力学习JavaScript!';
```



##### getElementById()

>  按ID获得一个DOM节点 



##### getElementsByTagName() 

>  按Tag名称获得一组DOM节点 



#####  cookie 

>  可以获取当前页面的Cookie

Cookie是由服务器发送的key-value标示符。因为HTTP协议是无状态的，但是服务器要区分到底是哪个用户发过来的请求，就可以用Cookie来区分。当一个用户成功登录后，服务器发送一个Cookie给浏览器，例如`user=ABC123XYZ(加密的字符串)...`，此后，浏览器访问该网站时，会在请求头附上这个Cookie，服务器根据Cookie即可区分出用户。

Cookie还可以存储网站的一些设置，例如，页面显示的语言等等。

JavaScript可以通过`document.cookie`读取到当前页面的Cookie：

```js
document.cookie; // 'v=123; remember=true; prefer=zh'
```

由于JavaScript能读取到页面的Cookie，而用户的登录信息通常也存在Cookie中，这就造成了巨大的安全隐患，这是因为在HTML页面中引入第三方的JavaScript代码是允许的：

```js
<!-- 当前页面在wwwexample.com -->
<html>
    <head>
        <script src="http://www.foo.com/jquery.js"></script>
    </head>
    ...
</html>
```

如果引入的第三方的JavaScript中存在恶意代码，则`www.foo.com`网站将直接获取到`www.example.com`网站的用户登录信息。

为了解决这个问题，服务器在设置Cookie时可以使用`httpOnly`，设定了`httpOnly`的Cookie将不能被JavaScript读取。这个行为由浏览器实现，主流浏览器均支持`httpOnly`选项，IE从IE6 SP1开始支持。

为了确保安全，服务器端在设置Cookie时，应该始终坚持使用`httpOnly`。