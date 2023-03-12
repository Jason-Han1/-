//适合1120*160尺寸
var highlight = '#03b7c9';

var demoData = [{
        name: '弹性服务器使用率',
        value: 53.78,
        unit: '%',
        pos: ['10%', '50%'],
        range: [0, 100]
    },
    {
        name: '数据库使用率',
        value: 25.05,
        unit: '%',
        pos: ['30%', '50%'],
        range: [0, 100]
    },
    {
        name: '内存使用率',
        value: 53.78,
        unit: '%',
        pos: ['50%', '50%'],
        range: [0, 100]
    },
    {
        name: 'CPU使用率',
        value: 75.78,
        unit: '%',
        pos: ['70%', '50%'],
        range: [0, 100]
    },
    {
        name: '块存储使用率',
        value: 99.99,
        unit: '%',
        pos: ['90%', '50%'],
        range: [0, 100]
    }
];

option = {
    series: (function() {
        var result = [];

        demoData.forEach(function(item) {
            result.push(
                // 外围刻度
                {
                    type: 'gauge',
                    center: item.pos,
                    radius: '100%', // 1行3个
                    splitNumber: item.splitNum || 10,
                    min: item.range[0],
                    max: item.range[1],
                    startAngle: 225,
                    endAngle: -45,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width: 2,
                            shadowBlur: 0,
                            color: [
                                [1, highlight]
                            ]
                        }
                    },
                    axisTick: {
                        show: true,
                        lineStyle: {
                            color: highlight,
                            width: 1
                        },
                        length: 7, //小刻度线长度调整
                        splitNumber: 10
                    },
                    splitLine: {
                        show: true,
                        length: 0, // 长刻度数指针长度
                        lineStyle: {
                            color: highlight,
                        }
                    },
                    axisLabel: {
                        distance: 10,
                        textStyle: {
                            color: highlight,
                            fontSize: '10',
                            fontWeight: 'bold'
                        }
                    },
                    pointer: {
                        show: 0
                    },
                    detail: {
                        show: 0
                    }
                },

                // 内侧指针、数值显示
                {
                    name: item.name,
                    type: 'gauge',
                    center: item.pos,
                    radius: '65%',
                    startAngle: 225,
                    endAngle: -45,
                    min: item.range[0],
                    max: item.range[1],
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width: 8,
                            color: [
                                [0.7, '#37a2da'],
                                [1, '#fd666d']
                            ]
                        }
                    },
                    axisTick: {
                        show: 0,
                    },
                    splitLine: {
                        show: 0,
                    },
                    axisLabel: {
                        show: 0
                    },
                    pointer: {
                        show: true,
                        length: '55%'
                    },
                    detail: {
                        show: true,
                        offsetCenter: [-2, '117%'],
                        textStyle: {
                            fontSize: 24,
                            fontFamily: 'SF Digital Readout Heavy',
                            color: '#e4c344'
                        },
                        formatter: [
                            '{value} ' + (item.unit || ''),
                            '{name|' + item.name + '}'
                        ].join('\n'),
                        rich: {
                            name: {
                                fontSize: 14,
                                lineHeight: 20,
                                color: '#d7dbea'
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: highlight,
                        }
                    },
                    data: [{
                        value: item.value
                    }]
                }
            );
        });

        return result;
    })()
};