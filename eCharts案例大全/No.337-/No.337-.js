const barWidth = '18%';
var data1 = [
  0,
  {
    value: 26.5,
    itemStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgba(251, 255, 0, 1)',
          },
          {
            offset: 1,
            color: 'rgba(255, 112, 0, 1)',
          },
        ]),
      },
    },
  },
  {
    value: 26.5,
    itemStyle: {
      color: 'rgba(255,255,255,0)',
      // color: 'pink',
    },
  },
]; //学士比例
var data2 = [
  0,
  {
    value: 73.5,
    itemStyle: {
      color: 'rgba(255,255,255,0)',
      // color: 'pink',
    },
  },
  {
    value: 73.5,
    itemStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgba(0, 255, 155, 1)',
          },
          {
            offset: 1,
            color: 'rgba(251, 255, 0, 1)',
          },
        ]),
      },
    },
    // itemStyle: {

    //     color: 'yellow',
    // },
  },
];
var rAxisData = ['', '校内专任', '校内兼课'];

 option = {
  background: 'transparent',
  polar: {
    radius: ['30%', '80%'],
    center: ['50%', '50%'],
  },
  angleAxis: {
    type: 'value',
    startAngle: 90,
    min: 0,
    max: 100, // 分组总和超过1/2的话，就不是半圆了！！！
    clockwise: false, // 逆时针
    axisLine: false,
    axisTick: false,
    splitLine: false,
    axisLabel: false,
  },
  radiusAxis: {
    show: false,
    data: rAxisData,
  },
  tooltip: { show: true },
  series: [
    {
      name: '学士',
      type: 'bar',
      stack: '学位',
      roundCap: true,
      coordinateSystem: 'polar',
      barWidth: barWidth, //宽度
      z: 3,
      data: data1,
    },
    {
      name: '硕士',
      type: 'bar',
      stack: '学位',
      roundCap: true,
      coordinateSystem: 'polar',
      barWidth: barWidth, //宽度
      data: data2,
      z: 2,
    },
  ],
};
