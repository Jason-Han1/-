option = {
  backgroundColor: '#000',
        animation: true,
        grid: {
          top: "5%",
          bottom: "17%",
          right: "5%"
        },
        xAxis: {
          data: ['2021-04-09','2021-04-10','2021-04-11','2021-04-12','2021-04-13','2021-04-14','2021-04-15','2021-04-16','2021-04-17','2021-04-18'],
          axisLine: {
            show: false //隐藏X轴轴线
          },
          axisTick: {
            show: false //隐藏X轴轴线
          },
          // splitLine: {
          //   show: true,
          //   lineStyle: {
          //     color: "rgba(77, 128, 254, 0.2)",
          //     width: 2
          //   }
          // },
          axisLabel: {
            show: true,
            margin: 14,
            fontSize: 14,
            textStyle: {
              color: "#fff" //X轴文字颜色
            }
          }
        },
        yAxis: [
          {
            type: "value",
            gridIndex: 0,
            min: 0,
            max: 100,
            interval: 25,
            // splitNumber: 4,
            splitLine: {
              show: true,
              lineStyle: {
                color: "rgba(77, 128, 254, 0)",
                width: 1
              }
            },
            axisTick: {
              show: false
            },
            // axisLine: {
            //   show: true,
            //   lineStyle: {
            //     color: "rgba(77, 128, 254, 0.2)"
            //   }
            // },
            axisLabel: {
              show: true,
              margin: 14,
              fontSize: 14,
              textStyle: {
                color: "#fff"
              }
            }
          }
        ],
        series: [
          {
            name: "设备在线率",
            type: "bar",
            barWidth: 14,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgba(0,144,255, 0.4)"
                  },
                  {
                    offset: 1,
                    color:   '#0090FF'
                  }
                ])
              }
            },
            data: [21,43,56,32,64,21,43,56,32,64],
            z: 10,
            zlevel: 0
          },
          {
            // 分隔
            type: "pictorialBar",
            itemStyle: {
              normal: {
                color: "#0F375F"
              }
            },
            symbolRepeat: "fixed",
            symbolMargin: 6,
            symbol: "rect",
            symbolClip: true,
            symbolSize: [18, 2],
            symbolPosition: "start",
            symbolOffset: [1,1],
            data:  [21,43,56,32,64,21,43,56,32,64],
            width: 2,
            z: 0,
            zlevel: 1
          },
          
          {
            name: "背影",
            type: "line",
            smooth: true, //平滑曲线显示
            showAllSymbol: false, //显示所有图形。
            symbolSize: 0,
            lineStyle: {
              width: 0
            },
            areaStyle: {
              color: "rgba(0, 151, 251, 0.1)"
            },
            data:  [21,43,56,32,64,21,43,56,32,64],
            z: 5
          }
        ],
        dataZoom: [
          {
            type: "slider",
            show: false,
            xAxisIndex: [0],
            endValue: 6,
            startValue: 0
          }
        ]
      }
