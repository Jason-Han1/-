option = {
    legend: {},
    tooltip: {},
  dataset: {
      dimensions: ['product', '2015', '2016', '2017','2018'],
      source: [
        { product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7,'2018': 72.4, },
        { product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1,'2018': 72.4, },
        { product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5,'2018': 72.4, },
      ]
    },

    xAxis: [
      { type: 'category', gridIndex: 0 },
      { type: 'category', gridIndex: 1 }
    ],
    yAxis: [{ gridIndex: 0 }, { gridIndex: 1 }],
    grid: [{ bottom: '55%' }, { top: '55%' }],
    series: [
      // These series are in the first grid.
      { type: 'bar',  },
      { type: 'bar', },
      { type: 'bar', },
      { type: 'bar', xAxisIndex: 1, yAxisIndex: 1,},
    ]
  };