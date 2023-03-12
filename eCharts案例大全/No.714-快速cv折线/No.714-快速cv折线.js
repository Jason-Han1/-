option = {
    backgroundColor:'#021B3A',
        tooltip: {
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  { offset: 0, color: "rgba(0, 255, 233,0)" },
                  { offset: 0.5, color: "rgba(255, 255, 255,1)" },
                  { offset: 1, color: "rgba(0, 255, 233,0)" }
                ],
                global: false
              }
            }
          }
        },
        grid: {
          top: "15%",
          left: "8%",
          right: "7%",
          bottom: "10%"
        },
        xAxis: [
          {
            type: "category",
            axisLine: {
              show: true,
              lineStyle: { color: "#dddddd" }
            },
            axisLabel: { color: "#999", fontSize: 10 },
            splitLine: { show: false },
            axisTick: { show: false },
            boundaryGap: false,
            data: ['yi','yi2','yi3','yi4','yi5']
          }
        ],

        yAxis: [
          {
            name: "单位: 个",
            nameTextStyle: { color: "#5574d9" },
            type: "value",
            splitNumber: 4,
            splitLine: { show: false },
            axisLine: {
              show: true,
              lineStyle: { color: "#dddddd" }
            },
            axisLabel: {
              show: true,
              textStyle: { color: "#999" }
            },
            axisTick: { show: false }
          }
        ],
        series: [
          {
            name: "举报数",
            type: "line",
            showAllSymbol: true,
            symbol: "circle",
            symbolSize: 10,
            lineStyle: { normal: { color: "#5b7ff4" } },
            label: {
              show: false,
              position: "top",
              textStyle: { color: "#333" }
            },
            itemStyle: {
              color: "#fff",
              borderColor: "#5b7ff4",
              borderWidth: 2
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
                  [
                    { offset: 0, color: "rgba(109, 144, 255,0.8)" },
                    { offset: 1, color: "rgba(109, 144, 255,0)" }
                  ],
                  false
                )
              }
            },
            data:[11,22,33,44,55]
          }
        ]
      }