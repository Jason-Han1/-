option = {
    "color": [
        "#ff6666",
        "#ffe966",
        "#92ff66",
        "#66ffbd",
        "#66bdff",
        "#9266ff",
        "#ff66e9"
    ],
    title: {
        text: 'RimWorld 研究项目'
    },
    tooltip: {},

    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        type: 'graph',
        layout: 'none',
        focusNodeAdjacency: true,
        symbol: 'rect',
        symbolSize: [100, 32],
        roam: true,
        label: {
            normal: {
                show: true
            }
        },
        //edgeSymbol: ['rectangle', 'arrow'],
        edgeSymbolSize: [4, 20],
        edgeLabel: {
            normal: {
                textStyle: {
                    fontSize: 20
                }
            }
        },


        "data": [{
            "defName": "Pemmican",
            "name": "干肉饼",
            "x": 0.0,
            "y": 0.0,
            "category": "石器时代",
            "itemStyle": {
                "normal": {
                    "color": "#92ff66"
                }
            },
            "tooltip": {
                "formatter": "干肉饼<br/><br/>（部落开局科技）<br/>解锁制作「干肉饼」，由肉食和素食混合制成，保质期很长。居家旅<br/>行必备。<br/><br/>项目科技等级：石器时代<br/>工作量：500<br/><br/>解锁配方：制作干肉饼、制作干肉饼<br/>"
            }
        }, {
            "defName": "PassiveCooler",
            "name": "蒸发制冷器",
            "x": 0.0,
            "y": 1.0,
            "category": "石器时代",
            "itemStyle": {
                "normal": {
                    "color": "#92ff66"
                }
            },
            "tooltip": {
                "formatter": "蒸发制冷器<br/><br/>（部落开局科技）<br/>允许殖民者建造「蒸发制冷器」，一种不需要通电即可降温的工具。<br/><br/>项目科技等级：石器时代<br/>工作量：400<br/><br/>解锁建筑：蒸发制冷器<br/>"
            }
        }, {
            "defName": "Devilstrand",
            "name": "恶魔菇",
            "x": 0.0,
            "y": 2.0,
            "category": "石器时代",
            "itemStyle": {
                "normal": {
                    "color": "#92ff66"
                }
            },
            "tooltip": {
                "formatter": "恶魔菇<br/><br/>解锁种植「恶魔菇」，一种生长非常缓慢的蘑菇，可提取得到贵重的<br/>织物：魔菇布。<br/><br/>项目科技等级：石器时代<br/>工作量：500<br/><br/>解锁植物：恶魔菇<br/>"
            }
        }, {
            "defName": "Brewing",
            "name": "酿酒",
            "x": 0.0,
            "y": 3.0,
            "category": "石器时代",
            "itemStyle": {
                "normal": {
                    "color": "#92ff66"
                }
            },
            "tooltip": {
                "formatter": "酿酒<br/><br/>解锁建造「酿造台」。将啤酒花酿成美味的啤酒。<br/><br/>项目科技等级：石器时代<br/>工作量：700<br/><br/>解锁建筑：酿造台、发酵桶<br/>"
            }
        }, {
            "defName": "CarpetMaking",
            "name": "地毯铺设",
            "x": 1.0,
            "y": 4.0,
            "category": "中世纪",
            "itemStyle": {
                "normal": {
                    "color": "#66ffbd"
                }
            },
            "tooltip": {
                "formatter": "地毯铺设<br/><br/>解锁建造「地毯」，用来提升居住环境的品质。<br/><br/>项目科技等级：中世纪<br/>工作量：1200<br/><br/>解锁地面：红地毯、绿地毯、蓝地毯、奶油地毯、深灰地毯<br/>"
            }
        }, {
            "defName": "Smithing",
            "name": "锻造",
            "x": 1.0,
            "y": 5.0,
            "category": "中世纪",
            "itemStyle": {
                "normal": {
                    "color": "#66ffbd"
                }
            },
            "tooltip": {
                "formatter": "锻造<br/><br/>解锁建造「锻造台」，将金属打造成武器和工具。<br/><br/>项目科技等级：中世纪<br/>工作量：700<br/><br/>解锁建筑：锻造台 （燃料）、锻造台 （电力）<br/>"
            }
        }, {
            "defName": "Stonecutting",
            "name": "岩石切割",
            "x": 0.0,
            "y": 5.0,
            "category": "中世纪",
            "itemStyle": {
                "normal": {
                    "color": "#66ffbd"
                }
            },
            "tooltip": {
                "formatter": "岩石切割<br/><br/>（殖民地开局科技）<br/>解锁建造「切石桌」，将岩石堆切成可用的石块。<br/><br/>项目科技等级：中世纪<br/>工作量：300<br/><br/>解锁建筑：切石桌<br/>"
            }
        }, {
            "defName": "ComplexClothing",
            "name": "复杂衣物",
            "x": 0.0,
            "y": 4.0,
            "category": "中世纪",
            "itemStyle": {
                "normal": {
                    "color": "#66ffbd"
                }
            },
            "tooltip": {
                "formatter": "复杂衣物<br/><br/>（殖民地开局科技）<br/>缝制复杂的服饰，比如裤子、防尘大衣、牛仔帽等。<br/><br/>项目科技等级：中世纪<br/>工作量：500<br/><br/>解锁建筑：裁缝台 （手工）、裁缝台 （电动）<br/>解锁配方：缝制牛仔帽、缝制圆顶礼帽、缝制裤子、缝制衬衫、缝制<br/>防尘大衣、制作防弹背心<br/>"
            }
        }, {
            "defName": "DrugProduction",
            "name": "成瘾品生产",
            "x": 1.0,
            "y": 0.0,
            "category": "工业时代",
            "itemStyle": {
                "normal": {
                    "color": "#66bdff"
                }
            },
            "tooltip": {
                "formatter": "成瘾品生产<br/><br/>成瘾品制备与合成的基础技术。允许建造药物实验台。需要进一步研<br/>究以制作特定的成瘾品。<br/><br/>项目科技等级：工业时代<br/>工作量：500<br/><br/>解锁建筑：药物实验台<br/>"
            }
        }, {
            "defName": "Electricity",
            "name": "电力",
            "x": 3.0,
            "y": 2.5,
            "category": "工业时代",
            "itemStyle": {
                "normal": {
                    "color": "#66bdff"
                }
            },
            "tooltip": {
                "formatter": "电力<br/><br/>（殖民地开局科技）<br/>研究如何发电，并将电力用于烹饪和其他简单的作业。<br/><br/>项目科技等级：工业时代<br/>工作量：1200<br/><br/>解锁建筑：落地灯、落地灯（红）、落地灯（绿）、落地灯（蓝）、<br/>太阳灯、电缆、电力开关、火力发电机、太阳能板、风力发电机、裁<br/>缝台 （电动）、炉灶（电力）、加热器<br/>"
            }
        }, {
            "defName": "PsychiteRefining",
            "name": "精神药物提炼",
            "x": 2.0,
            "y": 0.5,
            "category": "工业时代",
            "itemStyle": {
                "normal": {
                    "color": "#66bdff"
                }
            },
            "tooltip": {
                "formatter": "精神药物提炼<br/><br/>允许殖民者对精神叶进行精炼，制作「薄片」和「呀呦粉」。<br/><br/>项目科技等级：工业时代<br/>工作量：400<br/>前置研究：成瘾品生产<br/><br/>解锁配方：制作薄片、制作呀呦粉<br/>"
            }
        }, {
            "defName": "WakeUpProduction",
            "name": "清醒丸制作",
            "x": 2.0,
            "y": 1.25,
            "category": "工业时代",
            "itemStyle": {
                "normal": {
                    "color": "#66bdff"
                }
            },
            "tooltip": {
                "formatter": "清醒丸制作<br/><br/>学会制作「清醒丸」，清醒丸可以延长殖民者的工作时间，使其忘却<br/>疲劳，但是带有一些副作用。<br/><br/>项目科技等级：工业时代<br/>工作量：600<br/>前置研究：成瘾品生产<br/><br/>解锁配方：制作清醒丸<br/>"
            }
        }, {
            "defName": "GoJuiceProduction",
            "name": "活力水制作",
            "x": 2.0,
            "y": 2.0,
            "category": "工业时代",
            "itemStyle": {
                "normal": {
                    "color": "#66bdff"
                }
            },
            "tooltip": {
                "formatter": "活力水制作<br/><br/>学会制作这种名为「活力水」的合成的战斗增强兴奋剂。<br/><br/>项目科技等级：工业时代<br/>工作量：1000<br/>前置研究：成瘾品生产<br/><br/>解锁配方：制作活力水<br/>"
            }
        }, {
            "defName": "PenoxycylineProduction",
            "name": "佩诺西林制作",
            "x": 2.0,
            "y": 2.75,
            "category": "工业时代",
            "itemStyle": {
                "normal": {
                    "color": "#66bdff"
                }
            },
            "tooltip": {
                "formatter": "佩诺西林制作<br/><br/>学会制作「佩诺西林」，一种疾病防治药物。<br/><br/>项目科技等级：工业时代<br/>工作量：500<br/>前置研究：成瘾品生产<br/><br/>解锁配方：制作佩诺西林<br/>"
            }
        }, {
            "defName": "Batteries",
            "name": "蓄电池",
            "x": 4.0,
            "y": 1.25,
            "category": "工业时代",
            "itemStyle": {
                "normal": {
                    "color": "#66bdff"
                }
            },
            "tooltip": {
                "formatter": "蓄电池<br/><br/>（殖民地开局科技）<br/>解锁建造「蓄电池」以储存电力。<br/><br/>项目科技等级：工业时代<br/>工作量：400<br/>前置研究：电力<br/><br/>解锁建筑：蓄电池<br/>"
            }
        }, {
            "defName": "Refining",
            "name": "精炼",
            "x": 4.0,
            "y": 4.0,
            "category": "工业时代",
            "itemStyle": {
                "normal": {
                    "color": "#66bdff"
                }
            },
            "tooltip": {
                "formatter": "精炼<br/><br/>建造精炼设备用于从木材提炼「化合燃料」。<br/><br/>项目科技等级：工业时代<br/>工作量：1200<br/>前置研究：电力<br/><br/>解锁建筑：精炼设备<br/>"
            }
        }, {
            "defName": "NutrientPaste",
            "name": "营养膏合成机",
            "x": 5.0,
            "y": 0.5,
            "category": "工业时代",
            "itemStyle": {
                "normal": {
                    "color": "#66bdff"
                }
            },
            "tooltip": {
                "formatter": "营养膏合成机<br/><br/>（殖民地开局科技）<br/>解锁建造「营养膏合成机」，能自动将生食高效地合成为营养膏。用<br/>于应对食物短缺。<br/><br/>项目科技等级：工业时代<br/>工作量：600<br/>前置研究：电力<br/><br/>解锁建筑：营养膏合成机<br/>"
            }
        }, {
            "defName": "SolarPanels",
            "name": "太阳能板",
            "x": 4.0,
            "y": 2.0,
            "category": "工业时代",
            "itemStyle": {
                "normal": {
                    "color": "#66bdff"
                }
            },
            "tooltip": {
                "formatter": "太阳能板<br/><br/>（殖民地开局科技）<br/>解锁建造「太阳能板」，用于发电。<br/><br/>项目科技等级：工业时代<br/>工作量：600<br/>前置研究：电力<br/><br/>解锁建筑：太阳能板<br/>"
            }
        }, {
            "defName": "AirConditioning",
            "name": "空调",
            "x": 4.0,
            "y": 3.0,
            "category": "工业时代",
            "itemStyle": {
                "normal": {
                    "color": "#66bdff"
                }
            },
            "tooltip": {
                "formatter": "空调<br/><br/>（殖民地开局科技）<br/>解锁建造空调，炎热时给房间降温，或维持冷冻库的低温。<br/><br/>项目科技等级：工业时代<br/>工作量：600<br/>前置研究：电力<br/><br/>解锁建筑：制冷机<br/>"
            }
        }, {
            "defName": "Autodoors",
            "name": "自动门",
            "x": 5.0,
            "y": 3.0,
            "category": "工业时代",
            "itemStyle": {
                "normal": {
                    "color": "#66bdff"
                }
            },
            "tooltip": {
                "formatter": "自动门<br/><br/>解锁建造「自动门」，人通过时不会被减速。<br/><br/>项目科技等级：工业时代<br/>工作量：400<br/>前置研究：电力<br/><br/>解锁建筑：自动门<br/>"
            }
        }, {
            "defName": "Hydroponics",
            "name": "水栽培",
            "x": 4.0,
            "y": 0.5,
            "category": "工业时代",
            "itemStyle": {
                "normal": {
                    "color": "#66bdff"
                }
            },
            "tooltip": {
                "formatter": "水栽培<br/><br/>解锁建造「水栽培植物盆」，在室内快速种植作物，不受土壤贫瘠和<br/>室外天气的影响。<br/><br/>项目科技等级：工业时代<br/>工作量：700<br/>前置研究：电力<br/><br/>解锁建筑：水栽培植物盆<br/>"
            }
        }, {
            "defName": "ElectricSmelting",
            "name": "电力熔炼",
            "x": 5.0,
            "y": 1.25,
            "category": "工业时代",
            "itemStyle": {
                "normal": {
                    "color": "#66bdff"
                }
            },
            "tooltip": {
                "formatter": "电力熔炼<br/><br/>解锁建造「电力锻造台」和「电熔炼器」。<br/><br/>电力锻造台不需要燃料。电熔炼器用高温和强磁从钢块渣和其他物品<br/>中提炼有用的金属。<br/><br/>项目科技等级：工业时代<br/>工作量：1700<br/>前置研究：电力<br/><br/>解锁建筑：锻造台 （电力）、电熔炼器<br/>"
            }
        }, {
            "defName": "PackagedSurvivalMeal",
            "name": "包装生存食品",
            "x": 6.0,
            "y": 0.5,
            "category": "工业时代",
            "itemStyle": {
                "normal": {
                    "color": "#66bdff"
                }
            },
            "tooltip": {
                "formatter": "包装生存食品<br/><br/>解锁生产「包装生存食品」，密封储存且不会变质的食品。非常适合<br/>用于旅行中。<br/><br/>项目科技等级：工业时代<br/>工作量：2000<br/>前置研究：营养膏合成机<br/><br/>解锁配方：烹饪包装生存食品<br/>"
            }
        }, {
            "defName": "ElectricCremation",
            "name": "电力火化炉",
            "x": 6.0,
            "y": 1.25,
            "category": "工业时代",
            "itemStyle": {
                "normal": {
                    "color": "#66bdff"
                }
            },
            "tooltip": {
                "formatter": "电力火化炉<br/><br/>解锁建造「电力火化炉」，可焚烧尸体和无用的衣物。<br/><br/>项目科技等级：工业时代<br/>工作量：500<br/>前置研究：电力熔炼<br/><br/>解锁建筑：电力火化炉<br/>"
            }
        }, {
            "defName": "ColoredLights",
            "name": "彩色灯",
            "x": 5.0,
            "y": 2.0,
            "category": "工业时代",
            "itemStyle": {
                "normal": {
                    "color": "#66bdff"
                }
            },
            "tooltip": {
                "formatter": "彩色灯<br/><br/>解锁建造装饰性的彩色落地灯。<br/><br/>项目科技等级：工业时代<br/>工作量：500<br/>前置研究：电力<br/><br/>解锁建筑：落地灯（红）、落地灯（绿）、落地灯（蓝）<br/>"
            }
        }, {
            "defName": "Machining",
            "name": "机械加工",
            "x": 4.0,
            "y": 5.0,
            "category": "工业时代",
            "itemStyle": {
                "normal": {
                    "color": "#66bdff"
                }
            },
            "tooltip": {
                "formatter": "机械加工<br/><br/>解锁建造「机械加工台」，用于制作枪支和机械，或者拆解死亡的机<br/>械体获得高级的材料。<br/><br/>项目科技等级：工业时代<br/>工作量：1500<br/>前置研究：电力、锻造<br/><br/>解锁建筑：机械加工台<br/>"
            }
        }, {
            "defName": "IEDBomb",
            "name": "爆炸陷阱",
            "x": 6.0,
            "y": 4.0,
            "category": "工业时代",
            "itemStyle": {
                "normal": {
                    "color": "#66bdff"
                }
            },
            "tooltip": {
                "formatter": "爆炸陷阱<br/><br/>解锁建造「爆炸陷阱」，以迫击炮炮弹为材料制作的简易爆炸装置。<br/><br/>项目科技等级：工业时代<br/>工作量：1600<br/>前置研究：电力<br/><br/>解锁建筑：自制炸弹陷阱<br/>"
            }
        }, {
            "defName": "IEDIncendiary",
            "name": "燃烧陷阱",
            "x": 6.0,
            "y": 5.0,
            "category": "工业时代",
            "itemStyle": {
                "normal": {
                    "color": "#66bdff"
                }
            },
            "tooltip": {
                "formatter": "燃烧陷阱<br/><br/>解锁建造「燃烧陷阱」，以迫击炮炮弹为材料制作的简易燃烧爆炸装<br/>置。<br/><br/>项目科技等级：工业时代<br/>工作量：1600<br/>前置研究：电力<br/><br/>解锁建筑：自制燃烧陷阱<br/>"
            }
        }, {
            "defName": "Mortars",
            "name": "迫击炮",
            "x": 5.0,
            "y": 5.0,
            "category": "工业时代",
            "itemStyle": {
                "normal": {
                    "color": "#66bdff"
                }
            },
            "tooltip": {
                "formatter": "迫击炮<br/><br/>解锁建造「迫击炮」，可越过墙抛射炮弹，射程非常远。<br/><br/>项目科技等级：工业时代<br/>工作量：2000<br/>前置研究：机械加工<br/><br/>解锁建筑：迫击炮 （高爆）、迫击炮 （燃烧）、迫击炮 （EM<br/>P）<br/>"
            }
        }, {
            "defName": "SmokepopBelt",
            "name": "烟罐腰带",
            "x": 5.0,
            "y": 4.0,
            "category": "工业时代",
            "itemStyle": {
                "normal": {
                    "color": "#66bdff"
                }
            },
            "tooltip": {
                "formatter": "烟罐腰带<br/><br/>解锁制作「烟罐腰带」，可提供自动防御烟幕。<br/><br/>项目科技等级：工业时代<br/>工作量：1000<br/>前置研究：机械加工、精炼<br/><br/>解锁配方：制作烟罐腰带<br/>"
            }
        }, {
            "defName": "MicroelectronicsBasics",
            "name": "微电子基础",
            "x": 6.0,
            "y": 2.5,
            "category": "工业时代",
            "itemStyle": {
                "normal": {
                    "color": "#66bdff"
                }
            },
            "tooltip": {
                "formatter": "微电子基础<br/><br/>用精密复杂的电子进行工作的基础。解锁建造「高级研究台」、「通<br/>讯台」，以及其他研究项目，比如「显像管电视」、「低温休眠舱」<br/>。<br/><br/>项目科技等级：工业时代<br/>工作量：700<br/>前置研究：电力<br/><br/>解锁建筑：轨道交易信标、通讯台、高级研究台<br/>"
            }
        }, {
            "defName": "TubeTelevision",
            "name": "显像管电视",
            "x": 7.0,
            "y": 5.0,
            "category": "工业时代",
            "itemStyle": {
                "normal": {
                    "color": "#66bdff"
                }
            },
            "tooltip": {
                "formatter": "显像管电视<br/><br/>解锁建造「显像管电视」。<br/><br/>项目科技等级：工业时代<br/>工作量：800<br/>前置研究：微电子基础<br/><br/>解锁建筑：显像管电视<br/>"
            }
        }, {
            "defName": "GunTurrets",
            "name": "自动机枪塔",
            "x": 8.0,
            "y": 5.0,
            "category": "工业时代",
            "itemStyle": {
                "normal": {
                    "color": "#66bdff"
                }
            },
            "tooltip": {
                "formatter": "自动机枪塔<br/><br/>解锁建造「自动机枪塔」。<br/><br/>项目科技等级：工业时代<br/>工作量：800<br/>前置研究：微电子基础<br/><br/>解锁建筑：简易无人机枪<br/>"
            }
        }, {
            "defName": "Firefoam",
            "name": "泡沫灭火器",
            "x": 7.0,
            "y": 4.0,
            "category": "工业时代",
            "itemStyle": {
                "normal": {
                    "color": "#66bdff"
                }
            },
            "tooltip": {
                "formatter": "泡沫灭火器<br/><br/>解锁建造「泡沫灭火器」，一种消防设备，感应到火焰时喷出大量的<br/>能扑灭火灾的泡沫。<br/><br/>项目科技等级：工业时代<br/>工作量：800<br/>需要研究台：高级研究台<br/>前置研究：微电子基础<br/><br/>解锁建筑：泡沫灭火器<br/>"
            }
        }, {
            "defName": "MoisturePump",
            "name": "排水泵",
            "x": 8.0,
            "y": 3.0,
            "category": "工业时代",
            "itemStyle": {
                "normal": {
                    "color": "#66bdff"
                }
            },
            "tooltip": {
                "formatter": "排水泵<br/><br/>解锁建造「排水泵」，一种能将潮湿土地变干的装置。<br/><br/>项目科技等级：工业时代<br/>工作量：1200<br/>需要研究台：高级研究台<br/>前置研究：微电子基础<br/><br/>解锁建筑：排水泵<br/>"
            }
        }, {
            "defName": "GeothermalPower",
            "name": "地热能",
            "x": 8.0,
            "y": 4.0,
            "category": "工业时代",
            "itemStyle": {
                "normal": {
                    "color": "#66bdff"
                }
            },
            "tooltip": {
                "formatter": "地热能<br/><br/>解锁建造「地热发电机」，建造在蒸汽间歇喷泉上，提供不间断的电<br/>力。<br/><br/>项目科技等级：工业时代<br/>工作量：1800<br/>需要研究台：高级研究台<br/>前置研究：微电子基础<br/><br/>解锁建筑：地热能发电机<br/>"
            }
        }, {
            "defName": "HospitalBed",
            "name": "医疗床",
            "x": 7.0,
            "y": 0.8,
            "category": "工业时代",
            "itemStyle": {
                "normal": {
                    "color": "#66bdff"
                }
            },
            "tooltip": {
                "formatter": "医疗床<br/><br/>解锁建造「医疗床」，提高医疗工作的质量和成功率。<br/><br/>项目科技等级：工业时代<br/>工作量：2000<br/>需要研究台：高级研究台<br/>前置研究：微电子基础<br/><br/>解锁建筑：医疗床<br/>"
            }
        }, {
            "defName": "TransportPod",
            "name": "运输舱",
            "x": 7.0,
            "y": 1.6,
            "category": "工业时代",
            "itemStyle": {
                "normal": {
                    "color": "#66bdff"
                }
            },
            "tooltip": {
                "formatter": "运输舱<br/><br/>建造可发射的「运输舱」，可以远距离发射你的人和物资越过行星表<br/>面。<br/><br/>项目科技等级：工业时代<br/>工作量：1100<br/>需要研究台：高级研究台<br/>前置研究：微电子基础<br/><br/>解锁建筑：运输舱发射器、运输舱<br/>"
            }
        }, {
            "defName": "MedicineProduction",
            "name": "医药生产",
            "x": 7.0,
            "y": 0.0,
            "category": "工业时代",
            "itemStyle": {
                "normal": {
                    "color": "#66bdff"
                }
            },
            "tooltip": {
                "formatter": "医药生产<br/><br/>将草药、中性胺和布制成「医药」。<br/><br/>项目科技等级：工业时代<br/>工作量：1500<br/>需要研究台：高级研究台<br/>前置研究：成瘾品生产、微电子基础<br/><br/>解锁配方：制作医药<br/>"
            }
        }, {
            "defName": "MultiAnalyzer",
            "name": "多元分析仪",
            "x": 8.0,
            "y": 2.0,
            "category": "工业时代",
            "itemStyle": {
                "normal": {
                    "color": "#66bdff"
                }
            },
            "tooltip": {
                "formatter": "多元分析仪<br/><br/>解锁建造「多元分析仪」，提高研究速度，以及解锁更高级的研究项<br/>目，必须建造在高级研究台旁。<br/><br/>项目科技等级：工业时代<br/>工作量：800<br/>需要研究台：高级研究台<br/>前置研究：微电子基础<br/><br/>解锁建筑：多元分析仪<br/>"
            }
        }, {
            "defName": "LongRangeMineralScanner",
            "name": "远距离矿物扫描仪",
            "x": 8.0,
            "y": 1.0,
            "category": "工业时代",
            "itemStyle": {
                "normal": {
                    "color": "#66bdff"
                }
            },
            "tooltip": {
                "formatter": "远距离矿物扫描仪<br/><br/>解锁建造「远距离矿物扫描仪」，可自动探测附近区域（非扫描仪所<br/>在区域）的稀有矿物，比如黄金或翡翠。<br/><br/>半径30格地图内，发现矿物块的频率为平均每30天一次。<br/><br/>在同一区域内或临近区域建造多于一个扫描仪对效率影响不大。<br/><br/>项目科技等级：工业时代<br/>工作量：700<br/>需要研究台：高级研究台<br/>前置研究：微电子基础<br/><br/>解锁建筑：远距离矿物扫描仪<br/>"
            }
        }, {
            "defName": "GroundPenetratingScanner",
            "name": "地质扫描仪",
            "x": 10.0,
            "y": 1.0,
            "category": "工业时代",
            "itemStyle": {
                "normal": {
                    "color": "#66bdff"
                }
            },
            "tooltip": {
                "formatter": "地质扫描仪<br/><br/>允许你建造「地质扫描仪」，来勘探可用深钻井开采的地底资源。<br/><br/>项目科技等级：工业时代<br/>工作量：7000<br/>需要研究台：高级研究台<br/>需要研究设施：多元分析仪<br/>前置研究：深钻井<br/><br/>解锁建筑：地质扫描仪<br/>"
            }
        }, {
            "defName": "DeepDrilling",
            "name": "深钻井",
            "x": 9.0,
            "y": 1.0,
            "category": "工业时代",
            "itemStyle": {
                "normal": {
                    "color": "#66bdff"
                }
            },
            "tooltip": {
                "formatter": "深钻井<br/><br/>允许你建造「深钻井」，来开采深埋在地表之下的资源。你必须先用<br/>地质扫描仪来进行勘探。<br/><br/>项目科技等级：工业时代<br/>工作量：1500<br/>需要研究台：高级研究台<br/>需要研究设施：多元分析仪<br/>前置研究：多元分析仪<br/><br/>解锁建筑：深钻井<br/>"
            }
        }, {
            "defName": "VitalsMonitor",
            "name": "生命体征监测仪",
            "x": 9.0,
            "y": 0.0,
            "category": "工业时代",
            "itemStyle": {
                "normal": {
                    "color": "#66bdff"
                }
            },
            "tooltip": {
                "formatter": "生命体征监测仪<br/><br/>解锁建造「生命体征监测仪」，将其放在医疗床旁，提高病人的治疗<br/>质量。<br/><br/>项目科技等级：工业时代<br/>工作量：1600<br/>需要研究台：高级研究台<br/>需要研究设施：多元分析仪<br/>前置研究：多元分析仪、医疗床<br/><br/>解锁建筑：生命体征监测仪<br/>"
            }
        }, {
            "defName": "ComponentAssembly",
            "name": "零部件装配",
            "x": 10.0,
            "y": 3.0,
            "category": "工业时代",
            "itemStyle": {
                "normal": {
                    "color": "#66bdff"
                }
            },
            "tooltip": {
                "formatter": "零部件装配<br/><br/>解锁建造「零部件装配台」，用于将简单的材料加工成零部件。<br/><br/>项目科技等级：工业时代<br/>工作量：3000<br/>需要研究台：高级研究台<br/>需要研究设施：多元分析仪<br/>前置研究：多元分析仪<br/><br/>解锁建筑：零部件装配台<br/>"
            }
        }, {
            "defName": "MultibarrelWeapons",
            "name": "多管武器",
            "x": 9.0,
            "y": 3.0,
            "category": "工业时代",
            "itemStyle": {
                "normal": {
                    "color": "#66bdff"
                }
            },
            "tooltip": {
                "formatter": "多管武器<br/><br/>解锁制作「速射机枪」。<br/><br/>项目科技等级：工业时代<br/>工作量：3000<br/>需要研究台：高级研究台<br/>需要研究设施：多元分析仪<br/>前置研究：多元分析仪<br/><br/>解锁配方：制作速射机枪<br/>"
            }
        }, {
            "defName": "Cryptosleep",
            "name": "低温休眠舱",
            "x": 10.0,
            "y": 4.0,
            "category": "太空时代",
            "itemStyle": {
                "normal": {
                    "color": "#9266ff"
                }
            },
            "tooltip": {
                "formatter": "低温休眠舱<br/><br/>解锁建造「低温休眠舱」，可使其内的生命体进入生理上的暂停状态<br/>。<br/><br/>项目科技等级：太空时代<br/>工作量：1100<br/>需要研究台：高级研究台<br/>需要研究设施：多元分析仪<br/>前置研究：多元分析仪<br/><br/>解锁建筑：低温休眠舱<br/>"
            }
        }, {
            "defName": "PoweredArmor",
            "name": "动力装甲",
            "x": 9.0,
            "y": 5.0,
            "category": "太空时代",
            "itemStyle": {
                "normal": {
                    "color": "#9266ff"
                }
            },
            "tooltip": {
                "formatter": "动力装甲<br/><br/>神经元机械和先进的玻璃钢加工技术，解锁制作「动力装甲」和「动<br/>力头盔」。<br/><br/>项目科技等级：太空时代<br/>工作量：1600<br/>需要研究台：高级研究台<br/>需要研究设施：多元分析仪<br/>前置研究：多元分析仪<br/><br/>解锁配方：制作动力头盔、制作动力装甲<br/>"
            }
        }, {
            "defName": "ShieldBelt",
            "name": "护盾腰带",
            "x": 10.0,
            "y": 5.0,
            "category": "太空时代",
            "itemStyle": {
                "normal": {
                    "color": "#9266ff"
                }
            },
            "tooltip": {
                "formatter": "护盾腰带<br/><br/>动能排斥立场技术让你能够制作「护盾腰带」，可阻挡远程攻击，包<br/>括从外向内和从内向外的。<br/><br/>项目科技等级：太空时代<br/>工作量：1500<br/>需要研究台：高级研究台<br/>需要研究设施：多元分析仪<br/>前置研究：多元分析仪<br/><br/>解锁配方：制作护盾腰带<br/>"
            }
        }, {
            "defName": "ChargedShot",
            "name": "电荷弹",
            "x": 9.0,
            "y": 4.0,
            "category": "太空时代",
            "itemStyle": {
                "normal": {
                    "color": "#9266ff"
                }
            },
            "tooltip": {
                "formatter": "电荷弹<br/><br/>研究采用脉冲充能的高能能量弹药的秘密。解锁制作「电荷步枪」。<br/><br/>项目科技等级：太空时代<br/>工作量：1500<br/>需要研究台：高级研究台<br/>需要研究设施：多元分析仪<br/>前置研究：多元分析仪<br/><br/>解锁配方：制作电荷步枪<br/>"
            }
        }, {
            "defName": "ShipBasics",
            "name": "飞船建造基础",
            "x": 11.0,
            "y": 2.0,
            "category": "太空时代",
            "itemStyle": {
                "normal": {
                    "color": "#9266ff"
                }
            },
            "tooltip": {
                "formatter": "飞船建造基础<br/><br/>解锁研究更多高级的飞船建造技术，最终能够建造出载人逃离这个星<br/>球的飞船。<br/><br/>项目科技等级：太空时代<br/>工作量：1000<br/>需要研究台：高级研究台<br/>需要研究设施：多元分析仪<br/>前置研究：多元分析仪<br/><br/>解锁建筑：飞船结构梁<br/>"
            }
        }, {
            "defName": "ShipCryptosleep",
            "name": "飞船低温休眠舱",
            "x": 12.0,
            "y": 4.0,
            "category": "太空时代",
            "itemStyle": {
                "normal": {
                    "color": "#9266ff"
                }
            },
            "tooltip": {
                "formatter": "飞船低温休眠舱<br/><br/>解锁建造「飞船低温休眠舱」，用于星际交通中殖民者休眠。<br/><br/>项目科技等级：太空时代<br/>工作量：1200<br/>需要研究台：高级研究台<br/>需要研究设施：多元分析仪<br/>前置研究：飞船建造基础、低温休眠舱<br/><br/>解锁建筑：飞船低温休眠舱<br/>"
            }
        }, {
            "defName": "ShipReactor",
            "name": "反物质飞船反应炉",
            "x": 12.0,
            "y": 1.0,
            "category": "太空时代",
            "itemStyle": {
                "normal": {
                    "color": "#9266ff"
                }
            },
            "tooltip": {
                "formatter": "反物质飞船反应炉<br/><br/>解锁使用反物质约束核心建造用于给飞船提供动力的反应炉。<br/><br/>项目科技等级：太空时代<br/>工作量：4000<br/>需要研究台：高级研究台<br/>需要研究设施：多元分析仪<br/>前置研究：飞船建造基础<br/><br/>解锁建筑：飞船反应炉<br/>"
            }
        }, {
            "defName": "ShipEngine",
            "name": "反物质飞船推进器",
            "x": 12.0,
            "y": 2.0,
            "category": "太空时代",
            "itemStyle": {
                "normal": {
                    "color": "#9266ff"
                }
            },
            "tooltip": {
                "formatter": "反物质飞船推进器<br/><br/>解锁建造「飞船推进器」。<br/><br/>项目科技等级：太空时代<br/>工作量：4000<br/>需要研究台：高级研究台<br/>需要研究设施：多元分析仪<br/>前置研究：飞船建造基础<br/><br/>解锁建筑：飞船推进器<br/>"
            }
        }, {
            "defName": "ShipComputerCore",
            "name": "飞船电脑核心",
            "x": 12.0,
            "y": 3.0,
            "category": "太空时代",
            "itemStyle": {
                "normal": {
                    "color": "#9266ff"
                }
            },
            "tooltip": {
                "formatter": "飞船电脑核心<br/><br/>解锁强制将现有的AI伪人格核心装入用于飞船导航的人工智能电脑<br/>核心中。<br/><br/>项目科技等级：太空时代<br/>工作量：2500<br/>需要研究台：高级研究台<br/>需要研究设施：多元分析仪<br/>前置研究：飞船建造基础<br/><br/>解锁建筑：飞船电脑核心<br/>"
            }
        }],
        "links": [{
            "source": "成瘾品生产",
            "target": "精神药物提炼"
        }, {
            "source": "成瘾品生产",
            "target": "清醒丸制作"
        }, {
            "source": "成瘾品生产",
            "target": "活力水制作"
        }, {
            "source": "成瘾品生产",
            "target": "佩诺西林制作"
        }, {
            "source": "电力",
            "target": "蓄电池"
        }, {
            "source": "电力",
            "target": "精炼"
        }, {
            "source": "电力",
            "target": "营养膏合成机"
        }, {
            "source": "电力",
            "target": "太阳能板"
        }, {
            "source": "电力",
            "target": "空调"
        }, {
            "source": "电力",
            "target": "自动门"
        }, {
            "source": "电力",
            "target": "水栽培"
        }, {
            "source": "电力",
            "target": "电力熔炼"
        }, {
            "source": "营养膏合成机",
            "target": "包装生存食品"
        }, {
            "source": "电力熔炼",
            "target": "电力火化炉"
        }, {
            "source": "电力",
            "target": "彩色灯"
        }, {
            "source": "电力",
            "target": "机械加工"
        }, {
            "source": "锻造",
            "target": "机械加工"
        }, {
            "source": "电力",
            "target": "爆炸陷阱"
        }, {
            "source": "电力",
            "target": "燃烧陷阱"
        }, {
            "source": "机械加工",
            "target": "迫击炮"
        }, {
            "source": "机械加工",
            "target": "烟罐腰带"
        }, {
            "source": "精炼",
            "target": "烟罐腰带"
        }, {
            "source": "电力",
            "target": "微电子基础"
        }, {
            "source": "微电子基础",
            "target": "显像管电视"
        }, {
            "source": "微电子基础",
            "target": "自动机枪塔"
        }, {
            "source": "微电子基础",
            "target": "泡沫灭火器"
        }, {
            "source": "微电子基础",
            "target": "排水泵"
        }, {
            "source": "微电子基础",
            "target": "地热能"
        }, {
            "source": "微电子基础",
            "target": "医疗床"
        }, {
            "source": "微电子基础",
            "target": "运输舱"
        }, {
            "source": "成瘾品生产",
            "target": "医药生产"
        }, {
            "source": "微电子基础",
            "target": "医药生产"
        }, {
            "source": "微电子基础",
            "target": "多元分析仪"
        }, {
            "source": "微电子基础",
            "target": "远距离矿物扫描仪"
        }, {
            "source": "深钻井",
            "target": "地质扫描仪"
        }, {
            "source": "多元分析仪",
            "target": "深钻井"
        }, {
            "source": "多元分析仪",
            "target": "生命体征监测仪"
        }, {
            "source": "医疗床",
            "target": "生命体征监测仪"
        }, {
            "source": "多元分析仪",
            "target": "零部件装配"
        }, {
            "source": "多元分析仪",
            "target": "多管武器"
        }, {
            "source": "多元分析仪",
            "target": "低温休眠舱"
        }, {
            "source": "多元分析仪",
            "target": "动力装甲"
        }, {
            "source": "多元分析仪",
            "target": "护盾腰带"
        }, {
            "source": "多元分析仪",
            "target": "电荷弹"
        }, {
            "source": "多元分析仪",
            "target": "飞船建造基础"
        }, {
            "source": "飞船建造基础",
            "target": "飞船低温休眠舱"
        }, {
            "source": "低温休眠舱",
            "target": "飞船低温休眠舱"
        }, {
            "source": "飞船建造基础",
            "target": "反物质飞船反应炉"
        }, {
            "source": "飞船建造基础",
            "target": "反物质飞船推进器"
        }, {
            "source": "飞船建造基础",
            "target": "飞船电脑核心"
        }],
        "categories": [
            "茹毛饮血",
            "石器时代",
            "中世纪",
            "工业时代",
            "太空时代",
            "极致时代",
            "超凡时代"
        ],
        lineStyle: {
            normal: {
                opacity: 0.9,
                width: 2,
                curveness: 0
            }
        }
    }]
};