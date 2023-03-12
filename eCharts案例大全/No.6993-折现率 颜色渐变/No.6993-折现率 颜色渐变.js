var color1 = ['#00B0F0', '#2e4f48'];
// var seriesData = [0, 1, 3, 10, 21, 27, 29];
var seriesData = [20, 20, 20, 20, 20, 20, 20];
var xAxisData = ['航班1', '航班2', '航班3', '航班4', '航班5', '航班6', '航班7'];

option = {
    backgroundColor: '#272b2b',
    color: color1,
    textStyle: {
        fontSize: 16
    },
    title: {
        text: '使用线条渐变实现折线图分段显示',
        left: 'center',
        top: '3%',
        textStyle: {
            color: '#fff',
            fontSize: 20
        }
    },
    legend: {
        show: true,
        orient: 'vertical',
        top: '9%',
        left: 'center',
        /*itemWidth: 15,
        itemHeight: 15,
        itemGap: 20,*/
        textStyle: {
            color: '#fff',
            fontSize: 14
        },
        data: ['自动']
    },
    xAxis: {
        type: 'category',
        data: [],
        axisLabel: {
            show: true,
            interval: 0,
            align: 'right',
            textStyle: {
                color: '#fff',
                fontSize: 16
            }
        },
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
        axisTick: {
            inside: true
        }
    },
    yAxis: {
        type: 'value',
        name: '累积延误（分钟）',
        axisLabel: {
            show: true,
            textStyle: {
                color: '#fff',
                fontSize: 14
            }
        },
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
        axisTick: {
            inside: true
        },
        splitArea: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    grid: {
        left: '45px',
        right: '5%',
        top: '15%',
        bottom: '5%',
        containLabel: true
    },
    series: [{
        name: '自动',
        data: [],
        type: 'line',
        smooth: false,
        lineStyle: {
            shadowBlur: 10,
            shadowColor: color1[0]
        },
        markLine: {
            symbol: 'circle',
            label: {
                normal: {
                    position: 'middle',
                    formatter: function(e) {
                        var name = e.name;
                        if (name !== '' && e.dataIndex == 2) {
                            name = name;
                        }

                        return name;
                    }
                }
            },
            data: []
        },
        markPoint: {
            symbolSize: 30,
            itemStyle: {
                color: '#FF0000'
            }
        }
    }]
};

var xAxisDatax = [];
var textStyle = {};
$.each(xAxisData, function(i, val) {
    if (i == 5) {
        textStyle = {
            borderColor: '#00B0F0',
            borderWidth: 1,
            padding: 6
        };
    } else if (i == 6) {
        textStyle = {
            borderColor: '#FF0000',
            borderWidth: 1,
            padding: 6
        };
    } else {
        textStyle = {
            padding: 6
        };
    }

    xAxisDatax.push({
        value: val,
        textStyle: textStyle
    });
});

// 计算最大拐点、最后一个受影响航班、后续航班
var maxPoint = [3, 4]; // 最大拐点段的开始及结束值（第一个点不算）
var totalPoint = xAxisData.length - 1; // 拐点个数（需减1）
var lastPointIndex = xAxisData.length - 2;
var nextPointIndex = xAxisData.length - 1;

// 获取最大数值
var maxValue = 35;

// 标线设置
option.series[0].markLine.data = [
    [{
            coord: [lastPointIndex, 0],
            valueIndex: 0,
            lineStyle: {
                color: color1[0]
            }
        },
        {
            coord: [lastPointIndex, seriesData[lastPointIndex]],
            valueIndex: 0
        }
    ],
    [{
            coord: [nextPointIndex, 0],
            valueIndex: 0,
            lineStyle: {
                color: '#FF0000'
            }
        },
        {
            coord: [nextPointIndex, seriesData[nextPointIndex]],
            valueIndex: 0
        }
    ],
    [{
            coord: [0, seriesData[nextPointIndex]],
            valueIndex: 1,
            value: seriesData[nextPointIndex],
            lineStyle: {
                color: color1[0]
            },
            x: '70',
            label: {
                show: true,
                position: 'middle',
                formatter: '{c}'
            }
        },
        {
            coord: [nextPointIndex, seriesData[nextPointIndex]],
            valueIndex: 1
        }
    ]

];

// 分段线条颜色设置
option.series[0].lineStyle.color = {
    colorStops: [{
            offset: 0,
            color: color1[0] // 第一段颜色-开始
        },
        {
            offset: maxPoint[0] / totalPoint,
            color: color1[0] // 第一段颜色-结束
        },
        {
            offset: maxPoint[0] / totalPoint,
            color: '#FF0000' // 第二段颜色-开始
        },
        {
            offset: maxPoint[1] / totalPoint,
            color: '#FF0000' // 第二段颜色-结束
        },
        {
            offset: maxPoint[1] / totalPoint,
            color: color1[0] // 第三段颜色-开始
        },
        {
            offset: 1,
            color: color1[0] // 第三段颜色-结束
        }
    ]
};

// 设置标注
option.series[0].markPoint.data = [{
    name: '',
    coord: [maxPoint[1], seriesData[maxPoint[1]] + 0.5]
}];

option.yAxis.max = maxValue;
option.xAxis.data = xAxisDatax;
option.series[0].data = seriesData;