    let val = 0,
    pieColor = "";
    option = {
        tooltip: {
          show: false,
        },
        series: [
          {
            name: "温度",
            type: "gauge",
            radius: "90%",
            startAngle: 225,
            endAngle: -115,
            min: 0,
            max: 500,
            axisLine: {
              show: true,
              lineStyle: {
                width: 20,
                shadowBlur: 1,
                color: [
                  [0, "#5FBD51"],
                  [0.1, "#5FBD51"],
                  [0.11, "transparent"],
                  [0.2, "#F1BE1C"],
                  [0.21, "transparent"],
                  [0.3, "#F76A2C"],
                  [0.31, "transparent"],
                  [0.4, "#E32830"],
                  [0.41, "transparent"],
                  [0.6, "#A41E60"],
                  [0.61, "transparent"],
                  [1, "#85202F"],
                ],
              },
            },
            axisTick: {
              show: false,
            },
            splitNumber: 1000,
            silent: true,
            label: {
              normal: {
                position: "inner",
                textStyle: {
                  color: "#fff",
                  fontSize: 18,
                  fontWeight: "bold",
                },
              },
            },
            axisLabel: {
              formatter: function (e) {
                switch (e + "") {
                  case "20":
                    return "优";
                  case "75":
                    return "良";
                  case "125":
                    return "轻";
                  case "175":
                    return "中";
                  case "250":
                    return "重";
                  case "360":
                    return "严重";
                  default:
                    return "";
                }
              },
              distance: 0,
              textStyle: {
                fontSize: 12,
                position: "",
                fontWeight: "",
              },
            },
            splitLine: {
              show: false,
            },
            pointer: {
              width: "3%",
              length: "70%",
            },
            detail: {
              z: 6,
              offsetCenter: [0, 0],
              textStyle: {
                color: "#fff",
                fontSize: 16,
              },
            },
            data: [
              {
                value: 10,
                name: "",
              },
            ],
          },
          {
            name: "1212",
            type: "gauge",
            radius: "95%",
            startAngle: 225,
            endAngle: -115,
            min: 0,
            max: 500,
            z: -1,
            axisLine: {
              show: true,
              lineStyle: {
                width: 25,
                color: [
                  [0, "transparent"],
                  [0.1, "rgba(249, 212, 214,.4)"],
                  [0.11, "transparent"],
                  [0.2, "rgba(249, 212, 214,.4)"],
                  [0.21, "transparent"],
                  [0.3, "rgba(249, 212, 214,.4)"],
                  [0.31, "transparent"],
                  [0.4, "rgba(249, 212, 214,.4)"],
                  [0.41, "transparent"],
                  [0.6, "rgba(249, 212, 214,.4)"],
                  [0.61, "transparent"],
                  [1, "rgba(249, 212, 214,.4)"],
                ],
              },
            },
            axisTick: {
              show: 0,
            },
            splitLine: {
              show: 0,
            },
            axisLabel: {
              show: 0,
            },
            pointer: {
              show: false,
            },
            detail: {
              show: false,
            },
            data: [
              {
                show: false,
              },
            ],
          },
          {
            name: "",
            type: "pie",
            radius: "30%",
            silent: true,
            z: -1,
            zlevel: -1,
            label: {
              normal: {
                show: false,
              },
            },
            data: [
              {
                value: 1,
                name: "",
                itemStyle: {
                  normal: {
                    color: pieColor,
                  },
                },
              },
            ],
          },
        ],
      };
      var value = option.series[0].data[0].value;
      if (value < 50) {
        pieColor = "#5FBD51";
      } else if (50 <= value && value < 101) {
        pieColor = "#F1BE1C";
      } else if (101 <= value && value < 151) {
        pieColor = "#F76A2C";
      } else if (151 <= value && value < 201) {
        pieColor = "#E32830";
      } else if (201 <= value && value < 301) {
        pieColor = "#A41E60";
      } else if (301 <= value && value < 1000) {
        pieColor = "#85202F";
      }
      option.series[2].data[0].itemStyle.normal.color = pieColor;