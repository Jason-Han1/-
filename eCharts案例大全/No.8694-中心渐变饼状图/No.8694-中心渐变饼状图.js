// 数据及颜色设置
let bgColor = '#0A2E6A';
let circleColor = '#0075ff'; // 三个圆环的颜色
let gradientColor = ['#000204', '#0A2E6A']; // 中心圆渐变色
let color = ['#2EB2FA', '#43CC31', '#FFC145', '#FFA8A8']; // 数据图表颜色数组
let scale = 1;
let echartData = [{
        name: 'A类',
        value: 30,
        unit: '元'
    },
    {
        name: 'B类',
        value: 20,
        unit: '元'
    }, {
        name: 'C类',
        value: 30,
        unit: '元'
    }
];
let total = echartData.reduce((a, b) => {
    return a + b.value * 1
}, 0)


option = {
    backgroundColor: bgColor,
    color: color,
    title: {
        text: '异常分布情况',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 24 * scale,
            color: "#fff",
        }
    },
    tooltip: {
        show: false
    },
    legend: {
        icon: 'rect',
        itemWidth: 14 * scale,
        itemHeight: 14 * scale,
        orient: 'vertical',
        top: 'center',
        right: 30,
        formatter: function(name) {
            let res = echartData.filter(v => v.name === name);
            res = res[0];
            let percent = (res.value * 100 / total).toFixed(2);
            return '{percent|' + percent + '}{unit| %}\n' + res.name + '{value|' + res.value + '}' + (res.unit || '')
        },
        textStyle: {
            color: '#fff',
            fontSize: 12 * scale,
            align: 'right',
            padding: [0, 0, 20 * scale, 0],
            rich: {
                percent: {
                    fontSize: 22 * scale,
                    color: '#ffe400',
                    align: 'right'
                },
                unit: {
                    fontSize: 14 * scale,
                    align: 'right',
                    padding: [0, 0, 4 * scale, 0]
                },
                value: {
                    fontSize: 14 * scale,
                    align: 'right',
                    padding: [0, 5 * scale, 0, 30 * scale]
                }
            }
        }
    },
    series: [{
            type: 'pie',
            name: '最内层径向渐变圆心',
            clockWise: false,
            radius: '45%',
            center: ['50%', '50%'],
            z: 1,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.RadialGradient(.5, .5, .6, [{
                            offset: 0,
                            color: gradientColor[0]
                        },
                        {
                            offset: 1,
                            color: gradientColor[1] || bgColor
                        }
                    ], false)
                },
            },
            hoverAnimation: false,
            label: {
                show: false,
            },
            tooltip: {
                show: false
            },
            data: [100],
        },
        {
            type: 'pie',
            name: '内层细圆环1',
            radius: ['46%', '46%'],
            hoverAnimation: false,
            clockWise: false,
            itemStyle: {
                normal: {
                    borderColor: circleColor,
                    borderWidth: 1,
                }
            },
            label: {
                show: false
            },
            data: [100]
        },
        {
            type: 'pie',
            name: '内层细圆环2',
            radius: ['42%', '42%'],
            hoverAnimation: false,
            clockWise: false,
            itemStyle: {
                normal: {
                    borderColor: circleColor,
                    borderWidth: 1,
                }
            },
            label: {
                show: false
            },
            data: [100]
        },
        {
            type: 'pie',
            name: '最外层细圆环',
            hoverAnimation: false,
            clockWise: false,
            radius: ['60%', '60%'],
            itemStyle: {
                normal: {
                    borderColor: circleColor,
                    borderWidth: 1,
                }
            },
            label: {
                show: false
            },
            data: [100]
        },
        {
            name: '饼图内容区',
            type: 'pie',
            clockWise: false,
            radius: ['50%', '56%'],
            hoverAnimation: false,
            data: echartData,
            itemStyle: {
                normal: {
                    shadowBlur: 20,
                    shadowColor: '#00204',
                }
            },
            label: {
                show: false
            }
        }
    ]
};