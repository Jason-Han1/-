option = {
  color:['#2982FF','#5E3FFF','#01D6A6'],
  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: ['50%', '98%'],
      center: ['50%', '50%'],
      roseType: 'area',
      startAngle:120,// 起始角度
      // itemStyle: {
      //   borderRadius: 0
      // },
      label: {
        show: false
      },
      emphasis: {
        label: {
          show: false
        }
      },
      animationType: 'scale',// expansion:展开 scale:缩放
      animationDuration: 100,
      animationEasing: 'cubicOut',// 初始化的缓动
      animationDelay(idx) {
        console.log(26,idx)
        return (1 - idx / 8) * 300;
      },
      data: [
        { value: 56, name: 'rose 1' },
        { value: 36, name: 'rose 2' },
        { value: 23, name: 'rose 3' },
      ]
    }
  ]
};