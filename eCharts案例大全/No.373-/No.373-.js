var colors = ['#d48265', '#61a0a8', '#d48265', '#c23531']
var state = ['开机时间']
option = {
        background: 'rgba(64, 203, 255, 0.3)',
        color: colors,
        tooltip: {
          formatter: function(params) {
            return params.name + ':' + params.value[1] + '时' + '~' + params.value[2] + '时'
          }
        },
        grid: {
          left: '0%',
          right: '5%',
          top: '10%',
          bottom: '10%',
          containLabel: true
        },
        xAxis: {
          min: 0, // x轴零刻度对应的实际值
          max: 23,
          axisLabel: {
            show: true,
            textStyle: {
              color: '#000'
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            'show': true,
            lineStyle: {
              color: 'rgba(64, 203, 255, 0.3)'
            }
          }
        },
        yAxis: {
          show: false,
          data: ['WAN0']
        },
        series: [
          // 用空bar来显示四个图例
          { name: state[0], type: 'bar', data: [] },
          {
            type: 'custom',
            renderItem: function(params, api) {
              var categoryIndex = api.value(0)
              var start = api.coord([api.value(1), categoryIndex])
              var end = api.coord([api.value(2), categoryIndex])
              var height = 15

              return {
                type: 'rect',
                shape: echarts.graphic.clipRectByRect({
                  x: start[0],
                  y: start[1] - height / 2,
                  width: end[0] - start[0],
                  height: height
                }, {
                  x: params.coordSys.x,
                  y: params.coordSys.y,
                  width: params.coordSys.width,
                  height: params.coordSys.height
                }),
                style: api.style()
              }
            },
            encode: {
              x: [1, 2],
              y: 0
            },
            data: [
              {
                itemStyle: {
                  normal: {
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                      offset: 0,
                      color: '#FF595D' // 0% 处的颜色
                    }, {
                      offset: 1,
                      color: '#FF55A8' // 100% 处的颜色
                    }], false)
                  }
                },
                name: '开机时间',
                value: [9, 9, 18]
              },
              {
                itemStyle: {
                  normal: {
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                      offset: 0,
                      color: '#05F6BF' // 0% 处的颜色
                    }, {
                      offset: 1,
                      color: '#14EFFF' // 100% 处的颜色
                    }], false)
                  }
                },
                name: '开机时间',
                value: [9, 20, 22]
              }
            ]
          }
        ]
      }
