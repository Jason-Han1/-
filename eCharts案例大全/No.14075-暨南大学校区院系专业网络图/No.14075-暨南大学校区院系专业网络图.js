option = {
    backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
        offset: 0,
        color: '#fff'
    }, {
        offset: 1,
        color: '#cdd0d5'
    }]),
    title: {
        text: "暨南大学校区院系专业网络图",
        subtext: "数据来源：暨南大学招生办公室",
        top: "top",
        left: "left"
    },
    tooltip: {},
    legend: [{
        formatter: function(name) {
            return echarts.format.truncateText(name, 40, '14px Microsoft Yahei', '…');
        },
        tooltip: {
            show: true
        },
        selectedMode: 'true',
        bottom: 20,
        data: [
            
         
            '力学与建筑工程学院',
            '新闻与传播学院',
            '人文学院',
            '护理学院',
            '华文学院',
            '法学院/知识产权学院',
            '环境学院 ',
            '生命科学技术学院',
            '经济与社会研究院',
            '翻译学院'
        ]
    }],
    toolbox: {
        show: true,
        feature: {
            dataView: {
                show: true,
                readOnly: true
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    animationDuration: 3000,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        name: '暨南大学',
        type: 'graph',
        layout: 'force',
        force: {
            repulsion: 50
        },
        data: [{
                "name": "中医学",
                "symbolSize": 6,
                "category": "中医学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "中药学",
                "symbolSize": 6,
                "category": "药学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "临床医学（全英语教学）",
                "symbolSize": 6,
                "category": "国际学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "临床医学（校本部班）",
                "symbolSize": 6,
                "category": "医学部",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "临床医学（深圳班）",
                "symbolSize": 6,
                "category": "医学部",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "临床医学（省二医班）",
                "symbolSize": 6,
                "category": "医学部",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "人力资源管理",
                "symbolSize": 6,
                "category": "管理学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "会展经济与管理",
                "symbolSize": 6,
                "category": "深圳旅游学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "会计学",
                "symbolSize": 6,
                "category": "管理学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "会计学（ACCA）",
                "symbolSize": 6,
                "category": "管理学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "会计学（CPA Canada,全英语教学）",
                "symbolSize": 6,
                "category": "国际学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "会计学（注册会计师）",
                "symbolSize": 6,
                "category": "管理学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "体育教育",
                "symbolSize": 6,
                "category": "体育学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "信息与计算科学(暨南大学伯明翰大学联合学院)",
                "symbolSize": 6,
                "category": "暨南大学伯明翰大学联合学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "信息与计算科学(信息科学技术学院)",
                "symbolSize": 6,
                "category": "信息科学技术学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "信息安全",
                "symbolSize": 6,
                "category": "电气信息学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "信息工程",
                "symbolSize": 6,
                "category": "理工学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "信息管理与信息系统",
                "symbolSize": 6,
                "category": "信息科学技术学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "光电信息科学与工程",
                "symbolSize": 6,
                "category": "理工学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "光电信息科学与工程（创新班）",
                "symbolSize": 6,
                "category": "光子技术研究院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "公共事业管理（应急管理）",
                "symbolSize": 6,
                "category": "公共管理学院/应急管理学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "动画",
                "symbolSize": 6,
                "category": "艺术学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "包装工程",
                "symbolSize": 6,
                "category": "电气信息学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "化学工程与工艺",
                "symbolSize": 6,
                "category": "化学与材料学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "历史学",
                "symbolSize": 6,
                "category": "文学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "口腔医学",
                "symbolSize": 6,
                "category": "口腔医学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "商务英语(外国语学院)",
                "symbolSize": 6,
                "category": "外国语学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "商务英语(深圳旅游学院)",
                "symbolSize": 6,
                "category": "深圳旅游学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "国际事务与国际关系",
                "symbolSize": 6,
                "category": "国际关系学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "国际商务",
                "symbolSize": 6,
                "category": "国际商学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "国际政治",
                "symbolSize": 6,
                "category": "国际关系学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "国际经济与贸易(国际商学院)",
                "symbolSize": 6,
                "category": "国际商学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "国际经济与贸易(经济学院)",
                "symbolSize": 6,
                "category": "经济学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "国际经济与贸易（全英语教学）",
                "symbolSize": 6,
                "category": "国际学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "土木工程",
                "symbolSize": 6,
                "category": "力学与建筑工程学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "工业工程",
                "symbolSize": 6,
                "category": "电气信息学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "工商管理(国际商学院)",
                "symbolSize": 6,
                "category": "国际商学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "工商管理(管理学院)",
                "symbolSize": 6,
                "category": "管理学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "工程力学（钱伟长创新班）",
                "symbolSize": 6,
                "category": "力学与建筑工程学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "市场营销(国际商学院)",
                "symbolSize": 6,
                "category": "国际商学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "市场营销(管理学院)",
                "symbolSize": 6,
                "category": "管理学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "广告学",
                "symbolSize": 6,
                "category": "新闻与传播学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "广告学（网络与新媒体）",
                "symbolSize": 6,
                "category": "人文学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "广播电视学",
                "symbolSize": 6,
                "category": "新闻与传播学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "应用化学",
                "symbolSize": 6,
                "category": "化学与材料学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "应用化学（化学生物学创新班）",
                "symbolSize": 6,
                "category": "化学与材料学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "应用物理学",
                "symbolSize": 6,
                "category": "理工学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "建筑学",
                "symbolSize": 6,
                "category": "力学与建筑工程学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "戏剧影视导演（影视编导）",
                "symbolSize": 6,
                "category": "艺术学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "戏剧影视文学",
                "symbolSize": 6,
                "category": "文学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "护理学",
                "symbolSize": 6,
                "category": "护理学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "播音与主持艺术",
                "symbolSize": 6,
                "category": "新闻与传播学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "数学与应用数学(信息科学技术学院)",
                "symbolSize": 6,
                "category": "信息科学技术学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "数学与应用数学(暨南大学伯明翰大学联合学院)",
                "symbolSize": 6,
                "category": "暨南大学伯明翰大学联合学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "文化产业管理",
                "symbolSize": 6,
                "category": "人文学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "新闻学",
                "symbolSize": 6,
                "category": "新闻与传播学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "新闻学（国际新闻,全英语教学）",
                "symbolSize": 6,
                "category": "国际学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "旅游管理(深圳旅游学院)",
                "symbolSize": 6,
                "category": "深圳旅游学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "旅游管理(管理学院)",
                "symbolSize": 6,
                "category": "管理学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "旅游管理（高尔夫管理）",
                "symbolSize": 6,
                "category": "深圳旅游学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "日语",
                "symbolSize": 6,
                "category": "外国语学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "材料物理",
                "symbolSize": 6,
                "category": "理工学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "材料科学与工程",
                "symbolSize": 6,
                "category": "化学与材料学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "汉语国际教育",
                "symbolSize": 6,
                "category": "华文学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "汉语言",
                "symbolSize": 6,
                "category": "华文学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "汉语言文学（国家文科基地班）",
                "symbolSize": 6,
                "category": "文学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "汉语言文学（编辑与出版）",
                "symbolSize": 6,
                "category": "人文学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "汉语言文学（高级文秘）",
                "symbolSize": 6,
                "category": "人文学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "法学",
                "symbolSize": 6,
                "category": "法学院/知识产权学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "法学（律师）",
                "symbolSize": 6,
                "category": "人文学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "法语",
                "symbolSize": 6,
                "category": "外国语学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "物流管理",
                "symbolSize": 6,
                "category": "管理学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "物联网工程",
                "symbolSize": 6,
                "category": "电气信息学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "环境工程",
                "symbolSize": 6,
                "category": "环境学院 ",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "环境科学",
                "symbolSize": 6,
                "category": "环境学院 ",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "生态学",
                "symbolSize": 6,
                "category": "生命科学技术学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "生物制药",
                "symbolSize": 6,
                "category": "药学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "生物医学工程",
                "symbolSize": 6,
                "category": "生命科学技术学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "生物技术",
                "symbolSize": 6,
                "category": "生命科学技术学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "生物科学",
                "symbolSize": 6,
                "category": "生命科学技术学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "生物科学（暨大中科先进班）",
                "symbolSize": 6,
                "category": "生命科学技术学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "电子信息工程",
                "symbolSize": 6,
                "category": "信息科学技术学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "电子信息科学与技术",
                "symbolSize": 6,
                "category": "电气信息学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "电子商务(管理学院)",
                "symbolSize": 6,
                "category": "管理学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "电子商务(深圳旅游学院)",
                "symbolSize": 6,
                "category": "深圳旅游学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "电子科学与技术",
                "symbolSize": 6,
                "category": "信息科学技术学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "电气工程及其自动化",
                "symbolSize": 6,
                "category": "电气信息学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "知识产权",
                "symbolSize": 6,
                "category": "法学院/知识产权学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "税收学",
                "symbolSize": 6,
                "category": "经济学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "经济学",
                "symbolSize": 6,
                "category": "暨南大学伯明翰大学联合学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "经济学（国际化创新班）",
                "symbolSize": 6,
                "category": "经济与社会研究院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "经济学（投资经济）",
                "symbolSize": 6,
                "category": "经济学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "经济统计学(暨南大学伯明翰大学联合学院)",
                "symbolSize": 6,
                "category": "暨南大学伯明翰大学联合学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "经济统计学(经济学院)",
                "symbolSize": 6,
                "category": "经济学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "经济统计学（精算师）",
                "symbolSize": 6,
                "category": "经济学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "给排水科学与工程",
                "symbolSize": 6,
                "category": "环境学院 ",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "网络与新媒体",
                "symbolSize": 6,
                "category": "新闻与传播学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "网络工程",
                "symbolSize": 6,
                "category": "信息科学技术学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "网络空间安全",
                "symbolSize": 6,
                "category": "信息科学技术学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "美术学（中国书画鉴赏）",
                "symbolSize": 6,
                "category": "艺术学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "翻译",
                "symbolSize": 6,
                "category": "翻译学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "自动化",
                "symbolSize": 6,
                "category": "电气信息学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "英语（语言文学）",
                "symbolSize": 6,
                "category": "外国语学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "药学",
                "symbolSize": 6,
                "category": "药学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "药学（全英语教学）",
                "symbolSize": 6,
                "category": "国际学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "药学（暨大中科先进班）",
                "symbolSize": 6,
                "category": "药学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "行政管理",
                "symbolSize": 6,
                "category": "公共管理学院/应急管理学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "行政管理（城市管理）",
                "symbolSize": 6,
                "category": "人文学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "计算机科学与技术",
                "symbolSize": 6,
                "category": "信息科学技术学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "计算机科学与技术（全英语教学）",
                "symbolSize": 6,
                "category": "国际学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "财务管理(国际商学院)",
                "symbolSize": 6,
                "category": "国际商学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "财务管理(管理学院)",
                "symbolSize": 6,
                "category": "管理学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "财政学",
                "symbolSize": 6,
                "category": "经济学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "软件工程(信息科学技术学院)",
                "symbolSize": 6,
                "category": "信息科学技术学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "软件工程(电气信息学院)",
                "symbolSize": 6,
                "category": "电气信息学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "通信工程",
                "symbolSize": 6,
                "category": "信息科学技术学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "酒店管理",
                "symbolSize": 6,
                "category": "深圳旅游学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "金融学",
                "symbolSize": 6,
                "category": "经济学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "金融学（全英语教学）",
                "symbolSize": 6,
                "category": "国际学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "金融学（金融工程）",
                "symbolSize": 6,
                "category": "国际商学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "音乐学（电脑音乐制作）",
                "symbolSize": 6,
                "category": "艺术学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "音乐学（音乐演奏艺术）",
                "symbolSize": 6,
                "category": "艺术学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "风景园林",
                "symbolSize": 6,
                "category": "深圳旅游学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "食品科学与工程",
                "symbolSize": 6,
                "category": "理工学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "食品质量与安全",
                "symbolSize": 6,
                "category": "理工学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "食品质量与安全（全英语教学）",
                "symbolSize": 6,
                "category": "国际学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "高分子材料与工程",
                "symbolSize": 6,
                "category": "化学与材料学院",
                "draggable": "true",
                "value": 1
            },
            {
                "name": "暨南大学",
                "symbolSize": 50,
                "draggable": "true",
                "value": 5
            },
            {
                "name": "番禺校区",
                "symbolSize": 25,
                "draggable": "true",
                "value": 57
            },
            {
                "name": "广园东校区",
                "symbolSize": 20,
                "draggable": "true",
                "value": 2
            },
            {
                "name": "深圳校区",
                "symbolSize": 20,
                "draggable": "true",
                "value": 7
            },
            {
                "name": "珠海校区",
                "symbolSize": 20,
                "draggable": "true",
                "value": 21
            },
            {
                "name": "石牌校区",
                "symbolSize": 20,
                "draggable": "true",
                "value": 40
            },
            {
                "name": "中医学院",
                "symbolSize": 12,
                "draggable": "true",
                "value": 1
            },
            {
                "name": "人文学院",
                "symbolSize": 12,
                "draggable": "true",
                "value": 6
            },
            {
                "name": "体育学院",
                "symbolSize": 12,
                "draggable": "true",
                "value": 1
            },
            {
                "name": "信息科学技术学院",
                "symbolSize": 12,
                "draggable": "true",
                "value": 10
            },
            {
                "name": "光子技术研究院",
                "symbolSize": 12,
                "draggable": "true",
                "value": 1
            },
            {
                "name": "公共管理学院/应急管理学院",
                "symbolSize": 12,
                "draggable": "true",
                "value": 2
            },
            {
                "name": "力学与建筑工程学院",
                "symbolSize": 12,
                "draggable": "true",
                "value": 3
            },
            {
                "name": "化学与材料学院",
                "symbolSize": 12,
                "draggable": "true",
                "value": 5
            },
            {
                "name": "医学部",
                "symbolSize": 12,
                "draggable": "true",
                "value": 3
            },
            {
                "name": "华文学院",
                "symbolSize": 12,
                "draggable": "true",
                "value": 2
            },
            {
                "name": "口腔医学院",
                "symbolSize": 12,
                "draggable": "true",
                "value": 1
            },
            {
                "name": "国际关系学院",
                "symbolSize": 12,
                "draggable": "true",
                "value": 2
            },
            {
                "name": "国际商学院",
                "symbolSize": 12,
                "draggable": "true",
                "value": 6
            },
            {
                "name": "国际学院",
                "symbolSize": 12,
                "draggable": "true",
                "value": 8
            },
            {
                "name": "外国语学院",
                "symbolSize": 12,
                "draggable": "true",
                "value": 4
            },
            {
                "name": "护理学院",
                "symbolSize": 12,
                "draggable": "true",
                "value": 1
            },
            {
                "name": "文学院",
                "symbolSize": 12,
                "draggable": "true",
                "value": 3
            },
            {
                "name": "新闻与传播学院",
                "symbolSize": 12,
                "draggable": "true",
                "value": 5
            },
            {
                "name": "暨南大学伯明翰大学联合学院",
                "symbolSize": 12,
                "draggable": "true",
                "value": 4
            },
            {
                "name": "法学院/知识产权学院",
                "symbolSize": 12,
                "draggable": "true",
                "value": 2
            },
            {
                "name": "深圳旅游学院",
                "symbolSize": 12,
                "draggable": "true",
                "value": 7
            },
            {
                "name": "环境学院 ",
                "symbolSize": 12,
                "draggable": "true",
                "value": 3
            },
            {
                "name": "理工学院",
                "symbolSize": 12,
                "draggable": "true",
                "value": 6
            },
            {
                "name": "生命科学技术学院",
                "symbolSize": 12,
                "draggable": "true",
                "value": 5
            },
            {
                "name": "电气信息学院",
                "symbolSize": 12,
                "draggable": "true",
                "value": 8
            },
            {
                "name": "管理学院",
                "symbolSize": 12,
                "draggable": "true",
                "value": 10
            },
            {
                "name": "经济与社会研究院",
                "symbolSize": 12,
                "draggable": "true",
                "value": 1
            },
            {
                "name": "经济学院",
                "symbolSize": 12,
                "draggable": "true",
                "value": 7
            },
            {
                "name": "翻译学院",
                "symbolSize": 12,
                "draggable": "true",
                "value": 1
            },
            {
                "name": "艺术学院",
                "symbolSize": 12,
                "draggable": "true",
                "value": 5
            },
            {
                "name": "药学院",
                "symbolSize": 12,
                "draggable": "true",
                "value": 4
            }
        ],
        links: [{
                "source": "暨南大学",
                "target": "石牌校区"
            },
            {
                "source": "暨南大学",
                "target": "番禺校区"
            },
            {
                "source": "暨南大学",
                "target": "深圳校区"
            },
            {
                "source": "暨南大学",
                "target": "珠海校区"
            },
            {
                "source": "暨南大学",
                "target": "广园东校区"
            },
            {
                "source": "石牌校区",
                "target": "中医学院"
            },
            {
                "source": "番禺校区",
                "target": "药学院"
            },
            {
                "source": "石牌校区",
                "target": "国际学院"
            },
            {
                "source": "石牌校区",
                "target": "医学部"
            },
            {
                "source": "石牌校区",
                "target": "医学部"
            },
            {
                "source": "石牌校区",
                "target": "医学部"
            },
            {
                "source": "番禺校区",
                "target": "管理学院"
            },
            {
                "source": "深圳校区",
                "target": "深圳旅游学院"
            },
            {
                "source": "番禺校区",
                "target": "管理学院"
            },
            {
                "source": "番禺校区",
                "target": "管理学院"
            },
            {
                "source": "番禺校区",
                "target": "国际学院"
            },
            {
                "source": "番禺校区",
                "target": "管理学院"
            },
            {
                "source": "石牌校区",
                "target": "体育学院"
            },
            {
                "source": "番禺校区",
                "target": "暨南大学伯明翰大学联合学院"
            },
            {
                "source": "番禺校区",
                "target": "信息科学技术学院"
            },
            {
                "source": "珠海校区",
                "target": "电气信息学院"
            },
            {
                "source": "石牌校区",
                "target": "理工学院"
            },
            {
                "source": "番禺校区",
                "target": "信息科学技术学院"
            },
            {
                "source": "石牌校区",
                "target": "理工学院"
            },
            {
                "source": "番禺校区",
                "target": "光子技术研究院"
            },
            {
                "source": "番禺校区",
                "target": "公共管理学院/应急管理学院"
            },
            {
                "source": "石牌校区",
                "target": "艺术学院"
            },
            {
                "source": "珠海校区",
                "target": "电气信息学院"
            },
            {
                "source": "番禺校区",
                "target": "化学与材料学院"
            },
            {
                "source": "石牌校区",
                "target": "文学院"
            },
            {
                "source": "石牌校区",
                "target": "口腔医学院"
            },
            {
                "source": "番禺校区",
                "target": "外国语学院"
            },
            {
                "source": "深圳校区",
                "target": "深圳旅游学院"
            },
            {
                "source": "番禺校区",
                "target": "国际关系学院"
            },
            {
                "source": "珠海校区",
                "target": "国际商学院"
            },
            {
                "source": "番禺校区",
                "target": "国际关系学院"
            },
            {
                "source": "珠海校区",
                "target": "国际商学院"
            },
            {
                "source": "番禺校区",
                "target": "经济学院"
            },
            {
                "source": "番禺校区",
                "target": "国际学院"
            },
            {
                "source": "石牌校区",
                "target": "力学与建筑工程学院"
            },
            {
                "source": "珠海校区",
                "target": "电气信息学院"
            },
            {
                "source": "珠海校区",
                "target": "国际商学院"
            },
            {
                "source": "番禺校区",
                "target": "管理学院"
            },
            {
                "source": "石牌校区",
                "target": "力学与建筑工程学院"
            },
            {
                "source": "珠海校区",
                "target": "国际商学院"
            },
            {
                "source": "番禺校区",
                "target": "管理学院"
            },
            {
                "source": "石牌校区",
                "target": "新闻与传播学院"
            },
            {
                "source": "珠海校区",
                "target": "人文学院"
            },
            {
                "source": "石牌校区",
                "target": "新闻与传播学院"
            },
            {
                "source": "番禺校区",
                "target": "化学与材料学院"
            },
            {
                "source": "番禺校区",
                "target": "化学与材料学院"
            },
            {
                "source": "石牌校区",
                "target": "理工学院"
            },
            {
                "source": "石牌校区",
                "target": "力学与建筑工程学院"
            },
            {
                "source": "石牌校区",
                "target": "艺术学院"
            },
            {
                "source": "石牌校区",
                "target": "文学院"
            },
            {
                "source": "石牌校区",
                "target": "护理学院"
            },
            {
                "source": "石牌校区",
                "target": "新闻与传播学院"
            },
            {
                "source": "番禺校区",
                "target": "信息科学技术学院"
            },
            {
                "source": "番禺校区",
                "target": "暨南大学伯明翰大学联合学院"
            },
            {
                "source": "珠海校区",
                "target": "人文学院"
            },
            {
                "source": "石牌校区",
                "target": "新闻与传播学院"
            },
            {
                "source": "石牌校区",
                "target": "国际学院"
            },
            {
                "source": "深圳校区",
                "target": "深圳旅游学院"
            },
            {
                "source": "番禺校区",
                "target": "管理学院"
            },
            {
                "source": "深圳校区",
                "target": "深圳旅游学院"
            },
            {
                "source": "番禺校区",
                "target": "外国语学院"
            },
            {
                "source": "石牌校区",
                "target": "理工学院"
            },
            {
                "source": "石牌校区",
                "target": "化学与材料学院"
            },
            {
                "source": "广园东校区",
                "target": "华文学院"
            },
            {
                "source": "广园东校区",
                "target": "华文学院"
            },
            {
                "source": "石牌校区",
                "target": "文学院"
            },
            {
                "source": "珠海校区",
                "target": "人文学院"
            },
            {
                "source": "珠海校区",
                "target": "人文学院"
            },
            {
                "source": "番禺校区",
                "target": "法学院/知识产权学院"
            },
            {
                "source": "珠海校区",
                "target": "人文学院"
            },
            {
                "source": "番禺校区",
                "target": "外国语学院"
            },
            {
                "source": "番禺校区",
                "target": "管理学院"
            },
            {
                "source": "珠海校区",
                "target": "电气信息学院"
            },
            {
                "source": "番禺校区",
                "target": "环境学院 "
            },
            {
                "source": "番禺校区",
                "target": "环境学院 "
            },
            {
                "source": "石牌校区",
                "target": "生命科学技术学院"
            },
            {
                "source": "番禺校区",
                "target": "药学院"
            },
            {
                "source": "石牌校区",
                "target": "生命科学技术学院"
            },
            {
                "source": "石牌校区",
                "target": "生命科学技术学院"
            },
            {
                "source": "石牌校区",
                "target": "生命科学技术学院"
            },
            {
                "source": "石牌校区",
                "target": "生命科学技术学院"
            },
            {
                "source": "番禺校区",
                "target": "信息科学技术学院"
            },
            {
                "source": "珠海校区",
                "target": "电气信息学院"
            },
            {
                "source": "番禺校区",
                "target": "管理学院"
            },
            {
                "source": "深圳校区",
                "target": "深圳旅游学院"
            },
            {
                "source": "番禺校区",
                "target": "信息科学技术学院"
            },
            {
                "source": "珠海校区",
                "target": "电气信息学院"
            },
            {
                "source": "番禺校区",
                "target": "法学院/知识产权学院"
            },
            {
                "source": "番禺校区",
                "target": "经济学院"
            },
            {
                "source": "番禺校区",
                "target": "暨南大学伯明翰大学联合学院"
            },
            {
                "source": "石牌校区",
                "target": "经济与社会研究院"
            },
            {
                "source": "番禺校区",
                "target": "经济学院"
            },
            {
                "source": "番禺校区",
                "target": "暨南大学伯明翰大学联合学院"
            },
            {
                "source": "番禺校区",
                "target": "经济学院"
            },
            {
                "source": "番禺校区",
                "target": "经济学院"
            },
            {
                "source": "番禺校区",
                "target": "环境学院 "
            },
            {
                "source": "石牌校区",
                "target": "新闻与传播学院"
            },
            {
                "source": "番禺校区",
                "target": "信息科学技术学院"
            },
            {
                "source": "番禺校区",
                "target": "信息科学技术学院"
            },
            {
                "source": "石牌校区",
                "target": "艺术学院"
            },
            {
                "source": "珠海校区",
                "target": "翻译学院"
            },
            {
                "source": "珠海校区",
                "target": "电气信息学院"
            },
            {
                "source": "番禺校区",
                "target": "外国语学院"
            },
            {
                "source": "番禺校区",
                "target": "药学院"
            },
            {
                "source": "番禺校区",
                "target": "国际学院"
            },
            {
                "source": "番禺校区",
                "target": "药学院"
            },
            {
                "source": "番禺校区",
                "target": "公共管理学院/应急管理学院"
            },
            {
                "source": "珠海校区",
                "target": "人文学院"
            },
            {
                "source": "番禺校区",
                "target": "信息科学技术学院"
            },
            {
                "source": "番禺校区",
                "target": "国际学院"
            },
            {
                "source": "珠海校区",
                "target": "国际商学院"
            },
            {
                "source": "番禺校区",
                "target": "管理学院"
            },
            {
                "source": "番禺校区",
                "target": "经济学院"
            },
            {
                "source": "番禺校区",
                "target": "信息科学技术学院"
            },
            {
                "source": "珠海校区",
                "target": "电气信息学院"
            },
            {
                "source": "番禺校区",
                "target": "信息科学技术学院"
            },
            {
                "source": "深圳校区",
                "target": "深圳旅游学院"
            },
            {
                "source": "番禺校区",
                "target": "经济学院"
            },
            {
                "source": "番禺校区",
                "target": "国际学院"
            },
            {
                "source": "珠海校区",
                "target": "国际商学院"
            },
            {
                "source": "石牌校区",
                "target": "艺术学院"
            },
            {
                "source": "石牌校区",
                "target": "艺术学院"
            },
            {
                "source": "深圳校区",
                "target": "深圳旅游学院"
            },
            {
                "source": "石牌校区",
                "target": "理工学院"
            },
            {
                "source": "石牌校区",
                "target": "理工学院"
            },
            {
                "source": "石牌校区",
                "target": "国际学院"
            },
            {
                "source": "石牌校区",
                "target": "化学与材料学院"
            },
            {
                "source": "中医学院",
                "target": "中医学"
            },
            {
                "source": "药学院",
                "target": "中药学"
            },
            {
                "source": "国际学院",
                "target": "临床医学（全英语教学）"
            },
            {
                "source": "医学部",
                "target": "临床医学（校本部班）"
            },
            {
                "source": "医学部",
                "target": "临床医学（深圳班）"
            },
            {
                "source": "医学部",
                "target": "临床医学（省二医班）"
            },
            {
                "source": "管理学院",
                "target": "人力资源管理"
            },
            {
                "source": "深圳旅游学院",
                "target": "会展经济与管理"
            },
            {
                "source": "管理学院",
                "target": "会计学"
            },
            {
                "source": "管理学院",
                "target": "会计学（ACCA）"
            },
            {
                "source": "国际学院",
                "target": "会计学（CPA Canada,全英语教学）"
            },
            {
                "source": "管理学院",
                "target": "会计学（注册会计师）"
            },
            {
                "source": "体育学院",
                "target": "体育教育"
            },
            {
                "source": "暨南大学伯明翰大学联合学院",
                "target": "信息与计算科学(暨南大学伯明翰大学联合学院)"
            },
            {
                "source": "信息科学技术学院",
                "target": "信息与计算科学(信息科学技术学院)"
            },
            {
                "source": "电气信息学院",
                "target": "信息安全"
            },
            {
                "source": "理工学院",
                "target": "信息工程"
            },
            {
                "source": "信息科学技术学院",
                "target": "信息管理与信息系统"
            },
            {
                "source": "理工学院",
                "target": "光电信息科学与工程"
            },
            {
                "source": "光子技术研究院",
                "target": "光电信息科学与工程（创新班）"
            },
            {
                "source": "公共管理学院/应急管理学院",
                "target": "公共事业管理（应急管理）"
            },
            {
                "source": "艺术学院",
                "target": "动画"
            },
            {
                "source": "电气信息学院",
                "target": "包装工程"
            },
            {
                "source": "化学与材料学院",
                "target": "化学工程与工艺"
            },
            {
                "source": "文学院",
                "target": "历史学"
            },
            {
                "source": "口腔医学院",
                "target": "口腔医学"
            },
            {
                "source": "外国语学院",
                "target": "商务英语(外国语学院)"
            },
            {
                "source": "深圳旅游学院",
                "target": "商务英语(深圳旅游学院)"
            },
            {
                "source": "国际关系学院",
                "target": "国际事务与国际关系"
            },
            {
                "source": "国际商学院",
                "target": "国际商务"
            },
            {
                "source": "国际关系学院",
                "target": "国际政治"
            },
            {
                "source": "国际商学院",
                "target": "国际经济与贸易(国际商学院)"
            },
            {
                "source": "经济学院",
                "target": "国际经济与贸易(经济学院)"
            },
            {
                "source": "国际学院",
                "target": "国际经济与贸易（全英语教学）"
            },
            {
                "source": "力学与建筑工程学院",
                "target": "土木工程"
            },
            {
                "source": "电气信息学院",
                "target": "工业工程"
            },
            {
                "source": "国际商学院",
                "target": "工商管理(国际商学院)"
            },
            {
                "source": "管理学院",
                "target": "工商管理(管理学院)"
            },
            {
                "source": "力学与建筑工程学院",
                "target": "工程力学（钱伟长创新班）"
            },
            {
                "source": "国际商学院",
                "target": "市场营销(国际商学院)"
            },
            {
                "source": "管理学院",
                "target": "市场营销(管理学院)"
            },
            {
                "source": "新闻与传播学院",
                "target": "广告学"
            },
            {
                "source": "人文学院",
                "target": "广告学（网络与新媒体）"
            },
            {
                "source": "新闻与传播学院",
                "target": "广播电视学"
            },
            {
                "source": "化学与材料学院",
                "target": "应用化学"
            },
            {
                "source": "化学与材料学院",
                "target": "应用化学（化学生物学创新班）"
            },
            {
                "source": "理工学院",
                "target": "应用物理学"
            },
            {
                "source": "力学与建筑工程学院",
                "target": "建筑学"
            },
            {
                "source": "艺术学院",
                "target": "戏剧影视导演（影视编导）"
            },
            {
                "source": "文学院",
                "target": "戏剧影视文学"
            },
            {
                "source": "护理学院",
                "target": "护理学"
            },
            {
                "source": "新闻与传播学院",
                "target": "播音与主持艺术"
            },
            {
                "source": "信息科学技术学院",
                "target": "数学与应用数学(信息科学技术学院)"
            },
            {
                "source": "暨南大学伯明翰大学联合学院",
                "target": "数学与应用数学(暨南大学伯明翰大学联合学院)"
            },
            {
                "source": "人文学院",
                "target": "文化产业管理"
            },
            {
                "source": "新闻与传播学院",
                "target": "新闻学"
            },
            {
                "source": "国际学院",
                "target": "新闻学（国际新闻,全英语教学）"
            },
            {
                "source": "深圳旅游学院",
                "target": "旅游管理(深圳旅游学院)"
            },
            {
                "source": "管理学院",
                "target": "旅游管理(管理学院)"
            },
            {
                "source": "深圳旅游学院",
                "target": "旅游管理（高尔夫管理）"
            },
            {
                "source": "外国语学院",
                "target": "日语"
            },
            {
                "source": "理工学院",
                "target": "材料物理"
            },
            {
                "source": "化学与材料学院",
                "target": "材料科学与工程"
            },
            {
                "source": "华文学院",
                "target": "汉语国际教育"
            },
            {
                "source": "华文学院",
                "target": "汉语言"
            },
            {
                "source": "文学院",
                "target": "汉语言文学（国家文科基地班）"
            },
            {
                "source": "人文学院",
                "target": "汉语言文学（编辑与出版）"
            },
            {
                "source": "人文学院",
                "target": "汉语言文学（高级文秘）"
            },
            {
                "source": "法学院/知识产权学院",
                "target": "法学"
            },
            {
                "source": "人文学院",
                "target": "法学（律师）"
            },
            {
                "source": "外国语学院",
                "target": "法语"
            },
            {
                "source": "管理学院",
                "target": "物流管理"
            },
            {
                "source": "电气信息学院",
                "target": "物联网工程"
            },
            {
                "source": "环境学院 ",
                "target": "环境工程"
            },
            {
                "source": "环境学院 ",
                "target": "环境科学"
            },
            {
                "source": "生命科学技术学院",
                "target": "生态学"
            },
            {
                "source": "药学院",
                "target": "生物制药"
            },
            {
                "source": "生命科学技术学院",
                "target": "生物医学工程"
            },
            {
                "source": "生命科学技术学院",
                "target": "生物技术"
            },
            {
                "source": "生命科学技术学院",
                "target": "生物科学"
            },
            {
                "source": "生命科学技术学院",
                "target": "生物科学（暨大中科先进班）"
            },
            {
                "source": "信息科学技术学院",
                "target": "电子信息工程"
            },
            {
                "source": "电气信息学院",
                "target": "电子信息科学与技术"
            },
            {
                "source": "管理学院",
                "target": "电子商务(管理学院)"
            },
            {
                "source": "深圳旅游学院",
                "target": "电子商务(深圳旅游学院)"
            },
            {
                "source": "信息科学技术学院",
                "target": "电子科学与技术"
            },
            {
                "source": "电气信息学院",
                "target": "电气工程及其自动化"
            },
            {
                "source": "法学院/知识产权学院",
                "target": "知识产权"
            },
            {
                "source": "经济学院",
                "target": "税收学"
            },
            {
                "source": "暨南大学伯明翰大学联合学院",
                "target": "经济学"
            },
            {
                "source": "经济与社会研究院",
                "target": "经济学（国际化创新班）"
            },
            {
                "source": "经济学院",
                "target": "经济学（投资经济）"
            },
            {
                "source": "暨南大学伯明翰大学联合学院",
                "target": "经济统计学(暨南大学伯明翰大学联合学院)"
            },
            {
                "source": "经济学院",
                "target": "经济统计学(经济学院)"
            },
            {
                "source": "经济学院",
                "target": "经济统计学（精算师）"
            },
            {
                "source": "环境学院 ",
                "target": "给排水科学与工程"
            },
            {
                "source": "新闻与传播学院",
                "target": "网络与新媒体"
            },
            {
                "source": "信息科学技术学院",
                "target": "网络工程"
            },
            {
                "source": "信息科学技术学院",
                "target": "网络空间安全"
            },
            {
                "source": "艺术学院",
                "target": "美术学（中国书画鉴赏）"
            },
            {
                "source": "翻译学院",
                "target": "翻译"
            },
            {
                "source": "电气信息学院",
                "target": "自动化"
            },
            {
                "source": "外国语学院",
                "target": "英语（语言文学）"
            },
            {
                "source": "药学院",
                "target": "药学"
            },
            {
                "source": "国际学院",
                "target": "药学（全英语教学）"
            },
            {
                "source": "药学院",
                "target": "药学（暨大中科先进班）"
            },
            {
                "source": "公共管理学院/应急管理学院",
                "target": "行政管理"
            },
            {
                "source": "人文学院",
                "target": "行政管理（城市管理）"
            },
            {
                "source": "信息科学技术学院",
                "target": "计算机科学与技术"
            },
            {
                "source": "国际学院",
                "target": "计算机科学与技术（全英语教学）"
            },
            {
                "source": "国际商学院",
                "target": "财务管理(国际商学院)"
            },
            {
                "source": "管理学院",
                "target": "财务管理(管理学院)"
            },
            {
                "source": "经济学院",
                "target": "财政学"
            },
            {
                "source": "信息科学技术学院",
                "target": "软件工程(信息科学技术学院)"
            },
            {
                "source": "电气信息学院",
                "target": "软件工程(电气信息学院)"
            },
            {
                "source": "信息科学技术学院",
                "target": "通信工程"
            },
            {
                "source": "深圳旅游学院",
                "target": "酒店管理"
            },
            {
                "source": "经济学院",
                "target": "金融学"
            },
            {
                "source": "国际学院",
                "target": "金融学（全英语教学）"
            },
            {
                "source": "国际商学院",
                "target": "金融学（金融工程）"
            },
            {
                "source": "艺术学院",
                "target": "音乐学（电脑音乐制作）"
            },
            {
                "source": "艺术学院",
                "target": "音乐学（音乐演奏艺术）"
            },
            {
                "source": "深圳旅游学院",
                "target": "风景园林"
            },
            {
                "source": "理工学院",
                "target": "食品科学与工程"
            },
            {
                "source": "理工学院",
                "target": "食品质量与安全"
            },
            {
                "source": "国际学院",
                "target": "食品质量与安全（全英语教学）"
            },
            {
                "source": "化学与材料学院",
                "target": "高分子材料与工程"
            }
        ],
        categories: [{
                'name': '中医学院'
            },
            {
                'name': '药学院'
            },
            {
                'name': '国际学院'
            },
            {
                'name': '医学部'
            },
            {
                'name': '管理学院'
            },
            {
                'name': '深圳旅游学院'
            },
            {
                'name': '体育学院'
            },
            {
                'name': '暨南大学伯明翰大学联合学院'
            },
            {
                'name': '信息科学技术学院'
            },
            {
                'name': '电气信息学院'
            },
            {
                'name': '理工学院'
            },
            {
                'name': '光子技术研究院'
            },
            {
                'name': '公共管理学院/应急管理学院'
            },
            {
                'name': '艺术学院'
            },
            {
                'name': '化学与材料学院'
            },
            {
                'name': '文学院'
            },
            {
                'name': '口腔医学院'
            },
            {
                'name': '外国语学院'
            },
            {
                'name': '国际关系学院'
            },
            {
                'name': '国际商学院'
            },
            {
                'name': '经济学院'
            },
            {
                'name': '力学与建筑工程学院'
            },
            {
                'name': '新闻与传播学院'
            },
            {
                'name': '人文学院'
            },
            {
                'name': '护理学院'
            },
            {
                'name': '华文学院'
            },
            {
                'name': '法学院/知识产权学院'
            },
            {
                'name': '环境学院 '
            },
            {
                'name': '生命科学技术学院'
            },
            {
                'name': '经济与社会研究院'
            },
            {
                'name': '翻译学院'
            }
        ],
        focusNodeAdjacency: true,
        roam: true,
        label: {
            normal: {
                show: true,
                position: 'top',
            }
        },
        lineStyle: {
            normal: {
                color: 'source',
                curveness: 0,
                type: "solid"
            }
        }
    }]
};