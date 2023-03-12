option = {
  polar: {
    radius: ['10%', '50%'],
  },
  angleAxis: {
    min: 0, //最小刻度
    max: 4, //最大刻度
    startAngle: 90,
    show: true
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
      name: '其他',
      data: [2],
      coordinateSystem: 'polar',
      roundCap: false,
      label: {
        show: true,
        position: 'middle',
        //   formatter: '{b}: {c}',
      }
    },
    {
      type: 'bar',
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
      name: '轻纺工业',
      data: [4],
      coordinateSystem: 'polar',
      roundCap: false,
      label: {
        show: true,
        position: 'middle',
        //   formatter: '{b}: {c}',
      },
    }
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
