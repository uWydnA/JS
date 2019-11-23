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

## DOM

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

