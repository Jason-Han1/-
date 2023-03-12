myChart.showLoading();

var data1 = {
    "name": "学科",
    "children": [{
        "name": "哲学",
        "children": [{
            "name": "哲学类",
            "children": [{
                "name": "哲学",
            }, {
                "name": "逻辑学",
            }, {
                "name": "宗教学", 
            }, {
                "name": "伦理学",
            }]
        }]
    }, {
        "name": "经济学",
        "children": [{
            "name": "经济学类",
            "children": [{
                "name": "	经济学	",},{
                "name": "	经济统计学	",},{
                "name": "	国民经济管理	",},{
                "name": "	资源与环境经济学	",},{
                "name": "	商务经济学	",},{
                "name": "	能源经济	",}]
        }, {
            "name": "财政学类",
            "children": [{
                "name": "	财政学	",},{
                "name": "	税收学	",}]
        }, {
            "name": "金融学类",
            "children": [{
                "name": "	金融学	",},{
"name": "	金融工程	",},{
"name": "	保险学	",},{
"name": "	投资学	",},{
"name": "	金融数学	",},{
"name": "	信用管理(注:可授经济学或管理学学士学位)	",},{
"name": "	经济与金融	",},{
    "name": "经济与贸易类",
}]
}, {
           "name": "经济与贸易类",
            "children": [{
"name": "	国际经济与贸易	",
            },{
"name": "	贸易经济	",
        }]
}]
        
    }, {
        "name": "法学",
        "children": [{
            "name": "法学类",
            "children": [{
                "name": "法学",
            }, {
                "name": "知识产权",
            }, {
                "name": "监狱学", 
        }]
    }, {
        "name": "政治学类",
         "children": [{
        "name": "	政治学与行政学	",},{
"name": "	国际政治	",},{
"name": "	国际事务与国际关系	",},{
"name": "	政治学、经济学与哲学	",},{
"name": "	外交学	",
        }]
    }, {
        "name": "社会学类",
         "children": [{   
             "name": "	社会学	",},{
"name": "	人类学	",},{
"name": "	女性学	",},{
"name": "	家政学	",},{
"name": "	社会工作	",
    }]
    }, {
        "name": "民族学类",
         "children": [{
             "name": "	民族学	",},{
"name": "	马克思主义理论类	",
         }]
    }, {
        "name": "马克思主义理论类",
         "children": [{  
             "name": "	科学社会主义	",},{
"name": "	中国共产党历史	",},{
"name": "	思想政治教育	",
    }]
    }, {
        "name": "公安学类",
         "children": [{  
             "name": "	治安学	",},{
"name": "	侦查学	",},{
"name": "	边防管理	",},{
"name": "	禁毒学	",},{
"name": "	警犬技术	",},{
"name": "	经济犯罪侦查	",},{
"name": "	边防指挥	",},{
"name": "	消防指挥	",},{
"name": "	警卫学	",},{
"name": "	公安情报学	",},{
"name": "	犯罪学	",},{
"name": "	公安管理学	",},{
"name": "	涉外警务	",},{
"name": "	国内安全保卫	",},{
"name": "	警务指挥与战术	",
}]
}]
    }, {
        "name": "教育学",
        "children": [{
            "name": "教育学类",
            "children": [{
            "name": "	教育学	",},{
"name": "	科学教育	",},{
"name": "	人文教育	",},{
"name": "	教育技术学(注:可授教育学或理学或工学学士学位)	",},{
"name": "	艺术教育(注:可授教育学或艺术学学士学位)	",},{
"name": "	学前教育	",},{
"name": "	小学教育	",},{
"name": "	特殊教育	",},{
"name": "	华文教育	",
}]

}, {
        "name": "体育学类",
         "children": [{   
"name": "	体育教育	",},{
"name": "	运动训练	",},{
"name": "	社会体育指导与管理	",},{
"name": "	武术与民族传统体育	",},{
"name": "	运动人体科学	",},{
"name": "	运动康复(注:可授教育学或理学学士学位)	",},{
"name": "	休闲体育	",
}]
        }]
        
    }, {
        "name": "文学",
        "children": [{
            "name": "中国语言文学系",
          "children": [{  
            "name": "	汉语言文学	",},{
"name": "	汉语言	",},{
"name": "	汉语国际教育	",},{
"name": "	中国少数民族语言文学	",},{
"name": "	古典文献学	",},{
"name": "	应用语言学	",},{
"name": "	秘书学	",
}]
}, {
        "name": "外国语言文学系",
         "children": [{
             "name": "	英语	",},{
"name": "	俄语	",},{
"name": "	德语	",},{
"name": "	法语	",},{
"name": "	西班牙语	",},{
"name": "	阿拉伯语	",},{
"name": "	日语	",},{
"name": "	波斯语	",},{
"name": "	朝鲜语	",},{
"name": "	菲律宾语	",},{
"name": "	梵语巴利语	",},{
"name": "	印度尼西亚语	",},{
"name": "	印地语	",},{
"name": "	柬埔寨语	",},{
"name": "	老挝语	",},{
"name": "	缅甸语	",},{
"name": "	马来语	",},{
"name": "	蒙古语	",},{
"name": "	僧伽罗语	",},{
"name": "	泰语	",},{
"name": "	乌尔都语	",},{
"name": "	希伯来语	",},{
"name": "	越南语	",},{
"name": "	豪萨语	",},{
"name": "	斯瓦希里语	",},{
"name": "	阿尔巴尼亚语	",},{
"name": "	保加利亚语	",},{
"name": "	波兰语	",},{
"name": "	捷克语	",},{
"name": "	斯洛伐克语	",},{
"name": "	罗马尼亚语	",},{
"name": "	葡萄牙语	",},{
"name": "	瑞典语	",},{
"name": "	塞尔维亚语	",},{
"name": "	土耳其语	",},{
"name": "	希腊语	",},{
"name": "	匈牙利语	",},{
"name": "	意大利语	",},{
"name": "	泰米尔语	",},{
"name": "	普什图语	",},{
"name": "	世界语	",},{
"name": "	孟加拉语	",},{
"name": "	尼泊尔语	",},{
"name": "	克罗地亚语	",},{
"name": "	荷兰语	",},{
"name": "	芬兰语	",},{
"name": "	乌克兰语	",},{
"name": "	挪威语	",},{
"name": "	丹麦语	",},{
"name": "	冰岛语	",},{
"name": "	爱尔兰语	",},{
"name": "	拉脱维亚语	",},{
"name": "	立陶宛语	",},{
"name": "	斯洛文尼亚语	",},{
"name": "	爱沙尼亚语	",},{
"name": "	马耳他语	",},{
"name": "	哈萨克语	",},{
"name": "	乌兹别克语	",},{
"name": "	祖鲁语	",},{
"name": "	拉丁语	",},{
"name": "	翻译	",},{
"name": "	商务英语	",
}]
}, {
        "name": "新闻传播学类",
         "children": [{
             "name": "	新闻学	",},{
"name": "	广播电视学	",},{
"name": "	广告学	",},{
"name": "	传播学	",},{
"name": "	编辑出版学	",},{
"name": "	网络与新媒体	",},{
"name": "	数字出版	",
}]
    }]
    }, {
        "name": "历史学",
        "children": [{
            "name": "历史学类",
            "children": [{
                "name": "	历史学	",},{
"name": "	世界史	",},{
"name": "	考古学	",},{
"name": "	文物与博物馆学	",},{
"name": "	文物保护技术	",},{
"name": "	外国语言与外国历史	",
}]
 }] 
    }, {
        "name": "理学",
        "children": [{
            "name": "数学类",
            "children": [{
                "name": "	数学与应用数学	",},{
"name": "	信息与计算科学	",},{
"name": "	数理基础科学	",
    }] 
        }, {
        "name": "物理学类",
         "children": [{
             "name": "	物理学	",},{
"name": "	声学	",},{
"name": "	应用物理学	",}] 
}, {
        "name": "化学类",
         "children": [{
             "name": "	化学	",},{
"name": "	应用化学(注:可授理学或工学学士学位)	",},{
"name": "	分子科学与工程	",},{
"name": "	化学生物学	",}]
}, {
        "name": "天文学类",
         "children": [{"name": "	天文学	",}] 
}, {
        "name": "地理科学类",
         "children": [{"name": "	地理科学	",},{
"name": "	自然地理与资源环境	",},{
"name": "	人文地理与城乡规划	",},{
"name": "	地理信息科学	", }]
}, {
        "name": "海洋科学类",
         "children": [{"name": "	海洋资源与环境	",},{
"name": "	军事海洋学	",}]
}, {
        "name": "地球物理学类",
         "children": [{"name": "	地球物理学	",},{
"name": "	空间科学与技术	",}]
}, {
        "name": "地质学类",
         "children": [{"name": "	地质学	",},{
"name": "	地球化学	",},{
"name": "	地球信息科学与技术	",},{
"name": "	古生物学	",}]
}, {
        "name": "生物科学类",
         "children": [{"name": "	生物科学	",},{
"name": "	生物技术	",},{
"name": "	生物信息学	",},{
"name": "	生态学	",}]
}, {
        "name": "心理学类",
         "children": [{
"name": "	心理学	",},{
"name": "	应用心理学	",}]
}, {
        "name": "统计学类",
         "children": [{"name": "	统计学	",},{
"name": "	应用统计学	",}]
}, {
        "name": "力学类",
         "children": [{"name": "	理论与应用力学	",},{
"name": "	工程力学	",}]
}, {
        "name": "机械类",
         "children": [{"name": "	机械工程	",},{
"name": "	机械设计制造及其自动化	",},{
"name": "	材料成型及控制工程	",},{
"name": "	机械电子工程	",},{
"name": "	工业设计	",},{
"name": "	过程装备与控制工程	",},{
"name": "	车辆工程	",},{
"name": "	汽车服务工程	",},{
"name": "	机械工艺技术	",},{
"name": "	微机电系统工程	",},{
"name": "	机电技术教育	",},{
"name": "	汽车维修工程教育	",}]
}, {
        "name": "仪器类",
         "children": [{"name": "	测控技术与仪器	",}]
}, {
        "name": "材料类",
         "children": [{  "name": "	材料科学与工程	",},{
"name": "	材料物理	",},{
"name": "	材料化学	",},{
"name": "	冶金工程	",},{
"name": "	金属材料工程	",},{
"name": "	无机非金属材料工程	",},{
"name": "	高分子材料与工程	",},{
"name": "	复合材料与工程	",},{
"name": "	粉体材料科学与工程	",},{
"name": "	宝石及材料工艺学	",},{
"name": "	焊接技术与工程	",},{
"name": "	功能材料	",},{
"name": "	纳米材料与技术	",},{
"name": "	新能源材料与器件	",}]
}, {
        "name": "能源动力类",
         "children": [{"name": "	能源与动力工程	",},{
"name": "	能源与环境系统工程	",},{
"name": "	新能源科学与工程	",}]
}, {
        "name": "能源动力类",
         "children": [{"name": "	电气工程及其自动化	",},{
"name": "	智能电网信息工程	",},{
"name": "	光源与照明	",},{
"name": "	电气工程与智能控制	",}]

}, {
        "name": "能源动力类",
         "children": [{"name": "	电子信息工程(注:可授工学或理学学士学位)	",},{
"name": "	电子科学与技术(注:可授工学或理学学士学位)	",},{
"name": "	通信工程	",},{
"name": "	微电子科学与工程(注:可授工学或理学学士学位)	",},{
"name": "	光电信息科学与工程(注:可授工学或理学学士学位)	",},{
"name": "	信息工程	",},{
"name": "	广播电视工程	",},{
"name": "	水声工程	",},{
"name": "	电子封装技术	",},{
"name": "	集成电路设计与集成系统	",},{
"name": "	医学信息工程	",},{
"name": "	电磁场与无线技术	",},{
"name": "	电波传播与天线	",},{
"name": "	电子信息科学与技术(注:可授工学或理学学士学位)	",},{
"name": "	电信工程及管理	",},{
"name": "	应用电子技术教育	",}]
}, {
        "name": "自动化类",
         "children": [{
"name": "	自动化	",},{
"name": "	轨道交通信号与控制	",}]
}, {
        "name": "计算机类",
         "children": [{"name": "	计算机科学与技术(注:可授工学或理学学士学位)	",},{
"name": "	软件工程	",},{
"name": "	网络工程	",},{
"name": "	智能科学与技术	",},{
"name": "	空间信息与数字技术	",},{
"name": "	电子与计算机工程	",},{
"name": "	信息安全(注:可授工学或理学或管理学学士学位)	",},{
"name": "	物联网工程	",},{
    "name": "	数字媒体技术	",}]
}, {
        "name": "土木类",
         "children": [{"name": "	土木工程	",},{
"name": "	城市地下空间工程	",},{
"name": "	道路桥梁与渡河工程	",},{
"name": "	建筑环境与能源应用工程	",},{
"name": "	给排水科学与工程	",},{
"name": "	建筑电气与智能化	",},{
"name": "	水利水电工程	",},{
"name": "	水务工程	",},{
"name": "	水文与水资源工程	",},{
"name": "	港口航道与海岸工程	",}]
}, {
        "name": "水利类",
         "children": [{
"name": "	水利水电工程	",},{
"name": "	水务工程	",},{
"name": "	水文与水资源工程	",},{
"name": "	港口航道与海岸工程	",}]
}, {
        "name": "测绘类",
         "children": [{
"name": "	测绘工程	",},{
"name": "	遥感科学与技术	",},{
"name": "	导航工程	",},{
"name": "	地理国情监测	",}]
}, {
        "name": "化工与制药类",
         "children": [{"name": "	化学工程与工艺	",},{
"name": "	资源循环科学与工程	",},{
"name": "	能源化学工程	",},{
"name": "	化学工程与工业生物工程	",},{
"name": "	制药工程	",}]
}, {
        "name": "地质类",
         "children": [{
"name": "	地质工程	",},{
"name": "	地下水科学与工程	",},{
"name": "	勘查技术与工程	",},{
"name": "	资源勘查工程	",}]
}, {
        "name": "矿业类",
         "children": [{
             "name": "	采矿工程	",},{
"name": "	矿物资源工程	",},{
"name": "	海洋油气工程	",},{
"name": "	石油工程	",},{
"name": "	矿物加工工程	",},{
"name": "	油气储运工程	",}]

}, {
        "name": "纺织类",
         "children": [{"name": "	纺织工程	",},{
"name": "	非织造材料与工程	",},{
"name": "	服装设计与工艺教育	",},{
"name": "	服装设计与工程",}]

}, {
        "name": "轻工类",
         "children": [{"name": "	轻化工程	",},{
"name": "	包装工程	",},{
"name": "	印刷工程	",}]

}, {
        "name": "交通运输类",
         "children": [{"name": "	交通运输	",},{
"name": "	交通工程	",},{
"name": "	交通设备与控制工程	",},{
"name": "	救助与打捞工程	",},{
"name": "	船舶电子电气工程	",},{
"name": "	航海技术	",},{
"name": "	轮机工程	",},{
"name": "	飞行技术	",}]

}, {
        "name": "海洋工程类",
         "children": [{"name": "	船舶与海洋工程	",},{
"name": "	海洋工程与技术	",},{
"name": "	海洋资源开发技术	",}]
}, {
        "name": "航空航天类",
         "children": [{"name": "	航空航天工程	",},{
"name": "	飞行器质量与可靠性	",},{
"name": "	飞行器适航技术	",},{
"name": "	飞行器设计与工程	",},{
"name": "	飞行器制造工程	",},{
"name": "	飞行器动力工程	",},{
"name": "	飞行器环境与生命保障工程	",}]


}, {
        "name": "兵器类",
         "children": [{"name": "	武器系统与工程	",},{
"name": "	武器发射工程	",},{
"name": "	探测制导与控制技术	",},{
"name": "	弹药工程与爆炸技术	",},{
"name": "	特种能源技术与工程	",},{
"name": "	装甲车辆工程	",},{
"name": "	信息对抗技术	",}]

}, {
        "name": "核工程类",
         "children": [{"name": "	核工程与核技术	",},{
"name": "	辐射防护与核安全	",},{
"name": "	工程物理	",},{
"name": "	核化工与核燃料工程	",}]

}, {
        "name": "农业工程类",
         "children": [{"name": "	农业工程	",},{
"name": "	农业机械化及其自动化	",},{
"name": "	农业电气化	",},{
"name": "	农业建筑环境与能源工程	",},{
"name": "	农业水利工程	",}]

}, {
        "name": "林业工程类",
         "children": [{"name": "	森林工程	",},{
"name": "	木材科学与工程	",},{
"name": "	林产化工	",}]
             
 }, {
        "name": "环境科学与工程类",
         "children": [{"name": "	环境科学与工程	",},{
"name": "	环保设备工程	",},{
"name": "	资源环境科学(注:可授工学或理学学士学位)	",},{
"name": "	水质科学与技术	",},{
"name": "	环境工程	",},{
"name": "	环境科学(注:可授工学或理学学士学位)	",},{
"name": "	环境生态工程	",}]
 
 }, {
        "name": "生物医学与工程类",
         "children": [{"name": "	生物医学工程(注:可授工学或理学学士学位)	",},{
"name": "	假肢矫形工程	",}]
             
         }, {
        "name": "食品科学与工程类",
         "children": [{  "name": "	食品科学与工程(注:可授工学或农学学士学位)	",},{
"name": "	葡萄与葡萄酒工程	",},{
"name": "	食品营养与检验教育	",},{
"name": "	烹饪与营养教育	",},{
"name": "	食品质量与安全	",},{
"name": "	粮食工程	",},{
"name": "	乳品工程	",},{
"name": "	酿酒工程	", }]
}]

}, {
        "name": "医学",
        "children": [{
            "name": "临床医药系",
          "children": [{ "name": "	临床医学	",},{
"name": "	麻醉学	",},{
"name": "	医学影像学	",},{
"name": "	眼视光医学	",},{
"name": "	精神医学	",},{
"name": "	放射医学	",}]
}, {
        "name": "公共卫生与预防医药类",
         "children": [{"name": "	公共卫生与预防医学类	",},{
"name": "	公共卫生与预防医学类	",},{
"name": "	公共卫生与预防医学类	",},{
"name": "	公共卫生与预防医学类	",},{
"name": "	公共卫生与预防医学类	",}]
}, {
        "name": "口腔医学类",
         "children": [{"name": "	口腔医学	",}]

}, {
        "name": "口腔医学类",
         "children": [{"name": "......",}]
}]
}, {
        "name": "管理学",
        "children": [{
            "name": "工商管理类",
          "children": [{"name": "	劳动关系	",},{
"name": "	体育经济与管理	",},{
"name": "	财务会计教育	",},{
"name": "	市场营销教育	",}]
}, {
        "name": "公共管理类",
         "children": [{"name": "	海关管理	",},{
"name": "	交通管理(注:可授管理学或工学学士学位)	",},{
"name": "	海事管理	",},{
"name": "	海关管理	",},{
"name": "	交通管理(注:可授管理学或工学学士学位)	",},{
"name": "	海事管理	",},{
"name": "	公共关系学	",},{
"name": "	公共关系学	",}]
}]
}, {
        "name": "艺术学",
        "children": [{
            "name": "音乐与舞蹈学类",
          "children": [{"name": "	音乐表演	",},{
"name": "	音乐学	",},{
"name": "	作曲与作曲技术理论	",},{
"name": "	舞蹈表演	",},{
"name": "	舞蹈学	",},{
"name": "	舞蹈编导	",}]

}, {
        "name": "戏剧与影视学类类",
         "children": [{"name": "	表演	",},{
"name": "	戏剧学	",},{
"name": "	电影学	",},{
"name": "	戏剧影视文学	",},{
"name": "	广播电视编导	",},{
"name": "	戏剧影视导演	",},{
"name": "	戏剧影视美术设计	",},{
"name": "	录音艺术	",},{
"name": "	播音与主持艺术	",},{
"name": "	影视摄影与制作	",},{
"name": "	动画	",}]
}]
}]
};

var data2 = {
    "name": "flare",
    "children": [{
        "name": "flex",
        "children": [{
            "name": "FlareVis",
            "value": 4116
        }]
    }, {
        "name": "scale",
        "children": [{
            "name": "IScaleMap",
            "value": 2105
        }, {
            "name": "LinearScale",
            "value": 1316
        }, {
            "name": "LogScale",
            "value": 3151
        }, {
            "name": "OrdinalScale",
            "value": 3770
        }, {
            "name": "QuantileScale",
            "value": 2435
        }, {
            "name": "QuantitativeScale",
            "value": 4839
        }, {
            "name": "RootScale",
            "value": 1756
        }, {
            "name": "Scale",
            "value": 4268
        }, {
            "name": "ScaleType",
            "value": 1821
        }, {
            "name": "TimeScale",
            "value": 5833
        }]
    }, {
        "name": "display",
        "children": [{
            "name": "DirtySprite",
            "value": 8833
        }]
    }]
};

myChart.hideLoading();

myChart.setOption(option = {
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
    },
    legend: {
        top: '2%',
        left: '3%',
        orient: 'vertical',
        data: [{
            name: 'tree1',
            icon: 'rectangle'
        }, {
            name: 'tree2',
            icon: 'rectangle'
        }],
        borderColor: '#c23531'
    },
    series: [{
        type: 'tree',

        initialTreeDepth: -1,

        name: 'tree1',

        data: [data1],

        top: '5%',
        left: '7%',
        bottom: '2%',
        right: '10%',

        symbolSize: 10,

        label: {
            normal: {
                position: 'left',
                verticalAlign: 'middle',
                align: 'right',
                color:'black'
            }
        },
        
        leaves: {
            label: {
                normal: {
                    position: 'right',
                    verticalAlign: 'middle',
                    align: 'left',
                }
            },
            itemStyle:{
            normal:{
                color: {
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.5,
                    colorStops: [{
                        offset: 0, color: 'red' // 0% 处的颜色
                    }, {
                        offset: 1, color: 'blue' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                }
            }
        },
        },

        expandAndCollapse: true,

        animationDuration: 550,
        animationDurationUpdate: 750

    }]
});