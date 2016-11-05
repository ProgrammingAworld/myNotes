##Jsonp的书写格式##
**主要用于跨域**
	
	<!DOCTYPE html>
	<html>
		<head>
			<meta charset="UTF-8">
			<title></title>
		</head>
		<body>
			<input type="button" id="btn" value="点击获取数据" />
			<script type="text/javascript">
				var btn=document.getElementById("btn");
				btn.onclick=function(){
					var srt=document.createElement("script");
					srt.src="http://10.9.163.115/products/getproductsbypage?pagesize=10&pageindex=1&callback=fn";
					document.body.appendChild(srt);
				}
				function fn(obj){
					for (var i=0;i<obj.length;i++) {
						alert(obj[i].Url);
					}
				}
			</script>
		</body>
	</html>






数据格式：

	([{"Id":0,"Name":"11jpg","Category":null,"Price":0.0,"Url":"11.jpg","Description":null,"Height":340},
	{"Id":0,"Name":"12jpg","Category":null,"Price":0.0,"Url":"12.jpg","Description":null,"Height":380},
	
	{"Id":0,"Name":"13jpg","Category":null,"Price":0.0,"Url":"13.jpg","Description":null,"Height":200},
	
	{"Id":0,"Name":"14jpg","Category":null,"Price":0.0,"Url":"14.jpg","Description":null,"Height":150},
	
	{"Id":0,"Name":"15jpg","Category":null,"Price":0.0,"Url":"15.jpg","Description":null,"Height":450},
	
	{"Id":0,"Name":"16jpg","Category":null,"Price":0.0,"Url":"16.jpg","Description":null,"Height":300},
	
	{"Id":0,"Name":"17jpg","Category":null,"Price":0.0,"Url":"17.jpg","Description":null,"Height":350},
	
	{"Id":0,"Name":"18jpg","Category":null,"Price":0.0,"Url":"18.jpg","Description":null,"Height":250},
	{"Id":0,"Name":"19jpg","Category":null,"Price":0.0,"Url":"19.jpg","Description":null,"Height":400},
	
	{"Id":0,"Name":"20jpg","Category":null,"Price":0.0,"Url":"20.jpg","Description":null,"Height":200}])


callback=fn相当于回调函数：
它会自动把数据格式转换为：

	fn3([{"Id":0,"Name":"11jpg","Category":null,"Price":0.0,"Url":"11.jpg","Description":null,"Height":340},
	{"Id":0,"Name":"12jpg","Category":null,"Price":0.0,"Url":"12.jpg","Description":null,"Height":380},
	
	{"Id":0,"Name":"13jpg","Category":null,"Price":0.0,"Url":"13.jpg","Description":null,"Height":200},
	
	{"Id":0,"Name":"14jpg","Category":null,"Price":0.0,"Url":"14.jpg","Description":null,"Height":150},
	
	{"Id":0,"Name":"15jpg","Category":null,"Price":0.0,"Url":"15.jpg","Description":null,"Height":450},
	
	{"Id":0,"Name":"16jpg","Category":null,"Price":0.0,"Url":"16.jpg","Description":null,"Height":300},
	
	{"Id":0,"Name":"17jpg","Category":null,"Price":0.0,"Url":"17.jpg","Description":null,"Height":350},
	
	{"Id":0,"Name":"18jpg","Category":null,"Price":0.0,"Url":"18.jpg","Description":null,"Height":250},
	
	{"Id":0,"Name":"19jpg","Category":null,"Price":0.0,"Url":"19.jpg","Description":null,"Height":400},
	
	{"Id":0,"Name":"20jpg","Category":null,"Price":0.0,"Url":"20.jpg","Description":null,"Height":200}])


这样返回的是对象，可以直接使用，