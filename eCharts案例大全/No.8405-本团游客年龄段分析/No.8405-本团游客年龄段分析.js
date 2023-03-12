var os_title = "本团游客年龄段分析";
var os_subtext = "By: EJI02CTT-0224(EGY Part)" //团号
var os_bgc = "#38445E";

var os_age = ['0~18岁', '19~24岁', '25~34岁', '35~44岁', '45~54岁', '55~64岁', '65~75岁', '75岁上'];
var os_agevalue = [0, 2, 3, 18, 4, 2, 2, 1];

var os_poi = [{
        name: '广东',
        value: 4
    },
    {
        name: '浙江',
        value: 3
    },
    {
        name: '上海',
        value: 5
    },
    {
        name: '北京',
        value: 6
    },
    {
        name: '江苏',
        value: 28
    },
    {
        name: '安徽',
        value: 2
    },
    {
        name: '山东',
        value: 2
    },
    {
        name: '四川',
        value: 1
    },
    {
        name: '湖南',
        value: 4
    }
]

options = [{
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