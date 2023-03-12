let score = 70,
  maxScore = 100,
  scoresPercentage = score / maxScore;

option = {
  title: {
    text: '安全评分',
    // score为0时不显示，这里转成字符串
    subtext: '' + score,
    x: 'center',
    y: 'center',
    textStyle: {
      color: '#5c5c5c',
      fontSize: 12,
      lineHeight: 25,
    },
    subtextStyle: {
      color: '#DE1B1B',
      fontSize: 40,
      lineHeight: 30,
    },
  },
  animationDuration: 1000,
  series: [
    // 低圈--外环
    {
      type: 'pie',
      zlevel: 1,
      radius: ['76%', '100%'],
      silent: true,
      startAngle: 225,
      endAngle: 45,
      label: {
        show: true,
      },
      labelLine: {
        show: false,
      },
      animation: false,
      data: [
        {
          value: 75,
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: '#ebeff5',
                },
                {
                  offset: 1,
                  color: '#fff',
                },
              ],
            },
          },
        },
        {
          value: 25,
          itemStyle: {
            opacity: 0,
          },
        },
      ],
    },

    // 低圈--内环
    {
      type: 'pie',
      radius: ['52%', '76%'],
      zlevel: 1,
      silent: true,
      startAngle: 225,
      endAngle: 45,
      label: {
        show: true,
      },
      labelLine: {
        show: false,
      },
      animation: false,
      data: [
        {
          value: 75,
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: '#f5f7fa',
                },
                {
                  offset: 1,
                  color: '#fff',
                },
              ],
            },
          },
        },
        {
          value: 25,
          itemStyle: {
            opacity: 0,
          },
        },
      ],
    },

    // 外环上的虚线
    {
      name: '',
      zlevel: 5,
      silent: true,
      type: 'gauge',
      center: ['50%', '50%'],
      radius: '89%',
      startAngle: 220,
      endAngle: -45,
      splitNumber: 5,
      axisLine: {
        show: false,
        lineStyle: {
          width: 1,
          color: [[1, 'rgba(0,0,0,0)']],
        },
      },
      splitLine: {
        show: true,
        length: 2,
        lineStyle: {
          width: 4,
        },
      },
      axisLabel: {
        show: false,
      },
      axisTick: {
        show: true,
        splitNumber: 10,
        length: 2,
        lineStyle: {
          width: 2,
          color: '#a3a3a3',
        },
      },
      detail: {
        show: false,
      },
      title: {
        show: false,
      },
    },

    // 内环上的数字显示
    {
      name: '',
      type: 'gauge',
      center: ['50%', '50%'],
      radius: '75%',
      silent: true,
      zlevel: 5,
      startAngle: 225, //刻度起始
      endAngle: -45, //刻度结束
      min: 0,
      max: 100,
      splitNumber: 4,
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
        length: 0,
      },
      axisLabel: {
        color: '#a3a3a3',
        distance: 0,
        fontFamily: 'DINPro-Regular',
        fontSize: 12,
      },
      pointer: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          opacity: 0,
        },
      },
      detail: {
        show: false,
      },
    },

    // 仪表盘值得渐变
    {
      type: 'pie',
      zlevel: 10,
      radius: ['87%', '91%'],
      silent: true,
      startAngle: 225,
      endAngle: 45,
      label: {
        show: false,
      },
      labelLine: {
        show: false,
      },
      data: [
        {
          name: '',
          value: scoresPercentage,
          itemStyle: {
            color: {
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              type: 'linear',
              global: false,
              colorStops: [
                {
                  offset: 0,
                  color: '#FA8C17',
                },
                {
                  offset: 1,
                  color: '#DE1B1B',
                },
              ],
            },
          },
        },
        {
          value: 1.325 - scoresPercentage,
          itemStyle: {
            opacity: 0,
            color: 'rgba(255, 255, 255, 0)',
          },
        },
      ],
    },

    // 值得尾巴，那个圆圈
    {
      type: 'pie',
      radius: ['87%', '88%'],
      zlevel: 10,
      silent: true,
      startAngle: 225,
      endAngle: 45,
      data: [
        {
          name: '',
          value: scoresPercentage,
          label: {
            show: false,
          },
          labelLine: {
            show: false,
          },
          itemStyle: {
            color: 'rgba(0,0,0,0)',
          },
        },

        // 画中间的图标
        {
          name: '',
          value: 0,
          label: {
            position: 'inside',
            backgroundColor: '#fff',
            borderRadius: 12,
            padding: 8, // 可以控制圆的大小
            borderWidth: 3,
            borderColor: '#DE1B1B',
          },
        },
        {
          name: '',
          value: 1.325 - scoresPercentage,
          label: {
            show: false,
          },
          labelLine: {
            show: false,
          },
          itemStyle: {
            color: 'rgba(255,255,255,0)',
          },
        },
      ],
    },
  ],
};
