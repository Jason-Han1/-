option = {
        backgroundColor: '#0C263A',
    title: {
        text: '自定义雷达图'
    },
    legend: {
        data: ['图一','图二', '张三', '李四']
    },
    radar: [
        {
            indicator: [
                { text: '指标一' },
                { text: '指标二' },
                { text: '指标三' },
                { text: '指标四' },
                { text: '指标五' }
            ],
            radius: 220,
            startAngle: 90,
            splitNumber: 4,
            shape: 'circle',
            name: {
                formatter:'【{value}】',
                textStyle: {
                    color:'#72ACD1'
                }
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)'
                }
            },
            splitLine: {
                lineStyle: {
                normal: {
                    shadowColor: 'rgba(142, 152, 241, 0.6)'
                }
                }
            }
        }
    ],
    series: [
         {
           type: 'pie',
            data: [{
                value: 100,
                itemStyle: {
                normal: {
                    color: new echarts.graphic.RadialGradient(0.5, 0.5, 0.5,  [{
                       offset: 0.8, color: '#18467D' // 0.8% 处的颜色
                        }, {
                          offset: 1, color: 'rgba(15,49,83, 0)' // 100% 处的颜色
                        }], false),
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                }
            }],
            radius: [220, 250]
        },
        {
            name: '雷达图',
            type: 'radar',
            itemStyle: {
                emphasis: {
                    // color: 各异,
                    lineStyle: {
                        width: 4
                    }
                }
            },
            data: [
                {
                    value: [100, 8, 0.40, -80, 2000],
                    name: '图一',
                    symbol: 'rect',
                    symbolSize: 5,
                    lineStyle: {
                        normal: {
                            type: 'dashed'
                        }
                    }
                }
            ]
        }
    ]
}