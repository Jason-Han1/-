var mainData = {
    "dimensions": [
        "TJYF",
        "ZL01",
        "BZ01",
        "PM01",
        "ZL02",
        "BZ02",
        "PM02"
    ],
    "source": [{
            "ZL01": 11,
            "ZL02": 111,
            "PM01": 6,
            "PM02": 5,
            "BZ01": 3.6,
            "BZ02": 4.6,
            "TJYF": "1-2月"
        },
        {
            "ZL01": 22,
            "ZL02": 222,
            "PM01": 3,
            "PM02": 0,
            "BZ01": 13.4,
            "BZ02": 12.4,
            "TJYF": "1-3月"
        },
        {
            "ZL01": 33,
            "ZL02": 333,
            "PM01": 5,
            "PM02": 0,
            "BZ01": 4.6,
            "BZ02": 11.6,
            "TJYF": "1-4月"
        },
        {
            "ZL01": 44,
            "ZL02": 444,
            "PM01": 6,
            "PM02": 0,
            "BZ01": 0.5,
            "BZ02": 9.6,
            "TJYF": "1-5月"
        },
        {
            "ZL01": 55,
            "ZL02": 555,
            "PM01": 4,
            "PM02": 0,
            "BZ01": 9.6,
            "BZ02": 8.6,
            "TJYF": "1-6月"
        },
        {
            "ZL01": 66,
            "ZL02": 666,
            "PM01": 5,
            "PM02": 0,
            "BZ01": 3.7,
            "BZ02": 7.6,
            "TJYF": "1-7月"
        },
        {
            "ZL01": 77,
            "ZL02": 777,
            "PM01": 5,
            "PM02": 0,
            "BZ01": 6.5,
            "BZ02": 6.6,
            "TJYF": "1-8月"
        },
        {
            "ZL01": 88,
            "ZL02": 888,
            "PM01": 5,
            "PM02": 0,
            "BZ01": 5.2,
            "BZ02": 5.6,
            "TJYF": "1-9月"
        },
        {
            "ZL01": 99,
            "ZL02": 999,
            "PM01": 5,
            "PM02": 0,
            "BZ01": 8.5,
            "BZ02": 2.6,
            "TJYF": "1-10月"
        },
        {
            "ZL01": 100,
            "ZL02": 1000,
            "PM01": 4,
            "PM02": 0,
            "BZ01": 11,
            "BZ02": 3.6,
            "TJYF": "1-11月"
        },
        {
            "TJYF": "1-12月"
        }
    ]
}

var PMDATA2018 = [{
        name: '1',
        xAxis: 0,
        yAxis: 11,
        value: 6
    },
    {
        name: '2',
        xAxis: 1,
        yAxis: 22,
        value: 3
    },
    {
        name: '3',
        xAxis: 2,
        yAxis: 33,
        value: 5
    },
    {
        name: '4',
        xAxis: 3,
        yAxis: 44,
        value: 6
    },
    {
        name: '5',
        xAxis: 4,
        yAxis: 55,
 
        value: 4
    },
    {
        name: '6',
        xAxis: 5,
        yAxis: 66,
        value: 5
    },
    {
        name: '7',
        xAxis: 6,
        yAxis: 77,
        value: 5
    },
    {
        name: '8',
        xAxis: 7,
        yAxis: 88,
        value: 5
    },
    {
        name: '9',
        xAxis: 8,
        yAxis: 99,
        value: 5
    },
    {
        name: '10',
        xAxis: 9,
        yAxis: 100,
        value: 4
    }
]
var PMDATA2019 = [{
        name: '1',
        xAxis: 0,
        yAxis: 111,
        value: 6
    },
    {
        name: '2',
        xAxis: 1,
        yAxis: 222,
        value: 3
    },
    {
        name: '3',
        xAxis: 2,
        yAxis: 333,
        value: 5
    },
    {
        name: '4',
        xAxis: 3,
        yAxis: 444,
        value: 6
    },
    {
        name: '5',
        xAxis: 4,
        yAxis: 555,
 
        value: 4
    },
    {
        name: '6',
        xAxis: 5,
        yAxis: 666,
        value: 5
    },
    {
        name: '7',
        xAxis: 6,
        yAxis: 777,
        value: 5
    },
    {
        name: '8',
        xAxis: 7,
        yAxis: 888,
        value: 5
    },
    {
        name: '9',
        xAxis: 8,
        yAxis: 999,
        value: 5
    },
    {
        name: '10',
        xAxis: 9,
        yAxis: 1000,
        value: 4
    }
]
var PM2018 = [] , PM2019 = [];

let option = {
    color: ['#8A56B6', '#7777FF', '#00CCCC', '#41B0DF'],
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }

    },
    grid: {
        left: '2%',
        right: '5%',
        bottom: '10%',
        top: '12%',
        containLabel: true
    },
    legend: {
        show: true,
        bottom: 0,
        itemGap: 10,
        textStyle: {
            color: "#fff",
            fontSize: 12
        },
        data: ['2018年总量', '2018年比增', '2019年总量', '2019年比增']
    },
    dataset: {
        // 这里指定了维度名的顺序，从而可以利用默认的维度到坐标轴的映射。
        // 如果不指定 dimensions，也可以通过指定 series.encode 完成映射，参见后文。
        dimensions: mainData.dimensions,
        source: mainData.source
    },
    xAxis: [{
        type: 'category',
        boundaryGap: true,
        axisLabel: {
            interval: 0,
            rotate: 40,
            fontSize: 12
        },
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#687A84'
            }
        }
    }],
    yAxis: [{
            name: "(万元)",
            min: 0,
            type: 'value',
            nameTextStyle: {
                fontSize: 12,
                padding: [0, 0, 0, -40]
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(47,60,106,0.6)'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#687A84'
                }
            },
            axisLabel: {
                fontSize: 12
            }
        },
        {
            name: "(%)",

            type: 'value',
            nameTextStyle: {
                fontSize: 12,
                padding: [0, 0, 0, 40]
            },
            splitLine: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    color: '#687A84'
                }
            },
            axisLabel: {
                fontSize: 12,

            }
        }
    ],
    series: [

        {
            name: '2018年总量',
            type: 'bar',
            barWidth: '40%',
            emphasis: {
                itemStyle: {
                    color: "#D3A2FF"
                }
            },

            markPoint: {
                symbolSize: 40,
                label: {
                    color: "#fff",
                    fontSize: 15
                },
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#FF7549' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#FF5544' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    opacity: 1
                },
                emphasis: {
                    itemStyle: {
                        // color:"red",
                        opacity: 1
                    }
                },
                animation: true,
                symbolKeepAspect: true,
                data: PM2018 // 排名数据
            }
        },
        {
            name: '2018年比增',
            type: 'line',
            barWidth: '40%',
            symbolSize: 8,
            yAxisIndex: 1,
            stack: '比增',
            lineStyle: {
                width: 3
            }
        },
        {
            name: '2018年排名',
            type: 'bar',
            barWidth: '0%',
            symbolSize: 8,
            lineStyle: {
                width: 3
            },
            itemStyle: {
                color: "transparent"
            }

        },

        {
            name: '2019年总量',
            type: 'bar',
            barWidth: '40%',
            symbolSize: 8,
             markPoint: {
                symbolSize: 40,
                label: {
                    color: "#fff",
                    fontSize: 15
                },
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#FF7549' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#FF5544' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    opacity: 1
                },
                emphasis: {
                    itemStyle: {
                        // color:"red",
                        opacity: 1
                    }
                },
                animation: true,
                symbolKeepAspect: true,
                data: PM2019 // 排名数据
            }
        },
        {
            name: '2019年比增',
            type: 'line',
            barWidth: '40%',
            symbolSize: 8,
            yAxisIndex: 1,
            stack: '比增',
            lineStyle: {
                width: 3
            }
        },
        {
            name: '2019年排名',
            type: 'bar',
            barWidth: '0%',
            symbolSize: 8,
            lineStyle: {
                width: 3
            },
            itemStyle: {
                color: "transparent"
            }

        },

    ]
};

// 定时器

var timer = null,
    idx = -1;
timer && clearInterval(timer);
timer = setInterval(function() {
    idx++;
    if (idx === 11) {
        idx = 0;
    }
    // 根据 idx 过滤 数据
    PM2018 = PMDATA2018.filter(item => item.xAxis === idx)
    PM2019 = PMDATA2019.filter(item=>item.xAxis === idx)
    option.series[0].markPoint.data = PM2018
    option.series[3].markPoint.data = PM2019
    myChart.setOption(option, true) //重新渲染图表
}, 4000);

myChart.on('mouseover', function(parame) {
    clearInterval(timer)
    // 展示当前索引的数据
    option.series[0].markPoint.data = PMDATA2018.filter(obj => obj.xAxis === parame.dataIndex)
    option.series[3].markPoint.data = PMDATA2019.filter(obj => obj.xAxis === parame.dataIndex)
    myChart.setOption(option, true)
});
myChart.on('mouseout', function() {
    timer && clearInterval(timer)
    timer = setInterval(function() {
        idx++;
        if (idx === 11) {
            idx = 0;
        }
        PM2018 = PMDATA2018.filter(item => item.xAxis === idx)
        PM2019 = PMDATA2019.filter(item=>item.xAxis === idx)
        option.series[0].markPoint.data = PM2018
        option.series[3].markPoint.data = PM2019
        option.series[0].markPoint.emphasis.opacity = 1
        option.series[3].markPoint.emphasis.opacity = 1
        myChart.setOption(option, true) //重新渲染图表
    }, 4000);
})