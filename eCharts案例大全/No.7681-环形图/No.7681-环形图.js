option = {
        backgroundColor: 'rgba(255, 255, 255, 0)', // saveAsImage背景透明
        // toolbox: {
        //   // 显示工具箱
        //   show: true,
        //   position: [10, 10],
        //   feature: {
        //     mark: {
        //       show: true
        //     },
        //     // // 还原
        //     // restore: {
        //     //   show: true
        //     // },
        //     // 保存为图片
        //     saveAsImage: {
        //       show: true,
        //       title: "保存",
        //       backgroundColor: "transparent" 
        //     }
        //   }
        // },
        angleAxis: {
          max: 100,
          show: false
        },
        radiusAxis: {
          type: "category",
          show: true,
          axisLabel: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        polar: {
          radius: 300,
          center: ["50%", "50%"]
        },
        series: [
          {
            type: "bar",
            roundCap: true,
            barWidth: 40,
            showBackground: true,
            backgroundStyle: {
              color: "#0a6bce"
            },
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "#00b0ff" // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#007fff" // 100% 处的颜色
                }
              ],
              global: false // 缺省为 false
            },
            data: [33.3],//在这里更改数值，其他地方不要动
            coordinateSystem: "polar",
            name: "A",
            label: {
              show: true
            }
          }
        ]
      };