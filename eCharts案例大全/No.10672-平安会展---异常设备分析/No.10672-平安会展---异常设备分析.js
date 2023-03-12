var rich = {
    radius: {
        lineHeight: 30,
        width: 120,
        height: 30,
        backgroundColor: '#0C1B3C',
        borderRadius: 5,
        borderColor: '#323C57',
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },
}
option = {
    backgroundColor: "#000",
    color: ["#EAEA26", "#906BF9", "#01E17E", "#3DD1F9", "#FFAD05", "#FE5656", ],
    grid: {
        left: -100,
        top: 50,
        bottom: 10,
        right: 10,
        containLabel: true
    },
    tooltip: {
        trigger: 'item',
        formatter: function(params) {
            return params.name + " " + params.value + "%";
        }
    },
    legend: {
        type: "scroll",
        orient: "vartical",
        icon: 'circle',
        // x: "right",
        top: "center",
        right: "15",
        // bottom: "0%",
        itemWidth: 16,
        itemHeight: 8,
        itemGap: 16,
        textStyle: {
            color: '#A3E2F4',
            fontSize: 12,
            fontWeight: 0
        },
        data: ['未知异常', '报废设备', '停运设备', '离线设备', '检修设备', '故障设备']
    },
    polar: {},
    angleAxis: {
        interval: 1,
        type: 'category',
        data: [],
        z: 10,
        axisLine: {
            show: false,
        },
        axisLabel: {
            interval: 0,
            show: true,
            color: "#0B4A6B",
            margin: 8,
            fontSize: 16
        },

    },
    radiusAxis: {
        min: 40,
        max: 120,
        interval: 20,
        axisLine: {
            show: false,
            lineStyle: {
                color: "#0B3E5E",
                width: 1,
                type: "solid"
            },
        },
        axisLabel: {
            formatter: '{value} %',
            show: false,
            padding: [0, 0, 20, 0],
            color: "#0B3E5E",
            fontSize: 16
        },
        splitLine: {
            show: false
        },
        axisTick: false
    },
    calculable: true,
    series: [{
            type: 'pie',
            radius: ["0%", "3%"],
            hoverAnimation: false,
            labelLine: {
                normal: {
                    show: false,
                    length: 30,
                    length2: 55
                },
                emphasis: {
                    show: false
                }
            },
            name: "",
            data: [{
                name: '',
                value: 0,
                itemStyle: {
                    normal: {
                        color: "rgba(80,84,93,1)"
                    }
                }
            }]
        },
        {
            type: 'pie',
            radius: ["3%", "5%"],
            hoverAnimation: false,
            labelLine: {
                normal: {
                    show: false,
                    length: 30,
                    length2: 55
                },
                emphasis: {
                    show: false
                }
            },
            name: "",
            data: [{
                name: '',
                value: 0,
                itemStyle: {
                    normal: {
                        color: "rgba(71,75,83,1)"
                    }
                }
            }]
        },
        {
            type: 'pie',
            radius: ["5%", "7%"],
            hoverAnimation: false,
            labelLine: {
                normal: {
                    show: false,
                    length: 30,
                    length2: 55
                },
                emphasis: {
                    show: false
                }
            },
            name: "",
            data: [{
                name: '',
                value: 0,
                itemStyle: {
                    normal: {
                        color: "rgba(80,84,93,1)"
                    }
                }
            }]
        },
        {
            type: 'pie',
            radius: ["7%", "9%"],
            hoverAnimation: false,
            labelLine: {
                normal: {
                    show: false,
                    length: 30,
                    length2: 55
                },
                emphasis: {
                    show: false
                }
            },
            name: "",
            data: [{
                name: '',
                value: 0,
                itemStyle: {
                    normal: {
                        color: "rgba(80,84,93,1)"
                    }
                }
            }]
        },
        {
            stack: 'a',
            type: 'pie',
            radius: ['9%', '50%'],
            roseType: 'area',
            zlevel: 10,
            label: {
                normal: {
                    show: true,
                    formatter: function(params) {
                        return '{radius|' + params.name + " " + params.value + "%}";
                    },
                    rich: rich,
                    // position: 'outside',
                },
                emphasis: {
                    show: true
                }
            },
            labelLine: {
                normal: {
                    show: true,
                    length: 20,
                    length2: 55,
                    lineStyle: {
                        color: '#1C5683'
                    }
                },
                emphasis: {
                    show: true
                }
            },
            data: [{
                    value: 10,
                    name: '未知异常'
                },
                {
                    value: 5,
                    name: '报废设备'
                },
                {
                    value: 20,
                    name: '停运设备'
                },
                {
                    value: 15,
                    name: '离线设备'
                },
                {
                    value: 15,
                    name: '检修设备'
                },
                {
                    value: 35,
                    name: '故障设备'
                }
            ]
        },
    ]
}