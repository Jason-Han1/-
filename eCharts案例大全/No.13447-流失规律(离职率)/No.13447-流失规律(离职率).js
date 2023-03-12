option = {
    backgroundColor: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 0,
        colorStops: [{
            offset: 0, color: 'rgba(28, 210, 255, 0.3)' // 0% 处的颜色
        }, {
            offset: 1, color: 'rgba(28, 210, 255, 0.01)' // 100% 处的颜色
        }],
        globalCoord: false // 缺省为 false
    },
    title: {
        text: '流失规律(离职率)',
        textStyle:{
            color: '#ffffff'
        }
    },
    xAxis: {
        axisTick:{
          show: false  
        },
         axisLine: {
            show: true,
            lineStyle: {
                width: 2,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 1, 0, [{
                            offset: 0,
                            color: 'rgba(35, 128, 255, 0)'
                        },
                        {
                            offset: 0.5,
                            color: 'rgba(103, 167, 255, 1)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(35, 128, 255, 0)'
                        }
                    ]
                )
            }
        },
        axisLabel: {
            show: true,
            color: 'rgba(255,255,255,0.8)',
            fontSize: 16
        },
        data: ['3', '6', '9', '12', '15', '18', '21', '24', '27', '30', '33', '36']
    },
    yAxis: {
         axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                color: 'rgba(255,255,255,0.8)',
                fontSize: 16
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 1, 0, [{
                                offset: 0,
                                color: 'rgba(255, 255, 255, 0)'
                            },
                            {
                                offset: 0.5,
                                color: 'rgba(255, 255, 255, 0.4)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(255, 255, 255, 0)'
                            }
                        ]
                    )
                }
            },
    },
    series: [{
        type: 'line',
        symbol: 'rect',
        symbolSize: 6,
        lineStyle:{
            width: 2,
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [{
                    offset: 0, color: '#1a4285' // 0% 处的颜色
                }, {
                    offset: 1, color: '#16387c' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
            }  
        },
        data:[220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290]
    }]
};