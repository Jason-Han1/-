option ={
        color: '#6fb0ff',
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            label: {
              show: false
            }
          }
        },
        xAxis: {
          data: ["公安", "税务", "司法", "电力", "检察院", "交通", "其他"],
          axisLine: {
            show: true //隐藏X轴轴线
          },
          axisTick: {
            show: true //隐藏X轴刻度
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#333" //X轴文字颜色
            }
          },
          axisLine: {
            lineStyle: {
              color: "#999"
            }
          }
        },
        yAxis: [
          {
            nameTextStyle: {
              color: "#ebf8ac"
            },
            splitLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: true
            },
            axisLine: {
              show: true
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: "#333"
              }
            },
            axisLine: {
              lineStyle: {
                color: "#999"
              }
            }
          },
          {
            nameTextStyle: {
              color: "#ebf8ac"
            },
            position: "right",
            splitLine: {
              show: false
            },
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
              show: false,
              formatter: "{value} %", //右侧Y轴文字显示
              textStyle: {
                color: "#ebf8ac"
              }
            }
          }
        ],
        series: [
          {
            name: "设备型号",
            type: "bar",
            barWidth: 15,
            itemStyle: {
                normal: {
                    barBorderRadius: [30, 30, 0, 0],
                }
            },
            data: [40, 38, 48, 35, 29, 28, 30]
          }
        ]
      };