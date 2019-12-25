## Promise

> `ES6`新增的`构造函数Promise`，用来处理异步的程序(为了解决回调地狱)

 

### 介绍

1. 开启承诺：三天之后放假，然后呢：成功了，去哪玩，失败了，扫码

		如同：开启ajax请求，请求资源，成功了，渲染页面，失败了，报错

2. 承诺正在进行时
3. 承诺失败OR承诺成功



### 语法

> ```js
> new Promise( function(resolve, reject) {...} /* executor */  );
> ```

```js
var p = new Promise(function(a,b){
    // 正在进行时....
    setTimeout(() => {
        a();
    }, Math.random()*1000);
    setTimeout(() => {
        b();
    }, Math.random()*1000);
});
p.then(function(){
    // 成功时，要做的事情
    // .....
    console.log(1)
},function(){
    // 失败时，要做的事情
    // .....
    console.log(2)
})
```

### 参数

- executor

  executor是带有 `resolve` 和 `reject` 两个参数的函数 。Promise构造函数执行时立即调用`executor` 函数， `resolve` 和 `reject` 两个函数作为参数传递给`executor`（executor 函数在Promise构造函数返回所建promise实例对象前被调用）。`resolve` 和 `reject` 函数被调用时，分别将promise的状态改为*fulfilled（*完成）或rejected（失败）。executor 内部通常会执行一些异步操作，一旦异步操作执行完毕(可能成功/失败)，要么调用resolve函数来将promise状态改成*fulfilled*，要么调用`reject` 函数将promise的状态改为rejected。如果在executor函数中抛出一个错误，那么该promise 状态为rejected。executor函数的返回值被忽略。

### 描述

`**Promise**` 对象是一个代理对象（代理一个值），被代理的值在Promise对象创建时可能是未知的。它允许你为异步操作的成功和失败分别绑定相应的处理方法（handlers）。 这让异步方法可以像同步方法那样返回值，但并不是立即返回最终执行结果，而是一个能代表未来出现的结果的promise对象

一个 `Promise`有以下几种状态:

- *pending*: 初始状态，既不是成功，也不是失败状态。
- *fulfilled*: 意味着操作成功完成。
- *rejected*: 意味着操作失败。

pending 状态的 Promise 对象可能会变为fulfilled 状态并传递一个值给相应的状态处理方法，也可能变为失败状态（rejected）并传递失败信息。当其中任一种情况出现时，Promise 对象的 `then` 方法绑定的处理方法（handlers ）就会被调用（then方法包含两个参数：onfulfilled 和 onrejected，它们都是 Function 类型。当Promise状态为*fulfilled*时，调用 then 的 onfulfilled 方法，当Promise状态为*rejected*时，调用 then 的 onrejected 方法， 所以在异步操作的完成和绑定处理方法之间不存在竞争）。

因为 `Promise.prototype.then` 和  `Promise.prototype.catch` 方法返回promise 对象， 所以它们可以被链式调用。

![img](https://mdn.mozillademos.org/files/8633/promises.png)

**不要和惰性求值混淆：** 有一些语言中有惰性求值和延时计算的特性，它们也被称为“promises”，例如Scheme. Javascript中的promise代表一种已经发生的状态， 而且可以通过回调方法链在一起。 如果你想要的是表达式的延时计算，考虑无参数的"[箭头方法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)":  `f = () =>`*表达式* 创建惰性求值的表达式*，*使用 `f()` 求值。

**注意：** 如果一个promise对象处在fulfilled或rejected状态而不是pending状态，那么它也可以被称为*settled*状态。你可能也会听到一个术语*resolved* ，它表示promise对象处于settled状态。关于promise的术语， Domenic Denicola 的 [States and fates](https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md) 有更多详情可供参考。



### 方法

#### Promise.all(iterable)

​	这个方法返回一个新的promise对象，该promise对象在iterable参数对象里所有的promise对象都成功的时候才会触发成功，一旦有任何一个iterable里面的promise对象失败则立即触发该promise对象的失败。这个新的promise对象在触发成功状态以后，会把一个包含iterable里所有promise返回值的数组作为成功回调的返回值，顺序跟iterable的顺序保持一致；如果这个新的promise对象触发了失败状态，它会把iterable里第一个触发失败的promise对象的错误信息作为它的失败错误信息。Promise.all方法常被用于处理多个promise对象的状态集合。（可以参考jQuery.when方法---译者注）



#### Promise.race(iterable)

​	当iterable参数里的任意一个子promise被成功或失败后，父promise马上也会用子promise的成功返回值或失败详情作为参数调用父promise绑定的相应句柄，并返回该promise对象。



#### Promise.reject(reason)

​	返回一个状态为失败的Promise对象，并将给定的失败信息传递给对应的处理方法



#### Promise.resolve(value)

​	返回一个状态由给定value决定的Promise对象。如果该值是thenable(即，带有then方法的对象)，返回的Promise对象的最终状态由then方法执行决定；否则的话(该value为空，基本类型或者不带then方法的对象),返回的Promise对象状态为fulfilled，并且将该value传递给对应的then方法。通常而言，如果你不知道一个值是否是Promise对象，使用Promise.resolve(value) 来返回一个Promise对象,这样就能将该value以Promise对象形式使用。

## Promise 原型

### 属性

- `Promise.prototype.constructor`

  返回被创建的实例函数.  默认为 [`Promise`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 函数.

### 方法

- [`Promise.prototype.catch(onRejected)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)

  添加一个拒绝(rejection) 回调到当前 promise, 返回一个新的promise。当这个回调函数被调用，新 promise 将以它的返回值来resolve，否则如果当前promise 进入fulfilled状态，则以当前promise的完成结果作为新promise的完成结果.

- [`Promise.prototype.then(onFulfilled, onRejected)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)

  添加解决(fulfillment)和拒绝(rejection)回调到当前 promise, 返回一个新的 promise, 将以回调的返回值来resolve.

- [`Promise.prototype.finally(onFinally)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally)

  添加一个事件处理回调于当前promise对象，并且在原promise对象解析完毕后，返回一个新的promise对象。回调会在当前promise运行完毕后被调用，无论当前promise的状态是完成(fulfilled)还是失败(rejected)



## promise改造ajax&jsonp

### ajaxget封装

```JS
url1 = "http://127.0.0.1/myown/promise/php/data1.php"
url2 = "http://127.0.0.1/myown/promise/php/data2.php"
url3 = "http://127.0.0.1/myown/promise/php/data3.php"

function getAjax(url, data) {
    var p = new Promise(function (success, error) {
        var str = "";
        data = data || {};
        var xhr = new XMLHttpRequest();
        for (var i in data) {
            str += `${i}=${data[i]}&`;
        }
        str = str.slice(0, str.length - 1);
        url = url + "?" + str + "__retr0__=" + new Date().getDate();
        xhr.open("get", url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                success(xhr.responseText);
            } else if (xhr.readyState === 4 && xhr.status != 200) {
                error(xhr.status);
            }
        }
        xhr.send();
    })
    return p;
}
var p1 = getAjax(url1)
var p2 = getAjax(url2)
var p3 = getAjax(url3)
Promise.all([p1, p2, p3]).then(function (res) {
    console.log(res);
}, function (res) {
    console.log(res)
})
```



### ajaxpost封装

```JS
url1 = "http://127.0.0.1/myown/promise/php/data1.php";
url2 = "http://127.0.0.1/myown/promise/php/data2.php";
url3 = "http://127.0.0.1/myown/promise/php/data3.php";

function postAjax(url, data) {
    var p = new Promise(function (success, error) {
        data = data || {};
        var str = "";
        var xhr = new XMLHttpRequest();
        for (var i in data) {
            str += `${i}=${data[i]}&`;
        }
        xhr.open("post", url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {

                success(xhr.responseText);
            } else if (xhr.readyState === 4 && xhr.status != 200) {
                error(xhr.status);
            }
        }
        console.log(1)
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(str);
    })
    return p;
}
var p1 = postAjax(url1);
var p2 = postAjax(url2);
var p3 = postAjax(url3);
Promise.all([p1, p2, p3]).then(function (res) {
    console.log(res);
}, function (res) {
    console.log(res);
})
```



### jsonp封装

#### JS

```js
url1 = "http://127.0.0.1/myown/promise/php/jsonp1.php";
url2 = "http://127.0.0.1/myown/promise/php/jsonp2.php";
url3 = "http://127.0.0.1/myown/promise/php/jsonp3.php";

function jsonp(url, data) {
    var p = new Promise(function (success) {
        var str = "";
        var script = document.createElement("script");
        for (var i in data) {
            str += `${i}=${data[i]}&`;
        }
        url = url + "?" + str + "__retr0__=" + new Date().getTime();
        script.src = url;
        window[data[data.cbName]] = function (res) {
            success(res);
        }
        document.body.appendChild(script);
    })
    return p;
}
var p1 = jsonp(url1, {
    user: "admin",
    pass: "admi",
    cbName: "callback",
    callback: "qqq"
});
var p2 = jsonp(url2, {
    user: "root",
    pass: "root",
    cbName: "callback",
    callback: "bbb"
});
var p3 = jsonp(url3, {
    user: "retr0",
    pass: "retr",
    cbName: "callback",
    callback: "ccc"
});
Promise.all([p1, p2, p3]).then(function (res) {
    console.log(res)
})
```

#### PHP

```php
<?php
$u = $_GET["user"];
$p = $_GET["pass"];
$cb = $_GET["callback"];
$data = "这是JSONP接受到的数据" . $u . "------" . $p;
echo "$cb('" . $data . "')";
?>
```

