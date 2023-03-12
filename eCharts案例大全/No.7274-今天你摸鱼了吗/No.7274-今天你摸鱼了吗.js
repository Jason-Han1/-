//echarts折线图

let dataList = [{
    name: '08:10',
    value: '0.15'
}, {
    name: '08:20',
    value: '0.18'
}, {
    name: '08:30',
    value: '0.14'
}, {
    name: '08:40',
    value: '0.18'
}, {
    name: '08:50',
    value: '0.17'
}, {
    name: '09:00',
    value: '0.12'
}, {
    name: '09:10',
    value: '0.15'
}, {
    name: '09:20',
    value: '0.14'
}]
let dataList2 = [{
    name: '08:10',
    value: '0.12'
}, {
    name: '08:20',
    value: '0.13'
}, {
    name: '08:30',
    value: '0.13'
}, {
    name: '08:40',
    value: '0.12'
}, {
    name: '08:50',
    value: '0.10'
}, {
    name: '09:00',
    value: '0.08'
}, {
    name: '09:10',
    value: '0.11'
}, {
    name: '09:20',
    value: '0.09'
}]

option = {
    backgroundColor: '#031942',
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['移动', '电信'],
        textStyle: {
            color: "#fff"
        }
    },
    title: {

        left: 26,
        top: 26,
        textStyle: {
            color: '#FFFFFF',
            fontSize: 15,
            fontWeight: 50000,
            fontFamily: 'PingFang SC'
        }
    },
    grid: {
        left: '2%',
        right: '2%',
        bottom: '5%',
        top: '8%',
        containLabel: true
    },
    dataZoom: [{
        type: 'inside',
        start: 0,
        end: dataList.length > 15 ? 35 : 100
    }],
    xAxis: {
        axisLine: {
            lineStyle: {
                color: '#397cbc'
            }
        },
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false
        },
        //轴线上的字
        axisLabel: {
            show: true,
            textStyle: {
                color: '#cecece',
                fontSize: '14'
            }
        },
        data: ['08:10', '08:20', '08:30', '08:40', '08:50', '09:00', '09:10', '09:20']
    },
    yAxis: [{
        type: 'value',
        splitNumber: 4,
        axisTick: {
            show: false
        },
        //轴线上的字
        axisLabel: {
            textStyle: {
                fontSize: '12',
                color: '#cecece'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#397cbc'
            }
        },
        //网格线
        splitLine: {
            lineStyle: {
                color: '#11366e'
            }
        }
    }],
    series: [{
        name: '移动',
        type: 'line',
        smooth: true, //是否平滑曲线显示
        showSymbol: false,
        markPoint: {
            data: [{
                name: '周最高',
                value: 320,
                xAxis: 4,
                yAxis: 320
            }]
        },
        itemStyle: {
            color: '#3eb5dd',
            borderColor: '#f1f1f1',
            borderWidth: 1
        },
        lineStyle: {
            normal: {
                width: 4,
                color: {
                    type: 'linear',

                    colorStops: [{
                            offset: 0,
                            color: '#57b3e5' // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: '#31a9ea' // 100% 处的颜色
                        }
                    ],
                    globalCoord: false // 缺省为 false
                },
                shadowColor: 'rgba(249,165,137, 0.5)',
                shadowBlur: 30,
                shadowOffsetY: 5
            }
        },
        areaStyle: {
            //区域填充样式
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [{
                            offset: 0,
                            color: "rgba(58,182,224, 0.6)"
                        }, {
                            offset: 0.6,
                            color: "rgba(58,182,224, 0.2)"
                        },
                        {
                            offset: 0.8,
                            color: "rgba(58,182,224, 0.01)"
                        }
                    ],
                    false
                ),
                shadowColor: "rgba(58,182,224, 0.1)",
                shadowBlur: 6
            }
        },
        data: dataList
    }, {
        name: '电信',
        type: 'line',
        smooth: true, //是否平滑曲线显示
        showSymbol: false,
        itemStyle: {
            color: '#ff6b71',
            borderColor: '#f1f1f1',
            borderWidth: 1
        },
        markPoint: {
            data: [{
                name: '周最高',
                value: 310,
                xAxis: 5,
                yAxis: 310
            }]
        },
        lineStyle: {
            normal: {
                width: 4,
                color: {
                    type: 'linear',

                    colorStops: [{
                            offset: 0,
                            color: '#ff874b' // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: '#ff6b71' // 100% 处的颜色
                        }
                    ],
                    globalCoord: false // 缺省为 false
                },
                shadowColor: 'rgba(255,107,113, 0.5)',
                shadowBlur: 12,
                shadowOffsetY: 5
            }
        },
        areaStyle: {
            //区域填充样式
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [{
                            offset: 0,
                            color: "rgba(255,107,113, 0.6)"
                        },
                        {
                            offset: 0.6,
                            color: "rgba(255,107,113, 0.2)"
                        },
                        {
                            offset: 1,
                            color: "rgba(255,107,113, 0.01)"
                        }
                    ],
                    false
                ),
                shadowColor: "rgba(255,107,113, 0.4)",
                shadowBlur: 6
            }
        },
        data: dataList2
    }]
};