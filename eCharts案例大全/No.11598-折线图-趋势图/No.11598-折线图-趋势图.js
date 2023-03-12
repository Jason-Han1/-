option = {
            title: {
              text: '折线图-趋势图',
              x: '30',
              y: '30',
              textStyle: {
                color: '#6b8ffc',
                fontFamily: 'Microsoft YaHei',
                fontSize: '20'
              }
            },
            tooltip: {
              trigger: 'axis'
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              top: '23%',
              containLabel: true
            },
            backgroundColor: '#152a5f',
            xAxis: {
              type: 'category',
              boundaryGap: false,
              axisLine: {
                show: false
              },
              axisLabel: {
                margin: 20,
                textStyle: {
                  color: '#5c72ac',
                  margin: 15
                }
              },
              axisTick: {
                show: false
              },
              splitLine: {
                show: true,
                lineStyle: {
                  type: 'dash',
                  color: '#5c72ac'
                }
              },
              data: [2010,2011,2012,2013,2014,2015,2016]
            },
            yAxis: {
              type: 'value',
              axisLine: {
                show: false
              },
              axisLabel: {
                margin: 20,
                textStyle: {
                  color: '#5c72ac',
                  margin: 15
                }
              },
              axisTick: {
                show: false
              },
              splitLine: {
                show: true,
                lineStyle: {
                  type: 'dash',
                  color: '#5c72ac'
                }
              }
            },
            series: [{
              data: [15,55,66,88,79,88,64],
              symbolSize: 10,
              color: '#e380bd',
              type: 'line'
            }]

          }