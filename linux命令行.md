##linux命令行##
	Cli说明：
	说明command line是什么，演示windows powershell, git bash, 终端，ps代表powershell推广费 ·  
	
	pwd:
	> pwd
	> 
	$ pwd
	
	ls:
	> ls
	> 
	> ls documents
	> 
	> clear
	> 
	$ ls -l
	
	$ ls -la 使用长格式，会看到.开头的文件，显示隐藏文件夹
	
	$ ls -lh pictures 文件大小格式化显示
	
	$ ls -lt 按照时间正序
	
	$ ls -ltr 按照时间反序
	
	mkdir:
	$ mkdir project
	
	$ mkdir -p project/app/css 父目录不存在也可创建，powershell不支持这个参数
	
	$ ls -R project 用递归的方式显示目录结构
	
	$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/
	Homebrew/install/master/install)"
	
	$ brew install tree
	
	$ tree project
	
	> mkdir project/app/css 可以直接创建
	
	cd:
	
	$ ls
	
	$ cd desktop
	
	$ pwd
	
	$ cd ../
	
	$ pwd
	
	$ ls .
	
	$ cd downloads
	
	$ cd ~
	
	$ pwd
	
	> cd desktop
	> 
	> pwd
	> 
	> cd ../
	> 
	> 
	> cd downloads
	> cd ~
	
	//复制文件
	
	cp:
	$ touch README.md//创建readme.md文件
	
	$ cp README.md project //把reademe复制到project下
	
	$ ls
	
	$ ls project
	
	$ cp -vR project project_bak 拥有者和修改日期会发生变化
	
	$ sudo chown -R root project
	
	$ ls -l project
	
	$ sudo cp -pR project project_bak_01
	
	
	创建文件夹 mkdir
	
	创建文件touch


##node##
	全局安装package:
	$ npm install forever --global (-g)
	$ forever
	$ npm uninstall forever --global
	$ forever
	
	本地安装package:
	$ cd ~/desktop
	$ mkdir gp-project
	$ cd gp-project
	$ npm install underscore
	$ tree
	$ npm list (ls)
	
	安装指定版本的包：
	$ pwd
	$ npm list
	$ npm info underscore
	$ npm install underscore@1.8.0
	$ npm list
	$ npm uninstall underscore
	$ npm list
	
	package.json初始化：
	$ pwd
	$ npm init
	$ ls
	$ cat package.json
	
	使用package.json:
	$ npm install underscore --save
	$ cat package.json
	$ npm install babel-cli --save-dev
	$ cat package.json
	$ rm -rf node_modules
	$ ls
	$ npm install
	$ npm uninstall underscore --save
	$ npm list |grep underscore
	$ cat package.json
	
	更新本地安装的包：
	$ npm info gulp
	$ npm install gulp@3.8.0 --save-dev
	$ npm list | grep gulp
	$ npm outdated
	$ atom ./     ~2.0.0表示patch, ^2.0.0表示minor   * 表示最新版本
	$ npm outdated
	$ npm list | grep gulp
