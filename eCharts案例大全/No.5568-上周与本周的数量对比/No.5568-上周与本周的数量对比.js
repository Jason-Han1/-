let data = {
    xData: ['上周告警量', '本周告警量', '上周派单量', '本周派单量'],
    yData: [28527, 26436, 511, 561]

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
        barWidth:'30%',
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
            name: '告警量',
            value: 1
        }],
        label: {
            show: true,
            position: 'inside',
            formatter: '{b}',
            offset: [0, 10],
            textStyle: {
                // color: '#777',
                color:'#FF0000',
                fontSize:18
            }
        },
        type: 'bar',
        barGap: 0,
        barWidth: '50%',
        itemStyle: {
            normal: {
                color: 'rgba(134,176,237, .5)'
            }
        },
        xAxisIndex: 1,
        yAxisIndex: 1
    }, {
        data: [{
            name: '派单量',
            value: 1
        }],
        label: {
            show: true,
            position: 'inside',
            formatter: '{b}',
            offset: [0, 10],
            textStyle: {
                color: '#FF0000',
                fontSize:18
            }
        },
        type: 'bar',
        barGap: 0,
        barWidth: '50%',
        itemStyle: {
            normal: {
                color: 'rgba(40,191,126, .5)'
            }
        },
        xAxisIndex: 1,
        yAxisIndex: 1
    }]
};