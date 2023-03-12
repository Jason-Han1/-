var xData2 = ['1月', '2月', '3月', '4月', '5月'];
var data1 = [2.8, 4.8, 2.8, 4, 2.4];
var data2 = [4.8, 3.5, 3.5, 3, 3];
var data3 = [3.5, 3.5, 4, 3, 3];
var barWidth = 30;

option = {
  backgroundColor: '#021132',
  legend: {
    show: true,
    icon: 'rect',
    itemWidth: 12,
    itemHeight: 12,
    top: 0,
    right: 50,
    itemStyle: {
      color: '#1DAEEF',
    },
    textStyle: {
      color: '#fff',
    },
  },
  xAxis: [
    {
      data: xData2,
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisLabel: {
        interval: 0,
        textStyle: {
          color: '#fff',
          fontSize: 16,
        },
        margin: 26, //刻度标签与轴线之间的距离。
      },
    },
    {
      data: xData2,
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
    },
  ],
  yAxis: {
    splitLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLine: {
      show: false,
    },
    axisLabel: {
      textStyle: {
        color: '#fff',
        fontSize: 16,
      },
    },
  },
  series: [
    {
      name: '水费',
      data: data1,
      type: 'bar',
      barGap: '30%',
      barWidth: barWidth,
      itemStyle: {
        //lenged文本
        opacity: 1,
        color: function (params) {
          return new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: '#1c77e2', // 0% 处的颜色
              },
              {
                offset: 1,
                color: '#1dc9fb', // 100% 处的颜色
              },
            ],
            false
          );
        },
      },
      showBackground: true,
      backgroundStyle: {
        color: '#1c77e2',
        opacity: 0.1,
      },
    },
    {
      name: '电费',
      data: data2,
      type: 'bar',
      barGap: '30%',
      barWidth: barWidth,
      itemStyle: {
        //lenged文本
        opacity: 1,
        color: function (params) {
          return new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: '#d9950c', // 0% 处的颜色
              },
              {
                offset: 1,
                color: '#deb213', // 100% 处的颜色
              },
            ],
            false
          );
        },
      },
      showBackground: true,
      backgroundStyle: {
        color: '#d9950c',
        opacity: 0.1,
      },
    },
    {
      name: '气费',
      data: data3,
      type: 'bar',
      barGap: '30%',
      barWidth: barWidth,
      itemStyle: {
        //lenged文本
        opacity: 1,
        color: function (params) {
          return new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: '#13dc96', // 0% 处的颜色
              },
              {
                offset: 1,
                color: '#18f5b0', // 100% 处的颜色
              },
            ],
            false
          );
        },
      },
      showBackground: true,
      backgroundStyle: {
        color: '#13dc96',
        opacity: 0.1,
      },
    },
    {
      //下半截柱子顶部圆片
      name: '',
      type: 'pictorialBar',
      barGap: '30%',
      barWidth: barWidth,
      z: 12,
      symbolPosition: 'end',
      data: data1.map((item) => {
        return {
          value: item,
          symbolSize: [barWidth, 16],
          symbolOffset: [0, -8],
          itemStyle: {
            opacity: 1,
            color: '#12b1eb',
          },
        };
      }),
    },
    {
      //下半截柱子顶部圆片
      name: '',
      type: 'pictorialBar',
      barGap: '30%',
      barWidth: barWidth,
      symbolSize: [barWidth, 16],
      symbolOffset: [0, -8],
      z: 12,
      itemStyle: {
        opacity: 1,
        color: '#e3b20f',
      },
      symbolPosition: 'end',
      data: data2,
    },
    {
      //下半截柱子顶部圆片
      name: '',
      type: 'pictorialBar',
      barGap: '30%',
      barWidth: barWidth,
      symbolSize: [barWidth, 16],
      symbolOffset: [0, -8],
      z: 12,
      itemStyle: {
        opacity: 1,
        color: '#10cc9c',
      },
      symbolPosition: 'end',
      data: data3,
    },
    {
      //下半截柱子底部圆片
      name: '',
      type: 'pictorialBar',
      xAxisIndex: 1,
      barGap: '30%',
      barWidth: barWidth,
      symbolSize: [barWidth, 16],
      symbolOffset: [0, 8],
      z: 12,
      itemStyle: {
        opacity: 1,
        color: '#1978e4',
      },
      data: new Array(xData2.length).fill(1),
    },
    {
      //下半截柱子底部圆片
      name: '',
      type: 'pictorialBar',
      xAxisIndex: 1,
      barGap: '30%',
      barWidth: barWidth,
      symbolSize: [barWidth, 16],
      symbolOffset: [0, 8],
      z: 12,
      itemStyle: {
        opacity: 1,
        color: '#d68907',
      },
      data: new Array(xData2.length).fill(1),
    },
    {
      //下半截柱子底部圆片
      name: '',
      type: 'pictorialBar',
      xAxisIndex: 1,
      barGap: '30%',
      barWidth: barWidth,
      symbolSize: [barWidth, 16],
      symbolOffset: [0, 8],
      z: 12,
      itemStyle: {
        opacity: 1,
        color: '#0ec29b',
      },
      data: new Array(xData2.length).fill(1),
    },
  ],
};
