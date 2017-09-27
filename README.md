git 初步使用了解
1.GIT是什么
    一个分布式版本控制系统，和SVN类似，但远比SVN强大的一个版本控制系统 ①Git可以方便的在本地进行版本管理，如同你本地有一个版本管理服务器一样我们可以选择在合适的时间将本地版本推送到统一的版本管理服务器 ②Git每次会提取整个代码仓库的完整镜像，相当于对整个代码仓库都进行了一次备份，这样计时版本服务器除了问题，我们可以直接采用本地仓库恢复！结合本地版本管理功能，远程版本管理服务器出问题了，我们依然能继续写自己的代码，当他恢复的时候我们再提交我们的本地版本！ Git研发初期是为了更好的管理Linux内核，不过现在已经广泛应用于各种项目中！

2. 安装git
    在window系统下进入https://git-for-windows.github.io/网站，点击download，下载windows版本.
    安装的过程直接点击下一步就可以了，基本不用设置。

3. 使用git bush 来玩转git命令行
    当然Git肯定是搭配着GitHub玩才够味的，不过先来学习一些本地的指令先把！当你安装完Git后我们可以在任意位置右键，点击Git bash打开我们的Git命令行！你可以可以点击Git Init 直接在当前目录下创建一个代码仓库，又或者点击Git Gui打开Gui的图形操作页面！

4. 创建代码仓库
    4.1 先配置下我们的身份吧，这样在提交代码的时候Git就可以知道是谁提交的，命令如下：
        git config --global user.name "****"
        git congif --global user.email "183048460@qq.com"
    4.2 查看配置信息(-l 是英文字符L的小写)
        git config -l
    4.3 在我们都配置好了以后，找到你想上传到github的文件，右键选择git bush打开。
        首先我们需要git init 在文件夹中初始化。
        然后我们git add <你文件的名字>  将想要上传的文件添加到本地仓库中。如果想要上传所有的文件，可以git add .
        之后我们git commit -m "文件的注释" //这里是写你上传的原因或者改动的地方，做个记录，方便以后修改.

5. 创建自己的github账号
    浏览器输入www.github.com注册一个自己的账号。然后new repository新建一个项目，写上自己的项目名称和描述。
    创建完成后，复制这个项目的地址，在后面的操作中会用到，文件上传的地址就是这个链接。

6. 将本地仓库的文件推送到github仓库上
    6.1 在刚才的命令行中继续操作。这个是将本地的仓库关联到github上，后面的地址换成自己的。
        git remote add origin git@github.com:AnhuiWdan/demo.git
    6.2 在这里有个需要注意的地方。就是origin后面的地址。如果你是在windows的命令行中操作的。要输入https://github.com/AnhuiWdan/demo.git。在git bush里面使用上面的git@github.com:AnhuiWdan/demo.git。这里需要注意！！
    6.3 在上传到github上要先pull一下
        git pull origin master

