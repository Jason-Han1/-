option = {
    backgroundColor: "#f8f4ed",
    title:{
        text:'黄配紫堆积面积图',
        left:'40%',
    },
    legend: {
        data: ['项目1', '项目2', '项目3', '项目4'],
        top:'5%',
        textStyle: {
            color: "#000",
            fontSize: 16
        }
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLine: { //  改变x轴颜色
            lineStyle: {
                color: '#26D9FF'
            }
        },
        axisLabel: { //  改变x轴字体颜色和大小
            textStyle: {
                color: "#000",
                fontSize: 16
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#fff'],
                width: 1,
                type: 'solid'
            }
        },
        boundaryGap: false,
    },
    yAxis: {
        type: 'value',
        axisLine: { //  改变y轴颜色
            show: false,
            lineStyle: {
                color: '#26D9FF'
            }
        },
        axisLabel: { //  改变y轴字体颜色和大小
            //formatter: '{value} m³ ', //  给y轴添加单位
            textStyle: {
                color: "#000",
                fontSize: 16
            },
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: ['#fff'],
                width: 1,
                type: 'solid'
            }
        }
    },
    series: [
    //     {
    //     type: 'line',
    //     smooth: false,
    //     symbol: 'circle',
    //     symbolSize: 0,
    //     markPoint: {
    //         symbol: "circle"
    //     },
    //     name: '项目1',
    //     data: [1220, 1352, 1401, 1834, 1690, 1630, 1620],
    //     itemStyle: {
    //         normal: {
    //             color: "#294E8F",
    //             borderColor: "#3D7EEB",
    //             borderWidth: 0
    //         }
    //     },
    //     lineStyle: {
    //         normal: {
    //             width: 0,
    //             color: "#327BFA",
    //             shadowColor: "#327BFA",
    //             shadowBlur: 0
    //         }
    //     },
    //     areaStyle: {
    //         color: {
    //             type: 'linear',
    //             x: 0,
    //             y: 0,
    //             x2: 0,
    //             y2: 1,
    //             colorStops: [{
    //                 offset: 0.5,
    //                 color: 'rgba(61,126,235,0.5)' // 0% 处的颜色
    //             }, {
    //                 offset: 1,
    //                 color: 'rgba(61,126,235,0)' // 100% 处的颜色
    //             }],
    //             global: false // 缺省为 false
    //         }
    //     }
    // },
    {
        type: 'line',
        smooth: false,
        symbol: 'square',
        symbolSize: 0,
        markPoint: {
            symbol: "circle"
        },
        data: [720, 952, 801, 934, 1290, 1330, 1320],
        name: '项目2',
        itemStyle: {
            normal: {
                color: "#0C7E5C",
                borderColor: "#17D8A1",
                borderWidth: 0
            }
        },
        lineStyle: {
            normal: {
                width: 0,
                color: "#17D8A1",
                shadowColor: "#17D8A1",
                shadowBlur: 0
            }
        },
        areaStyle: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0.5,
                    color: '#fce2a9' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#fce2a9' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            }
        }
    }, {
        type: 'line',
        smooth: false,
        symbol: 'square',
        symbolSize: 0,
        markPoint: {
            symbol: "circle"
        },
        data: [520, 752, 801, 734, 1220, 930, 1020],
        name: '项目3',
        itemStyle: {
            normal: {
                color: "#9C7E0A",
                borderColor: "#F4C907",
                borderWidth: 0
            }
        },
        lineStyle: {
            normal: {
                width: 0,
                color: "#F4C907",
                shadowColor: "#F4C907",
                shadowBlur: 0
            }
        },
        areaStyle: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0.5,
                    color: '#ebb43f' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#ebb43f' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            }
        }
    }, {
        type: 'line',
        smooth: false,
        symbol: 'square',
        symbolSize: 0,
        markPoint: {
            symbol: "circle"
        },
        data: [320, 352, 301, 334, 590, 630, 620],
        name: '项目4',
        itemStyle: {
            
            normal: {
                color: "#9C1937",
                borderColor: "#DB335A",
                borderWidth: 0
            }
        },
        lineStyle: {
            
            normal: {
                width: 0,
                color: "#DB335A",
                shadowColor: "#DB335A",
                shadowBlur: 0
            }
        },
        areaStyle: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0.5,
                    color: '#642b86' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#642b86' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            }
        }
    }]
};