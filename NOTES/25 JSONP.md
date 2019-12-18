## JSONP

> 利用<script>标签可以跨域，让服务器端返回可执行的Javascript函数，参数为要回发的数据。



### 同源策略

> **同源策略**限制了从同一个源加载的文档或脚本如何与来自另一个源的资源进行交互。这是一个用于隔离潜在恶意文件的重要安全机制。

#### 定义

如果两个页面的协议，端口（如果有指定）和主机都相同，则两个页面具有相同的**源**。我们也可以把它称为“协议/主机/端口 tuple”，或简单地叫做“tuple". ("tuple" ，“元”，是指一些事物组合在一起形成一个整体，比如（1，2）叫二元，（1，2，3）叫三元)

下表给出了相对`http://store.company.com/dir/page.html`同源检测的示例:

| URL                                               | 结果 | 原因                           |
| ------------------------------------------------- | ---- | ------------------------------ |
| `http://store.company.com/dir2/other.html`        | 成功 | 只有路径不同                   |
| `http://store.company.com/dir/inner/another.html` | 成功 | 只有路径不同                   |
| `https://store.company.com/secure.html`           | 失败 | 不同协议 ( https和http )       |
| `http://store.company.com:81/dir/etc.html`        | 失败 | 不同端口 ( http:// 80是默认的) |
| `http://news.company.com/dir/other.html`          | 失败 | 不同域名 ( news和store )       |

 

### JSON和JSONP

JSONP和JSON好像啊，他们之间有什么联系吗？

JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式。对于JSON大家应该是很了解了吧，不是很清楚的朋友可以去[json.org](https://link.zhihu.com/?target=http%3A//www.json.org/json-zh.html)上了解下，简单易懂。

**JSONP是JSON with Padding的略称。它是一个非官方的协议，它允许在服务器端集成Script tags返回至客户端，通过javascript callback的形式实现跨域访问（这仅仅是JSONP简单的实现形式）。**--来源百度

　　JSONP就像是JSON+Padding一样(Padding这里我们理解为填充)， 我们先看下面的小例子然后再详细介绍。



### 实例

#### JS代码

```js
var url = "http://localhost/myown/jsonp/jsonp2.php";
document.onclick = function () {
    jsonp(url, (res) => {
        console.log(res);
    }, {
        cb: "qwe",
        cbname: "cb",
        user: "root",
        pass: "root"
    })
}

function jsonp(url, callback, obj) {
    var str = "";
    var script = document.createElement("script");
    for (var i in obj) {
        str += `${i}=${obj[i]}&`;
    }
    url = url + "?" + str + "__retr0__=" + new Date().getTime();
    script.src = url;
    document.body.appendChild(script);
    window[obj[obj.cbname]] = function (res) {
            callback(res);
    }
    script.remove();
}
```

 

####  php代码

```php
<?php
$u = $_GET["user"];
$p = $_GET["pass"];
$cb = $_GET["cb"];
$data = "这是JSONP接受到的数据" . $u . "------" . $p;
echo "$cb('" . $data . "')";
?>
```



 

 

  

 

 

 