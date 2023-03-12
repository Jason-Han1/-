var dataArry = ['33'];
var dataCount = [66];
option = {
  grid: {
    show: 'true',
    borderWidth: '0',
    backgroundColor: 'green',
    height: '3%',
    width: '80%',
    x: '12%',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
    formatter: '{b0}: {c0}',
  },
  backgroundColor: '#121B2C', //背景色
  xAxis: {
    show: false, //是否显示x轴
    type: 'value',
    splitLine: {
      show: true,
    },
  },
  yAxis: {
    type: 'category',
    inverse: true, //让y轴数据逆向
    axisLabel: {
      show: true,
      textStyle: {
        color: '#666', //y轴字体颜色
      },
      formatter: function (value, index) {
        return ['{title|' + value + '} '].join('\n');
      },
      //定义富文本标签
      rich: {
        title: {
          color: '#fff',
          fontWeight: 'lighter',
        },
      },
    },
    splitLine: { show: false }, //横向的线
    axisTick: { show: false }, //y轴的端点
    axisLine: { show: false }, //y轴的线
    data: dataArry,
  },
  series: [
    {
      name: '数据内框',
      type: 'bar',
      itemStyle: {
        normal: {
          barBorderRadius: 0,
          color: '#00b5eb',
        },
      },
      barWidth: 30,
      data: dataCount,
    },
    {
      name: '外框',
      type: 'bar',
      markLine: {
        symbol: 'none',
        silent: true,
        data: [
          {
            coord: ['33', 66],
            silent: false,
            lineStyle: {
              type: 'solid',
              width: 10,
              color: 'yellow',
            },
            xAxis: 60,
          },
          {
            coord: ['33', 3],
            silent: false,
            lineStyle: {
              type: 'solid',
              width: 10,
              color: 'red',
            },
            xAxis: 80,
          },
        ],
        lineStyle: {
          show: true,
          color: '#808C94',
          type: 'dashed',
        },
      },
      itemStyle: {
        normal: {
          barBorderRadius: 0,
          color: 'rgba(255, 255, 255, 0.14)', //rgba设置透明度0.14
        },
      },
      barGap: '-100%',
      z: 0,
      barWidth: 30,
      data: [100],
    },
  ],
};
