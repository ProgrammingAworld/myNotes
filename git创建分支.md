##git 

git config --global user.name
git config --global user.name 名字
git config --global user.email
git config --global user.name 邮箱


##克隆

git clone 加上在github上创建的文件夹的地址
例如：git clone git@github.com:ProgrammingAworld/fekit.git

设置快捷方式
git config --golbal alias.st status设置status设置成st

.gitignore 设置忽略的文件夹

##创建分支
   
git branch 查看分支

git co -b fekit-20160913-bugfix创建分支 -b后面是分支名

git pull 从远端拉取代码

git merge master 和远端代码合并

git co fekit-20160913-bugfix 切换分支

 git co -b fekitdemo-20160914 创建分支并且切换到创建的分支

git br -a 查看所有的分支

git co fekitdemo-20160914 拉取远端的分支到本地

git co master 切换到master

git merge 分支名  //更新master

git push  //更新到远端

git co 分支名

git merge master  //更新当前分支



/*

	- 先在本地创建一个分支
	- 从远端拉取master的数据
	- 在分支下修改
	- 提交到远端
	- 切换到master
	- pull一下
	- 和master merge
	- 之后再push
	- 

*/