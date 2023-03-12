option = {
    backgroundColor: '#051932',
    tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
    },

    series: [{
            type: 'gauge',
            name: '外层辅助',
            radius: '100%',
            startAngle: '235',
            endAngle: '-55',
            splitNumber: '100',
            pointer: {
                show: false
            },
            detail: {
                show: false,
            },
            data: [{
                value: 1
            }],
            //data: [{value: 1, name: 90}],
            title: {
                show: true,
                offsetCenter: [0, 30],
                textStyle: {
                    color: '#fff',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 500,
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: [
                        [1, '#00FFFF']
                    ],
                    width: 5,
                    opacity: 1
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                length: 20,
                lineStyle: {
                    color: '#051932',
                    width: 0,
                    type: 'solid',
                },
            },
            axisLabel: {
                show: false
            }
        }, {
            type: 'gauge',
            name: '预计综合得分',
            radius: '90%',
            startAngle: '225',
            endAngle: '-45',
            pointer: {
                show: false
            },
            detail: {
                show: false,
            },
            data: [{
                value: 90
            }],
            //data: [{value: 90, name: '预计综合得分'}],
            title: {
                show: true,
                offsetCenter: [0, 300],
                textStyle: {
                    color: '#fff',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 80
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: [
                        [0.9, '#00BFFF'],
                        [1, '#B0E0E6']
                    ],
                    width: 25,
                    shadowBlur: 15,
                    shadowColor: '#B0C4DE',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    opacity: 1
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false,
                length: 25,
                lineStyle: {
                    color: '#00377a',
                    width: 2,
                    type: 'solid',
                    //	shadowColor: '#00377a',
                    //	shadowBlur: 25,
                    //	shadowOffsetX: 10,
                    //	shadowOffsetY: 10,
                    //	opacity: 0.5
                },
            },
            axisLabel: {
                show: false
            }
        },
        {
            name: '灰色内圈', //刻度背景
            type: 'gauge',
            z: 2,
            radius: '80%',
            startAngle: '225',
            endAngle: '-45',
            //center: ["50%", "75%"], //整体的位置设置
            axisLine: { // 坐标轴线
                lineStyle: { // 属性lineStyle控制线条样式
                    color: [
                        [1, '#7B68EE']
                    ],
                    width: 2,
                    opacity: 1, //刻度背景宽度
                }
            },
            splitLine: {
                show: false
            },
            data: [{
                show: false,
                value: '80'
            }], //作用不清楚
            axisLabel: {
                show: false
            },
            pointer: {
                show: false
            },
            axisTick: {
                show: false
            },
            detail: {
                show: 0
            }
        },
        {
            name: "白色圈刻度",
            type: "gauge",
            radius: "80%",
            startAngle: 225, //刻度起始
            endAngle: -45, //刻度结束
            z: 4,
            axisTick: {
                show: false
            },
            splitLine: {
                length: 16, //刻度节点线长度
                lineStyle: {
                    width: 2,
                    color: 'rgba(0,0,0, 0.9)'
                } //刻度节点线
            },
            axisLabel: {
                color: '#',
                fontSize: 12,
            }, //刻度节点文字颜色
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
    ]
};