option = {
    title: {
        text: "2019.12.13~2019.12.19每日绑定环比（日）、同比（周）",
        left: "center",
        y: "10",
        textStyle: {
            color: "#fff"
        }
    },
    backgroundColor: "#1c2e40",
    color: "#FFFFFF",
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "cross",
            crossStyle: {
                color: "#FFFFFF"
            }
        }
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            saveAsImage : {show: true}
        }
    },
    legend: {
        data: [{
                name: "上周该日新增绑定用户数",
                icon: "bar",
                textStyle: {
                    color: "#FFFFFF"
                }
            },
            {
                name: "日新增绑定人数",
                icon: "bar",
                textStyle: {
                    color: "#FFFFFF"
                }
            },
            {
                name: "新增绑定环比（日）",
                icon: "circle",
                textStyle: {
                    "color": "#FFFFFF"
                }
            },
            {
                name: "新增绑定同比（周）",
                icon: "circle",
                textStyle: {
                    "color": "#FFFFFF"
                }
            }
        ],
        top: "10%",
        textStyle: {
            color: "#fff"
        }
    },
    xAxis: [{
        type: "category",
        data: [
            "12月13日",
            "12月14日",
            "12月15日",
            "12月16日",
            "12月17日",
            "12月18日"
        ],
        axisPointer: {
            type: "shadow"
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#FFFFFF"
            }
        }
    }],
    yAxis: [{
            type: "value",
            name: "人数",
            nameTextStyle: {
                color: "#FFFFFF"
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#FFFFFF"
                }
            }
            
        },
        {
            type: "value",
            name: "百分比",
            nameTextStyle: {
                color: "#FFFFFF"
            },
            axisLabel: {
                show: true,
                formatter: '{value} %',
                textStyle: {
                    color: "#FFFFFF"
                }
            }
        }
    ],
    grid: {
        top: "20%"
    },
    series: [{
            name: "上周该日新增绑定用户数",
            type: "bar",
            data: [
                131,
                175,
                36,
                12,
                45,
                80
            ],
            barWidth: "auto",
            itemStyle: {
                normal: {
                    "color": "#48a1c7"
                }
            }
        },
        {
            name: "日新增绑定人数",
            type: "bar",
            data: [
                289,
                415,
                36,
                12,
                8,
                6
            ],
            barWidth: "auto",
            itemStyle: {
                normal: {
                    color: "#c75548"
                }
            }
        },
        {
            name: "新增绑定环比（日）",
            type: "line",
            yAxisIndex: 1,
            data: [
                100,
                33,
                78,
                56,
                89,
                91.23
            ],
            itemStyle: {
                normal: {
                    color: "#7FFF00"
                }
            },
            smooth: true
        },
        {
            name: "新增绑定同比（周）",
            type: "line",
            yAxisIndex: 1,
            data: [
                23.56,
                33,
                67,
                12.11,
                34.78,
                -34
            ],
            itemStyle: {
                normal: {
                    color: "#ae6fa3"
                }
            },
            smooth: true
        }
    ]
};