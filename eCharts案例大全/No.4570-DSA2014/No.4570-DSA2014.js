var uploadedDataURL = "/asset/get/s/data-1636104860449-B1ynFz1-B.json";






var bg = '<div class="bg-tooltip"></div>'

$.get(uploadedDataURL, function(as) {
    echarts.registerMap('map', as);
    option = {
        geo3D: {
            map: 'map',
            // label: {
            //     show: true,
            //     formatter: '{name}',
            //     position: 'top',
            //     textStyle: {
            //         color: '#000',
            //         backgroundColor: '#fff',
            //     }
            // },
            viewControl: {
                autoRotate: false,
                minDistance: 60,
                // maxBeta: 1080,
                // minBeta: -1080,
                rotateSensitivity: 0.4
            },
            light: {
                main: {
                    intensity: 1,
                    shadow: true,
                    shadowQuality: 'ultra',
                    alpha: 110,
                    beta: 50
                },
            },
            environment: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ // 配置为垂直渐变的背景
                offset: 0.4,
                color: 'skyblue' // 天空颜色           
            }, {
                offset: 0.7,
                color: 'yellow' // 地面颜色
            }, {
                offset: 1,
                color: 'yellow' // 地面颜色
            }], false),
            itemStyle: {
                borderColor: '#33d2ff',
                areaColor: '#629ef6',
                borderWidth: 2
            },
        },
        
        series: [{
            type: 'bar3D',
            barSize: 0.8,
            coordinateSystem: 'geo3D',
            bevelSize: 0.3,
            minHeight: 1,
                        tooltip: { //提示框的内容
                            formatter: function(data) {
                                return 'name:' + data.name + '<br />' + 'value:' + data.value[2];
                            }
                        },
            label: {
                show: false,
                formatter: '{b}',
                position: 'top',
                textStyle: {
                    color: '#000',
                    backgroundColor: '#fff',
                }
            },
            shading: 'lambert',
            data: [
                //     {
                //     "name": "子和",
                //     "value": [
                //         120.442229,
                //         29.682197,
                //         2
                //     ],
                //     itemStyle: {
                //         color: '#76b7b2',
                //         opacity: 1
                //     },

            //     },
            //     {
            //         "name": "上泉",
            //         "value": [
            //             120.440145,
            //             29.565447,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#FF8C00',
            //             opacity: 1
            //         },

            //     },
            //     {
            //         "name": "上英",
            //         "value": [
            //             120.495307,
            //             29.648212,
            //             3
            //         ],
            //         itemStyle: {
            //             color: '#7FFF00',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "五峰",
            //         "value": [
            //             120.414935,
            //             29.60711,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#76b7b2',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "小东",
            //         "value": [
            //             120.427061,
            //             29.539382,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#FF8C00',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "斯宅",
            //         "value": [
            //             120.447591,
            //             29.574684,
            //             2
            //         ],
            //         itemStyle: {
            //             color: '#FFF8DC',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "新东",
            //         "value": [
            //             120.364441,
            //             29.586369,
            //             2
            //         ],
            //         itemStyle: {
            //             color: '#e15759',
            //             opacity: 1
            //         },

            //     },
            //     {
            //         "name": "殿南",
            //         "value": [
            //             120.419422,
            //             29.556309,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#FF8C00',
            //             opacity: 1
            //         },

            //     },
            //     {
            //         "name": "湖山",
            //         "value": [
            //             120.430595,
            //             29.60341,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#FF8C00',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "琴察",
            //         "value": [
            //             120.443172,
            //             29.639815,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#FF8C00',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "里四",
            //         "value": [
            //             120.494432,
            //             29.554964,
            //             5
            //         ],
            //         itemStyle: {
            //             color: '#FF8C00',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "陈蔡",
            //         "value": [
            //             120.394797,
            //             29.589222,
            //             2
            //         ],
            //         itemStyle: {
            //             color: '#FFF8DC',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "雄踞",
            //         "value": [
            //             120.450124,
            //             29.626202,
            //             2
            //         ],
            //         itemStyle: {
            //             color: '#FFF8DC',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "泄峰",
            //         "value": [
            //             120.064748,
            //             29.702397,
            //             2
            //         ],
            //         itemStyle: {
            //             color: '#FFF8DC',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "西皇",
            //         "value": [
            //             120.069304,
            //             29.666177,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#76b7b2',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "丽坞底",
            //         "value": [
            //             120.087626,
            //             29.601715,
            //             2
            //         ],
            //         itemStyle: {
            //             color: '#4e79a7',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "南源",
            //         "value": [
            //             120.025502,
            //             29.587786,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#e15759',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "王沙溪",
            //         "value": [
            //             120.091009,
            //             29.568213,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#FF8C00',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "边村",
            //         "value": [
            //             120.05467,
            //             29.58937,
            //             2
            //         ],
            //         itemStyle: {
            //             color: '#FFF8DC',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "大地",
            //         "value": [
            //             120.061807,
            //             29.646441,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#76b7b2',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "桥头",
            //         "value": [
            //             120.078505,
            //             29.617631,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#76b7b2',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "青山",
            //         "value": [
            //             120.075838,
            //             29.654042,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#7FFF00',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "吴墅",
            //         "value": [
            //             120.308733,
            //             29.8297,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#4e79a7',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "山汀",
            //         "value": [
            //             120.28188,
            //             29.793408,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#FF8C00',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "江藻社区",
            //         "value": [
            //             120.325087,
            //             29.841082,
            //             3
            //         ],
            //         itemStyle: {
            //             color: '#FFD700',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "鱼江",
            //         "value": [
            //             120.259236,
            //             29.800889,
            //             2
            //         ],
            //         itemStyle: {
            //             color: '#FFF8DC',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "三联",
            //         "value": [
            //             120.109553,
            //             29.523142,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#FF8C00',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "丰江周",
            //         "value": [
            //             120.134832,
            //             29.573414,
            //             2
            //         ],
            //         itemStyle: {
            //             color: '#FFF8DC',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "宣何",
            //         "value": [
            //             120.152864,
            //             29.533575,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#FF8C00',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "新州",
            //         "value": [
            //             120.122639,
            //             29.548759,
            //             2
            //         ],
            //         itemStyle: {
            //             color: '#FFF8DC',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "球山",
            //         "value": [
            //             120.128542,
            //             29.539227,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#FF8C00',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "蔡家畈",
            //         "value": [
            //             120.140669,
            //             29.549244,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#FF8C00',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "广山",
            //         "value": [
            //             120.368796,
            //             29.870327,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#FF8C00',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "枫江",
            //         "value": [
            //             120.400882,
            //             29.849313,
            //             2
            //         ],
            //         itemStyle: {
            //             color: '#FFF8DC',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "沁湖",
            //         "value": [
            //             120.379174,
            //             29.82452,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#FF8C00',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "孚家湖",
            //         "value": [
            //             120.354237,
            //             29.429584,
            //             2
            //         ],
            //         itemStyle: {
            //             color: '#4e79a7',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "岭北周",
            //         "value": [
            //             120.312728,
            //             29.4005,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#FF8C00',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "岭顶",
            //         "value": [
            //             120.292491,
            //             29.396937,
            //             2
            //         ],
            //         itemStyle: {
            //             color: '#FFF8DC',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "水带",
            //         "value": [
            //             120.340182,
            //             29.436704,
            //             2
            //         ],
            //         itemStyle: {
            //             color: '#4e79a7',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "金山湖",
            //         "value": [
            //             120.307023,
            //             29.408096,
            //             2
            //         ],
            //         itemStyle: {
            //             color: '#4e79a7',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "丁徐",
            //         "value": [
            //             120.189905,
            //             29.847926,
            //             2
            //         ],
            //         itemStyle: {
            //             color: '#FFF8DC',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "云溪",
            //         "value": [
            //             120.188013,
            //             29.854376,
            //             2
            //         ],
            //         itemStyle: {
            //             color: '#4e79a7',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "五云",
            //         "value": [
            //             120.063877,
            //             29.811769,
            //             2
            //         ],
            //         itemStyle: {
            //             color: '#FFF8DC',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "伍堡畈",
            //         "value": [
            //             120.139405,
            //             29.802492,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#FF8C00',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "十二都",
            //         "value": [
            //             120.137249,
            //             29.782908,
            //             2
            //         ],
            //         itemStyle: {
            //             color: '#FFF8DC',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "双龙",
            //         "value": [
            //             120.158761,
            //             29.827104,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#76b7b2',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "巽坞",
            //         "value": [
            //             120.194274,
            //             29.863383,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#4e79a7',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "应店街",
            //         "value": [
            //             120.120631, 29.820393,
            //             2
            //         ],
            //         itemStyle: {
            //             color: '#4e79a7',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "杨家坞",
            //         "value": [
            //             120.160613,
            //             29.843606,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#FF8C00',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "板西",
            //         "value": [
            //             120.127077,
            //             29.835723,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#FF8C00',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "紫阆",
            //         "value": [
            //             120.074974,
            //             29.773421,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#FF8C00',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "诸阳",
            //         "value": [
            //             120.125751,
            //             29.809737,
            //             2
            //         ],
            //         itemStyle: {
            //             color: '#FFF8DC',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "包村",
            //         "value": [
            //             120.442599,
            //             29.889208,
            //             2
            //         ],
            //         itemStyle: {
            //             color: '#FFF8DC',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "凉风洞",
            //         "value": [
            //             120.178967,
            //             29.662503,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#76b7b2',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "凤仪",
            //         "value": [
            //             120.229705,
            //             29.619636,
            //             2
            //         ],
            //         itemStyle: {
            //             color: '#FFF8DC',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "新华",
            //         "value": [
            //             120.287161,
            //             29.597149,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#FF8C00',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "新南",
            //         "value": [
            //             120.205835,
            //             29.632836,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#FF8C00',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "新图",
            //         "value": [
            //             120.227277,
            //             29.602821,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#FF8C00',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "新胜",
            //         "value": [
            //             120.271015,
            //             29.587932,
            //             2
            //         ],
            //         itemStyle: {
            //             color: '#e15759',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "暨南",
            //         "value": [
            //             120.250318,
            //             29.662926,
            //             2
            //         ],
            //         itemStyle: {
            //             color: '#FFF8DC',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "沿山新村",
            //         "value": [
            //             120.181508,
            //             29.651406,
            //             2
            //         ],
            //         itemStyle: {
            //             color: '#FFF8DC',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "沿江新村",
            //         "value": [
            //             120.210785,
            //             29.639617,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#FF8C00',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "祝家",
            //         "value": [
            //             120.243238,
            //             29.650048,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#76b7b2',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "茅塘山",
            //         "value": [
            //             120.271797,
            //             29.625835,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#FF8C00',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "侣东",
            //         "value": [
            //             120.271912,
            //             29.751641,
            //             2
            //         ],
            //         itemStyle: {
            //             color: '#FFF8DC',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "同乐下村",
            //         "value": [
            //             120.282235,
            //             29.67886,
            //             3
            //         ],
            //         itemStyle: {
            //             color: '#FFD700',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "城南新村",
            //         "value": [
            //             120.228031,
            //             29.671565,
            //             2
            //         ],
            //         itemStyle: {
            //             color: '#76b7b2',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "孙家",
            //         "value": [
            //             120.257879,
            //             29.782405,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#FF8C00',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "朱公湖",
            //         "value": [
            //             120.242702,
            //             29.735902,
            //             2
            //         ],
            //         itemStyle: {
            //             color: '#FFF8DC',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "浣北社区",
            //         "value": [
            //             120.250972,
            //             29.728437,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#4e79a7',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "浦阳新村",
            //         "value": [
            //             120.251071,
            //             29.753336,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#FF8C00',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "艮塔社区",
            //         "value": [
            //             120.246673,
            //             29.723256,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#76b7b2',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "袁家",
            //         "value": [
            //             120.270234,
            //             29.744251,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#FF8C00',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "乐山",
            //         "value": [
            //             120.488011,
            //             29.82729,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#76b7b2',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "大溪",
            //         "value": [
            //             120.507959,
            //             29.850111,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#FF8C00',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "杜黄新村",
            //         "value": [
            //             120.406401,
            //             29.821999,
            //             2
            //         ],
            //         itemStyle: {
            //             color: '#4e79a7',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "阳春",
            //         "value": [
            //             120.387648,
            //             29.74834,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#4e79a7',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "霞朗桥",
            //         "value": [
            //             120.396306,
            //             29.800831,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#FF8C00',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "吕家",
            //         "value": [
            //             120.219965,
            //             29.888172,
            //             2
            //         ],
            //         itemStyle: {
            //             color: '#FFF8DC',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "新徐坞杨",
            //         "value": [
            //             120.14229,
            //             29.851838,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#76b7b2',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "次坞社区",
            //         "value": [
            //             120.162147,
            //             29.8916,
            //             2
            //         ],
            //         itemStyle: {
            //             color: '#76b7b2',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "里亭",
            //         "value": [
            //             120.269643,
            //             29.92171,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#FF8C00',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "火烧吴",
            //         "value": [
            //             120.354879,
            //             29.697227,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#FF8C00',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "盛兆坞一村",
            //         "value": [
            //             120.346632,
            //             29.789905,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#FF8C00',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "盛兆坞三村",
            //         "value": [
            //             120.333349,
            //             29.781753,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#FF8C00',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "詹徐王",
            //         "value": [
            //             120.342619,
            //             29.786858,
            //             2
            //         ],
            //         itemStyle: {
            //             color: '#FFF8DC',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "黄徐",
            //         "value": [
            //             120.345217,
            //             29.70358,
            //             2
            //         ],
            //         itemStyle: {
            //             color: '#4e79a7',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "五美",
            //         "value": [
            //             120.371061,
            //             29.610296,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#FF8C00',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "盘山",
            //         "value": [
            //             120.336312,
            //             29.620152,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#76b7b2',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "陶姚",
            //         "value": [
            //             120.314492,
            //             29.637992,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#FF8C00',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "盘山",
            //         "value": [
            //             120.336312,
            //             29.620152,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#76b7b2',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "三保里",
            //         "value": [
            //             120.196577,
            //             29.571535,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#FF8C00',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "兴埠",
            //         "value": [
            //             120.186011,
            //             29.625297,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#76b7b2',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "新升",
            //         "value": [
            //             120.145903,
            //             29.613088,
            //             2
            //         ],
            //         itemStyle: {
            //             color: '#FF8C00',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "王劳军",
            //         "value": [
            //             120.184646,
            //             29.606705,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#FF8C00',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "越峰",
            //         "value": [
            //             120.191199,
            //             29.593287,
            //             2
            //         ],
            //         itemStyle: {
            //             color: '#FF8C00',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "化泉村",
            //         "value": [
            //             120.293815,
            //             29.562184,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#FF8C00',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "寺下",
            //         "value": [
            //             120.313771,
            //             29.518215,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#4e79a7',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "黄家店",
            //         "value": [
            //             120.302237,
            //             29.47131,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#FF8C00',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "东溪",
            //         "value": [
            //             120.499682,
            //             29.733772,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#FF8C00',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "新绛霞",
            //         "value": [
            //             120.470367,
            //             29.711341,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#76b7b2',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "潘村",
            //         "value": [
            //             120.467488,
            //             29.728217,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#FF8C00',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "东蔡",
            //         "value": [
            //             120.350145,
            //             29.512475,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#4e79a7',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "大罗",
            //         "value": [
            //             120.467488,
            //             29.728217,
            //             2
            //         ],
            //         itemStyle: {
            //             color: '#FF8C00',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "建辉",
            //         "value": [
            //             120.009008,
            //             29.694316,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#4e79a7',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "狮源",
            //         "value": [
            //             120.009319,
            //             29.718362,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#FF8C00',
            //             opacity: 1
            //         },
            //     },
            //     {
            //         "name": "石门",
            //         "value": [
            //             120.037482,
            //             29.752558,
            //             1
            //         ],
            //         itemStyle: {
            //             color: '#4e79a7',
            //             opacity: 1
            //         },
                // },
            ],
        }]
    };
    myChart.setOption(option);

});