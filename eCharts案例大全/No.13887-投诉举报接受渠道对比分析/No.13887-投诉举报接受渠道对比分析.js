var option = {
      backgroundColor:'#fff',
      title: {
          text: '投诉举报接受渠道对比分析'
      },
      tooltip: {
          trigger: 'axis'
      },
      
      
      radar: {
          indicator: [{
              text: '电话',
              max: 5000
              
          }, {
              text: '网络',
              max: 5000
          }, {
              text: '信件',
              max: 5000
          }, {
              text: '走访',
              max: 5000
          }, {
              text: '其他',
              max: 5000
          }],
            radius: 90,
          splitNumber: 9,
          name: {
              textStyle: {
                  color: '#201E1F'
              }
          },
          axisLine: {
              lineStyle: {
                  color: '#B3DBF5',
                  width: 2,
                  type: 'dotted'
              },
          },
          splitLine: {
              lineStyle: {
                  color: ['#B3DBF5', 'transparent', 'transparent', 'transparent'],
                  width: 1
              }
          },
          splitArea: {
              areaStyle: {
                  
                  color: ['#C1C1C1', '#fff']
              }
          }
      },
      series: [{
          type: 'radar',
          tooltip: {
              trigger: 'item'
          },
          symbol: 'circle',
          symbolSize: 5,
          radius:'',
          itemStyle: {
              normal: {
                  areaStyle: {type: 'default'},
                  color: '#C6E2FF',
                  borderColor: '#5ac3bd',
                  shadowColor:'rgba(0,0,0,0.5)'
              }
          },
          data: [{
              value: [4075, 4364, 1115, 3750, 2700],
              name:'投诉举报接受渠道'
          }]
      }, ]
  };