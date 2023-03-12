option = {
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
          data: ["T1", "T2", "T3", "T6", "D1", "Z1", "z2"],
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
                    color: function(params) {
                        var colorList = [
                            "#37b70c", "#fae521", "#f29c00", "#dd3f36", "#b3013f", "#a00398", '#E87C25', '#C6E579',
                        ];
                        return colorList[params.dataIndex]
                    },
                    barBorderRadius: [30, 30, 0, 0],
                }
            },
            data: [40, 38, 48, 35, 29, 28, 30]
          }
        ]
      };