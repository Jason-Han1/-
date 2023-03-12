option = {
    backgroundColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#c86589'
        },
        {
            offset: 1,
            color: '#06a7ff'
        }
    ], false),
    title: {
        text: "光照强度和叶绿素",
        left: "center",
        bottom: "2%",
        textStyle: {
            color: "#fff",
            fontSize: 16
        }
    },
    legend: {
      
        data: [
            {name: '下枝', textStyle: {color: '#fff'}},
             {name: '中枝', textStyle: {color: '#fff'}},
              {name: '顶枝', textStyle: {color: '#fff'}},
        ]
    },
    grid: {
        top: '10%',
        left: '10%',
        right: '10%',
        bottom: '10%',
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ["3037", "3231", "3893", "4521", "7066", "9862", "10046", "10075", "11694", "13172"],
        axisLabel: {
            margin: 30,
            color: '#fff'
        },
        axisLine: {
            show: true,
             lineStyle: {
                color: "#fff"
            }
        },
        axisTick: {
            show: true,
            length: 25,
            lineStyle: {
                color: "#ffffff1f"
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#ffffff1f'
            }
        }
    },
    yAxis: [{
        type: 'value',
        position: 'right',
        axisLabel: {
            margin: 20,
            color: '#ffffff63'
        },

        axisTick: {
            show: true,
            length: 15,
            lineStyle: {
                color: "#ffffff1f",
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#ffffff1f'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#fff',
                width: 2
            }
        }
    }],
    series: [
        {
        name: '下枝',
        type: 'line',
        smooth: true, //是否平滑曲线显示
        showAllSymbol: true,
        symbol: 'circle',
        symbolSize: 16,
        lineStyle: {
            normal: {
                color: "#fff", // 线条颜色
            },
        },
        label: {
            show: true,
            position: 'top',
            textStyle: {
                color: '#fff',
            }
        },
        itemStyle: {
            color: "#1296db",
            borderColor: "#fff",
            borderWidth: 3
        },
        tooltip: {
            show: false
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#eb64fb'
                    },
                    {
                        offset: 1,
                        color: '#3fbbff0d'
                    }
                ], false),
            }
        },
        data: [2.2, 1.7, 1.6, 3.7, 3.7, 2, 3.4, 3.5, 4.5, 3.3]
    },
    {
        name: '中枝',
        type: 'line',
        smooth: true, //是否平滑曲线显示
        showAllSymbol: true,
        symbol: 'circle',
        symbolSize: 16,
        lineStyle: {
            normal: {
                color: "#fff", // 线条颜色
            },
        },
        label: {
            show: true,
            position: 'top',
            textStyle: {
                color: '#fff',
            }
        },
        itemStyle: {
            color: "red",
            borderColor: "#fff",
            borderWidth: 3
        },
        tooltip: {
            show: false
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#eb64fb'
                    },
                    {
                        offset: 1,
                        color: '#3fbbff0d'
                    }
                ], false),
            }
        },
        data: [7.4, 7, 6.6, 8.1, 12.5, 13, 10.2, 12.3, 10.5, 7.5]
    },
    {
        name: '顶枝',
        type: 'line',
        smooth: true, //是否平滑曲线显示
        showAllSymbol: true,
        symbol: 'circle',
        symbolSize: 16,
        lineStyle: {
            normal: {
                color: "#fff", // 线条颜色
            },
        },
        label: {
            show: true,
            position: 'top',
            textStyle: {
                color: '#fff',
            }
        },
        itemStyle: {
            color: "yellow",
            borderColor: "#fff",
            borderWidth: 3
        },
        tooltip: {
            show: false
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#eb64fb'
                    },
                    {
                        offset: 1,
                        color: '#3fbbff0d'
                    }
                ], false),
            }
        },
        data: [4.9, 5.4, 4.5, 6.9, 8.5, 7.9, 8.6, 7.8, 9.1, 7.3]
    },
    ]
};