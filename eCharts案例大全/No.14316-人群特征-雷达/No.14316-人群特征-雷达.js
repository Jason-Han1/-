  var option = {
      title: {
          text: '按行业分',
          color:'#fff'
      },
      tooltip: {},
      legend: {
          top: 20,
          itemWidth: 12,
          itemHeight: 12,
          data: [],
          textStyle: {
              color: '#70a1fa'
          }
      },
      radar: {
          radius: '60%',
          splitNumber: 8,
          axisLine: {
              lineStyle: {
                  color: '#70a1fa',
                  opacity: .2
              }
          },
          splitLine: {
              lineStyle: {
                  color: '#fff',
                  opacity: .2
              }
          },
          splitArea: {
              areaStyle: {
                  color: 'rgba(42,57,148,.3)',
                  opacity: 1,
                  shadowBlur: 45,
                  shadowColor: 'rgba(0,0,0,.5)',
                  shadowOffsetX: 0,
                  shadowOffsetY: 15,
              }
          },
          indicator: [{
              name: '母婴',
              max: 2000
          }, {
              name: '教育',
              max: 2000
          }, {
              name: '个护美容',
              max: 2000
          }, {
              name: '阅读',
              max: 2000
          }, {
              name: '家居',
              max: 2000
          }, 
           {
              name: '工作',
              max: 2000
          },
           {
              name: '资讯',
              max: 2000
          },
                     {
              name: '汽车',
              max: 2000
          },
                     {
              name: '社交',
              max: 2000
          },
                     {
              name: '金融理财',
              max: 2000
          },
          {
              name: '网购',
              max: 2000
          },
          {
              name: '健康',
              max: 2000
          },{
              name: '生活',
              max: 2000
          },{
              name: '商旅出行',
              max: 2000
          },{
              name: '娱乐',
              max: 2000
          },{
              name: '通讯',
              max: 2000
          },{
              name: '影音',
              max: 2000
          },{
              name: '房产',
              max: 2000
          },{
              name: '手机工具',
              max: 2000
          }, ]
      },
      series: [{
          name: '预算 vs 开销（Budget vs spending）',
          type: 'radar',
          symbolSize: 0,
          areaStyle: {
              normal: {
                  shadowBlur: 13,
                  shadowColor: 'rgba(0,0,0,.2)',
                  shadowOffsetX: 0,
                  shadowOffsetY: 10,
                  opacity: 1
              }
          },
          data: [{
              value: [1900, 612.5, 600, 327.27, 225, 222.73, 207.69, 200, 196.15,195.83,188.89,179.07,177.42,166.67,165.91,164.58,150,145.89],
              name: '实际开销（Actual Spending）',
          }]
      }],
      color: ['#70a1fa', '#ff0000'],
 
      backgroundColor:  '#141e60'
  };