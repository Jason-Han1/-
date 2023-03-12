option = {
    title: {
        text: "文章和文集详情",
        subtext: "",
        // 我的简书两月记：数据可视化
        // https://zhuanlan.zhihu.com/p/29833266
        //left: "center",
        x: 'center',
        //x: 'left',//'center',
        y: 50,
        textStyle: {
            color: "#60C0DD",
            fontSize: 25
        },
    },

    backgroundColor: new echarts.graphic.RadialGradient(0, 0, 1, [{
        offset: 0,
        color: '#174b78'
    }, {
        offset: 1,
        color: '#174b78'
    }]),
    toolbox: {
        show: true,
        feature: {
            saveAsImage: {
                show: true
            }
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}:({d}%)"
    },
    series: [{
        name: '文章文集详情',
        type: 'pie',
        selectedMode: 'single',
        center: ['50%', '55%'],
        radius: [0, '30%'],

        label: {
            normal: {
                position: 'inner'
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: '49',
            name: '通过投稿 49'
        }, {
            value: '17',
            name: '拒稿 17'
        }, {
            value: '7',
            name: '编辑推荐至首页 7'
        }, {
            value: '64',
            name: '加入专题 64'
        }, {
            value: '17',
            name: '订阅 17'
        }, ]
    }, {
        name: '具体信息',
        type: 'pie',
        center: ['50%', '55%'],
        radius: ['35%', '55%'],
        label: {
            normal: {
                position: 'outer'
            }
        },
        data: [
            //通过投稿
            {
                value: '8',
                name: '爬虫专题 8'
            }, {
                value: '7',
                name: '程序员 7'
            }, {
                value: '6',
                name: '@IT·互联网 6'
            }, {
                value: '4',
                name: '读书 4'
            }, {
                value: '3',
                name: '生命在于读书 3'
            }, {
                value: '3',
                name: '爬虫专栏 3'
            }, {
                value: '3',
                name: '互联网科技 3'
            }, {
                value: '3',
                name: '读书笔记 3'
            }, {
                value: '2',
                name: 'python爬虫 2'
            }, {
                value: '2',
                name: '简书产品改进 2'
            }, {
                value: '1',
                name: '首页投稿 1'
            }, {
                value: '1',
                name: '生活不易 我用python 1'
            }, {
                value: '1',
                name: '我和简书那些事儿 1'
            }, {
                value: '1',
                name: '红楼梦里梦随笔 1'
            }, {
                value: '1',
                name: '珍爱红楼梦 1'
            }, {
                value: '1',
                name: '读不尽的《红楼梦》 1'
            }, {
                value: '1',
                name: '猫奴 1'
            }, {
                value: '1',
                name: '喵星人的今日看点 1'
            },

            //拒稿
            {
                value: '11',
                name: '首页投稿 11'
            }, {
                value: '3',
                name: '@IT·互联网 3'
            }, {
                value: '1',
                name: '社会热点 1'
            }, {
                value: '1',
                name: '萌宠 1'
            }, {
                value: '1',
                name: '爬虫专题 1'
            },

            //编辑推荐至首页
            {
                value: '1',
                name: '爬取张佳玮138w+知乎关注者：数据可视化 1'
            }, {
                value: '1',
                name: '我的简书一月记：数据可视化 1'
            }, {
                value: '1',
                name: '爬取简书26万+用户信息：数据可视化 1'
            }, {
                value: '1',
                name: '（送福利）BDP绘制微博转发动态热力图 1'
            }, {
                value: '1',
                name: '简书=鸡汤？爬取今日看点数据：1916篇简书热门文章可视化 1'
            }, {
                value: '1',
                name: '你猜简书有多少名签约作者？ 1'
            }, {
                value: '1',
                name: '简书推荐作者风云榜（爬取简书app数据） 1'
            },
            //加入专题
            {
                value: '4',
                name: '今日看点 4'
            }, {
                value: '3',
                name: 'Python3自学  爬虫实战 3'
            }, {
                value: '3',
                name: '程序员首页投稿 3'
            }, {
                value: '3',
                name: 'python爬虫日记本 3'
            }, {
                value: '3',
                name: '爬虫 3'
            }, {
                value: '3',
                name: '首页投稿 3'
            }, {
                value: '2',
                name: '简书产品改进 2'
            }, {
                value: '2',
                name: '互联网研究所 2'
            }, {
                value: '2',
                name: '写作数据分析 2'
            }, {
                value: '2',
                name: '数据分析 2'
            }, {
                value: '2',
                name: '青春无悔 2'
            }, {
                value: '2',
                name: '我们就爱程序媛 2'
            }, {
                value: '2',
                name: '谈写作 2'
            }, {
                value: '1',
                name: '技术 1'
            }, {
                value: '1',
                name: '前端综合专辑 1'
            }, {
                value: '1',
                name: '程序员 1'
            }, {
                value: '1',
                name: 'python 入门 1'
            }, {
                value: '1',
                name: '写给以后的自己 1'
            }, {
                value: '1',
                name: '爬虫专题 1'
            }, {
                value: '1',
                name: 'scrape 1'
            }, {
                value: '1',
                name: '互联网杂谈 1'
            }, {
                value: '1',
                name: '数据乐园 1'
            }, {
                value: '1',
                name: '创作 1'
            }, {
                value: '1',
                name: '简书藏文 1'
            }, {
                value: '1',
                name: 'python 1'
            }, {
                value: '1',
                name: '妙笔生花 1'
            }, {
                value: '1',
                name: '简书新手快速入门指南 1'
            }, {
                value: '1',
                name: '数据可视化 1'
            }, {
                value: '1',
                name: '基本技能 1'
            }, {
                value: '1',
                name: '菜鸟学Python 1'
            }, {
                value: '1',
                name: '知识技能 1'
            }, {
                value: '1',
                name: '半栈工程师 1'
            }, {
                value: '1',
                name: '人工智能 1'
            }, {
                value: '1',
                name: 'H5 1'
            }, {
                value: '1',
                name: 'python开发 1'
            }, {
                value: '1',
                name: '离签约作者的路 1'
            }, {
                value: '1',
                name: '花白在简书 1'
            }, {
                value: '1',
                name: '互联网产品 1'
            }, {
                value: '1',
                name: '情感杂谈 1'
            }, {
                value: '1',
                name: '计算机语言 1'
            }, {
                value: '1',
                name: '@IT·互联网 1'
            }, {
                value: '1',
                name: '谈情不说爱 1'
            }, {
                value: '1',
                name: '剥开疼痛成长 1'
            }, {
                value: '1',
                name: '杂谈 1'
            },

            //订阅
            {
                value: '17',
                name: '订阅 17'
            },
        ]
    }]
};