var xData2 = ["孔洞开挖深度"];
    var data1 = [100];
    var data2 = [300];
option = {
      tooltip: {
        show: false,
        trigger: "item"
      },
      grid: {
        top: 11,
        left: -45,
        bottom: 11
      },
      xAxis: {
        data: xData2,
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          show: false,
          interval: 0,
          textStyle: {
            color: "#fff",
            fontSize: 20
          }
        }
      },
      yAxis: {
        inverse: true,
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          show: false
        }
      },
      series: [
        //灰色 top原片
        {
          //三个最低下的圆片 灰色 top原片
          name: "",
          type: "pictorialBar",
          symbolSize: [30, 15],
          symbolOffset: [0, -10],
          z: 12,
          itemStyle: {
            opacity: 1,
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              1,
              0,
              [
                {
                  offset: 0,
                  color: "#858585" // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#dddddd" // 100% 处的颜色
                }
              ],
              false
            )
          },
          data: [1, 1, 1, 1, 1]
        },
        //灰色柱子
        {
          name: "2020",
          type: "bar",
          barWidth: 30,
          barGap: "-100%",
          //灰色柱子标注
          label: {
            show: true,
            distance: 0,
            offset: [38, -10],
            position: "bottom",
            textBorderWidth: 0,
            textShadowBlur: 0,
            textShadowColor: "transparent",
            formatter: param => {
              return "{line|—}{card|" + param.value + "米}";
            },
            rich: {
              card: {
                width: 40,
                height: 25,
                backgroundColor: "#f6f9fe",
                borderRadius: 5,
                align: "center",
                verticalAlign: "middle",
                color: "#333333"
              },
              line: {
                color: "#333333"
              }
            }
          },
          itemStyle: {
            //lenged文本
            opacity: 0.7,
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              1,
              0,
              [
                {
                  offset: 0,
                  color: "#c0982d" // 0% 处的颜色
                },
                {
                  offset: 0.5,
                  color: "#907114" // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#c0982d" // 100% 处的颜色
                }
              ],
              false
            )
          },

          data: data1
        },
        // 黄色柱状子
        {
          // 替代柱状图 默认不显示颜色，是最下方柱图（邮件营销）的value值 - 20  黄色柱状子
          type: "bar",
          barWidth: 30,
          barGap: "-100%",

          itemStyle: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              1,
              0,
              [
                {
                  offset: 0,
                  color: "#c2c2c2" // 0% 处的颜色
                },
                {
                  offset: 0.5,
                  color: "#9e9e9e" // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#c2c2c2" // 100% 处的颜色
                }
              ],
              false
            )
          },
          data: data1
        },
        //头部  黄色圆底
        {
          name: "", //头部  黄色圆底
          type: "pictorialBar",
          symbolSize: [30, 20],
          symbolOffset: [0, 10],
          z: 12,
          symbolPosition: "end",
          itemStyle: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              1,
              0,
              [
                {
                  offset: 0,
                  color: "#cbb169" // 0% 处的颜色
                },
                {
                  offset: 0.5,
                  color: "#b29d5c" // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#cbb169" // 100% 处的颜色
                }
              ],
              false
            ),
            opacity: 1
          },
          //灰色柱子标注
          label: {
            show: true,
            distance: 0,
            offset: [38, -20],
            position: "bottom",
            textBorderWidth: 0,
            textShadowBlur: 0,
            textShadowColor: "transparent",
            formatter: param => {
              return "{line|—}{card|" + param.value + "米}";
            },
            rich: {
              card: {
                width: 40,
                height: 25,
                backgroundColor: "#f6f9fe",
                borderRadius: 5,
                align: "center",
                verticalAlign: "middle",
                color: "#c2a964"
              },
              line: {
                color: "#c2a964"
              }
            }
          },
          data: data2
        },
        //灰色柱子底部
        {
          //灰色柱子底部
          name: "",
          type: "pictorialBar",
          symbolSize: [30, 20],
          symbolOffset: [0, 10],
          z: 12,
          itemStyle: {
            opacity: 1,
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              1,
              0,
              [
                {
                  offset: 0,
                  color: "#c2c2c2" // 0% 处的颜色
                },
                {
                  offset: 0.5,
                  color: "#9e9e9e" // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#c2c2c2" // 100% 处的颜色
                }
              ],
              false
            )
          },
          symbolPosition: "end",
          data: data1
        },
        //黄色圆底 底部
        {
          //黄色圆底 底部
          name: "2019",
          type: "bar",
          barWidth: 30,
          barGap: "-100%",
          z: 0,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              1,
              0,
              [
                {
                  offset: 0,
                  color: "#c0982d" // 0% 处的颜色
                },
                {
                  offset: 0.5,
                  color: "#907114" // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#c0982d" // 100% 处的颜色
                }
              ],
              false
            ),
            opacity: 0.7
          },

          data: data2
        }
      ]
    };