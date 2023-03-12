option = {
    backgroundColor: '#000',
    series: [
        {
            type: 'gauge',
            name: '',
            radius: '60%',
            
            // 好嗨哦~~ 鸟巢
            //这里数不要太大，不然后果很严重
        
            startAngle: '5000',
            endAngle: '100000',
            splitNumber: '100',
            
            
            pointer: {
                show: false
            },
            title: {
                show: false
            },
            detail: {
                show: false
            },
            data: [{
                value:100,
                name: ''
            }],
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                length: 20,
                lineStyle: {
                    shadowColor:'rgba(134, 46, 156,.5)',
                    shadowOffsetX:'0',
                    shadowOffsetY:'1',
                    // color: 'rgba(255,255,255,.3)',
                    color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: 'rgba(255,255,255,.9)'},
                                {offset: 1, color: 'rgba(205,25,55,.1)'}
                            ]
                        ),
                    width: 300,
                },
            },
            axisLabel: {
                show: false
            }
        },

        {
            name: 'pie',
            type: 'pie',
            clockWise: true,
            startAngle: 90,
            radius: ['52%', '48%'],
            hoverAnimation: false,
            center: ['50%', '50%'],
            data: [{
                    value: 5,
                    label: {
                        normal: {
                            formatter: '{d}%',
                            position: 'center',
                            show: true,
                            textStyle: {
                                fontSize: '35',
                                fontWeight: 'normal',
                                color: '#fff'
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#c280be',
                            shadowColor: '#c280be',
                            shadowBlur: 10
                        }
                    }
                },
                {
                    value: 5,
                    name: '',
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(194, 128, 191,.3)',
                        },
                        emphasis: {
                            color: 'rgba(44,59,70,1)'
                        }
                    }
                }
            ]
        }
    ]
};