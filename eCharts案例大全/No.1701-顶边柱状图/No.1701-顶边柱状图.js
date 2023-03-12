var myData = {
  name: [
    '细口瓶-哈哈哈哈',
    '烧杯',
    '条形盒',
    '测力盒',
    '电子天平-嘿嘿嘿',
    '广口瓶-哟嘿',
    '金属槽码mmmmm',
    '足球门',
    '试管',
    '钟表模型',
    '试管架',
  ],
  value: [1073, 963, 807, 782, 702, 679, 516, 498, 408, 346, 188],
  value2: [],
};
for (let index in myData.value) {
  myData.value2[index] = Math.max(...myData.value) / 100;
}
option = {
  backgroundColor: '#000',
  grid: {
    top: '13%',
    right: '3%',
    left: '7%',
    bottom: '20%',
  },
  tooltip: {
    show: true,
    trigger: 'axis',
    formatter: '{b0}：{c0}',
  },
  xAxis: [
    {
      type: 'category',
      data: myData.name,
      axisLine: {
        lineStyle: {
          color: '#1E467E',
        },
      },
      axisLabel: {
        rotate: -30,
        margin: 20,
        align: 'center',
        verticalAlign: 'top',
        color: '#979797',
        textStyle: {
          fontSize: 12,
        },
        formatter(value) {
          return value.length > 5 ? value.substr(0, 5) + '...' : value;
        },
      },
      axisTick: {
        show: false,
      },
    },
  ],
  yAxis: [
    {
      axisLabel: {
        formatter: '{value}',
        color: '#979797',
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
  ],
  series: [
    {
      type: 'bar',
      data: myData.value,
      stack: '合并',
      barWidth: '50%',
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0.2,
                color: '#064CC4', // 0% 处的颜色
              },
              {
                offset: 1,
                color: 'rgba(6,76,196,0.05)', // 100% 处的颜色
              },
            ],
            false
          ),
        },
      },
      label: {
        normal: {
          show: true,
          formatter: '{c}',
          position: 'top',
          textStyle: {
            color: '#7DB2FF',
            fontSize: 16,
            padding: 5,
          },
        },
      },
    },
    {
      type: 'bar',
      stack: '合并',
      data: myData.value2,
      barWidth: '50%',
      itemStyle: {
        normal: {
          color: '#4FB8F9',
        },
      },
    },
  ],
};
