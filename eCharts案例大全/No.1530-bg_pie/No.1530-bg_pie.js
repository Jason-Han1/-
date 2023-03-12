option = {
  title: {
    text:'转运量\n占比',
    textStyle:{
      color:'#fff',
      fontSize:40,
      lineHeight:50
    },
    zlevel:100,
    top:'center',
    left:'center',
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    show:false,
    top: '5%',
    left: 'center'
  },
  series: [
    {
      type: 'pie',
      radius: ['0%', '80%'],
      zlevel: 8,
      itemStyle: {
        color: 'rgba(0, 118, 255, .16)'
      },
      tooltip: {
        show: false
      },
      label: {
        show: false
      },
      data: [100]
    },
    {
      type: 'pie',
      radius: [0, '30%'],
      zlevel: 9,
      itemStyle: {
          color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
            {
              offset: 0,
              color: 'rgba(8, 29, 98, 0.6)'
            },
            {
              offset: 1,
              color: 'rgba(8, 29, 98, 0.85)'
            }
          ])
      },
      label: {
        show: false
      },
      data: [100]
    },
    {
      name: 'Access From',
      type: 'pie',
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      color: ['#7A79FB', '#1BC122', '#0076FF'],
      zlevel: 10,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: false,
          fontSize: '40',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' }
      ]
    }
  ]
};
