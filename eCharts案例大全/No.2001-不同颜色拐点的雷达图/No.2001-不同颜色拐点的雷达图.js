   var legendData = ['今日各系统访问量']; //图例
      var indicator = [{
        text: '省',
        max: 30,
      },
      {
        text: '系',
        max: 30,
      },
      {
        text: '指',
        max: 30,
      },
      {
        text: '联',
        max: 30,
      },
      {
        text: '网',
        max: 30,
      },
      {
        text: '传',
        max: 30,
      },
      {
        text: '蓝',
        max: 30,
      },
      {
        text: '情',
        max: 30,
      }
      ];
option = {
        backgroundColor: '#030303',
     radar: {
          // shape: 'circle',
          name: {
            show: false,
            textStyle: {
              color: '#fff',
              fontSize: 16
            },
          },
          indicator: indicator,
          splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
            show: true,
            areaStyle: { // 分隔区域的样式设置。
              color: ['rgba(255,255,255,0)', 'rgba(255,255,255,0)'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
            }
          },
          axisLine: { //指向外圈文本的分隔线样式
            lineStyle: {
              color: 'rgba(36, 61, 78,0.5)',
            }
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(36, 61, 78,0.5)', // 分隔线颜色
              width: 1, // 分隔线线宽
            }
          },
          splitArea: {
            areaStyle: {
              color: [

                'rgba(40, 97, 132, 0.3)',
                'rgba(40, 97, 132, 0.2)',
                'rgba(40, 97, 132, 0.3)',
                'rgba(40, 97, 132, 0.2)',
                'rgba(40, 97, 132, 0.4)',
                'rgba(40, 97, 132, 0.5)',
              ].reverse(),
              opacity: 0.7 // 区域透明度
            },
          },
          radius: '100%',
        },
        series: [
          {
            type: 'radar',
            symbolSize: 18,
            symbol: 'circle',
            hoverAnimation: false,
            silent: true,
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  formatter: function (params) {
                    return params.value;
                  },
                  color: '#ffffff',
                  fontSize: 12,
                  fontFamily: 'DINPro',
                  align: 'center',
                  distance: 0,
                },
              }
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0.5,
                y: 0.5,
                r: 0.5,
                colorStops: [{
                  offset: 0, color: 'rgba(42, 108, 139,0.8)' // 0% 处的颜色
                }, {
                  offset: 0.5,
                  color: 'rgba(42, 108, 139,0.7)'
                }, {
                  offset: 0.8,
                  color: 'rgba(42, 108, 139,0.5)'
                },
                {
                  offset: 1,
                  color: 'rgba(42, 108, 139,1)'
                }],
                global: false // 缺省为 false
              }
            },
            data: [
              {
                value: [20, 16, 18, 18, 16, 14, 20, 20],
                name: '数',
                lineStyle: {
                  color: 'rgba(0,174,255,0.8)', //设置折线的颜色
                },
              },
              {
                value: [20, 0, 0, 0, 0, 0, 0, 0],
                name: '省台',
                label: {
                  show: false
                },
                itemStyle: {
                  color: 'rgba(0,174,255,0.8)',
                  borderWidth: 1,
                  borderColor: '#fff'
                },
                lineStyle: {
                  color: 'transparent', //设置折线的颜色
                },
              },
              {
                value: [0, 16, 0, 0, 0, 0, 0, 0],
                name: '系',
                label: {
                  show: false
                },
                itemStyle: {
                  color: 'rgba(255,159,65,0.8)',
                  borderWidth: 1,
                  borderColor: '#fff'
                },
                lineStyle: {
                  color: 'transparent', //设置折线的颜色
                },
              },
              {
                value: [0, 0, 18, 0, 0, 0, 0, 0],
                name: '指',
                label: {
                  show: false
                },
                itemStyle: {
                  color: 'rgba(37,235,252,0.8)',
                  borderWidth: 1,
                  borderColor: '#fff'
                },
                lineStyle: {
                  color: 'transparent', //设置折线的颜色
                },
              },
              {
                value: [0, 0, 0, 18, 0, 0, 0, 0],
                name: '联',
                label: {
                  show: false
                },
                itemStyle: {
                  color: 'rgba(240,85,90,0.8)',
                  borderWidth: 1,
                  borderColor: '#fff'
                },
                lineStyle: {
                  color: 'transparent', //设置折线的颜色
                },
              },
              {
                value: [0, 0, 0, 0, 16, 0, 0, 0],
                name: '网',
                label: {
                  show: false
                },
                itemStyle: {
                  color: 'rgba(28,218,216,0.8)',
                  borderWidth: 1,
                  borderColor: '#fff'
                },
                lineStyle: {
                  color: 'transparent', //设置折线的颜色
                },
              },
              {
                value: [0, 0, 0, 0, 0, 14, 0, 0],
                name: '传',
                label: {
                  show: false
                },
                itemStyle: {
                  color: 'rgba(254,207,81,0.8)',
                  borderWidth: 1,
                  borderColor: '#fff'
                },
                lineStyle: {
                  color: 'transparent', //设置折线的颜色
                },
              },
              {
                value: [0, 0, 0, 0, 0, 0, 20, 0],
                name: '蓝',
                label: {
                  show: false
                },
                itemStyle: {
                  color: 'rgba(222,89,255,0.8)',
                  borderWidth: 1,
                  borderColor: '#fff'
                },
                lineStyle: {
                  color: 'transparent', //设置折线的颜色
                },
              },
              {
                value: [0, 0, 0, 0, 0, 0, 0, 20],
                name: '情',
                label: {
                  show: false
                },
                itemStyle: {
                  color: 'rgba(0,255,133,0.8)',
                  borderWidth: 1,
                  borderColor: '#fff'
                },
                lineStyle: {
                  color: 'transparent', //设置折线的颜色
                },
              },
              {
                value: [0, 0, 0, 0, 0, 0, 0, 0],
                name: 'all',
                symbolSize: 18,
                itemStyle: {
                  color: 'rgba(40, 97, 132,0.3)',
                  borderWidth: 3,
                  borderColor: 'rgba(40, 97, 132,0.3)'
                },
                label: {
                  show: false
                }
              }
            ]
          }
        ]
};
