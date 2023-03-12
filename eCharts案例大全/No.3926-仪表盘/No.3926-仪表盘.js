
var value = '4.3';
var subtext = `样本量：2233`;
var max = 5;
option = {
    title: {
        show: true,
        text: value || "仪表盘",
        subtext,
        subtextStyle: {
            align: "center",
        },
        left: 400,
        bottom: 10,
        textStyle: {
            color: '#414957',
            fontSize: 24,
            align: 'center',
            fontFamily: '"Microsoft Yahei","微软雅黑"',
        },
    },
    grid:{x: '5%', y: '2%', width: '80%', height: '90%'},
    angleAxis: {
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        min: 0,
        max: 6.666,
        // boundaryGap: ['0', '10'],
        startAngle: 225
    },
    radiusAxis: {
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        data: ['a', 'b', 'c'],
        z: 10
    },
    polar: {
        radius: '100%'
    },
    series: [{
            type: 'bar',
            data: [, , value],
            z: 1,
            coordinateSystem: 'polar',
            barMaxWidth: 18,
            name: '警告事件',
            roundCap: true,
            color: '#4181E4',
            barGap: '-100%',
        },
        {
            type: 'bar',
            data: [, , ],
            z: 2,
            coordinateSystem: 'polar',
            barMaxWidth: 18,
            name: '警告事件',
            roundCap: true,
            color: '#f00',
            barGap: '-100%',
        },
        {
            type: 'bar',
            data: [, , max],
            z: 0,
            silent: true,
            coordinateSystem: 'polar',
            barMaxWidth: 18,
            name: 'C',
            roundCap: true,
            color: '#fff',
            barGap: '-100%',
        },
        {
            type: 'pie',
            labelLine: {
                show: false
            },
            z: 1,
            radius: 14,
            data: [{
                value: 5,
                itemStyle: {
                    color: 'rgba(108,116,132,0.15)',
                }
            }]
        }, {
            type: 'pie',
            labelLine: {
                show: false
            },
            z: 10,
            radius: 3,
            data: [{
                value: 100,
                itemStyle: {
                    color: '#fff',
                }
            }]
        }, {
            type: 'gauge',
            radius: '85%',
            splitNumber: 4,
            max: 5,
            detail: {
                show: false,
            },
            axisLine: {
                // 坐标轴线
                lineStyle: {
                    // 属性lineStyle控制线条样式
                    color: [
                        [0, "#4181E4"],
                        [1, "#4181E4"]
                    ],
                    width: 25,
                    opacity: 0 //刻度背景宽度
                }
            },
            "data": [{
                "name": "",
                "value": value,
            }],
            splitLine: {
                length: 12, //长刻度节点线长度
                lineStyle: {
                    width: 2,
                    color: "#c4c6cc"
                } //刻度节点线
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: "#c4c6cc",
                    width: 2
                },
                length: 5,
                splitNumber: 6
            },
            axisLabel: {
                show: false,
                color: '#333',
                fontSize: 18,
            },
            pointer: {
                show: true,
                length: '70%',
                itemStyle: {
                    color: '#DE585D',
                }
            },
        },
        {
            "type": "pie",
            radius: ['88%', '82%'],
            "hoverAnimation": false,
            startAngle: 225,
            endAngle: 0,
            "data": [{
                    "name": "",
                    "value": value / 5,
                    "label": {
                        show: false
                    },
                    "labelLine": {
                        show: false
                    },
                    itemStyle: {
                        color: 'rgba(0,0,0,0)'
                    }
                },
                { //画中间的图标
                    "name": "",
                    "value": 0,
                    "label": {
                        position: 'inside',
                        backgroundColor: '#fff',
                        borderRadius: 7,
                        padding: 3,
                        borderWidth: 0,
                        borderColor: "#fff"

                    }
                }, {
                    "name": "",
                    value: 1.33 - value / 5,
                    "label": {
                        show: false
                    },
                    "labelLine": {
                        show: false
                    },
                    itemStyle: {
                        color: 'rgba(255,255,255,0)'
                    }
                }
            ]
        }
    ],
    tooltip: {
        show: false
    },

}