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
        color: ["#49873e", "#c6956d","#2d51a5","#89f468"],
        data: ["次日留存","第3日留存","周留存","月留存"],
        top: "15%",
        textStyle: {
            color: "#333"
        }
    },
    xAxis: {
        data: ['1日','2日','3日','4日','5日','6日','7日'],//H24(),
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
            name: "次日留存",
            type: "line",
            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            smooth: true, //平滑曲线显示
            showAllSymbol: true, //显示所有图形。
            symbol: "circle", //标记的图形为实心圆
            symbolSize: 10, //标记的大小
            itemStyle: {
                //折线拐点标志的样式
                color: "#49873e" //
            },
            data: [1.2, 1.8, 3.8, 1.5, 2.9, 2.8, 3, 4]
        },
        {
            name: "第3日留存",
            type: "line",
            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            smooth: true, //平滑曲线显示
            showAllSymbol: true, //显示所有图形。
            symbol: "circle", //标记的图形为实心圆
            symbolSize: 10, //标记的大小
            itemStyle: {
                //折线拐点标志的样式
                color: "#c6956d" //
            },
            data: [1.5, 2.1, 1.4, 3.5, 2.3, 1.8, 2.2, 1.9]
        },
        {
            name: "周留存",
            type: "line",
            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            smooth: true, //平滑曲线显示
            showAllSymbol: true, //显示所有图形。
            symbol: "circle", //标记的图形为实心圆
            symbolSize: 10, //标记的大小
            itemStyle: {
                //折线拐点标志的样式
                color: "#2d51a5" //
            },
            data: [1.8, 2.5, 1.8, 1.1, 3.9, 4.3, 3, 3.3]
        },
        {
            name: "周留存",
            type: "line",
            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            smooth: true, //平滑曲线显示
            showAllSymbol: true, //显示所有图形。
            symbol: "circle", //标记的图形为实心圆
            symbolSize: 10, //标记的大小
            itemStyle: {
                //折线拐点标志的样式
                color: "#89f468" //
            },
            data: [1.3, 1.5, 1.1, 1, 3.1, 3.3, 1.7, 3.3]
        }
    ]
};