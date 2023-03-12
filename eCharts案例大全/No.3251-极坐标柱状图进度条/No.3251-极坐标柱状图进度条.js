option = {
  backgroundColor: 'black',
  angleAxis: {
    type: 'value',
    min: 0,
    max: 70,
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    splitLine: {
      show: false,
    },
    axisLabel: {
      show: false,
    },
  },
  radiusAxis: {
    type: 'category',
    data: ['其他', '资源加工工业', '轻纺工业', '机械电子制造业'],
    z: 100,
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      show: true,
      margin: 8,
      fontSize: 10,
      formatter: function (value, index) {
        var list = [12, 25, 48, 60];
        return list[index] + '%';
      },
      textStyle: {
        color: '#96F5F6',
      },
      interval: 0,
    },
  },
  polar: {
    center: ['50%', '50%'],
    radius: ['20%', '94.5%'],
  },
  tooltip: {
    show: false,
  },
  series: [
    {
      type: 'pie',
      name: '内层细圆环',
      animation: false,
      radius: ['85.3%', '85.3%'],
      startAngle: 0,
      hoverAnimation: false,
      clockWise: true,
      itemStyle: {
        borderWidth: 1,
        borderColor: '#fff',
        borderType: 'dashed',
      },
      label: {
        show: false,
      },
      data: [0],
      z: 1,
    },
    {
      type: 'pie',
      name: '内层细圆环',
      animation: false,
      radius: ['66.5%', '66.5%'],
      startAngle: 0,
      hoverAnimation: false,
      clockWise: true,
      itemStyle: {
        borderWidth: 1,
        borderColor: '#fff',
        borderType: 'dashed',
      },
      label: {
        show: false,
      },
      data: [0],
      z: 1,
    },
    {
      type: 'pie',
      name: '内层细圆环',
      animation: false,
      radius: ['47.8%', '47.8%'],
      startAngle: 0,
      hoverAnimation: false,
      clockWise: true,
      itemStyle: {
        borderWidth: 1,
        borderColor: '#fff',
        borderType: 'dashed',
      },
      label: {
        show: false,
      },
      data: [0],
      z: 1,
    },
    {
      type: 'pie',
      name: '内层细圆环',
      radius: ['29.1%', '29.1%'],
      startAngle: 0,
      animation: false,
      hoverAnimation: false,
      clockWise: true,
      itemStyle: {
        borderWidth: 1,
        borderColor: '#fff',
        borderType: 'dashed',
      },
      label: {
        show: false,
      },
      data: [0],
      z: 1,
    },
    {
      type: 'bar',
      barWidth: '20%',
      data: [12],
      coordinateSystem: 'polar',
      name: '其他',
      stack: 'a',
      roundCap: true,
      itemStyle: {
        color: '#BFA27C',
        barBorderRadius: 5,
      },
      z: 2,
    },
    {
      type: 'bar',
      data: [0, 25, 0, 0],
      coordinateSystem: 'polar',
      name: '资源加工工业',
      stack: 'a',
      roundCap: true,
      itemStyle: {
        color: '#328CD9',
      },
    },
    {
      type: 'bar',
      data: [0, 0, 40, 0],
      coordinateSystem: 'polar',
      name: '轻纺工业',
      stack: 'a',
      roundCap: true,
      itemStyle: {
        color: '#1FB4A7',
        barBorderRadius: 5,
      },
    },
    {
      type: 'bar',
      data: [0, 0, 0, 60],
      coordinateSystem: 'polar',
      name: '机械电子制造业',
      stack: 'a',
      roundCap: true,
      itemStyle: {
        color: '#424CB9',
        barBorderRadius: 5,
      },
    },
  ],
};
