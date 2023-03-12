option = {
    series: [
        /*仪表盘图，做中间刻度线*/
        {
            type: 'gauge',
            name: '业务指标',
            radius: '62%',
            startAngle: '0',
            endAngle: '-359.99',
            splitNumber: '120',
            center: ['50%', '35%'],
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
                value: 95,
                name: '完成率'
            }],
            axisLine: {
                lineStyle: {
                    width: 20,
                    opacity: 0
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                length: 3,
                lineStyle: {
                    color: '#1d78c9',
                    width: 3,
                    type: 'solid',
                },
            },
            axisLabel: {
                show: false
            }
        },
        /*内心原型图，展示整体数据概览*/
        {
            name: 'pie',
            type: 'pie',
            clockWise: true,
            startAngle: 90,
            radius: ['58%', '65%'],
            hoverAnimation: false,
            center: ['50%', '35%'],
            data: [{
                    value: 45,
                    label: {
                  normal: {
                    position: "center",
                    show: true,
                    color: "#fff" ,
                    formatter:'{c}'+"%",
                    fontSize:86,
                    textShadowColor:"#05e8fa",
                    textShadowBlur:5
                  }
                },
                    itemStyle: {
                        normal: {
                            color: '#05e8fa',
                            shadowColor: '#05e8fa',
                            shadowBlur: 10
                        }
                    }
                },

                {
                    value: 55,
                    name: 'invisible',
                    itemStyle: {
                        normal: {
                            color: 'rgba(247,67,105,0)', // 未完成的圆环的颜色
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        },
                    }
                },

            ]
        }, {
            name: 'sixpie',
            type: 'pie',
            startAngle: 90,
            radius: '50%',
            hoverAnimation: false,
            center: ['50%', '35%'],
            itemStyle: {
                    normal: {
                        labelLine: {
                        show: false
                    },
                        color: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.5,
                            colorStops: [{
                                    offset: 0,
                                    color: "rgba(17,25,37,0.02)" // 0% 处的颜色
                                },
                                {
                                    offset: 0.5,
                                    color: "rgba(17,25,37,0.2)" // 50% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: "rgba(0,239,255,0.3)" // 100% 处的颜色
                                }
                            ],
                            globalCoord: false // 缺省为 false
                        },
                    }
                },
            data: [{
                value: 100,
                
            }]
        },
    ]
};