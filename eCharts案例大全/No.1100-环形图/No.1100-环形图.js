/*
https://www.makeapie.com/editor.html?c=xDDUUA6lsn 参考母版
https://www.makeapie.com/editor.html?c=xXx3xHhruq 极坐标环形图,也可以用来参考
https://www.makeapie.com/editor.html?c=x0aNKVK2JL 圆角半圆环形图
*/

let setbgc = '#0C1B32';
option = {
  backgroundColor: '#082448',
  polar: {
    radius: ['50%', '100%'],
    center: ['50%', '50%'],
  },
  angleAxis: {
    max: 100,
    //startAngle:180,
    clockwise: false, // 逆时针
    axisLine: false,
    // axisTick: false,
    // axisLabel: false,
    splitLine: false,
  },
  radiusAxis: {
    type: 'category',
    axisLine: false,
  },
  series: [
    {
      type: 'bar',
      barWidth: 30,
      z: 1,
      animationDuration: 1500, // 动画时间
      coordinateSystem: 'polar',
      roundCap: true,
      barGap: '-100%',
      showBackground: true,
      backgroundStyle: {
        //color: '#213A5A',
        color: {
          type: 'linear',
          x: 1,
          y: 0,
          x2: 0,
          y2: 0,
          colorStops: [
            { offset: 0, color: 'transparent' },
            { offset: 0.49, color: 'transparent' },
            { offset: 0.5, color: setbgc },
            { offset: 1, color: setbgc },
          ],
          global: false,
        },
      },
      data: [
        { value: 50, itemStyle: { color: setbgc } },
        { value: 50, itemStyle: { color: setbgc } },
        { value: 50, itemStyle: { color: setbgc } },
      ],
    },
    {
      type: 'bar',
      barWidth: 30,
      z: 2,
      coordinateSystem: 'polar',
      roundCap: true,
      showBackground: true,
      backgroundStyle: {
        color: 'transparent',
      },
      data: [
        {
          value: 20,
          itemStyle: {
            color: '#04D58B',
          },
        },
        {
          value: 25,
          itemStyle: {
            color: '#129BFF',
          },
        },
        {
          value: 30,
          itemStyle: {
            color: '#f00',
          },
        },
      ],
    },
  ],
};
