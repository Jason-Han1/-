option = {
  legend: {
    top: 'bottom',
    orient  : 'vertical'
  },
  toolbox: {
    show: false,
  },

    tooltip: {
    trigger: 'item',
    formatter: '{b}: {d}%',
    backgroundColor: 'rgba(47,37,198,0.75)',
     borderColor :'#2880FF',
      borderWidth: 1,
      textStyle:{
         color  :'#fff'
      }
  },
  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: ['40%','75%'],
      center: ['50%', '40%'],
      roseType: 'area',
      label: {show:false},
      labelLine: {show:false},
       selectedOffset :30,
      selectedMode: true,
      itemStyle: {
        borderRadius: 8
      },
      data: [
        { value: 40, name: '现金管理' },
        { value: 38, name: '固定收益' },
        { value: 32, name: '保险产品' },
        { value: 30, name: '混合策略' },
        { value: 28, name: '权益投资' },
        { value: 26, name: '另类投资' },

      ]
    }
  ]
};