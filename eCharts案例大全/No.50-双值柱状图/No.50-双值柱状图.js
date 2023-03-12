const dataList = [
  {
    name: '梯田',
    value: [
      {
        max: 30,
        name: '2°~6°',
        value: 9,
      },
      {
        max: 30,
        name: '2°~15°',
        value: 9,
      },
      {
        max: 30,
        name: '',
        value: 15.8,
      },
      {
        max: 30,
        name: '>25°',
        value: 20,
      },
    ],
  },
  {
    name: '坡地',
    value: [
      {
        max: 30,
        name: '2°~6°',
        value: 19,
      },
      {
        max: 30,
        name: '2°~15°',
        value: 5,
      },
      {
        max: 30,
        name: '15°~25°',
        value: 12,
      },
      {
        max: 30,
        name: '>25°',
        value: 10,
      },
    ],
  },
];
const fieldData = dataList[0].value;
const landData = dataList[1].value;
option = {
  color: ['#1A64F8'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'none',
    },
    formatter: function (prams) {
      return prams[0].name + ':' + prams[0].data;
    },
  },
  legend: {
    data: ['梯田', '坡地'],
    icon: 'rect',
    top: 10,
    right: '6%',
    itemGap: 20,
    itemWidth: 12,
    itemHeight: 8,
  },
  grid: {
    left: '6%',
    right: '3%',
    top: '16%',
    bottom: '28%',
  },
  xAxis: [
    {
      type: 'category',
      data: landData.map((item) => {
        return item.name;
      }),
      axisTick: {
        alignWithLabel: true,
      },
      axisLabel: {
        color: '#606266',
        interval: 0,
        margin: 10,
        align: 'center',
      },
    },
  ],
  yAxis: {
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      color: '#606266',
    },
    splitLine: {
      show: true,
      lineStyle: {
        type: 'dashed',
      },
    },
  },
  series: [
    // 梯田
    {
      name: '梯田',
      type: 'bar',
      backgroundStyle: {
        color: 'rgba(216, 229, 247, 0.55)',
        borderRadius: [8, 8, 0, 0],
      },
      itemStyle: {
        normal: {
          borderRadius: [12, 12, 0, 0],
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 1,
              color: '#74A3FF',
              opacity: 0.85,
            },
            {
              offset: 0,
              color: '#ADDAFF',
              opacity: 0.79,
            },
          ]),
          // barBorderRadius: 11,
        },
      },
      barWidth: '25',
      label: {
        show: true,
        color: '#74A2FF',
        position: 'outside',
      },
      data: fieldData.map((item) => {
        return item.value;
      }),
    },
    // 坡地
    {
      name: '坡地',
      type: 'bar',
      backgroundStyle: {
        color: 'rgba(216, 229, 247, 0.55)',
        borderRadius: [8, 8, 0, 0],
      },
      itemStyle: {
        normal: {
          borderRadius: [12, 12, 0, 0],
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 1,
              color: '#1FB8AC',
              opacity: 0.85,
            },
            {
              offset: 0,
              color: '#7FE3A6',
              opacity: 0.79,
            },
          ]),
          // barBorderRadius: 11,
        },
      },
      barWidth: '25',
      label: {
        show: true,
        color: '#42C3B9',
        position: 'outside',
      },
      data: landData.map((item) => {
        return item.value;
      }),
    },
  ],
};
