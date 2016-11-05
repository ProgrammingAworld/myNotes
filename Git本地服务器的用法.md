
Administrator@PC-20160720FHXA MINGW64 /
$ git config --global user.name "zhengzhihao"//名字随便起

Administrator@PC-20160720FHXA MINGW64 /
$ git config --global user.email "1477181593@qq.com"//邮箱随便

Administrator@PC-20160720FHXA MINGW64 /d //创建工作空间
$ mkdir GitProject

Administrator@PC-20160720FHXA MINGW64 /d //进入到工作空间
$ cd GitProject

Administrator@PC-20160720FHXA MINGW64 /d/GitProject //初始化
$ git init

Administrator@PC-20160720FHXA MINGW64 /d/GitProject (master)
$ git log --pretty=oneline //让版本在一行显示
fatal: unrecognized argument: -pretty=oneline

Administrator@PC-20160720FHXA MINGW64 /d/GitProject (master)
$ git add hello.txt  //添加到暂存区

Administrator@PC-20160720FHXA MINGW64 /d/GitProject (master)
$ git commit -m "update v2.0"  //添加到工作区
[master b846c29] update v2.0
 1 file changed, 2 insertions(+), 1 deletion(-)

Administrator@PC-20160720FHXA MINGW64 /d/GitProject (master)
$ git status  //查看当前状态

Administrator@PC-20160720FHXA MINGW64 /d/GitProject (master)
$ git log  //查看历史版本

Administrator@PC-20160720FHXA MINGW64 /d/GitProject (master)
$ git reset --hard HEAD^ //回退到上一个版本
HEAD is now at b846c29 update v2.0

Administrator@PC-20160720FHXA MINGW64 /d/GitProject (master)
$ git reflog //查看历史版本
b846c29 HEAD@{0}: reset: moving to HEAD^
bae16b2 HEAD@{1}: commit: update v3.0
b846c29 HEAD@{2}: commit: update v2.0
b5c8940 HEAD@{3}: commit (initial): 第一个hello文件v1.0

Administrator@PC-20160720FHXA MINGW64 /d/GitProject (master)
$ git reset --hard bae16b2 //回退到某个版本
HEAD is now at bae16b2 update v3.0

Administrator@PC-20160720FHXA MINGW64 /d/GitProject (master)
$ cat hello.txt  //获取内容
git test v1.0
i have changed
changed +1

Administrator@PC-20160720FHXA MINGW64 /d/GitProject (master)
$ git checkout -- hello.txt


Administrator@PC-20160720FHXA MINGW64 /d/GitProject (master)
$ git log --pretty=oneline
e46422088fa602977675f6f0a135e4351cd6b600 del hello1.txt
5705834745ffd17cf9803f22cf90ece460037c5b v1.0
e04fd527ce42cced160bc71908c43ea3ceef3f6c update v5.0
11b618236afb85d053f28234c354c0e7de122d80 update v4.0
bae16b217808a3bc785f252efb6fd1932242aaad update v3.0
b846c294a1e13354cb1eefef9df766f7f5985d70 update v2.0
b5c8940803a7f0bd88dec6f868892c127bba5162 第一个hello文件v1.0

Administrator@PC-20160720FHXA MINGW64 /d/GitProject (master)
$ git checkout -- hello1.txt
error: pathspec 'hello1.txt' did not match any file(s) known to git.

Administrator@PC-20160720FHXA MINGW64 /d/GitProject (master)
$ git rm stop
fatal: pathspec 'stop' did not match any files

Administrator@PC-20160720FHXA MINGW64 /d/GitProject (master)
$ git rm hello.txt
rm 'hello.txt'

Administrator@PC-20160720FHXA MINGW64 /d/GitProject (master)
$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        deleted:    hello.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        desktop.ini


Administrator@PC-20160720FHXA MINGW64 /d/GitProject (master)
$ git checkout -- hello.txt
error: pathspec 'hello.txt' did not match any file(s) known to git.

Administrator@PC-20160720FHXA MINGW64 /d/GitProject (master)
$ git reflog
e464220 HEAD@{0}: commit: del hello1.txt
5705834 HEAD@{1}: commit: v1.0
e04fd52 HEAD@{2}: commit: update v5.0
11b6182 HEAD@{3}: commit: update v4.0
bae16b2 HEAD@{4}: reset: moving to bae16b2
b846c29 HEAD@{5}: reset: moving to HEAD^
bae16b2 HEAD@{6}: commit: update v3.0
b846c29 HEAD@{7}: commit: update v2.0
b5c8940 HEAD@{8}: commit (initial): 第一个hello文件v1.0

Administrator@PC-20160720FHXA MINGW64 /d/GitProject (master)
$ git reset --hard e04fd52
HEAD is now at e04fd52 update v5.0

Administrator@PC-20160720FHXA MINGW64 /d/GitProject (master)
$ ^C

Administrator@PC-20160720FHXA MINGW64 /d/GitProject (master)
$
