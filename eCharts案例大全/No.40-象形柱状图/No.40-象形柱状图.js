option = {
    backgroundColor:'#031d33',
        animation: true,
        grid: {
          top: "5%",
          bottom: "15%",
          right: "5%"
        },
        xAxis: {
          data: ['消防烟感','摄像机','环境烟感','路灯','地磁'],
          axisLine: {
            show: false //隐藏X轴轴线
          },
          axisTick: {
            show: false //隐藏X轴轴线
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "rgba(77, 128, 254, 0.2)",
              width: 2
            }
          },
          axisLabel: {
            show: true,
            margin: 14,
            fontSize: 16,
            textStyle: {
              color: "#65D5FF" //X轴文字颜色
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
                color: "rgba(77, 128, 254, 0.2)",
                width: 2
              }
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "rgba(77, 128, 254, 0.2)"
              }
            },
            axisLabel: {
              show: true,
              margin: 14,
              fontSize: 16,
              textStyle: {
                color: "#65D5FF"
              }
            }
          }
        ],
        series: [
          {
            name: "设备在线率",
            type: "bar",
            barWidth: 16,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgba(146, 225, 255, 1)"
                  },
                  {
                    offset: 1,
                    color: "rgba(0, 151, 251, 1)"
                  }
                ])
              }
            },
            data: [21,43,56,32,64],
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
            data:  [21,43,56,32,64],
            width: 2,
            z: 0,
            zlevel: 1
          },
          {
            name: "外框",
            type: "bar",
            barGap: "-110%", // 设置外框粗细
            data: [100, 100, 100, 100, 100, 100, 100],
            barWidth: 16,
            itemStyle: {
              normal: {
                color: "transparent", // 填充色
                // barBorderRadius: 0, //圆角半径
                label: {
                  // 标签显示位置
                  show: false,
                  position: "top" // insideTop 或者横向的 insideLeft
                }
              }
            },
            z: 0
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
            data:  [21,43,56,32,64],
            z: 5
          }
        ],
        dataZoom: [
          {
            type: "slider",
            show: false,
            xAxisIndex: [0],
            endValue: 4,
            startValue: 0
          }
        ]
      }
