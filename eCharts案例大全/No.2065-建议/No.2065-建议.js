option ={
  title: [
    {
      text: "建议",
      x: "44%",
      y: 0,
      textAlign: "center",
      textStyle: {
        align: "center",
        color: "#6BB2EB",
        fontSize: 12,
        fontWeight: "100",
      },
    },
    {
      text: "实际",
      x: "44%",
      y: 20,
      textAlign: "center",
      textStyle: {
        align: "center",
        color: "#F05A49",
        fontSize: 12,
        fontWeight: "100",
      },
    },
    {
      text: "营养素分析",
      left: "50%",
      top: "42%",
      textAlign: "center",
      textStyle: {
        fontSize: "14",
        color: "#B6B6B6",
        textAlign: "center",
        fontWeight: "100",
      },
    },
  ],
  series: [
    {
      name: "访问来源",
      type: "pie",
      startAngle: 85,
      radius: ["82%", "92%"],
      center: ["50%", "50%"],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: "30",
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        {
          value: Math.round(0.1 * 75),
          itemStyle: {
            normal: {
              color: "#F05A49",
            },
          },
        },

        {
          value: 75 - Math.round(0.2 * 75),
          name: " ",
          itemStyle: {
            normal: {
              color: "#2B91E1", //未完成的圆环的颜色
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
            },
          },
        },
        {
          value: 75 - Math.round(0.7 * 75),
          name: " ",
          itemStyle: {
            normal: {
              color: "#29AB91", //未完成的圆环的颜色
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
            },
          },
        },
        {
          value: 25,
          name: " ",
          itemStyle: {
            normal: {
              color: "transparent", //未完成的圆环的颜色
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
            },
          },
        },
      ],
    },
    {
      name: "访问来源1",
      type: "pie",
      startAngle: 85,
      radius: ["62%", "72%"],
      center: ["50%", "50%"],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: "30",
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: false,
      },

      data: [
        {
          value: Math.round(0.1 * 75),
          itemStyle: {
            normal: {
              color: "#F05A49",
            },
          },
        },

        {
          value: 75 - Math.round(0.2 * 75),
          name: " ",
          itemStyle: {
            normal: {
              color: "#2B91E1", //未完成的圆环的颜色
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
            },
          },
        },
        {
          value: 75 - Math.round(0.7 * 75),
          name: " ",
          itemStyle: {
            normal: {
              color: "#29AB91", //未完成的圆环的颜色
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
            },
          },
        },
        {
          value: 25,
          name: " ",
          itemStyle: {
            normal: {
              color: "transparent", //未完成的圆环的颜色
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
            },
          },
        },
      ],
    },
  ],
};
