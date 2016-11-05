##XMLHttpRequest 对象##
	
所有现代浏览器均支持 XMLHttpRequest 对象（IE5 和 IE6 使用 ActiveXObject）。

XMLHttpRequest 用于在后台与服务器交换数据。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。

兼容的写法:

	var xmlhttp;
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }

##XMLHttpRequest 对象用于和服务器交换数据##

如需将请求发送到服务器，我们使用 XMLHttpRequest 对象的 open() 和 send() 方法;

**open方法：**
>规定请求的类型、URL 以及是否异步处理请求

>method：请求的类型；GET 或 POST

>url：文件在服务器上的位置

>async：true（异步）或 false（同步)

**send方法**
>将请求发送到服务器。string：仅用于 POST 请求