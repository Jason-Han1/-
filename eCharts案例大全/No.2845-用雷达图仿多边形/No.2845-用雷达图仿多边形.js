const data2 = [1234,2345,3456,4567,5678]
let i = -1
option = {
    title: {
        text: "{a|96.34%}\n{b|发动机阿克苏放\n得开}",
        x: "center",
        y: "center",
        textStyle: {
            fontSize: 12,
            rich: {
                a: {
                    color: '#ff0000',
                    fontSize: 18,
                    align: 'center'
                },
                b: {
                    color: '#ff00ff',
                    fontSize: 12,
                    height: 16,
                    align: 'center'
                }
            }
        }
    },
    grid:{
        top:'10%'
    },
    tooltip: {
        show: false,
        trigger: "item"
    },
    radar: {
        name: { // (圆外的标签)雷达图每个指示器名称的配置项。
            formatter: (a, b) => {
                i+=1
                return '{a|' + data2[i] + '%}\n{b|' + a + '}'
            },
            textStyle: {
                fontSize: 15,
                color: '#000',
                rich: {
                a: {
                    color: '#ff0000',
                    fontSize: 18,
                    align: 'center'
                },
                b: {
                    color: '#ff00ff',
                    fontSize: 12,
                    height: 16,
                    align: 'center'
                }
            }
            }
        },
        nameGap: 15,
        center: ["50%", "50%"],
        radius: "70%",
        splitArea: {
            areaStyle: {
                color: ["transparent"]
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(19, 173, 255, 1)"
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: "#a4a4a4"
            }
        },
        indicator: [{
            name: '专科1',
            "max": 100
        }, {
            name: '专科2',
            "max": 100
        }, {
            name: '专科3',
            "max": 100
        }, {
            name: '专科4',
            "max": 100
        }, {
            name: '专科5',
            "max": 100
        }]
    },
    series: [{
        type: "radar",
        name:'月度风险指数',
        symbol: "circle",
        symbolSize: 1,
        itemStyle: {
            normal: {
                color:'rgba(19, 173, 255, 1)',
                borderColor: "rgba(19, 173, 255, 0.4)",
                borderWidth: 1
            }
        },
        areaStyle: {
            normal: {
                color: "rgba(19, 173, 255, 0.1)"
            }
        },
        lineStyle: {
            normal: {
                color: "rgba(19, 173, 255, 1)",
                width: 2,
                type: "solid"
            }
        },
        label: {
          normal: {
            show: false,
            color: '#a4a4a4',
            position: 'top',
            formatter: params => {
                console.log(params)
                return '{a|99.99%}\n{b|发动机是克劳福德}'
            }
          }
        },
        data: [
            [100, 100, 100, 100, 100]
        ]
    }, 
    {
        type: "radar",
        name:'月度风险指数',
        symbol: "circle",
        symbolSize: 1,
        itemStyle: {
            normal: {
                color:'rgba(19, 173, 255, 1)',
                borderColor: "rgba(19, 173, 255, 1)",
                borderWidth: 1
            }
        },
        areaStyle: {
            normal: {
                opacity: 1,
                color: "rgba(19, 173, 255, 0.5)"
            }
        },
        lineStyle: {
            normal: {
                color: "rgba(19, 173, 255, 1)",
                width: 1,
                type: "solid"
            }
        },
        data: [
            [50, 50, 50, 50, 50]
        ]
    }, 
    {
        type: "radar",
        name:'月度风险指数',
        symbol: "circle",
        symbolSize: 1,
        itemStyle: {
            normal: {
                color:'rgba(19, 173, 255, 1)',
                borderColor: "rgba(19, 173, 255, 1)",
                borderWidth: 1
            }
        },
        areaStyle: {
            normal: {
                opacity: 1,
                color: "rgba(19, 173, 255, 1)"
            }
        },
        lineStyle: {
            normal: {
                color: "rgba(19, 173, 255, 1)",
                width: 1,
                type: "solid"
            }
        },
        data: [
            [30, 30, 30, 30, 30]
        ]
    }]
};