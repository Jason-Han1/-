xData = ['比率1', '比率2', '比率3'];
yData = [23.42, 12.3, 42.5];
yMaxData = [100, 100, 100];
yjNum = 20;
option = {
    backgroundColor: '#061326',
    grid: {
        top: '25%',
        left: '-5%',
        bottom: '5%',
        right: '5%',
        containLabel: true,
    },
    tooltip: {
        show: true,
    },
    animation: false,
    xAxis: [
        {
            type: 'category',
            data: xData,
            axisTick: {
                alignWithLabel: true,
            },
            nameTextStyle: {
                color: '#82b0ec',
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#82b0ec',
                },
            },
            axisLabel: {
                textStyle: {
                    color: '#fff',
                },
                margin: 30,
            },
        },
    ],
    yAxis: [
        {
            show: false,
            type: 'value',
            axisLabel: {
                textStyle: {
                    color: '#fff',
                },
            },
            splitLine: {
                lineStyle: {
                    color: '#0c2c5a',
                },
            },
            axisLine: {
                show: false,
            },
        },
    ],
    series: [
        {
            name: '顶',
            type: 'pictorialBar',
            symbolSize: [40, 10],
            symbolOffset: [0, -6],
            symbolPosition: 'end',
            z: 12,
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter: '{c}%',
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: '#34DCFF',
                },
            },
            data: yData.map((item) => {
                return {
                    value: item,
                    itemStyle: {
                        color:
                            item < yjNum
                                ? '#f00'
                                : new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                      { offset: 1, color: 'rgba(31,208,242,1)' },
                                      { offset: 0, color: 'rgba(11,61,117,1)' },
                                  ]),
                    },
                    label:{
                        color:item < yjNum? '#f00':'#34DCFF'
                    }
                };
            }),
        },
        {
            name: '底圆',
            type: 'pictorialBar',
            symbolSize: [40, 10],
            symbolOffset: [0, 7],
            // "barWidth": "20",
            z: 12,
            data: yData.map((item) => {
                return {
                    value: item,
                    itemStyle: {
                        color: item < yjNum ? '#f00' : 'rgba(31,208,242,.8)',
                    },
                };
            }),
        },
        {
            name: '底环小',
            type: 'pictorialBar',
            symbolSize: [50, 15],
            symbolOffset: [0, 12],
            z: 10,
            data: yData.map((item) => {
                return {
                    value: item,
                    itemStyle: {
                        color: 'transparent',
                        borderType: 'solid',
                        borderWidth: 2,
                        borderColor: item < yjNum ? '#f00' : 'rgba(31,208,242,1)',
                    },
                };
            }),
        },
        {
            name: '底环大',
            type: 'pictorialBar',
            symbolSize: [70, 20],
            symbolOffset: [0, 18],
            z: 10,
            data: yData.map((item) => {
                return {
                    value: item,
                    itemStyle: {
                        color: 'transparent',
                        borderType: 'solid',
                        borderWidth: 2,
                        borderColor: item < yjNum ? '#f00' : 'rgba(31,208,242,1)',
                    },
                };
            }),
        },
        {
            name: '柱状',
            type: 'bar',
            //silent: true,
            barWidth: '40',
            barGap: '10%', // Make series be overlap
            barCateGoryGap: '10%',
            data: yData.map((item) => {
                return {
                    value: item,
                    itemStyle: {
                        color:
                            item < yjNum
                                ? '#f00'
                                : new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                      {
                                          offset: 0,
                                          color: 'rgba(20,105,184,0.89)',
                                      },
                                      {
                                          offset: 0.25,
                                          color: 'rgba(37,205,238,0.89)',
                                      },
                                      {
                                          offset: 0.5,
                                          color: 'rgba(34,102,215,0.89)',
                                      },
                                      {
                                          offset: 0.75,
                                          color: 'rgba(65,189,241,0.89)',
                                      },
                                      {
                                          offset: 1,
                                          color: 'rgba(25,116,221,0.89)',
                                      },
                                  ]),
                        opacity: 0.8,
                    },
                };
            }),
        },
        {
            name: '柱状背景',
            type: 'bar',
            //silent: true,
            barWidth: '40',
            barGap: '-100%', // Make series be overlap
            barCateGoryGap: '10%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        {
                            offset: 0,
                            color: 'rgba(20,105,184,0.89)',
                        },
                        {
                            offset: 0.5,
                            color: 'transparent',
                        },

                        {
                            offset: 1,
                            color: 'rgba(25,116,221,0.89)',
                        },
                    ]),
                    opacity: 0.8,
                },
            },
            data: yMaxData.map((item, i) => {
                return {
                    value: item,
                    itemStyle: {
                        color:
                            yData[i] < yjNum
                                ? new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                      {
                                          offset: 0,
                                          color: '#f00',
                                      },
                                      {
                                          offset: 0.5,
                                          color: 'transparent',
                                      },

                                      {
                                          offset: 1,
                                          color: '#f00',
                                      },
                                  ])
                                : new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                      {
                                          offset: 0,
                                          color: 'rgba(20,105,184,0.89)',
                                      },
                                      {
                                          offset: 0.5,
                                          color: 'transparent',
                                      },

                                      {
                                          offset: 1,
                                          color: 'rgba(25,116,221,0.89)',
                                      },
                                  ]),
                        opacity: 0.8,
                    },
                };
            }),
        },
        {
            name: '柱状背景顶',
            type: 'pictorialBar',
            symbolSize: [40, 10],
            symbolOffset: [0, -6],
            symbolPosition: 'end',
            z: 12,
            label: {
                show: false,
            },
            data: yMaxData.map((item, i) => {
                return {
                    value: item,
                    itemStyle: {
                        color:
                            yData[i] < yjNum
                                ? {
                                      type: 'radial',
                                      x: 0.5,
                                      y: 0.5,
                                      r: 0.5,
                                      colorStops: [
                                          {
                                              offset: 0,
                                              color: 'transparent',
                                          },

                                          {
                                              offset: 1,
                                              color: '#f00',
                                          },
                                      ],
                                      global: false, // 缺省为 false
                                  }
                                : {
                                      type: 'radial',
                                      x: 0.5,
                                      y: 0.5,
                                      r: 0.5,
                                      colorStops: [
                                          {
                                              offset: 0,
                                              color: 'transparent',
                                          },

                                          {
                                              offset: 1,
                                              color: 'rgba(25,116,221,1)',
                                          },
                                      ],
                                      global: false, // 缺省为 false
                                  },
                    },
                };
            }),
        },
        {
            name: '柱状背景顶小',
            type: 'pictorialBar',
            symbolSize: [20, 5],
            symbolOffset: [0, -4],
            symbolPosition: 'end',
            z: 12,
            label: {
                show: false,
            },
            data: yMaxData.map((item, i) => {
                return {
                    value: item,
                    itemStyle: {
                        color:
                            yData[i] < yjNum
                                ? {
                                      type: 'radial',
                                      x: 0.5,
                                      y: 0.5,
                                      r: 0.5,
                                      colorStops: [
                                          {
                                              offset: 0,
                                              color: 'transparent',
                                          },

                                          {
                                              offset: 1,
                                              color: 'rgba(255,0,0,.5)',
                                          },
                                      ],
                                      global: false, // 缺省为 false
                                  }
                                : {
                                      type: 'radial',
                                      x: 0.5,
                                      y: 0.5,
                                      r: 0.5,
                                      colorStops: [
                                          {
                                              offset: 0,
                                              color: 'transparent',
                                          },

                                          {
                                              offset: 1,
                                              color: 'rgba(25,116,221,1)',
                                          },
                                      ],
                                      global: false, // 缺省为 false
                                  },
                    },
                };
            }),
        },
    ],
};
