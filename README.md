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
        会执行如下的操作，直接enter就可以了
    6.4 最后一步，推送到github远程仓库上
        git push -u origin master
        这个就上传成功了，可以在你github上查看。

7. 注意事项
    在你使用git的时候肯定遇到了很多的问题，我列下几个我遇到的，供大家参考：
    7.1 permission denied (publickey)
        出现如上错误，原因是没有将自己电脑的SSH key添加到GitHub上。
        SSH key怎么生成呢。
            1. ssh-keygen -t rsa -C "XXXX.com" //你的一个邮箱地址就可以
            2. 找到生成Key值的目录,前往.ssh目录,这个目录下会生成三个文件:id_rsa(私钥),id_rsa.pub(公钥),known_hosts
            3. 登录GitHub，然后选择Personal Settings->SSH and GPG keys->New SSH Key
               title随便填一个,然后把第二步产生的id_rsa.pub中的文本内容复制到key的文本框中,然后点击Add SSH key.就可以在本地使用了
    7.2 fatal: Could not read from remote repository
        查看远端地址 git remote –v
        查看配置 git config --list
        git status
        git add .  // 暂存所有的更改
         git checkout . // 丢弃所有的更改
         git status // 查看文件状态
         git commit -m "本次要提交的概要信息" // 提交

         设置远端仓库地址 git remote set-url origin 你的远端地址
         git push origin master出现以下情况：

         解决办法：删除当前key，然后重新生成key，
         来自：http://blog.csdn.net/huahua78/article/details/52330792
    7.3 error: src refspec master does not match any
        引起该错误的原因是，目录中没有文件，空目录是不能提交上去的
        解决方法
            git add README
            git commit -m 'first commit'
            git push origin master
        来自：http://www.open-open.com/lib/view/open1366080269265.html
    7.4 fatal: remote origin already exists

            1、先删除远程 Git 仓库

            $ git remote rm origin
            2、再添加远程 Git 仓库

            $ git remote add origin git@github.com:AnhuiWdan/demo.git

            3、如果执行 git remote rm origin 报错的话，我们可以手动修改gitconfig文件的内容

            $ vi .git/config

            把 [remote “origin”] 那一行删掉就好了

    7.5 合并pull两个不同的项目，出现的问题如何去解决fatal: refusing to merge unrelated histories

        我在Github新建一个仓库，写了License，然后把本地一个写了很久仓库上传。

        先pull，因为两个仓库不同，发现refusing to merge unrelated histories，无法pull

        因为他们是两个不同的项目，要把两个不同的项目合并，git需要添加一句代码，在git pull，这句代码是在git 2.9.2版本发生的，最新的版本需要添加--allow-unrelated-histories

        假如我们的源是origin，分支是master，那么我们 需要这样写git pull origin master ---allow-unrelated-histories需要知道，我们的源可以是本地的路径

    7.6 Pull is not possible because you have unmerged files.

        解决：会提示你冲突的文件，你直接删除掉，再上传就可以了

