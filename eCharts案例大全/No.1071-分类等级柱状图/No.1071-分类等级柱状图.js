option = {
  legend: {},
  tooltip: {},
  dataset: {
    dimensions: ['product', '2015', '2016', '2017'],
    source: [
      { product: 'Matcha Latte', 2016: 85.8 },
      { product: 'Milk Tea', 2015: 83.1 },
      { product: 'Cheese Cocoa', 2017: 82.5 },
      { product: 'Walnut Brownie', 2017: 39.1 },
      { product: 'Walnut Brownie33', 2016: 39.1 },
    ],
  },
  xAxis: { type: 'category' },
  yAxis: [
    {
      data: ['2015', '2016', '2017'],
    },
    {
      type: 'value',
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
    },
  ],
  // Declare several bar series, each will be mapped
  // to a column of dataset.source by default.
  series: [
    { type: 'bar', barGap: '-100%', yAxisIndex: 1 },
    { type: 'bar', yAxisIndex: 1 },
    { type: 'bar', yAxisIndex: 1 },
  ],
};
