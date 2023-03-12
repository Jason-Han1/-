option = {
    backgroundColor: 'rgba(2, 2, 2, 0.8)',
    tooltip: {
      // 鼠标悬浮时的信息展示框
      backgroundColor: 'rgba(2, 2, 2, 0.8)',
      borderColor: '#195760',
      borderWidth: 1,
      padding: 12,
      extraCssText: 'border-radius:0;',
      trigger: 'axis',
    },
    angleAxis: {
      max: 100, // 一圈是多少
      axisLine: {
        show: false, // 隐藏角度轴（圆心角）
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      splitLine: {
        show: false, // 隐藏分割线
      },
    },
    radiusAxis: {
      type: 'category',
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      // data: ['周四'],
      z: 5,
    },
    polar: {
      radius: [90,100], // 总体的最小半径、最大半径
    },
    series: [
      {
        stack: 'ring',
        type: 'bar',
        data: [89.7],
        silent: true,
        showBackground: true,
        backgroundStyle: {
          color: '#19576044',
        },
        itemStyle: {
          color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: '#28e9f6', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#28f6a1', // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
          },
        },
        coordinateSystem: 'polar',
        roundCap: true,
        barWidth: 8,
      },
      {
        stack: 'ring',
        type: 'bar',
        data: [0.2],
        silent: true,
        itemStyle: {
          color: '#fff',
          shadowBlur: 8,
          shadowColor: '#28e9f6',
        },
        coordinateSystem: 'polar',
        roundCap: true,
        barWidth: 10,
      },
      {
        name: '虚线', // 虚线
        type: 'gauge',
        detail: false,
        splitNumber: 4, // 刻度数量
        radius: '19%', // 图表尺寸
        startAngle: 0, // 开始刻度的角度
        endAngle: -360, // 结束刻度的角度
        axisLine: {
          show: false,
        },
        pointer: {
          show: false,
        },
        anchor: {
          show: false,
        },
        itemStyle: {
          color: '#fff',
        },
        axisTick: {
          show: true,
          lineStyle: {
            color: '#1e4e56',
            width: 10,
          },
          length: 2,
          splitNumber: 6,
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
      },
    ],
};
