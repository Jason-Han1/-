var gauge_value = 66;
      var myRate1 = 98;
      //中间
      var center1 = ['50%', '60%'];
      var radius1 = ['60%', '20%', '45%'];
      //左边
      var center2 = ['20%', '65%'];
      var radius2 = ['45%', '20%', '25%'];
      //邮编
      var center3 = ['80%', '65%'];
      var radius3 =  ['45%', '20%', '25%'];

      var option = {
        title: {
          x: "center",
          top: '20%',
          text: '蓄电池',
          textStyle: {
            fontWeight: 'normal',
            fontSize: 26,
            color: "#fff"
          },
        },
        tooltip: {
          show: true,
        },
        series: [{
          type: 'gauge',
          center: center1, // 默认全局居中
          radius: radius1[0],
          splitNumber: 10, //刻度数量
          min: 0,
          max: 100,
          startAngle: 200,
          endAngle: -20,

          axisLine: {
            show: true,
            lineStyle: {
              width: 2,
              shadowBlur: 0,
              color: [
                [1, '#fff']
              ]
            }
          },
          axisTick: {
            show: true,
            lineStyle: {
              color: '#fff',
              width: 1
            },
            length: 8,
            splitNumber: 5
          },
          splitLine: {
            show: true,
            length: 12,
            lineStyle: {
              color: '#fff',
            }
          },
          axisLabel: {
            distance: 8,
            textStyle: {
              color: "#fff",
              fontSize: "12",
              // fontWeight:"bold"
            }
          },
          pointer: { //仪表盘指针
            show: 0
          },
          detail: {
            formatter: '{value}%',
            textStyle: {
              color: "#fff",
              fontSize: "23",
              fontWeight: "normal"
            }
          },
          data: [{
            name: "",
            value: gauge_value
          }]
        }, {
          startAngle: 200,
          endAngle: -20,
          name: '剩余电量',
          type: 'gauge',
          center: center1, // 默认全局居中
          radius: radius1[1],
          min: 0,
          max: 100,
          splitNumber: 0,
          axisLine: { // 坐标轴线
            lineStyle: {
              color: [
                [0.66, '#dddddd'],
                [1, '#dddddd']
              ], // 属性lineStyle控制线条样式
              width: 4
            }
          },
          axisLabel: { // 坐标轴小标记
            textStyle: { // 属性lineStyle控制线条样式
              fontWeight: 'bolder',
              fontSize: 16,
              color: 'rgba(30,144,255,0)',
            }
          },
          splitLine: { // 分隔线
            length: 10, // 属性length控制线长
            lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
              width: 0,
              color: '#fff'
            }
          },
          pointer: { // 分隔线 指针
            color: '#fff',
            width: 0,
            length: 230
          },
          detail: {
            show: false
          },

        }, {
          name: '剩余电量',
          type: 'gauge',
          startAngle: 200,
          endAngle: -20,
          radius: radius1[2],
          center: center1, // 默认全局居中
          min: 0,
          max: 100,

          axisLine: {
            show: false,
            lineStyle: {
              width: 10,
              shadowBlur: 0,
              color: [
                [0.2, '#E43F3D'],
                [0.4, '#E98E2C'],
                [0.6, '#DDBD4D'],
                [0.8, '#7CBB55'],
                [1, '#9CD6CE']
              ]
            }
          },
          axisTick: {
            show: false,

          },
          splitLine: {
            show: false,
            length: 20,

          },

          axisLabel: {
            show: false
          },
          pointer: {
            show: true,
            width: 7
          },
          detail: {
            show: false,
            offsetCenter: [0, 0],
            textStyle: {
              fontSize: 30
            }
          },
          itemStyle: {
            normal: {
              color: "#e2dfe0",

            }
          },
          data: [{
            name: "",
            value: Math.floor(gauge_value)
          }]
        },
          //2-------------------------------------
          {
            type: 'gauge',
            center: center2, // 默认全局居中
            radius: radius2[0],
            splitNumber: 5, //刻度数量
            min: 0,
            max: 100,
            startAngle: 200,
            endAngle: 60,

            axisLine: {
              show: true,
              lineStyle: {
                width: 2,
                shadowBlur: 0,
                color: [
                  [1, '#fff']
                ]
              }
            },
            axisTick: {
              show: true,
              lineStyle: {
                color: '#fff',
                width: 1
              },
              length: 7,
              splitNumber: 5
            },
            splitLine: {
              show: true,
              length: 12,
              lineStyle: {
                color: '#fff',
              }
            },
            axisLabel: {
              distance: 8,
              textStyle: {
                color: "#fff",
                fontSize: "12",
                // fontWeight:"bold"
              }
            },
            pointer: { //仪表盘指针
              show: 0
            },
            detail: {
              formatter: '电压:{value}V',
              textStyle: {
                color: "#fff",
                fontSize: "16",
                fontWeight: "normal"
              }
            },
            data: [{
              name: "",
              value: '10'
            }]
          }, {
            startAngle: 200,
            endAngle: 60,
            name: '电压',
            type: 'gauge',
            center: center2, // 默认全局居中
            radius: radius2[1],
            min: 0,
            max: 100,
            splitNumber: 0,
            axisLine: { // 坐标轴线
              lineStyle: {
                color: [
                  [0.66, '#dddddd'],
                  [1, '#dddddd']
                ], // 属性lineStyle控制线条样式
                width: 2
              }
            },
            axisLabel: { // 坐标轴小标记
              textStyle: { // 属性lineStyle控制线条样式
                fontWeight: 'bolder',
                fontSize: 16,
                color: 'rgba(30,144,255,0)',
              }
            },
            splitLine: { // 分隔线
              length: 10, // 属性length控制线长
              lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                width: 0,
                color: '#fff'
              }
            },
            pointer: { // 分隔线 指针
              color: '#fff',
              width: 0,
              length: 230
            },
            detail: {
              show: false
            },

          }, {
            name: '电压',
            type: 'gauge',
            startAngle: 200,
            endAngle: 60,
            center: center2, // 默认全局居中
            radius: radius2[2],
            min: 0,
            max: 100,
            axisLine: {
              show: false,
              lineStyle: {
                width: 7,
                shadowBlur: 0,
                color: [
                  [0.2, '#E43F3D'],
                  [0.4, '#E98E2C'],
                  [0.6, '#DDBD4D'],
                  [0.8, '#7CBB55'],
                  [1, '#9CD6CE']
                ]
              }
            },
            axisTick: {
              show: false,

            },
            splitLine: {
              show: false,
              length: 20,

            },

            axisLabel: {
              show: false
            },
            pointer: {
              show: true,
              width: 5
            },
            detail: {
              show: false,
              offsetCenter: [0, 0],
              textStyle: {
                fontSize: 30
              }
            },
            itemStyle: {
              normal: {
                color: "#e2dfe0",

              }
            },
            data: [{
              name: "",
              value: Math.floor(gauge_value)
            }]
          },
          //3--------------------------
          {
            type: 'gauge',
            center: center3, // 默认全局居中
            radius: radius3[0],
            splitNumber: 5, //刻度数量
            min: 0,
            max: 100,
            startAngle: 120,
            endAngle: -20,

            axisLine: {
              show: true,
              lineStyle: {
                width: 2,
                shadowBlur: 0,
                color: [
                  [1, '#fff']
                ]
              }
            },
            axisTick: {
              show: true,
              lineStyle: {
                color: '#fff',
                width: 1
              },
              length: 7,
              splitNumber: 5
            },
            splitLine: {
              show: true,
              length: 12,
              lineStyle: {
                color: '#fff',
              }
            },
            axisLabel: {
              distance: 8,
              textStyle: {
                color: "#fff",
                fontSize: "12",
                // fontWeight:"bold"
              }
            },
            pointer: { //仪表盘指针
              show: 0
            },
            detail: {
              formatter: '电流:{value}V',
              textStyle: {
                color: "#fff",
                fontSize: "16",
                fontWeight: "normal"
              }
            },
            data: [{
              name: "",
              value: '10'
            }]
          }, {
            startAngle: 120,
            endAngle: -20,
            name: '电流',
            type: 'gauge',
            center: center3, // 默认全局居中
            radius: radius3[1],
            min: 0,
            max: 100,
            splitNumber: 0,
            axisLine: { // 坐标轴线
              lineStyle: {
                color: [
                  [0.66, '#dddddd'],
                  [1, '#dddddd']
                ], // 属性lineStyle控制线条样式
                width: 2
              }
            },
            axisLabel: { // 坐标轴小标记
              textStyle: { // 属性lineStyle控制线条样式
                fontWeight: 'bolder',
                fontSize: 16,
                color: 'rgba(30,144,255,0)',
              }
            },
            splitLine: { // 分隔线
              length: 10, // 属性length控制线长
              lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                width: 0,
                color: '#fff'
              }
            },
            pointer: { // 分隔线 指针
              color: '#fff',
              width: 0,
              length: 230
            },
            detail: {
              show: false
            },

          }, {
            name: '电流',
            type: 'gauge',
            startAngle: 120,
            endAngle: -20,
            center: center3, // 默认全局居中
            radius: radius3[2],
            min: 0,
            max: 100,
            axisLine: {
              show: false,
              lineStyle: {
                width: 7,
                shadowBlur: 0,
                color: [
                  [0.2, '#E43F3D'],
                  [0.4, '#E98E2C'],
                  [0.6, '#DDBD4D'],
                  [0.8, '#7CBB55'],
                  [1, '#9CD6CE']
                ]
              }
            },
            axisTick: {
              show: false,

            },
            splitLine: {
              show: false,
              length: 20,

            },

            axisLabel: {
              show: false
            },
            pointer: {
              show: true,
              width: 5
            },
            detail: {
              show: false,
              offsetCenter: [0, 0],
              textStyle: {
                fontSize: 30
              }
            },
            itemStyle: {
              normal: {
                color: "#e2dfe0",

              }
            },
            data: [{
              name: "",
              value: Math.floor(gauge_value)
            }]
          }
        ]
      };