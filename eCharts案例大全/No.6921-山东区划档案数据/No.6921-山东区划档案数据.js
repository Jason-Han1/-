var cdata = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190];
var quhua = ['青岛市',
    '济南市',
    '淄博市',
    '枣庄市',
    '东营市',
    '烟台市',
    '潍坊市',
    '济宁市',
    '泰安市',
    '威海市',
    '日照市',
    '临沂市',
    '德州市',
    '滨州市',
    '菏泽市',
    '省本级',
    '聊城市'
];
var option = {
    legend: {
        data: ['省内转出', '省外转出', '省内转入', '省外转入'],
        textStyle: {
                    color: "#fff"
                },
        selected: { // 设置默认不显示
            '省内转出': false,
            '省外转出': false,
            '省内转入': true,
            '省外转入': true,
        },

    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    xAxis: [{
        type: 'category',
        data: quhua,
        axisLabel: { //坐标轴刻度标签的相关设置。
            interval: 0, //默认为1 设置为 1，表示『隔一个标签显示一个标签』
            textStyle: {
                color: '#fff',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 12,
            },
            //倾斜角度
            //rotate:50,
        },
        axisTick: { //坐标轴刻度相关设置。
            show: false,
        },
        axisLine: { //坐标轴轴线相关设置
            lineStyle: {
                color: '#fff',
                opacity: 0.2
            }
        },
        splitLine: { //坐标轴在 grid 区域中的分隔线。
            show: false,
        }
    }],
    yAxis: [{
        type: 'value',
        splitNumber: 5,
        axisLabel: {
            textStyle: {
                color: '#fff',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 12,
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: ['#fff'],
                opacity: 0.06
            }
        }

    }],
    grid: [{
        width: '80%',
        left: '10%'
    }, {
        left: '10%',
        width: '80%'
    }],
    series: [{
            name: '省内转入',
            type: 'bar',
            barWidth: 10,
            data: cdata,
            itemStyle: {
                barBorderRadius: 10,
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#FDB36A' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(0, 222, 215, 0.2)' // 100% 处的颜色
                    }],
                }
            }
        },
        {
            name: '省外转入',
            type: 'bar',
            barWidth: 10,
            data: cdata,
            itemStyle: {
                barBorderRadius: 10,
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#73ACFF' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(255, 86, 36, 0.2)' // 100% 处的颜色
                    }],
                }
            }
        }, {
            name: '省内转出',
            type: 'bar',
            barWidth: 10,
            data: cdata,
            itemStyle: {
                barBorderRadius: 10,
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#73DDFF' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(0, 222, 215, 0.2)' // 100% 处的颜色
                    }],
                }
            }

        },
        {
            name: '省外转出',
            type: 'bar',
            barWidth: 10,
            data: cdata,
            itemStyle: {
                barBorderRadius: 10,
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#FDD56A' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(255, 86, 36, 0.2)' // 100% 处的颜色
                    }],
                },
            }
        },
    ]
};