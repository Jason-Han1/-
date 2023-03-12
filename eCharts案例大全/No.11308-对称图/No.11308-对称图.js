var timeData = ['2019-1', '2019-2', '2019-3', '2019-4', '2019-5', '2019-6', '2019-7', '2019-8', '2019-9', '2019-10', '2019-11', '2019-12'];
var practiceData = [
    {name: '正向', value: [571, 522, 633, 675, 424, 384, 514, 482, 274, 0, 0, 0, 0]},
    {name: '违纪', value: [211, 555, 348, 225, 306, 351, 246, 288, 579, 0, 0, 0, 0]},
];
var legendData = practiceData.map(function(item) {
    return item.name
})
option = {
    color: ['#FA4D41', 'orange'],
    tooltip: {
        trigger: 'axis',
        formatter: function(e) {
            return e[0].name + '<br/>' + e[0].marker + e[0].seriesName + '：' + e[0].value + '<br/>' + e[1].marker + e[1].seriesName + '：' + e[1].value
        }
    },
    legend: {
        icon: 'roundRect',
        itemWidth: 14,
        itemHeight: 14,
        itemGap: 15,
        left: "right",
        data: legendData,
        textStyle: {
            // color: '#fff'
        }
    },
    axisPointer: {
        link: {
            xAxisIndex: 'all'
        },
        lineStyle: {
            color: 'red',
            width: 2
        }
    },
    dataZoom: [{
            show: true,
            realtime: true, // 拖动时，是否实时更新系列的视图
            start: 1,
            end: 40,
            height: 20,
            bottom: 50,
            xAxisIndex: [0, 1],
            handleSize: '0', // 滑动条的 左右2个滑动小块的大小
            handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
            fillerColor: '#3C62C0', // 拖动条的颜色
            borderColor: "none",
            backgroundColor: 'rgba(60, 98, 192, 0.302)',
            showDetail: false, // 即拖拽时候是否显示详细数值信息 默认true
        },
        {
            type: 'inside',
            realtime: true,
            start: 1,
            end: 40,
            xAxisIndex: [0, 1]
        }
    ],
    grid: [{
        top: 50,
        left: 56,
        right: 50,
        height: '40%',
        containLabel: true
    }, {
        left: 50,
        right: 50,
        top: '45%',
        height: '40%',
        containLabel: true
    }],
    xAxis: [{
            // show: false, // 隐藏 x 轴
            type: 'category',
            data: timeData,
            position: 'bottom',
            axisTick: {
                show: false // 是否显示坐标轴刻度
            },
            axisLine: {
                lineStyle: {
                    color: 'orange' // 刻度坐标线的颜色
                }
            },
            axisLabel: {
                textStyle: {
                    // 只展示一个坐标系的文字，把当前的置透明
                    color: 'rgba(255,255,255,0)'
                }
            },
            boundaryGap: true,
            // boundaryGap: ['1%', '1%'] // 左右2侧留白
        },
        {
            gridIndex: 1,
            type: 'category',
            data: timeData,
            position: 'top',
            axisTick: {
                show: false, // 是否显示坐标轴刻度
            },
            axisLine: {
                lineStyle: {
                    color: 'orange' // 刻度坐标线的颜色
                }
            },
            axisLabel: {
                // 设置轴上字体的颜色
                show: true,
                textStyle: {
                    color: "#333",
                    fontSize: 14,
                    fontWeight: 600
                }
            },
            boundaryGap: true,
            // boundaryGap: ['10%', '10%'] // 左右2侧留白
        }
    ],

    yAxis: [{
            type: 'value',
            gridIndex: 0,
            splitNumber: 4, // 坐标轴的分割段数
            axisLine: {
                lineStyle: {
                    color: 'orange'
                }
            },
            splitLine: {
                show: true, // 分割线
                lineStyle: {
                    color: "orange", // 分割线背景色
                    // width: 1 // 分割线宽度
                }
            },
            axisLabel: {
                margin: 15, // 刻度标签与轴线之间的距离
                textStyle: {
                    color: "#000",
                    fontSize: 14
                }
            }
        },
        {
            type: 'value',
            gridIndex: 1,
            inverse: true, // 翻转
            splitNumber: 4, // 坐标轴的分割段数
            axisLine: {
                lineStyle: {
                    color: 'orange'
                }
            },
            splitLine: {
                show: true, // 分割线
                lineStyle: {
                    color: "orange", // 分割线背景色
                    // width: 1 // 分割线宽度
                }
            },
            axisLabel: {
                margin: 15, // 刻度标签与轴线之间的距离
                textStyle: {
                    color: "#000",
                    fontSize: 14
                },
                formatter: function(e) {
                    if (e === 0) return e;
                    return '-' + e;
                }
            }
        }
    ],
    series: [{
            name: practiceData[0].name,
            type: 'line',
            xAxisIndex: 1,
            yAxisIndex: 1,
            symbol: 'circle', // 调整为实心远
            symbolSize: 8, // 节点的圆点大小
            hoverAnimation: true, // 节点的圆点动画
            data: practiceData[0].value
        },
        {
            name: practiceData[1].name,
            type: 'line',
            symbol: 'circle', // 调整为实心远
            symbolSize: 8,
            hoverAnimation: true,
            data: practiceData[1].value
        }

    ]
};