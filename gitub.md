#gitub连接步骤

***

#建立gitub连接
***
##第一步
	<成功一个本地公钥和远端主机的gitub连接成功 在用户的.ssh 下的id_rsa.pub复制公钥
	<git命令 ssh-keygen -t rsa -C "919536202@qq.com" 生成公钥
	<在gitub上setting里面的ssh里面建立一个链接的公钥

##第二步
	git config --global user.name 设置全局的名称
	git config --global user.email设置全局的email
	设置一个全局的名称和地址 最好用和gitub相同

##第三步
	git clone 地址  把gitub上的项目克隆到本地
	然后进入克隆好的项目里面进行后续操作 cd 项目名称
	ls -la 看到所有文件
	git status  当前的状态

##第四步
	git add .目录下的文件全部加进去
	点是添加目录下的所有文件 指定文件名称是添加指定的文件
	git commit -a -m "init" -a是代表添加或者删除所有项目 -m是注释
	git push 上传到远端
	必须先添加到本地git索引目录下然后推送 最后在提交步骤不能有错误
	
***
##建立分支
***
	
##第一步
	git checkout 切换目录也可以从远端分支上拉取下来
	git checkout -b 项目名（格式可以是项目名-时间-今天做的事情）；在当前分支的基础上复制一个分支

##第二步
	git branch 查看分支 * 当然分支
	git checkout 已有分支名则是打开这个分支假如建立了分支则不用切换到建立的分支上

##第三步
	git merge master 和主分master合并 merage后边跟需要合并的分支合并到当前分支上
	
##第四步
	git push --set-upstream origin fekit(项目名称）把新建的分支提交到远端
	也可以直接git push 根据下边提示的命令来执行

***

##额外用到的命令

	Already up-to-data远端没有分支修改 这是个提示
	git config --global push.default simple关闭描述信息
	git config --global alias.st status 把常用的命令设置成自己需要的简写alias后边跟自己要设置的简写命令名  后边跟命令名称
	git log 查看提交的历史版本信息
	git branch -a 查看所有分支
***

###比较全的学习网站
	阮一峰博客http://www.ruanyifeng.com/blog/2014/06/git_remote.html

	廖雪峰博客http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/