option = {
    backgroundColor: "#0f375f",
    legend: {
        data: ['项目1', '项目2', '项目3', '项目4'],
        textStyle: {
            color: "#fff",
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
                color: "rgba(250,250,250,0.6)",
                fontSize: 16
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: ['#315070'],
                width: 1,
                type: 'solid'
            }
        }
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
                color: "rgba(250,250,250,0.6)",
                fontSize: 16
            },
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#315070'],
                width: 1,
                type: 'solid'
            }
        }
    },
    series: [{
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 7,
        markPoint: {
            symbol: "circle"
        },
        name: '项目1',
        data: [1220, 1352, 1401, 1834, 1690, 1630, 1620],
        itemStyle: {
            normal: {
                color: "#294E8F",
                borderColor: "#3D7EEB",
                borderWidth: 2
            }
        },
        lineStyle: {
            normal: {
                width: 2,
                color: "#327BFA",
                shadowColor: "#327BFA",
                shadowBlur: 10
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
                    color: 'rgba(61,126,235,0.5)' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: 'rgba(61,126,235,0)' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            }
        }
    }, {
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 7,
        markPoint: {
            symbol: "circle"
        },
        data: [720, 952, 801, 934, 1290, 1330, 1320],
        name: '项目2',
        itemStyle: {
            normal: {
                color: "#0C7E5C",
                borderColor: "#17D8A1",
                borderWidth: 2
            }
        },
        lineStyle: {
            normal: {
                width: 2,
                color: "#17D8A1",
                shadowColor: "#17D8A1",
                shadowBlur: 10
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
                    color: 'rgba(23,216,161,0.5)' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: 'rgba(23,216,161,0)' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            }
        }
    }, {
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 7,
        markPoint: {
            symbol: "circle"
        },
        data: [520, 752, 801, 734, 1220, 930, 1020],
        name: '项目3',
        itemStyle: {
            normal: {
                color: "#9C7E0A",
                borderColor: "#F4C907",
                borderWidth: 2
            }
        },
        lineStyle: {
            normal: {
                width: 2,
                color: "#F4C907",
                shadowColor: "#F4C907",
                shadowBlur: 10
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
                    color: 'rgba(244,201,7,0.5)' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: 'rgba(244,201,7,0)' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            }
        }
    }, {
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 7,
        markPoint: {
            symbol: "circle"
        },
        data: [320, 352, 301, 334, 590, 630, 620],
        name: '项目4',
        itemStyle: {
            normal: {
                color: "#9C1937",
                borderColor: "#DB335A",
                borderWidth: 2
            }
        },
        lineStyle: {
            normal: {
                width: 2,
                color: "#DB335A",
                shadowColor: "#DB335A",
                shadowBlur: 10
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
                    color: 'rgba(219,51,90,0.5)' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: 'rgba(219,51,90,0)' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            }
        }
    }]
};