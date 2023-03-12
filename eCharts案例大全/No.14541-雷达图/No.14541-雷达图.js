var imgPath = ['http://bmob-cdn-15355.b0.upaiyun.com/2017/12/01/bee4341c4089af7980b87074a77479ad.png']
option = {
    backgroundColor: '#000000',
    color: ['rgba(245, 166, 35, 1)', 'rgba(19, 173, 255, 1)'],
    legend: {
        show: true,
        icon: 'circle',
        bottom: 45,
        center: 0,
        itemWidth: 8,
        itemHeight: 8,
        textStyle: {
            fontSize: 14,
            color: '#ade3ff'
        },
        data: ['当前园区', '园区平均值'],
    },
    radar: [{
        indicator: [{
            text: '盈利能力',
            max: 100
        }, {
            text: '发展水平',
            max: 100
        }, {
            text: '融资能力',
            max: 100
        }, {
            text: '技术能力',
            max: 100
        }, {
            text: '企业规模',
            max: 100
        }],
        textStyle: {
            color: 'red'
        },
        center: ['50%', '50%'],
        radius: 150,
        startAngle: 90,
        splitNumber: 4,
        shape: 'circle',
        backgroundColor: {
            image:imgPath[0]
        },
        name: {
            formatter: '{value}',
            textStyle: {
                fontSize: 14,
                color: '#ffffff'
            }
        },
        splitArea: {
            areaStyle: {
                color: ['transparent',
                    'transparent)', 'rgba(114, 172, 209, 0)',
                    'transparent', 'rgba(114, 172, 209, 0)'
                ],
            }
        },
        axisLine: {
            lineStyle: {
                color: '#2770ab'
            }
        },
        splitLine: {
            lineStyle: {
                color: '#2770ab'
            }
        }
    }, ],
    series: [{
        name: '雷达图',
        type: 'radar',
        itemStyle: {
            emphasis: {
                lineStyle: {
                    width: 4
                }
            }
        },
        data: [{
            name: '园区平均值',
            value: [50, 50, 50, 50, 50],
            areaStyle: {
                normal: {
                    color: 'rgba(245, 166, 35, 0.4)'
                }
            },
            symbolSize: 2.5,
            itemStyle: {
                normal: {
                    borderColor: 'rgba(245, 166, 35, 1)',
                    borderWidth: 2.5,
                }
            },
            lineStyle: {
                normal: {
                    opacity: 0.5
                }
            }
        }, {
            name: '当前园区',
            value: [30, 60, 55, 60, 70],
            symbolSize: 2.5,
            itemStyle: {
                normal: {
                    borderColor: 'rgba(19, 173, 255, 1)',
                    borderWidth: 2.5,
                }
            },
            areaStyle: {
                normal: {
                    color: 'rgba(19, 173, 255, 0.5)'
                }
            },
            lineStyle: {
                normal: {
                    opacity: 0.5
                }
            }
        }]
    }, ]
};