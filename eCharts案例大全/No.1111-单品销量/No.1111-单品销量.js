option = {
  legend: {top:'5%'},
  tooltip: {},
  dataset: {
    source: [
      ['product', '胃幽门', '早早孕', '甲乙流', 'HPV','艾滋梅毒胃幽门'],
      ['1月', 0, 0, 0, 6, 0],
      ['2月', 0, 0, 0, 4, 0],
      ['3月', 0, 0, 0, 14, 0],
      ['4月', 0, 0, 0, 116, 0],
      ['5月', 0, 0, 5, 12, 0],
      ['6月', 0, 31, 4, 354, 0],
      ['7月', 0, 106, 0, 66, 0],
      ['8月', 0, 14, 2, 388, 3],
      ['9月', 0, 2, 0, 229, 6],
      ['10月', 0, 0, 4, 421, 26],
      ['11月', 45, 12, 16, 6,78],
      ['12月', 65, 9, 27,112,59],
    ]
  },
  xAxis: { type: 'category' },
  yAxis: {},
  // Declare several bar series, each will be mapped
  // to a column of dataset.source by default.
  series: [{ type: 'bar',label: {
        show: true,
        position: 'top'
      },}, { type: 'bar',label: {
        show: true,
        position: 'top'
      } }, { type: 'bar',label: {
        show: true,
        position: 'top'
      } }, { type: 'bar',label: {
        show: true,
        position: 'top'
      } }, { type: 'bar',label: {
        show: true,
        position: 'top'
      } }]
};