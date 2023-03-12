var myData = [
    '浙江大华',
    '家和物联',
    '海康威视',
    '杭州消安',
    '泛海三江',
    '中辰科技',
    '汇点科技',
    '超翔科技'
]
var data = [
    [389, 259, 262, 324, 233, 432, 267, 245],
    [121, 388, 233, 309, 432, 345, 675, 245]
]
var option = {
    backgroundColor: 'rgba(1, 36, 65, 0.8)',
    legend: {
        show: false
    },
    tooltip: {
        show: true,
        formatter:function(params){
            return params.seriesName + '<br>' + params.name + '：' + params.data;
        }
    },
    grid: [{
            show: false,
            left: '5%',
            top: 0,
            bottom: 0,
            width: '5%'
        },
        {
            show: false,
            left: '13%',
            top: 0,
            bottom: 0,
            containLabel: true,
            width: '15%'
        },
        {
            show: false,
            left: '31%',
            top: 0,
            bottom: 0,
            containLabel: true,
            width: '15%'
        },
        {
            show: false,
            left: '49%',
            top: 0,
            bottom: 0,
            containLabel: true,
            width: '15%'
        },
        {
            show: false,
            left: '67%',
            top: 0,
            bottom: 0,
            containLabel: true,
            width: '15%'
        },
        {
            show: false,
            left: '85%',
            top: 0,
            bottom: 0,
            containLabel: true,
            width: '15%'
        }
    ],
    xAxis: [{
            show: false,
        },
        {
            gridIndex: 1,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            position: 'top',
            axisLabel: {
                show: false
            },
            splitLine: {
                show: false
            }
        },
        {

            gridIndex: 2,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            position: 'top',
            axisLabel: {
                show: false
            },
            splitLine: {
                show: false
            }
        },
        {

            gridIndex: 3,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            position: 'top',
            axisLabel: {
                show: false
            },
            splitLine: {
                show: false
            }
        },
        {
            gridIndex: 4,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            position: 'top',
            axisLabel: {
                show: false
            },
            splitLine: {
                show: false
            }
        },
        {
            gridIndex: 5,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            position: 'top',
            axisLabel: {
                show: false
            },
            splitLine: {
                show: false
            }
        }
    ],
    yAxis: [{
            
            type: 'category',
            inverse: false,
            position: 'left',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                interval: 0,
                textStyle: {
                    color: '#50afff',
                    fontSize: 14
                }
            },
            data: myData.map(function(value) {
                return {
                    value: value,
                    textStyle: {
                        align: 'center'
                    }
                }
            })
        },
        {
            gridIndex: 1,
            type: 'category',
            inverse: false,
            position: 'left',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            data: myData
        },
        {
            gridIndex: 2,
            type: 'category',
            inverse: false,
            position: 'left',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            data: myData
        },
        {
            gridIndex: 3,
            type: 'category',
            inverse: false,
            position: 'left',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            data: myData
        },
        {
            gridIndex: 4,
            type: 'category',
            inverse: false,
            position: 'left',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            data: myData
        },
        {
            gridIndex: 5,
            type: 'category',
            inverse: false,
            position: 'left',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            data: myData
        }
    ],
    series: [{
            name: '2019',
            type: 'bar',
            barWidth: 10,
            barMinWidth: 5,
            xAxisIndex: 1,
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: '#4ca8f6',
                    barBorderRadius: 50
                }
            },

            data: data[0]
        },
        {
            name: '2018',
            type: 'bar',
            barWidth: 10,
            xAxisIndex: 2,
            yAxisIndex: 2,
            itemStyle: {
                normal: {
                    color: '#00d484',
                    barBorderRadius: 50
                }
            },
            data: data[1]
        },
        {
            name: '2017',
            type: 'bar',
            barWidth: 10,
            xAxisIndex: 3,
            yAxisIndex: 3,
            itemStyle: {
                normal: {
                    color: '#00d484',
                    barBorderRadius: 50
                }
            },
            data: data[1]
        },
        {
            name: '2016',
            type: 'bar',
            barWidth: 10,
            xAxisIndex: 4,
            yAxisIndex: 4,
            itemStyle: {
                normal: {
                    color: '#00d484',
                    barBorderRadius: 50
                }
            },
            data: data[1]
        },
        {
            name: '2015',
            type: 'bar',
            barWidth: 10,
            xAxisIndex: 5,
            yAxisIndex: 5,
            itemStyle: {
                normal: {
                    color: '#00d484',
                    barBorderRadius: 50
                }
            },
            data: data[1]
        }
    ]
}
