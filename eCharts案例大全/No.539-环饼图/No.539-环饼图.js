let angle = 0; //角度，用来做简单的动画效果的
let value = 80;
let maxvalue = 100;
let percent = (value / maxvalue) * 100;
percent = percent.toFixed(0)
option = {
    backgroundColor: '#000E1A',
    title: {
        text: '{a|' + percent + '}{c|%}',
        x: 'center',
        y: 'center',
        textStyle: {
            rich: {
                a: {
                    fontSize: 70,

                    color: '#ffffff',
                    fontFamily: 'Din'
                },

                c: {
                    fontSize: 45,

                    color: '#ffffff',
                    fontFamily: 'SanFrancisco ',

                }
            }
        }
    },
    polar: [{
            radius: ['33.5%', '45%'],
            center: ['50%', '50%'],
            
        },

    ],

    angleAxis: {
        max: maxvalue,
        show: false,
        inverse: false
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
            show: false
        },
    },

    series: [
        // 大弧线
        {
            name: "ring5",
            type: 'custom',
            coordinateSystem: "none",
            renderItem: function (params, api) {
                return {
                    type: 'arc',
                    shape: {
                        cx: api.getWidth() / 2,
                        cy: api.getHeight() / 2,
                        r: Math.min(api.getWidth(), api.getHeight()) / 2.3 * 0.6,
                        // startAngle: (0+angle) * Math.PI / 180,
                        // endAngle: (90+angle) * Math.PI / 180
                        startAngle: (0) * Math.PI / 180,
                        endAngle: (360) * Math.PI / 180
                    },
                    style: {
                        stroke: "rgb(53,53,53)",
                        fill: " transparent",
                        lineWidth: 5
                    },
                    silent: true
                };
            },
            data: [0]
        },
        //小弧线
        {
            name: "ring5",
            type: 'custom',
            z: 1,
            coordinateSystem: "none",
            renderItem: function (params, api) {
                return {
                    type: 'arc',
                    shape: {
                        cx: api.getWidth() / 2,
                        cy: api.getHeight() / 2,
                        r: Math.min(api.getWidth(), api.getHeight()) / 3.3 * 0.6,
                        // startAngle: (0+angle) * Math.PI / 180,
                        // endAngle: (90+angle) * Math.PI / 180
                        startAngle: (0) * Math.PI / 180,
                        endAngle: (360) * Math.PI / 180
                    },
                    style: {
                        stroke: "rgb(53,53,53)",
                        fill: " transparent",
                        lineWidth: 5
                    },
                    silent: true
                };
            },
            data: [0]
        },
        //点,通过时间间隔函数做成动画效果
        {
            name: "ring5",
            type: 'custom',
            coordinateSystem: "none",
            renderItem: function (params, api) {
                let x0 = api.getWidth() / 2;
                let y0 = api.getHeight() / 2;
                let r = Math.min(api.getWidth(), api.getHeight()) / 2.3 * 0.6;
                let point = getCirlPoint(x0, y0, r, (90 + angle))
                return {
                    type: 'circle',
                    shape: {
                        cx: point.x,
                        cy: point.y,
                        r: 5
                    },
                    style: {
                        stroke: "rgb(211,145,28)",
                        fill: "rgb(211,145,28)"
                    },
                    silent: true
                };
            },
            data: [0]
        },
        //点
        {
            name: "ring5",
            type: 'custom',
            coordinateSystem: "none",
            renderItem: function (params, api) {
                let x0 = api.getWidth() / 2;
                let y0 = api.getHeight() / 2;
                let r = Math.min(api.getWidth(), api.getHeight()) / 2.3 * 0.6;
                let point = getCirlPoint(x0, y0, r, (270 + angle))
                return {
                    type: 'circle',
                    shape: {
                        cx: point.x,
                        cy: point.y,
                        r: 5
                    },
                    style: {
                        stroke: "rgb(211,145,28)",
                        fill: "rgb(211,145,28)"
                    },
                    silent: true
                };
            },
            data: [0]
        },
        

        //极坐标柱状图
        {
            name: '',
            type: 'bar',
            roundCap: true,
            barWidth: 10,
            showBackground: true,
            stack:"a",
            backgroundStyle: {
                color: 'rgba(66, 66, 66, 0)',
            },
            data: [value,0],
            coordinateSystem: 'polar',


            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: 'rgb(211,145,28)'
                    }, {
                        offset: 1,
                        color: 'rgba(211,145,28,1)'
                    }]),
                    shadowBlur:15,
                    shadowColor:'rgba(211,145,28,1)',
                }
            }

        },
        
        //分割刻度
        {
            type: 'gauge',
            radius: '48%',
            clockwise: false,
            startAngle: '90',
            endAngle: '-269.9999',
            splitNumber: 36,
            detail: {
                offsetCenter: [0, -20],
                formatter: ' '
            },
            pointer: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: [
                        [0, 'rgba(211,145,28,1)'],
                        [(100-value) / 100, 'rgba(211,145,28,1)'],
                        [1, 'rgba(53,53,53,.3)']
                    ],
                    width: 20,
                    
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                length: 35,
                lineStyle: {
                    color: 'rgba(0,14,26,1)',
                    width: 6
                }
            },
            axisLabel: {
                show: false
            }
        },

        //仪表盘，用于显示小刻度圈
        {
            name: '统计',
            type: 'gauge',
            splitNumber: 12, //刻度数量
            min: 0,
            max: 100,
            radius: '31%', //图表尺寸
            center: ['50%', '50%'],
            startAngle: 90,
            endAngle: -269.9999,
            axisLine: {
                show: false,
                lineStyle: {
                    width: 0,
                    shadowBlur: 0,
                    color: [
                        [0, 'rgb(99,99,99)'],
                        [1, 'rgb(99,99,99)']
                    ]
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: 'rgb(99,99,99)',
                    width: 5, //刻度线的宽度
                },
                length: 2, //刻度线的长度
                splitNumber: 5
            },
            splitLine: {
                show: true,
                length: 0,
                lineStyle: {
                    color: 'rgb(99,99,99)',
                }
            },
            axisLabel: {
                show: false
            },
            // pointer: { //仪表盘指针
            //     show: 0,
            // },
            detail: {
                borderColor: '#fff',
                shadowColor: '#fff', //默认透明
                shadowBlur: 2,
                offsetCenter: [0, '0%'], // x, y，单位px
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: '0',
                    fontSize: 50,
                },
                formatter: '{value}'
            },
            // data: [{
            //     name: "",
            //     value: 0
            // }]
        },

        //外圈波纹效果
       
    ]
};

//获取圆上面某点的坐标(x0,y0表示坐标，r半径，angle角度)
function getCirlPoint(x0, y0, r, angle) {
    let x1 = x0 + r * Math.cos(angle * Math.PI / 180)
    let y1 = y0 + r * Math.sin(angle * Math.PI / 180)
    return {
        x: x1,
        y: y1
    }
}

function draw() {
    angle = angle + 3
    myChart.setOption(option, true)
    //window.requestAnimationFrame(draw);
}

setInterval(function () {
    //用setInterval做动画感觉有问题
    draw()
}, 100);