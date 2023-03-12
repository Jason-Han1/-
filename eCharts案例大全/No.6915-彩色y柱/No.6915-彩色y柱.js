
option = {
    backgroundColor: '#fff',
  xAxis: {
          type: "category",
          data: ["氨氮", "TP", "COD", "PH", "TN"],
          splitLine: {
            show: true,
            lineStyle: {
              color: "#EFEFEF",
              type: "solid",
            },
          },
          axisLabel: {
            color: "#000",
            fontSize: 11,
          },
        },

        grid: {
          left: "40",
          right: "15",
          bottom: "10",
          top: "60",
          containLabel: true,
        },
        yAxis: {
          type: "value",
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#EFEFEF",
              type: "solid",
            },
          },
        },
        visualMap: {
          show: true,
          type: "piecewise",
          left: "2%",
          bottom: "12",
          min: 0,
          max: 120,
          itemSymbol: "rect",
          itemHeight: 8.5,
          itemWidth: 25,
          splitNumber: 63,
          calculable: false,
          dimension: 1,
          color: [
            "#D7E7FE",
            "#6CA3FF",
            "#4FDF7B",
            "#F8CE37",
            "#FF9F35",
            "#FD4D62",
            "#FE4C63",
          ],
          text: ["劣V类", "I类"],
          textStyle: {
            fontSize: 10,
          },
          itemGap: 1,
          inRange: {
            color: [
              "#D7E7FE",
              "#6CA3FF",
              "#4FDF7B",
              "#F8CE37",
              "#FF9F35",
              "#FD4D62",
              "#FE4C63",
            ],
            symbolSize: [50, 100],
          },
          outOfRange: {
            color: "#000",
          },
        },
        series: [
          {
            name: "1",
            data: [20, 70, 60, 50, 100],
            type: "bar",
            barWidth: 30,
            markLine: {
              silent: true,
              data: [
                {
                  yAxis: 60,
                  lineStyle: {
                    color: "#CDCFD4",
                  },
                  label: {
                    show: false,
                  },
                  symbol: "none",
                },
              ],
            },
          },
        ],
};