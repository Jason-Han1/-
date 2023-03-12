option = {
    title: {
        text: "认证信息",
        subtext: "",
        //爬取张佳玮138w+知乎关注者：数据可视化
        //https://zhuanlan.zhihu.com/p/28890605?refer=c_122608198
        //http://gallery.echartsjs.com/editor.html?c=xB14W3PDJW
        //left: "center",
        x: 'center',
        //x: 'left',//'center',
        y: 30,
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
        show : true,
        feature : {
            saveAsImage : {show: true}
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}:({d}%)"
    },
    series: [{
            name: '认证信息',
            type: 'pie',
            selectedMode: 'single',
            center: ['50%', '45%'],
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
                value: 9,
                name: '医师 9'
            }, {
                value: 37,
                name: '认证机构 37'
            }, {
                value: 13,
                name: '持证人/工程师 13'
            }, {
                value: 11,
                name: '教授/讲师/研究员 11'
            }, {
                value: 28,
                name: '其他 28'
            }, {
                value: 111,
                name: '博士/博士后 111'
            }]
        },{
            name: '具体信息',
            type: 'pie',
            center: ['50%', '45%'],
            radius: ['32%', '45%'],
            label: {
                normal: {
                    position: 'outer'
                }
            },
            data: [
            {
                value: 9,
                name: '医师'
            },/*{
                value: 1,
                name: '北京大学口腔医院'
            }, {
                value: 1,
                name: '北京协和医院 重症医学科'
            }, {
                value: 1,
                name: '常州市第一人民医院 麻醉科'
            }, {
                value: 1,
                name: '广东省口腔医院 正畸科'
            }, {
                value: 1,
                name: '墨尔本 St Vincent’s Hospital 外科'
            }, {
                value: 1,
                name: '神经外科'
            }, {
                value: 1,
                name: '浙江大学附属第一医院 内分泌科'
            }, {
                value: 1,
                name: '中国医科大学附属第一医院 皮肤科'
            }, {
                value: 1,
                name: '中国医学科学院整形外科医院 整形科'
            },*/{
                value: 37,
                name: '认证机构'
            }, {
                value: 5,
                name: '注册会计师（CPA）持证人'
            }, {
                value: 3,
                name: '特许金融分析师（CFA）持证人'
            }, {
                value: 5,
                name: '工程师'
            }, {
                value: 11,
                name: '教授/讲师/研究员'
            }, {
                value: 1,
                name: '中伦律师事务所（洛杉矶） 律师'
            }, {
                value: 1,
                name: '天津行通律师事务所 律师'
            }, {
                value: 1,
                name: '北京安杰律师事务所 合伙人'
            }, {
                value: 1,
                name: '律师'
            }, {
                value: 1,
                name: '「最美应用」与「最美有物」创始人'
            }, {
                value: 1,
                name: '触乐网 创始人'
            }, {
                value: 3,
                name: '知乎 联合创始人'
            }, {
                value: 1,
                name: '知乎《职人介绍所》主持人'
            }, {
                value: 1,
                name: '知乎创始人 & CEO'
            }, {
                value: 1,
                name: '新东方在线 COO'
            }, {
                value: 1,
                name: '新京报社'
            }, {
                value: 1,
                name: '媒体人，记者'
            }, {
                value: 1,
                name: '特稿记者，《智族GQ》总主笔'
            }, {
                value: 1,
                name: '腾讯集团高级副总裁、微信创始人'
            }, {
                value: 1,
                name: '启明副总裁'
            }, {
                value: 1,
                name: '启明星辰 副总裁'
            }, {
                value: 1,
                name: '钛度科技创始人， WCG2005 2006 魔兽争霸项目世界冠军'
            }, {
                value: 1,
                name: '媒体人，记者'
            }, {
                value: 1,
                name: '启明副总裁'
            }, {
                value: 1,
                name: '启明星辰 副总裁'
            }, {
                value: 1,
                name: '职业自行车手、国际级运动健将，2014 仁川亚运会场地自行车冠军'
            }, {
                value: 1,
                name: '歌手，代表作《伤不起》《QQ 爱》'
            }, {
                value: 1,
                name: '主持人、配音演员，配音代表作《钢铁侠》、《复仇者联盟》等'
            }, {
                value: 1,
                name: '作家'
            }, {
                value: 1,
                name: '作家，代表作《面包会有的》《寡人有疾》'
            }, {
                value: 1,
                name: '悬疑作家，代表作《天机》、《谋杀似水年华》'
            },{
                value: 79,
                name: '博士在读'
            },{
                value: 23,
                name: '博士'
            },{
                value: 9,
                name: '博士后'
            },]
        }
    ]
};
