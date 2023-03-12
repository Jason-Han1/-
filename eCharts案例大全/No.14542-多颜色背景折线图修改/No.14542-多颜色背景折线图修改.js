  var timeData = ['0-1', '1-2',
      '2-3', '3-4',
      '4-5', '5-6',
      '6-7', '7-8',
      '8-9', '9-10',
      '10-11', '11-12',
      '12-13', '13-14',
      '14-15', '15-16',
      '16-17', '17-18',
      '18-19', '19-20',
      '20-21', '21-22',
      '22-23', '23-24'

  ];

  option = {
      title: {
          text: '时段分布',
          x: 'left',
      },
      tooltip: {
          trigger: 'axis',

          axisPointer: {
              animation: false
          }
      },
      legend: {
          data: ['次数'],
          x: 'left'
      },
      toolbox: {
          feature: {
              dataZoom: {
                  yAxisIndex: 'none'
              },
              restore: {},
              saveAsImage: {}
          }
      },
      axisPointer: {
          link: {
              xAxisIndex: 'all'
          }
      },

      grid: [{
          left: 48,
          right: 40,
      }, {
          left: 48,
          right: 40,
      }],
      xAxis: [{


          type: 'category',
          boundaryGap: false,
          axisLine: {
              onZero: true
          },
          data: timeData
      }, {
          gridIndex: 1
      }],

      yAxis: [{

          type: 'value',
          max: 3300,
          name: '次数:',
          min: 0,
          interval: 150,


      }, {
          gridIndex: 1
      }],
      series: [{

          name: '数值',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 9,
          showSymbol: false,
          lineStyle: {
              normal: {
                  color: 'rgb(253, 3, 62)',
                  width: 3,
                  shadowColor: 'rgba(0,0,0,0.4)',
                  shadowBlur: 10,
                  shadowOffsetX: 4,
                  shadowOffsetY: 10

              }
          },
          markPoint: {
              data: [{
                  type: 'max',
                  name: '最大值'

              }]
          },
          markArea: {
              silent: true,
              label: {
                  normal: {
                      position: ['10%', '50%']
                  }
              },



              data: [
                  [{
                      name: '',
                      yAxis: 3300,
                      itemStyle: {
                          normal: {
                              color: 'rgba(0,153,153,0.27)'
                          }
                      },
                  }, {
                      yAxis: 2500
                  }],
                  [{
                      name: '',
                      yAxis: 2500,
                      itemStyle: {
                          normal: {
                              color: 'rgba(153,204,51,0.2)'
                          }
                      },
                  }, {
                      yAxis: 1500,
                  }],
                  [{
                      name: '',
                      yAxis: 1500,
                      itemStyle: {
                          normal: {
                              color: 'rgba(250,250,51,0.2)'
                          }
                      }
                  }, {
                      yAxis: 0,
                  }]
              ]
          },
          data: [
              90,
              34,
              29,
              12,
              42,
              196,
              717,
              2017,
              2311,
              3012,
              2415,
              2043,
              1728,
              1944,
              2069,
              2776,
              2719,
              3206,
              2855,
              2167,
              1583,
              1268,
              594,
              274,
          ]

      }, {
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 9,
          showSymbol: false,
          lineStyle: {
              normal: {
                  width: 3,
                  color: 'rgb(32, 15, 253)',
                  shadowColor: 'rgba(0,0,0,0.4)',
                  shadowBlur: 10,
                  shadowOffsetX: 4,
                  shadowOffsetY: 10

              }
          },

          markPoint: {
              data: [{
                  type: 'max',
                  name: '最大值'




              }]

          },
          data: [75,
              24,
              4,
              6,
              47,
              239,
              934,
              1597,
              2181,
              2238,
              1927,
              1741,
              1366,
              1311,
              1381,
              1667,
              2362,
              2503,
              2247,
              1125,
              944,
              613,
              393,
              176,
          ]

      }, {
          type: 'line',
          symbol: 'circle',
          symbolSize: 10,
          smooth: true,
          showSymbol: false,
          lineStyle: {
              normal: {
                  width: 3,
                  color: 'rgb(8,226,193)',
                  shadowColor: 'rgba(0,0,0,0.4)',
                  shadowBlur: 10,
                  shadowOffsetX: 4,
                  shadowOffsetY: 10
              }
          },

          markPoint: {
              data: [{
                  type: 'max',
                  name: '最大值'

              }]
          },
          data: ['',
              '',
              '',
              '',
              '',
              '',
              385,
              1108,
              1429,
              1420,
              1322,
              1114,
              913,
              964,
              1083,
              1255,
              1342,
              1519,
              1189,
              760,
              635,
              275,
              '',
              '',
          ]
      }, {
          type: 'line',
          symbol: 'circle',
          symbolSize: 10,
          smooth: true,
          showSymbol: false,
          lineStyle: {
              normal: {
                  width: 3,
                                    color: 'rgb(242,176,16)',
                  shadowColor: 'rgba(0,0,0,0.4)',
                  shadowBlur: 10,
                  shadowOffsetX: 4,
                  shadowOffsetY: 10
              }
          },

          markPoint: {
              data: [{
                  type: 'max',
                  name: '最大值'
              }]
          },
          data: [66,
              33,
              20,
              8,
              4,
              92,
              268,
              800,
              1134,
              1302,
              1456,
              1563,
              1742,
              1758,
              1727,
              1736,
              1963,
              2047,
              1977,
              1398,
              912,
              675,
              323,
              142,
          ]

      }]
  };