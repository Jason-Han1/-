option  = {
    backgroundColor:'#003366',
        tooltip: {
          position: "inside",
          formatter: "小于20%有发展空间<br>20%~40%为健康<br>40%~60%为预警<br>大于60%为过度",
          textStyle: {
            fontSize: 10,
          },
        },
        series: [
          {
            name: "刻度",
            type: "gauge",
            center: ["50%", "65%"],
            radius: '90%',
            min: 0, //最小刻度
            max: 100, //最大刻度
            splitNumber: 8, //刻度数量
            startAngle: 180,
            endAngle: 0,
            axisLine: {
              show: true,
              lineStyle: {
                width: 1,
                color: [[1, "rgba(0,0,0,0)"]],
              },
            }, //仪表盘轴线
            axisLabel: {
              show: true,
              color: "#0ab7ff",
              fontSize: 15,
              distance: -50,
              formatter: function (v) {
                return v + "%";
              },
            }, //刻度标签。
            axisTick: {
              show: true,
              splitNumber: 5,
              lineStyle: {
                color: "#0ab7ff",
                width: 1,
              },
              length: -3,
            }, //刻度样式
            splitLine: {
              show: true,
              length: -5,
              lineStyle: {
                color: "#0ab7ff",
              },
            }, //分隔线样式
          },
          {
            type: "gauge",
             radius: '80%',
            center: ["50%", "65%"],
            splitNumber: 0, //刻度数量
            startAngle: 180,
            endAngle: 0,
            axisLine: {
              show: true,
              lineStyle: {
                width: 50,
                color: [
                  [0.2, "#00a65a"],
                  [0.4, "#2b64fc"],
                  [0.6, "#f39c11"],
                  [1, "#fa4e4b"],
                ],
              },
            },
            //分隔线样式。
            splitLine: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            pointer: {
              show: true,
              length: "80%",
              width: "2%",
            },
            title: {
              show: true,
              offsetCenter: [0, "60%"], // x, y，单位px
              textStyle: {
                fontWeight: "bold",
                color: "#0ab7ff",
                fontSize: 30,
              },
            },
            //仪表盘详情，用于显示数据。
            detail: {
              show: true,
              offsetCenter: [0, "30%"],
              color: "#ffffff",

              formatter: function (value) {
                if (value <= 20) {
                  return "有发展空间";
                } else if (value <= 40) {
                  return "健康";
                } else if (value <= 60) {
                  return "预警";
                } else {
                  return "过度";
                }
              },
              textStyle: {
                fontSize: 30,
              },
            },
            data: [
              {
                name: "GDP比重",
                value: 30,
              },
            ],
          },
          {
            // 仅显示tooltip用
            type: "pie",
            radius: "90%",
            hoverAnimation: true,
            label: {
              normal: {
                show: false,
                position: "center",
              },
            },
            labelLine: {
              normal: {
                show: false,
              },
            },
            z: 3,
            zlevel: 0,
            itemStyle: {
              borderWidth: 0,
            },
            data: [
              {
                value: 50,
                name: "",
                label: {
                  normal: {
                    show: false,
                  },
                },
                itemStyle: {
                  normal: {
                    color: "transparent",
                  },
                },
              },
            ],
          },
        ],
      };
