option = {
    backgroundColor:'#031d33',
    grid: {
      top: '10%',
      bottom: '10%'
    },
        xAxis: {
          data: ['10/5', '10/10', '10/15', '10/20', '10/25', '10/30', '11/5'],
          boundaryGap: false,
          axisLine: {
            show: false //隐藏X轴轴线
          },
          axisTick: {
            show: false //隐藏X轴轴线
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "rgba(48, 65, 79, 0.5)",
              width: 1
            }
          },
          axisLabel: {
            show: true,
            margin: 14,
            fontSize: 16,
            textStyle: {
              color: "#d1d1d1" //X轴文字颜色
            }
          }
        },
        yAxis: [
          {
            type: 'value',
            name: '单位 / 条',
            nameTextStyle: {
              color: "#d1d1d1",
              padding: [0, 0, 0, -20]
            },
            gridIndex: 0,
            min: 0,
            max: 30,
            interval: 5,
            splitLine: {
              show: true,
              lineStyle: {
                color: "rgba(48, 65, 79, 0.5)",
                width: 1
              }
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false,
            },
            axisLabel: {
              show: true,
              margin: 14,
              fontSize: 16,
              textStyle: {
                color: "#d1d1d1"
              }
            }
          }
        ],
         series: [{
        name: '',
        type: 'line',
        smooth: false,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 3
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(5, 70, 76, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(5, 70, 76, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(50,172,196)',
                borderColor: 'rgba(50,172,196,0.27)',
                borderWidth: 12

            }
        },
        data: [0,3,3,3,3,3,3]
    }]
        
      }
