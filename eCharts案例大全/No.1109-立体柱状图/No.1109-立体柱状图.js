
option ={
        xAxis: {
          offset: 10,
          type: "category",
          data: ["渔船", "货船", "油轮", "客船", "作业船", "执法船", "雷达目标", "其他"],
          axisTick: {
            show: false,
          },
          axisLabel: {
            interval: 0, //
            rotate: 0, // 旋转的度数
          },
          textStyle: {
              fontFamily: "黑体",
              color: "#999", //坐标值得具体的颜色
            },
          axisLine: {
            onZero: false,
            show: false,
          },
          splitLine: {
            lineStyle: {
              color: "#333",
            },
          },
        },
        yAxis: {
          position: "left",
           textStyle: {
              fontFamily: "黑体",
              color: "#999", //坐标值得具体的颜色
            },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#333",
            },
          },
          splitLine: {
            lineStyle: {
              color: "#333",
            },
          },
          axisTick: {
            show: true,
            inside: true,
            lineStyle: {
              color: "#333",
            },
          },
        },
        series: [
          {
            name: "实时目标统计",
            type: "bar",
            showSymbol: false,
            hoverAnimation: false,
            showBackground: true,
            backgroundStyle: {
              color: "#222",
              borderRadius: [50, 50, 0, 0],
              shadowColor: "#222",
              shadowOffsetY: -20,
            },
            data:[33,55,70,40,41,14,31,111],
            barWidth: 14, //柱图宽度
            itemStyle: {
              // 添加渐变颜色
               color: {
                  type: "linear", // 线性渐变
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#ec3d5a", // 0%处的颜色为红色
                    },
                    {
                      offset: 1,
                      color: "#fe9b5a", // 100%处的颜色为蓝
                    },
                  ],
                },
            },
          },
          {
            type: "pictorialBar",
            itemStyle: {
              //顶部
              normal: {
                color: function (params) {
                  let colorList = ["#ff9600"];
                  return colorList[0];
                },
                // borderColor: "#000",
                borderWidth: 0.1,
                label: {
                  show: true, //开启显示
                  position: "top", //在上方显示
                  textStyle: {
                    //数值样式
                    color: "#aeaeae",
                    fontSize: 10,
                    fontFamily: "微软雅黑",
                  },
                  offset: [0, -2],
                },
              },
            },
            symbol: "diamond",
            symbolSize: ["14", "10"],
            symbolOffset: [0, "-50%"],
            symbolPosition: "end",
            data:[33,55,70,40,41,14,31,111],
            z: 3,
          },
          {
            type: "pictorialBar",
            itemStyle: {
              //底部
              color: function (params) {
                  let colorList = ["#fe9b5a"];
                  return colorList[0];
                },
                borderColor: "#000",
                borderWidth: 0.1,
                label: {
                  show: false, //开启显示
                  position: "top", //在上方显示
                  textStyle: {
                    //数值样式
                    color: "#FFFFFF",
                    fontSize: 14,
                    fontFamily: "微软雅黑",
                  },
                  offset: [0, -2],
                },
            },
            symbol: "diamond",
            symbolSize: ["14", "10"],
            symbolOffset: [0, "50%"],
            symbolPosition: "start",
            data:[33,55,70,40,41,14,31,111],
            z: 0,
          },
        ],
        grid: {
          top: 30,
          bottom: 40,
          left: 40,
          right: 10,
        },
      };
