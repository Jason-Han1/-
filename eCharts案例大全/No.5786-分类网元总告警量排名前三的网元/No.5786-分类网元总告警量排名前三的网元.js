let data = {
    xData: ['ZZMSS1', 'LYMSS4', 'NYMSS3', 
            'KFMSS21', 'XXMSS22', 'XYMSS22', 
            'ZZHSS1FE1', 'ZZHSS1FE2', 'ZZHSS1FE3',
            'ZZHSS4FE02', 'ZZHSS4FE03', 'ZZHSS4FE04',
            'LYHSS8FE01', 'LYHSS8FE02', 'LYHSS8FE09', 
            'ZZMGCF31','ZZMGCF32', 'ZZMGCF33', 
            'SCP4_USAU66', 'SCP4_USAU', 'SCP4_USAU6'],
    yData: [500, 400, 300, 200, 180, 120, 50, 40, 20, 60, 30, 20, 36, 31,26,900, 200, 120, 9, 8, 7]
}
/**
    双X轴标签对应，伪实现思路：
    底部的标签也是柱状图，对应包含的区域为上方X轴条数占总数的比例，设为宽度即可
*/
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }

    },
    grid: [{
            top: 100,
            bottom: 101

        },
        {
            height: 60,
            bottom: 40,

        }
    ],
    xAxis: [{
        type: 'category',
        data: data.xData,
        gridIndex: 0,
        axisLabel: {
            color: '#333'

        },
        axisLine: {
            lineStyle: {
                color: '#e7e7e7'
            }
        },
        axisTick: {
            lineStyle: {
                color: '#e7e7e7'
            }
        },
        zlevel: 2
    }, {
        type: 'category',
        gridIndex: 1,
        axisLine: {
            show: false
        },
        zlevel: 1
    }],
    yAxis: [{
        type: 'value',
        gridIndex: 0,
        axisLabel: {
            color: '#333'
        },
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        },
        axisTick: {
            lineStyle: {
                color: '#ccc'
            }
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
    }],
    series: [{
        data: data.yData,
        type: 'bar',
        label: {
            show: true,
            position: 'top',
            textStyle: {
                color: '#555'
            }
        },
        itemStyle: {
            normal: {
                color: (params) => {
                    let colors = ['#4150d8', '#28bf7e', '#ed7c2f', '#f2a93b', '#f9cf36', '#4a5bdc',
                        '#4cd698', '#f4914e', '#fcb75b', '#ffe180', '#b6c2ff', '#96edc1', '#8A5656', '#8904B1', '#01DFD7', '#084B8A', '#FF00FF', '#FA8258',
                        '#F5A9BC', '#04B486'
                    ]
                    return colors[params.dataIndex]
                }
            }
        },
        xAxisIndex: 0,
        yAxisIndex: 0
    }, {
        data: [{
            name: '爱立信端局',
            value: 1
        }],
        label: {
            show: true,
            position: 'inside',
            formatter: '{b}',
            offset: [0, 10],
            textStyle: {
                color: '#777'
            }
        },
        type: 'bar',
        barGap: 0,
        barWidth: '14.285%',
        itemStyle: {
            normal: {
                color: 'rgba(134,176,237, .5)'
            }
        },
        xAxisIndex: 1,
        yAxisIndex: 1
    }, {
        data: [{
            name: '中兴端局',
            value: 1
        }],
        label: {
            show: true,
            position: 'inside',
            formatter: '{b}',
            offset: [0, 10],
            textStyle: {
                color: '#777'
            }
        },
        type: 'bar',
        barGap: 0,
        barWidth: '14.285%',
        itemStyle: {
            normal: {
                color: 'rgba(40,191,126, .5)'
            }
        },
        xAxisIndex: 1,
        yAxisIndex: 1
    }, {
        data: [{
            name: '爱立信HSS',
            value: 1
        }],
        label: {
            show: true,
            position: 'inside',
            formatter: '{b}',
            offset: [0, 10],
            textStyle: {
                color: '#777'
            }
        },
        type: 'bar',
        barGap: 0,
        barWidth: '14.285%%',
        itemStyle: {
            normal: {
                color: 'rgba(237,124,47, .5)'
            }
        },
        xAxisIndex: 1,
        yAxisIndex: 1
    }, {
        data: [{
            name: '中兴HSS',
            value: 1
        }],
        label: {
            show: true,
            position: 'inside',
            formatter: '{b}',
            offset: [0, 10],
            textStyle: {
                color: '#777'
            }
        },
        type: 'bar',
        barGap: 0,
        barWidth: '14.285%%',
        itemStyle: {
            normal: {
                color: 'rgba(242,169,59, .5)'
            }
        },
        xAxisIndex: 1,
        yAxisIndex: 1
    }, {
        data: [{
            name: '华为HSS',
            value: 1
        }],
        label: {
            show: true,
            position: 'inside',
            formatter: '{b}',
            offset: [0, 10],
            textStyle: {
                color: '#777'
            }
        },
        type: 'bar',
        barCategoryGap: 0,
        barGap: 0,
        barWidth: '14.285%',
        itemStyle: {
            normal: {
                color: 'rgba(249,207,54, .5)'
            }
        },
        xAxisIndex: 1,
        yAxisIndex: 1
    }, {
        data: [{
            name: '中兴VIMS',
            value: 1
        }],
        label: {
            show: true,
            position: 'inside',
            formatter: '{b}',
            offset: [0, 10],
            textStyle: {
                color: '#777'
            }
        },
        type: 'bar',
        barCategoryGap: 0,
        barGap: 0,
        barWidth: '14.285%',
        itemStyle: {
            normal: {
                color: 'rgba(302,107,64, .5)'
            }
        },
        xAxisIndex: 1,
        yAxisIndex: 1
    }, {
        data: [{
            name: '华为智能网',
            value: 1
        }],
        label: {
            show: true,
            position: 'inside',
            formatter: '{b}',
            offset: [0, 10],
            textStyle: {
                color: '#777'
            }
        },
        type: 'bar',
        barCategoryGap: 0,
        barGap: 0,
        barWidth: '14.285%',
        itemStyle: {
            normal: {
                color: 'rgba(409,76,54, .5)'
            }
        },
        xAxisIndex: 1,
        yAxisIndex: 1
    }]
};