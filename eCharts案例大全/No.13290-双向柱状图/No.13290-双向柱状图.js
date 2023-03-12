var titleStyle = {
    fontSize: 15
};

//数据纯属虚构
var data = {
    "month": "1-5月",
    "xAxisData": ["2017年1-5月", "2018年1-5月"],
    "data1": [23509, 20457],
    "data2": [-12546, -19603],
    "data3": [-0.16, -0.20]
}

//柱状图高亮时候的样式
var emphasis = {
    barBorderWidth: 1,
    shadowBlur: 10,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    shadowColor: 'rgba(0,0,0,0.5)'
};

option = {
    title: {
        show: true,
        text: data.month + '财务费用情况（单位：万元，正数表示收益）',
        left: 'center',
        textStyle: titleStyle
    },
    legend: {
        data: ['费用1', '费用2', '费率'],
        align: 'left',
        left: 'center',
        //top: 30
        bottom: 10
    },
    toolbox: {
        orient: 'vertical',
        //top: 30,
        right: 10,
        feature: {
            saveAsImage: {
                show: true
            }
        }
    },
    tooltip: {},
    xAxis: {
        data: data.xAxisData,
        silent: false,
        axisLine: {
            onZero: true
        },
        splitLine: {
            show: false
        }
    },
    yAxis: [{
            position: 'left',
            axisTick: {
                show: false
            }, //刻度
            axisLine: {
                show: false
            }, //y轴
            splitLine: {
                show: false
            }
        },
        {
            position: 'right',
            axisTick: {
                show: false
            }, //刻度
            axisLine: {
                show: false
            }, //y轴
            splitLine: {
                show: false
            },
            axisLabel: {
                formatter: '{value}%'
            }
        }
    ],
    grid: {},
    series: [{
            name: '费用1',
            type: 'bar',
            stack: 'one',
            barWidth: 50,
            label: {
                show: true,
                position: 'inside'
            },
            itemStyle: {
                normal: {},
                emphasis: emphasis
            },
            data: data.data1
        },
        {
            name: '费用2',
            type: 'bar',
            stack: 'one',
            barWidth: 50,
            label: {
                show: true,
                position: 'inside'
            },
            itemStyle: {
                normal: {
                    color: '#0099CC'
                },
                emphasis: emphasis
            },
            data: data.data2
        },
        {
            name: '费率',
            type: 'line',
            yAxisIndex: 1,
            label: {
                show: true,
                position: 'right'
            },
            itemStyle: {
                normal: {
                    color: '#33CC33'
                },
                emphasis: emphasis
            },
            data: data.data3
        }
    ]
};