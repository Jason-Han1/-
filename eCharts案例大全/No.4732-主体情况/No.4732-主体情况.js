var barWidth = 18;
var normalColor = "#ffffff";
var fontSize = 12;
var datas = {
    xdata: ['2016', '2017', '2018', '2019'],
    yData1: [4200, 2220, 3910, 5340],
    yData2: [-10, 20, -36, 51],
    yData3: [10, 20, 36, 81],
    legendData: ['存量', '注册', '注销'],
}
option = {
    backgroundColor: " #25397b ",
    animation: false, //去除加载时缓动动画
    legend: {
        type: "scroll",
        right: "10%",
        top: "5%",
        textStyle: {
            color: "#ffffff",
            fontSize: 10,
        },
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
                show: false,
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
            name: datas.legendData[0],
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
                        color: '#09EBF1'
                    }, {
                        offset: 1,
                        color: '#087189'
                    }]),
                    barBorderRadius: [30, 30, 0, 0],
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
                    color: "#00F371" //legend 图标颜色，及tooltip 图标颜色
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
                color: "#00F371"
            },
            data: datas.yData2,
        },
        {
            name: datas.legendData[2],
            type: 'line',
            yAxisIndex: 1,
            z: 22,
            smooth: true,
            symbol: "none",
            symbolSize: 8,
            itemStyle: {
                normal: {
                    color: "#ED7B15"
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
                color: "#ED7B15"
            },
            data: datas.yData3,
        }
    ]
};