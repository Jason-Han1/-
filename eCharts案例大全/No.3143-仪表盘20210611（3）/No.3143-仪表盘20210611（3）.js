
    var dataArr = 60;

    //  color: [[1, '#cef0ff']],
option = {
      series: [
        // 圆饼
        {
          name: '小圆形',
          type: 'pie',
          hoverAnimation: false,
          legendHoverLink: false,
          radius: '50%',
          center: ["50%", "56%"],
          z: 5,
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [{
            value: 0,
            itemStyle: {
              normal: {
                color: "#1492FF32",
              },
            }
          }]
        },
        {
          type: "gauge",
          center: ['50%', '56%'],
          radius: '100%',
          z: 4,
          splitNumber: 10,
          axisLine: {
            lineStyle: {
              color: [[1, 'rgba(206,240,255,0)']],
              width: 50
            }
          },
          axisLabel: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          detail: {
            show: false,
          },
          title: { //标题
            show: false,
          },
          data: [{
            name: '',
            value: dataArr,
          }],
          itemStyle: {
            normal: {
              color: '#1492FF'
            }
          },
          pointer: {
            show: true,
            length: '80%',
            radius: '20%',
            width: 2, //指针粗细
          },
          animationDuration: 4000,
        },
        
        // 圆环
        {
          name: '小圆形',
          type: 'pie',
          hoverAnimation: false,
          legendHoverLink: false,
          radius: ['10%', '8%'],
          center: ["50%", "56%"],
          z: 5,
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [{
            value: 0,
            itemStyle: {
              normal: {
                color: "#1492FF",
              },
            }
          }]
        },
        {
          name: '外部刻度',
          type: 'gauge',
          center: ['50%', '56%'],
          radius: '100%',
          min: 0, //最小刻度
          max: 100, //最大刻度
          splitNumber: 10, //刻度数量
          startAngle: 225,
          endAngle: -45,
          axisLine: {
            show: true,
            lineStyle: {
              width: 4,
              color: [
                [
                  1,
                  new echarts.graphic.LinearGradient(
                      0,
                      0,
                      1,
                      0,
                      [
                        {
                          offset: 0.1,
                          color: '#06d8ff', // 50% 处的颜色
                        },
                        {
                          offset: 0.9,
                          color: '#1297ff', // 50% 处的颜色
                        },
                      ],
                      false
                  ),
                ]
              ],
            }
          }, //仪表盘轴线
          axisTick:{
              show:false
          },
          axisLabel: {
            show: false,
          }, //刻度标签。
          splitLine: {
            show: false,
            length: 15,
            lineStyle: {
              color: '#42E5FB', //用颜色渐变函数不起作用
            }
          },
          detail: {
            show: false
          },
          pointer: {
            show: true
          },
        },
        {
          type: "gauge",
          startAngle: 225,
          endAngle: -45,
          radius: "90%",
          center: ["50%", "56%"],
          axisLine: {
            lineStyle: {
              width: 10,
              color: [
                [
                  1,
                  new echarts.graphic.LinearGradient(
                      0,
                      0,
                      1,
                      0,
                      [
                        {
                          offset: 0.1,
                          color: '#FF8116', // 50% 处的颜色
                        },
                        {
                          offset: 0.35,
                          color: '#FFE200', // 50% 处的颜色
                        },
                        {
                          offset: 0.7,
                          color: '#2ED568', // 40% 处的颜色
                        },
                        {
                          offset: 0.9,
                          color: '#14B7FF', // 50% 处的颜色
                        },
                      ],
                      false
                  ),
                ]
              ],
            }
          },
          axisTick: {
            distance: -7,
            show: true,
            splitNumber: 5,
            lineStyle: {
              color: '#98d7ff', //用颜色渐变函数不起作用
              width: 2,
            },
            length: 4
          },
          axisLabel: {
            show: false,
          },
          splitLine: {
            show: false
          },
          pointer: {
            show: false,
            width: "2%",
            length: '50%',
          },
          itemStyle: {
            color: '#fff'
          },
          detail: {
            show: false,
            color: '#fff'
          },
          data: [{
            value: dataArr,
          }]
        }
      ]
    };