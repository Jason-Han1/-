# Git常用命令

## 仓库

    # 在当前目录新建一个Git代码库
    $ git init

    # 新建一个目录，将其初始化为Git代码库
    $ git init [project-name]

    # 下载一个项目和它的整个代码历史
    $ git clone [url]

## 配置

    # 显示当前的Git配置
    $ git config --list

    # 编辑Git配置文件
    $ git config -e [--global]

    # 设置提交代码时的用户信息
    $ git config [--global] user.name "[name]"
    $ git config [--global] user.email "[email address]"

## 增加删除文件

    # 添加指定文件到暂存区
    $ git add [file1] [file2] ...

    # 添加指定目录到暂存区，包括子目录
    $ git add [dir]

    # 添加当前目录的所有文件到暂存区
    $ git add .

    # 添加每个变化前，都会要求确认
    # 对于同一个文件的多处变化，可以实现分次提交
    $ git add -p

    # 删除工作区文件，并且将这次删除放入暂存区
    $ git rm [file1] [file2] ...

    # 停止追踪指定文件，但该文件会保留在工作区
    $ git rm --cached [file]

    # 改名文件，并且将这个改名放入暂存区
    $ git mv [file-original] [file-renamed]

## 代码提交

    # 提交暂存区到仓库区
    $ git commit -m [message]

    # 提交暂存区的指定文件到仓库区
    $ git commit [file1] [file2] ... -m [message]

    # 提交工作区自上次commit之后的变化，直接到仓库区
    $ git commit -a

    # 提交时显示所有diff信息
    $ git commit -v

    # 使用一次新的commit，替代上一次提交
    # 如果代码没有任何新变化，则用来改写上一次commit的提交信息
    $ git commit --amend -m [message]

    # 重做上一次commit，并包括指定文件的新变化
    $ git commit --amend [file1] [file2] ...

## 分支

    # 列出所有本地分支
    $ git branch

    # 列出所有远程分支
    $ git branch -r

    # 列出所有本地分支和远程分支
    $ git branch -a

    # 新建一个分支，但依然停留在当前分支
    $ git branch [branch-name]

    # 新建一个分支，并切换到该分支
    $ git checkout -b [branch]

    # 新建一个分支，指向指定commit
    $ git branch [branch] [commit]

    # 新建一个分支，与指定的远程分支建立追踪关系
    $ git branch --track [branch] [remote-branch]

    # 切换到指定分支，并更新工作区
    $ git checkout [branch-name]

    # 切换到上一个分支
    $ git checkout -

    # 建立追踪关系，在现有分支与指定的远程分支之间
    $ git branch --set-upstream [branch] [remote-branch]

    # 合并指定分支到当前分支
    $ git merge [branch]

    # 选择一个commit，合并进当前分支
    $ git cherry-pick [commit]

    # 删除分支
    $ git branch -d [branch-name]

    # 删除远程分支
    $ git push origin --delete [branch-name]
    $ git branch -dr [remote/branch]

## 标签

    # 列出所有tag
    $ git tag

    # 新建一个tag在当前commit
    $ git tag [tag]

    # 新建一个tag在指定commit
    $ git tag [tag] [commit]

    # 删除本地tag
    $ git tag -d [tag]

    # 删除远程tag
    $ git push origin :refs/tags/[tagName]

    # 查看tag信息
    $ git show [tag]

    # 提交指定tag
    $ git push [remote] [tag]

    # 提交所有tag
    $ git push [remote] --tags

    # 新建一个分支，指向某个tag
    $ git checkout -b [branch] [tag]

## 查看信息

    # 显示有变更的文件
    $ git status

    # 显示当前分支的版本历史
    $ git log

    # 显示commit历史，以及每次commit发生变更的文件
    $ git log --stat

    # 搜索提交历史，根据关键词
    $ git log -S [keyword]

    # 显示某个commit之后的所有变动，每个commit占据一行
    $ git log [tag] HEAD --pretty=format:%s

    # 显示某个commit之后的所有变动，其"提交说明"必须符合搜索条件
    $ git log [tag] HEAD --grep feature

    # 显示某个文件的版本历史，包括文件改名
    $ git log --follow [file]
    $ git whatchanged [file]

    # 显示指定文件相关的每一次diff
    $ git log -p [file]

    # 显示过去5次提交
    $ git log -5 --pretty --oneline

    # 显示所有提交过的用户，按提交次数排序
    $ git shortlog -sn

    # 显示指定文件是什么人在什么时间修改过
    $ git blame [file]

    # 显示暂存区和工作区的差异
    $ git diff

    # 显示暂存区和上一个commit的差异
    $ git diff --cached [file]

    # 显示工作区与当前分支最新commit之间的差异
    $ git diff HEAD

    # 显示两次提交之间的差异
    $ git diff [first-branch]...[second-branch]

    # 显示今天你写了多少行代码
    $ git diff --shortstat "@{0 day ago}"

    # 显示某次提交的元数据和内容变化
    $ git show [commit]

    # 显示某次提交发生变化的文件
    $ git show --name-only [commit]

    # 显示某次提交时，某个文件的内容
    $ git show [commit]:[filename]

    # 显示当前分支的最近几次提交
    $ git reflog

## 远程同步

    # 下载远程仓库的所有变动
    $ git fetch [remote]

    # 显示所有远程仓库
    $ git remote -v

    # 显示某个远程仓库的信息
    $ git remote show [remote]

    # 增加一个新的远程仓库，并命名
    $ git remote add [shortname] [url]

    # 取回远程仓库的变化，并与本地分支合并
    $ git pull [remote] [branch]

    # 上传本地指定分支到远程仓库
    $ git push [remote] [branch]

    # 强行推送当前分支到远程仓库，即使有冲突
    $ git push [remote] --force

    # 推送所有分支到远程仓库
    $ git push [remote] --all

## 撤销

    # 恢复暂存区的指定文件到工作区
    $ git checkout [file]

    # 恢复某个commit的指定文件到暂存区和工作区
    $ git checkout [commit] [file]

    # 恢复暂存区的所有文件到工作区
    $ git checkout .

    # 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变
    $ git reset [file]

    # 重置暂存区与工作区，与上一次commit保持一致
    $ git reset --hard

    # 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变
    $ git reset [commit]

    # 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致
    $ git reset --hard [commit]

    # 重置当前HEAD为指定commit，但保持暂存区和工作区不变
    $ git reset --keep [commit]

    # 新建一个commit，用来撤销指定commit
    # 后者的所有变化都将被前者抵消，并且应用到当前分支
    $ git revert [commit]

    暂时将未提交的变化移除，稍后再移入
    $ git stash
    $ git stash pop

## 其他

    # 生成一个可供发布的压缩包
    $ git archive


# 正则总结

## 常用正则

    # 字符串中取出数字
    $ /\d+(.\d+)?/g

    //用户名正则，4到16位（字母，数字，下划线，减号）
    var uPattern = /^[a-zA-Z0-9_-]{4,16}$/;
    //输出 true
    console.log(uPattern.test("caibaojian"));

    //密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
    var pPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
    //输出 true
    console.log("=="+pPattern.test("caibaojian#"));

    //正整数正则
    var posPattern = /^\d+$/;
    //负整数正则
    var negPattern = /^-\d+$/;
    //整数正则
    var intPattern = /^-?\d+$/;
    //输出 true
    console.log(posPattern.test("42"));
    //输出 true
    console.log(negPattern.test("-42"));
    //输出 true
    console.log(intPattern.test("-42"));

    //正数正则
    var posPattern = /^\d*\.?\d+$/;
    //负数正则
    var negPattern = /^-\d*\.?\d+$/;
    //数字正则
    var numPattern = /^-?\d*\.?\d+$/;
    console.log(posPattern.test("42.2"));
    console.log(negPattern.test("-42.2"));
    console.log(numPattern.test("-42.2"));

    //Email正则
    var ePattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    //输出 true
    console.log(ePattern.test("99154507@qq.com"));

    //手机号正则
    var mPattern = /^1[34578]\d{9}$/;
    console.log(mPattern.test("15507621888"));

    //身份证号（18位）正则
    var cP = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
    //输出 true
    console.log(cP.test("11010519880605371X"));

    //URL正则
    var urlP= /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    //输出 true
    console.log(urlP.test("http://caibaojian.com"));

    //ipv4地址正则
    var ipP = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    //输出 true
    console.log(ipP.test("115.28.47.26"));

    //RGB Hex颜色正则
    var cPattern = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
    //输出 true
    console.log(cPattern.test("#b8b8b8"));

    //日期正则，简单判定,未做月份及日期的判定
    var dP1 = /^\d{4}(\-)\d{1,2}\1\d{1,2}$/;
    //输出 true
    console.log(dP1.test("2017-05-11"));
    //输出 true
    console.log(dP1.test("2017-15-11"));
    //日期正则，复杂判定
    var dP2 = /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/;
    //输出 true
    console.log(dP2.test("2017-02-11"));
    //输出 false
    console.log(dP2.test("2017-15-11"));
    //输出 false
    console.log(dP2.test("2017-02-29"));

    //QQ号正则，5至11位
    var qqPattern = /^[1-9][0-9]{4,10}$/;
    //输出 true
    console.log(qqPattern.test("65974040"));

    //微信号正则，6至20位，以字母开头，字母，数字，减号，下划线
    var wxPattern = /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/;
    //输出 true
    console.log(wxPattern.test("caibaojian_com"));

    //车牌号正则
    var cPattern = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
    //输出 true
    console.log(cPattern.test("浙AKP053"));

    //包含中文正则
    var cnPattern = /[\u4E00-\u9FA5]/;
    //输出 true
    console.log(cnPattern.test("哈哈哈"));

## 校验数字的正则

    数字：^[0-9]*$
    n位的数字：^\d{n}$
    至少n位的数字：^\d{n,}$
    m-n位的数字：^\d{m,n}$
    零和非零开头的数字：^(0|[1-9][0-9]*)$
    非零开头的最多带两位小数的数字：^([1-9][0-9]*)+(.[0-9]{1,2})?$
    带1-2位小数的正数或负数：^(\-)?\d+(\.\d{1,2})?$
    正数、负数、和小数：^(\-|\+)?\d+(\.\d+)?$
    有两位小数的正实数：^[0-9]+(.[0-9]{2})?$
    有1~3位小数的正实数：^[0-9]+(.[0-9]{1,3})?$
    非零的正整数：^[1-9]\d*$ 或 ^([1-9][0-9]*){1,3}$ 或 ^\+?[1-9][0-9]*$
    非零的负整数：^\-[1-9][]0-9"*$ 或 ^-[1-9]\d*$
    非负整数：^\d+$ 或 ^[1-9]\d*|0$
    非正整数：^-[1-9]\d*|0$ 或 ^((-\d+)|(0+))$
    非负浮点数：^\d+(\.\d+)?$ 或 ^[1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0$
    非正浮点数：^((-\d+(\.\d+)?)|(0+(\.0+)?))$ 或  ^(-([1-9]\d*\.\d*|0\.\d*[1-9]\d*))|0?\.0+|0$
    正浮点数：^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$ 或  ^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$
    负浮点数：^-([1-9]\d*\.\d*|0\.\d*[1-9]\d*)$ 或  ^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$
    浮点数：^(-?\d+)(\.\d+)?$ 或 ^-?([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0)$

## 字符校验正则

    汉字：^[\u4e00-\u9fa5]{0,}$
    英文和数字：^[A-Za-z0-9]+$ 或 ^[A-Za-z0-9]{4,40}$
    长度为3-20的所有字符：^.{3,20}$
    由26个英文字母组成的字符串：^[A-Za-z]+$
    由26个大写英文字母组成的字符串：^[A-Z]+$
    由26个小写英文字母组成的字符串：^[a-z]+$
    由数字和26个英文字母组成的字符串：^[A-Za-z0-9]+$
    由数字、26个英文字母或者下划线组成的字符串：^\w+$ 或 ^\w{3,20}$
    中文、英文、数字包括下划线：^[\u4E00-\u9FA5A-Za-z0-9_]+$
    可以输入含有^%&’,;=?$\”等字符：[^%&',;=?$\x22]+
    禁止输入含有~的字符：[^~\x22]+

## 特殊需求正则

    Email地址：^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$
    域名：[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(/.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+/.?
    InternetURL：[a-zA-z]+://[^\s]* 或 ^http://([\w-]+\.)+[\w-]+(/[\w-./?%&=]*)?$
    手机号码：^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$
    电话号码(“XXX-XXXXXXX”、”XXXX-XXXXXXXX”、”XXX-XXXXXXX”、”XXX-XXXXXXXX”、”XXXXXXX”和”XXXXXXXX)：^(\(\d{3,4}-)|\d{3.4}-)?\d{7,8}$
    国内电话号码(0511-4405222、021-87888822)：\d{3}-\d{8}|\d{4}-\d{7}
    身份证号(15位、18位数字)：^\d{15}|\d{18}$
    短身份证号码(数字、字母x结尾)：^([0-9]){7,18}(x|X)?$ 或  ^\d{8,18}|[0-9x]{8,18}|[0-9X]{8,18}?$
    帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线)：^[a-zA-Z][a-zA-Z0-9_]{4,15}$
    密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)：^[a-zA-Z]\w{5,17}$
    强密码(必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间)：^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$
    日期格式：^\d{4}-\d{1,2}-\d{1,2}
    一年的12个月(01～09和1～12)：^(0?[1-9]|1[0-2])$
    一个月的31天(01～09和1～31)：^((0?[1-9])|((1|2)[0-9])|30|31)$
    xml文件：^([a-zA-Z]+-?)+[a-zA-Z0-9]+\\.[x|X][m|M][l|L]$
    中文字符的正则表达式：[\u4e00-\u9fa5]
    双字节字符：[^\x00-\xff] (包括汉字在内，可以用来计算字符串的长度(一个双字节字符长度计2，ASCII字符计1))
    空白行的正则表达式：\n\s*\r (可以用来删除空白行)
    HTML标记的正则表达式：< (\S*?)[^>]*>.*?|< .*? /> (网上流传的版本太糟糕，上面这个也仅仅能部分，对于复杂的嵌套标记依旧无能为力)
    首尾空白字符的正则表达式：^\s*|\s*$或(^\s*)|(\s*$) (可以用来删除行首行尾的空白字符(包括空格、制表符、换页符等等)，非常有用的表达式)
    腾讯QQ号：[1-9][0-9]{4,} (腾讯QQ号从10000开始)
    中国邮政编码：[1-9]\d{5}(?!\d) (中国邮政编码为6位数字)
    IP地址：\d+\.\d+\.\d+\.\d+ (提取IP地址时有用)
    IP地址：((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))
    港澳居民来往内地通行证号码验证正则： /^([A-Z]\d{6,10}(\(\w{1}\))?)$/
    护照验证正则：  /^(P\d{7}|G\d{7,8}|TH\d{7,8}|S\d{7,8}|A\d{7,8}|L\d{7,8}|\d{9}|D\d+|1[4,5]\d{7})$/

## 钱的输入格式正则

    有四种钱的表示形式我们可以接受:”10000.00″ 和 “10,000.00”, 和没有 “分” 的 “10000” 和 “10,000”：^[1-9][0-9]*$
    这表示任意一个不以0开头的数字,但是,这也意味着一个字符”0″不通过,所以我们采用下面的形式：^(0|[1-9][0-9]*)$
    一个0或者一个不以0开头的数字.我们还可以允许开头有一个负号：^(0|-?[1-9][0-9]*)$
    这表示一个0或者一个可能为负的开头不为0的数字.让用户以0开头好了.把负号的也去掉,因为钱总不能是负的吧.下面我们要加的是说明可能的小数部分：^[0-9]+(.[0-9]+)?$
    必须说明的是,小数点后面至少应该有1位数,所以”10.”是不通过的,但是 “10” 和 “10.2” 是通过的：^[0-9]+(.[0-9]{2})?$
    这样我们规定小数点后面必须有两位,如果你认为太苛刻了,可以这样：^[0-9]+(.[0-9]{1,2})?$
    这样就允许用户只写一位小数.下面我们该考虑数字中的逗号了,我们可以这样：^[0-9]{1,3}(,[0-9]{3})*(.[0-9]{1,2})?$
    1到3个数字,后面跟着任意个 逗号+3个数字,逗号成为可选,而不是必须：^([0-9]+|[0-9]{1,3}(,[0-9]{3})*)(.[0-9]{1,2})?$