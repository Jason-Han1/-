var value = 0.75;
var data = [value, 0.3, 0.4];
option = {
    backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [
        {
            offset: 0,
            color: '#431ab8',
        },
        {
            offset: 1,
            color: '#471bba',
        },
    ]),
    title: {
        text: (value*100)+'%',
        textStyle: {
            fontSize: 36,
            fontWeight: 'normal',
            color: '#fff',
        },
        x: 'center',
        y: 'center',
    },
    graphic: [
        {
            type: 'group',
            left: 'center',
            top: '60%',
            children: [
                {
                    type: 'text',
                    z: 100,
                    left: '10',
                    top: 'middle',
                    style: {
                        fill: '#aab2fa',
                        text: '流量统计',
                        font: '20px Microsoft YaHei',
                    },
                },
            ],
        },
    ],
    series: [
        {
            type: 'liquidFill',
            radius: '80%',
            center: ['50%', '50%'],
            //  shape: 'roundRect',
            data: data,
            backgroundStyle: {
                color: {
                    type: 'linear',
                    x: 1,
                    y: 0,
                    x2: 0.5,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 1,
                            color: 'rgba(68, 145, 253, 0)',
                        },
                        {
                            offset: 0.5,
                            color: 'rgba(68, 145, 253, .25)',
                        },
                        {
                            offset: 0,
                            color: 'rgba(68, 145, 253, 1)',
                        },
                    ],
                    globalCoord: false,
                },
            },
            outline: {
                borderDistance: 0,
                itemStyle: {
                    borderWidth: 20,
                    borderColor: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: 'rgba(69, 73, 240, 0)',
                            },
                            {
                                offset: 0.5,
                                color: 'rgba(69, 73, 240, .25)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(69, 73, 240, 1)',
                            },
                        ],
                        globalCoord: false,
                    },
                    shadowBlur: 10,
                    shadowColor: '#000',
                },
            },
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                    {
                        offset: 1,
                        color: 'rgba(58, 71, 212, 0)',
                    },
                    {
                        offset: 0.5,
                        color: 'rgba(31, 222, 225, .2)',
                    },
                    {
                        offset: 0,
                        color: 'rgba(31, 222, 225, 1)',
                    },
                ],
                globalCoord: false,
            },
            label: {
                normal: {
                    formatter: '',
                },
            },
        },
        {
            type: 'pie',
            zlevel: 0,
            silent: true,
            center: ['50%', '50%'],
            radius: ['80%', '85%'],
            hoverAnimation: false,
            color: '#245b8f',
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
            type: 'pie',
            zlevel: 10,
            silent: true,
            center: ['50%', '50%'],
            radius: ['80%', '85%'],
            startAngle: 50,
            hoverAnimation: false,
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
            data: _pie2(),
        },
    ],
};

function _pie2() {
    let dataArr = [];
    for (var i = 0; i < 8; i++) {
        if (i % 2 === 0) {
            dataArr.push({
                name: (i + 1).toString(),
                value: 50,
                itemStyle: {
                    normal: {
                        color: '#6dc9fe',
                    },
                },
            });
        } else {
            dataArr.push({
                name: (i + 1).toString(),
                value: 20,
                itemStyle: {
                    normal: {
                        color: 'rgba(0,0,0,0)',
                    },
                },
            });
        }
    }
    return dataArr;
}
