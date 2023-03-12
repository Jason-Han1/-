option={
        backgroundColor:'#031d33',
        tooltip: {
          show: true
        },
        series: [
          {
            type: "pie",
            radius: ["30%", "45%"],
            center: ["50%", "50%"],
            hoverAnimation: true,
            z: 10,
            itemStyle: {
              normal: {
                borderWidth:5,
                borderColor: "#003359"
              }
            },
            label: {
              show: false
            },
            data: [100,23,43,65,34,74],
            labelLine: {
              show: false
            }
          }
        ]
      }