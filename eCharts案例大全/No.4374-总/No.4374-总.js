option = {
  title: [
    {
      text: '总',
      subtext: '2019',
      left: '24.5%',
      top: '41%',
      textAlign: 'center',
      textStyle: {
        fontSize: 14,
      },
      subtextStyle: {
        fontSize: 22,
      },
    },
    {
      text: '总',
      subtext: '2018',
      left: '74.5%',
      top: '41%',
      textAlign: 'center',
      textStyle: {
        fontSize: 14,
      },
      subtextStyle: {
        fontSize: 22,
      },
    }
  ],
  tooltip: {
    trigger: 'item',
    formatter: v => `${v.name.replace('_legend1', '').replace('_legend2', '')} : ${(v.value/100000000).toFixed(2)}亿 (${v.percent}%)`,
  },
  legend: [
    {
      left: '13%',
      bottom: '10%',
      height: '10%',
      orient: 'horizontal',
      width: '30%',
      data: ['建筑业1_legend1', '建筑业2_legend1', '建筑业3_legend1', '建筑业4_legend1'],
      formatter: v => v.replace('_legend1', ''),
    },
    {
      right: '13%',
      bottom: '10%',
      height: '10%',
      orient: 'horizontal',
      width: '30%',
      data: ['建筑业1_legend2', '建筑业2_legend2', '建筑业3_legend2', '建筑业4_legend2'],
      formatter: v => v.replace('_legend2', ''),
    }
  ],
  series: [
    {
      type: 'pie',
      radius: [65, 100],
      center: ['25%', '45%'],
      data: [
        { value: 1100000000.11, name: '建筑业1_legend1' },
        { value: 2200000000.22, name: '建筑业2_legend1' },
        { value: 3300000000.33, name: '建筑业3_legend1' },
        { value: 4400000000.44, name: '建筑业4_legend1' }
      ],
      label: {
        formatter: v => `${v.name.replace('_legend1', '')}：${v.percent}%`,
      },
    },
    {
      type: 'pie',
      radius: [65, 100],
      center: ['75%', '45%'],
      data: [
        { value: 5500000000.55, name: '建筑业1_legend2' },
        { value: 6600000000.66, name: '建筑业2_legend2' },
        { value: 7700000000.77, name: '建筑业3_legend2' },
        { value: 8800000000.88, name: '建筑业4_legend2' }
      ],
      label: {
        formatter: v => `${v.name.replace('_legend2', '')}：${v.percent}%`,
      },
    }
  ]
}
