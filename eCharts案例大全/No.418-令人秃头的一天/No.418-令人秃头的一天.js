        const CubeLeft = echarts.graphic.extendShape({// 绘制后面
          shape: {
            x: 0,
            y: 0
          },
            buildPath: function (ctx, shape) {
            const xAxisPoint = shape.xAxisPoint
            const c1 = [shape.x + 5, xAxisPoint[1] -5 ]//左下角 +是往下
            const c2 = [shape.x + 5, shape.y-10] //左上角 -往上
            const c3 = [shape.x+30 , shape.y -10]  //右上角
            const c4 = [shape.x + 30, xAxisPoint[1] - 5]//右下角
            ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
          }
        })

// 绘制前面
        const CubeTop = echarts.graphic.extendShape({
          shape: {
            x: 0,
            y: 0
          },
          
          buildPath: function (ctx, shape) {
            // 会canvas的应该都能看得懂，shape是从custom传入的
            const xAxisPoint = shape.xAxisPoint
            console.log(shape)
            const c0 = [shape.x-2 , shape.y-5] //右上角
            const c1 = [shape.x+25 , shape.y-5] //左上角
            const c2 = [xAxisPoint[0] +25, xAxisPoint[1]] //左下角
            const c3 = [xAxisPoint[0]-2 , xAxisPoint[1]]  //右下角
            ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath()
          }
          

        })
// 注册2个面图形
        echarts.graphic.registerShape('CubeLeft', CubeLeft)
        echarts.graphic.registerShape('CubeTop', CubeTop)
        const VALUE = [12,21,36,11]
        const xData = ['A','B','C','D']
        var option = {
            backgroundColor:'#0C265F',
            tooltip: {
              show:false,
            trigger: 'axis',
            axisPointer: {
            type: 'line',
        },
            
          },
          grid: {
            left: '5%',
            right: '0%',
            top: '15%',
            bottom: '10%',
          },
          xAxis: {
            type: 'category',
            data: xData,
            axisLine: {
              show: true,
              lineStyle: {
                color: '#0A3757'
              },
            },
            axisTick: {
              show: false,
              lineStyle: {
                color: '#7DFFFD'
              }
            },
            
            axisLabel: {
              fontSize: 16,
              interval: 0,
              show: true,
              textStyle: {
              color: '#0ED1D7',
            }
            }
          },
          yAxis: {
            show: true,
            type: 'value',
            axisLine: {
              show: true,
              lineStyle: {
                color: '#0A3757'
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
              interval: 0,
              show: true,
              textStyle: {
              color: '#7A94A9',
            }
            },
            boundaryGap: ['0.2', '0.2']
          },
          series: [{
            type: 'custom',
            renderItem: (params, api) => {
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
                      color: '#0E799B'
                    },
                      {
                        offset: 1,
                        color: '#055295'
                      }
                    ])
                  }
                }, 
                {
                  type: 'CubeTop', //前面的长方形
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
                      color: "#13F0F6"
                    },
                      {
                        offset: 1,
                        color:"#029AED"
                      }
                    ])
                  }
                }]
              }
            },
            labelLine:{
              show:false
            },
            label:{
              normal:{
                show:true,
                position:'top'
              }
            },
            data: VALUE,
            
          },{
            type:'bar',
            data:VALUE,
            
            label:{
              normal:{
                show:true,
                position:'top',
                fontSize: 15,
                color: '#0B9FC7',
                offset: [10, -10]
              }
            },
            color:'rgba(0,0,0,0)',
            // barWidth:10
          }
          ]
        }
