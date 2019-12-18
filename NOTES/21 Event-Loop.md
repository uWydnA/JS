## Event-Loop

### JavaScript的运行机制

（1）所有同步任务都在主线程上执行，形成一个执行栈（execution context stack）。

（2）主线程之外，还存在"任务队列"(task queue)。只要异步任务有了运行结果，就在"任务队列"之中放置一个事件。

（3）一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。

（4）主线程不断重复上面的第三步

概括即是: 调用栈中的同步任务都执行完毕，栈内被清空了，就代表主线程空闲了，这个时候就会去任务队列中按照顺序读取一个任务放入到栈中执行。每次栈内被清空，都会去读取任务队列有没有任务，有就读取执行，一直循环读取-执行的操作

> 一个事件循环中有一个或者是多个任务队列

### 异步任务分类

1. 宏任务: script（整体代码）, setTimeout, setInterval, setImmediate, I/O, UI rendering
2. 微任务: process.nextTick（Nodejs）, Promises, Object.observe, MutationObserver



### Event-Loop定义

主线程从"任务队列"中读取执行事件，这个过程是循环不断的，这个机制被称为事件循环。此机制具体如下:主线程会不断从任务队列中按顺序取任务执行，每执行完一个任务都会检查microtask队列是否为空（执行完一个任务的具体标志是函数执行栈为空），如果不为空则会一次性执行完所有microtask。然后再进入下一个循环去任务队列中取下一个任务执行。

> #### 详细说明:

1. 选择当前要执行的宏任务队列，选择一个最先进入任务队列的宏任务，如果没有宏任务可以选择，则会跳转至microtask的执行步骤。
2. 将事件循环的当前运行宏任务设置为已选择的宏任务。
3. 运行宏任务。
4. 将事件循环的当前运行任务设置为null。
5. 将运行完的宏任务从宏任务队列中移除。
6. microtasks步骤：进入microtask检查点。
7. 更新界面渲染。
8. 返回第一步。

**执行进入microtask检查的的具体步骤如下:**

1. 设置进入microtask检查点的标志为true。
2. 当事件循环的微任务队列不为空时：选择一个最先进入microtask队列的microtask；设置事件循环的当前运行任务为已选择的microtask；运行microtask；设置事件循环的当前运行任务为null；将运行结束的microtask从microtask队列中移除。
3. 对于相应事件循环的每个环境设置对象（environment settings object）,通知它们哪些promise为rejected。
4. 清理indexedDB的事务。
5. 设置进入microtask检查点的标志为false。

**需要注意的是:当前执行栈执行完毕时会立刻先处理所有微任务队列中的事件, 然后再去宏任务队列中取出一个事件。同一次事件循环中, 微任务永远在宏任务之前执行。**

图示:



![event-loop2](https://user-gold-cdn.xitu.io/2019/3/22/169a4038c4e156f0?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

先看一个简单的示例：

```js
setTimeout(()=>{
    console.log("setTimeout1");
    Promise.resolve().then(data => {
        console.log(222);
    });
});
setTimeout(()=>{
    console.log("setTimeout2");
});
Promise.resolve().then(data=>{
    console.log(111);
});
```

思考一下, 运行结果是什么？

运行结果为:

```js
111
setTimeout1
222
setTimeout2
```

我们来看一下为什么？

我们来详细说明一下, JS引擎是如何执行这段代码的:

1. 主线程上没有需要执行的代码
2. 接着遇到setTimeout 0，它的作用是在 0ms 后将回调函数放到宏任务队列中(这个任务在下一次的事件循环中执行)。
3. 接着遇到setTimeout 0，它的作用是在 0ms 后将回调函数放到宏任务队列中(这个任务在再下一次的事件循环中执行)。
4. 首先检查微任务队列, 即 microtask队列，发现此队列不为空，执行第一个promise的then回调，输出 '111'。
5. 此时microtask队列为空，进入下一个事件循环, 检查宏任务队列，发现有 setTimeout的回调函数，立即执行回调函数输出 'setTimeout1',检查microtask 队列，发现队列不为空，执行promise的then回调，输出'222'，microtask队列为空，进入下一个事件循环。
6. 检查宏任务队列，发现有 setTimeout的回调函数, 立即执行回调函数输出'setTimeout2'。

再思考一下下面代码的执行顺序:

```js
console.log('script start');

setTimeout(function () {
    console.log('setTimeout---0');
}, 0);

setTimeout(function () {
    console.log('setTimeout---200');
    setTimeout(function () {
        console.log('inner-setTimeout---0');
    });
    Promise.resolve().then(function () {
        console.log('promise5');
    });
}, 200);

Promise.resolve().then(function () {
    console.log('promise1');
}).then(function () {
    console.log('promise2');
});
Promise.resolve().then(function () {
    console.log('promise3');
});
console.log('script end');
```

思考一下, 运行结果是什么？

运行结果为:

```js
script start
script end
promise1
promise3
promise2
setTimeout---0
setTimeout---200
promise5
inner-setTimeout---0
```

那么为什么？

我们来详细说明一下, JS引擎是如何执行这段代码的:

1. 首先顺序执行完主进程上的同步任务，第一句和最后一句的console.log
2. 接着遇到setTimeout 0，它的作用是在 0ms 后将回调函数放到宏任务队列中(这个任务在下一次的事件循环中执行)。
3. 接着遇到setTimeout 200，它的作用是在 200ms 后将回调函数放到宏任务队列中(这个任务在再下一次的事件循环中执行)。
4. 同步任务执行完之后，首先检查微任务队列, 即 microtask队列，发现此队列不为空，执行第一个promise的then回调，输出 'promise1'，然后执行第二个promise的then回调，输出'promise3'，由于第一个promise的.then()的返回依然是promise，所以第二个.then()会放到microtask队列继续执行，输出 'promise2';
5. 此时microtask队列为空，进入下一个事件循环, 检查宏任务队列，发现有 setTimeout的回调函数，立即执行回调函数输出 'setTimeout---0',检查microtask 队列，队列为空，进入下一次事件循环.
6. 检查宏任务队列，发现有 setTimeout的回调函数, 立即执行回调函数输出'setTimeout---200'.
7. 接着遇到setTimeout 0，它的作用是在 0ms 后将回调函数放到宏任务队列中，检查微任务队列，即 microtask 队列，发现此队列不为空，执行promise的then回调，输出'promise5'。
8. 此时microtask队列为空，进入下一个事件循环，检查宏任务队列，发现有 setTimeout 的回调函数，立即执行回调函数输出，输出'inner-setTimeout---0'。代码执行结束.





