var barWidth = 40;
var symbolSize = [barWidth, 20];
var symbolOffsetT = [0, -10]; //修改绿色柱子头部椭圆位置

var normalColor = "#c9c9c9";
var fontSize = 12;
var datas = {
    xdata: ['2016', '2017', '2018', '2019'],
    yData1: [4200, 2220, 3910, 5340],
    yData2: [-10, 20, -36, 51],
    legendData: ['隐患数', '环比'],
}
option = {
    backgroundColor: "#030A41",
    animation: false, //去除加载时缓动动画
    legend: {
        show: true,
        selectedMode: false, //取消图例上的点击事件
        data: datas.legendData,
        textStyle: {
            color: "#90979c",
        },
    },
    tooltip: {
        trigger: "axis",
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function(e) {
            // console.log(e[0].color.colorStops[0].color);
            var str =
                e[0].axisValue +
                "<br>" +
                "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:" +
                e[0].color.colorStops[0].color +
                ";'></span>" +
                "" +
                e[0].seriesName +
                " : " +
                e[0].value +
                "个<br>" +
                "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:" +
                e[1].color +
                ";'></span>" +
                "" +
                e[1].seriesName +
                " : " +
                e[1].value +
                "%";
            return str;
        },
    },
    xAxis: {
        axisLine: {
            lineStyle: {
                color: normalColor
            }
        },
        axisTick: {
            "show": false
        },
        axisLabel: {
            textStyle: {
                color: normalColor,
                fontSize: fontSize
            },
            margin: 20
        },
        splitLine: {
            show: false,
            lineStyle: {
                type: "dashed",
                color: normalColor
            }
        },
        data: datas.xdata,
    },
    yAxis: [{
            type: 'value',

            nameTextStyle: {
                fontSize: fontSize
            },
            color: normalColor,
            axisTick: {
                "show": false
            },
            splitLine: {
                show: false,
                lineStyle: {
                    type: "dashed",
                    color: normalColor
                }
            },
            axisLabel: {
                formatter: '{value}',
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

        },
        {
            type: 'value',
            // name: "%",
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

        },
         {
            type: "value",
            gridIndex: 0,
            min: 50,
            max: 100,
            splitNumber: 8,
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.05)"]
                }
            }
        }
    ],
    series: [{ // 柱子
            name: datas.legendData[0],
            tooltip: {
                show: true
            },
            type: 'bar',
            barWidth: barWidth, //柱子宽度
            barGap: 0.5, //柱子之间间距
            emphasis: {
                itemStyle: { //填充部分鼠标移上去颜色
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                                offset: 0,
                                color: '#2F7EFE'
                            },
                            {
                                offset: 1,
                                color: '#254FFE'
                            }
                        ]),


                }
            },
            label: {
                // show: true,
                position: "top",
                padding: 10,
                textStyle: {
                    fontSize: fontSize
                }
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                                offset: 0,
                                color: '#1D54B1'
                            },
                            {
                                offset: 1,
                                color: '#071F45'
                            }
                        ]),

                }
            },
            data: datas.yData1,
            barGap: 0,
            legendHoverLink: false,
        },
        {
            // 柱子头部椭圆
            name: datas.legendData[0],
            tooltip: {
                show: false
            },
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    color: '#3084FE',
                    borderWidth: 0,
                    // borderColor: '#94EFFF'
                }
            },
            symbolRotate: 0,
            symbolSize: symbolSize,
            symbolOffset: symbolOffsetT,
            symbolPosition: 'end',
            data: datas.yData1,
            z: 3
        },
        {
            // 柱子底部椭圆
            name: datas.legendData[0],
            tooltip: {
                show: false
            },
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    color: '#153B8E',
                    borderWidth: 0,
                    borderColor: '#94EFFF'
                }
            },
            symbolRotate: 0,
            symbolSize: symbolSize,
            // symbolSize: [30, 8],
            symbolOffset: [0, 10],
            // symbolOffset: symbolOffsetT,
            symbolPosition: 'start',
            data: datas.yData1,
            z: 3
        },
        {
            name: datas.legendData[1],
            type: 'line',
            symbolSize: 8,
            symbol: "circle",
            yAxisIndex: 1,
            z: 22,
            // symbol:"roundRect",
            // symbolSize:8,
            itemStyle: {
                normal: {
                    color: "#F1B145"
                }
            },
            label: {
                normal: {
                    show: false,
                    position: 'top',
                    formatter: 'C',
                    textStyle: {
                        color: '#F1B145',
                        fontSize: 16
                    }
                }
            },
            lineStyle: {
                width: 2,
                color: "#F1B145"
            },
            data: datas.yData2,
        }
    ]
};