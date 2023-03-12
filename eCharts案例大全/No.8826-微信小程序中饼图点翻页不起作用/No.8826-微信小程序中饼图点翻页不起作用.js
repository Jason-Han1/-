 option = {
    backgroundColor: "#ffffff",
    color: ["#37A2DA", "#32C5E9", "#67E0E3", "#91F2DE", "#FFDB5C", "#FF9F7F", "#FF0000", "#00FF9F"],
    legend: {
      show:true,
      type: 'scroll',
      orient: 'vertical',
      right: 10,
      top: 20,
      bottom: 20,

      data: [
        '咳嗽  55人  61.54%',

        '呕吐  20人  13.99%',

        '感冒  10人  6.99%',

        '腹泻  20人  13.99%',

        '皮疹  38人  26.57%',

        '头痛  5人  26.57%',

        '红眼  15人  26.57%',

        '疱疹  22人  26.57%',
      ]
      //selected:data.selected
    },
    series: [{
      label: {
        normal: {
          // fontSize: 22,
          show: false
        }
      },
      type: 'pie',
      center: ['25%', '50%'],
      radius: [0, '60%'],
      data: [{
        value: 55,
        name: '咳嗽  55人  61.54%'
      }, {
        value: 20,
        name: '呕吐  20人  13.99%'
      }, {
        value: 10,
        name: '感冒  10人  6.99%'
      }, {
        value: 20,
        name: '腹泻  20人  13.99%'
      }, {
        value: 38,
        name: '皮疹  38人  26.57%'
      }, {
        value: 38,
        name: '头痛  5人  26.57%'
      }, {
        value: 38,
        name: '红眼  15人  26.57%'
      }, {
        value: 38,
        name: '疱疹  22人  26.57%'
      }, ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 2, 2, 0.3)'
        }
      }
    }]
  }