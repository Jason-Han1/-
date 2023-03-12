let data = {
    xData: ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0'],
    yData: [1, 1, 1, 1, 1,1, 1, 1, 1, 1]
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
    grid: [
        {
            top: 100,
            height: 50,
            bottom: 10
        },
        {
            top: 151,
            height: 50,
            bottom: 40
        }
    ],
    xAxis: [{
        type: 'category',
        data: data.xData,
        gridIndex: 0,
        axisLabel: {
            color: '#333',
            position: 10
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
            color: '#333',
            show: false,
            max: 1
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
    },{
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
                    let colors = ['#4150d8', '#28bf7e', '#ed7c2f', '#f2a93b', '#f9cf36', '#4a5bdc', '#4cd698', '#f4914e', '#fcb75b', '#ffe180', '#b6c2ff', '#96edc1']
                    return colors[params.dataIndex]
                }
            }
        },
        xAxisIndex: 0,
        yAxisIndex: 0
    },{
        data: [{
            name: '健康',
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
        barWidth: '30%',
        itemStyle: {
            normal: {
                color: 'rgba(134,176,237, .5)'
            }
        },
        xAxisIndex: 1,
        yAxisIndex: 1
    },{
        data: [{
            name: '亚健康',
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
        barWidth: '30%',
        itemStyle: {
            normal: {
                color: 'rgba(40,191,126, .5)'
            }
        },
        xAxisIndex: 1,
        yAxisIndex: 1
    },{
        data: [{
            name: '危险',
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
        barWidth: '40%',
        itemStyle: {
            normal: {
                color: 'rgba(237,124,47, .5)'
            }
        },
        xAxisIndex: 1,
        yAxisIndex: 1
    }]
};
