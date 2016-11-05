---
title: 原型链&原型继承
categories: JavaScript
tags: 学习笔记
---

##原型链
在`JavaScript`中，每个对象都有一个`[[Prototype]]`属性，其保存着的地址就构成了对象的原型链。

`[[Prototype]]`属性是js编译器在对象被创建时自动添加的，其取值由new运算符的右侧参数决定。字面量的方式可转化为new Obejct();

	var x = new Xzavier();
	vae o = {};  //var o = new Obejct();
通过对象的`[[Prototype]]`保存对另一个对象的引用，通过这个引用往上进行属性的查找，这就是原型链查找机制。

对象在查找某个属性的时候，会首先遍历自身的属性，如果没有则会继续查找`[[Prototype]]`引用的对象，如果再没有则继续查找`[[Prototype]].[[Prototype]]`引用的对象，依次类推，直到`[[Prototype]].….[[Prototype]]`为`undefined`

（`Object.prototype的[[Prototype]]`就是undefined）

	function Xzavier() {
	    this.name = 'xzavier';
	}
	var x = new Xzavier();
	x.age = 23;
	
	console.log(x.job);  // 获取x的job属性 undefined
1、遍历x对象本身，结果x对象本身没有job属性

2、找到x的[[Prototype]]，也就是其对应的对象Xzavier.prototype，同时进行遍历。 Xzavier.prototype也没有job属性

3、找到Xzavier.prototype对象的[[Prototype]]，指向其对应的对象Object.prototype。Object.prototype也没有job属性

4、寻找Object.prototype的[[Prototype]]属性，返回undefined。

##函数的变量和内部函数

###私有变量和内部函数

私有成员，即定义函数内部的变量或函数，外部无法访问。

	function Xzavier(){
	    var name = "xzavier"; //私有变量
	    var sports = function() {console.log('basketball')}; //私有函数 
	}
	var x = new Xzavier();
	x.name;  //undefined
如果要访问，需要对外提供接口。

	function Xzavier(){
	    var name = "xzavier"; //私有变量
	    var sports = function() {console.log('basketball')}; //私有函数
	    return{
	        name: name,
	        sports: sports
	    }
	}
	var x = new Xzavier();
	x.name;  //"xzavier"

###静态变量和内部函数

用点操作符定义的静态变量和内部函数就是实例不能访问到的变量和内部函数。只能通过自身去访问。

	function Xzavier(){
	    Xzavier.name = "xzavier"; //静态变量
	    Xzavier.sports = function() {console.log('basketball')}; //静态函数 
	}
	Xzavier.name; //"xzavier"
	var x = new Xzavier();
	x.name;  //undefined

###实例变量和内部函数

通过this定义给实例使用的属性和方法。

	function Xzavier(){
	    this.name = "xzavier"; //实例变量
	    this.sports = function() {console.log('basketball');}; //实例函数 
	}
	Xzavier.name; //undefined
	var x = new Xzavier();
	x.name;  //"xzavier"

##原型链继承
有了原型链，就可以借助原型链实现继承。

	function Xzavier() {
	    this.name = 'xzavier';
	    this.sex = 'boy';
	    this.job = "jser";
	}

	function X() {};
X的原型`X.prototype`原型本身就是一个`Object`对象。F12打开控制台输入函数，再打印`X.prototype:`

	Object {
	    constructor: X()
	    __proto__: Object
	}
`prototype`本身是一个`Object`对象的实例，所以其原型链指向的是Object的原型。

**X.prototype = Xzavier.prototype**

    X.prototype = Xzavier.prototype;
这样相当于把X的`prototype`指向了Xzavier的`prototyp`e；这样只是继承了Xzavier的`prototype`方法，Xzavier中的自定义方法则不继承。

	X.prototype.love = "dog";
这样也会改变Xzavier的`prototype`，所以这样基础就不好。

**X.prototype = new Xzavier()**

	X.prototype = new Xzavier();
这样产生一个Xzavier的实例，同时赋值给X的原型，也即`X.prototype`相当于对象：

	{
	    name: "xzavier", 
	    sex: "boy", 
	    job: "jser",
	    [[Prototype]] : Xzavier.prototype
	}
这样就把Xzavier的原型通过`X.prototype.[[Prototype]]`这个对象属性保存起来，构成了原型的链接。不过，这样X产生的对象的构造函数发生了改变，因为在X中没有`constructor`属性，只能从原型链找到`Xzavier.prototype`，读出`constructor:Xzavier。`

	var x = new X;
	console.log(x.constructor);

输出：

	Xzavier() {
	    this.name = 'xzavier';
	    this.sex = 'boy';
	    this.job = "jser";
	}
手动改正：

    X.prototype.constructor = X;
这是X的原型就多了个属性constructor，指向X

	function Xzavier() {
	    this.name = 'xzavier';
	    this.sex = 'boy';
	    this.job = "jser";
	}
	
	function X(){}
	X.prototype = new Xzavier();
	var x = new X()
	x.name  // "xzavier"

###hasOwnProperty
`hasOwnProperty`是`Object.prototype`的一个方法，判断一个对象是否包含自定义属性而不是原型链上的属性。`hasOwnProperty` 是JavaScript中唯一一个处理属性但是不查找原型链的函数。

	function Xzavier() {
	    this.name = 'xzavier';
	    this.sex = 'boy';
	    this.job = "jser";
	}
	//给A的原型对象添加属性
	Xzavier.prototype.sports = function() {console.log('basketball');};
	
	var x = new Xzavier();
	x.name; // 'xzavier'
	'sex' in x; // true
	
	x.hasOwnProperty('job'); // true
	x.hasOwnProperty('sports'); // false
当检查对象上某个属性是否存在时，`hasOwnProperty` 是非常推荐的方法。