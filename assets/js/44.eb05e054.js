(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{151:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-jenkins-是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-jenkins-是什么"}},[t._v("#")]),t._v(" 1.JENKINS 是什么❔")]),t._v(" "),a("p",[t._v("Jenkins是一个自包含的、开源的自动化服务器，可以用于自动化与构建、测试、交付或部署软件相关的各种任务。")]),t._v(" "),a("p",[t._v("Jenkins可以通过本机系统包、Docker安装，甚至可以由任何安装了Java运行时环境(JRE)的机器独立运行")]),t._v(" "),a("h2",{attrs:{id:"_2-centos-安装jenkins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-centos-安装jenkins"}},[t._v("#")]),t._v(" 2.centos 安装jenkins")]),t._v(" "),a("p",[t._v("三种方式")]),t._v(" "),a("ul",[a("li",[t._v("通过 "),a("strong",[t._v("Docker")]),t._v(" 安装")]),t._v(" "),a("li",[t._v("通过 "),a("strong",[t._v("Jenkins.war")]),t._v(" 在 "),a("strong",[t._v("Tomcat")]),t._v(" 中运行")]),t._v(" "),a("li",[t._v("通过 "),a("strong",[t._v("Yum")]),t._v(" 的方式安装")])]),t._v(" "),a("h3",{attrs:{id:"_2-1-通过docker-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-通过docker-安装"}},[t._v("#")]),t._v(" 2.1 通过docker 安装")]),t._v(" "),a("ul",[a("li",[t._v("创建jenkins 文件,并修改文件权限")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p /usr/local/atom.hu/jenkins\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v(" -R "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v(":1000 /usr/loca/atom.hu/jenkins\n")])])]),a("ul",[a("li",[t._v("拉取镜像")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("docker pull jenkins\n")])])]),a("ul",[a("li",[t._v("启动镜像")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("docker run -p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v(":8080 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50000")]),t._v(":50000 --name jenkins --privileged"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true -v /usr/local/atom.hu/jenkins/:/var/jenkins_home -d jenkins\n")])])]),a("ul",[a("li",[a("p",[t._v("稍作等待\n"),a("img",{attrs:{src:"https://gitee.com/xiaoxiunique/picgo-image/raw/master/20200115112727.png",alt:""}})])]),t._v(" "),a("li",[a("p",[t._v("进入目录查看密码")])])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost secrets"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cat initialAdminPassword ")]),t._v("\n9ca7368042fe45be8b693ab43e7797d1\n")])])]),a("h3",{attrs:{id:"_2-2-通过jenkins-war-的方式安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-通过jenkins-war-的方式安装"}},[t._v("#")]),t._v(" 2.2 通过jenkins.war 的方式安装")]),t._v(" "),a("p",[t._v("在"),a("a",{attrs:{href:"https://jenkins.io/download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("jenkins官网"),a("OutboundLink")],1),t._v("中下载war包")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/xiaoxiunique/picgo-image/raw/master/20200115112835.png",alt:""}})]),t._v(" "),a("p",[t._v("可以直接右键复制软件地址, 使用 wget 命令进行下载")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" http://mirrors.jenkins.io/war-stable/latest/jenkins.war\n")])])]),a("p",[t._v("下载完成后 将项目放入"),a("code",[t._v("tomcat")]),t._v("中"),a("code",[t._v("webapps")]),t._v(" 文件夹下")]),t._v(" "),a("h3",{attrs:{id:"_2-3-通过yum的方式安装jenkins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-通过yum的方式安装jenkins"}},[t._v("#")]),t._v(" 2.3 通过yum的方式安装jenkins")]),t._v(" "),a("p",[t._v("获取软件安装源")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo\n")])])]),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rpm")]),t._v(" --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key\n")])])]),a("p",[t._v("安装jenkins")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("shellyum -y "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" jenkins\n")])])]),a("p",[t._v("安装完成后 启动jenkins")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("systemctl start jenkins\n")])])]),a("blockquote",[a("p",[t._v("通过对三种方式的实验 每种方式都进行了探索, 最后选择通过yum的方式进行安装, 也是最麻烦的安装方式, 但是相对可靠, docker 的安装方式虽然简便, 但是会遇到比较多软件环境问题.  使用jenkins.war的方式, 也相对比较简便, 但是也是遇到比较多的问题, 最后还是放弃了, 采用了最原始也是最麻烦的方式")])]),t._v(" "),a("h2",{attrs:{id:"_3-0-前提条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-0-前提条件"}},[t._v("#")]),t._v(" 3.0 前提条件")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("为了保证后面的配置能够顺利进行, 需要一些前期的准备工作, 需要修改一些配置")])]),t._v(" "),a("p",[a("strong",[t._v("修改jenkins的配置文件")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('# 打开jenkins的配置文件\nvim /etc/sysconfig/jenkins\n# 修改 $JENKINS_USER 的值为root\n$JENKINS_USER="root"\n')])])]),a("p",[a("img",{attrs:{src:"https://gitee.com/xiaoxiunique/picgo-image/raw/master/20200115112907.png",alt:""}})]),t._v(" "),a("p",[a("strong",[t._v("修改Jenkins相关文件夹用户权限")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("chown -R root:root /var/lib/jenkins\nchown -R root:root /var/cache/jenkins\nchown -R root:root /var/log/jenkins\n")])])]),a("p",[a("strong",[t._v("重启Jenkins服务并检查运行Jenkins的用户是否已经切换为root")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 重启Jenkins（若是其他方式安装的jenkins则重启方式略不同）\nsystemctl restart jenkins\n# 查看Jenkins进程所属用户\nps -ef | grep jenkins\n# 若显示为root用户，则表示修改完成\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("到此为止, 前期准备工作就算完按成了, 可以开始进行jenkins自动化部署了")])]),t._v(" "),a("h2",{attrs:{id:"_4-0-插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-0-插件"}},[t._v("#")]),t._v(" 4.0 插件")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("在jenkins中, 新手推荐直接安装推荐插件, 后设置管理员密码后, 进入主界面, 切记不要忘记密码, 虽然也有解决办法, 但是还是记住密码的好")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/xiaoxiunique/picgo-image/raw/master/20200115113002.png",alt:""}})]),t._v(" "),a("h4",{attrs:{id:"安装必要的jenkins插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装必要的jenkins插件"}},[t._v("#")]),t._v(" 安装必要的jenkins插件")]),t._v(" "),a("p",[a("strong",[t._v("Git Parameter Plug-In")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/xiaoxiunique/picgo-image/raw/master/20200115111335.png",alt:""}})]),t._v(" "),a("p",[t._v("在后续的自动化部署中, 我们需要通过参数, 设置不同的分支, 对不同的分支进行打包, 需要这个插件的支持")]),t._v(" "),a("p",[a("strong",[t._v("Maven Integration plugin")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/xiaoxiunique/picgo-image/raw/master/20200115112122.png",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/xiaoxiunique/picgo-image/raw/master/20200115113049.png",alt:""}})]),t._v(" "),a("p",[t._v("在部署spring boot 项目的时候, 我们需要创建maven项目, 在安装了这个插件之后, 在创建项目的时候, 如果没有这个插件, 在创建项目的时候就没有 "),a("code",[t._v("构建一个maven项目")]),t._v("的选项")]),t._v(" "),a("p",[a("strong",[t._v("Publish Over SSH")]),t._v(" "),a("img",{attrs:{src:"https://gitee.com/xiaoxiunique/picgo-image/raw/master/20200115113030.png",alt:""}}),t._v("\n有的时候我们在A机器上搭建的jenkins 但是却可能是在B机器上部署项目, 需要"),a("code",[t._v("Publish Over SSH")]),t._v("的支持")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("这里注意, 在填主机Ip的时候, 如果两台机器同属一个运行商的话, 尽量填写内网IP比较好, 这个很重要")])]),t._v(" "),a("h2",{attrs:{id:"_5-0-安装环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-0-安装环境"}},[t._v("#")]),t._v(" 5.0 安装环境")]),t._v(" "),a("ol",[a("li",[t._v("安装 openjdk 1.8\njenkins 的运行需要openjdk依赖")])]),t._v(" "),a("p",[a("strong",[t._v("官方说法")])]),t._v(" "),a("blockquote",[a("p",[t._v("You will need to explicitly install a Java runtime environment, because Oracle's Java RPMs are incorrect and fail to register as providing a java dependency. Thus, adding an explicit dependency requirement on Java would force installation of the OpenJDK JVM.")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("yum install java-1.8.0-openjdk\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("安装 git")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("yum install git\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("安装 node, 后续会部署前端项目需要")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 下载安装包\nwget https://nodejs.org/dist/v10.15.3/node-v10.15.3-linux-x64.tar.xz\n\n# 解压\ntar -xvf node-v10.15.3-linux-x64.tar.xz -C ./\n\n# 将node命令和npm设置软连接到 /usr/bin 中\nln -s ./node /usr/bin/node\nln -s ./npm /usr/bin/npm\n\n# 然后在其他的地方都可以使用这两个命令了\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("安装"),a("code",[t._v("maven")]),t._v(", 并在"),a("code",[t._v("/etc/profile")]),t._v(" 中配置")])]),t._v(" "),a("h2",{attrs:{id:"_6-0-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-0-配置"}},[t._v("#")]),t._v(" 6.0 配置")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/xiaoxiunique/picgo-image/raw/master/20200115112426.png",alt:""}})]),t._v(" "),a("p",[t._v("在系统配置中,配置要推送到远程服务器的密码和地址, 填写"),a("strong",[t._v("内网")]),t._v("地址")]),t._v(" "),a("p",[t._v("在全局配置工具中, 配置 "),a("code",[t._v("jdk")]),t._v(", "),a("code",[t._v("maven")]),t._v(", "),a("code",[t._v("git")]),t._v(", "),a("code",[t._v("node")]),t._v(" 的安装路径")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/xiaoxiunique/picgo-image/raw/master/20200115112618.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"_7-0-部署-前端vue项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-0-部署-前端vue项目"}},[t._v("#")]),t._v(" 7.0 部署 前端VUE项目")]),t._v(" "),a("blockquote",[a("p",[t._v("部署场景, 在A机器进行webpack打包, 将打包后的文件,发送到B机器上指定的文件夹, 通过nginx代理实现访问")])]),t._v(" "),a("ol",[a("li",[t._v("创建一个自由风格的软件项目")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/xiaoxiunique/picgo-image/raw/master/20200115113119.png",alt:""}})]),t._v(" "),a("p",[t._v("2.填写项目描述")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/xiaoxiunique/picgo-image/raw/master/20200115113151.png",alt:""}})]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("选择参数化构建过程, 后续可以选择不同分支进行打包")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/xiaoxiunique/picgo-image/raw/master/20200115113138.png",alt:""}})]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("选择不同的版本控制工具 svn 和 git都可以, 这里我们使用git")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/xiaoxiunique/picgo-image/raw/master/20200115113203.png",alt:""}}),t._v("\n需要添加 自己的用户和密码, 不然会出现下面的情况\n"),a("img",{attrs:{src:"https://gitee.com/xiaoxiunique/picgo-image/raw/master/20200115113215.png",alt:""}})]),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[t._v("在构建环境中选择 "),a("code",[t._v("Send files or execute commands over SSH after the build runs")]),t._v(" "),a("img",{attrs:{src:"https://gitee.com/xiaoxiunique/picgo-image/raw/master/20200115113235.png",alt:""}})])]),t._v(" "),a("blockquote",[a("p",[t._v("这里的配置为, 在本地构建完成之后, 我们需要将哪些文件发送到目标主机上, 发送到目标主机上, 并执行什么命令")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("cd /home/project/web/test  \ntar -zxvf dist.tar.gz\nrm -rf dist.tar.gz\n")])])]),a("blockquote",[a("p",[a("code",[t._v("/home/project/web/test")]),t._v("  为目标主机nginx 配置过的目录")])]),t._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[t._v("在构建中选中 "),a("code",[t._v("Execute Shell")]),t._v(" "),a("img",{attrs:{src:"https://gitee.com/xiaoxiunique/picgo-image/raw/master/20200115113314.png",alt:""}}),t._v("\n并配置构建时执行的命令")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("cnpm i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf dist "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" dist"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -zcvf dist.tar.gz *\n")])])]),a("p",[t._v("点击保存, 这样就完成了 前端项目的搭建了")]),t._v(" "),a("h2",{attrs:{id:"_8-0-部署-spring-boot-项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-0-部署-spring-boot-项目"}},[t._v("#")]),t._v(" 8.0 部署 spring boot 项目")]),t._v(" "),a("ol",[a("li",[t._v("新建任务, 创建maven 项目")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/xiaoxiunique/picgo-image/raw/master/20200115113327.png",alt:""}})]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("填写项目描述, 配置参数构建")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/xiaoxiunique/picgo-image/raw/master/20200115113334.png",alt:""}})]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("配置源码管理")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/xiaoxiunique/picgo-image/raw/master/20200115113342.png",alt:""}})]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("配置构建环境 ssh server")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/xiaoxiunique/picgo-image/raw/master/20200115113352.png",alt:""}})]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("BUILD_ID")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("DONTKILLME\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" /etc/profile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /home/project/java/test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("pid")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" -ef "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jar 名称'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" -v "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{print "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$2")]),t._v("}'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" -n "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$pid")]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("kill")]),t._v(" -9 "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$pid")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n\njava -jar lk-truck-mendery-webfront-1.0.0-SNAPSHOT.jar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" nohup.log "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("注意点")])]),t._v(" "),a("ol",[a("li",[a("code",[t._v("shell")]),t._v(" 前需要添加 "),a("code",[t._v("BUILD_ID=DONTKILLME")]),t._v(", 不然在jenkins创建了java 进程之后,退出的时候, 会杀死之前创建过的工程")]),t._v(" "),a("li",[t._v("需要在前面添加  "),a("code",[t._v("source /etc/profile")]),t._v(", 不然可能会出现 "),a("code",[t._v("java")]),t._v(" 命令找不到的情况")])]),t._v(" "),a("blockquote",[a("p",[t._v("到此 springboot的项目便搭建完成了")])]),t._v(" "),a("h2",{attrs:{id:"_9-0-密码重置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-0-密码重置"}},[t._v("#")]),t._v(" 9.0 密码重置")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("如果设置了密码之后, 又忘记了密码应该怎么办")])]),t._v(" "),a("ol",[a("li",[t._v("进入到jenkins的配置文件中")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /var/lib/jenkins/users\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" config.xml\n")])])]),a("p",[a("img",{attrs:{src:"https://ws1.sinaimg.cn/large/0066iHyhly1g1p5gvkr8ij30nw0cndgr.jpg",alt:""}}),t._v("\n替换途中的值, 替换为")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#jbcrypt:$2a$10$DdaWzN64JgUtLdvxWIflcuQu2fgrrMSAMabF5TSrGK5nXitqK9ZMS")]),t._v("\n")])])]),a("p",[t._v("替换后,"),a("code",[t._v("重启jenkins")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("systemctl restart jenkins\n")])])]),a("p",[t._v("登录密码就变为 1111111 了")]),t._v(" "),a("h2",{attrs:{id:"_10-0-配置全局变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-0-配置全局变量"}},[t._v("#")]),t._v(" 10.0 配置全局变量")]),t._v(" "),a("p",[t._v("echo $PATH")]),t._v(" "),a("p",[t._v("系统设置 -> 全局设置-> 环境变量 添加key, value")]),t._v(" "),a("h2",{attrs:{id:"_11-0-日志打印级别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11-0-日志打印级别"}},[t._v("#")]),t._v(" 11.0 日志打印级别")]),t._v(" "),a("p",[t._v("::: tips")]),t._v(" "),a("p",[t._v("在部署Jenkins之后, 有的时候会发现服务日常异常增多, 查看之后发现是DNS解析问题, 需要做如下配置修改日志打印级别")]),t._v(" "),a("p",[t._v(":::")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("/etc/sysconfig")]),t._v("目录下新建文件 "),a("code",[t._v("jenkins.logging.properties")]),t._v("，写入一行代码"),a("code",[t._v(".level = INFO")]),t._v("。")]),t._v(" "),a("p",[t._v("编辑文件"),a("code",[t._v("jenkins")]),t._v("配置文件"),a("code",[t._v("/etc/sysconfig/jenkins")]),t._v("，加入一行代码"),a("code",[t._v('JENKINS_JAVA_OPTIONS="-Djava.util.logging.config.file=/etc/sysconfig/jenkins.logging.properties"')]),t._v("，重启"),a("code",[t._v("jenkins")]),t._v("即可。")]),t._v(" "),a("h2",{attrs:{id:"_12-0-发布失败回退版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12-0-发布失败回退版本"}},[t._v("#")]),t._v(" 12.0 发布失败回退版本")]),t._v(" "),a("p",[t._v("设置, 增加构建参数\n"),a("img",{attrs:{src:"https://gitee.com/xiaoxiunique/picgo-image/raw/master/20200115113805.png",alt:""}})]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$Status")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v("\n\tDEPLOY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${projectName}")]),t._v("\n\t    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${projectName}")]),t._v("/target/"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${projectName}")]),t._v("-1.0.0-SNAPSHOT.jar "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${projectName}")]),t._v("/target/"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${projectName}")]),t._v(".jar\n    \t"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("backup")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${WORKSPACE}")]),t._v('/back"')]),t._v("\n\t\t\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" -d "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$backup")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$backup")]),t._v(" -p\n            "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n\t\t\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${projectName}")]),t._v("/target/"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${projectName}")]),t._v(".jar back/"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${BUILD_NUMBER}")]),t._v(".jar -f\n        \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 只保存5个备份文件")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("lineCount")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" back/*jar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wc")]),t._v(" -l"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$lineCount")]),t._v("\n\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$lineCount")]),t._v('"')]),t._v(" -gt "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n\t\t  "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("firstFile")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" back/*jar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sort")]),t._v(" -n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("head")]),t._v(" -1"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n\t\t  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$firstFile")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n        \n    \t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    ROLLBACK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \t"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"STATUS '),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${STATUS}")]),t._v('"')]),t._v("\n    \t"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Version '),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${Version}")]),t._v('"')]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 定义回滚文件")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("rollbackFile")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${WORKSPACE}")]),t._v("/backup/"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${Version}")]),t._v('.jar"')]),t._v("\n\t\t\n\t\t "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 判断回滚文件是否存在")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" -f "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rollbackFile")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n\t\t  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Error: rollbackFile doesn\'t exist!"')]),t._v("\n\t\t  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 返回异常状态")]),t._v("\n\t\t  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("return")]),t._v(" -1\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n\t\t  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"copy backup file..."')]),t._v("\n\t\t  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rollbackFile")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${WORKSPACE}")]),t._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${projectName}")]),t._v("/target/"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${projectName}")]),t._v(".jar\n\t\t  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 因为 jenkins 会为回滚操作分配 builde_number, 但实际上我们没有构建项目, 此处创建软链指向恢复的节点")]),t._v("\n\t\t  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SUCCESS!"')]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n\t\t\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    *"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exit")]),t._v("\n    \t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("esac")]),t._v("\n")])])]),a("h2",{attrs:{id:"_13-0-jenkins-搭建-pipeline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13-0-jenkins-搭建-pipeline"}},[t._v("#")]),t._v(" 13.0 Jenkins 搭建 Pipeline")])])}),[],!1,null,null,null);s.default=n.exports}}]);