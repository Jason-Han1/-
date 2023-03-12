
option = {
    backgroundColor: "#000E1A",
    tooltip: {
        //自定义
        trigger: "axis",
        axisPointer: {
            type: "shadow",
            textStyle: {
                color: "#fff"
            }
        },
    },
    grid: {
        borderWidth: 0,
        top: 140,
        bottom: 95,
        textStyle: {
            color: "#fff"
        }
    },
    legend: {
        x: '46%',
        top: '11%',
        textStyle: {
            color: '#90979c',
        },
        data: ['A', 'B']
    },
    xAxis: [{
        type: "category",
        axisLine: {
            lineStyle: {
                color: "rgba(204,187,225,0.5)",
            }
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    }],
    yAxis: [{
        type: "value",
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: "rgba(204,187,225,0.5)",
            }
        },
    }],
    series: [
        {
            name: "A",
            type: "effectScatter",
            symbolSize: [5, 5],
            rippleEffect: {
                period: 8,
                scale: 5,
                brushType: 'fill'
            },
            itemStyle: {
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: '#00BCE2'
                }, {
                    offset: 1,
                    color: '#00BCE2'
                }])
            },
            markPoint: {
                label: {
                    normal: {
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                data: [{
                    type: 'max',
                    name: '最大值',

                }, {
                    type: 'min',
                    name: '最小值'
                }]
            },
            data: [
                5, 7, 5, 6, 12, 3, 4
                
            ],
        },
        {
            name: "B",
            type: "effectScatter",
            symbolSize: [5, 5],
            rippleEffect: {
                period: 1,
                scale: 5,
                brushType: 'fill'
            },
            itemStyle: {
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: '#FF8E89'
                }, {
                    offset: 1,
                    color: '#FF8E89'
                }])
            },
            markPoint: {
                label: {
                    normal: {
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                data: [{
                    type: 'max',
                    name: '最大值',

                }, {
                    type: 'min',
                    name: '最小值'
                }]
            },
            data: [
                
                3, 4, 3, 4, 9, 8, 3
            ]
        },
        {
            name: "A",
            type: "line",
            symbolSize: [0, 0],
            itemStyle: {
                color: '#00BCE2'
            },
            data: [
               5, 7, 5, 6, 12, 3, 4
            ],
        },
        {
            name: "B",
            type: "line",
            symbolSize: [0, 0],
            itemStyle: {
                color: '#FF8E89'
            },
            data: [
                3, 4, 3, 4, 9, 8, 3
            ]
        },
    ]
}

      setInterval(() => {
        myChart.setOption({
          legend: {
            selected: {
            //   B: false,
              A: false
            
            },
          },
        });
        myChart.setOption({
          legend: {
            selected: {
            //   B: true,
              A: true
            },
          },
        });
      }, 10000);
      
      
            setInterval(() => {
        myChart.setOption({
          legend: {
            selected: {
              B: false,
            //   A: false
            
            },
          },
        });
        myChart.setOption({
          legend: {
            selected: {
              B: true,
            //   A: true
            },
          },
        });
      }, 15000);