var highlight = '#03b7c9';

var demoData = [
    { name: '城镇化率', value: 220, unit: '%', pos: ['16.6%', '25%'], range: [0, 400] },
    { name: '医院增长率', value: 32, unit: '%', pos: ['49.8%', '25%'], range: [0, 60] },
    { name: '医护人员增长率', value: 0.9, unit: '%', pos: ['83%', '25%'], range: [0.1, 1.0], splitNum: 9 }
];

option = {
    backgroundColor: '#222939',
    
    series: (function() {
        var result = [];
        
        demoData.forEach(function(item) {
            result.push(
                // 外围刻度
                {
                    type: 'gauge',
                    center: item.pos,
                    radius: '33.33%',  // 1行3个
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
                        length: -5,
                        splitNumber: 10
                    },
                    splitLine: {
                        show: true,
                        length: -14,
                        lineStyle: {
                            color: highlight,
                        }
                    },
                    axisLabel: {
                        distance: -20,
                        textStyle: {
                            color: highlight,
                            fontSize: '14',
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
                    radius: '30.33%',
                    startAngle: 225,
                    endAngle: -45,
                    min: item.range[0],
                    max: item.range[1],
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width: 16,
                            color: [
                                [1, 'rgba(255,255,255,.1)']
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
                        length: '105%'
                    },
                    detail: {
                        show: true,
                        offsetCenter: [0, '100%'],
                        textStyle: {
                            fontSize: 20,
                            color: '#fff'
                        },
                        formatter: [
                            '{value} ' + (item.unit || ''),
                            '{name|' + item.name + '}'
                        ].join('\n'),
                        rich: {
                            name: {
                                fontSize: 14,
                                lineHeight: 30,
                                color: '#ddd'
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