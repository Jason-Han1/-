const arr = [
  {
    name: '2021上学期',
    value: 85,
    value2: 80
  },
   {
    name: '2020下学期',
    value: 90,
    value2: 70
  },
   {
    name: '2020上学期',
    value: 60,
    value2: 82
  },
   {
    name: '2019下学期',
    value: 73,
    value2: 90
  },
   {
    name: '2019上学期',
    value: 80,
    value2: 80
  },
  ]

option = {
  backgroundColor: '#323a5e',
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
    },
  },
  grid: {
    left: '2%',
    right: '4%',
    bottom: '14%',
    top: '16%',
    containLabel: true,
  },
  legend: {
    data: ['调课', '停课'],
    right: 10,
    top: 12,
    textStyle: {
      color: '#fff',
    },
    itemWidth: 20,
    itemHeight: 12,
    // itemGap: 35
  },
  xAxis: {
    type: 'category',
    data: arr.map(item => item.name),
    axisLine: {
      lineStyle: {
        color: 'white',
      },
    },

    axisLabel: {
      // interval: 0,
      // rotate: 40,
      textStyle: {
        fontFamily: 'Microsoft YaHei',
        color: '#fff',
      },
    },
    axisTick: {
      show: true,
    },
  },

  yAxis: {
    type: 'value',
    // max: '1200',   //数值轴最大数值
    axisLine: {
      show: true,
      lineStyle: {
        color: 'white',
      },
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: '#fff',
      },
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      // interval: 0,
      // rotate: 40,
      textStyle: {
        fontFamily: 'Microsoft YaHei',
        color: '#fff',
      },
      formatter: function (value, index) {
        return value + '节';
      },
    },
  },
  series: [
    {
      name: '调课',
      type: 'bar',
      barWidth: 30,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#02A7EF',
            },
            {
              offset: 1,
              color: '#027FB6',
            },
          ]),
          barBorderRadius: 12,
        },
      },
      data: arr.map(item => item.value),
    },
    {
      name: '停课',
      type: 'bar',
      barWidth: 30,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#71B703',
            },
            {
              offset: 1,
              color: '#94F104',
            },
          ]),
          barBorderRadius: 12,
        },
      },
      data: arr.map(item => item.value2),
    },
  ],
};
