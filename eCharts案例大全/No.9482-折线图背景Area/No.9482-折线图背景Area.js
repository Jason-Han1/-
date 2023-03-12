option={
    backgroundColor:"black",
      grid: {
          top: "15%",
          bottom: "5%",
          left: "5%",
          right: "1%",
        },
        legend: {
          data: ["实时", "上周", "日均"],
          icon: "rect",
          top: "0%",
          right: "2%",
          textStyle: {
            color: "#ffffff",
            fontSize: "30",
          },
        },
        xAxis: {
          data: [
            "7.23 15时",
            "7.23 16时",
            "7.23 17时",
            "7.23 18时",
            "7.23 19时",
            "7.23 20时",
            "7.23 21时",
            "7.24 22时",
          ],
          axisLine: {
            show: true, //隐藏X轴轴线
            lineStyle: {
              // color: "#01FCE3",
            },
          },
          type: "category",
          axisTick: {
            show: false, //隐藏X轴刻度
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#fff", //X轴文字颜色
              fontSize: "26",
            },
          },
        },
        yAxis: [
          {
            type: "value",
            name: "金额(万元)",
            nameTextStyle: {
              color: "#fff",
              fontSize: "26",
            },
            splitLine: {
              show: false,
            },

            axisTick: {
              show: true,
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#FFFFFF",
              },
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: "#fff",
                fontSize: "26",
              },
            },
          },
        ],
        series: [
          {
            name: "实时",
            type: "line",
            smooth: false, //平滑曲线显示
            showAllSymbol: true, //显示所有图形。
            symbol: "circle", //标记的图形为实心圆
            symbolSize: 22, //标记的大小
            itemStyle: {
              //折线拐点标志的样式
              color: "#caa520",
            },
            lineStyle: {
              color: "#caa520",
              width: 2,
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#caa520aa",
                },
                {
                  offset: 1,
                  color: "#caa52000",
                },
              ]),
            },
            data: [4, 4.3, 4.2, 4.5, 4.9, 4.8, 4, 3.8],
          },
          {
            name: "上周",
            type: "line",
            // yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            smooth: false, //平滑曲线显示
            showAllSymbol: true, //显示所有图形。
            symbol: "circle", //标记的图形为实心圆
            symbolSize: 22, //标记的大小
            itemStyle: {
              //折线拐点标志的样式
              color: "#ae97ff",
            },
            lineStyle: {
              color: "#ae97ff",
              width: 2,
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#ae97ffaa",
                },
                {
                  offset: 1,
                  color: "#ae97ff00",
                },
              ]),
            },
            data: [3.1, 2.8, 3.1, 3.5, 3.2, 3.1, 3, 1],
          },
          {
            name: "日均",
            type: "line",
            // yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            smooth: false, //平滑曲线显示
            showAllSymbol: true, //显示所有图形。
            symbol: "circle", //标记的图形为实心圆
            symbolSize: 22, //标记的大小
            itemStyle: {
              //折线拐点标志的样式
              color: "#73ffa8",
            },
            lineStyle: {
              color: "#73ffa8",
              width: 2,
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#73ffa8aa",
                },
                {
                  offset: 1,
                  color: "#73ffa800",
                },
              ]),
            },

            data: [2.2, 2.8, 3.8, 3.5, 1.9, 2.8, 2.3, 1.7],
          },
        ],
}