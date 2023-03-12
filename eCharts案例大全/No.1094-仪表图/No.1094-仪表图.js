let angle = 0; //角度，用来做简单的动画效果的
let value = 65; //图上角度数据
option = {
    backgroundColor:"#061740",
    title: {
          text: "{a|" + value + "}{c|%}",
          x: "center",
          y: "center",
          textStyle: {
            rich: {
              a: {
                fontSize: 45,
                color: "#29EEF3",
                fontWeight: "bold",
              },
              c: {
                fontSize: 45,
                color: "#29EEF3",
                fontWeight: "bold",
              },
            },
          },
        },
        series: [
          {
            name: "",
            type: "custom",
            coordinateSystem: "none",
            renderItem: function (params, api) {
              return {
                type: "arc",
                shape: {
                  cx: api.getWidth() / 2,
                  cy: api.getHeight() / 2,
                  r: (Math.min(api.getWidth(), api.getHeight()) / 1.5) * 0.65,
                  startAngle: ((0 + -angle) * Math.PI) / 180,
                  endAngle: ((360 + -angle) * Math.PI) / 180,
                },
                style: {
                  stroke: "#0CD3DB",
                  fill: "transparent",
                  lineWidth: 2.5,
                },
                silent: true,
              };
            },
            data: [0],
          },
          {
            name: "",
            type: "pie",
            radius: ["75%", "60%"],
            silent: true,
            clockwise: true,
            startAngle: 90,
            z: 0,
            zlevel: 0,
            label: {
              normal: {
                position: "center",
              },
            },
            data: [
              {
                value: value,
                name: "",
                itemStyle: {
                  normal: {
                    color: {
                      // 完成的圆环的颜色
                      colorStops: [
                        {
                          offset: 0,
                          color: "#4FADFD", // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: "#28E8FA", // 100% 处的颜色
                        },
                      ],
                    },
                  },
                },
              },
              {
                value: 100 - value,
                name: "",
                label: {
                  normal: {
                    show: false,
                  },
                },
                itemStyle: {
                  normal: {
                    color: "#173164",
                  },
                },
              },
            ],
          },
          {
            name: "",
            type: "gauge",
            radius: "83%",
            center: ["50%", "50%"],
            startAngle: 0,
            endAngle: 359.9,
            splitNumber: 8,
            hoverAnimation: true,
            axisTick: {
              show: false,
            },
            splitLine: {
              length: "110%",
              lineStyle: {
                width: 2,
                color: "rgba(0,0,0,0.6)",
              },
            },
            axisLabel: {
              show: false,
            },
            pointer: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                opacity: 0,
              },
            },
            detail: {
              show: false,
            },
            data: [
              {
                value: 0,
                name: "",
              },
            ],
          },
        ],
};
