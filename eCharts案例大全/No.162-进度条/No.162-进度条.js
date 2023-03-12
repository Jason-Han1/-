option={
    backgroundColor:"#031d33",
          grid: {
            top: 0,
            bottom: 0,
            left: "10%",
            right: "10%"
          },
          xAxis: {
            show: false,
            type: "value",
            boundaryGap: [0, 0]
          },
          yAxis: [
            {
              type: "category",
              data: [""],
              axisLine: { show: false },
              axisTick: [
                {
                  show: false
                }
              ]
            }
          ],
          series: [
            {
              name: "金额",
              type: "bar",
              zlevel: 1,
              itemStyle: {
                normal: {
                  barBorderRadius: 30,
                color: new echarts.graphic.LinearGradient(1, 0, 0, 1, [
                  {
                    offset: 1,
                    color: "rgba(48, 236, 166, 1)"
                  },
                  {
                    offset: 0,
                    color: "rgba(48, 236, 166, 0.5)"
                  }
                ])
                }
              },
              barWidth: 20,
              data: [10]
            },
            {
              name: "背景",
              type: "bar",
              barWidth: 20,
              barGap: "-100%",
              data: [20],
              itemStyle: {
                normal: {
                  color: "rgba(28, 128, 213, 0.19)",
                
                  barBorderRadius: 30
                }
              }
            }
          ]
        }