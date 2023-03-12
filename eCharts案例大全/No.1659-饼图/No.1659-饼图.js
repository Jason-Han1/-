option = {
    // backgroundColor:"#0B1837",
    color: ["#01D7E9", "#E182EC", "#3AFFC5", "#9E5EFF", "#D3FF24", "#E8395D", "#00C800", "#FFBF4F", "#4575FF"],
    grid: {
        left: -100,
        top: 50,
        bottom: 10,
        right: 10,
        containLabel: true
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },
    legend: {
        type: "scroll",
        orient: "vartical",
        // x: "right",
        top: "center",
        right: "45",
        // bottom: "0%",
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 16,
        textStyle: {
            color: 'rgba(26, 241, 233, 1)',
            fontSize: 12,
            fontWeight: 0,
            padding: [0,0,0,10]
        },
        data: ['人员信息', '警情信息', '出警信息', '情报信息', '审讯信息', 'XX信息', 'XXX信息']
    },
    "radar": {
        "center": ["40%", "50%"],
        "radius": "70%",
        "startAngle": 90,
        "splitNumber": 1,
        "shape": "circle",
        "splitArea": {
            "areaStyle": {
                "color": ["transparent"]
            }
        },
        "axisLabel": {
            "show": false,
        },
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "RGBA(26, 143, 172, 1)",
                width: 2
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": "RGBA(26, 143, 172, 1)",
                width: 2
            }
        },
        "indicator": [{
            "name": "",
        }, {
            "name": "",
        }, {
            "name": "",
        }, {
            "name": "",
        }, {
            "name": "",
        }, {
            "name": "",
        }, {
            "name": "",
        }, {
            "name": "",
        }]
    },
    polar: {},
    angleAxis: {
        interval: 1,
        type: 'category',
        data: [],
        z: 10,
        axisLine: {
            show: false,
            lineStyle: {
                color: "#0B4A6B",
                width: 1,
                type: "solid"
            },
        },
        axisLabel: {
            interval: 0,
            show: false,
            color: "#0B4A6B",
            margin: 8,
            fontSize: 16
        },
        axisTick: {
            show: false //隐藏X轴轴线
         },
        splitLine: {
            show: false,
            lineStyle: {
                color: "#0B3E5E",
                width: 2,
                type: "solid"
            }
        }
    },
    radiusAxis: {
        min: 40,
        max: 100,
        interval: 20,
        axisLine: {
            show: false,
            lineStyle: {
                color: "#0B3E5E",
                width: 1,
                type: "solid"
            },
        },
        axisTick: {
            show: false //隐藏X轴轴线
        },
        axisLabel: {
            formatter: '{value} %',
            show: false,
            padding: [0, 0, 20, 0],
            color: "#0B3E5E",
            fontSize: 16
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: "#0B3E5E",
                width: 2,
                type: "solid"
            }
        }
    },
    calculable: true,
    series: [
    {
        type: 'pie',
        "center": ["40%", "50%"],
        radius: ["0%", "60%"],
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
                    // color: 'rgba(0,0,0,0)'
                    color: {
                        type: "linear",
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: "RGBA(2, 89, 111, 0.5)"
                        }, {
                            offset: 1,
                            color: "RGBA(2, 89, 111, 0.5)"
                        }]
                    },
                    borderColor: 'RGBA(26, 143, 172, 1)',
                    borderWidth: 2
                }
            },
        }]
    },
    {
        type: 'pie',
        "center": ["40%", "50%"],
        radius: ["0%", "6%"],
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
                    // color: 'rgba(0,0,0,0)'
                    color: {
                        type: "linear",
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: "RGBA(26, 143, 172, 1)"
                        }, {
                            offset: 1,
                            color: "RGBA(26, 143, 172, 1)"
                        }]
                    },
                    borderColor: 'RGBA(0, 0, 0, 0)',
                    borderWidth: 0
                }
            },
        }]
    },
    {
        stack: 'a',
        type: 'pie',
        "center": ["40%", "50%"],
        radius: ['6%', '50%'],
        roseType: 'area',
        zlevel:10,
        backgroundColor: 'RGBA(2, 89, 111, 1)',
        label: {
            normal: {
                show: false,
                formatter: "{c}",
                textStyle: {
                    fontSize: 12,
                },
                position: 'outside'
            },
            emphasis: {
                show: true
            }
        },
        labelLine: {
            normal: {
                show: false,
                length: 20,
                length2: 55
            },
            emphasis: {
                show: false
            }
        },
        data: [{
                value: 10,
                name: '人员信息'
            },
            {
                value: 5,
                name: '警情信息'
            },
            {
                value: 15,
                name: '出警信息'
            },
            {
                value: 25,
                name: '情报信息'
            },
            {
                value: 20,
                name: '审讯信息'
            },
            {
                value: 35,
                name: 'XX信息'
            },
            {
                value: 40,
                name: 'XXX信息'
            }
        ]
    }, ]
}