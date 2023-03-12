function H24() {
    var arr = [];
    for (var i = 0; i < 7; i++) {
        arr.push(i + '时');
    }
    return arr;
}
option = {
    title: {
        text: '时间用户量统计',
        textStyle: {
            align: 'center',
            color: '#333',
            fontSize: 20,
        },
        top: '3%',
        left: '10%',
    },
    backgroundColor: '#fff',
    grid: {
        top: "25%",
        bottom: "10%"
    },
    tooltip: {
        trigger: "axis"
    },
    legend: {
        data: ["历史7日平均"],
        top: "15%",
        textStyle: {
            color: "#333"
        }
    },
    xAxis: {
        data: H24(),
        axisLabel: {
            show: true,
            textStyle: {
                color: "#333" //X轴文字颜色
            },
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#fff'
            },
        },
        splitLine:{
            show: true,
            lineStyle: {
                color: '#ddd6d0'
            },
            interval:0,
        },
         boundaryGap: false
    },
    yAxis: [{
            type: "value",
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#ebf8ac"
                }
            }, 
            axisLine: {
                lineStyle: {
                    color: '#FFFFFF'
                }
            }
        },
        {
            type: "value",
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: false,
            }
        }
    ],
    series: [{
            name: "历史7日平均",
            type: "line",
            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            smooth: true, //平滑曲线显示
            showAllSymbol: true, //显示所有图形。
            symbol: "circle", //标记的图形为实心圆
            symbolSize: 10, //标记的大小
            itemStyle: {
                //折线拐点标志的样式
                color: "#ffa618" //
            },
            lineStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "#fad664"
                    },
                    {
                        offset: 1,
                        color: "#f66c2c"
                    }
                ])
            },
            areaStyle: {
                // color: "#fff8f2"
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "#fffbf6"
                    },
                    {
                        offset: 1,
                        color: "#fdf1e9"
                    }
                ])
            },
            data: [4.2, 3.8, 4.8, 3.5, 2.9, 2.8, 3, 5]
        }
    ]
};