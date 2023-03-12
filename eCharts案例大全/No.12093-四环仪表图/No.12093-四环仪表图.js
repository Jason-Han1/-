var highlight = '#03b7c9';

var demoData = [
    { name: '空气', value: 60, unit: '%', pos: ['16.6%', '25%'], range: [0, 100],colora:'#1db0d2',colorb:'#44ceef' },
    { name: '水', value: 0, unit: '%', pos: ['49.8%', '25%'], range: [0, 100],colora:'#e6658f',colorb:'#f8a58b' },
    { name: 'VOC', value: 90, unit: '%', pos: ['16.6%', '75%'], range: [0, 100],colora:'#1ea899',colorb:'#29c582' },
     { name: '恶臭', value: 90, unit: '%', pos: ['49.8%', '75%'], range: [0, 100],colora:'#c188f4',colorb:'#f2a6c8' }
  
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
                    min: 0,
                    max: 100,
                    startAngle: 225,
                    endAngle: -45,
                   axisLine: {
                      show: true,
                      lineStyle: {
                        width: 1,
                        color: [[1,'rgba(0,0,0,0)']]
                      }
                    },//仪表盘轴线
                     axisTick: {
                      show: true,
                      lineStyle: {
                        color: 'rgba(255,255,255,0.6)',
                        width: 1
                      },
                      length: -8
                    },//刻度样式
                   splitLine: {
                      show: true,
                      length: -20,
                      lineStyle: {
                        color: 'rgba(255,255,255,0.6)'
                      }
                    },//分隔线样式
                    axisLabel: {
                        show:false,
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
                    radius: '28%',
                    startAngle: 225,
                    endAngle: -45,
                    min: 0,
                    max: 100,
                   axisLine: {
                        show: true,
                        lineStyle: {
                          width: 6,
                          color: [
                            [
                              item.value/100, new echarts.graphic.LinearGradient(
                              0, 0, 1, 0, [{
                              offset: 0,
                              color: item.colora,
                            },
                              {
                                offset: 1,
                                color:item.colorb,
                              }
                            ]
                              )
                            ],
                            [
                              1, '#222e7d'
                            ]
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
                        show: false,
                        length: '105%'
                    },
                    detail: {
                        show: true,
                        offsetCenter: [0, '15%'],
                        textStyle: {
                            fontSize: 25,
                            color: '#fff'
                        },
                        formatter: [
                            '{value} ' + (item.unit || ''),
                            '{name|' + item.name + '}'
                        ].join('\n'),
                        rich: {
                            name: {
                                fontSize: 20,
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