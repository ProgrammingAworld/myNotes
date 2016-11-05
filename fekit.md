1.在工作区域创建一个项目的文件夹
	
		fekit init “要创建的文件夹的名称”

2.启动fekit服务
	
		fekit -p 8080 -n（-p可以不要）

3.在编写好后台代码之后mock数据
		
		fekit -p 8080 -n -m（mock数据的地址） 	

4.fekit mock数据的代码

		fekit server -p 8080 -n -m mock/mock.js（后面是mock中写的js）

注意：-n是忽略端口号 例如：

	<script src="/prd/scripts/demo/demo6.js"></script>
虽然写了prd但是在启动fekit的时候是用fekit server -n 他会自动忽略prd文件夹，去找scripts/demo/demo6.js