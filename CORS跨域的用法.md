##获取数据的参考代码##


	<!DOCTYPE html>
	<html>
		<head>
			<meta charset="UTF-8">
			<title></title>
			<style type="text/css">
				input{
					display: block;
				}
			</style>
		</head>
		<body>
			<input type="text" id="txt" placeholder="请输入要获取的图片的个数" />
			<input type="button"  id="btn" value="点击获取图片" />
			<script type="text/javascript">
			//dc9e482ec5e795652bff4b23fc341af9
				var btn=document.getElementById("btn");
				var txt=document.getElementById("txt");
				btn.onclick=function(){
					var vtxt=Number(txt.value);
					var xhr;
					if (window.XMLHttpRequest) {
						xhr=new XMLHttpRequest();
					}else{
						xhr=new ActiveXObject("Microsoft.XMLTHHP");
					}
					xhr.onreadystatechange=function(){
						if (xhr.readyState==4) {
							if (xhr.status==200) {
								for (var i=0;i<vtxt;i++) {
									var picInfor=xhr.responseText;
									var objPic=eval("("+picInfor+")");
									console.log(objPic);
									var oImg=document.createElement("img");
									oImg.src=objPic.newslist[i].picUrl;
									oImg.style.width="400px";
									oImg.style.float="left";
									document.body.appendChild(oImg);
								}
							}else{
								
							}
						}
						
					}
					xhr.open("GET","http://apis.baidu.com/txapi/mvtp/meinv?num="+vtxt,true);
					xhr.setRequestHeader("apikey","dc9e482ec5e795652bff4b23fc341af9");
					xhr.send();
				}
			</script>
		</body>
	</html>


xhr.setRequestHeader("apikey","dc9e482ec5e795652bff4b23fc341af9");

apikey是从网上获取的码





































































