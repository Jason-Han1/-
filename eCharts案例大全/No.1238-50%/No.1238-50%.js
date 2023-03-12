option = {
  color:['#2397f6', '#eff4ff'],
  // tooltip: {
  //   trigger: 'item'
  // },
  title: {
        top: '50%',
        left: 'center',
        text: '50%',
        subtext: '电子签发率',
        textStyle: {
          fontSize: 16
        },
        subtextStyle: {
          fontWeight: 'normal',
          fontSize: 14
      }
  },
  // legend: {
  //   top: '5%',
  //   left: 'center'
  // },
  series: [
    {
      // name: 'Access From',
      type: 'pie',
      radius: ['50%', '70%'],
      // center: ['50%', '50%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        // position: 'center'
      },
      // emphasis: {
      //   label: {
      //     show: true,
      //     fontSize: '40',
      //     fontWeight: 'bold'
      //   }
      // },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
      ]
    }
  ]

};