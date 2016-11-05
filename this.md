
 * 通常出现的位置
 * 
	1.方法内部，这时，this指向方法所属的对象

	2.构造函数里，this指向新创建的实例

	3.call(this,)，apply(this,[])，函数内部的this，指向的是call，apply的第一个参数

	4.

	5.匿名函数中的this，指向的是window(全局变量)
	
		function fn(a,b){
			this.name=a;
			this.age=b;
			return a+b;
		}
		var O={
			id:123
		}
		fn.call(O,1,2);//输出1