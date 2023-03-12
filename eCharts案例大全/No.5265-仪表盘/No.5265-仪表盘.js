  option = {
      tooltip: {
          formatter: "{a} <br/>计划完成: " + 1 + "%</br>实际完成：" + 2 + "%"
      },

      series: [{
              name: "设计进度",
              min: 0,
              max: 100,
              splitNumber: 10,
              type: 'gauge',
              axisLine: {
                  lineStyle: {
                      width: 15,
                      color: [
                          [1, new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                  offset: 0.1,
                                  color: "#FFA500"
                              },
                              {
                                  offset: 0.5,
                                  color: "#FFA500"
                              },
                              {
                                  offset: 1,
                                  color: "#FFA500"
                              }
                          ])]
                      ]
                  }
              },
              splitLine: {
                  length: -10
              },
              axisLabel: { // 坐标轴小标记
                  distance: -20,
                  textStyle: { // 属性lineStyle控制线条样式
                      color: '#000',
                      fontSize: 15, //改变仪表盘内刻度数字的大小
                      shadowColor: '#000', //默认透明
                  }
              },
              axisTick: {
                  splitNumber: 5
              },
              pointer: {
                  width: 5
              },
              title: {
                  offsetCenter: ['-5%', '70%'],
                  textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                      fontWeight: 'bolder',
                      fontSize: 16,
                    
                  }
              },
              detail: {
                  show: false
              },

              data: [{
                  value: 45,
                  name: '计划完成'
              }]
          },
          {
              name: "设计进度",
              type: 'gauge',
              radius: '50%',
              axisLine: {
                  lineStyle: {
                      width: 15,
                      color: [
                          [0.1, '#203add'],
                          [1, '#203add']
                      ],
                  }

              },
              splitLine: {
                  length: 10,
                  color: '#203add'
              },
              axisLabel: { // 坐标轴小标记
                  show: false,
                  textStyle: { // 属性lineStyle控制线条样式
                      color: '#000',
                      fontSize: 15, //改变仪表盘内刻度数字的大小
                      shadowColor: '#000', //默认透明
                  }
              },
              axisTick: {
                  splitNumber: 5,
                  color: '#0d1758'
              },
              pointer: {
                  width: 5
              },
              title: {
                  offsetCenter: ['-5%', '70%'],
                  textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                      fontWeight: 'bolder',
                      fontSize: 16,
                  }
              },
              detail: {
                  show: false
              },
              data: [{
                  value: 40,
                  name: '实际完成'
              }]
          }
      ]
  };