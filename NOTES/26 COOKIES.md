## cookie

### 计算机通信协议

#### IP

> ip地址，标记，接入互联网的每台设备的唯一身份

#### TCP

> 数据：面向连接的协议，可靠，三次握手协议

#### UDP

> 数据：面向数据的协议，不可靠，容易造成数据丢失

#### HTTP

> 网页，超文本传输协议，html，无状态协议，为了安全，节约，http每次建立连接，传输数据之后，会自动断开

#### cookie

> 会话跟踪技术，帮助http记住状态



### cookie的介绍

> 用来记录客户端到服务器的一次连接过程中产生的各种状态
>
> 前后端数据交互的格式：字符



### cookie记录状态

- 怎么给服务器？跟随http协议，发往服务器
- 记录在哪？本地浏览器的缓存中，在硬盘上，不是内存
- 以什么形式记录？字符
- 大小限制：4K左右，1K=1024字节，1个中文，找2个字节
- 条数限制：50条左右
- 时间限制：默认是会话级，关闭浏览器自动删除；随意设置，没有永久，必须指定时间
- 使用限制：不允许跨域，不允许跨浏览器，不允许跨路径（父文件夹不能拿子文件夹中的cookie）



### cookie的属性

#### path

​	path表示cookie所在的目录，asp.net默认为/，就是根目录。

​	在同一个服务器上有目录如下：/test/,/test/cd/,/test/dd/，现设一个cookie1的path为/test/，cookie2的path为/test/cd/，那么test下的所有页面都可以访问到cookie1，而/test/和/test/dd/的子页面不能访问cookie2。这是因为cookie能让其path路径下的页面访问。



#### expires

​	指定了cookie的生存期，默认情况下cookie是暂时存在的，他们存储的值只在浏览器会话期间存在，当用户退出浏览器后这些值也会丢失，如果想让cookie存在一段时间，就要为expires属性设置为未来的一个用毫秒数表示的过期日期或时间点，expires默认为设置的expires的当前时间。现在已经被max-age属性所取代，max-age用秒来设置cookie的生存期。

​	如果max-age属性为正数，则表示该cookie会在max-age秒之后自动失效。浏览器会将max-age为正数的cookie持久化，即写到对应的cookie文件中。无论客户关闭了浏览器还是电脑，只要还在max-age秒之前，登录网站时该cookie仍然有效。

​	如果max-age为负数，则表示该cookie仅在本浏览器窗口以及本窗口打开的子窗口内有效，关闭窗口后该cookie即失效。max-age为负数的Cookie，为临时性cookie，不会被持久化，不会被写到cookie文件中。cookie信息保存在浏览器内存中，因此关闭浏览器该cookie就消失了。cookie默认的max-age值为-1。

​	如果max-age为0，则表示删除该cookie。cookie机制没有提供删除cookie的方法，因此通过设置该cookie即时失效实现删除cookie的效果。失效的Cookie会被浏览器从cookie文件或者内存中删除。

如果不设置expires或者max-age这个cookie默认是Session的，也就是关闭浏览器该cookie就消失了。

​	这里要说明一下：Session的cookie在ie6下，如果用户实在网页上跳转打开页面或新开窗口（包括target=”_blank”，鼠标右键新开窗口），都是在同一个Session内。如果用户新开浏览器程序或者说是进程再打开当前的页面就不是同一个Session。其他浏览器只要你Session存在，还是同一个Session，cookie还能共享。在前段时间的项目中ie6下吃了很大一个亏。

### 封装cookie

#### 增

```js
function setCookie(key, val, options) {
    options = options || {};
    var time = "";
    if (options.Expires) {
        var d = new Date();
        d.setDate(d.getDate() + options.Expires);
        time = ";expires=" + d;
    }
    var path = "";
    path = options.path ? ";path=" + options.path : "";
    document.cookie = key + "=" + val + time + path;
}
setCookie("user","admin",{
    Expires:7,
    path："/cookie"
})
```



#### 删

```js
function setCookie(key, val, options) {
    options = options || {};
    var time = "";
    if (options.Expires) {
        var d = new Date();
        d.setDate(d.getDate() + options.Expires);
        time = ";expires=" + d;
    }
    var path = "";
    path = options.path ? ";path=" + options.path : "";
    document.cookie = key + "=" + val + time + path;
}
setCookie("user","admin",{
    Expires:7
})
setCookie("user","admin",{
    Expires:-1
})//利用cookie有效期，将有效期调整为当前日期的前一天即可销毁
```



#### 改

```js
function setCookie(key, val, options) {
    options = options || {};
    var time = "";
    if (options.Expires) {
        var d = new Date();
        d.setDate(d.getDate() + options.Expires);
        time = ";expires=" + d;
    }
    var path = "";
    path = options.path ? ";path=" + options.path : "";
    document.cookie = key + "=" + val + time + path;
}
setCookie("user","admin",{
    Expires:7
})
setCookie("user","123456",{
    Expires:6
})
```



#### 查

```js
function getCookie(key) {
    var arr = document.cookie.split("; ");
    var v = "";
    arr.forEach((val) => {
        if (val.split("=")[0] === key) {
            v = val.split("=")[1];
        }
    })
    return v;
}
```



