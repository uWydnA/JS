## storage

### localStorage

> 只读的`localStorage` 属性允许你访问一个[`Document`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document) 源（origin）的对象 [`Storage`](https://developer.mozilla.org/zh-CN/docs/Web/API/Storage)；存储的数据将保存在浏览器会话中。`localStorage` 类似 [`sessionStorage`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sessionStorage)，但其区别在于：存储在 `localStorage` 的数据可以长期保留；而当页面会话结束——也就是说，当页面被关闭时，存储在 `sessionStorage` 的数据会被清除 。
>
> 应注意，无论数据存储在 `localStorage` 还是 `sessionStorage` ，**它们都特定于页面的协议。**
>
> 另外，`localStorage` 中的键值对总是以字符串的形式存储。 (需要注意, 和js对象相比, 键值对总是以字符串的形式存储意味着数值类型会自动转化为字符串类型).

#### 语法

```js
myStorage = localStorage;
```

#### 值

一个可被用于访问当前源（ origin ）的本地存储空间的 [`Storage`](https://developer.mozilla.org/zh-CN/docs/Web/API/Storage) 对象。

#### 异常

- `SecurityError`

  请求违反了一个策略声明，或者源（ origin ）不是 [一个有效的 scheme/host/port tuple](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy#Definition_of_an_origin) （例如如果origin使用 `file:` 或者 `data:` 形式将可能发生）。比如，用户可以有禁用允许对指定的origin存留数据的浏览器配置。



下面的代码片段访问了当前域名下的本地 [`Storage`](https://developer.mozilla.org/zh-CN/docs/Web/API/Storage) 对象，并通过 [`Storage.setItem()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Storage/setItem) 增加了一个数据项目。

#### .setItem()

```
localStorage.setItem('myCat', 'Tom');
```

#### .getItem()

该语法用于读取 `localStorage` 项，如下:

```
let cat = localStorage.getItem('myCat');
```

#### .removeItem()

该语法用于移除 `localStorage` 项，如下:

```
localStorage.removeItem('myCat');
```

#### .clear()

该语法用于移除所有的 `localStorage` 项，如下:

```
// 移除所有
localStorage.clear();
```

#### localStorage是对象，有自己的属性或值

#### 增

localStorage.user = "admin";

#### 改

localStorage.user = "root";

#### 查

console.log(localStorage.user)

#### 删

delete localStorage.user

### sessionStorage

> `sessionStorage` 属性允许你访问一个 session [`Storage`](https://developer.mozilla.org/zh-CN/docs/Web/API/Storage) 对象。它与 [`localStorage`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage) 相似，不同之处在于 localStorage 里面存储的数据没有过期时间设置，而存储在 sessionStorage 里面的数据在页面会话结束时会被清除。页面会话在浏览器打开期间一直保持，并且重新加载或恢复页面仍会保持原来的页面会话。**在新标签或窗口打开一个页面时会复制顶级浏览会话的上下文作为新会话的上下文，**这点和 session cookies 的运行方式不同。
>
> 应该注意，存储在sessionStorage或localStorage中的数据**特定于该页面的协议**。

#### 语法

```js
// 保存数据到 sessionStorage
sessionStorage.setItem('key', 'value');

// 从 sessionStorage 获取数据
let data = sessionStorage.getItem('key');

// 从 sessionStorage 删除保存的数据
sessionStorage.removeItem('key');

// 从 sessionStorage 删除所有保存的数据
sessionStorage.clear();
```

#### 返回值

一个 [`Storage`](https://developer.mozilla.org/zh-CN/docs/Web/API/Storage) 对象。



### window.onStorage事件

> **WindowEventHandlers.onstorage** 属性包含一个在`storage`事件触发时的事件句柄。 当存储域发生改变时会触发事件。(例如： 有新的项被存储)
>
> 专门用来检测storage的变化
>
> **不能直接使用，只能检测`非当前页面`的storage的变化**，而且只能检测同一个服务器环境下的页面

#### event.key

> 值发生变化的key

#### event.oldValue

> 改变前的值

#### event.newValue

> 改变后的值

#### 实例

```js
window.onstorage = function(e) {
  console.log( e.key + ' 键已经从 ' + e.oldValue + ' 改变为 ' + e.newValue + '.');
};
```

