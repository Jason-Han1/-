option= {
    backgroundColor:"black",
    series: [
      {
        name: "通用设备占比",
        type: "pie",
        radius: ["25%", "40%"],
        avoidLabelOverlap: false,
        label: {
          formatter: "{b}: {c}%",
          textStyle: {
            color: "#96F5F6",
            fontSize: "12"
          },
          alignTo: "labelLine"
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "14",
            fontWeight: "bold"
          }
        },
        labelLine: {
          show: false,
          length: 0
        },
        data: [
          {
            value: 32.56,
            name: "空压机",
            itemStyle: {
              color: "#ADD5DF"
            }
          },
          {
            value: 26.43,
            name: "冰水机",
            itemStyle: {
              color: "#15B4A3"
            }
          },
          {
            value: 16.43,
            name: "制氧机",
            itemStyle: {
              color: "#62869B"
            }
          },
          {
            value: 16.43,
            name: "发电机",
            itemStyle: {
              color: "#2987DF"
            }
          },
          {
            value: 13.43,
            name: "锅炉",
            itemStyle: {
              color: "#1D222A"
            }
          }
        ]
      }
    ]
  };