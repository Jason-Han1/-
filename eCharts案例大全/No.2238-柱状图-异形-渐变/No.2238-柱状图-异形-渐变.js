option = {
  textStyle: {
    fontFamily: 'Microsoft YaHei',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    color: '#162440',
  },
  color: ['#FFD87B', '#4C96FF', '#17CEBD', '#FF6565'],
  // 标题
  title: {
    text: '产品销量',
    textStyle: {
      fontWeight: 'bold',
      fontSize: 18,
      color: '#162440',
    },
  },
  // 图例
  legend: {
    show: true,
    icon: 'roundRect',
    itemWidth: 16,
    itemHeight: 8,
    textStyle: {
      fontWeight: 'normal',
      fontSize: 14,
      color: '#162440',
    },
  },
  // 提示
  tooltip: {
    show: true,
    // trigger: 'item',
    textStyle: {
      fontSize: 14,
      color: '#162440',
    },
    formatter: (params) => {
      // console.log(params);
      const { seriesName, name, data } = params;
      const { value, unit } = data;

      return `${seriesName}<br>` + `${name}: ${value} ${unit}`;
    },
  },
  grid: {
    show: false,
    top: 60,
    bottom: 60,
    left: 80,
    right: 80,
    containLabel: true,
  },
  yAxis: {
    type: 'category',
    name: '品牌',
    nameGap: 15,
    nameTextStyle: {
      fontWeight: 'normal',
      fontSize: 14,
      color: '#162440',
    },
    inverse: true,
    nameLocation: 'start',
    // 坐标轴
    axisLine: {
      show: true,
      lineStyle: {
        width: 1,
        color: '#D6D9DF',
        type: [5, 10],
        dashOffset: 5,
      },
    },
    // 刻度
    axisTick: {
      show: true,
      interval: 'auto',
      inside: false,
      length: 5,
      lineStyle: {
        width: 1,
        color: '#D6D9DF',
      },
    },
    axisLabel: {
      show: true,
      interval: 'auto',
      inside: false,
      rotate: 0,
      margin: 8,
      fontWeight: 'normal',
      fontSize: 14,
      color: '#162440',
      formatter: '{value}',
    },
    // 区域分隔线
    splitLine: {
      show: true,
      interval: 'auto',
      lineStyle: {
        width: 1,
        color: ['#D6D9DF', '#D6D9DF'],
        type: [5, 10],
        dashOffset: 5,
      },
    },
  },
  xAxis: {
    type: 'value',
    name: '销量/元',
    nameGap: 15,
    nameTextStyle: {
      fontWeight: 'normal',
      fontSize: 14,
      color: '#162440',
    },
    // 坐标轴
    axisLine: {
      show: true,
      lineStyle: {
        width: 1,
        color: '#D6D9DF',
        type: [5, 10],
        dashOffset: 5,
      },
    },
    // 刻度
    axisTick: {
      show: true,
      interval: 'auto',
      inside: false,
      length: 5,
      lineStyle: {
        width: 1,
        color: '#D6D9DF',
      },
    },
    axisLabel: {
      show: true,
      interval: 'auto',
      inside: false,
      rotate: 0,
      margin: 8,
      fontWeight: 'normal',
      fontSize: 14,
      color: '#162440',
      formatter: '{value}',
    },
    // 区域分隔线
    splitLine: {
      show: true,
      interval: 'auto',
      lineStyle: {
        width: 1,
        color: ['#D6D9DF', '#D6D9DF'],
        type: [5, 10],
        dashOffset: 5,
      },
    },
  },
  dataset: [
    {
      source: [
        { name: '耐克', value: '200', unit: '元', year: '2020' },
        { name: '阿迪', value: '100', unit: '元', year: '2020' },
        { name: '锐步', value: '220', unit: '元', year: '2020' },
        { name: '彪马', value: '180', unit: '元', year: '2020' },
        { name: '斐乐', value: '150', unit: '元', year: '2020' },
        { name: '卡帕', value: '200', unit: '元', year: '2020' },
        { name: '茵宝', value: '240', unit: '元', year: '2020' },
        { name: '乐途', value: '240', unit: '元', year: '2020' },
        { name: '耐克', value: '220', unit: '元', year: '2021' },
        { name: '阿迪', value: '140', unit: '元', year: '2021' },
        { name: '锐步', value: '200', unit: '元', year: '2021' },
        { name: '彪马', value: '140', unit: '元', year: '2021' },
        { name: '斐乐', value: '150', unit: '元', year: '2021' },
        { name: '卡帕', value: '130', unit: '元', year: '2021' },
        { name: '茵宝', value: '200', unit: '元', year: '2021' },
        { name: '乐途', value: '210', unit: '元', year: '2021' },
      ],
    },
    {
      transform: {
        type: 'filter',
        config: { dimension: 'year', value: '2020' },
      },
    },
    {
      transform: {
        type: 'filter',
        config: { dimension: 'year', value: '2021' },
      },
    },
  ],
  series: [
    { // 背景
      type: 'pictorialBar',
      name: '销量',
      zlevel: 0,
      barWidth: 20,
      symbol: 'roundRect',
      symbolSize: [10, 20],
      symbolMargin: 2,
      symbolRepeat: 'fixed',
      silent: true,
      itemStyle: {
        color: '#FBF3EC',
      },
      datasetIndex: 1,
      seriesLayoutBy: 'column',
      encode: { y: 'name', x: 'value' },
    },
    { // 前景
      type: 'pictorialBar',
      name: '销量',
      zlevel: 1,
      barWidth: 20,
      symbol: 'roundRect',
      symbolSize: [10, 20],
      symbolMargin: 2,
      symbolRepeat: true,
      symbolClip: true,
      itemStyle: {
        color: '#FFA250',
      },
      datasetIndex: 1,
      seriesLayoutBy: 'column',
      encode: { y: 'name', x: 'value' },
    },
    { // 渐变
      type: 'bar',
      name: '销量',
      zlevel: 2,
      barWidth: 20,
      label: {
        show: true,
        position: 'inside',
        distance: 5,
        offset: [0, 2],
        fontWeight: 400,
        fontSize: 14,
        color: '#162440',
        formatter: '{a}年: {@value} {unit|{@unit}}',
        rich: {
          unit: {
            fontWeight: 400,
            fontSize: 12,
          },
        },
      },
      itemStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 1,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(255, 255, 255, 0.8)',
            },
            {
              offset: 1,
              color: 'rgba(255, 255, 255, 0.2)',
            },
          ],
          global: false,
        },
      },
      datasetIndex: 1,
      seriesLayoutBy: 'column',
      encode: { y: 'name', x: 'value' },
    },
  ],
};
