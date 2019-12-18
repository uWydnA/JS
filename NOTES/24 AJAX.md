## AJAX

> 1. ajax能够实现在不中断浏览器其他任务的前提下，请求后台的新数据
> 2. 无刷新加载页面
> 3. ajax的组成：a异步，jjs，a和，x服务端的数据(xml,json,txt,html)

### 组成

- 异步的js：事件
- 其他的js：正常的js，处理数据，字符的，数组的，操作
- 前后端连接的平台（载体）：XHR对象，XMLHttpRequest
- 服务端的数据：json

### 特点

- 无刷新加载页面
- 破坏浏览器的前进后退功能
- 破坏搜索引擎的搜索爬虫的关键字检索，SEO网络优化
- 兼容很低，几乎不存在，只要支持js，就支持ajax，IE5以下
- 因为无刷新加载页面，所以，提升了页面的初始打开速度
- 因为无刷新加载页面，所以，提升了用户体验



### XMLHttpRequest

> 该构造函数用于初始化一个 `XMLHttpRequest` 对象。在调用下列任何其他方法之前，必须先调用该构造函数，或通过其他方式间接得到一个 `XMLHttpRequest` 对象。

使用 `XMLHttpRequest`（XHR）对象可以与服务器交互。您可以从URL获取数据，而无需让整个的页面刷新。这允许网页在不影响用户的操作的情况下更新页面的局部内容。在 [AJAX](https://developer.mozilla.org/en-US/docs/Glossary/AJAX) 编程中，`XMLHttpRequest` 被大量使用。



尽管名称如此，`XMLHttpRequest` 可以用于获取任何类型的数据，而不仅仅是XML，它甚至支持 [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP) 以外的协议（包括 file:// 和 FTP）。

如果您的通信流程需要从服务器接收事件或消息数据，请考虑通过 `EventSource` 接口使用 [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events)。对于全双工的通信， [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) 则可能是更好的选择。



*此接口继承了 XMLHttpRequestEventTarget 和 EventTarget 的属性。*

#### onreadystatechange

> 只要 `readyState` 属性发生变化，就会调用相应的处理函数。这个回调函数会被用户线程所调用。**XMLHttpRequest.onreadystatechange** 会在 [`XMLHttpRequest`](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest) 的[`readyState`](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/readyState) 属性发生改变时触发 `readystatechange` 事件的时候被调用。

##### 语法

```
XMLHttpRequest.onreadystatechange = callback;
```

##### 取值

- 当 `readyState` 的值改变的时候，`*callback*` 函数会被调用。

##### 实例

```js
var xhr= new XMLHttpRequest(),
    method = "GET",
    url = "https://developer.mozilla.org/";

xhr.open(method, url, true);
xhr.onreadystatechange = function () {
  if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    console.log(xhr.responseText)
  }
}
xhr.send();
```



#### readyState

> **XMLHttpRequest.readyState** 属性返回一个 XMLHttpRequest  代理当前所处的状态。

一个 XHR 代理总是处于下列状态中的一个：

| 值   | 状态               | 描述                                                |
| ---- | ------------------ | --------------------------------------------------- |
| `0`  | `UNSENT`           | 代理被创建，但尚未调用 open() 方法。                |
| `1`  | `OPENED`           | `open()` 方法已经被调用。                           |
| `2`  | `HEADERS_RECEIVED` | `send()` 方法已经被调用，并且头部和状态已经可获得。 |
| `3`  | `LOADING`          | 下载中； `responseText` 属性已经包含部分数据。      |
| `4`  | `DONE`             | 下载操作已完成。                                    |



#### responseText

> **XMLHttpRequest.responseText** 在一个请求被发送后，从服务器端返回文本。

##### 语法

```
var resultText = XMLHttpRequest.responseText;
```

##### 取值

[`DOMString`](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMString) 是`XMLHttpRequest` 返回的纯文本的值。当[`DOMString`](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMString) 为`null`时，表示请求失败了。当[`DOMString`](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMString) 为""时，表示这个请求还没有被[`send()`](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/send)

当处理一个异步request的时候，尽管当前请求并没有结束，`responseText`的返回值是当前从后端收到的内容。

当请求状态[`readyState`](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/readyState)变为`XMLHttpRequest.DONE` (`4`)，且[`status`](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/status)值为200（"OK"）时，`responseText`是全部后端的返回数据

##### 实例

```js
var xhr = new XMLHttpRequest();
xhr.open('GET', '/server', true);

// If specified, responseType must be empty string or "text"
xhr.responseType = 'text';

xhr.onload = function () {
    if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200) {
            console.log(xhr.response);
            console.log(xhr.responseText);
        }
    }
};

xhr.send(null);
```





#### status

> 只读属性 `XMLHttpRequest.status` 返回了`XMLHttpRequest` 响应中的数字状态码。`status` 的值是一个`无符号短整型`。在请求完成前，`status`的值为`0`。值得注意的是，如果 XMLHttpRequest 出错，浏览器返回的 status 也为0。
>
> status码是标准的[HTTP status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Response_codes)。举个例子，`status` `200` 代表一个成功的请求。如果服务器响应中没有明确指定status码，`XMLHttpRequest.status` 将会默认为`200`。

##### 实例

```js
var xhr = new XMLHttpRequest();
console.log('UNSENT', xhr.status);

xhr.open('GET', '/server', true);
console.log('OPENED', xhr.status);

xhr.onprogress = function () {
  console.log('LOADING', xhr.status);
};

xhr.onload = function () {
  console.log('DONE', xhr.status);
};

xhr.send(null);

/**
 * 输出如下：
 *
 * UNSENT（未发送） 0
 * OPENED（已打开） 0
 * LOADING（载入中） 200
 * DONE（完成） 200
 */
```

##### HTTP状态码

​    1**：请求收到，继续处理

​    2**：操作成功收到，分析、接受

​    3**：完成此请求必须进一步处理

​    4**：请求包含一个错误语法或不能完成

​    5**：服务器执行一个完全有效请求失败

​    

​    100——客户必须继续发出请求

​    101——客户要求服务器根据请求转换HTTP协议版本

 

​    200——交易成功

​    201——提示知道新文件的URL     

​    202——接受和处理、但处理未完成

​    203——返回信息不确定或不完整

​    204——请求收到，但返回信息为空

​    205——服务器完成了请求，用户代理必须复位当前已经浏览过的文件

​    206——服务器已经完成了部分用户的GET请求

 

​    300——请求的资源可在多处得到

​    301——删除请求数据

​    302——在其他地址发现了请求数据

​    303——建议客户访问其他URL或访问方式

​    304——客户端已经执行了GET，但文件未变化

​    305——请求的资源必须从服务器指定的地址得到

​    306——前一版本HTTP中使用的代码，现行版本中不再使用

​    307——申明请求的资源临时性删除

 

​    400——错误请求，如语法错误

​    401——请求授权失败

​    402——保留有效ChargeTo头响应

​    403——请求不允许

​    404——没有发现文件、查询或URl

​    405——用户在Request-Line字段定义的方法不允许

​    406——根据用户发送的Accept拖，请求资源不可访问

​    407——类似401，用户必须首先在代理服务器上得到授权

​    408——客户端没有在用户指定的饿时间内完成请求

​    409——对当前资源状态，请求不能完成

​    410——服务器上不再有此资源且无进一步的参考地址

​    411——服务器拒绝用户定义的Content-Length属性请求

​    412——一个或多个请求头字段在当前请求中错误

​    413——请求的资源大于服务器允许的大小

​    414——请求的资源URL长于服务器允许的长度

​    415——请求资源不支持请求项目格式

​    416——请求中包含Range请求头字段，在当前请求资源范围内没有range指示值，请求也不包含If-Range请求头字段

​    417——服务器不满足请求Expect头字段指定的期望值，如果是代理服务器，可能是下一级服务器不能满足请求

 

​    500——服务器产生内部错误

​    501——服务器不支持请求的函数

​    502——服务器暂时不可用，有时是为了防止发生系统过载

​    503——服务器过载或暂停维修

​    504——关口过载，服务器使用另一个关口或服务来响应用户，等待时间设定值较长

​    505——服务器不支持或拒绝支请求头中指定的HTTP版本



### GET方式

```js
var url = "http://localhost/myown/ajax/data.php"
document.onclick = function () {
    getAjax(url, (res) => {
        console.log(res);
    }, {
        user: "andy",
        pass: "retr0"
    })
}

function getAjax(url, callback, obj) {
    obj = obj || {};
    var str = ""
    var xhr = new XMLHttpRequest();
    for (var i in obj) {
        str += `${i}=${obj[i]}&`; //拼接URL，因为GET方式是通过URL进行传输数据
    }
    url = url + "?" + str + "_retr0_=" + new Date().getTime();   // 时间戳解决ajaxget请求被缓存的问题
    xhr.open("get", url, true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(xhr.responseText);
        }
    }
    xhr.send();
}
```

#### 浏览器的缓存原因

缓存：临时存储，缓冲区域

作用：每次浏览器请求新地址，会自动将资源地址所有的资源下载下来，保存在缓存中，提升下次请求相同地址的速度



### POST方式

```js
// post与get的区别
function postAjax(url, callback, obj) {
    obj = obj || {};
    var str = "";
    var xhr = new XMLHttpRequest();
    for (var i in obj) {
        str += `${i}=${obj[i]}&`;
    }
    // 1.open方法一个是"get"，一个是"post"
    xhr.open("post", url, true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(xhr.responseText);
        }
    }
    // 3.发送数据之前，要先设置数据的发送格式
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    // 2.发送信息的位置,get是通过URL发送，post是通过数据密包发送，因此str需要作为send方法的参数
    xhr.send(str);
}
```

需要注意的是：

**POST方式的AJAX请求，PHP必须也要通过POST方式接收，或者是$_REQUEST[“字段名”]**



### 兼容问题

```js
ajax = new XMLHttpRequest();
ajax = new ActiveXObject("Microsoft.XMLHTTP");     //IE5
```







### 