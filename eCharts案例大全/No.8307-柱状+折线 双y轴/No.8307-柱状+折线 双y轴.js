option = {
  backgroundColor:"#000",
  color: ["#dfea0a", "#e8860b"],
        legend: {
          top: "12px",
          left: "60px",
          textStyle: {
            color: "#ffffff"
          }
        },
        title: {
          text: "方/小时",
          textStyle: {
            color: "#fff",
            fontSize: "12px"
          },
          left: "10px",
          top: "15px"
        },
        tooltip: {},
        grid: {
          top: "10%",
          left: "20px",
          right: "20px",
          bottom: "5px",
          containLabel: true
        },
        dataset: {
          source: [
            ["product", "金乡站一号线", "金乡站二号线", "鱼台站一号线"],
            ["4月", 22, 33],
            ["5月", 20, 54],
            ["6月", 30, 65.2],
            ["7月", 46, 65.2],
            ["8月", 40, 25.2],
            ["9月", 44, 55],
            ["10月", 65, 65.2],
            ["11月", 55, 44],
            ["12月", 46, 77],
            ["1月", 33, 65.2],
            ["2月", 77, 85.5],
            ["3月", 37, 65.2]
          ]
        },
        xAxis: {
          name: "月份",
          nameTextStyle: {
            color: "#fff"
          },
          // nameLocation: "middle",
          type: "category",
          splitLine: {
            show: false
          },

          axisLine: {
            show: true,
            lineStyle: {
              color: "#002671"
            }
          },
          axisLabel: {
            color: "#fff"
          }
        },
        yAxis: [
          {
            // name: "销量",
            nameRotate: 360,
            nameLocation: "end",
            max: 112, // 最大值X2 居中
            splitLine: {
              show: false
            },
            axisTick: {
              show: false //隐藏X轴刻度
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "#FFFFFF"
              }
            }
          },
          {
            name: "          峰值",
            //nameLocation: 'start',
            splitLine: {
              // 网格线 y轴对应的是否显示
              show: false
            },
            min: 0,
            // max: 300, // growing rate upper limit
            type: "value",
            //top:10,
            axisTick: {
              show: false //隐藏X轴刻度
            },
            inverse: false,
            axisLine: {
              show: false,
              lineStyle: {
                color: "#fff"
              }
            }
          }
        ],
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
          {
            type: "bar",
            barWidth: 24,
            itemStyle: {
              normal: {
                label: {
                  show: true, //开启显示
                  position: "top", //在上方显示
                  textStyle: {
                    //数值样式
                    color: "#dfea0a",
                    fontSize: 11
                  }
                }
              }
            }
          },
          {
            type: "bar",
            barWidth: 24,
            itemStyle: {
              normal: {
                label: {
                  show: true, //开启显示
                  position: "top", //在上方显示
                  textStyle: {
                    //数值样式
                    color: "#e8860b",
                    fontSize: 11
                  }
                }
              }
            }
          },

          {
            name: "金乡站峰值",
            type: "line",
            symbol: "circle", //标记的图形为实心圆
            symbolSize: 10, //标记的大小
            yAxisIndex: 1, // yAxisIndex 1 表示第二个y轴，默认为0
            color: "#02b5bc",
            data: [30, 150, 180, 120, 120, 99, 110, 180, 180, 190, 117, 155]
          },
          {
            name: "鱼台站峰值",
            type: "line",
            symbol: "circle", //标记的图形为实心圆
            symbolSize: 10, //标记的大小
            yAxisIndex: 1, // yAxisIndex 1 表示第二个y轴，默认为0
            color: "#04cd6f",
            data: [20, 130, 140, 60, 130, 188, 177, 150, 166, 150, 188, 125]
          }
        ]
};