option = {
    backgroundColor: '#57CBCC',
    title: {
        text: 'NST人格属性图'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        x: 'center',
        data: ['开创', '固定', '变动']
    },
    radar: [{
        indicator: [{
            text: '开创',
            max: 13
        }, {
            text: '变动',
            max: 13
        }, {
            text: '固定',
            max: 13
        }],
        splitNumber: 1,
        center: ['50%', '40%'],
        name: {
            formatter: '{value}',
            textStyle: {
                fontSize: 20,
                color: '#fff'
            }
        },
        splitArea: {
            areaStyle: {
                color: ['rgba(0, 0, 0, 0)',
                    'rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0)',
                    'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0)'
                ],
                shadowColor: 'rgba(255, 255, 255, 1)',
                shadowBlur: 40
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(255, 255, 255, 0)'
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(255, 255, 255, 0.6)',
            }
        },
        radius: 170
    }, {
        indicator: [{
            text: '强化',
            max: 13
        }, {
            text: '和谐',
            max: 13
        }, {
            text: '压迫',
            max: 13
        }, {
            text: '冲突',
            max: 13
        }, {
            text: '阻滞',
            max: 13
        }, {
            text: '调和',
            max: 13
        }],
        startAngle: 60,
        splitNumber: 1,
        center: ['50%', '40%'],
        name: {
            formatter: '{value}',
            textStyle: {
                fontSize: 16,
                color: 'rgba(255, 255, 255, 0.6)'
            }
        },
        splitArea: {
            areaStyle: {
                color: ['rgba(0, 0, 0, 0)',
                    'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0)',
                    'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0)'
                ],
                shadowColor: 'rgba(255, 255, 255, 1)',
                shadowBlur: 40
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(255, 255, 255, 0.6)',
            }
        },
        radius: 210,
        center: ['50%', '40%'],
    }],
    series: [{
        type: 'radar',
        tooltip: {
            trigger: 'item'
        },
        itemStyle: {
            normal: {
                areaStyle: {
                    type: 'default'
                }
            }
        },
        data: [{
            value: [9, 7, 7],
            name: '三型基本人格'
        }]
    }, {
        type: 'radar',
        tooltip: {
            trigger: 'item'
        },
        radarIndex: 1,
        data: [{
            value: [3, 6, 9, 6, 2, 10],
            name: '六型宇宙势能',
            symbol: 'rect',
            symbolSize: 5,
            lineStyle: {
                normal: {
                    type: 'dashed',
                    Color: '#fff'
                }
            }
        }]
    }]
};