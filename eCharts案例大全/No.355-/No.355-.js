const result = [
    {
        sop_id: 28,
        period_code: '2022年01月第01期',
        sop_line_type: 'SUPPLY',
        sop_line_type_name: '供应能力(ATP)',
        qty_horizon1: 80,
        qty_horizon2: 120,
        qty_horizon3: 160,
        qty_horizon4: 200,
        qty_horizon5: 240,
        qty_horizon6: 280,
        qty_horizon7: 0,
        qty_horizon8: 0,
        qty_horizon9: 0,
        qty_horizon10: 0,
        qty_horizon11: 0,
        qty_horizon12: 0,
        qty_horizon13: 0,
        qty_horizon14: 0,
        qty_horizon15: 0,
        qty_horizon16: 0,
        qty_horizon17: 0,
        qty_horizon18: 0,
    },
    {
        sop_id: 28,
        period_code: '2022年01月第01期',
        sop_line_type: 'SOP_NOW',
        sop_line_type_name: '本期S&OP计划',
        qty_horizon1: 1538,
        qty_horizon2: 1440,
        qty_horizon3: 1532,
        qty_horizon4: 1624,
        qty_horizon5: 1716,
        qty_horizon6: 1808,
        qty_horizon7: 1900,
        qty_horizon8: 1992,
        qty_horizon9: 2084,
        qty_horizon10: 2176,
        qty_horizon11: 2268,
        qty_horizon12: 2360,
        qty_horizon13: 2452,
        qty_horizon14: 2544,
        qty_horizon15: 2636,
        qty_horizon16: 2728,
        qty_horizon17: 2820,
        qty_horizon18: 2912,
    },
    {
        sop_id: 28,
        period_code: '2022年01月第01期',
        sop_line_type: 'DEMAND_NOW',
        sop_line_type_name: '本期需求计划',
        qty_horizon1: 1348,
        qty_horizon2: 1440,
        qty_horizon3: 1532,
        qty_horizon4: 1624,
        qty_horizon5: 1716,
        qty_horizon6: 1808,
        qty_horizon7: 1900,
        qty_horizon8: 1992,
        qty_horizon9: 2084,
        qty_horizon10: 2176,
        qty_horizon11: 2268,
        qty_horizon12: 2360,
        qty_horizon13: 2452,
        qty_horizon14: 2544,
        qty_horizon15: 2636,
        qty_horizon16: 2728,
        qty_horizon17: 2820,
        qty_horizon18: 2912,
    },
];

const dimensions = []
const source = []
const deleteKeys = ['sop_id', 'period_code', 'sop_line_type']
const series = []

result.forEach((v, index) => {
  const keys = Object.keys(v)
  const item = {}
  keys.forEach((key) => {
    if (!deleteKeys.includes(key)) {
      item[key] = v[key]
      if (index === 0) {
        dimensions.push(key)
        series.push({ type: 'bar' })
      }
    }
  })
  source.push(item)
})

option = {
    legend: {},
    tooltip: {},
    dataset: {
        dimensions: dimensions,
        source: source,
        // dimensions: ['product', '2015', '2016', '2017'],
        // source: [
        //     { product: 'Matcha Latte', 2015: 43.3, 2016: 85.8, 2017: 93.7 },
        //     { product: 'Milk Tea', 2015: 83.1, 2016: 73.4, 2017: 55.1 },
        //     { product: 'Cheese Cocoa', 2015: 86.4, 2016: 65.2, 2017: 82.5 },
        // ],
    },
    xAxis: { type: 'category' },
    yAxis: {},
    series,
};
