option = {
            legend: {
                data: ['立案数','结案数'],
                x: 'right',
                textStyle: {
                    color: 'red',
                },
            },
            radar: [
                {
                    indicator: [
                        { text: 1 },
                        { text: 2 },
                        { text: 3 },
                        { text: 4 },
                    ],
                    center: ['50%', '50%'],
                    radius: 90,
                    startAngle: 90,
                    splitNumber: 4,
                    shape: 'circle',
                    name: {
                        formatter: '{value}',
                        textStyle: {
                            color: 'white'
                        }
                    },
                    splitArea: {
                        areaStyle: {
                            color: ['rgba(114, 172, 209, 0.2)',
                                'rgba(114, 172, 209, 0.4)', 'rgba(114, 172, 209, 0.6)',
                                'rgba(114, 172, 209, 0.8)', 'rgba(114, 172, 209, 1)'],
                            shadowColor: 'rgba(0, 0, 0, 0.3)',
                            shadowBlur: 10
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.5)'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.5)'
                        }
                    }
                }
            ],
            series: [
                {
                    name: '雷达图',
                    type: 'radar',
                    emphasis: {
                        lineStyle: {
                            width: 4
                        }
                    },
                    data: [
                        {
                          value: [1, 2, 3, 4],
                          name: '立案数',
                          symbol: 'rect',
                          symbolSize: 5,
                          lineStyle: {
                              type: 'dashed',
                              color: '#fdae61'
                          },
                          //这里的配置显示数值
                          label: {
                              normal: {
                                  show: true,
                                  formatter:function(params) {
                                      return params.value;
                                  }
                              }
                          }
                        },
                        {
                             value: [1, 2, 3, 4],
                            name: '结案数',
                            areaStyle: {
                                color: 'rgba(255, 255, 255, 0.5)'
                            },
                            //这里的配置显示数值
                            label: {
                                normal: {
                                    show: true,
                                    formatter:function(params) {
                                        return params.value;
                                    }
                                }
                            }
                        }
                    ]
                }
            ]
        }