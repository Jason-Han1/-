const getArrByKey = (data,k,p) => {
  const result = data.map((t) => {
    const newValue = Number(t[p]).toFixed(2);
    return `${t[k]},${newValue}`;
  });
  return result;
}
const data1 = [
  {
    dayOnDay: -21,
    price: 9,
    typeGroup: '葱蒜类',
  },
  {
    dayOnDay: -19,
    price: 10.22,
    typeGroup: '水生类',
  },
  {
    dayOnDay: -17.5,
    price: 10,
    typeGroup: '瓜果类',
  },
  {
    dayOnDay: -14,
    price: 13,
    typeGroup: '野菜类',
  },
  {
    dayOnDay: -13,
    price: 7,
    typeGroup: '根茎类',
  },
   {
    dayOnDay: -11.5,
    price: 8,
    typeGroup: '蔬菜类',
  },
  {
    dayOnDay: -10,
    price: 9,
    typeGroup: '椭圆类',
  },
  {
    dayOnDay: -8,
    price: 2,
    typeGroup: '尖头类',
  },
]
const data2 = [
  {
    dayOnDay: 18,
    price: 19,
    typeGroup: '葱蒜类',
  },
  {
    dayOnDay: 17,
    price: 18.5,
    typeGroup: '水生类',
  },
  {
    dayOnDay: 15,
    price: 16,
    typeGroup: '瓜果1类',
  },
  {
    dayOnDay: 14,
    price: 13.2,
    typeGroup: '葱蒜类1',
  },
  {
    dayOnDay: 11,
    price: 8,
    typeGroup: '水生类1',
  },
  {
    dayOnDay: 7,
    price: 5,
    typeGroup: '瓜果类',
  },
  {
    dayOnDay: 6,
    price: 4,
    typeGroup: '瓜果类2',
  },
  {
    dayOnDay: 4,
    price: 2,
    typeGroup: '瓜果类2',
  },
];

 const splitLine ={
    lineStyle: {
      color: '#fff',
      width: 1,
      opacity: 0.2,
    },
  }
 const axisLine = {
    show: true,
    lineStyle: {
      color: '#fff',
      width: 1,
      opacity: 0.2,
    },
  }
 const axisLabel = {
    color: '#fff',
    opacity: 0.5,
    fontSize: 14,
  }
 const axisTick = {
    show: true,
    lineStyle: {
      color: '#fff',
      width: 1,
      opacity: 0.2,
    },
  }
 const nameTextStyle = {
    color: '#fff',
    opacity: 0.5,
    fontSize:14,
  }

option = {
  backgroundColor: '#0e1c47',
  legend: [
    {
      top: '1%',
      left: '20%',
      orient: 'horizontal',
      icon: 'none',
      textStyle: {
        color: '#ffffff',
        fontSize: 14,
      },
      data: ['跌幅比(%)'],
    },
    {
      top: '1%',
      right: '25%',
      orient: 'horizontal',
      icon: 'none',
      textStyle: {
        color: '#ffffff',
        fontSize: 14,
      },
      data: ['涨幅比(%)'],
    },
  ],
  grid: [
    {
      show: false,
      left: 0,
      top: '10%',
      bottom: '2%',
      width: '48%',
      containLabel: true,
    },
    {
      show: false,
      left: '45%',
      top: '20',
      bottom: '2%',
      width: 0,
    },
    {
      show: false,
      right: 0,
      top: '10%',
      bottom: '2%',
      width: '48%',
      containLabel: true,
    },
  ],
  xAxis: [
    {
      type: 'value',
      gridIndex: 0,
      // inverse: true,
      axisLine: axisLine,
      axisTick: axisTick,
      axisLabel: axisLabel,
      splitLine: splitLine,
      splitNumber: 3,
    },
    {
      gridIndex: 1,
      show: false,
    },
    {
      gridIndex: 2,
      show: true,
      type: 'value',
      axisLine: axisLine,
      axisTick: axisTick,
      axisLabel: axisLabel,
      splitLine: splitLine,
      splitNumber: 3,
    },
  ],
  yAxis: [
    {
      type: 'category',
      gridIndex: 0,
      show: true,
      inverse: true,
      data: getArrByKey(data1, 'typeGroup', 'price'),
      position: 'left',
      axisLine: {
        show: false,
        onZero: false,
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: true,
        color: '#1BF294',
        fontSize: 14,
        formatter: (value) => {
          const arr = value.split(',');
          return `${arr[0]}{price|${arr[1]}}`;
        },
        rich: {
          price: {
            color: '#fff',
            fontSize: 14,
          },
        },
      },
      name: '元/斤',
      nameLocation: 'start',
      nameGap: 10,
      nameTextStyle: {
        color: '#fff',
        opacity: 0.5,
        fontSize:14,
        align: 'right',
      },
    },
    {
      gridIndex: 1,
      type: 'category',
      inverse: true,
      position: 'left',
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
    },
    {
      type: 'category',
      gridIndex: 2,
      show: true,
      inverse: true,
      position: 'right',
      data: getArrByKey(data2, 'typeGroup', 'price'),
      axisLine: {
        show: false,
        onZero: false,
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: true,
        formatter: (value) => {
          const arr = value.split(',');
          return `${arr[0]}{price|${arr[1]}}`;
        },
        rich: {
          price: {
            color: '#fff',
            fontSize: 14,
          },
        },
        verticalAlign: 'middle',
        color: '#1BF294',
        fontSize: 14,
      },
      name: '元/斤',
      nameLocation: 'start',
      nameGap: 10,
      nameTextStyle: {
        color: '#fff',
        opacity: 0.5,
        fontSize:14,
        align: 'left',
      },
    },
  ],
  series: [
    {
      name: '跌幅比(%)',
      type: 'bar',
      showBackground: true,
      xAxisIndex: 0,
      yAxisIndex: 0,
      data: data1.map(e =>e.dayOnDay),
      barWidth:16,
      itemStyle: {
        color: '#14c06d',
      },
      label: {
        show: true,
        position: 'insideRight',
        color: '#fff',
        fontSize: 12,
        formatter: '{c}%',
        offset: [-10, 0],
      },
    },
    {
      name: '涨幅比(%)',
      type: 'bar',
      xAxisIndex: 2,
      yAxisIndex: 2,
      showBackground: true,
      data: data2.map(e =>e.dayOnDay),
      barWidth: 16,
      itemStyle: {
        color: '#F16F37',
      },
      label: {
        show: true,
        position: 'insideLeft',
        color: '#fff',
        fontSize: 12,
        formatter: '{c}%',
        offset: [10, 0],
      },
    },
  ],
};