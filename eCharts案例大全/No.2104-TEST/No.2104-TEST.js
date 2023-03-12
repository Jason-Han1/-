let imgSrc = '/asset/get/s/data-1629962920144-lpSmnmFA9.png';
function sc1() {
    let dataArr = [];
    for (var i = 0; i < 150; i++) {
        if (i % 3 === 0) {
            dataArr.push({
                name: (i + 1).toString(),
                value: 25,
                itemStyle: {
                    normal: {
                        color: '#12b8ce',
                        borderWidth: 0,
                        borderColor: 'rgba(0,0,0,0)',
                        shadowBlur: 10,
                        shadowColor: '#000',
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                    },
                },
            });
        } else {
            dataArr.push({
                name: (i + 1).toString(),
                value: 100,
                itemStyle: {
                    normal: {
                        color: 'rgba(0,0,0,0)',
                        borderWidth: 0,
                        borderColor: 'rgba(0,0,0,0)',
                    },
                },
            });
        }
    }
    return dataArr;
}
function sc2() {
    let dataArr = [];
    for (var i = 0; i < 150; i++) {
        if (i % 30 === 0) {
            dataArr.push({
                name: (i + 1).toString(),
                value: 25,
                itemStyle: {
                    normal: {
                        color: '#12b8ce',
                        borderWidth: 0,
                        borderColor: 'rgba(0,0,0,0)',
                        shadowBlur: 10,
                        shadowColor: '#0ff',
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                    },
                },
            });
        } else {
            dataArr.push({
                name: (i + 1).toString(),
                value: 100,
                itemStyle: {
                    normal: {
                        color: 'rgba(0,0,0,0)',
                        borderWidth: 0,
                        borderColor: 'rgba(0,0,0,0)',
                    },
                },
            });
        }
    }
    return dataArr;
}
function sc3() {
    let dataArr = [];
    for (var i = 0; i < 100; i++) {
        if (i % 10 === 0) {
            dataArr.push({
                name: (i + 1).toString(),
                value: 25,
                itemStyle: {
                    normal: {
                        color: '#12b8ce',
                        borderWidth: 0,
                        borderColor: 'rgba(0,0,0,0)',
                        shadowBlur: 10,
                        shadowColor: '#000',
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                    },
                },
            });
        } else {
            dataArr.push({
                name: (i + 1).toString(),
                value: 100,
                itemStyle: {
                    normal: {
                        color: 'rgba(0,0,0,0)',
                        borderWidth: 0,
                        borderColor: 'rgba(0,0,0,0)',
                    },
                },
            });
        }
    }
    return dataArr;
}
function sc4() {
    let dataArr = [];
    for (var i = 0; i < 200; i++) {
        if (i % 10 === 0) {
            dataArr.push({
                name: (i + 1).toString(),
                value: 25,
                itemStyle: {
                    normal: {
                        color: '#12b8ce',
                        borderWidth: 0,
                        borderColor: 'rgba(0,0,0,0)',
                        shadowBlur: 10,
                        shadowColor: '#0ff',
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                    },
                },
            });
        } else {
            dataArr.push({
                name: (i + 1).toString(),
                value: 100,
                itemStyle: {
                    normal: {
                        color: 'rgba(0,0,0,0)',
                        borderWidth: 0,
                        borderColor: 'rgba(0,0,0,0)',
                    },
                },
            });
        }
    }
    return dataArr;
}
option = {
    backgroundColor: new echarts.graphic.RadialGradient(0.2, 0.2, 1, [
        {
            offset: 0,
            color: '#244d87',
        },
        {
            offset: 1,
            color: '#220e41',
        },
    ]),
    title: [
        {
            text: '',
            x: '50%',
            y: '37%',
            textAlign: 'center',
            textStyle: {
                fontSize: '70',
                fontWeight: '100',
                color: '#79ffff',
                textAlign: 'center',
            },
        },
        {
            text: 'DESIGN ELEMENTS',
            z: 12,
            x: '50%',
            y: '41%',
            textAlign: 'center',
            textStyle: {
                fontSize: '12',
                fontWeight: '400',
                color: '#fff',
                textAlign: 'center',
            },
        },
    ],
    graphic: {
        elements: [
            {
                type: 'image',
                z: 12,
                style: {
                    image: imgSrc,
                    width: 20,
                    shadowBlur: 10,
                    shadowColor: '#000',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                },
                left: 'center',
                top: '35%',
                position: [100, 100],
            },
        ],
    },
    polar: {
        radius: ['43%', '40%'],
        center: ['50%', '50%'],
    },
    angleAxis: {
        max: 100,
        clockwise: false,
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        splitLine: {
            show: false,
        },
    },
    radiusAxis: {
        type: 'category',
        show: true,
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
    },
    series: [
        {
            type: 'liquidFill',
            radius: '40%',
            z: 10,
            center: ['50%', '50%'],
            amplitude: 10,
            color: {
             type: 'linear',
             x: 0,
             y: 0,
             x2: 0,
             y2: 1,
             colorStops: [{
                 offset: 1,
                 color: '#0f98c5'
             }, {
                 offset: 0.7,
                 color: '#12a4d4'
             }, {
                 offset: 0,
                 color: '#0ff'
             }],
             globalCoord: false
         },
            data : [ 0.5 ,  { 
            value : 0.45 , 
            direction : 'left' , 
        } ,  0.4 ] ,
            backgroundStyle: {
                borderWidth: 1,
                color: '#323254',
            },
            label: {
                normal: {
                    formatter: '',
                },
            },
            outline: {
                show: true,
                itemStyle: {
                    borderWidth: 0,
                },
                borderDistance: 0,
            },
        },
        {
            type: 'pie',
            clockWise: true,
            hoverAnimation: false,
            radius: ['40%', '41%'],
            center: ['50%', '50%'],
            z: '9',
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                },
            },
            data: [
                {
                    value: 10,
                    itemStyle: {
                        normal: {
                            color: '#0a0b10',
                            shadowBlur: 8,
                            shadowColor: '#000',
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                        },
                    },
                },
            ],
        },
        {
            type: 'pie',
            clockWise: true,
            hoverAnimation: false,
            radius: ['40%', '41%'],
            center: ['50%', '50%'],
            z: '9',
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                },
            },
            data: [
                {
                    value: 10,
                    itemStyle: {
                        normal: {
                            color: '#0a0b10',
                            shadowBlur: 8,
                            shadowColor: '#000',
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                        },
                    },
                },
            ],
        },
        {
            type: 'pie',
            clockWise: true,
            hoverAnimation: false,
            radius: ['40%', '41%'],
            center: ['50%', '50%'],
            z: '13',
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                },
            },
            data: [
                {
                    value: 10,
                    itemStyle: {
                        normal: {
                            color: '#0a0b10',
                            shadowBlur: 10,
                            shadowColor: '#000',
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                        },
                    },
                },
            ],
        },
        {
            type: 'pie',
            zlevel: 0,
            silent: true,
            startAngle: 0,
            radius: ['41%', '43%'],
            z: 1,
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
            data: sc1(),
        },
        {
            type: 'pie',
            zlevel: 0,
            silent: true,
            startAngle: 1,
            radius: ['41%', '45%'],
            z: 1,
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
            data: sc1(),
        },
        {
            type: 'pie',
            zlevel: 0,
            silent: true,
            startAngle: 2,
            radius: ['41%', '44%'],
            z: 1,
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
            data: sc1(),
        },
        {
            type: 'pie',
            zlevel: 0,
            silent: true,
            startAngle: 3,
            radius: ['41%', '44.5%'],
            z: 1,
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
            data: sc1(),
        },
        {
            type: 'pie',
            zlevel: 0,
            silent: true,
            startAngle: 4,
            radius: ['41%', '45%'],
            z: 1,
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
            data: sc1(),
        },
        {
            type: 'pie',
            zlevel: 0,
            silent: true,
            startAngle: 5,
            radius: ['41%', '47.5%'],
            z: 1,
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
            data: sc1(),
        },
        {
            type: 'pie',
            zlevel: 0,
            silent: true,
            startAngle: 6,
            radius: ['41%', '45.3%'],
            z: 1,
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
            data: sc1(),
        },
        {
            type: 'pie',
            zlevel: 0,
            silent: true,
            startAngle: 1,
            radius: ['41%', '50%'],
            z: 1,
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
            data: sc2(),
        },
        {
            type: 'pie',
            zlevel: 0,
            silent: true,
            startAngle: 3,
            radius: ['41%', '48%'],
            z: 1,
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
            data: sc3(),
        },
        {
            type: 'pie',
            zlevel: 0,
            silent: true,
            startAngle: 7,
            radius: ['41%', '46.5%'],
            z: 1,
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
            data: sc4(),
        },
    ],
};
