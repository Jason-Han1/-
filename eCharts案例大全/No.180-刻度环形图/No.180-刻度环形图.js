let angle = 0; //角度，用来做简单的动画效果的
let value = '备料中';
option = {
    backgroundColor: 'transparent',
    title: {
        text: '{a|' + value + '}',
        x: 'center',
        y: 'center',
        textStyle: {
            rich: {
                a: {
                    fontSize: 36,
                    color: '#3f2c75',
                    fontFamily: 'Oswald',
                    fontWeight: 'bold',
                },
            },
        },
    },
    series: [
        // 运动环
        {
            name: 'ring5',
            type: 'custom',
            coordinateSystem: 'none',
            renderItem: function (params, api) {
                return {
                    type: 'arc',
                    shape: {
                        cx: api.getWidth() / 2,
                        cy: api.getHeight() / 2,
                        r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.30,
                        startAngle: ((0 + angle) * Math.PI) / 180,
                        endAngle: ((90 + angle) * Math.PI) / 180,
                    },
                    style: {
                        stroke: '#3f2c75',
                        fill: 'transparent',
                        lineWidth: 3,
                    },
                    silent: true,
                };
            },
            data: [0],
        },
        // 运动环
        {
            name: 'ring5',
            type: 'custom',
            coordinateSystem: 'none',
            renderItem: function (params, api) {
                return {
                    type: 'arc',
                    shape: {
                        cx: api.getWidth() / 2,
                        cy: api.getHeight() / 2,
                        r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.28,
                        startAngle: ((270 + -angle) * Math.PI) / 180,
                        endAngle: ((40 + -angle) * Math.PI) / 180,
                    },
                    style: {
                        stroke: '#3f2c75',
                        fill: 'transparent',
                        lineWidth: 3,
                    },
                    silent: true,
                };
            },
            data: [0],
        },
        // 占比环
        {
            name: '吃猪肉频率',
            type: 'pie',
            radius: ['18%', '15%'],
            silent: true,
            clockwise: true,
            startAngle: 90,
            z: 0,
            zlevel: 0,
            label: {
                normal: {
                    position: 'center',
                },
            },
            data: [
                {
                    value: value,
                    name: '',
                    itemStyle: {
                        shadowColor: '#3f2c75',
                        shadowBlur: 30,
                        shadowOffsetX: '0',
                        shadowOffsetY: '0',
                        color: {
                            // 完成的圆环的颜色
                            colorStops: [
                                {
                                    offset: 0,
                                    color: '#3f2c75', // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: '#3f2c75', // 100% 处的颜色
                                },
                            ],
                        },
                    },
                },
                {
                    value: 100 - value,
                    name: '',
                    label: {
                        normal: {
                            show: false,
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                        },
                    },
                },
            ],
        },
        // 分割环
        {
            name: '',
            type: 'gauge',
            radius: '18%',
            center: ['50%', '50%'],
            startAngle: -180,
            endAngle: 179.9999,
            splitNumber: 24,
            hoverAnimation: true,
            axisTick: {
                show: false,
            },
            splitLine: {
                length: 10,
                lineStyle: {
                    width: 4,
                    color: '#3f2c75',
                },
            },
            axisLabel: {
                show: false,
            },
            pointer: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    opacity: 0,
                },
            },
            detail: {
                show: false,
            },
            data: [
                {
                    value: 0,
                    name: '',
                },
            ],
        },
        // 外面100圆环
        {
            type: 'pie',
            radius: ['20%', '20.5%'],
            hoverAnimation: false,
            clockWise: false,
            itemStyle: {
                normal: {
                    shadowBlur: 20,
                    shadowColor: '#3f2c75',
                    color: '#a290d5',
                },
            },
            label: {
                show: false,
            },
            data: [100],
        },
        // 最外虚线环
        {
            type: 'pie',
            radius: ['25%', '24%'],
            hoverAnimation: false,
            clockWise: false,
            z: 0,
            zlevel: 0,
            itemStyle: {
                normal: {
                    shadowBlur: 20,
                    shadowColor: '#3f2c75',
                    color: '#a290d5',
                },
            },
            label: {
                show: false,
            },
            data: [100],
        },
        // 最外虚线分割环
        {
            name: '',
            type: 'gauge',
            radius: '25%',
            center: ['50%', '50%'],
            startAngle: -180,
            endAngle: 179.999,
            splitNumber: 64,
            hoverAnimation: true,
            axisTick: {
                show: false,
            },
            splitLine: {
                length: 4,
                lineStyle: {
                    width: 4,
                    color: '#3f2c75',
                },
            },
            axisLabel: {
                show: false,
            },
            pointer: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    opacity: 0,
                },
            },
            detail: {
                show: false,
            },
            data: [
                {
                    value: 0,
                    name: '',
                },
            ],
        },
    ],
};

//获取圆上面某点的坐标(x0,y0表示坐标，r半径，angle角度)
function getCirlPoint(x0, y0, r, angle) {
    let x1 = x0 + r * Math.cos((angle * Math.PI) / 180);
    let y1 = y0 + r * Math.sin((angle * Math.PI) / 180);
    return {
        x: x1,
        y: y1,
    };
}

function draw() {
    angle = angle + 3;
    myChart.setOption(option, true);
    //window.requestAnimationFrame(draw);
}

setInterval(function () {
    //用setInterval做动画感觉有问题
    draw();
}, 100);
