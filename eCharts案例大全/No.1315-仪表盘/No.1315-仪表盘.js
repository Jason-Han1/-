//画布大小250px * 250px
var angle = 0; //角度，用来做简单的动画效果
var option = {
    backgroundColor: '#05224A',
    title: {
        text: '仪表盘',
        x: 'center',
        y: '3%',
        textStyle: {
            color: '#fff',
            fontSize: '15',
        },
    },
    series: [
        {
            //圆环
            type: 'pie',
            z: 1,
            startAngle: 240,
            radius: ['45%', '60%'],
            center: ['50%', '58%'],
            hoverAnimation: false,
            color: '#083257',
            label: {
                normal: {
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
                            color: '#18527C',
                        },
                    },
                },
                {
                    value: 20,
                    itemStyle: {
                        normal: {
                            label: {
                                show: false,
                            },
                            labelLine: {
                                show: false,
                            },
                            color: 'rgba(0,0,0,0)',
                            borderWidth: 0,
                        },
                        emphasis: {
                            color: 'rgba(0,0,0,0)',
                            borderWidth: 0,
                        },
                    },
                },
            ],
        },
        {
            //中间圆
            type: 'pie',
            z: 2,
            silent: true,
            radius: ['44%', '45%'],
            center: ['50%', '58%'],
            hoverAnimation: false,
            color: '#fff',
            label: {
                normal: {
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
                    value: 1,
                    itemStyle: {
                        normal: {
                            color: '#358ED2',
                        },
                    },
                },
            ],
        },
        //旋转圆
        {
            name: 'ring5',
            type: 'custom',
            coordinateSystem: 'none',
            renderItem: function (params, api) {
                return {
                    type: 'arc',
                    shape: {
                        cx: api.getWidth() / 2, //旋转中心点的x坐标,以父节点左上角为原点
                        cy: api.getHeight() * 0.58, //旋转中心点的y坐标,以父节点左上角为原点
                        r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.35, //圆弧的长度
                        startAngle: ((0 + angle) * Math.PI) / 180,
                        endAngle: ((90 + angle) * Math.PI) / 180,
                    },
                    style: {
                        stroke: '#10426A',
                        fill: 'transparent',
                        lineWidth: 5,
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
                        cx: api.getWidth() / 2, //旋转中心点的x坐标,以父节点左上角为原点
                        cy: api.getHeight() * 0.58, //旋转中心点的y坐标,以父节点左上角为原点
                        r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.35, //圆弧的长度
                        startAngle: ((120 + angle) * Math.PI) / 180,
                        endAngle: ((210 + angle) * Math.PI) / 180,
                    },
                    style: {
                        stroke: '#10426A',
                        fill: 'transparent',
                        lineWidth: 5,
                    },
                    silent: true,
                    orgin: [50, 50],
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
                        cx: api.getWidth() / 2, //旋转中心点的x坐标,以父节点左上角为原点
                        cy: api.getHeight() * 0.58, //旋转中心点的y坐标,以父节点左上角为原点
                        r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.35, //圆弧的长度
                        startAngle: ((240 + angle) * Math.PI) / 180,
                        endAngle: ((330 + angle) * Math.PI) / 180,
                    },
                    style: {
                        stroke: '#10426A',
                        fill: 'transparent',
                        lineWidth: 5,
                    },
                    silent: true,
                    orgin: [50, 50],
                };
            },
            data: [0],
        },
        {
            //最内层圆
            type: 'pie',
            z: 1,
            silent: true,
            radius: ['25%', '27%'],
            center: ['50%', '58%'],
            hoverAnimation: false,
            color: '#083257',
            label: {
                normal: {
                    show: false,
                },
            },
            labelLine: {
                normal: {
                    show: false,
                },
            },
            data: [1],
        },
        {
            type: 'gauge',
            radius: '70%',
            center: ['50%', '58%'],
            startAngle: '240',
            endAngle: '-60',
            splitNumber: 10,
            min: 0,
            max: 300,
            z: 99,
            detail: {
                offsetCenter: [0, '100%'],
                textStyle: {
                    color: '#80F8F2',
                    fontSize: 12,
                },
                formatter: '50 / 100',
            },
            pointer: {
                width: 3,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: [[1, '#80F8F2']],
                    width: 1,
                },
            },
            axisTick: {
                length: 3,
                splitNumber: 5,
                lineStyle: {
                    color: '#80F8F2',
                    width: 1,
                },
            },
            splitLine: {
                show: true,
                length: 7,
                lineStyle: {
                    color: '#80F8F2',
                    width: 2,
                },
            },
            itemStyle: {
                show: true,
                normal: {
                    color: 'red',
                },
            },
            axisLabel: {
                formatter: function (v) {
                    return parseInt(v);
                },
                textStyle: {
                    color: '#80F8F2',
                    fontSize: 10,
                },
                distance: 1,
            },
            title: {
                offsetCenter: [0, '30%'],
                textStyle: {
                    fontSize: 20,
                    color: '#16F0FF',
                    fontWeight: 'bold',
                },
            },
            data: [{ value: 50 }],
        },
    ],
};

function draw() {
    angle = angle + 3;
    myChart.setOption(option, true);
    //window.requestAnimationFrame(draw);
}
setInterval(function () {
    //用setInterval做动画感觉有问题
    draw();
}, 100);
