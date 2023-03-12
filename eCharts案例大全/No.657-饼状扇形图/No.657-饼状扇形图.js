function get_gradual_by_horizontal (c1,c2) {
     return new echarts.graphic.LinearGradient(0, 0, 1, 0, [
         {
             offset: 0,
             color: c1
         }, {
             offset: 1,
             color: c2
         }
     ])
 }
data = [{
     name: '报警',
     value: '9',
     percent: '3%'
 }, {
     name: '预警',
     value: '4',
     percent: '2%'
 }, {
     name: '故障',
     value: '3',
     percent: '2%'
 }, {
     name: '维修',
     value: '3',
     percent: '2%'
 }, {
     name: '撤防',
     value: '16',
     percent: '6%'
 }, {
     name: '屏蔽',
     value: '8',
     percent: '3%'
 }, {
     name: '正常',
     value: '107',
     percent: '94%'
 }]
 let colors = [{
     c1: 'rgba(202, 185, 28, 0.4)',
     c2: 'rgba(254, 240, 44, 1)'
 }, {
     c1: 'rgba(19, 130, 209, 0.02)',
     c2: 'rgba(68, 177, 255, 1)'
 }, {
     c1: 'rgba(111, 124, 132, 0.4)',
     c2: 'rgba(182, 202, 216, 1)'
 }, {
     c1: 'rgba(185, 45, 0, 0.02)',
     c2: 'rgba(255, 156, 76, 1)'
 }, {
     c1: 'rgba(221, 129, 1, 0.4)',
     c2: 'rgba(253, 197, 56, 1)'
 }, {
     c1: 'rgba(162, 120, 60, 0.2)',
     c2: 'rgba(244, 191, 103, 1)'
 }, {
     c1: 'rgba(69, 79, 128, 0.4)',
     c2: 'rgba(97, 145, 224, 1)'
 }]
	option = {
      angleAxis: {
          type: 'category',
          // data: ['100%', '80~100%', '60~80%', '60%以下', '未学习']
      },
      radiusAxis: {
          min: 0,
          max: 10,
          interval: 2
      },
      polar: {},
      tooltip: {
          confine: true,
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
          show: true,
          x:'left',
          y: 'top',
          textStyle: {
              color: 'rgba(165, 184, 185, 1)'
          },
          formatter: (item) => {
              let cureent = data.find(cur => cur.name === item)
              return `${cureent.name}  ${cureent.value}   ${cureent.percent}`
          }
      },
      toolbox: {
          show: true,
          feature: {
              mark: {
                  show: true
              },
              magicType: {
                  show: true,
                  type: ['pie', 'funnel']
              },
          }
      },
      calculable: true,
      series: [
          {
              type: 'pie',
              radius: '55%',
              center: ['50%', '50%'],
              roseType: 'area',
              label: {
                  show: false
              },
              itemStyle: {
                  normal: {
                      shadowBlur: 60,
                      color: (params) => {
                          let {c1, c2} = colors[params.dataIndex]
                          return get_gradual_by_horizontal(c1, c2);
                      },
                  },
              },
              data: data
          }
      ]
  }
		