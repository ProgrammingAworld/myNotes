##div的品字布局方法##

第一种：

基本思路：

（1）三块高宽是确定的；

（2）上面那块用margin: 0 auto;居中；

（3）下面两块用float或者inline-block不换行；

（4）用margin调整位置使他们居中。

第二种：

**用margin-left: 50%，让下面两块的左侧到中间位置。然后再对右下角那块用margin-left，值是负的两倍宽度。就可以把它移动到左下角。因此第二个div是右下的，第三个是左下的，需要换一下。**

	<!DOCTYPE html>
	<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<style type="text/css">
			/*-------第一种方法--------*/
			/**{padding: 0 ;margin: 0;}
			div{
				width: 100px;
				height: 100px;
				background: #00BFFF;
			}
			#div1{
				margin: 0 auto;
			}
			#div2{
				margin-left: 50%;
				background: yellow;
				display: inline-block;
				
			}
			#div3{
				display: inline-block;
				margin-left: -200px;
				background: #FF0000;
			}*/
			/*-------第二种方法--------*/
			{padding: 0 ;margin: 0;}
			div{
				width: 100px;
				height: 100px;
				background: #00BFFF;
			}
			#div1{
				margin: 0 auto;
			}
			#div2{
				float: left;
				margin-left: 50%;
				background: #FF0000;
				
			}
			#div3{
				float: left;
				margin-left: -200px;
				background: yellow;
			}
		</style>
	</head>
	<body>
		<div id="div1">
			
		</div>
		<div id="div2">
			
		</div>
		<div id="div3">
			
		</div>
	</body>
	</html>
