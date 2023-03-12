option = {
    backgroundColor:'#031d33',
        animation: true,
        grid: {
          top: "5%",
          bottom: "15%",
          right: "5%"
        },
        xAxis: {
          // type:'value',
          // data: ['消防烟感','摄像机','环境烟感','路灯','地磁'],
          axisLine: {
            show: false //隐藏X轴轴线
          },
          axisTick: {
            show: false //隐藏X轴轴线
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          }
        },
        yAxis: [
          {
            type: 'category',
            // type: "value",
            gridIndex: 0,
            // min: 0,
            // max: 100,
            // interval: 25,
            // splitNumber: 4,
            splitLine: {
              show: false,
              lineStyle: {
                color: "rgba(77, 128, 254, 0.2)",
                width: 2
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
              fontSize: 14,
              textStyle: {
                color: "#d1dbf2"
              }
            },
            data: ['消防烟感','摄像机','环境烟感','路灯','地磁'],
          }
        ],
        series: [
          {
            name: "设备在线率",
            type: "bar",
            barWidth: 16,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: "rgba(19, 105, 200, 1)"
                  },
                  {
                    offset: 1,
                    color: "rgba(62, 158, 96, 1)"
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
            symbolMargin: 16,
            symbol: "rect",
            symbolClip: true,
            symbolSize: [4, 18],
            symbolPosition: "start",
            symbolOffset: [-4,0],
            data:  [21,43,56,32,64],
            width: 2,
            z: 0,
            zlevel: 1
          },
        ],
      }
