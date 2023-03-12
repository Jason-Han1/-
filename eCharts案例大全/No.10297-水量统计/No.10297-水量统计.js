option = {
   tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        color: ["#0080ff", "#4cd5ce"],
        grid: {
          left: "5%",
          right: "5%",
          top: "10%",
          bottom: "5%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["", "", "", "", "", ""],
            splitLine: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: true,
              lineStyle: {
                color: "#ffffff1f"
              }
            },
            axisLabel: {
              color: "#ffffff1f" //刻度线标签颜色
            }
          }
        ],
        yAxis: [
          {
            splitLine: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: true,
              lineStyle: {
                color: "#ffffff1f"
              }
            },
            axisLabel: {
              color: "#ffffff1f" //刻度线标签颜色
            }
          }
        ],
        series: [
          {
            name: "最高水量",
            type: "line",
            smooth: true,
            //   symbol: "none", //去掉折线点
            stack: 100,
            itemStyle: {
              normal: {
                //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#CB8993" // 0% 处的颜色
                  },
                  {
                    offset: 0.5,
                    color: "#CB8993" // 100% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#CC56CB" // 100% 处的颜色
                  }
                ]), //背景渐变色
                lineStyle: {
                  // 系列级个性化折线样式
                  width: 0.5,
                  type: "solid",
                  color: "#CC56CB"
                }
              },
              emphasis: {
                color: "#02675f",
                lineStyle: {
                  // 系列级个性化折线样式
                  width: 0.5,
                  type: "dotted",
                  color: "#02675f" //折线的颜色
                }
              }
            }, //线条样式
            symbolSize: 2, //折线点的大小
            areaStyle: {
              normal: {}
            },
            data: [80, 60, 50, 100, 110, 40]
          },
          {
            name: "最低水量",
            type: "line",
            smooth: true,
            //  symbol: "none", //去掉折线点
            stack: 100,
            itemStyle: {
              normal: {
                //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#64CAFA" // 0% 处的颜色
                  },
                  {
                    offset: 0.5,
                    color: "#64CAFA" // 100% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#0078D7" // 100% 处的颜色
                  }
                ]), //背景渐变色
                lineStyle: {
                  // 系列级个性化折线样式
                  width: 0.5,
                  type: "solid",
                  color: "#0078D7"
                }
              },
              emphasis: {
                color: "#02675f",
                lineStyle: {
                  // 系列级个性化折线样式
                  width: 0.5,
                  type: "dotted",
                  color: "#02675f" //折线的颜色
                }
              }
            }, //线条样式
            symbolSize: 2, //折线点的大小
            areaStyle: {
              normal: {}
            },
            data: [20, 70, 60, 80, 102, 90]
          }
        ]
};