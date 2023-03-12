option = {
    backgroundColor: '#fff',
    grid: {
        top: "25%",
        bottom: "10%" //也可设置left和right设置距离来控制图表的大小
    },
    tooltip: {
        trigger: "axis",
        formatter: function(params) {
            var html = params[0].name + "<br>";
            for (var i = 0; i < params.length; i++) {
                html += '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + params[i].color + ';"></span>'
                if (option.series[params[i].seriesIndex].valueType == "percent") {
                    html += params[i].seriesName + ":" + params[i].value + "%<br>";
                } else {
                    html += params[i].seriesName + ":" + params[i].value + "<br>";
                }
            }
            return html;
        }

    },
    axisPointer: {
        type: "shadow",
        label: {
            show: true
        }
    },
    legend: {
        data: ["总变化", "群转变化", "单独成交变化", "转介绍变化", "环比增长率"],
        top: "10%",
        textStyle: {
            color: "#333"
        }
    },
    xAxis: {
        data: [
            "3月第4期",
            "3月第5期",
            "4月第1期",
            "4月第2期",
            "4月第3期",

        ],
        axisLine: {
            show: true, //隐藏X轴轴线
            lineStyle: {
                color: '#333'
            }
        },
        axisTick: {
            show: true //隐藏X轴刻度
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#333" //X轴文字颜色
            }
        },

    },
    yAxis: [{
            type: "value",
            name: "环比升降值",
            nameTextStyle: {
                color: "#333"
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: true
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#333'
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#333"
                }
            },

        },
        {
            type: "value",
            name: "环比增长率",
            nameTextStyle: {
                color: "#333"
            },
            position: "right",
            splitLine: {
                show: true
            },
            axisTick: {
                show: true
            },
            axisLine: {
                show: true
            },
            axisLabel: {
                show: true,
                formatter: "{value} %", //右侧Y轴文字显示
                textStyle: {
                    color: "#333"
                }
            }
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
    series: [{
            name: "总变化",
            type: "bar",
            barWidth: 15,
            itemStyle: {
                normal: {
                    color: "#388BFF"
                }
            },
            data: [700, -300, 600, -100, 400]
        },
        {
            name: "群转变化",
            type: "bar",
            barWidth: 15,
            itemStyle: {
                normal: {
                    color: "#86D560"
                }
            },
            data: [400, -200, 400, -50, 250]
        },
        {
            name: "单独成交变化",
            type: "bar",
            barWidth: 15,
            itemStyle: {
                normal: {
                    color: "#AF89D6"
                }
            },
            data: [-50, 50, 100, 50, 50]
        },
        {
            name: "转介绍变化",
            type: "bar",
            barWidth: 15,
            itemStyle: {
                normal: {
                    color: "#F6931C"
                }
            },
            data: [350, 150, 100, -100, 100]
        },
        {
            name: "环比增长率",
            type: "line",
            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            smooth: true, //平滑曲线显示
            showAllSymbol: true, //显示所有图形。
            symbol: "circle", //标记的图形为实心圆
            symbolSize: 10, //标记的大小
            itemStyle: {
                //折线拐点标志的样式
                color: "#FFCC67"
            },
            lineStyle: {
                color: "#FFCC67"
            },
            data: [6, -2.99, 4.67, -1.92, 3.58],
            valueType: "percent"
        },
    ]
};