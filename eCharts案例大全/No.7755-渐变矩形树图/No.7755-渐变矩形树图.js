var testData = [
      {
          name: "赞扬\n\n(83.7%)",
          itemStyle:{
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 1,
              y2: 1,
              colorStops: [{
                  offset: 0, color: '#00C1F4' // 0% 处的颜色
              }, {
                  offset: 1, color: '#3A91FF' // 100% 处的颜色
              }],
              globalCoord: false // 缺省为 false
          }
          },
          value: 41.52,
          
      },
      {
          name: "恐惧\n\n(15.4%)",
          value: 9.51,
          itemStyle:{
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 1,
              y2: 1,
              colorStops: [{
                  offset: 0, color: '#F8A26D' // 0% 处的颜色
              }, {
                  offset: 1, color: '#D43838' // 100% 处的颜色
              }],
              globalCoord: false // 缺省为 false
          }
          },
      }, {
          name: "愤怒\n(10.8%)",
          value: 10.5,
          itemStyle:{
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 1,
              y2: 1,
              colorStops: [{
                  offset: 0, color: '#FFBF4A' // 0% 处的颜色
              }, {
                  offset: 1, color: '#FFBF4A' // 100% 处的颜色
              }],
              globalCoord: false // 缺省为 false
          }
          },
      },
  ]

myChart.setOption(option = {
    calculable: false,
      series: [{
          type: 'treemap',
          left:'0',
          right:'0',
          top:'0',
          bottom:'o',
          label: {
              show: true,
              formatter: '{b}',
              fontSize: 17,
              ellipsis: true      
          },
          breadcrumb:{
              show:false
          },
          itemStyle: {
              
              normal: {
                  //borderColor: '#EFEFEF',
                  borderColor: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 1,
              y2: 1,
              colorStops: [{
                  offset: 0, color: '#F8F8F8' // 0% 处的颜色
              }, {
                  offset: 1, color: '#EFEFEF' // 100% 处的颜色
              }],
              globalCoord: false // 缺省为 false
          },
                  borderWidth:8,
                  shadowColor: '#18AEF9',
                  shadowOffsetX: 2,
                  shadowOffsetY: 2,
                  shadowBlur: 4,   
              }
          },
          data: testData,
          roam: false,
          nodeClick: false,
          breadcrumb: {show: false},
      }]
  });