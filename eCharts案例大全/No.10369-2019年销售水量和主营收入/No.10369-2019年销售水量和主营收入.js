  option = {
      title: {
          text: '2019年销售水量和主营收入', // '标题',
          subtext: '截止：2019年08月15日，销售水量完成：102080276，单位：m3', // '副标题',
      },
      tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'shadow'
          }
      },
      legend: {
          type: 'scroll',
          orient: 'horizontal',
          x: 'center', //'center',
          y: 'bottom', // 'bottom',
          data: // ['图标数据']
              [{
                      name: '当年完成水量'
                  },
                  {
                      name: '去年同期水量'
                  },
                  {
                      name: '滚动目标值水量'
                  },
                  {
                      name: '全年目标值水量'
                  },
                  {
                      name: '当年完成金额'
                  },
                  {
                      name: '去年同期金额'
                  },
                  {
                      name: '滚动目标金额'
                  },
                  {
                      name: '全年目标值金额'
                  },
              ]
      },
      toolbox: {
          show: true,
          feature: {
              dataZoom: {
                  yAxisIndex: 'none'
              },
              magicType: {
                  type: ['line', 'bar']
              },
              restore: {},
              saveAsImage: {}
          }
      },
      tooltip: {
          trigger: 'item',
          formatter: function(params) {
              if (params.seriesName.indexOf('金额') > -1) {
                  return Number(params.data).toFixed(2).toString() + " 元"
              } else {
                  return params.data + " m3"
              }
          }
      },
      xAxis: {
          type: 'category', // 'category',
          boundaryGap: true, // false,
          data: [
              ''
          ]
      },
      yAxis: [{
          type: 'value',
          name: '',
          axisLabel: {
              formatter: function(value, index) {
                  return (value / 100000000) + "亿"
              }
          },
          splitLine: {
              lineStyle: {
                  type: 'solid'
              }
          }
      }, {
          type: 'value',
          name: '',
          axisLabel: {
              formatter: function(value, index) {
                  return (value / 100000000) + "亿"
              }
          },
          splitLine: {
              lineStyle: {
                  type: 'dotted'
              }
          }
      }],
      series: [{
          type: 'bar',
          name: '当年完成水量',
          stack: '',
          yAxisIndex: 0,
          label: {
              normal: {
                  show: true,
                  position: 'insideBottom',
                  distance: 0,
                  align: 'left',
                  verticalAlign: 'middle',
                  rotate: 90,
                  formatter: '{name|{a}}',
                  fontSize: 16,
                  rich: {
                      name: {
                          textBorderColor: '#fff'
                      }
                  }
              }
          },
          data: [102080276],
      }, {
          type: 'bar',
          name: '去年同期水量',
          stack: '',
          yAxisIndex: 0,
          label: {
              normal: {
                  show: true,
                  position: 'insideBottom',
                  distance: 0,
                  align: 'left',
                  verticalAlign: 'middle',
                  rotate: 90,
                  formatter: '{name|{a}}',
                  fontSize: 16,
                  rich: {
                      name: {
                          textBorderColor: '#fff'
                      }
                  }
              }
          },
          data: [95029707],
      }, {
          type: 'bar',
          name: '滚动目标值水量',
          stack: '',
          yAxisIndex: 0,
          label: {
              normal: {
                  show: true,
                  position: 'insideBottom',
                  distance: 0,
                  align: 'left',
                  verticalAlign: 'middle',
                  rotate: 90,
                  formatter: '{name|{a}}',
                  fontSize: 16,
                  rich: {
                      name: {
                          textBorderColor: '#fff'
                      }
                  }
              }
          },
          data: [101440286],
      }, {
          type: 'bar',
          name: '全年目标值水量',
          stack: '',
          yAxisIndex: 0,
          label: {
              normal: {
                  show: true,
                  position: 'insideBottom',
                  distance: 0,
                  align: 'left',
                  verticalAlign: 'middle',
                  rotate: 90,
                  formatter: '{name|{a}}',
                  fontSize: 16,
                  rich: {
                      name: {
                          textBorderColor: '#fff'
                      }
                  }
              }
          },
          data: [155000000],
      }, {
          type: 'bar',
          name: '占位',
          stack: '',
          yAxisIndex: 0,
          label: {
              normal: {
                  show: true,
                  position: 'insideBottom',
                  distance: 0,
                  align: 'left',
                  verticalAlign: 'middle',
                  rotate: 90,
                  formatter: '{name|{a}}',
                  fontSize: 16,
                  rich: {
                      name: {
                          textBorderColor: '#fff'
                      }
                  }
              }
          },
          data: [],
      }, {
          type: 'bar',
          name: '当年完成金额',
          stack: '',
          yAxisIndex: 1,
          label: {
              normal: {
                  show: true,
                  position: 'insideBottom',
                  distance: 0,
                  align: 'left',
                  verticalAlign: 'middle',
                  rotate: 90,
                  formatter: '{name|{a}}',
                  fontSize: 16,
                  rich: {
                      name: {
                          textBorderColor: '#fff'
                      }
                  }
              }
          },
          data: [332578418.41893179],
      }, {
          type: 'bar',
          name: '去年同期金额',
          stack: '',
          yAxisIndex: 1,
          label: {
              normal: {
                  show: true,
                  position: 'insideBottom',
                  distance: 0,
                  align: 'left',
                  verticalAlign: 'middle',
                  rotate: 90,
                  formatter: '{name|{a}}',
                  fontSize: 16,
                  rich: {
                      name: {
                          textBorderColor: '#fff'
                      }
                  }
              }
          },
          data: [309677471.08592190],
      }, {
          type: 'bar',
          name: '滚动目标金额',
          stack: '',
          yAxisIndex: 1,
          label: {
              normal: {
                  show: true,
                  position: 'insideBottom',
                  distance: 0,
                  align: 'left',
                  verticalAlign: 'middle',
                  rotate: 90,
                  formatter: '{name|{a}}',
                  fontSize: 16,
                  rich: {
                      name: {
                          textBorderColor: '#fff'
                      }
                  }
              }
          },
          data: [329680929.5000],
      }, {
          type: 'bar',
          name: '全年目标值金额',
          stack: '',
          yAxisIndex: 1,
          label: {
              normal: {
                  show: true,
                  position: 'insideBottom',
                  distance: 0,
                  align: 'left',
                  verticalAlign: 'middle',
                  rotate: 90,
                  formatter: '{name|{a}}',
                  fontSize: 16,
                  rich: {
                      name: {
                          textBorderColor: '#fff'
                      }
                  }
              }
          },
          data: [503750000.0000],
      }, {
          type: 'bar',
          name: '占位',
          stack: '',
          yAxisIndex: 0,
          label: {
              normal: {
                  show: true,
                  position: 'insideBottom',
                  distance: 0,
                  align: 'left',
                  verticalAlign: 'middle',
                  rotate: 90,
                  formatter: '{name|{a}}',
                  fontSize: 16,
                  rich: {
                      name: {
                          textBorderColor: '#fff'
                      }
                  }
              }
          },
          data: [],
      }]
  };