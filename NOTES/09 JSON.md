## JSON

>  JSON是JavaScript Object Notation的缩写，它是一种数据交换格式。 

### 格式

1. 必须是字符
2. 这个字符的格式与js中的数组和对象大体一致
3. 但是如果与对象一致，对象的key必须加双引号
4. 不允许出现没有意义的,号
5. 不允许出现undefined，function，NaN



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

