      var data1 = [{
          text: '工商月入安检数(万元)',
          value: '588,10',
          color: '#5dd054'
      }, {
          text: '工商月入安检率',
          value: '97%',
          color: '#097ff9'
      }, {
          text: '民用月入安检数(万元)',
          value: '43610',
          color: '#6E55F1'
      },{
          text: '民用月入安检率(万元)',
          value: '93%',
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
           title: {
	        text: '2019年工商用户和民用户安检数对比',
	        textStyle: {
	        	 align: 'center',
	            color: '#fff',
	            fontSize: 20,
	        },
	        top: '10%',
	        left: '8%',
	    },
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
              center: ['15%', '40%'],
              hoverAnimation: false,
              label: {
                  normal: {
                      position: 'center'
                  }
              },
               itemStyle: {
            normal: {
                shadowColor: 'rgba(0, 0.3, 0.4, 0.8)',
                shadowBlur: 9,
            }
        },
              data: dataFormat(data1[0])
          }, {
              type: 'pie',
              radius: [65, 73],
              center: ['39%', '40%'],
              hoverAnimation: false,
              label: {
                  normal: {
                      position: 'center'
                  }
              },
               itemStyle: {
            normal: {
                shadowColor: 'rgba(0, 0.3, 0.4, 0.8)',
                shadowBlur: 9,
            }
        },
              data: dataFormat(data1[1])
          },
           {
              type: 'pie',
              radius: [65, 73],
              center: ['62%', '40%'],
              hoverAnimation: false,
              label: {
                  normal: {
                      position: 'center'
                  }
              },
               itemStyle: {
            normal: {
                shadowColor: 'rgba(0, 0.3, 0.4, 0.8)',
                shadowBlur: 9,
            }
        },
              data: dataFormat(data1[2])
          },{
              type: 'pie',
              radius: [65, 73],
              center: ['85%', '40%'],
              hoverAnimation: false,
              label: {
                  normal: {
                      position: 'center'
                  }
              },
               itemStyle: {
            normal: {
                shadowColor: 'rgba(0, 0.3, 0.4, 0.8)',
                shadowBlur: 9,
            }
        },
              data: dataFormat(data1[3])
          }],
          graphic: {
              elements: [{
                      type: 'group',
                      left: '7%',
                      bottom: '40%',
                      z: 100,
                      children: childrenFun(data1[0].text)
                  },
                  {
                      type: 'group',
                      left: '31%',
                      bottom: '40%',
                      z: 100,
                      children: childrenFun(data1[1].text)
                  },
                  
                  {
                      type: 'group',
                      left: '55%',
                      bottom: '40%',
                      z: 100,
                      children: childrenFun(data1[2].text)
                  },
                  {
                      type: 'group',
                      left: '78%',
                      bottom: '40%',
                      z: 100,
                      children: childrenFun(data1[3].text)
                  }
              ]
          }
      };