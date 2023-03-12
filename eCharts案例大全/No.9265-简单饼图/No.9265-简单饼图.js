
  var datasets = [75, 25],
      option = {
          /*backgroundColor:'#091018',*/
          title: {
              text: datasets[1] / (datasets[0] + datasets[1]) * 100 + '%',
              right: '30%',
              top: '46%',
              textStyle: {
                  color: 'rgba(0, 237, 212, 1)',
                  fontSize: 35,
                  fontWeight: "bold",
                  fontFamily: 'DS Digital'
              }
          },
          series: {
              type: 'pie',
              clockWise: false,
              radius: [0, '62%'],
              hoverAnimation: false,
              silent: true,
              labelLine: false,
              center: ['30%', '50%'],
              data: [{
                  value: 75,
                  name: '',
                  itemStyle: {
                      /*  normal: {
                       color:{
                       type: 'linear',
                       x: 0,
                       y: 0,
                       x2: 0,
                       y2: 1,
                       colorStops: [{
                       offset: 1,
                       color: 'rgba(0, 251, 255, 1)' // 0% 处的颜色
                       }, {
                       offset: 0,
                       color: 'rgba(0, 153, 232, 1)' // 100% 处的颜色
                       }],
                       },
                       borderWidth:3,
                       borderColor: ''
                       }*/
                      color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                              offset: 0,
                              color: "rgba(0, 251, 255, 1)" // 0% 处的颜色
                          },
                          {
                              offset: 1,
                              color: "rgba(0, 153, 232, 1)" // 100% 处的颜色
                          }
                      ], false),
                  }
              }, {
                  value: 25,
                  itemStyle: {
                      normal: {
                          color: 'rgba(1, 66, 78, 1)', // 0% 处的颜色,
                         /* borderColor: 'rgba(236, 83, 49, 1)',
                          borderWidth: 2,*/
                          shadowColor: 'rgba(236, 83, 49, 0.5)',


                      }
                  }
              }]
          }
      }