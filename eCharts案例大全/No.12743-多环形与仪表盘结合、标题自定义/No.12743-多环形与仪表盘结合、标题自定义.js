var dataStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        }
    }
};
var placeHolderStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        color: '#ffffff'
    },
    emphasis: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        color: '#ffffff'
    }
};
var itemStyle = { //图形样式 
    normal: { //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。 
        label: { //饼图图形上的文本标签 
            show: false //平常不显示 
        },
        labelLine: { //标签的视觉引导线样式 
            show: false //平常不显示 
        }
    },
    emphasis: {
        //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。 
        label: { //饼图图形上的文本标签 
            show: false //平常不显示 
        },
        labelLine: { //标签的视觉引导线样式 
            show: false //平常不显示 
        }
    }
};



option = {
    title: {
        text: "病种完成度 {a|10%}\n\n技能完成度 {b|60%}",
        subtext: "",
        x: 'center',
        y: '80%',
        textStyle: {
            color: "#666666",
            fontStyle:'normal',
            fontWeight:'normal',
            fontSize: 18,
            rich:{
                a: {
                    color: '#37AFEC',
                    fontSize: 18,
                },
                b:{
                    color:'#80C169',
                    fontSize: 18,
                }
            }
        },
        subtextStyle: {
            color: "#666666",
            fontStyle:'normal',
            fontWeight:'normal',
            fontSize: 18,
        }
    },

    backgroundColor: '#ffffff',
    tooltip: {
        show: false,
        trigger: 'item',
        formatter: "{a} {d}%"
    },
    series: [{
            name: "0刻度",
            type: "gauge",
            radius: "42.5%",
            startAngle: 90,
            endAngle: 90,
            splitNumber: 1,
            min: 0,
            max: 0,
            z: 10,
            hoverAnimation: false,
            axisTick: {
                show: true,
            },
            splitLine: {
                length: 10,
                lineStyle: {
                    width: 2,
                    color: "#666666"
                }
            },
            axisLabel: {
                show: true,
                distance: -30,
                color: "#666666",
                backgroundColor: "#ffffff",
                height: 5,
                width: 10,
                padding: [0, 10, 0, 10]
            },
            pointer: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    opacity: 0
                }
            },
            detail: {
                show: false
            },
            data: [{
                value: 0,
                name: ""
            }]
        }, {
            name: "整数刻度",
            type: "gauge",
            radius: "42.5%",
            startAngle: 90,
            endAngle: -269.9,
            splitNumber: 10,
            min: 0,
            max: 100,
            hoverAnimation: false,
            axisTick: {
                show: false,
            },
            splitLine: {
                length: 10,
                lineStyle: {
                    width: 2,
                    color: "#666666"
                }
            },
            axisLabel: {
                show: true,
                distance: -30,
                color: "#666666"
            },
            pointer: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    opacity: 0
                }
            },
            detail: {
                show: false
            },
            data: [{
                value: 0,
                name: ""
            }]
        },

        {
            name: "小刻度",
            type: "gauge",
            radius: "40%",
            startAngle: 90,
            endAngle: -269.9,
            splitNumber: 10,
            hoverAnimation: false,
            axisTick: {
                lineStyle: {
                    color: "#666666",
                    width: 1
                },
                length: 10,
                splitNumber: 10
            },
            splitLine: {
                length: 10,
                lineStyle: {
                    width: 2,
                    color: "#666666"
                }
            },
            axisLabel: {
                show: false,
                distance: -30,
                color: "#666666"
            },
            pointer: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    opacity: 0
                }
            },
            detail: {
                show: false
            },
            data: [{
                value: 0,
                name: ""
            }]
        },
        {
            name: '病种完成度',
            type: 'pie',
            radius: ['20%', '30%'],
            color: ['#37AFEC', '#ffffff'],
            itemStyle: itemStyle,
            hoverAnimation: false,
            data: [{
                value: 10,
                name: '病种完成数'
            }, {
                value: 90,
                name: '病种未成数'
            }]
        },
        {
            name: '技能完成度',
            type: 'pie',
            radius: ['5%', '15%'],
            color: ['#80C169', '#ffffff'],
            itemStyle: itemStyle,
            hoverAnimation: false,
            data: [{
                value: 60,
                name: ''
            }, {
                value: 40,
                name: ''
            }]
        }
    ]
};