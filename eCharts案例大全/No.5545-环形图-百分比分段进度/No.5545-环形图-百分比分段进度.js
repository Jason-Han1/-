var value = 0.65;

option = {
        backgroundColor: '#051F54',
        title: {
            text: '{a|' + value*100 + '%}', 
        x: 'center',
        y: 'center',
        textStyle: {
            rich: {
                a: {
                    fontSize: 36,
                    color: '#FFEB0D'
                },
            }
        }
    },
    series: [{
            //进度格主体样式
            type: 'gauge',
            radius: '38%',
            clockwise: true,
            startAngle: '90',
            endAngle: '-269.999',
            splitNumber: 12,
            detail: {
                show: false
            },
            pointer: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: [
                            [1, 'rgba(32,187,252,0.15)']
                        ],
                    width: 30
                }
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: true,
                length: 32,
                lineStyle: {
                    color: '#051F54',
                    width: 8
                }
            },
            axisLabel: {
                show: false
            }
        },{
            //进度格外侧刻度装饰样式
            type: 'gauge',
            radius: '40%',
            startAngle: '90',
            endAngle: '-269.999',
            splitNumber: 12,
            axisTick: {
                show: true,
                splitNumber:10,
                lineStyle: {
                    color: '#1885FF',
                    width: 1
                },
                length : -5
            },
            detail: {
                show: false
            },
            pointer: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            }
        },{
            //进度格渐变样式
            name: "",
            type: "pie",
            radius: ["27%", "38%"],
            center: ['50%', '50%'],
            hoverAnimation: false,
            silent: false,
            clockwise: true,
            startAngle: 90,
            z: 0,
            zlevel: 0,
            label: {
                show: false
            },
            data: [
                {
                    value: value*360,
                    name: "",
                     label: {
                        show: false
                    },
                    itemStyle: {
                    color:new echarts.graphic.LinearGradient(0,0,0,value,[{
                    offset:0,
                    color:'#1885FF'
                    },{
                    offset:value,
                    color:'#0D0DCB'
                    }
                ])

                    }
                },
                {
                    value: 360*(1-value),
                    name: "",
                    label: {
                        normal: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: "#001B3A"
                        }
                    }
                }
            ]
        },{
            //进度格内侧圆环装饰样式
            type: 'pie',
            name: '内层细圆环',
            radius: ['20%', '22%'],
            hoverAnimation: false,
            clockWise: false,
            itemStyle: {
                normal: {
                    color: '#0C355E'
                }
            },
            label: {
                show: false
            },
            data: [1]
        }
    ]
};