##canvas实现颜色渐变##
>算法：用初始的颜色的值+i/(画布的长度*画布的宽度)*(终点颜色值-初始的颜色值)


     <script>
			window.onload=function  () {
				var canvas=document.getElementById("canvas");
				var cobj=canvas.getContext("2d");

              // r  g    b
              //128 95  254 渐变的初始颜色
			  //14  135  10  渐变的终点颜色
			   var imgData=cobj.createImageData(100,100);
			 
			   cobj.putImageData(Gradient(imgData,[255,0,0,255],[0,255,0,255]),0,0);
			}
  
			function Gradient (imgData,colorArr1,colorArr2) {
				for (var i=0; i<imgData.width*imgData.height; i++) {
			     imgData.data[i*4+0]=colorArr1[0]+(i/(imgData.width*imgData.height))*(colorArr2[0]-colorArr1[0]);
				 imgData.data[i*4+1]=colorArr1[1]+(i/(imgData.width*imgData.height))*(colorArr2[1]-colorArr1[1]);
				 imgData.data[i*4+2]=colorArr1[2]+(i/(imgData.width*imgData.height))*(colorArr2[2]-colorArr1[2]);
				 imgData.data[i*4+3]=colorArr1[3]+(i/(imgData.width*imgData.height))*(colorArr2[3]-colorArr1[3]);
			   }
			   return imgData;
			}
		</script>
	</head>
	<body>
		<canvas id="canvas" width=500 height=500>
		</canvas>
	</body>



##canvas实现图片颜色反向##
>具体算法：255-用原来的颜色值


     <script type="text/javascript">
			window.onload=function(){
				var img=document.getElementById("img");
				var canvas=document.getElementById("canvas");
				var cobj=canvas.getContext('2d');
				cobj.drawImage(img,0,0,200,200);
				var imagedata=cobj.getImageData(0,0,200,200);
				
				//255 		255 	 255
				//128 		95		 254 
				//255-128   255-135  255-10
		        for (var i=0;i<imagedata.width*imagedata.height;i++) {
		        	imagedata.data[i*4+0]=255-imagedata.data[i*4+0];
		        	imagedata.data[i*4+1]=255-imagedata.data[i*4+1];
		        	imagedata.data[i*4+2]=255-imagedata.data[i*4+2];
		        	imagedata.data[i*4+3]=255;
		        }
		
				cobj.putImageData(imagedata,200,200);
			}
		</script>
	</head>
	<body>
		<canvas id="canvas" width="500" height="500" style="background: #C5C5C5;"></canvas>
		<img src="../js课堂学习/image/000.jpg" id="img" hidden="hidden"/>