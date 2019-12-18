# JavaScript

## ECMAScript

### JS的执行和编译过程

#### 解析器

> 1. 没有执行，检查：提升，语法
>
> 2. 提升：提升到一个临时空间内，
>
> 3. 语法：语法不对，抛出错误，直接终止一切

提升：提升到一个临时空间内，

语法：语法不对，抛出错误，直接终止一切

#### 编译器

> 1. 执行
>
> 2. 如果解析器没有遇到报错，并且把所有的提升都做好了，才会执行编译器
>
> 3. 当编译器执行时，会先去临时空间中读取要操作的变量，直接使用





### 提升

#### 变量的提升

> 使用var声明的变量，会提前到当前作用域的开始的位置，被声明。原位赋值。

#### 函数的提升

> 1. 所有使用function声明的函数，都会**整体提升**，只要在当前作用域内声明了函数，在当前作用的任何位置都可以使用
> 2. **赋值式**创建函数，**提升的是声明**，不是函数





### 构造函数

>  构造函数是一种特殊的方法，主要用来在创建对象时初始化对象， 即为对象成员变量赋初始值。 

#### 构造内置函数

- 某些原因，可以被构造的函数与普通函数的区别，首字母大写
- **new**:默认情况下，函数只要被new执行，肯定会得到一个对象
- 构造函数：**var n = new Number(123);**得到的是一个对象，但是是一个数值型对象，拥有数值型数据的功能。

#### 构造自定义函数

- 将来面向对象中的重点，暂时先忽略





#### constructor

- **作用：**
  - `指向`实例对象的构造函数
- **特殊：**
  - 容易被更改，不可靠
  - 实例对象本来没有该属性，（藏在自身原型对象中，prototype对象除外）



#### prototype

- **含义**
  - 一类对象实例的`原型对象`
- **作用**
  - 存放共享属性和方法（实例对象的原型对象 = new 构造函数，可以获得该构造函数的私有属性，`__proto__`指向的是构造函数的原型对象）
  - 本质是为了节约内存
- **特殊**
  - 仅函数拥有
  - 函数声明时同时创建
  - 是`Object函数的实例`



#### `__proto__`

- **作用**
  - 指向自己的原型对象
  - `构成原型链的关键`
- **特殊**
  - ​	待寻属性对象自身不存在时通过该属性在自身的原型对象内寻找

### 对象

- 对象的概念：对象事物的描述
- 对象的语法（组成，本质）：属性名和属性值，**键值对**

```JS
var people = {
    name:"admin",
    age:18,
    sex:"男",
    like:"ball",
    sayhello:function(){
        console.log("我叫"+people.name+"今年"+people.age+"性别"+people.sex+"爱好"+people.like)
    }
}

people.sayhello();
```

- 对象的作用（意义）:储存数据，编程
- 对象中的值的叫法和操作：对象里的变量叫**属性**，对象里的函数叫**方法**

#### 操作

- **.语法**：对象.属性（方法名），当属性名和方法名确定

```js
obj1.name = "hello";
console.log(obj1.name);
```

-  **[ ]语法**，当属性名和方法名不确定

```js
var obj1 = {};
var str = "age";
console.log(obj1[str]);
obj1[str] = "男";
console.log(obj1["name"]);
console.log(obj1);
```







### 数据类型

#### 函数Function 

> 函数是由事件驱动的或者当他被调用时可执行的可重复使用的代码块。



##### 函数的好处

1. 重复使用－－－－空调不可能是一次性的，可以重复使用
2. 忽略细节－－－－会用空调不一定会生产空调
3. 选择执行－－－－夏冬使用，春秋不用



##### 函数的定义

1. **声明式**

   | function | 为声明函数的关键字，指出这是一个函数     |
   | -------- | ---------------------------------------- |
   | fn       | 是函数名，类似于永来存储函数的变量       |
   | ()       | 为函数的参数，多个参数用 , 隔开          |
   | {}       | 放置函数体，用于执行时，所要编译的代码段 |

2. **赋值式**

   ```js
   var fn = function(){};
   ```

   ​	这种方式下，虽然这个函数没有名字，但是这个函数赋值给了fn，因此通过变量fn也能调用到这个函数，以上两种声明方式等价都可以使用，函数名/变量名＋()  调用执行。



##### 函数的调用

1. 自身执行

   - 函数名(),任何情况下，只要函数名()了，函数立即执行

2. 事件调用

   - 元素.事件 = 函数名

     ```js
     box.onclick = fn;
     ```

   - 元素.事件 = 函数的内容

     ```js
     box.onclick = function(){...}
     ```



##### 函数写法的分类

1. 有名函数

   - 声明式创建的函数：function fn(){}

2. 无名函数

   注意：无名函数不允许直接存在，必须作为值使用，是一种表达式，或值

   ```js
   function(){
     console.log(1)
   }
   ```

   使用:

   1. **作为赋值式创建函数的值**：**var fn = function(){}**
   2. **事件处理函数**，直接作为事件执行函数存在：**元素.事件 = function(){}**
   3. **回调函数**：作为函数的参数存在，也是一个值：

   ```js
   function fn(a){a(1)}; fn(function(b){...})；
   ```

   4. **作为匿名函数的函数体存在**：**(function(){})()**  

3. 匿名函数

   ```js
   (function(){})()
   ```

   特点：自动执行



##### 函数的参数

1. **形参**

   1. 定义时的参数叫形参，
   2. 形参保存了实参
   3. 形参是变量
   4. 形参相当于赋值元素运算符=号，左边的内容

2. **实参**

   1. 执行时的参数叫实参
   2. 实参被形参接收
   3. 实参是值
   4. 实参相当于赋值元素运算符=号，右边的内容

3. **参数的个数**

   - 可以传无限个

   - 关系：实参和形参，数量一致，按照顺序一一对应

   - 形参多，多出来的形参是undefined

   - 实参多，多出来的实参，被传到arguments（实参全部都会比传到arguments)

4. **参数的类型**

   - 任何类型



##### 函数的回调

> ​	回调函数是一段可执行的代码段，它作为一个参数传递给其他的代码，其作用是在需要的时候方便调用这段（回调函数）代码。
>
> ​	在JavaScript中函数也是对象的一种，同样对象可以作为参数传递给函数，因此函数也可以作为参数传递给另外一个函数，这个作为参数的函数就是回调函数

```js
   function sum(x,y,callback){
                var sum = x+y;
                callback(sum);
        }
        sum(1,3,function(sum){
                console.log(sum)
        })
```



##### 函数的return

1. 返回值：在函数执行结束后，得到的数据

2. 返回值，返回到哪？返回到函数的执行语句上

3. **默认情况下，函数返回undefined**

4. 如果需要有返回值，要在函数中使用关键字：return

5. return 值
   
- 为什么要有返回值，如果是处理数据的函数，处理之后的数据，有可能需要二次使用，需要有返回值，返回处理好的数据
  
6. 通过return来返回无名函数

   ```js
   	function fn(a){
   	        return function(b){
   	                return function (c){
   	                        return function (d){
   	                                return a+b+c+d;
   	                        }
   	                }
   	        }
   	}
   	fn(3)(4)(5)(6)=3+4+5+6;
   
   ```

7. return 可以返回几次数据:**1次**

   - 函数中，可以写多个return，但是函数只能执行一次return，执行之后，函数会立即结束，后面代码不再执行



##### arguments对象

arguments是函数中专有的一个对象，只有在函数中能拿到，用来保存函数所有的实参。

1. arguments其实是一个伪数组，可以使用数组的所有方法和属性（length)。
2. arguments.length实际上就是实参的个数。
3. 借助arguments找到所有的实参：console.log(arguments);



##### 作用域

> 变量生效的区域
>
> 能不能跨作用域访问：
>
> 1. 同级局部不能跨
> 2. 不能拿子，子能拿父
> 3. 多个父子级作用域内都有，找最近的作用域

###### 局部作用域

> 区域：每个函数都是一个局部

1. 生命周期：朝生暮死，作用域声明时被创建，作用域结束时被释放

2. 缺点：更麻烦，每个局部都需要定义某个变量，甚至是几个局部都相同的变量

###### 全局作用域

> 整个代码文件，不属于任何一个函数，就是全局

1. 生命周期：一直存在，在任何位置都可以拿到
2. 缺点：更浪费性能



##### 递归

> 递归算法：在函数内部，执行自己

```js
    function fn(n){
        if(n == 1 || n == 2){
            return 1
        }else{
            return fn(n-1) + fn(n-2);
        }
    }
    console.log(fn(8));
```

**递归最重要的就是停止条件**



## BOM



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

- navigator.appName：浏览器名称；

- navigator.appVersion：浏览器版本；

- navigator.language：浏览器设置的语言；

- navigator.platform：操作系统类型；

- navigator.userAgent：浏览器设定的`User-Agent`字符串。

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



##### history//不推荐使用

> `history`对象保存了浏览器的历史记录

JavaScript可以调用`history`对象的`back()`或`forward ()`，相当于用户点击了浏览器的“后退”或“前进”按钮。

这个对象属于历史遗留对象，对于现代Web页面来说，由于大量使用AJAX和页面交互，简单粗暴地调用`history.back()`可能会让用户感到非常愤怒。

新手开始设计Web页面时喜欢在登录页登录成功时调用`history.back()`，试图回到登录前的页面。这是一种错误的方法。

任何情况，你都不应该使用`history`这个对象了。





## DOM



### 操作DOM

由于HTML文档被浏览器解析后就是一棵DOM树，要改变HTML的结构，就需要通过JavaScript来操作DOM。

始终记住DOM是一个树形结构。操作一个DOM节点实际上就是这么几个操作：

- 更新：更新该DOM节点的内容，相当于更新了该DOM节点表示的HTML的内容；
- 遍历：遍历该DOM节点下的子节点，以便进行进一步操作；
- 添加：在该DOM节点下新增一个子节点，相当于动态增加了一个HTML节点；
- 删除：将该节点从HTML中删除，相当于删掉了该DOM节点的内容以及它包含的所有子节点。



在操作一个DOM节点前，我们需要通过各种方式`先拿到这个DOM节点`。

**第一种方法**或者**最常用的方法**是：

- **document.getElementById()**

- **document.getElementsByTagName()**

- **CSS选择器document.getElementsByClassName()**

由于ID在HTML文档中是唯一的，所以`document.getElementById()`可以直接定位唯一的一个DOM节点。`document.getElementsByTagName()`和`document.getElementsByClassName()`总是返回一组DOM节点。要精确地选择DOM，可以先定位父节点，再从父节点开始选择，以缩小范围。

```js
// 返回ID为'test'的节点：
var test = document.getElementById('test');

// 先定位ID为'test-table'的节点，再返回其内部所有tr节点：
var trs = document.getElementById('test-table').getElementsByTagName('tr');

// 先定位ID为'test-div'的节点，再返回其内部所有class包含red的节点：
var reds = document.getElementById('test-div').getElementsByClassName('red');

// 获取节点test下的所有直属子节点:
var cs = test.children;

// 获取节点test下第一个、最后一个子节点：
var first = test.firstElementChild;
var last = test.lastElementChild;
```



**第二种方法**是使用`querySelector()`和`querySelectorAll()`，需要了解selector语法，然后使用条件来获取节点，更加方便：

```
// 通过querySelector获取ID为q1的节点：
var q1 = document.querySelector('#q1');

// 通过querySelectorAll获取q1节点内的符合条件的所有节点：
var ps = q1.querySelectorAll('div.highlighted > p');
```

注意：低版本的IE<8不支持`querySelector`和`querySelectorAll`。IE8仅有限支持。

严格地讲，我们这里的DOM节点是指`Element`，但是DOM节点实际上是`Node`，在HTML中，`Node`包括`Element`、`Comment`、`CDATA_SECTION`等很多种，以及根节点`Document`类型，但是，绝大多数时候我们只关心`Element`，也就是实际控制页面结构的`Node`，其他类型的`Node`忽略即可。根节点`Document`已经自动绑定为全局变量`document`。









## Event 对象

> ​	Event 对象代表事件的状态，比如事件在其中发生的元素、键盘按键的状态、鼠标的位置、鼠标按钮的状态。
>
> ​	事件通常与函数结合使用，函数不会在事件发生前被执行！
>
> ​	注意，所有事件的语法都是一样的，行为的触发方式有区别

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







## JSON

>  JSON是JavaScript Object Notation的缩写，它是一种数据交换格式。 



### 数据类型

- number：和JavaScript的`number`完全一致；
- boolean：就是JavaScript的`true`或`false`；
- string：就是JavaScript的`string`；
- null：就是JavaScript的`null`；
- array：就是JavaScript的`Array`表示方式——`[]`；
- object：就是JavaScript的`{ ... }`表示方式。



### 序列化

```js
var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};
var s = JSON.stringify(xiaoming);
console.log(s);
```

```js
JSON.stringify(xiaoming, null, '  ');//要输出得好看一些，可以加上参数，按缩进输出：
```

- `JSON.stringify()` 第二个参数用于控制如何筛选对象的键值，如果我们只想输出指定的属性，可以传入`Array`:

```js
JSON.stringify(xiaoming, ['name', 'skills'], '  ');
```

- 还可以传入一个函数，这样对象的每个键值对都会被函数先处理。

```js
function convert(key, value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    return value;
}

JSON.stringify(xiaoming, convert, '  ');
```

-  给`对象`定义一个`toJSON()`的方法，直接返回JSON应该序列化的数据： 

```js
var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp'],
    toJSON: function () {
        return { // 只输出name和age，并且改变了key：
            'Name': this.name,
            'Age': this.age
        };
    }
};

JSON.stringify(xiaoming); // '{"Name":"小明","Age":14}'
```



### 反序列化

 拿到一个JSON格式的字符串，我们直接用`JSON.parse()`把它变成一个JavaScript对象 。

```js
JSON.parse('[1,2,3,true]'); // [1, 2, 3, true]
JSON.parse('{"name":"小明","age":14}'); // Object {name: '小明', age: 14}
JSON.parse('true'); // true
JSON.parse('123.45'); // 123.45
```

 `JSON.parse()`还可以接收一个函数，用来转换解析出的属性： 

```js
var obj = JSON.parse('{"name":"小明","age":14}', function (key, value) {
    if (key === 'name') {
        return value + '同学';
    }
    return value;
});
console.log(JSON.stringify(obj)); // {name: '小明同学', age: 14}
```

