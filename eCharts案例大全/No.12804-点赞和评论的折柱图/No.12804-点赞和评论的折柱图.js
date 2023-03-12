option = {
    color: '#1DACFF',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            crossStyle: {
                color: '#38A9F5'
            }
        },
        // 背景色
        backgroundColor: '#fff',
        borderColor: '#000',
        textStyle: {
            color: '#999'
        },
        padding: [8, 8],
        extraCssText: 'box-shadow:0px 10px 20px 2px rgba(56,169,245,0.15);'
    },
    legend: {
        data: ['点赞量', '评论量']
    },
    xAxis: [{
        type: 'category',
        data: ['11/1', '11/2', '11/3', '11/4', '11/5', '11/6', '11/7', '11/8', '11/9', '11/10', '11/11', '11/12']
    }],
    yAxis: [{
            type: 'value',
            name: '点赞量',
            axisLabel: {
                formatter(val) {
                    let tmp = []
                    if (val > 9999) {
                        tmp.push((val / 10000).toFixed(1) + 'w')
                    } else if (val > 999) {
                        tmp.push((val / 1000).toFixed(1) + 'k')
                    } else {
                        tmp.push(val)
                    }
                    return tmp
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#F9FAFA',
                    style: 'dotted'
                }
            },
             axisTick: {
                show: false
            }
        },
        {
            type: 'value',
            name: '评论量',
            axisLabel: {
                formatter(val) {
                    let tmp = []
                    if (val > 9999) {
                        tmp.push((val / 10000).toFixed(1) + 'w')
                    } else if (val > 999) {
                        tmp.push((val / 1000).toFixed(1) + 'k')
                    } else {
                        tmp.push(val)
                    }
                    return tmp
                }
            },
            splitLine: {
                show: false
            },
            axisTick: { // 隐藏刻度
                show: false
            }
        }
    ],
    series: [{
            name: '点赞量',
            type: 'bar',
            data: [1122, 4119, 7110, 2112, 2516, 2671, 1315, 1612, 3216, 2010, 6140, 3310],
            barWidth: 30 // 柱状图宽度
        },
        {
            name: '评论量',
            type: 'line',
            yAxisIndex: 1,
            data: [22220, 22222, 32203, 42250, 62230, 12202, 22203, 23224, 22230, 16225, 22120, 62222],
            itemStyle: {
                normal: {
                    // 背景颜色
                    color: 'rgba(61, 171, 245, 0.1)',
                    lineStyle: {
                        // 线条颜色
                        color: 'RGBA(58, 161, 255, 1)'
                    },
                    borderColor: '#00A2FF',
                    borderWidth: 2,
                    borderType: 'solid'
                }
            }
        }
    ]
};