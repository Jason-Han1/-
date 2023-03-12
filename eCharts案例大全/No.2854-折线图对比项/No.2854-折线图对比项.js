option =  {
  tooltip: {
      trigger: 'axis',
  },
  grid: {
    top: '12%',
    bottom: '15%'
  },
  xAxis: [{
    type: 'category',
    data: ["00:00", "01:00", "02:00"],
    axisLine: {
      lineStyle: {
        color: '#DCE2E8'
      }
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      textStyle: {
        color: 'rgba(51, 51, 51, 1)'
      },
      // 默认x轴字体大小
      fontSize: 12,
    },
    boundaryGap: true
  }],
  yAxis: [{
      type: 'value',
      name: '元',
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
      name: '辆',
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
  dataZoom: [
		{
				type: 'inside',
				start: 0,
				end: 30,
		},
		{
				start: 0,
				end: 100,
				height: 18,
				bottom: '5%'
		}
  ],
  series: [{
          name: '客单数',
          type: 'line',
          data: [29, 460, 570, 100],
          symbolSize: 5,
          symbol: 'circle',
          smooth: true,
          yAxisIndex: 0,
          showSymbol: false,
					itemStyle: {
						normal: {
							lineStyle: {
								width: 3,
								color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
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
          name: '车流量',
          type: 'line',
          data: [2009, 2000, 5000, 1500],
          symbolSize: 1,
          symbol: 'circle',
          smooth: true,
          yAxisIndex: 1,
          showSymbol: false,
					itemStyle: {
						normal: {
							lineStyle: {
								width: 3,
								color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [{
                                    offset: 0,
                                    color: 'rgba(158,255,255,1)'
                                  },
                                  {
                                      offset: 1,
                                      color: 'rgba(158, 135, 255,1)'
                                  }
                              ])
							},
							areaStyle: {
								opacity:0.6,//透明度
								color: new echarts.graphic.LinearGradient(0,0,0,1, [{
                                    offset: 0,
                                    color: 'rgba(158,255,255,1)'
                                  },
                                  {
                                      offset: 1,
                                      color: 'rgba(255, 203, 88, 0)'
                                  }
                              ])
							}
						}
					}
      },
    ]

}