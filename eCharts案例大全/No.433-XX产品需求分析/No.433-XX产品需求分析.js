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
  },
]

const series = []
const xAxis = []
const legendData = []
const prefixKey = 'qty_horizon'

result.forEach((item, index) => {
  const keys = Object.keys(item)
  const data = []
  legendData.push(item.sop_line_type_name)
  keys.forEach((key) => {
    if (key.startsWith(prefixKey)) {
      data.push(item[key])
      if (index === 0) {
        xAxis.push(`${key.replace(prefixKey, '')}月`)
      }
    }
  })
  series.push({
    name: item.sop_line_type_name,
    type: 'bar',
    data,
  })
})

console.log(series, xAxis, legendData)

option = {
    title: {
        text: 'XX产品需求分析',
    },
    legend: {
        data: legendData,
    },
    xAxis: {
        data: xAxis,
    },
    yAxis: {},
    series,
};
