var barWidth = 18;
var normalColor = "#00d6fd";
var fontSize = 12;
var datas = {
    xdata: ['2016', '2017', '2018', '2019'],
    yData1: [4200, 2220, 3910, 5340],
    yData2: [-10, 20, -36, 51],
    legendData: ['整改数量', '整改率'],
}
option = {
    animation: false, //去除加载时缓动动画
    legend: {
        show: true,
        right: '30px',
        y: '12px',
        textStyle: {
            color: '#00d6fd',
            fontSize: 12
        },
        itemHeight: 12, //修改icon图形大小
        selectedMode: true, //取消图例上的点击事件
        data: datas.legendData
    },
    grid: [{
        left: '6%',
        bottom: '8%',
        top: '25%',
        right: '6%',
        containLabel: true
    }],
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        type: 'category',
        axisLabel: {
            show: true,
            textStyle: {
                color: normalColor, //更改坐标轴文字颜色
                fontSize: fontSize //更改坐标轴文字大小
            }
        },
        axisLine: {
            lineStyle: {
                color: normalColor //更改坐标轴颜色
            }
        },
        data: datas.xdata,
    },
    yAxis: [{
            type: 'value',
            name: '',
            nameTextStyle: {
                color: normalColor
            },
            position: 'left',
            //设置坐标轴字体颜色和宽度
            axisLine: {
                lineStyle: {
                    color: normalColor,
                    width: 1
                }
            },
            //设置网格线颜色
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#0b244c'],
                    width: 1,
                    type: 'solid'
                }
            }

        },
        {
            type: 'value',
            name: "",
            nameTextStyle: {
                fontSize: fontSize
            },
            color: normalColor,
            axisTick: {
                "show": false
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                formatter: '{value}%',
                textStyle: {
                    color: normalColor,
                    fontSize: fontSize
                }
            },
            axisLine: {
                lineStyle: {
                    color: normalColor
                }
            },

        }
    ],
    series: [{
            name: '整改数量',
            type: 'bar',
            label: {
                show: false,
                position: 'top'
            },
            data: datas.yData1,
            barWidth: barWidth,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00d88b'
                    }, {
                        offset: 1,
                        color: '#147065'
                    }])
                }
            }
        },
        {
            name: datas.legendData[1],
            type: 'line',
            yAxisIndex: 1,
            z: 22,
            smooth: true,
            symbol: "none",
            symbolSize: 8,
            itemStyle: {
                normal: {
                    color: "#EDEE18"
                }
            },
            label: {
                normal: {
                    show: false,
                    position: 'top',
                    formatter: 'C',
                    textStyle: {
                        color: '#fff',
                        fontSize: fontSize
                    }
                }
            },
            lineStyle: {
                width: 2,
                color: "#FFCE59"
            },
            data: datas.yData2,
        }
    ]
};