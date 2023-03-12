
const dataList = [60.68,59.54,68.14]
option = {
        backgroundColor: 'rgb(255, 255, 255)',
        color: ['#1A64F8'],
        tooltip: {
          show:false
        },
        grid: {
          left: '8%',
          right: '2%',
          top: '10%',
          bottom: '20%'
        },
        xAxis: [
          {
            type: 'category',
            data: ['当天','月度','年度'],
            axisTick: {
              alignWithLabel: true
            },
            axisLabel: {
              color: '#606266',
              interval: 0,
              margin: 20,
              align: 'center'
            }
          }
        ],
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#606266'
          }
        },
        series: [
          {
            name: '',
            type: 'pictorialBar',
            symbolSize: [30, 10],
            symbolOffset: [0, -5],
            symbolPosition: 'end',
            z: 12,
            label: {
              normal: {
                show: true,
                position: 'top',
                color: '#000',
                fontWeight: 'bold'
                // "formatter": "{c}%"
              }
            },
            itemStyle: {
              normal: {
                    color: (params) => {
    					let colors = [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(254, 174, 162, 1)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(253, 114, 112, 1)',
                        },
                    ]),new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(123, 200, 255, 1)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(53, 157, 245, 1)',
                        },
                    ]),new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(251, 169, 128, 1)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(247, 203, 107, 1)',
                        },
                    ])]
    					return colors[params.dataIndex]
    				},
                    barBorderRadius: [30, 30, 0, 0] //圆角大小
                },
            },
            data: dataList
          },
          {
            type: 'pictorialBar',
            symbolSize: [30, 10],
            symbolOffset: [0, 5],
            z: 12,
            itemStyle: {
              normal: {
                    color: (params) => {
    					let colors = [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(254, 174, 162, 1)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(253, 114, 112, 1)',
                        },
                    ]),new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(123, 200, 255, 1)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(53, 157, 245, 1)',
                        },
                    ]),new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(251, 169, 128, 1)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(247, 203, 107, 1)',
                        },
                    ])]
    					return colors[params.dataIndex]
    				},
                },
            },
            data: dataList
          },
          {
            type: 'bar',
            showBackground: false,
            backgroundStyle: {
              color: 'rgba(216, 229, 247, 0.55)',
              borderRadius: [6, 6, 0, 0]
            },
            itemStyle: {
              normal: {
                    color: (params) => {
    					let colors = [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(254, 174, 162, 1)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(253, 114, 112, 1)',
                        },
                    ]),new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(123, 200, 255, 1)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(53, 157, 245, 1)',
                        },
                    ]),new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(251, 169, 128, 1)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(247, 203, 107, 1)',
                        },
                    ])]
    					return colors[params.dataIndex]
    				},
                },
            },
            barWidth: '30',
            data: dataList
          }
        ]
      }
      myChart.setOption(option)
      // this.$resize(myChart)