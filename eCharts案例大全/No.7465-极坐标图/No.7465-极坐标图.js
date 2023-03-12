option = {
    backgroundColor: '#021530',
    tooltip: {
          trigger: 'item',
          // formatter: '{a} : {c} ({d}%)'
        },
        grid: {
          top: 0,
          bottom: 0
        },
        polar: {
          center: ['25%', '50%'],
          radius: 130,
        },
        angleAxis: {
          type: 'category',
          data: ['暴雨', '沙尘暴', '冰雹', '台风', '干旱', '大雾'],
          z: 10,
          boundaryGap: true,
          axisLine: {
            show: false,
            lineStyle: {
              color: '#274668',
              width: 2,
              type: 'solid'
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#274668',
              width: 2,
              type: 'dotted'
            }
          },
          axisLabel: {
            color: '#568cba',
            fontSize: 18
          }
        },
        radiusAxis: {
          min: 0,
          max(value) {
            return value.max + 20000;
          },
          interval: 100000,
          axisLabel: {
            show: false
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#274668',
              width: 2,
              type: 'solid'
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          }
        },
        series: [
          {
            type: 'bar',
            data: [{
                name: '暴雨',
                value: 133448,
              }, {
                name: '沙尘暴',
                value: 133448,
              }, {
                name: '冰雹',
                value: 133448,
              }, {
                name: '台风',
                value: 184218,
              }, {
                name: '干旱',
                value: 164422,
              }, {
                name: '大雾',
                value: 268448,
              }],
            coordinateSystem: 'polar',
            itemStyle: {
              normal: {
                // 定制显示（按顺序）
                color(params) {
                  const colorList = [{
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                      offset: 0,
                      color: '#a2e601' // 0% 处的颜色
                    }, {
                      offset: 1,
                      color: '#088a29' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                  }, {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                      offset: 0,
                      color: '#e421b6' // 0% 处的颜色
                    }, {
                      offset: 1,
                      color: '#9f41f1' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                  }, {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                      offset: 0,
                      color: '#ffbb14' // 0% 处的颜色
                    }, {
                      offset: 1,
                      color: '#f09003' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                  }, {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                      offset: 0,
                      color: '#f47432' // 0% 处的颜色
                    }, {
                      offset: 1,
                      color: '#a31c06' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                  }, {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                      offset: 0,
                      color: '#2695af' // 0% 处的颜色
                    }, {
                      offset: 1,
                      color: '#03616c' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                  }, {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                      offset: 0,
                      color: '#2caf6d' // 0% 处的颜色
                    }, {
                      offset: 1,
                      color: '#1a84b9' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                  }]
                  return colorList[params.dataIndex]
                }
              }
            }
          }
        ]
};