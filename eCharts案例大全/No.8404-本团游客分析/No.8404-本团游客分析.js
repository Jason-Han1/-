var os_title = "本团游客年龄段分析";
var os_subtext = "By: EJI02CTT-0224(EGY Part)" //团号
var os_bgc = "#38445E";

var os_age = ['0~18岁', '19~24岁', '25~34岁', '35~44岁', '45~54岁', '55~64岁', '65~75岁', '75岁上'];
var os_agevalue = [0, 2, 3, 18, 4, 2, 2, 1];

var os_sex = ['男性', '女性'];
var os_sexvalue = [29, 71]; //值是百分比
var os_sexsymbols = [
    'path://M18.2629891,11.7131596 L6.8091608,11.7131596 C1.6685112,11.7131596 0,13.032145 0,18.6237673 L0,34.9928467 C0,38.1719847 4.28388932,38.1719847 4.28388932,34.9928467 L4.65591984,20.0216948 L5.74941883,20.0216948 L5.74941883,61.000787 C5.74941883,65.2508314 11.5891201,65.1268798 11.5891201,61.000787 L11.9611506,37.2137775 L13.1110872,37.2137775 L13.4831177,61.000787 C13.4831177,65.1268798 19.3114787,65.2508314 19.3114787,61.000787 L19.3114787,20.0216948 L20.4162301,20.0216948 L20.7882606,34.9928467 C20.7882606,38.1719847 25.0721499,38.1719847 25.0721499,34.9928467 L25.0721499,18.6237673 C25.0721499,13.032145 23.4038145,11.7131596 18.2629891,11.7131596 M12.5361629,1.11022302e-13 C15.4784742,1.11022302e-13 17.8684539,2.38997966 17.8684539,5.33237894 C17.8684539,8.27469031 15.4784742,10.66467 12.5361629,10.66467 C9.59376358,10.66467 7.20378392,8.27469031 7.20378392,5.33237894 C7.20378392,2.38997966 9.59376358,1.11022302e-13 12.5361629,1.11022302e-13',
    'path://M28.9624207,31.5315864 L24.4142575,16.4793596 C23.5227152,13.8063773 20.8817445,11.7111088 17.0107398,11.7111088 L12.112691,11.7111088 C8.24168636,11.7111088 5.60080331,13.8064652 4.70917331,16.4793596 L0.149791395,31.5315864 C-0.786976655,34.7595013 2.9373074,35.9147532 3.9192135,32.890727 L8.72689855,19.1296485 L9.2799493,19.1296485 C9.2799493,19.1296485 2.95992025,43.7750224 2.70031069,44.6924335 C2.56498417,45.1567684 2.74553639,45.4852068 3.24205501,45.4852068 L8.704461,45.4852068 L8.704461,61.6700801 C8.704461,64.9659872 13.625035,64.9659872 13.625035,61.6700801 L13.625035,45.360657 L15.5097899,45.360657 L15.4984835,61.6700801 C15.4984835,64.9659872 20.4191451,64.9659872 20.4191451,61.6700801 L20.4191451,45.4852068 L25.8814635,45.4852068 C26.3667633,45.4852068 26.5586219,45.1567684 26.4345142,44.6924335 C26.1636859,43.7750224 19.8436568,19.1296485 19.8436568,19.1296485 L20.3966199,19.1296485 L25.2043926,32.890727 C26.1862111,35.9147532 29.9105828,34.7595013 28.9625083,31.5315864 L28.9624207,31.5315864 Z M14.5617154,0 C17.4960397,0 19.8773132,2.3898427 19.8773132,5.33453001 C19.8773132,8.27930527 17.4960397,10.66906 14.5617154,10.66906 C11.6274788,10.66906 9.24611767,8.27930527 9.24611767,5.33453001 C9.24611767,2.3898427 11.6274788,0 14.5617154,0 L14.5617154,0 Z'
];
var os_sexbodyMax = 100; //指定图形界限的值
var os_sexlabelSetting = {
    normal: {
        show: true,
        position: 'bottom',
        offset: [5, 30],
        formatter: function(param) {
            return (param.value / os_sexbodyMax * 100).toFixed(0) + '%';
        },
        textStyle: {
            fontSize: 24,
            fontFamily: 'Arial',
        }
    }
};

options = [
    
    {
        backgroundColor: os_bgc,
        color: ['#69cce6', '#ff8282'],
        grid: {
            left: '15%',
            right: '15%',
            top: '60%',
            bottom: '13%',
            containLabel: true
        },
        xAxis: {
            position: 'top',
            data: os_sex,
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                margin: 20,
                textStyle: {
                    color: '#d3d3d3',
                    fontSize: 18
                }
            }
        },
        yAxis: {
            max: os_sexbodyMax,
            splitLine: {
                show: false
            },
            axisTick: {
                show: false // 刻度线
            },
            axisLine: {
                show: false // 轴线
            },
            axisLabel: {
                show: false // 轴坐标文字
            }
        },
        series: [{
                name: os_sex[0],
                type: 'pictorialBar',
                symbolClip: true,
                symbolBoundingData: os_sexbodyMax,
                label: os_sexlabelSetting,
                data: [{
                        value: os_sexvalue[0],
                        symbol: os_sexsymbols[0],
                        itemStyle: {
                            normal: {
                                color: 'rgba(105,204,230)' //单独控制颜色
                            }
                        },
                    },
                    {

                    }
                ],
                // markLine: markLineSetting,
                z: 10
            },
            {
                name: os_sex[1],
                type: 'pictorialBar',
                symbolClip: true,
                symbolBoundingData: os_sexbodyMax,
                label: os_sexlabelSetting,
                data: [{},
                    {
                        value: os_sexvalue[1],
                        symbol: os_sexsymbols[1],
                        itemStyle: {
                            normal: {
                                color: 'rgba(255,130,130)' //单独控制颜色
                            }
                        },
                    }
                ],
                // markLine: markLineSetting,
                z: 10
            },
            {
                // 设置背景底色，不同的情况用这个
                name: 'full',
                type: 'pictorialBar', //异型柱状图 图片、SVG PathData
                symbolBoundingData: os_sexbodyMax,
                animationDuration: 0,
                itemStyle: {
                    normal: {
                        color: '#ccc' //设置全部颜色，统一设置
                    }
                },
                z: 10,
                data: [{
                        itemStyle: {
                            normal: {
                                color: 'rgba(105,204,230,0.40)' //单独控制颜色
                            }
                        },
                        value: 100,
                        symbol: os_sexsymbols[0]
                    },
                    {
                        itemStyle: {
                            normal: {
                                color: 'rgba(255,130,130,0.40)' //单独控制颜色
                            }
                        },
                        value: 100,
                        symbol: os_sexsymbols[1]
                    }
                ]
            }
        ]
    },
    {
        backgroundColor: os_bgc,
        "title": {
            "text": os_title,
            "subtext": os_subtext,
            x: "2%",
            y: "2%",
            textStyle: {
                color: '#fff',
                fontSize: '20'
            },
            subtextStyle: {
                color: '#ddd',
                fontSize: '12'
            },
        },
        grid: {
            left: '5%',
            top: '15%',
            bottom: '10%',
            right: '5%'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'none'
            },
            formatter: "{a} :<br/>{b}，共 {c} 人"
            /*formatter: function(params) {
                return params[0].name + ': ' + params[0].value;
            }*/
        },
        xAxis: {
            data: os_age,
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(45, 140, 240, 0.1)',
                    width: 1 //这里是为了突出显示加上的
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#999',
                    fontSize: 12
                }
            }
        },
        yAxis: [{
            splitNumber: 2,
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(45, 140, 240, 0.1)',
                    width: 1 //这里是为了突出显示加上的
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#999'
                }
            },
            splitArea: {
                areaStyle: {
                    color: 'rgba(255,255,255,.5)'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255, 129, 109, 0.1)',
                    width: 0.5,
                    type: 'dashed'
                }
            }
        }],
        series: [{
            name: '年龄阶段',
            type: 'pictorialBar',
            barCategoryGap: '0%',
            symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
            label: {
                show: true,
                position: 'top',
                distance: 15,
                color: '#2D8CF0',
                fontWeight: 'bolder',
                fontSize: 20,
            },
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        //45, 140, 240  #2D8CF0   OTAS蓝
                        //232, 94, 106  #DB5E6A   暗红
                        colorStops: [{
                                offset: 0,
                                color: 'rgba(45, 140, 240, .8)' //  0%  处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgba(45, 140, 240, .1)' //  100%  处的颜色
                            }
                        ],
                        global: false //  缺省为  false
                    }
                },
                emphasis: {
                    opacity: 1
                }
            },
            data: os_agevalue,
            z: 10
        }]
    }
]