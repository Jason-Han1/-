option = {
    backgroundColor:'#124294',
        title: {
          text: '山东',
          textStyle: {
            fontSize: 36,
            color: "rgba(255, 255, 255, 0.7)",
            rich: {
              a: {
                fontSize: 36,
              },
            },
          },
          x: "center",
          y: "40%",
        },
        graphic: [
          {
            type: "group",
            left: "center",
            top: "50%",
            children: [
              {
                type: "text",
                z: 100,
                left: "10",
                top: "middle",
                style: {
                  fill: "#ffffff",
                  text: '60%',
                  font: "36px",
                //   fontFamily: "FZHZGBJW",
                },
              }
            ],
          },
        ],
        series: [
          {
            name: "水球图",
            type: "liquidFill",
            radius: "50%",
            // center: ["50%", "55%"],
            // waveAnimation: 5, // 动画时长
            // amplitude: 10, // 振幅
            data: [0.6],
            color: [
              {
                type: "linear",
                x: 0,
                y: 1,
                x2: 0,
                y2: 0,
                colorStops: [
                  {
                    offset: 1,
                    color: ["rgba(2,144,255,0.4)"], // 0% 处的颜色
                  },
                  {
                    offset: 0,
                    color: ["rgba(45,175,230,0.8)"], // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            ],
            label: {
              formatter: "",
            },
            outline: {
              show: true,
              borderDistance: 0,
              itemStyle: {
                borderColor: new echarts.graphic.LinearGradient(
                  0,
                  1,
                  0,
                  0,
                  [
                    {
                      offset: 1,
                      color: "rgba(21, 80, 161, 0.01)",
                    },
                    {
                      offset: 0,
                      color: "rgba(15, 115, 238, 0.6)",
                    },
                  ]
                ),
                borderWidth: 3,
              },
            },
            backgroundStyle: {
              color: new echarts.graphic.RadialGradient(0.5, 0.5, 0.5, [
                {
                  offset: 1,
                  color: "rgba(15, 115, 238,0.3)",
                },
                {
                  offset: 0.95,
                  color: "rgba(15, 115, 238, 0.5)",
                },
                {
                  offset: 0.8,
                  color: "rgba(15, 115, 238, 0.3)",
                },
                {
                  offset: 0.4,
                  color: "rgba(21, 80, 161, 0.01)",
                },
              ]),
            },
          },
        ],
      };