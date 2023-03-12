let yAxisData = ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]
    let data1 = [10,20,30,10,20,30,10,20,30,10,20,30,10,20,30,]
    let data2 = [10,30,20,10,20,30,10,20,30,10,20,30,10,20,30,]
    let data3 = 20 //平均线
   option = {
      tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      backgroundColor: 'rgb(20,28,52)',
      legend: {
        show: false
      },
      grid: [{
        show: false,
        left: '10%',
        top: '0%',
        width: '30%',
        containLabel: true,
        bottom: 10
      }, {
        show: false,
        left: '6%',
        top: 1,
        bottom: 23,
        width: '0%',
      }, {
        show: false,
        left: '40%',
        top: '0%',
        bottom: 10,
        containLabel: true,
        width: '50%',
      }],
      xAxis: [{
        type: 'value',
        name: "",
        inverse: true,
        
        
        axisLabel: {
          show: true,
          color: '#979797',
          margin: 0
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        }
      }, {
        gridIndex: 1,
        name: "",
        show: true,
        axisLabel: {
          color: '#979797',
          margin: 0
        },
        splitLine: {
          lineStyle: {
            color: '#979797',
            type: 'dashed'
          }
        }
      }, {
        gridIndex: 2,
        type: 'value',
        name: "",
        axisLabel: {
          show: true,
          color: '#979797',
          margin: 0
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        }
      }],
      yAxis: [{
          type: 'category',
          inverse: false,
          position: 'right',
          axisLabel: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#979797'
            }
          },
          axisTick: {
            show: false
          },
          data: yAxisData
        },
        {
          type: 'category',
          inverse: false,
          gridIndex: 1,
          position: 'left',
          axisLabel: {
            align: 'left',
            // padding: [8, 0, 0, 0],
            fontSize: 12,
            fontWeight: 500,
            color: `#979797`
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: '#979797'
            }
          },
          axisTick: {
            show: false
          },
          data: yAxisData
        },
        {
          type: 'category',
          inverse: false,
          gridIndex: 2,
          position: 'left',
          axisLabel: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#979797'
            }
          },
          axisTick: {
            show: false
          },
          data: yAxisData
        }
      ],
      series: [{
          type: 'bar',
          barWidth: 10,
          name: '增长得分',
          label: {
            normal: {
              show: false,
            },
          },
          itemStyle: {
            normal: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [{
                    offset: 0,
                    color: "rgba(255, 149, 0, 1)"
                  },
                  {
                    offset: 1,
                    color: "rgba(255, 149, 0, 1)"
                  }
                ],
                globalCoord: false
              }
            }
          },
          data: data1
        },
        {
          type: 'bar',
          barWidth: 10,
          xAxisIndex: 2,
          yAxisIndex: 2,
          name: '基础得分',
          label: {
            normal: {
              show: false,
            },
          },
          itemStyle: {
            normal: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [{
                    offset: 0,
                    color: "rgba(0, 112, 107, 1)"
                  },
                  {
                    offset: 1,
                    color: "rgba(0, 112, 107, 1)"
                  }
                ],
                globalCoord: false
              }
            }
          },
          data: data2,
          markLine: {
            symbol: 'none',
            label: {
              show: true
            },
            data: [{
                y: 820,
                silent: false,
                lineStyle: {
                  type: "dashed",
                  color: "#FA3934",

                },
                xAxis: data3
              }

            ]
          }
        }
      ]
    };
