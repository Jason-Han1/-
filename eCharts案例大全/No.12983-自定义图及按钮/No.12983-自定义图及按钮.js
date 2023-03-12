      var data1 = [{
          text: '本月扶持金额(万元)',
          value: '588,10',
          color: '#5dd054'
      }, {
          text: '本年扶持金额(万元)',
          value: '14,131',
          color: '#097ff9'
      }, {
          text: '扶持总金额(万元)',
          value: '12,131',
          color: '#ff6804'
      }];

      function dataFormat(v = {
          value: '12345,12',
          color: '#5dd054'
      }) {
          return [{
              value: 0,
              name: v.value,
             itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                                offset: 0,
                                color: '#00feff'
                            },
                            {
                                offset: 1,
                                color: v.color
                            }
                        ]
                    )
                }
            },
              label: {
                  normal: {
                      textStyle: {
                          fontSize: 30,
                          fontWeight: 500,
                          color: '#fff'
                      }
                  }
              }
          }]
      }

      function childrenFun(str = '按钮') {
          return [{
              type: 'rect',
              left: 'center',
              top: 'center',
              shape: {
                  width: 150,
                  height: 40,
                  r: 20
              },
              style: {
                  fill: '#4709f9',
                  shadowColor:'#f909a1',
                  shadowOffsetX:3,
                  shadowOffsetY:3,
                  lineWidth:2,
                  shadowBlur:10
                //   stroke: '#00feff'
              }
          }, {
              type: 'text',
              left: 'center',
              top: 'center',
              style: {
                  fill: '#fff',
                  text: str,
                  font: '14px Microsoft YaHei'
              }
          }]
      }


      option = {
          backgroundColor:'#04184A',
          legend: {
              show: false
          },
          tooltip: {
              show: false
          },
          series: [{
              type: 'pie',
              radius: [65, 73],
              center: ['18%', '40%'],
              hoverAnimation: false,
              label: {
                  normal: {
                      position: 'center'
                  }
              },
              data: dataFormat(data1[0])
          }, {
              type: 'pie',
              radius: [65, 73],
              center: ['50%', '40%'],
              hoverAnimation: false,
              label: {
                  normal: {
                      position: 'center'
                  }
              },
              data: dataFormat(data1[1])
          }, {
              type: 'pie',
              radius: [65, 73],
              center: ['82%', '40%'],
              hoverAnimation: false,
              label: {
                  normal: {
                      position: 'center'
                  }
              },
              data: dataFormat(data1[2])
          }],
          graphic: {
              elements: [{
                      type: 'group',
                      left: '11%',
                      bottom: '40%',
                      z: 100,
                      children: childrenFun(data1[0].text)
                  },
                  {
                      type: 'group',
                      left: '43%',
                      bottom: '40%',
                      z: 100,
                      children: childrenFun(data1[1].text)
                  },
                  {
                      type: 'group',
                      left: '75%',
                      bottom: '40%',
                      z: 100,
                      children: childrenFun(data1[2].text)
                  }
              ]
          }
      };