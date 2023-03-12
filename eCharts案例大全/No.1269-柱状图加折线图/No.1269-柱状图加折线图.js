 option = {
        tooltip: {},
        legend: {
          textStyle: {
            color: 'rgb(76, 166, 202)',
            fontSize: 14
          },
          bottom: "0%",
          left: 30
        },
        grid: {
          top: "3%",
          left: "3%",
          right: "3%",
          bottom: "16%",
          containLabel: true,
        },
        xAxis: {
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgb(76, 166, 202)',
            },
          },
          axisTick: {
            show: false,
            lineStyle: {
              color: 'rgb(76, 166, 202)',
            },
          },
          axisLabel: {
            color: 'rgb(76, 166, 202)',
          },
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月',],

        },
        yAxis: {
          splitLine: {
            show: true,
            lineStyle: {
              width: 0.3
            }
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: 'rgb(76, 166, 202)',
            },
          },
          axisTick: {
            show: false,
            lineStyle: {
              color: 'rgb(76, 166, 202)',
            },
          },
          axisLabel: {
            color: 'rgb(76, 166, 202)',
          },
        },
        series: [
          {
            name: "景区一",
            type: "bar",
            barWidth: "10",
            itemStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#01F8D0", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#01F8D0", // 60% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "transparent", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
              barBorderRadius: 20,
            },
            data: [100, 120, 140, 120, 100, 120, 140, 120, 120, 140, 152, 140],
            seriesLayoutBy: "row"
          },
          {
            name: "景区二",
            type: "bar",
            barWidth: "10",
            itemStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#F4CB56", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#F4CB56", // 60% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "transparent", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
              barBorderRadius: 20,
            },
            data: [100, 120, 140, 120, 100, 120, 140, 120, 120, 130, 140, 150],
            seriesLayoutBy: "row"
          },
          {
            name: "景区三",
            type: "bar",
            barWidth: "10",
            itemStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#1AACFF", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#1AACFF", // 60% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "transparent", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
              barBorderRadius: 20,
            },
            data: [100, 120, 140, 120, 100, 120, 140, 120, 120, 130, 140, 150],
            seriesLayoutBy: "row"
          },
          {
            name: '第一产业',
            type: 'line',
            stack: 'Total',
            symbol: 'circle',
            symbolSize: 0,
            itemStyle: {//折线点的样式
              color: "transparent",
              borderColor: '#E16B53',
              borderWidth: 2
            },
            lineStyle: {
              color: '#E16B53'
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: '#E16B53' // 0% 处的颜色
                }, {
                  offset: 1, color: 'transparent'// 100% 处的颜色
                }],
                global: false // 缺省为 false
              },
              origin: 'start'
            },
            data: [23, 41, 12, 51, 21, 23, 32, 23, 41, 12, 51, 21],
          },
          {
            name: '第二产业',
            type: 'line',
            stack: 'Total',
            symbol: 'circle',
            symbolSize: 0,
            itemStyle: {//折线点的样式
              color: "transparent",
              borderColor: '#00F769',
              borderWidth: 2
            },
            lineStyle: {
              color: '#00F769'
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: '#00F769' // 0% 处的颜色
                }, {
                  offset: 1, color: 'transparent'// 100% 处的颜色
                }],
                global: false // 缺省为 false
              },
              origin: 'start'
            },
            data: [25, 12, 51, 23, 31, 42, 43, 51, 23, 31, 42, 43],
          },
          {
            name: '第三产业',
            type: 'line',
            stack: 'Total',
            symbol: 'circle',
            symbolSize: 0,
            itemStyle: {//折线点的样式
              color: "transparent",
              borderColor: '#1AACFF',
              borderWidth: 2
            },
            lineStyle: {
              color: '#1AACFF'
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: '#1AACFF' // 0% 处的颜色
                }, {
                  offset: 1, color: 'transparent'// 100% 处的颜色
                }],
                global: false // 缺省为 false
              },
              origin: 'start'
            },
            data: [41, 21, 51, 22, 31, 25, 32, 41, 21, 51, 22, 31],
          }
        ],
      }