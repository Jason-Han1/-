option = {
        title: {
            left: 'center',
            text: '数据趋势走向图',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            animation: false
          }
        },
        legend: {
          data: [],
          x: 'left'
        },
        axisPointer: {
          link: {
            xAxisIndex: 'all'
          }
        },
        dataZoom: {
          show: true,
          realtime: true,
          start: 40,
          end: 60,
          xAxisIndex: [0, 1]
        },
        grid: [{
          left: 40,
          right: 40
        }, {
          left: 40,
          right: 40
        }],
        xAxis: [{
          type: 'category',
          boundaryGap: true,
          axisLine: {
            onZero: true
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#fcc',
              width: 1
            }
          },
          data: ['2017-01-01', '2017-01-02', '2017-01-03', '2017-01-04', '2017-01-05', '2017-01-06', '2017-01-07', '2017-01-08', '2017-01-09', '2017-01-10', '2017-01-11', '2017-01-12', '2017-01-13', '2017-01-14', '2017-01-15', '2017-01-16', '2017-01-17', '2017-01-18', '2017-01-19', '2017-01-20', '2017-01-21', '2017-01-22', '2017-01-23', '2017-01-24']
        }, {
          gridIndex: 1
        }],
        yAxis: [{
          type: 'value',
          max: 70,
          name: '分数',
          min: 40,
          interval: 3,
          splitLine: {
            show: true,
            lineStyle: {
              color: '#fcc',
              width: 2
            }
          }
        }, {
          gridIndex: 1
        }],
        series: [{
          name: '物理',
          type: 'line',
          smooth: true,
          itemStyle: {
              normal: {
                color: '#2dbeff'
              }
            },
          markArea: {
            data: [
              [{
                yAxis: 64,
                itemStyle: {
                  normal: {
                    color: 'rgba(183,234,209,0.7)'
                  }
                }
              }, {
                yAxis: 70
              }],
              [{
                yAxis: 64,
                itemStyle: {
                  normal: {
                    color: 'rgba(175,214,254,0.7)'
                  }
                }
              }, {
                yAxis: 55
              }],
              [{
                yAxis: 55,
                itemStyle: {
                  normal: {
                    color: 'rgba(183,226,234,0.7)'
                  }
                }
              }, {
                yAxis: 46
              }],
              [{
                yAxis: 46,
                itemStyle: {
                  normal: {
                    color: 'rgba(244,228,199,0.7)'
                  }
                }
              }, {
                yAxis: 40
              }],
              [{
                // name: 'E',
                yAxis: 40,
                itemStyle: {
                  normal: {
                    color: 'rgba(254,231,219,0.7)'
                  }
                }
              }, {
                yAxis: 0
              }]
            ]
          },
          data: [67, 64, 61, 58, 64, 55, 52, 64, 67, 64, 61, 58, 64, 55, 52, 64, 67, 64, 61, 58, 64, 55, 52, 64]
        }, {
          name: '化学',
          type: 'line',
          smooth: true,
          itemStyle: {
              normal: {
                color: '#ff62a3'
              }
            },
          data: [ 58, 64, 55, 52, 64, 67, 64, 61, 58, 64, 55, 52, 64, 67, 64, 61, 58, 64, 55, 52, 64, 67, 64, 61]
        }, {
          name: '生物',
          type: 'line',
          smooth: true,
          itemStyle: {
              normal: {
                color: '#23ca55'
              }
            },
          data: [ 55, 52, 64, 67, 64, 61, 58, 64, 55, 52, 64, 67, 64, 61, 58, 64, 55, 52, 64, 67, 64, 61, 58, 64]
        }, {
          name: '历史',
          type: 'line',
          smooth: true,
          itemStyle: {
              normal: {
                color: '#f94427'
              }
            },
          data: [ 67, 64, 52, 64, 61, 58, 55, 52, 67, 64, 52, 64, 61, 58, 55, 52, 67, 64, 52, 64, 61, 58, 55, 52]
        }, {
          name: '地理',
          type: 'line',
          smooth: true,
          itemStyle: {
              normal: {
                color: '#da9b29'
              }
            },
          data: [ 52, 64, 61, 58, 55, 52, 67, 64, 52, 64, 61, 58, 55, 52, 67, 64, 52, 64, 61, 58, 55, 52, 67, 64]
        }, {
          name: '政治',
          type: 'line',
          smooth: true,
          itemStyle: {
              normal: {
                color: '#847ecc'
              }
            },
          data: [ 64, 61, 58, 55, 52, 67, 64, 52, 64, 61, 58, 55, 52, 67, 64, 52, 64, 61, 58, 55, 52, 67, 64, 52]
        }]
      };