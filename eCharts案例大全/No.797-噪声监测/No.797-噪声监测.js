option = {
    backgroundColor: '#072B79',
    tooltip: {
        formatter: '{b}{c}',
    },
    series: [
        {
            tooltip: {
                show: false,
            },
            name: 'wrap',
            type: 'pie',

            center: ['50%', '60%'],
            radius: ['0%', '5%'],
            z: 5,

            labelLine: {
                normal: {
                    show: false,
                },
            },
            data: [
                {
                    value: 100,
                    itemStyle: {
                        normal: {
                            color: '#072B79',
                        },
                        emphasis: {
                            color: '#072B79',
                        },
                    },
                },
            ],
        },
        {
            tooltip: {
                show: false,
            },
            name: 'wrap',
            type: 'pie',
            hoverAnimation: false,
            legendHoverLink: false,
            center: ['50%', '60%'],
            radius: ['4%', '8%'],
            z: 6,
            label: {
                normal: {
                    show: false,
                    position: 'center',
                },
                emphasis: {
                    show: false,
                },
            },
            labelLine: {
                normal: {
                    show: false,
                },
            },
            data: [
                {
                    value: 100,
                    itemStyle: {
                        normal: {
                            color: 'white',
                        },
                        emphasis: {
                            color: 'white',
                        },
                    },
                },
            ],
        },
        {
            tooltip: {
                show: false,
            },
            name: '刻度',
            type: 'gauge',
            radius: '78%',
            z: 5,
            min: 0,
            max: 120,
            center: ['50%', '60%'],
            splitNumber: 6, //刻度数量
            startAngle: 180,
            endAngle: 0,
            axisLine: {
                show: true,

                lineStyle: {
                    width: 10,
                    color: [
                        [1 / 6, '#E71A6D'],
                        [2 / 6, '#F88168'],
                        [3 / 6, 'red'],
                        [4 / 6, '#FBF76B'],
                        [5 / 6, '#7AD4DF'],
                        [1, '#70C27E'],
                    ],
                },
            }, //仪表盘轴线
            axisLabel: {
                distance: 50,
                fontSize: 20,
            }, //刻度节点文字颜色
            axisTick: {
                show: true,
                lineStyle: {
                    color: 'auto',
                    width: 0,
                },
            }, //刻度样式
            splitLine: {
                show: true,
                length: 0,
                lineStyle: {
                    color: 'auto',
                    width: 0,
                },
            }, //分隔线样式
            detail: {
                show: false,
            },
            pointer: {
                show: false,
            },
        },
        {
            tooltip: {
                show: false,
            },
            name: '噪声',
            type: 'gauge',
            radius: '75%',

            min: 0,
            max: 120,
            center: ['50%', '60%'],
            data: [
                {
                    value: 70,
                },
            ],
            splitNumber: 6, //刻度数量
            startAngle: 180,
            endAngle: 0,
            z: 5,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 0,
                    color: [
                        [1 / 6, '#E71A6D'],
                        [2 / 6, '#F88168'],
                        [3 / 6, 'red'],
                        [4 / 6, '#FBF76B'],
                        [5 / 6, '#7AD4DF'],
                        [1, '#70C27E'],
                    ],
                },
            }, //仪表盘轴线
            axisLabel: {
                show: true,
                color: '#fff',
                fontSize: 16,
                distance: 20,
                formatter: function (params) {
                    var value = params.toFixed(0);
                },
            }, //刻度标签。

            axisTick: {
                splitNumber: 6,
                show: true,
                lineStyle: {
                    color: 'auto',
                    width: 3,
                },
                length: 20,
            }, //刻度样式
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'auto',
                    width: 4,
                },
            }, //分隔线样式

            itemStyle: {
                normal: {
                    color: 'white', //指针颜色
                },
            },
            detail: {
                show: false,
            },
            pointer: {
            width: 13,
            length: '60%'
        },
           
        },
        {
            tooltip: {
                show: false,
            },
            name: '描述',
            type: 'gauge',
            radius: '77%',

            min: 0,
            max: 100,
            center: ['50%', '60%'],

            splitNumber: 5, //刻度数量
            startAngle: 165,
            endAngle: 15,
            z: 0,
            axisLine: {
                show: false,
            }, //仪表盘轴线

            axisLabel: {
                show: true,
                color: '#fff',
                fontSize: 20,
                distance: -44,
                formatter: function (params) {
                    var value = params.toFixed(0);
                    if (value == 0) {
                        return '极静';
                    } else if (value == 20) {
                        return '安静';
                    } else if (value == 40) {
                        return '一般';
                    } else if (value == 60) {
                        return '较吵';
                    } else if (value == 80) {
                        return '吵闹';
                    } else if (value == 100) {
                        return '极吵';
                    } else {
                        return '';
                    }
                },
            }, //刻度标签。

            axisTick: {
                splitNumber: 6,
                show: false,
                lineStyle: {
                    color: 'auto',
                    width: 0,
                },
                length: 20,
            }, //刻度样式
            splitLine: {
                show: false,
                length: 0,
                lineStyle: {
                    color: 'auto',
                    width: 0,
                },
            }, //分隔线样式
            detail: {
                show: false,
            },
            
        },
    ],
};
