// prettier-ignore
const dataset = [
  {
    name: "Ⅰ"
,    value: [0, 0, 1],
    itemStyle: { color: '#D1E8FF' },
  },  
  {
    name: "Ⅰ",
    value: [1, 0, 1],
    itemStyle: { color: '#D1E8FF' },
  },  
  {
    name: "I",
    value: [2, 0, 1],
    itemStyle: { color: '#D1E8FF' },
  },  
  {
    name: "Ⅰ",value: [0, 1, 1],
    itemStyle: { color: '#D1E8FF' },
  },  
  {
    name: "Ⅰ",
    value: [0, 2, 1],
    itemStyle: { color: '#D1E8FF' },
  },  
];

option = {
  tooltip: {
    position: 'top'
  },
  grid: {
    height: '50%',
    top: '10%'
  },
  xAxis: {
    type: 'category',
    data: [ '1', '2', '3', '4', '5'],
    splitArea: {
      show: true
    }
  },
  yAxis: {
    type: 'category',
    data:  [ '1', '2', '3', '4', '5'],
    splitArea: {
      show: true
    }
  },
  series: [
    {
      name: 'Punch Card',
      type: 'heatmap',
      data: dataset,
      label: {
        show: true,
        formatter: '{b}',
        fontSize: 14,
        fontWeight: "bold",
        color: 'rgba(22, 36, 64, 0.4)'
      },
      tooltip: { show: false }
    }
  ]
};