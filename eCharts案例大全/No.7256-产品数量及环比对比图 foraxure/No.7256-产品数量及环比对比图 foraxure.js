option = {
    /*  grid: {
        top: "20%",
        bottom: "12%"
      },*/
    backgroundColor: "#ffff",
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow",
            label: {
                show: true
            }
        }
    },
    legend: {
        data: ["环比增长", "产品数"],
        top: "2%",
        right: '10',
        textStyle: {
            color: "#21211D",
            fontSize: 12
        }
    },
    xAxis: {
        data: [
            '2019-05', '2019-06', '2019-07', '2019-08', '2019-09', '2019-10', '2019-11', '2019-12', '2020-01', '2020-02', '2020-03', '2020-04', '2020-05', '2020-06'
        ],
        axisLine: {
            show: true, //隐藏X轴轴线
            lineStyle: {
                color: '#21211D',
                width: 1
            }
        },
        axisTick: {
            show: true //隐藏X轴刻度
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#21211D", //X轴文字颜色
                fontSize: 12
            }
        },
        splitArea: {
            show: true,
            areaStyle: {
                color: ["rgba(250,250,250,0.1)", "rgba(250,250,250,0)"]
            }
        }
    },
    yAxis: [{
            type: "value",
            /*name: "亿元",*/
            nameTextStyle: {
                color: "#21211D",
                fontSize: 16
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
                    color: '#21211D',
                    width: 1
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#21211D",
                    fontSize: 12
                }
            },

        },
        {
            type: "value",
            /*name: "同比",*/
            nameTextStyle: {
                color: "#21211D",
                fontSize: 16
            },
            position: "right",
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
                show: true,
                formatter: "{value} %", //右侧Y轴文字显示
                textStyle: {
                    color: "#21211D",
                    fontSize: 12
                }
            }
        }
    ],
    series: [{
            name: "环比增长",
            type: "line",
            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            smooth: true, //平滑曲线显示
            showAllSymbol: true, //显示所有图形。
            symbol: "circle", //标记的图形为实心圆
            symbolSize: 2, //标记的大小
            itemStyle: {
                //折线拐点标志的样式
                color: "#F08E4C",
                borderColor: "#F08E4C",
                width: 1,
                shadowColor: "#F08E4C",
                shadowBlur: 1
            },
            lineStyle: {
                color: "#F08E4C",
                width: 1,
                shadowColor: "#F08E4C",
                shadowBlur: 1
            },

            data: ['613', '338', '953', '893', '201', '859', '634', '959', '590', '892', '398', '860', '972', '452']
        },
        {
            name: "产品数",
            type: "bar",
            barWidth: 15,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#0199FF'
                    }, {
                        offset: 1,
                        color: '#0199FF'
                    }]),
                    borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#0199FF'
                    }, {
                        offset: 1,
                        color: '#0199FF'
                    }]),
                    borderWidth: 2
                }
            },
            data: ['1016', '641', '802', '144', '310', '322', '698', '247', '654', '531', '302', '467', '1042', '821']
        }
    ]
};