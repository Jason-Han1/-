let data = {
    xData: ['cpu', '内存', '磁盘', 'cpu', '内存', '磁盘', 'cpu', '内存', '磁盘', 'cpu', '内存', '磁盘',],
    yData: [10, 15, 18, 25, 23, 32, 33, 36, 57, 72, 45, 45],
    y1Data: [20, 50, 80, 50, 30, 50, 60, 60, 70, 90, 50, 50]
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
    title: {
        text: "总体IaaS核心指标使用情况(%)",
        textStyle: {
            fontSize: 24
        },
        left: '40%'
    },
    legend: {
        top: 50,
        right: 80,
        data: ['均值', '峰值']
    },
    grid: [
        {
            top: 100,
            bottom: 101
        },
        {
            height: 60,
            bottom: 40
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
        name: '均值',
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
                    let colors = ['#b6c2ff', '#96edc1', '#fcb75b', '#b6c2ff', '#96edc1', '#fcb75b','#b6c2ff', '#96edc1', '#fcb75b','#b6c2ff', '#96edc1', '#fcb75b']
                    return colors[params.dataIndex]
                }
            }
        },
        xAxisIndex: 0,
        yAxisIndex: 0
    },{
        name: '峰值',
        data: data.y1Data,
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
                    let colors = ['#4150d8', '#28bf7e', '#ed7c2f', '#4150d8', '#28bf7e', '#ed7c2f', '#4150d8', '#28bf7e', '#ed7c2f', '#4150d8', '#28bf7e', '#ed7c2f']
                    return colors[params.dataIndex]
                }
            }
        },
        xAxisIndex: 0,
        yAxisIndex: 0
    },{
        data: [{
            name: '天翼云',
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
        barWidth: '25%',
        itemStyle: {
            normal: {
                color: 'rgba(134,176,237, .5)'
            }
        },
        xAxisIndex: 1,
        yAxisIndex: 1
    },{
        data: [{
            name: '天翼云',
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
        barWidth: '25%',
        itemStyle: {
            normal: {
                color: 'rgba(40,191,126, .5)'
            }
        },
        xAxisIndex: 1,
        yAxisIndex: 1
    },{
        data: [{
            name: '天翼云',
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
        barWidth: '25%',
        itemStyle: {
            normal: {
                color: 'rgba(237,124,47, .5)'
            }
        },
        xAxisIndex: 1,
        yAxisIndex: 1
    },{
        data: [{
            name: '天翼云',
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
        barWidth: '25%',
        itemStyle: {
            normal: {
                color: 'rgba(242,169,59, .5)'
            }
        },
        xAxisIndex: 1,
        yAxisIndex: 1
    }]
};
