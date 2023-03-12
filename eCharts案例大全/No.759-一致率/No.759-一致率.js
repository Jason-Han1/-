option = {
  tooltip: {
    formatter: '{a} <br/>{b} : {c}%'
  },
  series: [
    {
      name: '油耗',
      type: 'gauge',
      detail: {
        formatter: '{value}'
      },
      data: [
        {
          value: 85,
          name: '一致率'
        }
      ]
    }
  ]
};