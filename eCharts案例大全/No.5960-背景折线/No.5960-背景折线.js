var legendData = ["a", 'b'];
var xdata = ['5.89', '5.895', '5.9', '5.905', '5.91', '5.915', '5.92', '5.925', '5.93', '5.935'];
var arr = [29, 29.5, 30.05, 30.78, 31.05, 31.35, 32.15, 32.81, 33, 33.88]; //最高温度
var data = [
    [5, 5, 5, 5, 5, 5, 5, 5,5,5],
    [5, 5, 5, 5, 5, 5, 5, 5,5,5]
];
var myData = [
    'a',
    'b',
];
option = {
    backgroundColor: '#000',
    title: {
        // text: '请求数',
        // textStyle: {
        //     fontWeight: 'normal',
        //     fontSize: 16,
        //     color: '#F1F1F3'
        // },
        // left: '6%'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
    legend: {
        icon: 'rect',
        itemWidth: 14,
        itemHeight: 5,
        itemGap: 13,
        data: legendData,
        position: 'center',
        textStyle: {
            fontSize: 18,
            color: '#95a2aa'
        }
    },
    grid: [{
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
    ],
    xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                textStyle: {
                    color: '#95a2aa',
                    fontSize: 18
                }

            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(149, 162, 170,0.5)'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(149, 162, 170,0.5)'
                }
            },
            data: xdata
        },
    ],
    yAxis: [{
            type: 'value',
            name: '单位',
            nameTextStyle: {
                fontSize: 20,
                color: '#95a2aa'
            },
            min: 29,
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(149, 162, 170,0.5)'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#95a2aa',
                    fontSize: 18
                }

            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(149, 162, 170,0.5)'
                }
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: 'rgba(1, 147, 244,0.1)'
                }
            }
        },
        {
            type: 'value',
            name: legendData[1],
            nameTextStyle: {
                fontSize: 20,
                color: '#95a2aa'
            },
            min: 4,
            max: 6,
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#95a2aa',
                    fontSize: 18
                }

            },
            splitLine: {
                show: false
            },
            position: 'right', //--位置靠右
            nameLocation: 'middle', // --位置居中
            nameGap: 60, // --与y轴距离
            nameRotate: 90 // --角度
        },
    ],
    series: [{
            name: legendData[0],
            nameTextStyle: {
                color: '#95a2aa'
            },
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 3
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(16,97,204, 0.3)'
                    }, {
                        offset: 1,
                        color: 'rgba(17,235,210, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {

                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#09efdf'
                    }, {
                        offset: 1,
                        color: '#0193f4'
                    }])
                },
                emphasis: {
                    color: 'rgb(0,196,132)',
                    borderColor: 'rgba(0,196,132,0.2)',
                    extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
                    borderWidth: 10
                }
            },
            data: arr,
        },
    ]
};