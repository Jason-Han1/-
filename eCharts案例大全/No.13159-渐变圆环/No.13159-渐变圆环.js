option = {
    backgroundColor: '#000',
    title: [{
        bottom: 50,
        width: '100%',
        left: 'center',
        text: '今日运单数',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 42,
            color: "#40E7F4"
        },
    }],
    series: [{
            type: 'gauge',
            name: '业务指标',
            radius: '50%',
            startAngle: '0',
            endAngle: '-359.99',
            splitNumber: '240',
            pointer: {
                show: false
            },
            detail: {
                show: false
            },
            data: [{
                value: 0,
                name: ''
            }],
            axisLine: {
                lineStyle: {
                    color: [
                        [1, 'rgba(120, 200, 45, 1)']
                    ],
                    width: 20,
                    opacity: .2
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                length: 20,
                lineStyle: {
                    color: 'rgba(0,0,0,1)',
                    width: 2,
                    type: 'solid',
                },
            },
            axisLabel: {
                show: false
            }
        },


        {
            name: '今日运单数',
            type: 'pie',
            radius: ['30%', '38%'],
            center: ['50%', '50%'],
            startAngle: 175,
            clockWise: false,
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    color: ['rgba(176, 212, 251, 1)'],
                    label: {
                        position: 'center'
                    },
                    labelLine: {
                        show: false
                    }
                }
            },
            data: [{
                value: 1,
                name: '完成工作量',
                label: {
                    formatter: '2678',
                    textStyle: {
                        color: '#fff',
                        fontSize: 42
                    }
                },
                itemStyle: {
                    normal: {
                        color: { // 完成的圆环的颜色
                            colorStops: [{
                                offset: 0,
                                color: '#00cefc' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#367bec' // 100% 处的颜色
                            }]
                        },
                    }
                },
            }]
        }
    ]
};