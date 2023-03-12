var percent = 80; //百分数
     option = {
         backgroundColor:"#081322",
        tooltip: {
          show: false,
          formatter: "{a} <br/>{b} : {c}%",
        },
        title: [
          {
            text: "上课学生",
            y: "60%",
            x: "center",
            textStyle: {
              fontSize: 36,
              fontFamily: "yueyuan",
              color: "#b3defc",
            },
          },
          
        ],
        series: [
          {
            name: "最外部进度条",
            type: "gauge",
            radius: "100%",
            center: ["center", "center"], // 仪表位置
            splitNumber: 100,
            axisLine: {
              lineStyle: {
                color: [
                  [
                    100,
                    new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                      {
                        offset: 0,
                        color: "rgba(145,207,255,0)",
                      },
                      {
                        offset: 0.5,
                        color: "rgba(70, 155 ,240,0.2)",
                      },
                      {
                        offset: 1,
                        color: "rgba(70, 155 ,240,0.8)",
                      },
                    ]),
                  ],
                  [1, "#f00"],
                ],
                width: 10,
              },
            },
            axisLabel: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            itemStyle: {
              show: false,
            },
            detail: {
              show: false,
            },
            pointer: {
              show: false,
            },
            animationDuration: 4000,
          },
          {
            name: "渐变数据环整个",
            type: "pie",
            radius: ["55%", "80%"],
            avoidLabelOverlap: false,
            startAngle: 210,
            color: [
              {
                type: "linear",
                x: 1,
                y: 0,
                x2: 0,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(66, 145, 226,0.9)", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(66, 145, 226,0.3)", // 100% 处的颜色
                  },
                ],
              },
              "transparent",
            ],
            hoverAnimation: false, //是否开启 hover 在扇区上的放大动画效果。
            legendHoverLink: false, //是否启用图例 hover 时的联动高亮。
            label: {
              normal: {
                show: false,
                position: "center",
              },
              emphasis: {
                show: false,
              },
            },
            labelLine: {
              normal: {
                show: false,
              },
            },
            data: [
              {
                value: 66,
                name: "1",
                itemStyle: {
                  borderWidth: 3,
                  borderColor: "#4C7FDB",
                },
              },
              {
                value: 34,
                name: "2",
                itemStyle: {
                  borderWidth: 0,
                  borderColor: "transparent",
                },
              },
            ],
          },
          {
            name: "内部渐变线 ",
            type: "pie",
            radius: ["44%", "46%"],
            avoidLabelOverlap: false, //是否启用防止标签重叠策略
            startAngle: -30,
            hoverAnimation: false,
            legendHoverLink: false,
            label: {
              normal: {
                show: false,
              },
              emphasis: {
                show: false,
              },
            },
            itemStyle: {
              normal: {
                color: ["#4497EA"],
              },
            },
            labelLine: {
              normal: {
                show: false,
              },
            },
            data: [
              {
                value: 30,
                name: "1",
                itemStyle: {
                  color: ["transparent"],
                },
              },
              {
                value: 60,
                name: "2",
              },
            ],
          },
          {
            name: "环形百分比",
            type: "pie",
            radius: ["55%", "80%"],
            avoidLabelOverlap: false,
            startAngle: -30,
            color: ["#091424", "transparent", "transparent"],
            hoverAnimation: false,
            legendHoverLink: false,
            clockwise: false, //饼图的扇区是否是顺时针排布。
            itemStyle: {
              show: false,
              normal: {
                borderColor: "transparent",
                borderWidth: "20",
              },
              emphasis: {
                borderColor: "transparent",
                borderWidth: "20",
              },
            },
            z: 10,
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
            data: [
              {
                value: ((100 - percent) * 240) / 360,
                label: {
                  normal: {
                    formatter: percent + "%",
                    position: "center",
                    show: true,
                    textStyle: {
                      fontSize: "60",
                      fontWeight: "normal",
                      color: "#b3defc",
                    },
                  },
                },
                name: "",
              },
              {
                value: 1,
                name: "",
              },
              {
                value: 100 - ((100 - percent) * 270) / 360,
                name: "",
              },
            ],
          },
          {
            // 底部
            name: "两端线",
            type: "pie",
            radius: ["55%", "80%"],
            startAngle: 210,
            endAngle: -40,
            labelLine: {
              show: false,
            },
            z: 15,
            silent: true,
            label: {
              show: false,
            },
            data: [
              {
                value: 3,
                itemStyle: {
                  color: "#4698EC",
                },
              },
              {
                value: 482,
                itemStyle: {
                  color: "transparent",
                },
              },
              {
                value: 3,
                itemStyle: {
                  color: "#4698EC",
                },
              },
              {
                value: 250,
                itemStyle: {
                  color: "transparent",
                },
              },
            ],
          },
        ],
      };