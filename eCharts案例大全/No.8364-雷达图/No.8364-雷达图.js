  var option = {
      backgroundColor:"rgba(41, 60, 85,.9)",
        color: ['#3dc5ff'], // 图例的颜色
      title: {
          text: '雷达图'
      },
      tooltip: {},
      legend: {
          top: 20,
          itemWidth: 12,
          itemHeight: 12,
          data: ['预算分配（Allocated Budget）'],
          textStyle: {
              color: '#fff'
          }
      },
      radar: {
           name: { // 每个角的字体颜色
            textStyle: {
                color: '#dddee0'
            }
        },
          radius: 160,
        startAngle: 60,
         axisLine: {
            lineStyle: {
                color: '#3c4462',
            }, // 背景网格线颜色
        },
          splitLine: {
            show: true,
            lineStyle: {
                width: 1,
                color: ['#3c4462']
                // 图表背景网格线的颜色
            }
        },
          splitArea: { // 雷达图背景颜色
            areaStyle: {
                color: ['#061037']
            }
        },
          indicator: [{
              name: '1',
              max: 6000,
              min:1
          }, {
              name: '2',
              max: 16000
          }, {
              name: '3',
              max: 30000
          }, {
              name: '4',
              max: 35000
          }, {
              name: '5',
              max: 50000
          }, {
              name: '6',
              max: 25000
          }]
      },
      series: [{
          name: '',
          type: 'radar',
          symbolSize: 4,
          itemStyle: {
            
            emphasis: {
                // color: 各异,
                lineStyle: { // 鼠标移上的网边框样式
                    width: 4
                }
            },
        },
           areaStyle: { // 雷达网区域样式设置
                normal: {
                    opacity: 0.9,
                    color: new echarts.graphic.RadialGradient(0.5,
                        0.5, 1, [{
                            color: '#010b33',
                            offset: 0
                        }, {
                            color: '#134371',
                            offset: 0.3
                        }])
                }
            },
          data: [{
              value: [5000, 7000, 12000, 11000, 15000, 14000],
              name: '',
          }]
      }],
     
  };