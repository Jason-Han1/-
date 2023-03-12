   var bottom1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAeCAYAAABqpJ3BAAAD+0lEQVRYhc2YQY8VRRDHfz0zu+5DFjVoAgFBwiZrVi+eJHBhIcYziYGEg0e4EPwGnvATeCImJh69ePHg0XDYGCKJF2Q1bEB2FwjJCsRldx/73rzm0N3PevW65828hYR/Munpqurqqurq7poxc0s2AwxgcQjvkobgGaDnWwktK8dofSndQU/m21HjTCGMMmJgUJQrJeZ2l4MduAocA65PGi7O5CxXGJZygltdfgWYK5gXhgfEjNZ6egVQAm8Qj6im0YHvgFO+e3rb8j3wecToUQj6DS5QVTKxMRboFJ7RAyYZ9E6uBuL9UzXJMaDwOjIG00sbMJB+cwWfeXpBZIVIrwLAdhgI0MGtgo7E0CoY+N3CSdG/7g0Pyy/TIOWEjmqM3vP2hMAEWj/6erJtPyDzjuXAhHjPgGyP4SsD14BNA9emDZc8L/eymXgkLRdtruYqlFzh5858q+3q9KMxtzSw594hnY+vC0rgSegUirkFvEU8HyuPM9/qPA201LGZ4lXNsS6FtANtYDduQ0uDJGIbNZajYdLQ1wdET/Dle9CTKX0Z8Nw/SQcAngHvCQOkI6GfJfh6AweZWPTlHSMvU9nPlI5nWnnMgTZuk7QivFFIpcPLwBbOtgHEHAB4Cky/IkPGxdMYMbbk4DzdZPjIk61R/Hy5ZH6xy8Jil4XlknniR2fVk5LdJBJ9SK8AwBrwNuoi+6vLDwAfFnwpyAZgw3LF+v2zYbnC/yXHQD2l5omWLIIXbImiyoHnwH/AXkUPp8VEZIw0JFw8O8Vj1MkzMKG6yDQmgY9Ip9qArtWS4+uWr4Fy2vDNwZyFRqYOwwI38XVPdNIRDgAcBvYnlNfFqIst9W3xCPinSnGdJX6AcyCUGDJn5Xuskkzx9EdRbB+UwP1RxtVxoAM8BD6oIZsyJoZYQCTuI4q2FOrkNsAqLmKycgxHXKGeiQhNjimA4k7JhVtdfrlTcjEiY/2cI1HXgRK4JwwIpXZ4csWTjsnzvC/btpwFWm3LmYjee0D3ZToALiJdhqMcavaJCK9Q9L7jLcNPQLtl+FnJdICVukbVOYUkDgGfxPSoflWpLekxuT9wK1ALTS+aFWAWVyfJUrjqW7jJCbQO/T8ctdDUAQssAicELVdtHaRkF2lYzY5z1a/iKsN3Adu27NuyzJTwfgkHeq70mOpZdgFTAAbaxriCLIO1HB7ksDJluN0yPHIi/EuD3A9ougcC9q9bLm9YzvUsR8ZREJAZ7r5p+HHa8C3u0mwEY+143x/mbx4C+8YaPIzHdnaoaKyFJseoxnngxg7GB9wAvhh38E5WIOAocBxXtX4MHMHtj93ALi+zifueXQPu4irMP4HfgCUAOzuWGbwAtU4rt2uO5/4AAAAASUVORK5CYII="
      var imgList = []
        var iconData = []
        let color = [
          ['rgb(0,216,255)', 'rgb(13,114,135)'],
          ['rgb(19,225,227)', 'rgb(15,143,145)'],
          ['rgb(36,149,255)', 'rgb(18,85,153)'],
          ['rgb(74,105,255)', 'rgb(25,47,168)'],
        ]
        // 绘制左侧面
        const CubeLeft = echarts.graphic.extendShape({
          shape: {
            x: 0,
            y: 0
          },
          buildPath: function (ctx, shape) {
            // 会canvas的应该都能看得懂，shape是从custom传入的
            const xAxisPoint = shape.xAxisPoint
            // console.log(shape)
            const c0 = [shape.x + 17, shape.y]
            const c1 = [shape.x - 15, shape.y]
            const c2 = [xAxisPoint[0] - 15, xAxisPoint[1]]
            const c3 = [xAxisPoint[0] + 17, xAxisPoint[1]]
            ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath()
          }
        })
// 绘制右侧面
        const CubeRight = echarts.graphic.extendShape({
          shape: {
            x: 0,
            y: 0
          },
          buildPath: function (ctx, shape) {
            // console.log(shape)
            const xAxisPoint = shape.xAxisPoint
            // console.log(xAxisPoint)
            const c1 = [shape.x + 17, shape.y]
            const c2 = [xAxisPoint[0] + 17, xAxisPoint[1]]
            const c3 = [xAxisPoint[0] + 25, xAxisPoint[1] - 5]
            const c4 = [shape.x + 25, shape.y - 8]
            ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
          }
        })
// 绘制顶面
        const CubeTop = echarts.graphic.extendShape({
          shape: {
            x: 0,
            y: 0
          },
          buildPath: function (ctx, shape) {
            const c1 = [shape.x + 17, shape.y]
            const c2 = [shape.x + 25, shape.y - 8] //右点
            const c3 = [shape.x - 5, shape.y - 8]
            const c4 = [shape.x - 15, shape.y]
            ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
          }
        })
// 注册三个面图形
        echarts.graphic.registerShape('CubeLeft', CubeLeft)
        echarts.graphic.registerShape('CubeRight', CubeRight)
        echarts.graphic.registerShape('CubeTop', CubeTop)
        const VALUE = [12,21,36,11]
        const xData = ['A','B','C','D']
        VALUE.forEach((item, index) => {
          iconData.push({
            value:item,
            symbol:  "image://" + bottom1 ,
          })
        })
        
        var option = {
            backgroundColor:'rgb(8,25,34)',
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            },
            formatter: function (params, ticket, callback) {
              const item = params[1]
              return item.name + ' : ' + item.value;
            },
            backgroundColor: "rgba(7,55,63,0.7)",
            borderColor: "rgba(7,55,63,0.7)",
            textStyle: {
              color: '#fff',
              textAlign: 'left',
            },
          },
          grid: {
            left: '0%',
            right: '0%',
            top: '15%',
            bottom: '10%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            data: xData,
            axisLine: {
              show: false,
              lineStyle: {
                color: 'white'
              }
            },
            axisTick: {
              show: false,
              length: 9,
              alignWithLabel: true,
              lineStyle: {
                color: '#7DFFFD'
              }
            },
            axisLabel: {
              fontSize: 16,
              interval: 0
            }
          },
          yAxis: {
            show: false,
            type: 'value',
            axisLine: {
              show: true,
              lineStyle: {
                color: 'white'
              }
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              fontSize: 14,
              interval: 0
            },
            boundaryGap: ['20%', '20%']
          },
          series: [{
            type: 'custom',
            renderItem: (params, api) => {
              // console.log(params)
              const location = api.coord([api.value(0), api.value(1)])
              return {
                type: 'group',
                children: [{
                  type: 'CubeLeft',
                  shape: {
                    api,
                    xValue: api.value(0),
                    yValue: api.value(1),
                    x: location[0],
                    y: location[1],
                    xAxisPoint: api.coord([api.value(0), 0])
                  },
                  style: {
                    fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      // color: 'rgb(0,216,255)'
                      color: color[params.dataIndexInside][0]
                    },
                      {
                        offset: 1,
                        // color: 'rgb(0,216,255)'
                        color: color[params.dataIndexInside][0]
                      }
                    ])
                  }
                }, {
                  type: 'CubeRight',
                  shape: {
                    api,
                    xValue: api.value(0),
                    yValue: api.value(1),
                    x: location[0],
                    y: location[1],
                    xAxisPoint: api.coord([api.value(0), 0])
                  },
                  style: {
                    fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: color[params.dataIndexInside][1]
                    },
                      {
                        offset: 1,
                        color: color[params.dataIndexInside][1]
                      }
                    ])
                  }
                }, {
                  type: 'CubeTop',
                  shape: {
                    api,
                    xValue: api.value(0),
                    yValue: api.value(1),
                    x: location[0],
                    y: location[1],
                    xAxisPoint: api.coord([api.value(0), 0])
                  },
                  style: {
                    fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: color[params.dataIndexInside][1]
                    },
                      {
                        offset: 1,
                        color: color[params.dataIndexInside][1]
                      }
                    ])
                  }
                }]
              }
            },
            data: VALUE,
         
          },
            {
              type: 'pictorialBar',
              label: {
                normal: {
                  show: true,
                  position: 'top',
                  distance: -50,
                  formatter: (e) => {
                    switch (e.name) {
                      case '县级林长':
                        return VALUE[0]
                      case '乡级林长':
                        return VALUE[1]
                      case '村级林长':
                        return VALUE[2]
                    }
                  },
                  fontSize: 14,
                  color: '#fff',
                  fontWeight:'bold',
                  // offset: [2, -25]
                }
              },
              tooltip: {},
              z: 2,
              symbolPosition: 'end',
              symbolSize:[40,25],
              symbolOffset: [5, '-28'],
              itemStyle: {
                shadowColor: 'rgba(0,0,0,.3)',
                shadowBlur: 10,
                shadowOffsetY: 1,
                shadowOffsetX: 1,
              },
              data:iconData
            }
          ]
        }
        // chart.setOption(option)
        var app = {
          currentIndex: -1,
        };
        setInterval(function () {
          var dataLen = option.series[0].data.length;

          // 取消之前高亮的图形
          chart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: app.currentIndex
          });
          app.currentIndex = (app.currentIndex + 1) % dataLen;
          //console.log(app.currentIndex);
          // 高亮当前图形
          chart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: app.currentIndex,
          });
          // 显示 tooltip
          chart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: app.currentIndex
          });


        }, 2000);
        // }
      