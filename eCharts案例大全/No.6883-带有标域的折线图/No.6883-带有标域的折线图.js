option = {
    backgroundColor: '#080b30',
    grid: {
        top: '10%',
        left: '3%',
        right: '3%',
        bottom: '3%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        label: {
            show: true
        }
    },
    legend: {
        // orient: 'vertical',
        // bottom:'20',      //可设定图例在左、右、居中
        // right:'0',     //可设定图例在上、下、居中
        padding: [10, 0, 0, 0], //可设定图例[距上方距离，距右方距离，距下方距离，距左方距离]
        show: true,
        textStyle: { //图例文字的样式
            color: '#fff',
            fontSize: 12
        },
        selectedMode: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: true,
        axisLabel: {
            color: '#909ca3'
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '909ca3'
            }
        },
        axisTick: {
            show: true,
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#195384'
            }
        },
        data: [2020, 2021]
    }],
    yAxis: {

        splitLine: {
            show: false,
            lineStyle: {
                color: '#22445a'
            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: "#c3c4c5",
                width: 1,
                type: "solid"
            },
        },
        min: 0,
        max: 150,
        axisLabel: {
            formatter: '{value} %',
            textStyle: {
                fontSize: 12,
                color: '#909ca3'
            },
        },
        axisTick: {
            show: false
        },
        splitArea: {
            show: false,
            areaStyle: {
                color: 'rgb(245,250,254)'
            }
        }
    },
    series: [


        {
            markArea: {
                silent: true,
                data: [
                    [{
                        name: '轻载',
                        yAxis: 0,
                        itemStyle: {
                            color: 'rgba(153,236,116,0.5)'
                        },
                    }, {
                        yAxis: 30
                    }],
                    [{
                        name: '重载',
                        yAxis: 30,
                        itemStyle: {
                            color: 'rgba(233,250,140,0.3)'
                        },
                    }, {
                        yAxis: 80,
                    }],
                    [{
                        name: '过载',
                        yAxis: 80,
                        itemStyle: {
                            color: 'rgba(255,0,0,0.3)'
                        }
                    }, {
                        yAxis: 150,
                    }]
                ]
            },

            name: '1#箱变1#变',
            data: [12, 24],
            type: 'line',
            smooth: true, //折线是否平滑
            areaStyle: {
                opacity: 0
            },
            itemStyle: {
                normal: {
                    color: "#5acfa4", //小圆点的颜色
                    lineStyle: {
                        color: "#5acfa4" //折线的颜色
                    }
                }
            },
        },
        {
            name: '1#箱变2#变',
            data: [12, 34],
            type: 'line',
            smooth: true, //是否平滑
            areaStyle: {
                opacity: 0
            },
            itemStyle: {
                normal: {
                    color: "#a7d1e5", //小圆点的颜色
                    lineStyle: {
                        color: "#a7d1e5" //折线的颜色
                    }
                }
            },
        },
        {
            name: '2#箱变1#变',
            data: [52, 14],
            type: 'line',
            smooth: true, //是否平滑
            areaStyle: {
                opacity: 0
            },
            itemStyle: {
                normal: {
                    color: "#8787e7", //小圆点的颜色
                    lineStyle: {
                        color: "#8787e7" //折线的颜色
                    }
                }
            },
        },
        {
            name: '2#箱变2#变',
            data: [42, 55],
            type: 'line',
            smooth: true, //是否平滑
            areaStyle: {
                opacity: 0
            },
            itemStyle: {
                normal: {
                    color: "#ac1edb", //小圆点的颜色
                    lineStyle: {
                        color: "#ac1edb" //折线的颜色
                    }
                }
            },
        },
        {
            name: '锅炉房1#变',
            data: [35, 28],
            type: 'line',
            smooth: true, //是否平滑
            areaStyle: {
                opacity: 0
            },
            itemStyle: {
                normal: {
                    color: "#a7d1e5", //小圆点的颜色
                    lineStyle: {
                        color: "#a7d1e5" //折线的颜色
                    }
                }
            },
        },
        {
            name: '锅炉房2#变',
            data: [19, 26],
            type: 'line',
            smooth: true, //是否平滑
            areaStyle: {
                opacity: 0
            },
            itemStyle: {
                normal: {
                    color: "#b76a26", //小圆点的颜色
                    lineStyle: {
                        color: "#b76a26" //折线的颜色
                    }
                }
            },
        },
        {
            name: '锅炉房3#变',
            data: [55, 34],
            type: 'line',
            smooth: true, //是否平滑
            areaStyle: {
                opacity: 0
            },
            itemStyle: {
                normal: {
                    color: "#e3e5a7", //小圆点的颜色
                    lineStyle: {
                        color: "#e3e5a7" //折线的颜色
                    }
                }
            },
        },
    ]

}