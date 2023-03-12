option = {
    backgroundColor:'#032042',
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            label: {
              show: true
            }
          }
        },
        grid: {
          left: "5.5%",
          top: "18%",
          right: "5%",
          bottom: "10%"
        },
        legend: {
          data: ["下载数据量", "调用次数"],
          top: "4%",
          right: "14%",
          textStyle: {
            color: "#ffffff",
            fontSize: 16
          }
        },
        xAxis: {
          data: ['一','二','三','四','五'],
          axisLine: {
            show: true, //隐藏X轴轴线
            lineStyle: {
              color: "#163a5f",
              width: 2
            }
          },
          axisTick: {
            show: false, //隐藏X轴刻度
            alignWithLabel: true
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#ffffff", //X轴文字颜色
              fontSize: 16
            },
            interval: 0
          }
        },
        yAxis: [
          {
            type: "value",
            name: "下载数据量",
            nameTextStyle: {
              color: "#ffffff",
              fontSize: 16
            },
            splitLine: {
              show: false,
              lineStyle: {
                width: 1,
                color: "#CED2DB"
              }
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: true, //隐藏X轴轴线
              lineStyle: {
                color: "#163a5f",
                width: 2
              }
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: "#ffffff",
                fontSize: 16
              }
            }
          },
          {
            type: "value",
            name: "调用次数",
            nameTextStyle: {
              color: "#ffffff",
              fontSize: 16
            },
            splitLine: {
              show: false,
              lineStyle: {
                width: 1,
                color: "#CED2DB"
              }
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: true, //隐藏X轴轴线
              lineStyle: {
                color: "#163a5f",
                width: 2
              }
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: "#ffffff",
                fontSize: 14
              }
            }
          }
        ],
        series: [
          {
            name: "下载数据量",
            type: "bar",
            barWidth: 16,
            itemStyle: {
              color: "#1ce3cd"
            },
            // label: {
            //     normal: {
            //         show: true,
            //         position: 'top',
            //         color: "#333"
            //     }
            // },
            data: [1,2,3,4,5]
               //45, 43, 35, 76, 154, 86, 42, 68, 97, 24, 34
          },
          {
            name: "调用次数",
            type: "line",
            barWidth: 16,
            smooth: true,
            symbolSize: 6,
            yAxisIndex:1,
            itemStyle: {
              normal: {
                color: "#5c89fc" 
              }
            },

            data: [8,9,10,11,15]
          }
        ]
      };
