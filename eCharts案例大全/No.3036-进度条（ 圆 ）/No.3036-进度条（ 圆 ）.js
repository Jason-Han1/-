option = {
    backgroundColor:"#031d33",
        angleAxis: {
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          min: 0,
          max: 132,
          startAngle: 225
        },
        radiusAxis: {
          type: "category",
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          data: ["a", "b", "c"],
          z: 10
        },
        polar: {
          radius: "90%" //调半径
        },
        series: [
          {
            type: "bar",
            data: [, , (80 / 100) * 100],
            z: 1,
            coordinateSystem: "polar",
            barMaxWidth: 30,
            // name: "警告事件",
            roundCap: true,
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              {
                offset: 0,
                color: 'rgba(48, 236, 166, 0.3)'
              },
              {
                offset: 1,
                color: 'rgba(48, 236, 166, 1)'
              }
            ]),
            barGap: "-100%"
          },

          {
            type: "bar",
            data: [, , 100],
            z: 0,
            silent: true,
            coordinateSystem: "polar",
            barMaxWidth:30,
            name: "C",
            roundCap: true,
            color: "rgba(255,255,255,0.2)",
            barGap: "-100%"
          },

          {
            type: "gauge",
            radius: "75%",
            splitNumber: this.$fontSize4,
            max: this.max,
            detail: {
              show: false,
              formatter: "" + this.value + "",
              offsetCenter: ["0%", "0%"],
              textStyle: {
                fontSize: 20,
                color: "red"
              }
            },
            axisLine: {
              // 坐标轴线
              lineStyle: {
                // 属性lineStyle控制线条样式

                opacity: 0 //刻度背景宽度
              }
            },
            data: [
              {
                name: "",
                value: (this.value / this.max) * 100
              }
            ],
            splitLine: {
              length: 0, //长刻度节点线长度
              lineStyle: {
                width: 0,
                color: "#fff"
              } //刻度节点线
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            pointer: {
              show: false
            }
          },
          {
            type: "pie",
            radius: ["50%", "82%"],
            hoverAnimation: false,
            startAngle: 225,
            endAngle: 0,
            data: [
              {
                name: "",
                value: ((this.value / this.max) * 100) / this.max,
                // value: 1.54,
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                },
                itemStyle: {
                  color: "rgba(0,0,0,0)"
                }
              }
            ]
          }
        ],
        tooltip: {
          show: false
        }
      };