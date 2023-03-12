const series = [];
const centerY = 50; // 原点y轴的单位距离
const centerYOffset = 5;// 原点偏移
const centerX = 100 / 3;// 原点x轴的单位距离
const chartList = [
  {
    value: 50,
    total: 60,
    name: '温度'
  }, {
    value: 50,
    total: 60,
    name: '压力'
  }, {
    value: 50,
    total: 60,
    name: '液位'
  }, {
    value: 50,
    total: 60,
    name: '可燃气体'
  }, {
    value: 50,
    total: 60,
    name: '有毒气体'
  }, {
    value: 50,
    total: 60,
    name: '视频信号'
  }
];
chartList.forEach((item, index) => {
  const radius = 30;
  const borderWidth = 30;
  const titleSize = 20;
  const valueSize = 40;
  const ratio = item.value / item.total * 360;
  const center = [
    centerX * (index % 3) + centerX / 2 + '%',
    centerY * Math.floor(index / 3) + centerY / 2 - centerYOffset + '%'
  ];
  series.push(
    { // 内圆背景
      type: 'pie',
      radius: radius + '%',
      center,
      z: 1,
      itemStyle: {
        color: new echarts.graphic.RadialGradient(0.5, 0.5, 0.8, [{
          offset: 0,
          color: '#092a5d'
        },
        {
          offset: 0.3,
          color: '#092a5d'
        },
        {
          offset: 1,
          color: '#0e829b'
        }
        ], false),
        label: {
          show: false
        },
        labelLine: {
          show: false
        }
      },
      label: {
        show: false
      },
      tooltip: {
        show: false
      },
      data: [100]
    },
    { //  内圆边框
      type: 'pie',
      radius: [radius + '%', radius - 1 + '%'],
      center,
      // clockWise: false,
      z: 2,
      itemStyle: {
        shadowBlur: 20,
        shadowColor: '#0e829b',
        color: '#0e829b'
      },
      label: {
        show: false
      },
      data: [100]
    },
    { // 进度
      type: 'gauge',
      radius: radius + '%',
      startAngle: 90,
      endAngle: ~ratio + 91,
      center,
      z: 3,
      axisLine: {
        lineStyle: {
          width: borderWidth,
          color: [[1, new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
              { offset: 0, color: '#19f6c0' },
              { offset: 1, color: '#26dafd' }
            ]
          )]]
        }
      },
      pointer: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        show: false
      },
      detail: {
        valueAnimation: true,
        formatter: () => `${item.value}/${item.total}`,
        offsetCenter: [0, 0],
        fontSize: valueSize,
        fontWeight: 'bolder',
        color: '#1ce9d8'
      },
      title: {
        offsetCenter: [0, '165%'],
        fontSize: titleSize,
        color: '#fff'
      },
      data: [item]
    },
    { // 内圆刻度
      type: 'gauge',
      startAngle: 90,
      endAngle: -270,
      radius: radius + '%',
      z: 4,
      center,
      axisLine: {
        show: false
      },
      pointer: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        distance: -10,
        length: borderWidth,
        lineStyle: {
          color: 'rgba(17,131,167,0.6)',
          width: 3
        }
      },
      axisLabel: {
        show: false
      }
    },
    { // 外圆
      type: 'pie',
      z: 5,
      radius: [radius + 5 + '%', radius + 3 + '%'],
      center,
      // clockWise: false,
      itemStyle: {
        shadowBlur: 20,
        shadowColor: '#0e829b',
        color: '#0e829b'
      },
      label: {
        show: false
      },
      data: [100]
    },
    { // 为了添加点击事件添加遮罩
      type: 'pie',
      z: 6,
      radius: [radius + 5 + '%', 0],
      center,
      // clockWise: false,
      itemStyle: {
        shadowBlur: 20,
        shadowColor: 'transparent',
        color: 'transparent'
      },
      label: {
        show: false
      },
      data: [item]
    }
  );
});

 option = {

  animation: true,
  series: series
};
