var maxdata = [683, 234, 234, 523, 345, 683, 234, 234, 523, 345, 999]
option={
    tooltip: {
        show: true,
        formatter: function(v) {
            return "总数：" + maxdata[v.dataIndex] + "<br/>接入数量:" + v.data.value1 + "<br/>占比:" + v.data.value + "%";
        },
        textStyle: {
            fontSize: 12
        }
    },
    toolbox: {
        show: true,
        itemSize: 14,
        top: 10,
        right: 20,
        itemGap: 20,
        feature: {
            saveAsImage: {}
        }
    },
    title: {
        text: "接入账户统计",
        textStyle: {
            color: "#333"
        },
        subtext: "",
        subtextStyle: {
            color: "#666"
        },
        padding: 20
    },
    grid: {
        left: "0px",
        right: "30px",
        top: "60px",
        bottom: "10px",
        containLabel: true
    },
    xAxis: [{
            splitLine: {
                show: false
            }, //去除网格线
            type: "category",
            data: [
                "南昌",
                "景德镇",
                "萍乡",
                "九江",
                "新余",
                "鹰潭",
                "赣州",
                "吉安",
                "宜春",
                "抚州",
                "上饶"
            ]
        },
        {
            show: true,
            data: maxdata,
            axisLabel: {
                textStyle: {
                    fontSize: 12,
                    color: "#000"
                }
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        }
    ],
    yAxis: {
        show: false,
        splitLine: {
            show: false
        }, //去除网格线
        type: "value",
        min: 0,
        max: 100
    },
    series: [{
            name: "",
            type: "bar",
            tooltip: {
                show: false
            },
            data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
            barGap: "-100%",
            barWidth: "60px",
            itemStyle: {
                normal: {
                    color: "rgb(240,240,240)"
                },
                emphasis: {
                    color: "rgb(240,240,240)"
                }
            }
        },
        {
            name: "接入数量",
            type: "bar",
            itemStyle: {
                color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                            offset: 0,
                            color: "rgba(41, 121, 255, 1)" // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: "rgba(0, 192, 255, 1)" // 100% 处的颜色
                        }
                    ],
                    globalCoord: false // 缺省为 false
                }
            },
            label: {
                normal: {
                    show: true,
                    position: "inside",
                    formatter: function(v) {
                        return v.data.value1+'\n\n'+v.data.value+'%';
                    }
                }
            },
            data: [{
                    value: 43,
                    value1: 300
                },
                {
                    value: 42,
                    value1: 100
                },
                {
                    value: 42,
                    value1: 100
                },
                {
                    value: 19,
                    value1: 100
                },
                {
                    value: 28,
                    value1: 100
                },
                {
                    value: 43,
                    value1: 100
                },
                {
                    value: 42,
                    value1: 100
                },
                {
                    value: 19,
                    value1: 100
                },
                {
                    value: 63,
                    value1: 330
                },
                {
                    value: 35,
                    value1: 121
                },
                {
                    value: 49,
                    value1: 200
                }
            ],
            z: 9,
            barWidth: "60px"
        }
    ],
    backgroundColor:'#fff'
}