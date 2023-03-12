option = {
    backgroundColor: '#080b30',
     title: {
        text: '多仪表盘+不同刻度',
        textStyle: {
            align: 'center',
            color: '#fff',
            fontSize: 20,
        },
        top: '5%',
        left: 'center',
    },
   series: [
          {
            name: "变现能力", //系列名称,用于tooltip的显示
            type: "gauge", //仪表盘
            max: 200, //最大的数据值
            radius: "40%", //仪表盘半径,可以是百分比,也可以是绝对的数值
            splitNumber: 4, //仪表盘刻度的分割段数
            axisLine: {
              //仪表盘轴线
              lineStyle: {
                //轴线不同的颜色段
                color: [
                  [0.25, "#FF6E76"],
                  [0.5, "#FDDD60"],
                  [0.75, "#58D9F9"],
                  [1, "#7CFFB2"]
                ],
                width: 10 //轴线宽度
              }
            },
            splitLine: {
              distance: -5,
              //分割线
              length: 10, //分割线线长
              lineStyle: {
                color: "#fff" //分割线颜色
              }
            },
            axisTick: {
              distance: -5,
              //刻度样式
              length: 7, //刻度线长
              lineStyle: {
                color: "#fff"
              }
            },
            pointer: {
              itemStyle: {
                color: "auto"
              }
            },
            title: {
              textStyle: {
                fontSize: 10,
                color: "#777777"
              },
              offsetCenter: [0, "30%"]
            },
            axisLabel: {
              color: "auto",
              fontSize: 10,
              formatter: function(value) {
                if (value <= 200 && value >= 160) {
                  return "A";
                } else if (value <= 160 && value >= 120) {
                  return "B";
                } else if (value <= 120 && value >= 80) {
                  return "C";
                } else if (value <= 80 && value >= 40) {
                  return "D";
                } else if (value <= 40 && value >= 0) {
                  return "E";
                }
              }
            },
            detail: {
              //仪表盘详情
              formatter: "{value}",
              color: "#ffd805",
              fontSize: 20,
              fontWeight: "bold",
              fontFamily: "FZLTHJW--GB1-0",
              //相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移
              offsetCenter: [0, "75%"]
            },
            data: [{ value: 57, name: "变现能力" }]
          },
          // 城市排名
          {
            name: "城市排名", //系列名称,用于tooltip的显示
            type: "gauge", //仪表盘
            max: 100, //最大的数据值
            center: ["15%", "55%"], // 默认全局居中
            radius: "30%",
            splitNumber: 4, //仪表盘刻度的分割段数
            axisLine: {
              //仪表盘轴线
              lineStyle: {
                //轴线不同的颜色段
                color: [
                  [0.25, "#FF6E76"],
                  [0.5, "#FDDD60"],
                  [0.75, "#58D9F9"],
                  [1, "#7CFFB2"]
                ],
                width: 10 //轴线宽度
              }
            },
            splitLine: {
              distance: -5,
              //分割线
              length: 7, //分割线线长
              lineStyle: {
                color: "#fff" //分割线颜色
              }
            },
            axisTick: {
              distance: -5,
              //刻度样式
              length: 4, //刻度线长
              lineStyle: {
                color: "#fff"
              }
            },
            pointer: {
              itemStyle: {
                color: "auto"
              }
            },
            title: {
              textStyle: {
                fontSize: 7,
                color: "#777777"
              },
              offsetCenter: [0, "30%"]
            },
            axisLabel: {
              color: "auto",
              distance: 10,
              fontSize: 10
            },
            detail: {
              //仪表盘详情
              formatter: "{value}%",
              color: "#ffd805",
              fontSize: 10,
              fontWeight: "bold",
              fontFamily: "FZLTHJW--GB1-0",
              //相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移
              offsetCenter: [0, "75%"]
            },
            data: [{ value: 57, name: "城市排名" }]
          },
          // 区级排名
          {
            name: "区级排名", //系列名称,用于tooltip的显示
            type: "gauge", //仪表盘
            max: 100, //最大的数据值
            center: ["85%", "55%"], // 默认全局居中
            radius: "30%",
            splitNumber: 4, //仪表盘刻度的分割段数
            axisLine: {
              //仪表盘轴线
              lineStyle: {
                //轴线不同的颜色段
                color: [
                  [0.25, "#FF6E76"],
                  [0.5, "#FDDD60"],
                  [0.75, "#58D9F9"],
                  [1, "#7CFFB2"]
                ],
                width: 10 //轴线宽度
              }
            },
            splitLine: {
              distance: -5,
              //分割线
              length: 7, //分割线线长
              lineStyle: {
                color: "#fff" //分割线颜色
              }
            },
            axisTick: {
              distance: -5,
              //刻度样式
              length: 4, //刻度线长
              lineStyle: {
                color: "#fff"
              }
            },
            pointer: {
              itemStyle: {
                color: "auto"
              }
            },
            title: {
              textStyle: {
                fontSize: 7,
                color: "#777777"
              },
              offsetCenter: [0, "30%"]
            },
            axisLabel: {
              color: "auto",
              distance: 10,
              fontSize: 10
            },
            detail: {
              //仪表盘详情
              formatter: "{value}%",
              color: "#ffd805",
              fontSize: 10,
              fontWeight: "bold",
              fontFamily: "FZLTHJW--GB1-0",
              //相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移
              offsetCenter: [0, "75%"]
            },
            data: [{ value: 57, name: "区级排名" }]
          }
        ]
};