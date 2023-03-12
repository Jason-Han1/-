
option = {
        background: "none",
        color: ["#04FEF9"],
        // tooltip: {
        //     trigger: 'axis',
        //     axisPointer: { // 坐标轴指示器，坐标轴触发有效
        //         type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        //     }
        // },
        grid: {
          left: "3%",
          right: "3%",
          top: "3%",
          bottom: "13%"
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["下压力"],
            axisLabel: {
              color: "#00B4FF",
              fontFamily: "YouSheBiaoTiHei",
              fontSize: "16"
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false
            }
          }
        ],
        yAxis: {
          type: "value",
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            show: true,
            fontFamily: "Oswald",
            color: "#084877"
          }
        },
        series: [
          {
            tooltip: {
              show: false
            },
            name: "bg",
            type: "pictorialBar",
            barWidth: "30",
            silent: true,
            symbol: "rect",
            symbolRepeat: true,
            symbolMargin: 1,
            symbolSize: [42, 4],
            itemStyle: {
              color: "#08487759"
            },
            data: [400]
          },
          {
            type: "pictorialBar",
            animation: true,
            animationDuration: 600,
            symbol: "rect",
            symbolRepeat: true,
            symbolSize: [42, 4],
            symbolMargin: 1,
            barWidth: "30",
            itemStyle: {
              normal: {
                color: "#084877",
                label: {
                  color: "#D2EFFE",
                  fontFamily: "Oswald",
                  fontSize: "18",
                  show: true,
                  position: "top"
                }
              }
            },
            data: [100]
          }
        ]
      };