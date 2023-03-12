let data2 = [

  {
    name: 'total',
    color: 'gray',
    spin: -1,
    data: [
      [-1.8444, -2.389968],
      [-0.3729, -1.280568],
      // [-0.2669, -1.169568],
      [-3.4784, 1.049232],
      [-1.9137, 4.044732],
    ],
  },
];
let symbolSize = 1,
  series = [],
  color = [],
  xw = 24,
  yh = 10;
 
 data2[0].data.forEach((item => {
  let y = item[0], x = item[1];
  item = [x,y];
  console.log(item);
  return item;
}));
console.log(data2[0].data);
data2.forEach((item, i) => {
  if (!color.includes(item.color)) color.push(item.color);
  let it = {
    name: item.name,
    type: 'line',
    smooth: true,
    yAxisIndex: 2,
    xAxisIndex: 2,
    symbolSize,
    lineStyle: {
      color: item.color,
    },
    data: item.data,
    areaStyle: {
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color: 'blue',
        },
        {
          offset: 1,
          color: 'red',
        },
      ]),
    },
    markLine: {
      symbol: 'none',
      label: { show: true },
      lineStyle: {
        type: 'solid',
        color: '#53A58A',
        width: 1.5,
      },
      data: [{ xAxis: '5.35' }],
    },
  };

  series.push(it);
});
option = {
  title: {
    text: 'y轴放大',
  },
  dataZoom: [
    {
      type: 'inside',
      yAxisIndex: 0, // 2,0
    },

    //   {
    //     type: "slider",
    //     yAxisIndex: 2
    //   },
  ],
  xAxis: [
    {
      data: [''],
      show: false,
      name: 'x1',
      gridIndex: 0,
      axisLine: {
        show: false,
      },
    },
    {
      data: [''],
      show: false,
      name: 'x2',
      gridIndex: 0,
      axisLine: {
        show: false,
      },
    },
    {
      type: 'value',
      name: 'E-Ef (eV)',
      nameLocation: 'middle',
      // interval: 5,
      nameTextStyle: {
        fontSize: 18,
        fontFamily: 'Times New Roman',
      },
      nameGap: 25,
      boundaryGap: true,
      splitLine: {
        show: false,
      },
      min: -(xw / 2),
      max: xw / 2,
      position: 'bottom',
      // minorSplitLine: {
      //     show: true
      // },
      splitArea: {
        interval: 2,
        show: false,
      },
      axisLine: {
        fontSize: 18,
        show: true,
        lineStyle: {
          type: 'dashed',
        },
      },
      axisTick: {
        length: 6,
        show: true,
        lineStyle: {},
        inside: true,
      },
      minorTick: {
        show: true,
        length: 3,
        splitNumber: 2,
        lineStyle: {},
      },
      axisLabel: {
        fontWeight: 700,
        color: '#000000',
      },
    },
    {
      // interval: 5,
      min: -(xw / 2),
      max: xw / 2,
      position: 'top',
      // nameGap: 25,
      axisTick: {
        length: 6,
        show: true,
        inside: true,
        lineStyle: {
          // shadowOffsetY: -h
        },
      },
      minorTick: {
        show: true,
        length: 3,
        splitNumber: 2,
        lineStyle: {
          // shadowOffsetY: -h-2
        },
      },
      axisLabel: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
  ],
  yAxis: [
    {
      data: [''],
      show: true,
      name: 'y0',
      gridIndex: 0,
      axisLine: {
        show: true,
      },
    },
    {
      data: [''],
      show: false,
      name: 'y1',
      gridIndex: 0,
      axisLine: {
        show: true,
      },
    },
    {
      type: 'value',
      name: 'Density of states',
      position: 'left',
      nameLocation: 'middle',
      nameTextStyle: {
        fontSize: 18,
        fontFamily: 'Times New Roman',
      },
      nameGap: 35,
      axisLine: {
        lineStyle: {
          type: 'dashed',
        },
      },
      min: -(yh / 2),
      max: yh / 2,

      axisTick: {
        show: true,
        inside: true,
        length: 6,
        lineStyle: {
          // shadowOffsetX: -w
        },
      },
      minorTick: {
        show: true,
        length: 3,
        splitNumber: 2,
        lineStyle: {
          // shadowOffsetX: -w
        },
      },
      splitLine: {
        show: false,
      },

      axisLabel: {
        inside: false,
        formatter: '{value}\n',
        fontWeight: 700,
        color: '#000000',
      },
    },
    {
      type: 'value',
      position: 'right',
      name: 'y4',
      min: -(yh / 2),
      max: yh / 2,
      axisTick: {
        inside: true,
        length: 6,
        show: true,
        lineStyle: {
          // shadowOffsetX: w
        },
      },
      minorTick: {
        show: true,
        length: 3,
        splitNumber: 2,
        lineStyle: {
          // shadowOffsetX: w
        },
      },
      axisLabel: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          type: 'dashed',
        },
      },
    },
  ],

  series,
};
