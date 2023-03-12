let angle = 0; //角度，用来做简单的动画效果的
let value = 55.33;
option = {
    backgroundColor: '',
    title: {
        text: '{a|' + '噪声' + '\n\n}' + '{c|' + value + '}',
        x: 'center',
        y: 'center',
        textStyle: {
            rich: {
                a: {
                    fontSize: 16,
                    color: '#3DABFF',
                },
                c: {
                    fontSize: 20,
                    color: 'black',
                    // padding: [5,0]
                },
            },
        },
    },
    angleAxis: {
        show: false,
    },
    radiusAxis: {
        type: 'category',
        show: false,
        data: [0, 0, 0, '周四'],
    },
    polar: {},

    series: [
        {
            name: '',
            type: 'gauge',
            radius: '78%',
            center: ['50%', '50%'],
            startAngle: 0,
            endAngle: 359.9,
            zlevel: 1,
            splitNumber: 8,
            hoverAnimation: true,
            axisTick: {
                show: false,
            },
            splitLine: {
                length: '21%',
                lineStyle: {
                    width: 2,
                    color: '#0B1234',
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
                        r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.82,
                        startAngle: ((0 + angle) * Math.PI) / 180,
                        endAngle: ((90 + angle) * Math.PI) / 180,
                    },
                    style: {
                        stroke: '#0CD3DB',
                        fill: 'transparent',
                        lineWidth: 1.5,
                    },
                    silent: true,
                };
            },
            data: [0],
        },
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
                        r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.82,
                        startAngle: ((180 + angle) * Math.PI) / 180,
                        endAngle: ((270 + angle) * Math.PI) / 180,
                    },
                    style: {
                        stroke: '#0CD3DB',
                        fill: 'transparent',
                        lineWidth: 1.5,
                    },
                    silent: true,
                };
            },
            data: [0],
        },

        {
            type: 'bar',
            data: [0, 0, 0, value],
            coordinateSystem: 'polar',
            stack: 'a',
            itemStyle: {
                normal: {
                    //这里是重点
                    color: function (params) {
                        if (params.value > 0 && params.value <= 50) {
                            return 'red';
                        } else return 'green';
                    },
                },
            },
        },
        {
            type: 'bar',
            data: [0, 0, 0, 100 - value],
            coordinateSystem: 'polar',
            stack: 'a',
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

setInterval(function () {
    angle = angle + 3;
    myChart.setOption(option, true);
}, 100);
