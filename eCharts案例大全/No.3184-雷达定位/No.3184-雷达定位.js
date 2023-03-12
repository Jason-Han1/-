option = {
  title: { show: false },
  polar: {},
  angleAxis: {
    zlevel: 1,
    z: 1,
    min: 0,
    max: 360,
    interval: 45,
    axisLabel: { color: '#AAAAAA' },
    axisTick: { show: false },
    axisLine: { lineStyle: { color: '#3668AB', width: 8 } },
    splitLine: { lineStyle: { color: '#FAFFA9' } },
  },
  radiusAxis: {
    zlevel: 1,
    z: 1,
    max: 150,
    splitNumber: 2,
    axisLabel: { show: false },
    axisLine: { show: false },
    axisTick: { show: false },
    minorTick: { show: false },
    splitLine: { lineStyle: { color: '#088A29' } },
  },
  tooltip: {
    show: true,
    trigger: 'item',
    formatter: function (params) {
      let html =
        '<div><div>角度：' +
        params.value[1] +
        '°</div>' +
        '<div>偏距：' +
        params.value[0] +
        '米</div>' +
        '<div>时间：' +
        params.value[2] +
        '</div></div>';
      return html;
    },
  },
  series: [
    {
      coordinateSystem: 'polar',
      zlevel: 2,
      z: 2,
      name: 'scatter',
      type: 'scatter',
      data: [
        {
          value: [50, 281.3099, '2021/06/06 01:32'],
          itemStyle: { color: 'red' },
          emphasis: { itemStyle: { borderColor: '#fff', borderWidth: 2 } },
        },
        {
          value: [4.06, 284.0362, '2021/06/06 03:32'],
          itemStyle: { color: 'red' },
          emphasis: { itemStyle: { borderColor: '#fff', borderWidth: 2 } },
        },
        {
          value: [3.06, 315, '2021/06/06 05:32'],
          itemStyle: { color: 'red' },
          emphasis: { itemStyle: { borderColor: '#fff', borderWidth: 2 } },
        },
        {
          value: [100, 36, '2021/06/06 05:36'],
          itemStyle: { color: 'red' },
          emphasis: { itemStyle: { borderColor: '#fff', borderWidth: 2 } },
        },
        {
          value: [4.42, 270, '2021/06/06 07:32'],
          itemStyle: { color: 'red' },
          emphasis: { itemStyle: { borderColor: '#fff', borderWidth: 2 } },
        },
        {
          value: [4.09, 303.6901, '2021/06/06 09:32'],
          itemStyle: { color: 'red' },
          emphasis: { itemStyle: { borderColor: '#fff', borderWidth: 2 } },
        },
        {
          value: [3.67, 326.3099, '2021/06/06 11:32'],
          itemStyle: { color: 'red' },
          emphasis: { itemStyle: { borderColor: '#fff', borderWidth: 2 } },
        },
        {
          value: [2.25, 296.5651, '2021/06/06 13:32'],
          itemStyle: { color: 'red' },
          emphasis: { itemStyle: { borderColor: '#fff', borderWidth: 2 } },
        },
        {
          value: [7.78, 336.8014, '2021/06/06 15:32'],
          itemStyle: { color: 'red' },
          emphasis: { itemStyle: { borderColor: '#fff', borderWidth: 2 } },
        },
        {
          value: [5.27, 291.8014, '2021/06/06 17:32'],
          itemStyle: { color: 'red' },
          emphasis: { itemStyle: { borderColor: '#fff', borderWidth: 2 } },
        },
        {
          value: [4.78, 281.3099, '2021/06/06 19:32'],
          itemStyle: { color: 'red' },
          emphasis: { itemStyle: { borderColor: '#fff', borderWidth: 2 } },
        },
        {
          value: [4.42, 281.3099, '2021/06/06 20:02'],
          itemStyle: { color: 'red' },
          emphasis: { itemStyle: { borderColor: '#fff', borderWidth: 2 } },
        },
        {
          value: [5.38, 291.8014, '2021/06/06 21:32'],
          itemStyle: { color: 'red' },
          emphasis: { itemStyle: { borderColor: '#fff', borderWidth: 2 } },
        },
        {
          value: [5.63, 279.4623, '2021/06/06 23:32'],
          itemStyle: { color: 'black' },
          emphasis: { itemStyle: { borderColor: '#fff', borderWidth: 2 } },
        },
      ],
    },
    {
      type: 'pie',
      radius: '76%',
      zlevel: 0,
      z: 0,
      silent: true,
      data: [0],
      itemStyle: {
        color: {
          colorStops: [
            { offset: 0, color: '#DEEAF7' },
            { offset: 1, color: '#3668AB' },
          ],
          x: 0.5,
          y: 0.5,
          r: 0.5,
          type: 'radial',
          global: false,
        },
      },
      labelLine: { show: false },
    },
    {
      type: 'pie',
      radius: ['75.5%', '78.8%'],
      zlevel: 1,
      z: 1,
      silent: true,
      data: [0],
      itemStyle: { color: '#D9DEE8' },
      labelLine: { show: false },
    },
  ],
};
