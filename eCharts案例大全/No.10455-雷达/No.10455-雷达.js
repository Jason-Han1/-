option = {
    backgroundColor: "#000",
    tooltip: {
        trigger: 'axis',
        show: false
    },
    radar: {
        indicator: [{
                name: '测试1',
                max: 100,
                num: 100
            },
            {
                name: '测试2',
                max: 100,
                num: 90
            },
            {
                name: '测试3',
                max: 100,
                num: 80
            }, {
                name: '测试4',
                max: 100,
                num: 20
            }
        ],
        radius: '70%',
        center: ['50%', '50%'],
        shape: 'circle',
        splitNumber: 4,
        name: {
            textStyle: {
                color: '#F6F46D',
                fontSize: 14
            },
            formatter: function(value, indicator) {
                return '{a|' + value + '} {b|' + indicator.num + '}'
            },
            lineHeight: 20,
            rich: {
                a: {
                    fontSize: 12,
                    align: 'center'
                },
                b: {
                    fontSize: 12,
                    align: 'left'
                }
            }
        },
        splitArea: {
            areaStyle: {
                color: ['rgba(255,255,255,0.1)',
                    'rgba(255,255,255,0.03)', 'rgba(255,255,255,0.1)',
                    'rgba(255,255,255,0.03)'
                ]
            }
        },
        splitLine: {
            lineStyle: {
                type: "dashed",
                // color: [   //此处可以修改圆环的颜色
                //     '#FFC221', '#6B6EB1',
                //     '#6B6EB1', '#6B6EB1',
                //     '#6B6EB1', '#6B6EB1'
                // ].reverse(),
                width: 1
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(238,238,238, 0.2)'
            }
        }
    },
    series: {
        name: '信息',
        type: 'radar',
        tooltip: {
            trigger: 'item'
        },
        data: [{
            value: [100, 90, 80, 20],

        }],
        symbol: 'circle',
        symbolSize: 12,
        itemStyle: {
            normal: {
                color: 'rgba(246,241,111,0.8)',
                borderColor: 'rgba(246,241,111,0.2)',
                borderWidth: 12,
            }
        },
        areaStyle: {
            normal: {
                color: 'rgba(246,241,111, 0.5)',
            }
        },
        lineStyle: {
            normal: {
                type: "dashed",
                color: 'rgba(246,241,111, 1)',
                width: 2
            }
        },

    }


};