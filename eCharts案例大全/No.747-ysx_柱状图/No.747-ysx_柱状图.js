//5.0以下版本效果更好
 var xData = (function () {
        var data = []
        //最大月数
        for (var i = 1; i < 7; i++) {
          data.push(i + '月')
        }
        return data
      })()
option = {
  backgroundColor:'#010429',
        title: {
          text: '数量',
          left: '1%',
          top: '1%',
          textStyle: {
            color: '#fff'
            //  type: 'dashed',
          }
        },
        // backgroundColor: '#020D20',
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
            textStyle: {
              color: '#fff'
            }
          },
          backgroundColor: '#05294D',
          borderColor: '#135469',
          borderWidth: 2
          // padding: [20, 20, 20, 20]
        },
        grid: {
          left: '4%',
          top: '15%',
          right: '3%',
          bottom: '18%',
          // borderWidth: 0,
          // top: '20%',
          // left: '10%',
          // bottom: '25%',
          // width: '88%', // 宽度
          // height: '58%', // 高度
          textStyle: {
            color: '#fff'
          }
        },
        legend: {
          top: '0%',
          // right: '10%',
          textStyle: {
            fontSize: '25px',
            fontFamily: 'MicrosoftYaHeiUI',
            color: '#FFFFFF'
          },
          // itemWidth: 28,
          // itemHeight: 28,
          data: [
            // {
            //     name: '周转量',
            //     icon:
            //         'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAA1ElEQVR4Xu2WsQ2AMBADP4ghYBtGZxsYAhHEAMQ19tF+g+/PSVqFfy08fwEAA8IJUIFwATgEqQAVCCdABcIF4BagAlQgnAAVCBeAW4AKUIFwAlQgXABuASpABcIJjCtw9O3vfOaquta2f+UYApjO3v8O4P3/e2mfOQEw2jAGpFeg0g9BhwNQZeAlqAi5zzHAfcMqHwYoQu5zDHDfsMqHAYqQ+xwD3Des8mGAIuQ+xwD3Dat8GKAIuc8xwH3DKh8GKELucwxw37DKhwGKkPscA9w3rPI9drIYQbytq9EAAAAASUVORK5CYII=',
            // },
            // {
            //     name: '趋势',
            //     icon:
            //         'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA1UlEQVRYR+2UMQ7CMAxFvxdyFtqVhREpZ+AEnIyRM1RiY2NsOQgTXYzSUlVNm9ZWhwrJnvPjpxfHhI2LNu4PAzADZsAM/I+BT5FnAF8JqBl0cb6sNFu0z/N751+nLisy0ISJb2DkTZBQgukshYjyT+ergxhgEA6NQwUQIcQoH4HPGpgKtwZ+NhYglpq3MhM1F5ZcLDmTBJCE1wImZ0DSvAuvfaKRAU3zJIRySAczUBfZg4GjdMInIZTfNALY3wFy6xaNblGJFpFm42nPGoAZMANmwAx8ASjjyiGj/fCxAAAAAElFTkSuQmCC',
            // },
          ]
        },
        dataZoom: [
          {
            type: 'slider',
            xAxisIndex: 0,
            startValue: 0,
            endValue: 12,
            filterMode: 'filter',
            height: 3,
            bottom: 20,
            handleSize: '300%',
            handleIcon:
              'image://data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTg2NDg1MzkzMjI2IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ3MzUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyIDBDMjI2Ljc0Mjg1NyAwIDAgMjI2Ljc0Mjg1NyAwIDUxMnMyMjYuNzQyODU3IDUxMiA1MTIgNTEyIDUxMi0yMjYuNzQyODU3IDUxMi01MTItMjI2Ljc0Mjg1Ny01MTItNTEyLTUxMnogbTAgODc3LjcxNDI4NmMtMjA0LjggMC0zNjUuNzE0Mjg2LTE2MC45MTQyODYtMzY1LjcxNDI4Ni0zNjUuNzE0Mjg2czE2MC45MTQyODYtMzY1LjcxNDI4NiAzNjUuNzE0Mjg2LTM2NS43MTQyODYgMzY1LjcxNDI4NiAxNjAuOTE0Mjg2IDM2NS43MTQyODYgMzY1LjcxNDI4Ni0xNjAuOTE0Mjg2IDM2NS43MTQyODYtMzY1LjcxNDI4NiAzNjUuNzE0Mjg2eiIgZmlsbD0iIzRBQkRDRiIgcC1pZD0iNDczNiI+PC9wYXRoPjxwYXRoIGQ9Ik01MTIgNTEybS0zNjUuNzE0Mjg2IDBhMzY1LjcxNDI4NiAzNjUuNzE0Mjg2IDAgMSAwIDczMS40Mjg1NzIgMCAzNjUuNzE0Mjg2IDM2NS43MTQyODYgMCAxIDAtNzMxLjQyODU3MiAwWiIgZmlsbD0iI0ZGRkZGRiIgcC1pZD0iNDczNyI+PC9wYXRoPjwvc3ZnPg==',
            handleStyle: {
              color: '#0E1557'
            },
            backgroundColor: '#1c3a75',
            fillerColor: '#295fcc',
            borderColor: 'transparent',
            textStyle: {
              color: 'transparent'
            },
            dataBackground: {
              areaStyle: {
                opacity: 0
              },
              lineStyle: {
                opacity: 0
              }
            }
          }
        ],
        xAxis: [
          {
            type: 'category',
            axisLine: {
              lineStyle: {
                color: 'rgba(255,255,255,.5)'
              }
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitArea: {
              show: false
            },
            axisLabel: {
              interval: 0,
              color: 'rgba(255,255,255,0.7)',
              //X轴字体大小
              fontSize: 20
            },
            data: xData
          }
        ],
        yAxis: [
          {
            type: 'value',
            splitLine: {
              //坐标轴在 grid 区域中的分隔线。 #1C2F44
              show: true,
              lineStyle: {
                type: 'dashed',
                color: '#343654'
              }
            },
            axisLine: {
              //是否显示刻度标签
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              interval: 0,
              color: '#588D9E', //'rgba(255,255,255,0.5)',
              //Y轴字体大小
              fontSize: 20
            },
            splitArea: {
              show: false
            }
          }
        ],
        series: [
          {
            name: '周转量', //系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列
            type: 'bar', //type 决定自己的图表类型
            // "stack": "总量",
            barMaxWidth: 15, //柱条的最大宽度
            barGap: '10%', //不同系列的柱间距离，为百分比（如 '30%'，表示柱子宽度的 30%）
            itemStyle: {
              //自定义特殊 itemStyle，仅对该数据项有效
              normal: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: '#0080FF' // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#03CDFA' // 100% 处的颜色
                    }
                  ],
                  global: false // 缺省为 false
                }
              }
            },
            data: [100, 60, 70, 30, 150, 250],
            label: {
              show: true,
              position: 'top',
              distance: 10,
              fontSize: 20,
              color: '#01fff4'
            }
          },
          {
            name: '趋势',
            type: 'line', //折线
            symbol: 'circle',
            itemStyle: {
              normal: {
                color: 'rgba(15, 210, 236, 1)', //圆点颜色
                barBorderRadius: 1
              }
            },
            lineStyle: {
              normal: {
                width: 1,
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: '#05E0FB' // 0% 处的颜色
                    },
                    {
                      offset: 0.45,
                      color: '#05E0FB' // 45% 处的颜色
                    },
                    {
                      offset: 0.85,
                      color: '#05E0FB' // 85% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#05E0FB' // 100% 处的颜色
                    }
                  ],
                  global: false // 缺省为 false
                }
              }
            },
            data: [100, 60, 70, 30, 150, 250]
          }
        ]
      }
