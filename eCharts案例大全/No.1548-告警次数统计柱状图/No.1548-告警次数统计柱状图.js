option = {
  tooltip: {
    trigger: 'axis',
    confine: true,
    position: function (pt) {
      return [pt[0], '10%'];
    }
  },
  xAxis: {
    type: 'category',
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    data: [
      '1月',
      '2月',
      '3月',
      '4月',
      '5月',
      '6月',
      '7月',
      '8月',
      '9月',
      '10月',
      '11月',
      '12月'
    ]
  },
  yAxis: {
    type: 'value',
    splitLine: {
      show: false
    },
    max: function (value) {
      return value.max;
    }
  },
  textStyle: {
    color: '#008eff'
  },
  series: [
    {
      name: '告警次数',
      type: 'bar',
      barWidth: '15%',
      itemStyle: {
        normal: {
          color: '#008eff',
          barBorderRadius: 12
        }
      },
      data: [120, 200, 150, 80, 70, 110, 130, 160, 70, 140, 190, 60]
    }
  ]
};
