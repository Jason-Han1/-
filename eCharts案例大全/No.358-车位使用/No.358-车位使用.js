option = {
  color: ["#0099FF", "#00FF00"],
  title: {
      show: true,
      text: '总:1000',
      top: 'middle',
      left: 'center',
      textStyle: {
          fontSize: 14,
          color: '#0AF4F4'
      }
  },
  tooltip: {
    trigger: 'item',
    extraCssText: 'box-shadow: 0 0 3px rgba(100, 100, 100, 0.8)'
  },
  series: [
    {
      name: 'A区车位',
      type: 'pie',
      radius: ['95%', '55%'],
      avoidLabelOverlap: true,
      itemStyle: {
        borderRadius: 15,
        borderColor: 'rgba(200,200,200,0.3)',
        borderWidth: 0,
        shadowColor: 'rgba(200, 200, 200, 0.5)',
        shadowBlur: 5
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: false,
          fontSize: '30',
          fontWeight: 'normal'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 782, name: '已用车位' },
        { value: 218, name: '剩余车位' }
      ]
    }
  ]
};
