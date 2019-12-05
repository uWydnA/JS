> 在看了网上很多相关的文章，很多都是懵逼看完，并不是说各位前辈们写得不好，而是说实在不容易在一两次阅读中理解透。我在阅读了一些文章后，自己整理总结和绘制了一些相关的图，个人认为会更容易接受和理解，所以分享在此。也因此以下的所有的理解和图解都是出于个人的理解，如果有错误的地方，请各位前辈务必见谅，并辛苦在下方提出和纠错，我实在担心自己不成熟的理论底子会误导了其余的小兄弟。

### 一开始，先说说为何这个知识点为什么理解起来这么乱

个人感觉原因有三：

1. JS内函数即对象。
2. Function对象和Object对象这两个内置对象的特殊性。
3. 很多讲解图的指向一眼下去花里胡哨，看着都头疼[手动狗头]。

### 再说说，为何网上各位前辈的相关文章都难以参透

很多前辈在讲解相关知识点的时候都是从__proto__开始讲起，但在我看来，__proto__与prototype关系之密切是无法单独提出来讲的（单独讲就意味着难以理解）；而prototype与constructor又有密切关系，这就造成**一种很尴尬的处境，要先讲__proto__就必然需要同时讲解prototype和constructor属性**，这个也就是为何对于小白的我们而言这些概念是那么的难以理解。（以上个人看法，仅供参考）

### 然后在讲讲我个人采取的理解方式

为了更轻松、更有动力地理解透，我采用从**constructor到__proto__原型链一步步“拆解”**的方式去理解，希望有好的效果。文章内容如下：

1. 先理解为什么“函数即对象”
2. constructor其实很纯粹
3. prototype是为何而出现
4. 真正的constructor属性藏在哪
5. __proto__让实例能找到自己的原型对象
6. 究竟何为原型链
7. 原型链引出新的继承方式 
8. 学了要用系列 | 手写一个new
9. 总结



### 最后，讲讲往下看需要知道的那些小知识：

① 当任意一个普通函数用于创建一类对象时，它就被称作构造函数，或构造器。

```js
function Person() {}
var person1 = new Person()
var person2 = new Person()
```

上面代码Person( )就是person1和person2的构造函数。

② 可以通过`对象.constructor`拿到创建该实例对象的构造函数。

```js
console.log(person1.constructor) // 结果输出: [Function: Person]
```

Person函数就是person1对象的构造函数。

③ Function函数和Object函数是JS内置对象，也叫内部类，JS自己封装好的类，所以很多莫名其妙、意想不到的设定其实无需过分纠结，官方动作，神仙操作。

④ 原型对象即实例对象自己构造函数内的prototype对象。

## 一、先理解为什么“函数即对象”

先看以下代码：

```js
function Person() {...}
console.log(Person.constructor) // 输出结果:[Function: Function]
// 上面是普通函数声明方法，生成具名函数，在声明时就已经生成对象模型。
console.log(Function.constructor) // 输出结果:[Function: Function]
console.log(Object.constructor) // 输出结果:[Function: Function]
```

上面的代码构造了一个Person函数，我们能看出那些信息？

1. Person虽被声明为一个函数，但它同样可以通过`Person.constructor`输出内容。输出内容说明Function函数是Person函数[普通声明的函数]的构造函数。
2. Function函数同时是自己的构造函数。
3. Function函数同样是Object这类内置对象的构造函数。

其实上面三点总结下来就是一句：在JS里，函数就是Function函数的实例对象。也就是我们说的函数即对象。上面的声明函数的代码其实几乎等同于下面代码：

```js
// 使用Function构造器创建Function对象
var Person = new Function('...')
// 几乎？因为这种方式生成的函数是匿名函数[anonymous]，并且只在真正调用时才生成对象模型。
```



在JS里，函数和对象包含关系如下：

![img](https://user-gold-cdn.xitu.io/2019/5/4/16a80b269d657645?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

> 总结：对象由函数创建，函数都是Function对象实例。

## 二、constructor其实很纯粹

先忽略__proto__和prototype，直接理解constructor，代码例子：

```js
function Person() {}
var person1 = new Person()
var person2 = new Person()

```

下面一张图就画出了它们constructor的指向（忽略了__proto__和prototype）：

![img](https://user-gold-cdn.xitu.io/2019/5/4/16a80c7522788b34?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

图中，蓝色底是Person的实例对象，而Person、Function是函数（也是对象）。

首先，我们已经知道每个对象都可以通过`对象.constructor`指向创建该对象的构造函数。我们先假设每个对象上都有这么个constructor属性，然后理解如下：

> **注意：**constructor属性不一定是对象本身的属性，这里只为方便理解将其泛化成对象本身属性，所以用虚线框，第三大点细讲。

1. person1与person2是Person对象的实例，他们的constructor指向创建它们的构造函数，即Person函数；
2. Person是函数，但同时也是Function实例对象，它的constructor指向创建它的构造函数，即Function函数；
3. 至于Function函数，它是JS的内置对象，在第一点我们就已经知道它的构造函数是它自身，所以内部constructor属性指向自己。

所以constructor属性其实就是一个拿来保存自己构造函数引用的属性，没有其他特殊的地方。

在接下来的所有例子都将把Function对象视为Function对象自己的实例对象，通过去掉它的特殊性来更好理解相关概念。

## 三、prototype是为何而出现

上一步理解是很容易的，然后这时要求你去给Person的两个实例对象加上一个效果相同的方法，你写了以下代码：

```js
// 下面是给person1和person2实例添加了同一个效果的方法sayHello
person1.sayHello = function() {
    console.log('Hello!')
}
person2.sayHello = function() {
    console.log('Hello!')
}
console.log(person1.sayHello === person2.sayHello) // false，它们不是同一个方法，各自占有内存
```



图示如下：

![img](https://user-gold-cdn.xitu.io/2019/5/2/16a76f9dbb551cd1?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

当你去对比这两个方法的时候，你会发现它们只是效果相同、名字相同，本质上却是**各自都占用了部分内存**的不同方法。这时候就出问题了，如果这时候有千千万万个实例（夸张）要这样效果同样的方法，那内存岂不是要炸。这时，prototype就出现解决问题了。

当需要为大量实例添加相同效果的方法时，可以将它们存放在prototype对象中，并将该prototype对象放在这些实例的构造函数上，达到共享、公用的效果。代码如下：

```js
Person.prototype.sayHello = function() {
    console.log('Hello!')
}
console.log(person1.sayHello === person2.sayHello) // true，同一个方法
```

图示如下：

![img](https://user-gold-cdn.xitu.io/2019/5/3/16a7982760566f77?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

而之所以这种形式可以减少内存的浪费，是由于无需再拿出部分内存为同一类的实例单纯创建相关同一效果的属性或方法，而可以直接去构造函数的prototype对象上找并调用。

> **总结：**prototype对象用于放某同一类型实例的共享属性和方法，实质上是为了内存着想。

讲到这里，你需要知道的是，所有函数本身是Function函数的实例对象，所以Function函数中同样会有一个prototype对象放它自己实例对象的共享属性和方法。所以上面的图示是不完整的，应改成下图：

![img](https://user-gold-cdn.xitu.io/2019/5/3/16a79829cc66f32e?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

其实里面的sayHello也是个函数，也有自己的prototype，但不画出来了，免得头疼。

**注意：**接下来的用【原型对象】表示【创建自己的构造函数内部的prototype】！

## 四、真正的constructor属性藏在哪

看到上面，有些小伙伴就头疼了，你说的constructor属性为什么我就没在console出来的对象数据中看到呢？

> **思考个问题：**`new Person( )`出来的千千万万个实例中如果都有constructor属性，并且都指向创建自己的构造函数，那岂不又出现了第三点的问题，它们都拥有一个效果相同但却都各自占用一部分内存的属性？

我相信你们懂我的意思了，constructor是完全可以被当成一个共享属性存放在原型对象中，作用也依然是指向自己的构造函数，而实际上也是这么处理的。对象的constructor属性就是被当做共享属性放在它们的原型对象中，即下图：

![img](https://user-gold-cdn.xitu.io/2019/5/3/16a7988540a58fa9?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

> **总结：**默认constructor实际上是被当做共享属性放在它们的原型对象中。

这时候有人会拿个反例来问：如果是共享属性，那我将两个实例其中一个属性改了，为啥第二个实例没同步？如下面代码：

```js
function Person() {}
var person1 = new Person()
var person2 = new Person()
console.log(person1.constructor) // [Function: Person]
console.log(person2.constructor) // [Function: Person]
person1.constructor = Function
console.log(person1.constructor) // [Function: Function]
console.log(person2.constructor) // [Function: Person] ！不是同步为[Function: Function]
```

这个是因为`person1.constructor = Function`改的并不是原型对象上的共享属性constructor，而是给实例person1加了一个constructor属性。如下：

```js
console.log(person1) // 结果：Function { constructor: [Function: Function] }
```

你可看到person1实例中多了constructor属性。它原型对象上的constructor是没有改的。

**嗯。嗯？嗯？！搞事？！!** 这下共享属性能理解了，但上面的图解明显会造成很大的问题，我们根本不能通过一个`对象.constructor`找回创建自己的构造函数（之间没有箭头链接）！

好的，不急，第四点只是告诉你为什么constructor要待在创建自己的构造函数prototype上。接下来是该__proto__属性亮相了。

## 五、__proto__让实例能找到自己的原型对象

带着第四点的疑问，我们如果要去解决这个问题，我们自然会想到在对象内部创建一个属性直接指向自己的原型对象，那就可以找到共享属性constructor了，也就是下面的关系：

1. 实例对象.__proto__ = 创建自己的构造函数内部的prototype（原型对象）
2. 实例对象.__proto__.constructor = 创建自己的构造函数

也如下图所示：

上面说的**__proto__**属性实际上也的确是这样的设置的，对象的__proto__属性就是指向自己的原型对象。这里要注意，因为JS内所有函数都是Function函数的实例对象，所以Person函数也有个__proto__属性指向自己的原型对象，即Function函数的prototype。至于Function函数为何有个__proto__属性指向自己（蓝色箭头）也不用解释了吧，它拿自身作为自己的构造函数，反正就是个特例，不讲道理。

> **疑惑来了：**实例对象.constructor 等于 实例对象.__proto__.constructor？

这个就是JS内部的操作了，当在一个实例对象上找不到某个属性时，JS就会去它的原型对象上找是否有相关的共享属性或方法，所以上面的例子中，person1对象内部虽然没有自己的constructor属性，但它的原型对象上有，所以能实现我们上面提到的效果。当然后面还涉及原型链，你只要知道上面一句话能暂时回答这个问题就好。

> **疑惑来了：**prototype也是个对象吧，它肯定也有个__proto__吧？

的确，它也是个对象，也的确有个__proto__指向自己的原型对象。那我们尝试用代码找出它的构造函数，如下：

```js
function Person() {}
console.log(Person.prototype.__proto__.constructor) // [Function: Object]
```

因为__proto__指向原型对象，原型对象中的constructor又指向构造函数，所以`Person.prototype.__proto__.constructor`指向的就是Person中prototype对象的构造函数，上面的输出结果说明了prototype的构造函数就是Object函数（对象）。

> **总结：**这么说的话其实函数内的prototype也不过是个普通的对象，并且默认也都是Object对象的实例。

下面一张图就画出了文章例子中所有__proto__指向，我们试试从中找出它的猫腻。

![img](https://user-gold-cdn.xitu.io/2019/5/3/16a7ca56f543da9c?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

> 猫腻一、所有函数的__proto__指向他们的原型对象，即Function函数的prototype对象

在第一点我们就讲了所有的函数都是Function函数的实例（包括Function自己），所以他们的__proto__自然也就都指向Function函数的prototype对象。

> 猫腻二、最后一个prototype对象是Object函数内的prototype对象。

Object函数作为JS的内置对象，也是充当了很重要的角色。Object函数是所有对象通过原型链追溯到最根的构造函数。换句话说，就是官方动作，不讲道理的神仙操作。

> 猫腻三、Object函数的prototype中的__proto__指向null。

这是由于Object函数的特殊性，有人会想，为什么Object函数不能像Function函数一样让__proto__属性指向自己的prototype？答案就是如果指向自己的prototype，那当找不到某一属性时沿着原型链寻找的时候就会进入死循环，所以必须指向null，这个null其实就是个跳出条件。

上面谈到原型链，有些小兄弟还不知道是什么东西，那接下来看看何为原型链，看懂了再回来重新理解一下猫腻三的解释。

## 六、究竟何为原型链

在让我告诉你何为原型链时，我先给你画出上面那个例子中所有的原型链，你看看能不能看出一些规律。上面的例子中一共有四条原型链，**红色线连接起来的一串就是原型链**：

![img](https://user-gold-cdn.xitu.io/2019/5/3/16a7ce8404a65f5d?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

**左边的图：**原型链也就是将原型对象像羊肉串一样串起来成为一条链，好粗暴的解释，但的确很形象。

**右边的图：**之前说过Person函数（所有函数）其实是Function函数的实例，假设把它看成一个普通的实例对象，忽略它函数身份以及prototype对象，其实它和左边图中的person1没什么区别，只是它们的__proto__属性指向了各自的的原型对象。

![img](https://user-gold-cdn.xitu.io/2019/5/3/16a7ce96250aee11?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

**左边的图：**Function函数因为是个特殊的例子，它的构造函数就是自己，所以__proto__属性也指向自己的prototype对象；但它的特殊性并不影响它的prototype对象依然不出意外的是Object函数的实例

**右边的图：**这个理解起来就很难受，因为Object函数和别的函数一样也是Function函数的实例，所以它的__proto__属性毫无例外地是指向Function函数的prototype对象，但是问题是Function函数中的prototype本身又是Object函数的实例对象，所以Function函数中的prototype对象中的__proto__属性就指向Object函数的prototype对象，这就形成“我中有你，你中有我”的情况，也是造成难以理解的原因之一。

为了更好地理解原型链，我打算忽略掉那讨厌的特例，Function函数。

![img](https://user-gold-cdn.xitu.io/2019/5/4/16a829de030e5598?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

忽略掉Function函数后你会发现好清爽！相信大家也发现了，__proto__属性在其中起着关键作用，它将一个个实例和原型对象关联在一起，但由于所关联的原型对象也有可能是别人的实例对象，所以就形成了串连的形式，也就形成了我们所说的原型链。

## 七、原型链引出新的继承方式

个人认为原型链的出现只是一次巧合，不是特别刻意的存在。但是这种巧合确实有它自己的意义。还记得我之前说过的两点吗：

1. prototype对象保存着构造函数给它的实例们调用的共享属性和方法。
2. 实例对象当没有某一属性时，会通过__proto__属性去找到创建它们的构造函数的prototype对象，并在里面找有没有相关的共享属性或方法。

那这时就很有趣了。prototype对象本身也有一个__proto__属性指向它自己的原型对象，上面有着构造函数留下的共享属性和方法。那这么说的话，假如当在自己原型对象上找不到相关的共享属性或方法时，对于它现在所在的prototype对象而言，也是一次寻值失败的情况，那它自然也会去它自己的原型对象上找，世纪大片图示如下：

![img](https://user-gold-cdn.xitu.io/2019/5/4/16a82c8a358544a4?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

现在来想想，假如Object函数内的prototype对象中__proto__属性不指向空，而指向自己的prototype？那不完了咯，死循环。

可能这时有小兄弟会问，这不就是一个不断找值的过程吗，有什么意义？但是就因为这种巧合，让一些可爱的人想到了一种新的继承方式：**原型链继承**。

请看下面代码：

```js
function GrandFather() {
    this.name = 'GrandFather'
}
function Father() {
    this.age = 32
}
Father.prototype = new GrandFather() // Father函数改变自己的prototype指向
function Son() {}
Son.prototype = new Father() // Son函数改变自己的prototype指向

var son = new Son()
console.log(son.name) // 结果输出：GrandFather
console.log(son.age)  // 结果输出：32
console.log(Son.prototype.constructor) // 结果输出：[Function: GrandFather]
```

相关指向图如下：

![img](https://user-gold-cdn.xitu.io/2019/5/4/16a830aa17d61fa4?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

两边的图都是忽略了Function函数的，同时将一些没有必要展示出来的属性给忽略了，如各大函数的__proto__属性。

**左边的图：**在没有改变各个函数的prototype的指向时，默认就是左边的图片所示。每个函数的prototype都是默认情况下将它们内部的__proto__指向Object函数的(黑色箭头)。

**右边的图：**Father函数和Son函数都丢弃了它们各自的prototype对象，指向一个新的对象。这形成了三个新的有趣现象：

1. Father函数中的prototype指向了GrandFather的实例对象，这时候这个实例对象就成为了Father函数以后实例的原型对象，顺其自然GrandFather实例对象内的私有属性name就变成了Father函数以后实例的共享属性；
2. 同样的，Son函数中的prototype指向了Father的实例对象，将Father的实例对象内的私有属性age就变成了Son函数以后实例的共享属性。
3. 它们的__proto__属性将它们串了起来，形成一条新的原型链。

上面的操作我们能看到Son函数以后的实例都能通过原型链找到name和age属性，也就是实现了我们所说的继承，继承了父类的属性。不过相信眼尖的我们会发现这种继承方式问题很大：

1. constructor的指向不可靠了，像`Son实例对象.constructor`最后得到的值是沿着原型链找到的GrandFather函数。可我们自己清楚Son实例对象就该是Son函数，但却不在我们的意料之中。
2. 所有所谓继承下来的属性全都是共享属性，好致命的问题。

所以，Emmm，了解一下就好。

## 八、学了要用系列 | 手写一个new

**new**关键词的作用一句话来说就是创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。而我们要去手动实现new关键词，无非就是组织一场认亲活动，环节有两个：

1. 让一个对象承认自己的构造函数（爹）就是该构造函数
2. 让这个构造函数承认这个对象就是它自己的实例（子）

**① 先造个Person构造函数（爹）做例子**

```js
function Person(identity){
    this.identity = identity || 'Person'
}
```

**② 爹有了，得有个子吧，那就创建一个空对象**

```js
var obj = {}
```

上面的语句为字面式创建对象，实则等同于下面一句

```js
var obj = new Object()
```

也即说明创建的空对象其实都是Object函数的实例，这么一看，完了吧，子不认爹。

还记得我们上面讲的吗，所谓的“空对象“内部并不是真正空空如也，它们内部都有一个__proto__属性指向自己的原型对象。而上面代码中的obj对象也是毫不例外有个__proto__属性指向Object对象中的prototype。

我们知道当创建某一构造函数的实例，创建出的实例应该将__proto__属性指向该构造函数内的prototype对象，那我们就走走形式，让它重新认爹。

**③ 手动将实例中的__proto__属性指向相应原型对象。**

```js
obj.__proto__ = Person.prototype
```

图解如下：

![img](https://user-gold-cdn.xitu.io/2019/5/6/16a8b74cce3568d2?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

你可以看到当指向变化后，Person函数中的prototype成为实例对象obj的原型对象，而自然而然我们拿到的`obj.constructor`就对应变成了Person函数。换句话说，obj已经承认Person函数是它自己的构造函数，也就说我们完成了认亲活动的第一环节。

那问题来了，Person函数承认这个实例（子）吗？

如果Person函数内部没有设置像：this.identity = identity || 'Person'这些语句（设置私有属性/方法），其实它也就承认了，因为成为它儿子不需要别的资格。但是不巧，Person函数确实有设置，而这些语句就像在说：

“你要成为我儿子就需要有这个资格：**拥有我设置的私有属性。但我认了你后，你改不改那个属性、要不要那个属性，我就不管了。**“

所以现在得进入第二环节：

**④ 在实例的执行环境内调用构造函数，添加构造函数设置的私有属性/方法。**

```js
Person.apply(obj, arguments) // arguments就是参数
```

我们先要知道构造函数为啥叫构造函数：

> 构造函数是一种特殊的方法，主要用来在创建对象时初始化对象， 即为对象成员变量赋初始值。

看到关键作用了吗？**“为对象成员变量赋初始值”。**

再看回“老爹”，Person函数：

```js
function Person(identity){
    this.identity = identity || 'Person' 
}
console.log(Person.identity) // 结果输出：undefined
// 注意不要拿name这个属性做例子，每个函数声明后都自带一个name属性用来保存函数名
```



> 疑惑：这里的this不是指向构造函数自身的吗？为什么Person函数没有identity属性？

感觉说来话长，简化成一句就是：函数声明后函数体内的语句并不会立即执行，而是在真正调用时才执行。所以里面的this在没有调用时压根没指向，或者根本没被当成属性，只是个代码段，所以自然也不会立即给自己赋一个identity属性。其实说这么多，就是为了引出实例通过apply方法调用构造函数，让构造函数体内此时真实存在的this指向自己，并为自己赋相应的初始属性值。至于arguments就是相应的参数，可以看成用于调整初始值如何设置的参数。

整个过程结束后，实例也拥有了构造函数Person内部要求设置的属性和方法，如下图：

![img](https://user-gold-cdn.xitu.io/2019/5/6/16a8b862ad96963c?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

这时我们就完成了让这个Person构造函数承认这个obj对象就是它自己的实例，也就是第二环节顺利完成。

**⑤ 整个过程代码如下：**

```js
// 构造函数登场
function Person(identity){
    this.identity = identity || 'Person'
}
// 实例对象登场
var obj = {}
// 环节一：让obj承认自己的构造函数（爹）就是Person函数
obj.__proto__ = Person.prototype
// 环节二：obj调用Person，拥有Person给孩子们设置的属性/方法
// 让Person函数承认这个对象就是它自己的实例（子）
Person.apply(obj, ['son'])
// End 完成，验证
console.log(obj.constructor) // 输出结果：[Function: Person]
console.log(obj.identity) // 输出结果：son
```

上面只是一个实例对象new出来的过程，真正实现new方法还需要我们将它封装起来，如下：

**⑥ 封装成new方法**

```js
// 构造函数登场
function Person(identity){
  this.identity = identity || 'Person'
}
// 封装自己的new
function _new(Fuc) {
  return function() {
    var obj = {
      __proto__: Fuc.prototype
    }
    Fuc.apply(obj, arguments)
    return obj
  }
}
// 封装完成，测试如下
var obj = _new(Person)('son')
console.log(obj.constructor) // 输出结果：[Function: Person]
console.log(obj.identity) // 输出结果：son

```



完美，皆大欢喜！鼓掌! 

## 九、总结

最近在学思维导图怎么做，所以尝试直接拿思维导图做总结了：

![img](https://user-gold-cdn.xitu.io/2019/5/4/16a83362fe70490e?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

![img](https://user-gold-cdn.xitu.io/2019/5/4/16a83364b991a077?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

![img](https://user-gold-cdn.xitu.io/2019/5/4/16a83366996e58be?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

写完这篇文章后，自己是觉得清晰了很多，当然本人并不确定内部的一些观点是否正确，大部分观点都是我结合各位前辈文章并加上自己的思考总结出来的一些比较能自圆其说的说法。感谢各位大佬前辈的阅读，如果有什么严重的错误，务必谅解和提出。

最后，感谢一个让我基本搞懂这些概念的博客文章：

[帮你彻底搞懂JS中的prototype、__proto__与constructor（图解）](https://blog.csdn.net/cc18868876837/article/details/81211729)

如果觉得我写得太烂可以去看几遍上面那篇文章。

End
