      var colorList = [
        {
          x: 0,
          y: 1,
          x2: 0,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: "rgba(255, 179, 59, 1)", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "rgba(255, 179, 59, 1)", // 100% 处的颜色
            },
          ],
        },
        {
          x: 0,
          y: 1,
          x2: 0,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: "rgba(251, 209, 41, 1)", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "rgba(251, 209, 41, 1)", // 100% 处的颜色
            },
          ],
        },
        {
          x: 0,
          y: 1,
          x2: 0,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: "rgba(160, 226, 127, 1)", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "rgba(160, 226, 127, 1)", // 100% 处的颜色
            },
          ],
        },
      ];
      var valData = 80;
      var aryColor = "rgba(255, 179, 59, 1)";
      var colorData = [
        [0.25, colorList[0]],
        [0.75, colorList[1]],
        [1, colorList[2]],
      ];
      var valdataFixed = (valData / 100).toFixed(2);
      if (valData >= 0 && valData < 25) {
        aryColor = "rgba(255, 179, 59, 1)";
        colorData = [
          [valdataFixed, colorList[1]],
          [0.25, "transparent"],
          [0.7, "transparent"],
          [1, "transparent"],
        ];
      }
      if (valData >= 25 && valData < 75) {
        aryColor = "rgba(251, 209, 41, 1)";
        colorData = [
          [0.25, colorList[0]],
          [valdataFixed, colorList[1]],
          [0.75, "transparent"],
          [1, "transparent"],
        ];
      }
      if (valData >= 75 && valData < 100) {
        aryColor = "rgba(160, 226, 127, 1)";
        colorData = [
          [0.25, colorList[0]],
          [0.75, colorList[1]],
          [valdataFixed, colorList[2]],
          [1, "transparent"],
        ];
      }
      if (valData >= 100) {
        aryColor = "rgba(160, 226, 127, 1)";
        colorData = [
          [0.25, colorList[0]],
          [0.75, colorList[1]],
          [1, colorList[2]],
        ];
      }
option = {
        series: [
          {
            type: "gauge",
            splitNumber: 10,
            radius: "97%",
            center: ["50%", "70%"],
            min: 0,
            max: 100,
            startAngle: 180, //开始角度 左侧角度
            endAngle: 0, //结束角度 右侧
            pointer: {
              show: false,
              width: 7,
              length: "60%",
            },
            axisLine: {
              show: true,
              lineStyle: {
                width: 15,
                color: [[1, "#eeeeee"]],
                borderColor: "#000",
                borderWidth: "10",
              },
            },
            axisLabel: {
              show: false,
            }, //刻度标签。
            axisTick: {
              show: false,
              splitNumber: 5,
              lineStyle: {
                color: "#fff",
                width: 2,
              },
            }, //刻度样式
            splitLine: {
              show: false,
              length: "28%",
              lineStyle: {
                color: "#fff",
                width: 2,
              },
            }, //分隔线样式
            detail: {
              show: false,
            },
            title: {
              show: false,
            },
            data: [
              {
                value: valData,
                name: "决策层国际化导向",
              },
            ],
          },
          {
            type: "gauge",
            splitNumber: 4,
            radius: "100%",
            center: ["50%", "70%"],
            startAngle: 180, //开始角度 左侧角度
            endAngle: 0, //结束角度 右侧
            min: 0,
            max: 100,
            pointer: {
              // 指针
              show: true,
              width: 1,
              length: "85%",
              borderWidth: "0",
              // icon:"roundRect",  // 5.0以上版本支持
              // offsetCenter:[10, -60], // 5.0以上版本支持
              //itemStyle:{
              //     color:"#000"
              // }
            },
            axisLine: {
              show: true,
              lineStyle: {
                width: 28,
                color: colorData,
                borderColor: "#000",
                borderWidth: "10",
              },
            },
            axisLabel: {
              show: true,
              color: "#666",
              padding: [-80, -80, -80, -80],
              fontSize: 16,
              formatter: function (value) {
                return value.toFixed(0);
              },
            }, //刻度标签。
            axisTick: {
              show: false,
            }, //刻度样式
            splitLine: {
              show: false,
              length: "28%",
              lineStyle: {
                color: "#fff",
                width: 2,
              },
            }, //分隔线样式
            detail: {
              show: false,
            },
            title: {
              show: false,
            },
            data: [
              {
                value: valData,
                name: "决策层国际化导向",
                itemStyle: {
                  color: aryColor,
                },
              },
            ],
          },
        ],
      };