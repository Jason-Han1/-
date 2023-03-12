let value = 75;
      let ratio = "90分以上";
       option = {
        backgroundColor: "#fff",
        title: {
          text: "{a|" + ratio + "}",
          subtext: "{a|" + value + "}{c|%}",
          x: "center",
          y: "43%",
          textStyle: {
            rich: {
              a: {
                fontSize: 50,
                color: "#fff",
              },

              c: {
                fontSize: 20,
                color: "#ffffff",
                // padding: [5,0]
              },
            },
          },
          subtextStyle: {
            rich: {
              a: {
                fontSize: 50,
                color: "#fff",
              },

              c: {
                fontSize: 50,
                color: "#ffffff",
                // padding: [5,0]
              },
            },
          },
        },
        grid:{
           left:"20%",
           width:"20%",
           height:"20%",
        } ,
        legend: {
          type: "plain",
          orient: "vertical",
          right: 0,
          top: "10%",
          align: "auto",
          data: [
            
          ],
          textStyle: {
            color: "white",
            fontSize: 16,
            padding: [10, 1, 10, 0],
          },
          selectedMode: false,
        },
        series: [
          {
            name: "频率",
            type: "pie",
            // radius: ["58%", "45%"],
             radius: ['76%', '60%'],
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
                    color: "rgb(59, 161, 255)",
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
                    color: "rgb(181, 185, 191)",
                  },
                },
              },
            ],
          },
          {
            //内圆
            type: "pie",
            // radius: "45%",
            radius: "60%",
            center: ["50%", "50%"],
            z: 1,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: "rgb(4, 8, 13)",
                  },
                  {
                    offset: 1,
                    color: "rgb(68, 123, 205)",
                  },
                ]),
              },
            },
            hoverAnimation: false,
            label: {
              show: false,
            },
            tooltip: {
              show: false,
            },
            data: [100],
          },
        ],
      };
    