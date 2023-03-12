let values = [10, 6, 6,6,6,5,5,4,4,4];
let names = ['上海', '北京', '南京', '杭州', '苏州', '大庆', '深圳', '济南', '合肥', '宁波'];
let values1 = values.slice(0, 5);
let names1 = names.slice(0, 5).map((item, index) => {
    return item;
});
let names2 = names.slice(5, 10).map((item, index) => {
    return item;
});
let datas2 = values.slice(5, 10);
let max = values[0] + 5;
let total = 10000;
option = {
    backgroundColor: '#0e2147',
    grid: [{
            width: '160',
            left: '60',
            top: '0',
            right: 0,
            // right: '100',
            bottom: '0'
        },
        {
            width: '160',
            //  height: "75%",
            left: '370',
            top: '0',
            right: '0',
            bottom: '0'
        }
    ],
    xAxis: [{
            gridIndex: 0,
            show: false
        },
        {
            gridIndex: 1,
            show: false
        }
    ],
    yAxis: [{
            gridIndex: 0,
            splitLine: 'none',
            axisTick: 'none',
            axisLine: 'none',
            offset: 50,
            axisLabel: {
                verticalAlign: 'center',
                align: 'left',
                //  padding: [0, 50, 0, 0],
                textStyle: {
                    color: '#fff',
                    fontSize: '20',
                    textAlign: 'left'
                }
            },
            data: names1,
            inverse: true
        },
        {
            gridIndex: 0,
            splitLine: 'none',
            axisTick: 'none',
            axisLine: 'none',
            data: values1,
            inverse: true,
            axisLabel: {
                show: true,
                verticalAlign: 'center',
                align: 'right',
                //  padding: [0, 130, 10, 0],
                textStyle: {
                    color: '#fff',
                    fontSize: '18',
                    textAlign: 'right'
                },
                formatter: function(value) {
                    // return value + '%';
                    return '{x|' + value + '}';
                },
                rich: {
                    // y: {
                    //     color: '#ADB2C7',
                    //     fontSize: 20
                    // },
                    x: {
                        color: '#fff',
                        fontSize: 20
                    }
                }
            }
        },
        {
            gridIndex: 0,
            splitLine: 'none',
            axisTick: 'none',
            axisLine: 'none',
            data: []
        },
        {
            gridIndex: 1,
            splitLine: 'none',
            axisTick: 'none',
            axisLine: 'none',
            offset: 50,
            axisLabel: {
                verticalAlign: 'center',
                align: 'left',
                //  padding: [0, 0, 30, 8],
                textStyle: {
                    color: '#fff',
                    fontSize: '20',
                    textAlign: 'left'
                }
            },
            data: names2,
            inverse: true
        },
        {
            gridIndex: 1,
            splitLine: 'none',
            axisTick: 'none',
            axisLine: 'none',
            data: datas2,
            axisLabel: {
                show: true,
                verticalAlign: 'center',
                align: 'right',
                //  padding: [0, 130, 10, 0],
                textStyle: {
                    color: '#fff',
                    fontSize: '18',
                    textAlign: 'right'
                },
                formatter: function(value) {
                    return value + '%';
                    //  return '{x|' + value + '}  {y|' + "元}"
                },
                rich: {
                    y: {
                        color: '#ADB2C7',
                        fontSize: 20
                    },
                    x: {
                        color: '#32F19F',
                        fontSize: 20
                    }
                }
            },
            inverse: true
        },
        {
            gridIndex: 1,
            splitLine: 'none',
            axisTick: 'none',
            axisLine: 'none',
            inverse: true,
            data: []
        }
    ],
    series: [{
            name: '值',
            type: 'bar',
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: values1,
            barWidth: 10,
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                                offset: 0,
                                color: '#EFEFEF' // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#09B5FE' // 100% 处的颜色
                            }
                        ]
                    }
                }
            },
            z: 2
        },
        {
            // 分隔
            type: 'pictorialBar',
            xAxisIndex: 0,
            yAxisIndex: 0,
            itemStyle: {
                normal: {
                    color: '#061348'
                }
            },
            symbolRepeat: 'fixed',
            symbolMargin: 3,
            symbol: 'rect',
            symbolClip: true,
            symbolSize: [6, 21],
            symbolPosition: 'start',
            symbolOffset: [1, -1],
            symbolBoundingData: total,
            data: values1,
            z: 99,
            animationEasing: 'elasticOut'
        },
        {
            name: '外框',
            type: 'bar',
            xAxisIndex: 0,
            yAxisIndex: 2,
            barGap: '-100%',
            data: [max, max, max, max, max],
            barWidth: 10,
            itemStyle: {
                normal: {
                    opacity: 0
                }
            },
            z: 0
        },
        {
            name: '值',
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 5,
            data: datas2,
            barWidth: 10,
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                                offset: 0,
                                color: '#EFEFEF' // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#09B5FE' // 100% 处的颜色
                            }
                        ]
                    }
                }
            },
            z: 2
        },
        {
            // 分隔
            type: 'pictorialBar',
            xAxisIndex: 1,
            yAxisIndex: 3,
            itemStyle: {
                normal: {
                    color: '#061348'
                }
            },
            symbolRepeat: 'fixed',
            symbolMargin: 3,
            symbol: 'rect',
            symbolClip: true,
            symbolSize: [6, 21],
            symbolPosition: 'start',
            symbolOffset: [1, -1],
            symbolBoundingData: total,
            data: datas2,
            z: 99,
            animationEasing: 'elasticOut'
        },
        {
            name: '外框',
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 5,
            barGap: '-100%',
            data: [max, max, max, max, max],
            barWidth: 10,
            itemStyle: {
                normal: {
                    opacity: 0,
                    barBorderRadius: 5
                }
            },
            z: 0
        }
    ]
};