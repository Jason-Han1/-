option = {
  tooltip: {
      trigger: 'axis',
      // axisPointer: {
      //     type: 'shadow'
      // }
  },
  grid: {
      top: '12%',
      right: '5%',
      left: '12%',
      bottom: '12%'
  },
  xAxis: [{
      type: 'category',
      data: ['武汉', '北京', '上海', '深圳'],
      axisLine: {
        lineStyle: {
          color: '#DCE2E8'
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        interval: 0,
        textStyle: {
          color: 'rgba(51, 51, 51, 1)'
        },
        // 默认x轴字体大小
        fontSize: 12,
      },
      boundaryGap: true
  }],
  yAxis: [{
      name: '',
      axisTick: {
          show: false
      },
      axisLine: {
          show: false,
      },
      axisLabel: {
          textStyle: {
            color: 'rgba(51, 51, 51, 0.58)'
          },
          formatter: '{value}'
      },
      splitLine: {
          show: true,
          lineStyle: {
              color: 'rgba(0, 0, 0, 0.15)'
          }
      }
  }, {
      type: 'value',
      position: 'right',
      name: '',
      axisTick: {
          show: false
      },
      axisLine: {
          show: false,
      },
      axisLabel: {
          textStyle: {
            color: 'rgba(51, 51, 51, 0.58)'
          },
          formatter: '{value}'
      },
      splitLine: {
          show: false
      }
  }],
  series: [{
          name: '',
          type: 'line',
          data: [590, 610, 288, 462],
          symbolSize: 1,
          symbol: 'circle',
          smooth: true,
          yAxisIndex: 0,
          showSymbol: false,
					itemStyle: {
						normal: {
							lineStyle: {
								width: 3,
								color:  new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                      offset: 0,
                                      color: 'rgba(255, 203, 88, 1)'
                                  },
                                  {
                                      offset: 1,
                                      color: 'rgba(255, 56, 90, 1)'
                                  }
                              ])
							},
							areaStyle: {
								opacity:0.6,//透明度
								color: new echarts.graphic.LinearGradient(0,0,0,1, [{
                                      offset: 0,
                                      color: 'rgba(255, 203, 88, 1)'
                                  },
                                  {
                                      offset: 1,
                                      color: 'rgba(158,135,255,0)'
                                  }
                              ])
							}
						}
					}
      }, {
      type: 'bar',
      yAxisIndex: 1,
      data: [100, 500, 248, 362],
      barMaxWidth: '22px', // 柱子的醉倒宽度
      itemStyle: {
          normal: {
              color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: 'rgba(255, 56, 90, 1)'
                },
                {
                    offset: 1,
                    color: 'rgba(255, 203, 88, 1)'
                }
            ])
          }
      },
      label: {
        normal: {
            show: true,
            lineHeight: 30,
            formatter: '{c}',
            position: 'top',
            textStyle: {
                color: 'rgba(51, 51, 51, 1)',
                fontSize: 12,
                fontWeight: 700,
                fontFamily: 'DINAlternate-Bold, DINAlternate'
            }
        }
    }
  }]
}