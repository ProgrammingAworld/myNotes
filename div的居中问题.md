##普通div的居中##
	先设置宽度和高度
	之后设置margin：0 auto;

##浮动div的居中##
	
	设置宽度，（高度可设可不设，设置可以让div垂直居中）
	之后设置margin的值：margin：-height 0 0 -width；
	之后定位：position：absolute
	之后设置top：50%；left：50%；


具体代码如下：

	<!DOCTYPE html>
	<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<style type="text/css">
			#div{
				width: 500px;
				height: 300px;
				background: yellow;
				float: left;
				position: absolute;
				margin: -150px 0 0 -250px;
				top: 50%;
				left: 50%;
			}
		</style>
	</head>
	<body>
		<div id="div">
			
		</div>
	</body>
	</html>

	