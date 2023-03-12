      var fontColor = '#95a2aa';
    var fontSize = 20;
      var option = {
          tooltip: {
              trigger: 'item',
              axisPointer: {
                  type: 'cross',
                  crossStyle: {
                      color: 'black'
                  },
                  lineStyle: {
                      color: '#666'
                  }
              }
          },
          grid: {
              top: '10%',
              bottom: '10%',
              borderWidth: 0
          },
          xAxis: [{
              type: 'category',
              //   boundaryGap: 0,
              axisLabel: {
                  show: true,
                  rotate: 0,
                  textStyle: {
                      color: '#682d19'
                  }
              },
              axisTick: {
                  show: true
              },
              splitLine: {
                  show: true,
                  lineStyle: {
                      color: fontColor
                  }
              },
              data: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00']
          }],
          yAxis: [{
	        name: '单位：℃',
	        nameTextStyle: {
                fontSize: fontSize,
                color: fontColor,
            },
            axisLine : {
	        	show: true,
	        	lineStyle: {
                    color: fontColor
                }
	        },
	        type: 'value',
	        axisLabel: {
	            formatter: '{value}',
	            color: fontColor,
	            fontSize: 14
	        },
	        splitLine: {
                show: true,
                lineStyle: {
                    color: fontColor
                }
            },
	        axisTick: {
	            show: false
	        },
	       }],
          series: [
              {
                  name: '最高温度编号',
                  type: 'bar',
                  stack: '最高温度编号',
                  label: {
                      normal: {
                          textStyle: {
                              color: '#682d19'
                          },
                          position: 'left',
                          show: false,
                          formatter: '{b}'
                      }
                  },
                  barCategoryGap: 0,
                  itemStyle: {
                      normal: {
                          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                              offset: 0,
                              color: 'transparent'
                          }, {
                              offset: 0.5,
                              color: 'transparent'
                          }, {
                              offset: 0.8,
                              color: 'rgba(0, 0, 0, 0)'
                          }, {
                              offset: 0.92,
                              color: 'rgba(0, 0, 0, 0)'
                          }, {
                              offset: 1,
                              color: 'rgba(0, 0, 0, 0)'
                          }])
                      }
                  },
                  data: [5, 5, 2, 5, 8, 5, 5, 1, 5]
              }, {
                  type: 'bar',
                  stack: '最高温度编号',
                  silent: true,
                  data: [0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0],
                  itemStyle: {
                      normal: {
                          barBorderRadius: [8,8,8,8],
                          color: '#FE8F01'
                      }
                  },
                  barMinHeight: 6
              },
              {
                name: '最高温度',
                type: 'line',
                symbol: 'circle',
                symbolSize: 0,
                smooth: true,
                itemStyle: {
                    normal: {
                        color: 'rgb(9,189,211)',
                        lineStyle: {
                            color: "rgb(9,189,211)",
                            width: 3,
                        },
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: 'rgba(9,189,211,0)'
                            }, {
                                offset: 1,
                                color: 'rgba(9,189,211,0.3)'
                            }]),
                        }
                    }
                },
                data: [2,3,4,5,6,30]
            }

          ]
      };