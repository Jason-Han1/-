option = {
    backgroundColor: '#042421',
        grid: {
          left: 0,
          top: 25,
          right: 10,
          bottom: 0,
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'line' // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter: '{b}:{c}min'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: '#076762'
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#076762'
            }
          },
          data: ['7月', '8月', '9月', '10月', '11月', '12月']
        },
        yAxis: {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#076762'
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#076762'
            }
          }
        },
        series: [
          {
            data: [20, 32, 90, 60, 30, 100],
            type: 'line',
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: '#d44a49' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#1d2522' // 100% 处的颜色
                  }
                ],
                globalCoord: false // 缺省为 false
              }
            },
            label: {
              show: true
            }
          }
        ]
      };