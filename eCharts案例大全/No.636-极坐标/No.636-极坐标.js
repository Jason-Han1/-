option = {
  polar: {
    radius: ['10%', '50%'],
  },
  angleAxis: {
    max: 4,
    startAngle: 90,
    show: false,
  },
  radiusAxis: {
    type: 'category',
    show: false,
  },
  tooltip: {
    show: true,
  },
  series: [
    {
      type: 'bar',
      barWidth: 20,
      name: '其他',
      data: [2],
      coordinateSystem: 'polar',
      roundCap: false,
      label: {
        show: true,
        position: 'middle',
        //   formatter: '{b}: {c}',
      },
    },
    {
      type: 'bar',
      barWidth: 20,
      name: '机械电子制造业',
      data: [1],
      coordinateSystem: 'polar',
      roundCap: false,
      label: {
        show: true,
        position: 'middle',
        //   formatter: '{b}: {c}',
      },
    },
    {
      type: 'bar',
      barWidth: 20,
      name: '资源加工工业',
      data: [3],
      coordinateSystem: 'polar',
      roundCap: false,
      label: {
        show: true,
        position: 'middle',
        //   formatter: '{b}: {c}',
      },
    },
    {
      type: 'bar',
      barWidth: 20,
      name: '轻纺工业',
      data: [4],
      coordinateSystem: 'polar',
      roundCap: false,
      label: {
        show: true,
        position: 'middle',
        //   formatter: '{b}: {c}',
      },
    },
    
    {
      type: 'pie',
      name: '内层细圆环',
      radius: ['80%', '81%'],
      hoverAnimation: false,
      clockWise: true,
      zlevel: 3,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
            {
              offset: 0,
              color: '#fff',
            },
            {
              offset: 1,
              color: '#fff',
            },
          ]),
          borderWidth: 5,
          shadowBlur: 20,
          borderColor: 'red',
          shadowColor: 'red',
        },
      },
      tooltip: {
        show: false,
      },
      label: {
        show: false,
      },
      data: [70],
    },
  ],
  legend: {
    bottom: 6,
    icon: 'circle',
    itemHeight: 10,
    show: true,
    data: ['机械电子制造业', '轻纺工业', '资源加工工业', '其他'],

    textStyle: {
      color: '#96F5F6',
      fontSize: 8,
    },
  },
};
