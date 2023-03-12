 option = {
        tooltip: {
          trigger: "item",
          formatter: "数据统计 <br/>{b} : {c} ({d}%)"
        },
        legend: {
          right: 40,
          top: 40,
          itemGap: 20,
          itemWidth: 14,
          orient: "vertical",
          textStyle: { fontSize: 14, color: "#333333" }
        },
        title: {
          text: 298,
          top: "42%",
          left: "40%",
          subtext: "总数",
          itemGap: 5,
          textStyle: {
            color: "#45a0e8",
            fontSize: 24
          },
          subtextStyle: {
            color: "#61bbff",
            fontSize: 20
          },
          textAlign: "center"
        },
        color: [
          "#5dcafd",
          "#73e363",
          "#05eca7",
          "#fdbd2c",
          "#f27b72",
          "#7464fb",
          "#4091fe",
          "#9a60b4",
          "#ea7ccc"
        ],
        series: [
          {
            name: "Nightingale Chart",
            type: "pie",
            radius: ["30%", "70%"],
            center: ["41%", "50%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 0
            },
            data: [
              {
                value: 30,
                name: "站前1标",
                label: {
                  color: "#5dcafd"
                }
              },
              {
                value: 40,
                name: "站前2标",
                label: {
                  color: "#73e363"
                },
                color: "#73e363"
              },
              {
                value: 48,
                name: "站前3标",
                label: {
                  color: "#05eca7"
                },
                color: "#05eca7"
              },
              {
                value: 28,
                name: "站前4标",
                label: {
                  color: "#fdbd2c"
                },
                color: "#fdbd2c"
              },
              {
                value: 49,
                name: "站前5标",
                label: {
                  color: "#f27b72"
                },
                color: "#f27b72"
              },
              {
                value: 58,
                name: "站前6标",
                label: {
                  color: "#7464fb"
                },
                color: "#7464fb"
              },
              {
                value: 45,
                name: "站前7标",
                label: {
                  color: "#4091fe"
                },
                color: "#4091fe"
              }
            ],
            label: {
              formatter: function(params) {
                return `{normal|${params.name}：}\r\r\n{value|${params.data.value} (${params.percent})%}`
              },
              rich: {
                normal: {
                  //   color: "#8A8A8A",
                  fontSize: 16,
                  align: "left"
                },
                value: {
                  fontSize: 14,
                  //   color: "#8A8A8A",
                  fontWeight: 600,
                  padding: [5, 0, 0, 0]
                }
              }
            }
          }
        ]
      }