var Country1 = [100, 150, 'Australia'];
var Country2 = [80, 150, 'China'];
var Country3 = [60, 150, 'United States'];

var typeData = ['1,000,000', '675,000', '567,000'];
option = {
  grid: [{
    left: '65%',
    right: '2%',
    bottom: '82%',
    top: '40%',
    containLabel:false
}, {
    left: '65%',
    right: '2%',
    bottom: '69%',
    top: '75%',containLabel:false
}, {
    left: '65%',
    right: '2%',
    bottom: '50%',
    top: '100%',containLabel:false
}],
xAxis: [{
    type: 'value',
    show: false,
    gridIndex: 0
}, {
    type: 'value',
    show: false,
    gridIndex: 1
}, {
    type: 'value',
    show: false,
    gridIndex: 2
}],
yAxis: [{
    type: 'category',
    show: false,
    position: "left",
    gridIndex: 0,
    data: [Country1[2]]
}, {
    type: 'category',
    show: false,
    position: "left",
    gridIndex: 0,
    data: [Country1[2]]
}, {
    type: 'category',
    show: false,
    position: "left",
    gridIndex: 1,
    data: [Country2[2]]
}, {
    type: 'category',
    show: false,
    position: "left",
    gridIndex: 1,
    data: [Country2[2]]
}, {
    type: 'category',
    show: false,
    position: "left",
    gridIndex: 2,
    data: [Country3[2]]
}, {
    type: 'category',
    show: false,
    position: "left",
    gridIndex: 2,
    data: [Country3[2]]
}],
graphic: [{
        type: 'text',
        z: 100,
        top: '31%',
        left: '65%',
        style: {
            fill: '#8A8A8A',
            text: "Session",
           font: '1em "Roboto", sans-serif',
        }
    }, {
        type: 'text',
        z: 100,
        top: '18%',
        left: '65%',
        style: {
            fill: '#8A8A8A',
            text: Country1[2],//Australia
            font: '1em "Roboto", sans-serif',
            
        }
    }, {
        type: 'text',
        z: 100,
        top: '21%',
        left: '65%',
        style: {
            fill: '#000',
            font: '2em "Roboto", sans-serif',
            text:  typeData[0],
            
        }
    },{
        type: 'text',
        z: 100,
        top: '55%',
        left: '65%',
        style: {
            fill: '#8A8A8A',
            text: "Session",
           font: '1em "Roboto", sans-serif',
        }
    }, {
        type: 'text',
        z: 100,
        top: '42%',
        left: '65%',
        style: {
            fill: '#8A8A8A',
            text: Country2[2],//China
             font: '1em "Roboto", sans-serif',
            
        }
    },
     {
        type: 'text',
        z: 100,
        top: '45%',
        left: '65%',
        style: {
            fill: '#000',
            text:  typeData[1],
            font: '2em "Roboto", sans-serif',
            
        }
    },{
        type: 'text',
        z: 100,
        top: '76%',
        left: '65%',
        style: {
            fill: '#8A8A8A',
            text: "Session",
            font: '1em "Roboto", sans-serif',
           
        }
    }, {
        type: 'text',
        z: 100,
        top: '65%',
        left: '65%',
        style: {
            fill: '#8A8A8A',
            text: Country3[2],//United States
             font: '1em "Roboto", sans-serif',
           
        }
    },{
        type: 'text',
        z: 100,
        top: '68%',
        left: '65%',
        style: {
            fill: '#000',
            text: typeData[2],
           font: '2em "Roboto", sans-serif',
        }
    }

],
  tooltip: {
      trigger: 'item'
  },
  visualMap: {
      show: false,
      min: 0,
      max: 150,
      calculable: true,
      inRange: {
          //color: ['#F6DB5D', '#D53E60', '#9b89de'],
      }
  },
  geo: {
      show: false,
      map: 'world',
      left: '0',
      zoom: '0.8',
      label: {
          emphasis: {
              show: false
          }
      },
      roam: true
  },
  series: [{
          name: 'World Statistic',
          type: 'map',
          mapType: 'world',
          left: '0',
          zoom: '0.8',
          roam: false,
          itemStyle: {
              normal: {
                  areaColor: '#B5CBD8',
                  borderColor: 'rgba(255,255,255,0.5)'
              },
              emphasis: {
                  areaColor: '#2B91B7',
                  label: {
                      show: false
                  }
              }
          },
          data: [{
              name: 'Australia',
              value: 0,
              itemStyle: {
                  normal: {
                      color: '#F6DB5D'
                  }
              }
          }, {
              name: 'China',
              value: 75,
              itemStyle: {
                  normal: {
                      color: '#D53E60'
                  }
              }
          }, {
              name: 'United States',
              value: 150,
              itemStyle: {
                  normal: {
                      color: '#9b89de'
                  }
              }
          }]
      }, {
          name: 'Top 5',
          type: 'effectScatter',
          coordinateSystem: 'geo',
          data: [{
                  name: 'Australia',
                  value: [
                      135, -27, 0
                  ],
                  itemStyle: {
                      normal: {
                          color: '#D53E60'
                      }

                  }
              }, {
                  name: 'China',
                  value: [
                      100, 35, 0
                  ],
                  itemStyle: {
                      normal: {
                          color: '#F6DB5D'
                      }

                  }
              }, {
                  name: 'United States of America',
                  value: [-100, 40, 0],
                  itemStyle: {
                      normal: {
                          color: '#F6DB5D'
                      }

                  }
              },

          ],
          symbolSize: function(val) {
              return 15;
          },
          showEffectOn: 'render',

          rippleEffect: {
              period: 5,
              brushType: 'fill',
              scale: 4
          },
          hoverAnimation: true,
          label: {
              normal: {
                  formatter: '{b}',
                  position: 'right',
                  show: false
              }
          },
          zlevel: 1
      },{
        name: 'C1',
        type: 'bar',
        barWidth:5,
        xAxisIndex: 0,
        yAxisIndex: 0,
        label: {
            normal: {
                show: true,
                formatter: '50%',
                color:'#8A8A8A',
                position: ['93%', '10']
            }
        },
        itemStyle: {
            normal: {
                color: '#E7E7E7'
            }
        },
        data: [100]
    }, {
        name: 'C2',
        type: 'bar',
        barWidth:5,
        xAxisIndex: 0,
        yAxisIndex: 1,
        label: {
            normal: {
                show: false,
               
            }
        },
        itemStyle: {
            normal: {
                color: '#9f8de0'
            }
        },
        data: [parseInt(Country1[0] / Country1[1] * 100)]
    }, {
        name: 'C3',
        type: 'bar',
        barWidth:5,
        xAxisIndex: 1,
        yAxisIndex: 2,
        label: {
            normal: {
                show: true,
                formatter: '75%',
                color:'#8A8A8A',
               position: ['93%', '10']
            }
        },
        itemStyle: {
            normal: {
                color: '#E7E7E7'
            }
        },
        data: [100]
    }, {
        name: 'C1',
        type: 'bar',
        barWidth:5,
        xAxisIndex: 1,
        yAxisIndex: 3,
        label: {
            normal: {
                show: false,
               
            }
        },
        itemStyle: {
            normal: {
                color: '#F4D95A'
            }
        },
        data: [parseInt(Country2[0] / Country2[1] * 100)]
    }, {
        name: 'C2',
        type: 'bar',
        barWidth:5,
        xAxisIndex: 2,
        yAxisIndex: 4,
        label: {
            normal: {
                show: true,
                formatter: '47%',
                color:'#8A8A8A',
                position: ['93%', '10']
            }
        },
        itemStyle: {
            normal: {
                color: '#E7E7E7'
            }
        },
        data: [100]
    }, {
        name: 'C3',
        type: 'bar',
        barWidth:5,
        xAxisIndex: 2,
        yAxisIndex: 5,
        label: {
            normal: {
                show: false,
               
            }
        },
        itemStyle: {
            normal: {
                color: '#D63F61'
            }
        },
        data: [parseInt(Country3[0] / Country3[1] * 100)]
    }
  ]
}