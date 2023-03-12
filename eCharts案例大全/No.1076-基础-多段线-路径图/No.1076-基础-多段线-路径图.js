option = option={
          backgroundColor: '#000000',
          xAxis: {
            type: 'value',
            show: true,
            max:30,
          },
          yAxis: {
            type: 'value',
             show: true,
            max:10,
          },
          grid: {
            left: '3%',
            right: '5%',
            top: '18%',
            bottom: '16%',
            containLabel: true
          },
          series: [{
              type: 'lines',
              coordinateSystem: 'cartesian2d',
              // symbol:'arrow',
              zlevel: -1,
              symbol: ['none', 'none'],
              polyline: true,
              silent: true,
              effect: {
                symbol: 'arrow',
                show: true,
                period: 3, // 箭头指向速度，值越小速度越快
                trailLength: 0.01, // 特效尾迹长度[0,1]值越大，尾迹越长重
                symbolSize: 10, // 图标大小
              },
              lineStyle: {
                width: 0,
                normal: {
                  opacity: 0.01, // 线的透明度-设置为0，隐藏线条
                  // curveness: 0.4, // 曲线的弯曲程度 ，多段线不支持弯曲
                  color: '#609fd4'
                }
              },
              data: [
                {
                  //  name:'11',
                  coords: [
                    [2, 2],
                    [8, 8],
                    [22, 2],
                    [16, 8],
                  ]
                },
               {
               //  name:'11',
                  coords: [
                    [10, 4],
                    [15, 4],
                  ]
                },
              ]
            },
            { // 这里必须有scatter，至少有一个点，路径图才会跑起来
              zlevel: 1,
              symbolSize: 20,
              data: [
                [2, 2],
                [8, 8],
                [16, 8],
                [22, 2],
              ],
              type: 'scatter'
            }
          ]
        }
