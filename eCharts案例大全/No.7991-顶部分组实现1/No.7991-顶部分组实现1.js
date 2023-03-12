xData = ['2019-1', '2019-2', '2019-1', '2019-2', '2019-3', '2019-6', '2019-7', '2019-8', '2019-9', '2019-10', '2019-11', '2019-12']
option = {
    tooltip: {
        trigger: 'none',
        axisPointer: {
            type: 'cross'
        },
        // trigger: 'axis',
        // axisPointer: { // 坐标轴指示器，坐标轴触发有效
        //     type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        // }
    },
    legend: {
        show: false
    },
    grid: [{
            //tier3
            top: 120,
            bottom: 80,
            borderWidth: 1,
            show: true,
            // borderColor: 'black'
        },
        {
            //tier2
            height: 60,
            top: 60,
            borderWidth: 2,
            show: true,
            // borderColor: 'green',
            tooltip: {
                show: false
            }
        },
        {
            //tier1
            height: 60,
            top: 0,
            borderWidth: 3,
            show: true,
            // borderColor: 'red',
            tooltip: {
                show: false
            }
        }
    ],
    xAxis: [{
            type: 'category',
            // gridIndex:2,
            zlevel: 3,
            gridIndex: 0,
            data: xData,
            splitLine: {
                show: true,
                interval: function(index, value) {
                    if ([1, 2, 4, 6, 9, 11].indexOf(index) != -1) {
                        console.log(index, value)
                        return false;
                    } else {
                        return true;
                    }
                },
                lineStyle: {
                    // color:'red',
                    type: 'dashed'
                }
            }
        },
        {
            type: 'category',
            gridIndex: 1,
            zlevel: 2,
            axisTick: {
                show: true,

            },
            // axisTick:{
            //     length:'300',
            //     inside:true
            // }
            data: xData
        },
        {
            type: 'category',
            gridIndex: 2,
            zlevel: 1,
            data: ['xData', 'xData', 'xData']
        }
    ],
    yAxis: [{
            type: 'value',
            gridIndex: 0,
            splitLine: {
                show: false
            }

        }, {
            type: 'value',
            gridIndex: 1,

            axisLabel: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        }, {
            type: 'value',
            gridIndex: 2,
            axisLabel: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        }

    ],
    series: [{
            name: 'Tier3',
            type: 'scatter',
            // smooth: true,
            xAxisIndex: 0,
            yAxisIndex: 0,
            barGap: 0,
            showBackground: true,
            data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7],
            // markLine: {
            //     symbol: ['none', 'none'],
            //     label: {
            //         show: false
            //     },
            //     data: [{
            //             xAxis: 3
            //         },
            //         {
            //             xAxis: 3
            //         },
            //         {
            //             xAxis: 5
            //         },
            //         {
            //             xAxis: 7
            //         }
            //     ]
            // },
        }, {
            name: 'Tier3',
            type: 'scatter',
            // smooth: true,
            xAxisIndex: 0,
            yAxisIndex: 0,
            barGap: 0,
            showBackground: true,
            itemStyle: {
                normal: {
                    color: 'green'
                }
            },
            data: [5.9, 10.9, 6.1, 6.7, 8.3, 40.2, 251.6, 66.6, 49.4, 90.4, 109.3, 6.7],
        },
        {
            name: 'Tier2',
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: [{
                name: 'Tier2',
                value: 1
            }, {
                name: 'Tier2',
                value: 1
            }, {
                name: 'Tier2',
                value: 1
            }, {
                name: 'Tier21',
                value: 1
            }, {
                name: 'Tier21',
                value: 1
            }, {
                name: 'Tier22',
                value: 1
            }, {
                name: 'Tier22',
                value: 1
            }, {
                name: 'Tier23',
                value: 1
            }, {
                name: 'Tier24',
                value: 1
            }, {
                name: 'Tier24',
                value: 1
            }, {
                name: 'Tier24',
                value: 1
            }, {
                name: 'Tier24',
                value: 1
            }],
            // barWidth: (3 / xData.length) * 100 + '%',
            label: {
                show: true,
                position: 'inside',
                formatter: '{b}'
            },
            barGap: 0,
            barCategoryGap: 0

        },
        {
            name: 'Tier1',
            type: 'bar',
            xAxisIndex: 2,
            yAxisIndex: 2,
            // smooth: true,
            data: [{
                name: 'Tier1',
                value: 1
            }],
            barWidth: (5 / xData.length) * 100 + '%',
            label: {
                show: true,
                position: 'inside',
                formatter: '{b}',
            },
            barGap: 0,
        },
    ],

    dataZoom: {
        type: 'slider',
        xAxisIndex: [0, 1, 2]
    }
};