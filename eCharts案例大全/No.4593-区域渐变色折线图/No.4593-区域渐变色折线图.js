  var option = {
      grid: {
          top: "20%",
          right: "5%",
          left: "10%",
          bottom: "12%",
      },
      tooltip: {
          trigger: "axis",
          position: ["25%", "25%"],
          axisPointer: {
              type: "line",
          },
      },
      legend: {
          // icon: "",
          top: "5%",
          right: "5%",
          itemWidth: 15, // 设置宽度
          itemHeight: 10, // 设置高度
          data: ["业务量"],
          textStyle: {
              color: "#252525",
              fontSize: 12,
          },
      },
      xAxis: [{
          type: "category",
          data: ['2015年', '2016年', '2017年', '2018年', '2019年'],
          axisLine: {
              show: true,
              lineStyle: {
                  color: "#E2E2E2",
              },
          },
          splitLine: {
              show: false,
              lineStyle: {
                  type: "dashed",
              },
          },
          axisTick: {
              show: false, //隐藏X轴刻度
          },
          axisLabel: {
              fontSize: 12,
              color: "#737373",
          },
      }, ],
      yAxis: [{
          type: "value",
          name: "单位:",
          nameTextStyle: {
              color: "#252525",
              fontSize: 12,
              padding: [0, 0, 0, -35],
          },
          splitLine: {
              show: true,
          },
          axisTick: {
              show: false,
          },
          axisLine: {
              show: true,
              lineStyle: {
                  color: "#E2E2E2",
              },
          },
          axisLabel: {
              formatter: "{value}",
              color: "#737373",
              fontSize: 12,
          },
      }, ],
      series: [{
          type: "line",
          name: "业务量",
          smooth: false, //平滑曲线显示
          symbolSize: 6,
          smooth: true,
          symbol: "circle", //标记的图形为实心圆
          itemStyle: {
              normal: {
                  color: "#58C5FF", //折点颜色
                  lineStyle: {
                      color: "#58C5FF", //折线颜色
                  },
              },
          },
          areaStyle: {
              normal: {
                  type: "default",
                  color: new echarts.graphic.LinearGradient(
                      0,
                      0,
                      0,
                      1,
                      [{
                              offset: 0,
                              color: "rgba(88,197,255,.9)",
                          },
                          {
                              offset: 0.5,
                              color: "rgba(88,197,255,.5)",
                          },
                          {
                              offset: 1,
                              color: "rgba(88,197,255,0)",
                          },
                      ],
                      false
                  ),
              },
          },
          data: [7, 9, 14, 10, 14, 9]
      }, ],
  };