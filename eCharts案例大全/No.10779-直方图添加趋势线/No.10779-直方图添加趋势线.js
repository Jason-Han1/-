//ecStat 是 ECharts 的统计扩展，需要额外添加扩展脚本，参加上方“脚本”
// 详情请移步 https://github.com/ecomfe/echarts-stat
// 图中的曲线是通过指数回归拟合出的

var data2 = [
    [3, 16.2],
    [6, 32.3],
    [9, 19.4],
    [12, 25.5],
    [15, 19.3],
    [18, 25.0],
    [21, 29.0],
    [24, 27.0],
    [27, 29.0],
    [30, 18.0],
    [33, 24.0],
    [36, 12.0],
    [39, 12.0],
    [42, 16.0],
    [45, 12.0],
    [48, 9.0],
    [51, 9.0],
    [54, 2.0],
    [57, 5.0],
    [60, 5.0],
    [63, 3.0],
    [66, 8.0],
    [69, 5.0],
    [72, 2.0],
    [75, 5.0],
    [78, 2.0],
    [81, 1.0],
    [84, 4.0],
    [87, 2.0],
    [90, 3.0],
    [93, 2.0],
    [96, 3.0],
    [99, 5.0],
    [102, 0.0],
    [105, 2.0],
    [108, 3.0],
    [111, 3.0],
    [114, 1.0],
    [117, 0.0],
    [120, 2.0],
    [121, 2.0]
]

var testData = [
    16,
    32,
    19,
    25,
    19,
    25,
    29,
    27,
    29,
    18,
    24,
    12,
    12,
    16,
    12,
    9,
    9,
    2,
    5,
    5,
    3,
    8,
    5,
    2,
    5,
    2,
    1,
    4,
    2,
    3,
    2,
    3,
    5,
    0,
    2,
    3,
    3,
    1,
    0,
    2
]

var firstData = [
    3,
    6,
    9,
    12,
    15,
    18,
    21,
    24,
    27,
    30,
    33,
    36,
    39,
    42,
    45,
    48,
    51,
    54,
    57,
    60,
    63,
    66,
    69,
    72,
    75,
    78,
    81,
    84,
    87,
    90,
    93,
    96,
    99,
    102,
    105,
    108,
    111,
    114,
    117,
    120
]

var myRegression = ecStat.regression('polynomial', data2, 5);

console.log(myRegression)

myRegression.points.sort((a, b) => {
    // console.log(a, b)
    return a[0] - b[0];
});

myChart.setOption({
    title: {
        text: myRegression.expression,
        left: 'center',
        top: 21
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    xAxis: {
        type: 'category',
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    yAxis: {
        type: 'value',
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    dataZoom: [
        {
            type: 'slider'
        },
        {
            type: 'inside'
        }
    ],
    series: [{
        name: 'bar',
        type: 'bar',
        label: {
            emphasis: {
                show: true
            }
        },
        data: data2
    }, {
        name: 'line',
        type: 'line',
        showSymbol: false,
        smooth: true,
        data: myRegression.points,
        markPoint: {
            itemStyle: {
                normal: {
                    color: 'transparent'
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter: myRegression.expression,
                    textStyle: {
                        color: '#333',
                        fontSize: 14
                    }
                }
            },
            data: [{
                coord: myRegression.points[myRegression.points.length - 1]
            }]
        }
    }]
});