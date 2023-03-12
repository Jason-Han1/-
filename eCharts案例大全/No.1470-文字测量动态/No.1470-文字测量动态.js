option = {
  title: {
    text: '血糖测量值',
    subtext: '正常值参考范围：3.9mmol/L-6.9mmol/L',
    itemGap: 15,
    left: 'center',
    top: 220,
    textStyle: {
      color: '#000000',
      fontSize: 30,
      fontFamily: '宋体',
    },
    subtextStyle: {
      color: '#00000',
      fontSize: 15,
      fontFamily: 'Times New Roman'
    }
  },
  series: [
    {
      type: 'gauge',
      startAngle: 0.0001,
      endAngle: 0,
      min: 0,
      max: 1,
      splitNumber: 8,
      axisLine: {
        lineStyle: {
          width: 30,
          color: [
            [0.33, '#FF383C'],
            [0.66, '#25BD49'],
            [1, '#FF383C']
          ]
        }
      },
      pointer: {
        show: false,
        icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
        length: '25%',
        width: 40,
        offsetCenter: [0, '-60%'],
        itemStyle: {
          color: '#000000'
        }
      },
      axisTick: {
        show: false,
        length: 12,
        lineStyle: {
          color: 'auto',
          width: 10
        }
      },
      splitLine: {
        show: false,
        length: 20,
        lineStyle: {
          color: 'auto',
          width: 10
        }
      },
      axisLabel: {
        show: false,
        color: '#000000',
        fontSize: 20,
        distance: -60,
        formatter: function (value) {
          if (value === 0.5) {
            return '正常';
          } else if (value === 0.125) {
            return '低';
          } else if (value === 0.875) {
            return '高';
          }
        }
      },
      title: {
        offsetCenter: [-80, '-10%'],
        fontSize: 30,
        color: '#000000'
      },
      detail: {
        fontSize: 100,
        offsetCenter: [0, '5%'],
        valueAnimation: true,
        formatter: function (value) {
          return Math.round((value * 9 + 0.9) * 10) / 10;
        },
        color: 'auto'
      },
      data: [
        {
          name:
            '您的血糖值为:' +
            '\n' +
            '\n' +
            '\n' +
            '\n' +
            '                                                 mmol/L',
          value: 3 / 4
        }
      ]
    }
  ],
  animationDuration: 1000
};
