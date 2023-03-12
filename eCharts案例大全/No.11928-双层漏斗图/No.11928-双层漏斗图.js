option = {
    grid: {
        top: 100,
        right: 100,
        bottom: 100,
        left: 100
    },
    xAxis: {
        show: false
    },
    yAxis: {
        show: true,
        max: 100,
        min: 0,
        interval: 10,
        axisLine: {
            lineStyle: {
                color: '#434857',
            }
        },
        axisTick: {
            length: 5,
        },
        axisLabel: {
            fontSize: '10px',
            color: '#6B717D',
            formatter: '{value} %',
            //   padding : [0,5 ,0 , 0],
        },
        axisPointer: {
            show: true,
        },
        splitLine: {
            show: false
        },
        axisPointer: {
            show: false
        }
    },
    series: [{
            name: '覆盖率',
            type: 'funnel',
            x: 'center',
            top: 250,
            bottom: 100,
            width: 660,
            itemStyle: {
                normal: {
                    color: {
                        colorStops: [{
                            offset: 0,
                            color: '#78B5F3' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#3C8FF4' // 100% 处的颜色
                        }],
                    },
                }
            },
              label: {
                    color: '#434857',
                    show: true,
                    align: 'left',
                    verticalAlign: 'bottom',
                     formatter: [
                            '{a| 80}{b| %}',
                            '{c| 覆盖率 }'
                     ].join('\n'),
             textStyle: {
                rich: {
                    a: {
                        color: '#3392FF',
                        fontSize: '36',
                        fontWeight: 'bold',
                        align: 'left'
                    },
                    b: {
                        color: '#3392FF',
                        fontSize: '12',
                    },
                    c: {
                        color: '#fff',
                        fontSize: '12',
                        align: 'center'
                    }
                }
            },
                },
             labelLine: {
                show: true
            },
            data: [{
                value: 80,
                name: '覆盖率',
            }, ]
        },
        {
            name: '漏斗图',
            type: 'funnel',
            z: 1,
            x: 'center',
            top: 100,
            bottom: 100,
            width: 800,
            color: '#12121E',
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            data: [{
                value: 100,
                name: '覆盖率',
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
            }]
        }
    ]
};