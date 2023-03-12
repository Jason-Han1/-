option = {
                animation: false,
                xAxis: {
                  show: false,
                  splitLine: {
                    show: false
                  },
                },
                yAxis: {
                  show: false,
                  data: [],
                  axisTick: {
                    show: false
                  },
                  axisLine: {
                    show: false
                  },
                },
                series: [{
            
                  type: 'pictorialBar',
                  barCategoryGap: 3,
                  itemStyle: {
                    normal: {
                      color: 'rgba(32,250,191,0.8)'
                    }
                  },
                  symbol: 'roundRect',
                  symbolRepeat: 'fixed',
                  symbolClip: true,
                  symbolSize: [60, 150],
                  data: [80],
                  z: 10
                }, {
                  type: 'pictorialBar',
                  barCategoryGap: 3,
                  itemStyle: {
                    normal: {
                      color: 'rgb(24,58,114)'
                    }
                  },
                  symbolRepeat: 'fixed',
                  symbol: 'roundRect',
                  symbolSize: [60, 150],
                  data: [100],
                  z: 5
                }]
              }
           