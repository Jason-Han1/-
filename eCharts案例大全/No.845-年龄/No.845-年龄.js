let XData = ["0~18","18~25","25~35","35~50","50~65","65~80","80以上"]
let valueData = [
  {
    data: [45666,42600,401219,405673,909,5660,67560]
  }
  ]
option = {
        color: ["#65779E"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "6%", //距离dom间距
          right: "6%",
          top: "10%",
          bottom: "1%"
        },
        xAxis: [
          {
            type: "value",
            axisPointer: {
              type: "shadow"
            },
            // 横坐标 分割线等取消显示
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: "category",
            inverse: true,
            axisLabel: {
              // show: false,
              margin: 40,
              fontSize: 15,
              align: 'left',
              color: '#000000',
              padding: [0,0,0,-20],
              interval: 0,
            },
            // 纵坐标数据
            data: XData,
            yAxisIndex: 0,
            // 横坐标 分割线等取消显示
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            }
          },
          {
            type: "category",
            // inverse: true,
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              // show: false,
              // margin: 50,
              fontSize: 15,
              align: 'left',
              color: '#000000',
              padding: [0, 0,0,0],
              margin: 12,
              interval: 0,
              rich: {
                  a1: {
                      color: 'rgba(37, 168, 250, 1)',
                      fontSize: 15,
                  },
              },
              formatter: function (value, index) {
                return `{a1|${value}}`
            },
            },
            // 统计的总量 用纵坐标模拟
            data: valueData[0].data
          }
        ],
        series: [
          {
            name: "全量",
            type: "bar",
            // 宽度
            barWidth: "16",
            // 堆叠
            stack: "总量",
            showBackground: true,
            // 全部背景
             backgroundStyle: {
              color: "#EEF2F9",
              borderColor: 'rgba(183, 209, 222, 0.58)',
              borderWidth: 1
            },
            data: valueData[0].data,
            itemStyle: {
              normal: {
                show: true,
                textStyle: {
                  fontSize: 16
                },
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  1,
                  0,
                  [
                    {
                      offset: 0,
                      color: "rgba(37, 168, 250, 1)"
                    },
                    {
                      offset: 1,
                      color: "rgba(37, 168, 250, 1)"
                    }
                  ],
                  false
                )
              }
            }
          },
        //   {
        //     name: "标准",
        //     type: "bar",
        //     // 宽度
        //     barWidth: "16",
        //     // 堆叠
        //     stack: "总量",
        //     showBackground: true,
        //     // 全部背景
        //     backgroundStyle: {
        //       color: "#EEF2F9",
        //       borderColor: 'rgba(183, 209, 222, 0.58)',
        //       borderWidth: 1
        //     },
        //     data: valueData[1].data,
        //     itemStyle: {
        //       normal: {
        //         show: true,
        //         textStyle: {
        //           fontSize: 16
        //         },
        //         color: new echarts.graphic.LinearGradient(
        //           0,
        //           0,
        //           1,
        //           0,
        //           [
        //             {
        //               offset: 0,
        //               color: "rgba(115, 154, 14, 1)"
        //             },
        //             {
        //               offset: 1,
        //               color: "rgba(175, 231, 69, 1)"
        //             }
        //           ],
        //           false
        //         )
        //       }
        //     }
        //   }
        ]
      };