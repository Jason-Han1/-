var highlight = '#03b7c9';

var demoData = [
    { name: '电压', value: 220, unit: 'V', pos: ['16.6%', '25%'], range: [0, 400] },
    { name: '电流', value: 32, unit: 'A', pos: ['49.8%', '25%'], range: [0, 60] },
    { name: '功率因数', value: 0.9, pos: ['83%', '25%'], range: [0.1, 1.0], splitNum: 9 },
    { name: '有功功率', value: 6.34, unit: 'kW', pos: ['16.6%', '75%'], range: [0, 50] },
    { name: '有功电能', value: 6.28, unit: 'kWh', pos: ['49.8%', '75%'], range: [0, 50] },
    { name: '电网频率', value: 50, unit: 'Hz', pos: ['83%', '75%'], range: [0, 100] }
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