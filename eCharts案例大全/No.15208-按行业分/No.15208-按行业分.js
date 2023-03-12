  var option = {
      title: {
          text: '按行业分'
      },
      tooltip: {},
      legend: {
          top: 20,
          itemWidth: 12,
          itemHeight: 12,
          data: [],
          textStyle: {
              color: '#fff'
          }
      },
      radar: {
          radius: '60%',
          splitNumber: 8,
          axisLine: {
              lineStyle: {
                  color: '#fff',
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
                  color: 'rgba(127,95,132,.3)',
                  opacity: 1,
                  shadowBlur: 45,
                  shadowColor: 'rgba(0,0,0,.5)',
                  shadowOffsetX: 0,
                  shadowOffsetY: 15,
              }
          },
          indicator: [{
              name: '采矿业',
              max: 1000000
          }, {
              name: '电力、热力、燃气及水生产和供应业',
              max: 1000000
          }, {
              name: '房地产业',
              max: 1000000
          }, {
              name: '教育',
              max: 1000000
          }, {
              name: '科研和技术服务',
              max: 1000000
          }, 
           {
              name: '卫生及社会工作',
              max: 1000000
          },
           {
              name: '文体娱乐',
              max: 1000000
          },
                     {
              name: '信息技术业',
              max: 1000000
          },
                     {
              name: '制造业',
              max: 1000000
          },
          {
              name: '农林渔牧业',
              max: 1000000
          }]
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
              value: [5473, 32150, 130000, 9666, 21500, 390623, 12000, 56000, 173250,915675],
              name: '实际开销（Actual Spending）',
          }]
      }],
      color: ['#ef4b4c', '#b1eadb'],
      backgroundColor: {
          type: 'radial',
          x: 0.4,
          y: 0.4,
          r: 0.35,
          colorStops: [{
              offset: 0,
              color: '#895355' // 0% 处的颜色
          }, {
              offset: .4,
              color: '#593640' // 100% 处的颜色
          }, {
              offset: 1,
              color: '#39273d' // 100% 处的颜色
          }],
          globalCoord: false // 缺省为 false
      }
  };