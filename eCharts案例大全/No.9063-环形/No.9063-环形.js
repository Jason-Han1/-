option = {
    backgroundColor: '#051932',
    tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
    },

    series: [{
            type: 'gauge',
            name: '外层辅助',
            radius: '70%',
            startAngle: '314.9',
            // endAngle: '-124.9',
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
                offsetCenter: [0, 40],
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
                        [1, '#38567d']
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
            radius: '68.5%',
            startAngle: '225',
            endAngle: '-134.9',
                clockWise: false,
            pointer: {
                show: false
            },
            detail: {
                show: false,
            },
            data: [{
                value: 90
            }],
            data: [{value: 90, name: '46.0%'}],
            title: {
                show: true,
                offsetCenter: [0, 30],
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
                        [0.3, '#fd486e'],
                        [1, '#1a293c']
                    ],
                    width: 35,
                    // shadowBlur: 15,
                    // shadowColor: '#B0C4DE',
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
            radius: '68%',
            startAngle: '225',
            endAngle: '-134.9',
            //center: ["50%", "75%"], //整体的位置设置
            axisLine: { // 坐标轴线
                lineStyle: { // 属性lineStyle控制线条样式
                    color: [
                        [1, '#769ace']
                    ],
                    width: 10,
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
            radius: "72%",
            startAngle: -200, //刻度起始
            endAngle: 130, //刻度结束
            z: 4,
            axisTick: {
                show: false
            },
            splitLine: {
                length: 7, //刻度节点线长度
                lineStyle: {
                    width: 5,
                    color: '#ccc'
                } //刻度节点线
            },
            axisLabel: {
                show:false,
                color: '',
                fontSize: 12,
            }, //刻度节点文字颜色
            pointer: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    opacity:0
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