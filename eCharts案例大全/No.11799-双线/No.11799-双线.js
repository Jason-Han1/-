option = {
    legend: {
        itemWidth: 25, //图例的宽度
        itemHeight: 5, //图例的高度
        itemGap: 100,
        // orient: 'vertical',
        left: "20%",
        top: "top",
        selectedMode: false, //取消图例上的点击事件
        data: [{
                icon: "roundRect",
                name: "患者数"
            },
            {
                icon: "roundRect",
                name: "新增报告数"
            }
        ]
    },
    grid: {
        left: "20",
        right: "30",
        bottom: "20",
        containLabel: true
    },
    tooltip: {
        trigger: "axis",
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "line" // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    xAxis: {
        boundaryGap: false, //x轴从0开始到结束显示
        data: ["12.1", "12.2", "12.3", "12.4", "12.5", "12.6", "12.7"],
        splitLine: {
            show: false
        }, //去除网格线
        splitArea: {
            show: false
        }, //保留网格区域
        axisTick: {
            show: false
        },
        axisLine: {
            onZero: false,
            show: true,
            lineStyle: {
                color: "#979797",
                width: 0.6 //这里是为了突出显示加上的
            }
            // symbol: ['none', 'arrow'],
            // symbolSize: [6, 12],
            // symbolOffset: [0, 8]
        },
        axisLabel: {
            interval: 0, //隔几个显示
            rotate: 30,
            showMinLabel: true,
            color: "#393C40"
        }
    },
    yAxis: {
        min: function(value) {
            return value.min - 0;
        },
        splitLine: {
            show: false
        }, //去除网格线
        splitArea: {
            show: false
        }, //保留网格区域
        axisLine: {
            show: true,
            lineStyle: {
                //轴上的线样式
                color: "#979797",
                width: 0.6 //这里是为了突出显示加上的
            }
            // symbol: ['none', 'arrow'],
            // symbolSize: [6, 12],
            // symbolOffset: [0, 8]
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            //轴上的数据样式
            color: "#393C40"
        }
    },
    series: [
        // For shadow
        {
            type: "line",
            showSymbol: false, //显示折线拐点
            itemStyle: {
                color: "#2390FF"
            }, //线条样式
            lineStyle: {
                color: "#2390FF"
            },
            areaStyle: {
                color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                            offset: 0,
                            color: "#cae4ff" // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: "#fff" // 100% 处的颜色
                        }
                    ],
                    globalCoord: false // 缺省为 false
                }
            },
            name: "患者数",
            z: 10,
            // animation: true,
            data: [120, 132, 201, 134, 90, 230, 210]
        },
        {
            type: "line",
            showSymbol: false, //显示折线拐点
            itemStyle: {
                //点样式
                color: "#3143FE"
            }, //线条样式
            lineStyle: {
                //折线样式
                color: "#3143FE"
            },
            areaStyle: {
                //区域样式
                color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                            offset: 0,
                            color: "#d1d5fe" // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: "#fff" // 100% 处的颜色
                        }
                    ],
                    globalCoord: false // 缺省为 false
                }
            },
            name: "新增报告数",
            // animation: true,
            data: [220, 232, 201, 234, 120, 330, 410]
        }
    ]
}