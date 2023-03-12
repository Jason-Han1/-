option ={
    backgroundColor:"#031d33",
        color: [  "#0097FB",
        "#92E1FF",
        "#FFC227",
        "#30ECA6",
        "#FDFA4E",
        "#FF4848"],
        series: [
          {
            name: "标签使用频率",
            type: "pie",
            radius: ["44%", "63%"],
            center: ["50%", "50%"],
            roseType: "radius",
            label: {
              show: false
            },
            emphasis: {
              label: {
                show: false
              }
            },
            itemStyle: {
              shadowBlur: 1,
              shadowColor: 2,
              shadowOffsetX: 5,
              shadowOffsetY: 5
            },
            data:[21,32,43,64,55]
          }
        ]
      };