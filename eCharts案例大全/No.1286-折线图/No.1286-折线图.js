 option = {
        grid: {
          top: "18%",
          left: "3%",
          right: "3%",
          bottom: "0",
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          data: ['2017', '2018', '2019', '2020', '2021'],
          // alignWithLabel: true,
          // 分界线
          // boundaryGap: false,
          axisLine: {
            show: false,
            lineStyle: {
              color: '#293681',
            },
          },
          axisTick: {
            show: false,
            lineStyle: {
              color: '#293681',
            },
          },
          axisLabel: {
            color: '#2C9CBC',
          },
        },
        yAxis: {
          type: 'value',
          name: '元     ',
          nameLocation: 'end',
          nameTextStyle: {
            color: '#2C9CBC',
            align: 'right'
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: 'transparent',
            },
          },
          axisTick: {
            show: false,
            lineStyle: {
              color: 'transparent',
            },
          },
          axisLabel: {
            color: '#2A93B5',
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#29337D',
              width: 1,
              type: 'solid'
            }
          }
        },
        series: [
          {
            data: [30000, 35000, 36000, 30000, 42000],
            type: 'line',
            lineStyle: {
              color: '#20EDBA'
            },
            itemStyle: {
              opacity: 0
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: '#20EDBA' // 0% 处的颜色
                }, {
                  offset: 1, color: '#03126D'// 100% 处的颜色
                }],
                global: false // 缺省为 false
              },
              origin: 'start'
            }
          }
        ]
      }