var option = {
  backgroundColor: '#fff',
  tooltip: {
    trigger: 'axis',
    formatter: function (param) {
      var resultTooltip =
        "<div style='padding-top:5px;font-size:12px;color:#00ccff;width:64px;display: flex;justify-content: space-around;align-items: center;'>" +
        "<span style='display:inline-block;border-radius:2px;width:10px;height:6px;background: linear-gradient(to bottom right, #00f0ff , #003aff);'></span>" +
        "<span style=''>" +
        param[0].value +
        '%</span>' +
        '</div>' +
        "<div style='padding-top:5px;font-size:12px;color:#ffcc00;width:64px;display: flex;justify-content: space-around;align-items: center;'>" +
        "<span style='display:inline-block;border-radius:2px;width:10px;height:6px;background: linear-gradient(to bottom right, #ffd46f , #fe8b04);'></span>" +
        "<span style=''>" +
        param[1].value +
        '%</span>' +
        '</div>' +
        "<div style='padding-top:5px;font-size:12px;color:#06ff00;width:64px;display: flex;justify-content: space-around;align-items: center;'>" +
        "<span style='display:inline-block;border-radius:2px;width:10px;height:6px;background: linear-gradient(to bottom right, #4fe74b , #06a103);'></span>" +
        "<span style=''>" +
        param[2].value +
        '%</span>' +
        '</div>';
      return resultTooltip;
    },
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
    },
  },
  grid: {
    left: '2%',
    right: '2%',
    bottom: '2%',
    top: '2%',
    containLabel: true,
  },
  legend: {
    data: ['', '', ''],
    right: 10,
    top: 12,
    itemWidth: 12,
    itemHeight: 10,
  },
  xAxis: {
    type: 'category',
    data: ['有效度', '知识点覆盖率', '难度'],
    axisLine: {
      lineStyle: {
        color: '#333333',
      },
    },

    axisLabel: {
      textStyle: {
        fontFamily: 'Microsoft YaHei',
      },
    },
  },

  yAxis: {
    type: 'value',
    max: '100',
    axisLine: {
      show: false,
      lineStyle: {
        color: 'white',
      },
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: '#8097b1',
        type: 'dashed',
        opacity: '0.76',
      },
    },
    axisLabel: {},
  },
  series: [
    {
      name: '',
      type: 'bar',
      barWidth: '12',
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#00f0ff',
            },
            {
              offset: 1,
              color: '#003aff',
            },
          ]),
          barBorderRadius: [6, 6, 0, 0],
        },
      },
      data: [40, 60, 30],
    },
    {
      name: '',
      type: 'bar',
      barWidth: '12',
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#ffd46f',
            },
            {
              offset: 1,
              color: '#fe8b04',
            },
          ]),
          barBorderRadius: [6, 6, 0, 0],
        },
      },
      data: [70, 50, 50],
    },
    {
      name: '',
      type: 'bar',
      barWidth: '12',
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#4fe74b',
            },
            {
              offset: 1,
              color: '#06a103',
            },
          ]),
          barBorderRadius: [6, 6, 0, 0],
        },
      },
      data: [40, 60, 70],
    },
  ],
};
