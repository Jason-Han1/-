option = {
  tooltip: {
          trigger: "item"
        },
        legend: {
          right: "10%",
          width: "50",
          textStyle: {
            color: "#fff"
          },
          itemGap: 20
        },
        emphasis: {
          show: true,
          textStyle: {}
          // formatter:
        },
        graphic: {
          type: "text",
          left: "28%",
          top: "center",
          z: 2,
          zlevel: 100,
          style: {
            // text: "金乡站" + "\n" + "占比",
            // fill: "white"
            // font: "bolder  20px  微软雅黑"
          }
        },
        color: ["#afa3f5", "#00d488", "#40eed5", "#3cafff"],
        series: [
          {
            // name: "病害内容",
            type: "pie",
            radius: [40, "80%"],
            center: ["30%", "50%"],
            data: [
              {
                value: 50,
                name: "厂内车辆(25辆)",
                itemStyle: {}
              },
              {
                value: 88,
                name: "去程车辆(16辆)",
                itemStyle: {}
              },
              {
                value: 50,
                name: "厂内车辆(22辆)",
                itemStyle: {}
              },
              {
                value: 88,
                name: "去程车辆(11辆)",
                itemStyle: {}
              },
              {
                value: 88,
                name: "维修车辆(11辆)",
                itemStyle: {}
              }
            ],

            label: {
              normal: {
                show: true,
                position: "inside",
                textStyle: {
                  color: "#333",
                  fontWeight: 300,
                  fontSize: 16 //文字的字体大小
                },
                formatter: "{d}%"
              }
            },
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          },
          {
            tooltip: {
              show: false
            },
            label: {
              normal: {
                show: false
              }
            },
            hoverAnimation: false,
            type: "pie",
            radius: [80, "80%"],
            center: ["30%", "50%"],
            data: [{ value: 100, name: "", itemStyle: { color: "#9bd5fd" } }]
          }
        ]
};