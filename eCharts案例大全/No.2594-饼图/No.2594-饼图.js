option = {
    backgroundColor: '#0E1829',
    color: ['#FFC051', '#25FF97'],
    tooltip: {
      // 鼠标悬浮时的信息展示框
      backgroundColor: 'rgba(2, 2, 2, 0.8)',
      borderColor: '#195760',
      borderWidth: 1,
      padding: 12,
      extraCssText: 'border-radius:0;',
      trigger: 'axis',
    },
    grid: {
      top: 120,
    },
    legend: {
      icon: 'circle',
      data: ['异常', '正常'],
      textStyle: {
        color: '#28E9F6',
        // 设置上下的内边距为 5，左右的内边距为 10
        padding: [5, 10],
      },
    },
    series: [
      {
        name: '外圈',
        type: 'pie',
        radius: ['61', '57'],
        clockwise: true, // 饼图的扇区是否是顺时针排布
        startAngle: 90,
        silent: true,
        center: ['50%', '55%'],
        data: [
          {
            value: 20,
            name: '异常',
            itemStyle: {
              color: 'rgba(255, 192, 81, 1)',
            },
            label: {
              show: true,
              fontSize: 12,
              color: '#fff',
              formatter: '{b} ({c})\n{d}%',
            },
            labelLine: {
              length: 50, // 第一段
              length2: 60, // 第二段
              minAngle: 45,
              lineStyle: {
                color: 'rgba(255, 192, 81, 1)',
              },
            },
          },
          {
            value: 0.5,
            name: '',
            itemStyle: {
              color: 'rgba(0, 238, 164, 0)',
            },
          },
          {
            value: 80,
            name: '正常',
            itemStyle: {
              color: 'rgba(35, 255, 252, 1)',
            },
            label: {
              show: true,
              fontSize: 12,
              color: '#fff',
              formatter: '{c}\n{d}%',
            },
            labelLine: {
              length: 50, // 第一段
              length2: 60, // 第二段
              minAngle: 45,
              lineStyle: {
                color: '#23fffc',
              },
            },
          },
          {
            value: 0.5,
            name: '',
            itemStyle: {
              color: 'rgba(0, 238, 164, 0)',
            },
          },
        ],
      },
      {
        name: '内环',
        type: 'pie',
        radius: ['57', '39'],
        clockwise: true, // 饼图的扇区是否是顺时针排布
        startAngle: 90,
        silent: true,
        label: {
          show: false,
        },
        center: ['50%', '55%'],
        data: [
          {
            value: 20,
            name: '异常',
            itemStyle: {
              color: 'rgba(255, 192, 81, .2)',
            },
          },
          // 用作分割
          {
            value: 0.5,
            name: '',
            itemStyle: {
              color: 'rgba(0, 238, 164, 0)',
            },
          },
          {
            value: 80,
            name: '正常',
            itemStyle: {
              color: 'rgba(35, 255, 252, .2)',
            },
          },
          {
            value: 0.5,
            name: '',
            itemStyle: {
              color: 'rgba(0, 238, 164, 0)',
            },
          },
        ],
      },
      {
        name: '装饰外圈细',
        type: 'pie',
        radius: ['77', '78'],
        clockwise: true, // 饼图的扇区是否是顺时针排布
        startAngle: 90,
        silent: true, // 图形是否不响应和触发鼠标事件
        label: {
          show: false,
        },
        center: ['50%', '55%'],
        data: [
          {
            value: 15,
            itemStyle: {
              color: '#72828D00',
            },
          },
          {
            value: 50,
            itemStyle: {
              color: '#72828D',
            },
          },
          {
            value: 15,
            itemStyle: {
              color: '#72828D00',
            },
          },
          {
            value: 15,
            itemStyle: {
              color: '#72828D00',
            },
          },
          {
            value: 50,
            itemStyle: {
              color: '#72828D',
            },
          },
          {
            value: 15,
            itemStyle: {
              color: '#72828D00',
            },
          },
        ],
      },
      {
        name: '装饰外圈粗',
        type: 'pie',
        radius: ['76', '78'],
        clockwise: true, // 饼图的扇区是否是顺时针排布
        startAngle: 90,
        silent: true, // 图形是否不响应和触发鼠标事件
        label: {
          show: false,
        },
        center: ['50%', '55%'],
        data: [
          {
            value: 10,
            itemStyle: {
              color: '#ffffff00',
            },
          },
          {
            value: 4,
            itemStyle: {
              color: '#ffffff',
            },
          },
          {
            value: 28,
            itemStyle: {
              color: '#ffffff00',
            },
          },
          {
            value: 4,
            itemStyle: {
              color: '#ffffff',
            },
          },
          {
            value: 18,
            itemStyle: {
              color: '#ffffff00',
            },
          },
          {
            value: 4,
            itemStyle: {
              color: '#ffffff',
            },
          },
          {
            value: 28,
            itemStyle: {
              color: '#ffffff00',
            },
          },
          {
            value: 4,
            itemStyle: {
              color: '#ffffff',
            },
          },
          {
            value: 10,
            itemStyle: {
              color: '#ffffff00',
            },
          },
        ],
      },
    ],
};
