## PHP

### 语法

#### php的变量必须使用$声明

```php
$a = 10;
```

#### php支持#号注释



#### php的字符串拼接用	.

```php
$str = "admin";
"hello" . $str
```



#### 对象访问属性使用	->

```php
$obj->name
```



#### 输出(返回)语句

>   前后端交互：数据：字符：json,字符,html,txt,xml
>
> 前端：
>
> ​	发送：Ajax
>
> ​	接收：当前端没有主动接收时，被浏览器默认接收/Ajax
>
> 后端：
>
> ​	接收：...
>
> ​	发：echo,print,print_r()

##### echo

##### print

##### print_r



#### 每行代码结束必须加分号





### 数据类型

#### 字符

```php
$str = "abc";
echo $str;
```



#### 整型

```php
$int = 10;
echo $int;
```



#### 浮点型

```php
$float = 1.234;
echo $float;
```



#### 布尔

```php
$boolean = "abc";
echo $boolean;
```



#### 对象

```php
class fn{
    var $name = "admin";
    function show(){
        echo "hello ".$this->name;
    }
}
$obj = new fn();
```



#### 数组

```php
$arr = Array(3,4,5,6,7,8);
print_r($arr);
```



#### NULL

```php
$str = "abc";
echo $str
```



#### 资源型（从mysql获取到的数据）

```php
$str = "abc";
echo $str
```



### 作用域

> php的作用域，任何作用域都不允许跨，除非是超级全局变量global的声明

```php
$a = 10;
function fn(){
    global $a;
    echo $a;
}
fn();
```



### 数组

#### 索引数组

##### 索引

```php
$arr = [1,2,3,4,5,6];
echo $arr[0];
```

##### 长度

```php
$arr = [1,2,3,4,5,6];
echo $arr->length;//错误
echo count($arr);//正确
```

##### 遍历

```php
$arr = [1,2,3,4,5,6];
echo $arr[4];
echo "<br>";
echo count($arr);
echo "<br>";
for($i=0;$i<count($arr);$i++){
    echo $arr[$i];
    echo "<br>";
}
```



#### 关联数组

##### 声明方式

```php
$arr = array("name"=>"admin","age"=>18);
```

##### 获取值方式

```php
echo $arr["name"];
```

##### 遍历方式

```php
foreach($arr as $key=>$val){
    echo $val;
    echo "<br>";
}
```



### 对象

#### 声明方式

```php
class fn{
    var $name = "admin";
    function show(){
        echo "hello".$this->name;
        return 200;
    }
}
```



### JSON转换

#### json_encode

> PHP json_encode() 用于对变量进行 JSON 编码，该函数如果执行成功返回 JSON 数据，否则返回 FALSE 。

##### 语法

```php
string json_encode ( $value [, $options = 0 ] )
```

##### 参数

- **value**: 要编码的值。该函数只对 UTF-8 编码的数据有效。
- **options**:由以下常量组成的二进制掩码：JSON_HEX_QUOT, JSON_HEX_TAG, JSON_HEX_AMP, JSON_HEX_APOS, JSON_NUMERIC_CHECK,JSON_PRETTY_PRINT, JSON_UNESCAPED_SLASHES, JSON_FORCE_OBJECT

##### 实例

以下实例演示了如何将 PHP 数组转换为 JSON 格式数据：

```php
<?php
   $arr = array('a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5);
   echo json_encode($arr);
?>
```

以上代码执行结果为：

```php
{"a":1,"b":2,"c":3,"d":4,"e":5}
```



### PHP操作数据库

#### 连接

>连接（登录）mysql，并选择数据库



```php
$link = @new mysqli("localhost:3306","root","root","test1912");

if($link->connect_error){
    // 需要数据加工，加工成json，能被前端识别的数据
    echo $link->connect_error;
}
```

#### 发送mysql命令

```php
$lick->query("mysql命令");
```



#### 增加

```php
$str = 'INSERT stu (user,sex,age) VALUES("麻子","男",20)';
$q = $link->query($str);
if($q){
    echo "insert ok";
}else{
    echo "insert error";
}
```



#### 删除

```php
$str = 'DELETE FROM stu WHERE id=13';
$q = $link->query($str);
if($q){
    echo "delete ok";
}else{
    echo "delete error";
}
```



#### 修改

```php
$str = 'UPDATE stu SET user="陆帅" WHERE id=6';
$q = $link->query($str);
if($q){
    echo "update ok";
}else{
    echo "update error";
}

```



#### 查询

##### fetch

> 每次执行，只能解析一条数据，需要配合循环遍历所有

```php
$str = "SELECT * FROM stu";
$q = $link->query($str);
if($q){
    echo "select ok";
    echo $q->fetch;
    print_r($q);
}else{
    echo "select error";
}
```

##### fetch_array()

> 解析成索引和关联的混合数组

```php
$str = "SELECT * FROM stu";
$q = $link->query($str);
if($q){
	while($arr = $q->fetch_array()){
		print_r($arr);
		echo "<br>";
	}
}else{
    echo "select error";
}
```

##### fetch_row()

> 解析成索引数组

```php
$str = "SELECT * FROM stu";
$q = $link->query($str);
if($q){
	$arr = $q->fetch_row();
    for ($i = 0; $i < count($arr); $i++) {
        echo $arr[$i];
        echo "<br>";
    }
}else{
    echo "select error";
}
```

##### fetch_assoc

> 解析成关联数组

```php
$str = "SELECT * FROM stu";
$q = $link->query($str);
if($q){
	while ($arr = $q->fetch_assoc()) {
        // print_r($arr);
        echo $arr["user"];
        echo "<br>";
    }
}else{
    echo "select error";
}
```



##### fetch_object

> 解析成对象

```php
$str = "SELECT * FROM stu";
$q = $link->query($str);
if($q){
	while ($arr = $q->fetch_object()) {
        echo json_encode($arr);
        // echo $arr->user;
        echo "<br>";
    }
}else{
    echo "select error";
}
```



