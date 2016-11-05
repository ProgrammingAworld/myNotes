##jQuery 尺寸方法##
	jQuery 提供多个处理尺寸的重要方法：
	width()//元素的真实宽度
	height()
	innerWidth()//元素的真是宽度加padding
	innerHeight()
	outerWidth()//元素的真是宽度加padding加border
	outerHeight()
	outerWidth(true)//元素的真是宽度加padding加border加margin
	outerHeight(true)


##获取后代节点的方法##

	1.next（）//返回被选元素的下一个同胞元素
	2.nextAll（）//返回被选元素的所有跟随的同胞元素。
	3.nextUntil() //返回介于两个给定参数之间的所有跟随的同胞元素。

##获取同胞节点的方法##
	siblings() //方法返回被选元素的所有同胞元素。
	可以使用可选参数来过滤对同胞元素的搜索。
	下面的例子返回属于 <h2> 的同胞元素的所有 <p> 元素：
	实例
	$(document).ready(function(){
	  $("h2").siblings("p");
	});

##jQuery 遍历- 过滤##

	first() 方法返回被选元素的首个元素
	last() 方法返回被选元素的最后一个元素
	eq() 方法返回被选元素中带有指定索引号的元素，索引号从 0 开始，因此首个元素的索引号是 0 而不是 1。
	filter() 方法允许您规定一个标准。不匹配这个标准的元素会被从集合中删除，匹配的元素会被返回。
	not() 方法返回不匹配标准的所有元素。