 option = {
        tooltip: {},
        legend: {
          textStyle: {
            color: 'rgb(76, 166, 202)'
          },
          itemGap: 30,
          bottom: "0%",
          left: "12%",
          data: [{
            name: '公共照明',
            textStyle: {
              color: '#676DAC'
            },
            itemStyle: {
              color: '#38E2BF'
            }
          }, {
            name: '教育',
            textStyle: {
              color: '#676DAC'
            },
            itemStyle: {
              color: '#F4CB56'
            }
          }, {
            name: '医疗',
            textStyle: {
              color: '#676DAC'
            },
            itemStyle: {
              color: '#DD5B53'
            }
          }, {
            name: '水利',
            textStyle: {
              color: '#676DAC'
            },
            itemStyle: {
              color: '#1AACFF'
            }
          }, {
            name: '热力',
            // 设置文本为红色
            textStyle: {
              color: '#676DAC'
            },
            itemStyle: {
              color: '#C453DD'
            }
          }]
        },
        grid: {
          top: "20%",
          left: "5%",
          right: "3%",
          bottom: "25",
          containLabel: true,
        },
        xAxis: {
          axisLine: {
            show: true,
            lineStyle: {
              color: '#152788',
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: '#8186C5',
          },
          data: [
            "2016",
            "2017",
            "2018",
            "2019",
            "2020",
          ],
        },
        yAxis: {
          name: '产值：亿万元   ',
          nameLocation: 'end',
          nameTextStyle: {
            color: '#8186C5',
            align: 'center',
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#152587',
            },
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: '#8186C5',
          },
        },
        series: [
          {
            name: "热力",
            type: "bar",
            barWidth: "14",
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0.3, color: '#C453DD' // 0% 处的颜色
                }, {
                  offset: 1, color: '#03126D'// 100% 处的颜色
                }],
                global: false // 缺省为 false
              },
              barBorderRadius: 10,
            },
            data: [10, 10, 10, 20, 40],
            seriesLayoutBy: "row"
          },
          {
            name: "公共照明",
            type: "bar",
            barWidth: "14",
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0.3, color: '#01FFD2' // 0% 处的颜色
                }, {
                  offset: 1, color: '#03126D'// 100% 处的颜色
                }],
                global: false // 缺省为 false
              },
              origin: 'start',
              barBorderRadius: 10,
            },
            data: [10, 20, 23, 10, 20],
            seriesLayoutBy: "row"
          },
          {
            name: "教育",
            type: "bar",
            barWidth: "14",
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0.3, color: '#F4CB56' // 0% 处的颜色
                }, {
                  offset: 1, color: '#03126D'// 100% 处的颜色
                }],
                global: false // 缺省为 false
              },
              barBorderRadius: 10,
            },
            data: [30, 10, 10, 20, 10],
            seriesLayoutBy: "row"
          },
          {
            name: "医疗",
            type: "bar",
            barWidth: "14",
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0.3, color: '#E27354' // 0% 处的颜色
                }, {
                  offset: 1, color: '#03126D'// 100% 处的颜色
                }],
                global: false // 缺省为 false
              },
              barBorderRadius: 10,
            },
            data: [30, 10, 10, 20, 10],
            seriesLayoutBy: "row"
          },
          {
            name: "水利",
            type: "bar",
            barWidth: "14",
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0.3, color: '#1AACFF' // 0% 处的颜色
                }, {
                  offset: 1, color: '#03126D'// 100% 处的颜色
                }],
                global: false // 缺省为 false
              },
              barBorderRadius: 10,
            },
            data: [20, 18, 10, 20, 10],
            seriesLayoutBy: "row"
          },
        ],
      }