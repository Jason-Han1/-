const yAxisData = [1, 2, 3, 4, 5]
  const leftXAxisData = [
    { name: 'A', value: 12 },
    { name: 'A', value: 12 },
    { name: 'A', value: 12 },
    { name: 'A', value: 12 },
    { name: 'A', value: 12 },
  ]
  const rightXAxisData = [
    { name: 'A', value: 12 },
    { name: 'A', value: 12 },
    { name: 'A', value: 12 },
    { name: 'A', value: 12 },
    { name: 'A', value: 12 },
  ]

  const pictorialBarConfig = {
    type: 'pictorialBar',
    barCategoryGap: '0%',
    symbol: 'path://M0,0 L0,10 C0,5.5 5,5.5 10,5 C5,4.5 0,4.5 0,0 z',
    itemStyle: {
      normal: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 1,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(232, 94, 106, .8)',
            },
            {
              offset: 1,
              color: 'rgba(232, 94, 106, .1)',
            },
          ],
        },
      },
    },
  }

option = {
    grid: [
      {
        left: '12%',
        width: '35%',
        bottom: 60,
        top: 60,
        show: false,
      },
      {
        left: '50.5%',
        width: '0%',
        bottom: 76,
        top: 60,
        show: false,
      },
      {
        right: '12%',
        width: '35%',
        bottom: 60,
        top: 60,
        show: false,
      },
    ],
    xAxis: [
      {
        type: 'value',
        inverse: true,
        axisLabel: { show: false },
        axisLine: { show: false },
        axisTick: { show: false },
      },
      {
        gridIndex: 1,
        axisLabel: { show: false },
        axisLine: { show: false },
        axisTick: { show: false },
      },
      {
        type: 'value',
        gridIndex: 2,
        axisLabel: { show: false },
        axisLine: { show: false },
        axisTick: { show: false },
      },
    ],
    yAxis: [
      {
        type: 'category',
        data: yAxisData,
        position: 'right',
        axisLabel: { show: false },
        axisLine: { show: false },
        axisTick: { show: false },
      },
      {
        type: 'category',
        data: yAxisData,
        gridIndex: 1,
        position: 'center',
        axisLabel: {
          align: 'center',
          padding: [8, 0, 0, 0],
          fontSize: 12,
          color: `#262C41`,
        },
        axisLine: { show: false },
        axisTick: { show: false },
      },
      {
        type: 'category',
        data: yAxisData,
        gridIndex: 2,
        position: 'left',
        axisLabel: { show: false },
        axisLine: { show: false },
        axisTick: { show: false },
      },
    ],
    series: [
      {
        name: leftXAxisData.map(i => i.name),
        data: leftXAxisData.map(i => i.value),
        label: { position: 'left', show: true },
        ...pictorialBarConfig,
      },
      {
        xAxisIndex: 2,
        yAxisIndex: 2,
        name: rightXAxisData.map(i => i.name),
        data: rightXAxisData.map(i => i.value),
        label: { position: 'right', show: true },
        ...pictorialBarConfig,
      },
    ],
  }