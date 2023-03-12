option = {
    backgroundColor:'#03213D',
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
          bottom: "12%"
        },
        dataZoom: [
          {
            type: "slider",
            xAxisIndex: 0,
            startValue: 0,
            endValue: 7,
            filterMode: "filter",
            height: 4,
            bottom: 5,
            handleSize: "300%",
            handleIcon:
              "image://data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTg2NDg1MzkzMjI2IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ3MzUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyIDBDMjI2Ljc0Mjg1NyAwIDAgMjI2Ljc0Mjg1NyAwIDUxMnMyMjYuNzQyODU3IDUxMiA1MTIgNTEyIDUxMi0yMjYuNzQyODU3IDUxMi01MTItMjI2Ljc0Mjg1Ny01MTItNTEyLTUxMnogbTAgODc3LjcxNDI4NmMtMjA0LjggMC0zNjUuNzE0Mjg2LTE2MC45MTQyODYtMzY1LjcxNDI4Ni0zNjUuNzE0Mjg2czE2MC45MTQyODYtMzY1LjcxNDI4NiAzNjUuNzE0Mjg2LTM2NS43MTQyODYgMzY1LjcxNDI4NiAxNjAuOTE0Mjg2IDM2NS43MTQyODYgMzY1LjcxNDI4Ni0xNjAuOTE0Mjg2IDM2NS43MTQyODYtMzY1LjcxNDI4NiAzNjUuNzE0Mjg2eiIgZmlsbD0iIzRBQkRDRiIgcC1pZD0iNDczNiI+PC9wYXRoPjxwYXRoIGQ9Ik01MTIgNTEybS0zNjUuNzE0Mjg2IDBhMzY1LjcxNDI4NiAzNjUuNzE0Mjg2IDAgMSAwIDczMS40Mjg1NzIgMCAzNjUuNzE0Mjg2IDM2NS43MTQyODYgMCAxIDAtNzMxLjQyODU3MiAwWiIgZmlsbD0iI0ZGRkZGRiIgcC1pZD0iNDczNyI+PC9wYXRoPjwvc3ZnPg==",
            handleStyle: {
              color: "#0E1557"
            },
            backgroundColor: "#1c3a75",
            fillerColor: "#295fcc",
            borderColor: "transparent",
            textStyle: {
              color: "transparent"
            },
            dataBackground: {
              areaStyle: {
                opacity: 0
              },
              lineStyle: {
                opacity: 0
              }
            }
          }
        ],
        xAxis: {
          data: ['一','二','三','四','五','六','七','八','九'],
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
            name: "",
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
            name: "",
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
              show: false, //隐藏X轴轴线
              lineStyle: {
                color: "#163a5f",
                width: 2
              }
            },
            axisLabel: {
              show: false,
              textStyle: {
                color: "#797A7F",
                fontSize: 14
              }
            }
          }
        ],
        series: [
          {
            name: "下载数",
            type: "bar",
            barWidth: 16,
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: "#c618e6"
                    },
                    {
                        offset: 0.5,
                        color: "#634bf3"
                    },
                    {
                        offset: 1,
                        color: "#007eff"
                    }
                ]),
              barBorderRadius: [20, 20, 20, 20]
            },
            data: [2,3,4,5,6,8,9,7,8]
          },
          {
            // name: '背景',
            type: "bar",
            barWidth: "19px",
            xAxisIndex: 0,
            yAxisIndex: 1,
            barGap: "-110%",
            data: [100,100,100,100,100,100,100,100,100],//背景阴影长度
            itemStyle: {
              normal: {
                color: "rgba(135,63,203,0.3)",
                barBorderRadius: [20, 20, 20, 20]
              }
            },
            tooltip: {
              show: false
            },
            zlevel: 9
          }
        ]
      };
