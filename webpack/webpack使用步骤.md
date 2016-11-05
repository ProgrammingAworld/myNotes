<meta charset="UTF-8">
 
2016/10/17 20:11:39 

 **具体的使用步骤：**
  
 * 新建一个项目的名称
 * 进入文件夹下，执行npm init 对项目初始化
 * 
  1. cnpm i webpack -g全局安装
  
  2. cnpm i webpack -D本地安装
  安装完成后可以通过 webpack 待编译的js名称 编译后的js名称(例如：webpack entry.js  bundle.js)
 *  
  1. cnpm i css-loader -D
  2. cnpm i style-loader -D 
  3. 通过1和2实现css的样式的加载
  4. 配置webpack的配置文件
  **具体代码：**
		
			module.exports={
			   //webpack的入口文件
			   entry:'./entry.js',
			   //输出的文件夹目录
			   output:{
			      path:__dirname,
			      filename:'bundle.js'
			   },
			   //网页上的scurces下显示的webpack://下的内容
			   devtool:'source-map',
			   //输出文件夹的目录
			   module:{
			      loaders:[
			         {
			            //选择要编译的文件类型
			            test:/\.css$/,
			            //对css类文件的编译格式
			            loader:'style!css'
			         }
			      ]
			   }
			}
  可参照网址：[http://www.jianshu.com/p/42e11515c10f](http://www.jianshu.com/p/42e11515c10f "webpack配置网址")
  5. cnpm i webpack --devtool source-map -D打开文件树
  
  6. cnpm i webpack-dev-server -g全局安装(webpack的服务)
  
  7. cnpm i webpack-dev-server -D本地安装
  
  8. webpack-dev-server --inline --hot -D(监听，可以写到package.json中的build中)
  
  9. cnpm i babel-loader babel-preset-es2015 babel-core babel-preset-react -D
  10. 全部安装完成之后通过 webpack-dev-server --inline --hot启动服务
