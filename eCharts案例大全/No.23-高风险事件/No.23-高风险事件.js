option = {
  series: [
    {
      type: 'gauge',
      progress: {
        show: true,
        itemStyle:{
          color: '#F2895B'
        },
        width: 36
      },
      axisLine: {
        lineStyle: {
          width: 36
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false,
        length: 15,
        lineStyle: {
          width: 2,
          color: '#999'
        }
      },
      axisLabel: {
        show: false,
        distance: 25,
        color: '#999',
        fontSize: 20
      },
      anchor: {
        show: false,
        showAbove: true,
        size: 25,
        itemStyle: {
          borderWidth: 10
        }
      },
      title: {
        show: true,
        fontSize: 36,
        offsetCenter : [0, '50%']
      },
      detail: {
        valueAnimation: true,
        formatter: '{value}%',
        fontSize: 60,
        offsetCenter: [0, '10%']
      },
      pointer:{
        show:false
      },
      data: [
        {
          value: 70,
          name: '高风险事件'
        }
      ]
    }
  ]
};