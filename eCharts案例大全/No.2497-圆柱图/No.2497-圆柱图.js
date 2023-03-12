option = {
    backgroundColor:'#0e2872',
        tooltip: {
          trigger: "item",
        },
        title: {
          show: true,
          text: "单位:盒",
          x: "1%",
          y: "3%",
          textStyle: {
            fontSize: 12,
            fontWeight: 400,
            color: "rgba(0, 144, 255, 0.6)",
          },
        },
        grid: {
          left: "6%",
          right: "3%",
          bottom: "15%",
          top: "25%",
        },
        xAxis: {
          data: ['济南','济宁','潍坊','泰安','临沂','日照'],
          axisTick: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(55, 117, 246, 0.4)",
            },
          },
          axisLabel: {
            interval: 0,
            color: "rgba(255, 255, 255, 0.7)",
            fontSize: 12,
            margin: 8, //刻度标签与轴线之间的距离。
          },
        },
        yAxis: {
          splitLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            color: "rgba(0, 144, 255, 0.6)",
            fontSize: 12,
          },
        },
        series: [
          {
            //下圆片
            name: "",
            type: "pictorialBar",
            symbolSize: [15, 7],
            symbolOffset: [0, 5],
            z: 12,
            animationDuration: function (idx) {
              return 3000;
            },
            itemStyle: {
              opacity: 1,
            //   color:"#00DFF3"
             color: function (params) {
                var a = params.dataIndex;
                if (a == 0) {
                  return "#00DFF3";
                } else if (a == 1) {
                  return "#007AFF";
                } else if (a == 2) {
                  return "#6B35F8";
                } else if (a == 3) {
                  return "#FC6B65";
                } else if (a == 4) {
                  return "#17C2A0";
                } else if (a == 5) {
                  return "#FF852B";
                } else {
                  return "rgba(0, 68, 166, 1)";
                }
              },
            },
            data: [1, 1, 1, 1, 1, 1],
          },
          {
            //柱状图
            name: "2020",
            type: "bar",
            barWidth: 15,
            barGap: "-100%",
            animationDuration: function (idx) {
              return 3000;
            },
            itemStyle: {
              //lenged文本
                 opacity: 0.7,
            //   color: new echarts.graphic.LinearGradient(
            //         0,
            //         0,
            //         0,
            //         1,
            //         [
            //           {
            //             offset: 0,
            //             color: "#00DFF3", // 0% 处的颜色
            //           },
            //           {
            //             offset: 1,
            //             color: "#66FFFF", // 100% 处的颜色
            //           },
            //         ],
            //         false
            //       )
             color: function (params) {
                var a = params.dataIndex;
                if (a == 0) {
                  return new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                      {
                        offset: 0,
                        color: "#00DFF3", // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: "#66FFFF", // 100% 处的颜色
                      },
                    ],
                    false
                  );
                } else if (a == 1) {
                  return new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                      {
                        offset: 0,
                        color: "#2B55D3", // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: "#7BC6FF", // 100% 处的颜色
                      },
                    ],
                    false
                  );
                } else if (a == 2) {
                  return new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                      {
                        offset: 0,
                        color: "#672CFC", // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: "#937FE6", // 100% 处的颜色
                      },
                    ],
                    false
                  );
                } else if (a == 3) {
                  return new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                      {
                        offset: 0,
                        color: "#FC6963", // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: "#F09A9D", // 100% 处的颜色
                      },
                    ],
                    false
                  );
                } else if (a == 4) {
                  return new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                      {
                        offset: 0,
                        color: "#0DBF9F", // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: "#87E7AA", // 100% 处的颜色
                      },
                    ],
                    false
                  );
                } else if (a == 5) {
                  return new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                      {
                        offset: 0,
                        color: "#FF8227", // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: "#FACB76", // 100% 处的颜色
                      },
                    ],
                    false
                  );
                } else {
                  return new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                      {
                        offset: 0,
                        color: "#0044A6", // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: "#0055CF", // 100% 处的颜色
                      },
                    ],
                    false
                  );
                }
              },
                
            },

            data: [30,90,78,93,88,35],
          },
          {
            //上圆
            name: "",
            type: "pictorialBar",
            symbolSize: [15, 7],
            symbolOffset: [0, -5],
            z: 12,
            animationDuration: function (idx) {
              return 3000;
            },
            label: {
              show: true,
              position: "top",
              fontSize: 12,
              color: "#ffffff",
              fontFamily: "FZHZGBJW",
            },
            itemStyle: {
              opacity: 1,
              
             color: function (params) {
                var a = params.dataIndex;
                if (a == 0) {
                  return "#62FFFF";
                } else if (a == 1) {
                  return "#6DB3F1";
                } else if (a == 2) {
                  return "#9078E7";
                } else if (a == 3) {
                  return "#F0989B";
                } else if (a == 4) {
                  return "#9FF9C5";
                } else if (a == 5) {
                  return "#FAC36E";
                } else {
                  return "rgba(0, 83, 203, 1)";
                }
              },
            },
            symbolPosition: "end",
            data: [30,90,78,93,88,35],
          },
        ],
      }