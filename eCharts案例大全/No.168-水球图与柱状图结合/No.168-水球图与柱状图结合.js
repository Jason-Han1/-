 var colors = ['#5470c6', '#91cc75', '#fac858', '#ee6666', "#73c0de", '#3ba272', '#fc8452', "#9a60b4", "#ea7ccc"];
    option = {
        backgroundColor:'#0C2F6F',
        grid: {
            top: '10%',
            left: '5%',
            right: '5%',
            bottom: '15%',
        },
        xAxis: [{
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#fff',
                    fontSize: 18
                }
            },
            offset: 5,
            data: ['椒江区', '黄岩区', '路桥区', '三门县', '天台县', '仙居县', '温岭市', '临海市', '玉环市']
        },
          {
              axisTick: {
                  show: false
              },
              axisLine: {
                  show: false
              },
              axisLabel: {
                  show: false,
              },
              data: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          {
              //name: '单位：件',
              axisTick: {
                  show: false
              },
              axisLine: {
                  show: false
              },
              axisLabel: {
                  show: false,
              },
              nameGap: '50',
              data: [],
          }, ],
        yAxis: {
            type: 'value',
            show: false,
            max: 100,
        },
        series: [
        {
            type: 'bar',
            xAxisIndex: 0,
            data: [23, 63, 23, 63,23, 63,23, 63,23],
            barWidth: 2,
            itemStyle: {
                normal: {
                    color: function (params) {
                        return colors[params.dataIndex];
                    }
                },
            },
            z: 2,
        },
            {
                name: '外框',
                type: 'bar',
                xAxisIndex: 2,
                barGap: '-100%',
                data: [23, 63, 23, 63,23, 63,23, 63,23],
                barWidth: 4,
                itemStyle: {
                    normal: {
                        color: function (params) {
                            return colors[params.dataIndex];
                        },
                        barBorderRadius: 50,
                    },
                },
                z: 0,
            },
            {
                name: '外圆',
                type: 'scatter',
                hoverAnimation: false,
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0],
                xAxisIndex: 2,
                symbolSize: 10,
                itemStyle: {
                    normal: {
                        color: function (params) {
                            return colors[params.dataIndex];
                        },
                        opacity: 1,
                    },
                },
                z: 0,
            },
                {
                    type: 'liquidFill',
                    radius: '25%',
                    center: ['10%', '55%'],
                    data: [0.4], // data个数代表波浪数
                    color: ['#5470c6'],
                    outline: { // 轮廓设置
                        show: true,
                        borderDistance: 8, // 边框与球中间间距
                        itemStyle: {
                            borderWidth: 5,
                            borderColor: '#5470c6',
                            shadowBlur: 10,
                            shadowColor: '#fff'
                        }
                    },
                    backgroundStyle: {
                        shadowColor: 'rgba(0, 0, 0, 0)',
                        opacity: 0,
                    },

                    label: {
                        textStyle: {
                            color: '#fff',
                            fontSize: 28
                        }
                    }
                }, {
                    type: 'liquidFill',
                    radius: '25%',
                    center: ['20%', '25%'],
                    data: [0.4], // data个数代表波浪数
                    color: ['#91cc75'],
                    outline: { // 轮廓设置
                        show: true,
                        borderDistance: 8, // 边框与球中间间距
                        itemStyle: {
                            borderWidth: 5,
                            borderColor: '#91cc75',
                            shadowBlur: 10,
                            shadowColor: '#fff'
                        }
                    },
                    backgroundStyle: {
                        shadowColor: 'rgba(0, 0, 0, 0)',
                        opacity: 0,
                    },

                    label: {
                        textStyle: {
                             color: '#fff',
                            fontSize: 28
                        }
                    }
                }, {
                    type: 'liquidFill',
                    radius: '25%',
                    center: ['30%', '55%'],
                    data: [0.4], // data个数代表波浪数
                    color: ['#fac858'],
                    outline: { // 轮廓设置
                        show: true,
                        borderDistance: 8, // 边框与球中间间距
                        itemStyle: {
                            borderWidth: 5,
                            borderColor: '#fac858',
                            shadowBlur: 10,
                            shadowColor: '#fff'
                        }
                    },
                    backgroundStyle: {
                        shadowColor: 'rgba(0, 0, 0, 0)',
                        opacity: 0,
                    },

                    label: {
                        textStyle: {
                             color: '#fff',
                            fontSize: 28
                        }
                    }
                }, {
                    type: 'liquidFill',
                    radius: '25%',
                    center: ['40%', '25%'],
                    data: [0.4], // data个数代表波浪数
                    color: ['#ee6666'],
                    outline: { // 轮廓设置
                        show: true,
                        borderDistance: 8, // 边框与球中间间距
                        itemStyle: {
                            borderWidth: 5,
                            borderColor: '#ee6666',
                            shadowBlur: 10,
                            shadowColor: '#fff'
                        }
                    },
                    backgroundStyle: {
                        shadowColor: 'rgba(0, 0, 0, 0)',
                        opacity: 0,
                    },

                    label: {
                        textStyle: {
                            color: '#fff',
                            fontSize: 28
                        }
                    }
                }, {
                    type: 'liquidFill',
                    radius: '25%',
                    center: ['50%', '55%'],
                    data: [0.4], // data个数代表波浪数
                    color: ['#73c0de'],
                    outline: { // 轮廓设置
                        show: true,
                        borderDistance: 8, // 边框与球中间间距
                        itemStyle: {
                            borderWidth: 5,
                            borderColor: '#73c0de',
                            shadowBlur: 10,
                            shadowColor: '#fff'
                        }
                    },
                    backgroundStyle: {
                        shadowColor: 'rgba(0, 0, 0, 0)',
                        opacity: 0,
                    },

                    label: {
                        textStyle: {
                            color: '#fff',
                            fontSize: 28
                        }
                    }
                }, {
                    type: 'liquidFill',
                    radius: '25%',
                    center: ['60%', '25%'],
                    data: [0.4], // data个数代表波浪数
                    color: ['#3ba272'],
                    outline: { // 轮廓设置
                        show: true,
                        borderDistance: 8, // 边框与球中间间距
                        itemStyle: {
                            borderWidth: 5,
                            borderColor: '#3ba272',
                            shadowBlur: 10,
                            shadowColor: '#fff'
                        }
                    },
                    backgroundStyle: {
                        shadowColor: 'rgba(0, 0, 0, 0)',
                        opacity: 0,
                    },

                    label: {
                        textStyle: {
                             color: '#fff',
                            fontSize: 28
                        }
                    }
                }, {
                    type: 'liquidFill',
                    radius: '25%',
                    center: ['70%', '55%'],
                    data: [0.4], // data个数代表波浪数
                    color: ['#fc8452'],
                    outline: { // 轮廓设置
                        show: true,
                        borderDistance: 8, // 边框与球中间间距
                        itemStyle: {
                            borderWidth: 5,
                            borderColor: '#fc8452',
                            shadowBlur: 10,
                            shadowColor: '#fff'
                        }
                    },
                    backgroundStyle: {
                        shadowColor: 'rgba(0, 0, 0, 0)',
                        opacity: 0,
                    },

                    label: {
                        textStyle: {
                             color: '#fff',
                            fontSize: 28
                        }
                    }
                }, {
                    type: 'liquidFill',
                    radius: '25%',
                    center: ['80%', '25%'],
                    data: [0.4], // data个数代表波浪数
                    color: ['#9a60b4'],
                    outline: { // 轮廓设置
                        show: true,
                        borderDistance: 8, // 边框与球中间间距
                        itemStyle: {
                            borderWidth: 5,
                            borderColor: '#9a60b4',
                            shadowBlur: 10,
                            shadowColor: '#fff'
                        }
                    },
                    backgroundStyle: {
                        shadowColor: 'rgba(0, 0, 0, 0)',
                        opacity: 0,
                    },

                    label: {
                        textStyle: {
                            color: '#fff',
                            fontSize: 28
                        }
                    }
                }, {
                    type: 'liquidFill',
                    radius: '25%',
                    center: ['90%', '55%'],
                    data: [0.4], // data个数代表波浪数
                    color: ['#ea7ccc'],
                    outline: { // 轮廓设置
                        show: true,
                        borderDistance: 8, // 边框与球中间间距
                        itemStyle: {
                            borderWidth: 5,
                            borderColor: '#ea7ccc',
                            shadowBlur: 10,
                            shadowColor: '#fff'
                        }
                    },
                    backgroundStyle: {
                        shadowColor: 'rgba(0, 0, 0, 0)',
                        opacity: 0,
                    },

                    label: {
                        textStyle: {
                             color: '#fff',
                            fontSize: 28
                        }
                    }
                },
        ],
    };