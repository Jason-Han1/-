  var timeData = [
      '0:00', '0:30',
      '1:00', '1:30',
      '2:00', '2:30',
      '3:00', '3:30',
      '4:00', '4:30',
      '5:00', '5:30',
      '6:00', '6:30',
      '7:00', '7:30',
      '8:00', '8:30',
      '9:00', '9:30',
      '10:00', '10:30',
      '11:00', '11:30',
      '12:00', '12:30',
      '13:00', '13:30',
      '14:00', '14:30',
      '15:00', '15:30',
      '16:00', '16:30',
      '17:00', '17:30',
      '18:00', '18:30',
      '19:00', '19:30',
      '20:00', '20:30',
      '21:00', '21:30',
      '22:00', '22:30',
      '23:00', '23:30'
  ];

  option = {
      title: {
          text: '多个背景颜色图',
          x: 'left',
      },
      tooltip: {
          trigger: 'axis',

          axisPointer: {
              animation: false
          }
      },
      legend: {
         data:['舒张压','收缩压']
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
      dataZoom: [{
          show: true,
          realtime: true,
          start: 30,
          end: 70,

          xAxisIndex: [0, 1]
      }, {
          type: 'inside',
          realtime: true,
          start: 30,
          end: 70,
          xAxisIndex: [0, 1]
      }],
      grid: [{
          left: 40,
          right: 40,
      }, {
          left: 40,
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
          max: 260,
          name: '单位 : mmHg',
          min: 0,
          interval: 25,


      }, {
          gridIndex: 1
      }],
      series: [{
          name: '舒张压',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 9,
          showSymbol: false,
          lineStyle: {
              normal: {
                  width: 1
              }
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
                      yAxis: 52,
                      itemStyle: {
                          normal: {
                              color: 'rgba(0,153,153,0.27)'
                          }
                      },
                  }, {
                      yAxis: 104
                  }],
                  [{
                      name: '',
                      yAxis: 156,
                      itemStyle: {
                          normal: {
                              color: 'rgba(153,204,51,0.2)'
                          }
                      },
                  }, {
                      yAxis: 208,
                  }]
              ]
          },
          data: [ 70,70,72,75,76,78,71,79, 70,70,72,75,76,78,71,79, 70,70,72,75,76,78,71,79]
      },
      {
          name: '收缩压',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 9,
          showSymbol: false,
          data: [ 160,170,172,175,176,178,171,179, 170,170,172,175,176,175,176,178,171,179, 170,170,172,175,176]
          
      }
      ]
  };  var timeData = [
      '0:00', '0:30',
      '1:00', '1:30',
      '2:00', '2:30',
      '3:00', '3:30',
      '4:00', '4:30',
      '5:00', '5:30',
      '6:00', '6:30',
      '7:00', '7:30',
      '8:00', '8:30',
      '9:00', '9:30',
      '10:00', '10:30',
      '11:00', '11:30',
      '12:00', '12:30',
      '13:00', '13:30',
      '14:00', '14:30',
      '15:00', '15:30',
      '16:00', '16:30',
      '17:00', '17:30',
      '18:00', '18:30',
      '19:00', '19:30',
      '20:00', '20:30',
      '21:00', '21:30',
      '22:00', '22:30',
      '23:00', '23:30'
  ];

  option = {
      title: {
          text: '多个背景颜色图',
          x: 'left',
      },
      tooltip: {
          trigger: 'axis',

          axisPointer: {
              animation: false
          }
      },
      legend: {
         data:['舒张压','收缩压']
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
      dataZoom: [{
          show: true,
          realtime: true,
          start: 30,
          end: 70,

          xAxisIndex: [0, 1]
      }, {
          type: 'inside',
          realtime: true,
          start: 30,
          end: 70,
          xAxisIndex: [0, 1]
      }],
      grid: [{
          left: 40,
          right: 40,
      }, {
          left: 40,
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
          max: 260,
          name: '单位 : mmHg',
          min: 0,
          interval: 25,


      }, {
          gridIndex: 1
      }],
      series: [{
          name: '舒张压',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 9,
          showSymbol: false,
          lineStyle: {
              normal: {
                  width: 1
              }
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
                      yAxis: 52,
                      itemStyle: {
                          normal: {
                              color: 'rgba(0,153,153,0.27)'
                          }
                      },
                  }, {
                      yAxis: 104
                  }],
                  [{
                      name: '',
                      yAxis: 156,
                      itemStyle: {
                          normal: {
                              color: 'rgba(153,204,51,0.2)'
                          }
                      },
                  }, {
                      yAxis: 208,
                  }]
              ]
          },
          data: [ 70,70,72,75,76,78,71,79, 70,70,72,75,76,78,71,79, 70,70,72,75,76,78,71,79]
      },
      {
          name: '收缩压',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 9,
          showSymbol: false,
          data: [ 160,170,172,175,176,178,171,179, 170,170,172,175,176,175,176,178,171,179, 170,170,172,175,176]
          
      }
      ]
  };