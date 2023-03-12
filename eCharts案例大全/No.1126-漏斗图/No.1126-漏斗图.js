const colors = ['rgba(233, 34, 23, 0.5)', 'rgba(3, 134, 23, 0.5)', 'rgba(233, 233, 23, 0.5)']
option = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c}%'
  },
  legend: {
    icon: 'rect',
    itemWidth: 14,
    itemHeight: 14,
    data: ['Show', 'Click', 'Visit', 'Inquiry', 'Order']
  },
  series: [
    {
      name: 'Funnel',
      type: 'funnel',
      color: colors,
      left: '10%',
      top: 60,
      bottom: 60,
      width: '80%',
      min: 0,
      max: 100,
      minSize: '0%',
      maxSize: '100%',
      sort: 'ascending',
      gap: 10,
      label: {
        show: true,
        position: 'inside'
      },
      labelLine: {
        length: 10,
        lineStyle: {
          width: 1,
          type: 'solid'
        }
      },
      emphasis: {
        label: {
          fontSize: 20
        }
      },
      data: [
        { value: 60, name: 'Visit' },
        { value: 40, name: 'Inquiry' },
        { value: 20, name: 'Order' },
      ]
    }
  ]
};