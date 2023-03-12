option = {
  legend: {
    top: 'bottom'
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: [50, 250],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 60
      },
      data: [
        { value: 40, name: 'rose 1' },
        { value: 40, name: 'rose 2' },
        { value: 40, name: 'rose 3' },
        { value: 40, name: 'rose 4' },
        { value: 40, name: 'rose 5' },
      ]
    },
    {
      name: 'xx',
      type: 'pie',
      radius: [40, 10],
      center: ['30%', '60%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 10
      },
      data: [
        { value: 60, name: '1' },
        { value: 60, name: '2' },
        { value: 60, name: '3' },
      ]
    },
    {
      name: 'xxx',
      type: 'pie',
      radius: [40, 10],
      center: ['38%', '24%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 10
      },
      data: [
        { value: 20, name: '4' },
        { value: 30, name: '5' },
        { value: 14, name: '6' },
      ]
    }
  ]
};