option = {
    grid: {
          left: "3%",
          right: "2%",
          bottom: "5%",
          //top: "18%",
          containLabel: true
        },
    xAxis: {
        position: "top",
        type: 'value',
        min: 0,
        max: 12,
        splitLine: {
            lineStyle: {
                color: '#FFF'
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        lineStyle: {
            type: 'dashed'
        },
        splitNumber: 10,
        axisLabel: {
            formatter: function(v) {
                for (var a = v; a < 12; a++) {
                    return a + 1 + "月";
                }
            },
            textStyle: {
                color: "#FFF",
                fontSize: 38,
                padding: [0, -90, 0, 0],
                fontWeight: 600
            }
        }
    },
    yAxis: {
        type: 'category',
        data: ['计划制定', '数据采集', '数据加载', '风险扫描', '专业复评', '风险应对'].reverse(),
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        name: "重点工作",
        nameTextStyle: {
            color: "#FFF",
            fontSize: 42,
            padding: [0, 190, -6, 0],
            fontWeight: 800
        },

        axisLabel: {
            textStyle: {
                color: "#FFF",
                fontSize: 38,
                padding: [0, 10, 0, 0],
                fontWeight: 600
            }
        },
        barWidth: 40

    },
    series: [{
            data: [0, 0, 0, 2, 3, 5].reverse(),
            type: 'bar',
            name: '柱状图',
            stack: "sum",
            barWidth: 60,
            itemStyle: {
                normal: {
                    color: "rgba(255,255,255,0)",
                }
            }
        },
        {
            z:1,
            data: [2, 5, 1.74, 1, 0.2, 0].reverse(),
            type: 'bar',
            name: '柱状图',
            stack: "sum",
            barWidth: 60,
            itemStyle: {
                normal: {
                    color: function(params){
                        if (params.name == "计划制定") {
                            return "#339933"
                        } else if (params.name == "数据采集") {
                            return "#DA683F"
                        } else if (params.name == "数据加载") {
                            return "#DA683F"
                        } else if (params.name == "风险扫描") {
                            return "#339933"
                        } else if (params.name == "专业复评") {
                            return "#C43045"
                        } else if (params.name == "风险应对") {
                            return ""
                        }
                    }
                }
            },
            label: {
                normal: {
                    show: true,
                    formatter: function(params) { //标签内容
                        if (params.name == "计划制定") {
                            return "298户,100%"
                        } else if (params.name == "数据采集") {
                            return "267户,90%"
                        } else if (params.name == "数据加载") {
                            return "53户,18%"
                        } else if (params.name == "风险扫描") {
                            return "298户,100%"
                        } else if (params.name == "专业复评") {
                            return ""
                        } else if (params.name == "风险应对") {
                            return ""
                        }

                    },
                    lineHeight: 20,
                    borderWidth: '1',
                    padding: [5, 15, 4],
                    color: '#FFF',
                    fontSize: 22,
                }
            }
        }, 
        { // 背景色
            z:2,
            type: 'bar',
            stack: 'sum',
            symbol: 'fixed',
            symbolSize: [40, 10],
            symbolMargin: -1,
            symbolRepeat: 'repeat',
            symbolBoundingData: 300,
            z: -10,
            data: [0, 1, 5.26, 0, 8.8, 7].reverse(),
            itemStyle: {
                normal: {
                    color: '#E6DDB9'
                }
            },
            label: {
                normal: {
                    show: true,
                    formatter: function(params) { //标签内容
                        if (params.name == "计划制定") {
                            return ""
                        } else if (params.name == "数据采集") {
                            return "31户"
                        } else if (params.name == "数据加载") {
                            return "245户"
                        } else if (params.name == "风险扫描") {
                            return ""
                        } else if (params.name == "专业复评") {
                            return "298户正在开展中"
                        } else if (params.name == "风险应对") {
                            return "298户"
                        }
                    },
                    lineHeight: 20,
                    borderWidth: '1',
                    padding: [5, 15, 4],
                    color: '#BB2E44',
                    fontSize: 22,
                }
            }
        }

    ]
};