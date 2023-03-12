option ={
        backgroundColor: "#263361",
        tooltip: {},
        grid: {
          top: 30,
          right: 10,
          left: 40,
          bottom: 50,
        },
        dataZoom: {
          type: "slider",
          start: 0,
          end: 70,
          height: 10,
          bottom: 3,
          textStyle: {
            color: "#ccc",
            fontSize: 10,
          },
        },
        xAxis: [
          {
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            axisLine: {
              show: false,
              lineStyle: {
                color: "#FFFFFF",
              },
            },
            axisTick: {
              show: false,
              // length: 1,
            },
            axisLabel: {
              color: "#FFFFFF",
              // show: false,
              width: 34,
              height: 16,
              fontSize: 12,
              lineHeight: 18,
              interval: 0,
            //   backgroundColor: {
            //     image: braItemBg,
            //   },
            },
          },
          {
            type: "category",
            show: true,
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
              length: 2,
            },
            axisLabel: {
              interval: 0,
              margin: 5,
              color: "#fff",
              fontSize: 12,
              padding: 3,
              backgroundColor: "rgba(9,93,88,0.30)",
            },
            data: [120, 200, 150, 80, 70, 110, 130],
          },
        ],
        yAxis: [
          {
            name: "单位：人",
            max: 200,
            offset: 10,
            splitLine: {
              show: false,
            },
            axisTick: {
              show: true,
              length: 2,
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#095D58",
              },
            },
            nameTextStyle: {
              color: "#095D58",
              fontSize: 12,
            },
            // axisLabel: {
            //   show: true,
            //   textStyle: {
            //     color: "#6F6D6D",
            //     fontSize: 10,
            //   },
            // },
          },
        ],
        series: [
          {
            type: "bar",
            // showBackground: true,
            showBackground: true,
            backgroundStyle: { color: "#001b3f" },
            itemStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#08E8A4", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(2,177,255,0.00)", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
            data: [120, 200, 150, 80, 70, 110, 130],
            barWidth: 12,
            padding: 6,
            z: 1,
          },
          {
            // 分隔
            type: "pictorialBar",
            itemStyle: {
              normal: {
                color: "#2f424a",
              },
            },
            symbolRepeat: "fixed",
            symbolMargin: 3,
            symbol: "rect",
            symbolClip: true,
            symbolSize: [12, 1],
            symbolPosition: "start",
            symbolBoundingData: 200,
            symbolOffset: [-3, 0],
            data: [120, 200, 150, 80, 70, 110, 130],
            z: 2,
            animationEasing: "elasticOut",
          },
           {
            name: "",
            type: "line",
            // barWidth: 19,
            symbol: "rect",
            symbolSize: [7, 1],
            symbolOffset: [-3, "-100%"],
            itemStyle: {
              color: "rgba(0,0,0,0)",
              borderWidth: 2,
              borderColor: "#fff",
              padding: 0,
            },
            hoverAnimation: false,
            legendHoverLink: false,
            z: 10,
            data: [120, 200, 150, 80, 70, 110, 130],
          },
          //外框
          {
            name: "",
            type: "bar",
            barGap: "-140%", // 设置外框粗细
            data: [200, 200, 200, 200, 200, 200, 200],
            barWidth: 22,
            itemStyle: {
              normal: {
                color: "transparent", // 填充色
                barBorderColor: "rgba(9,200,137,.3)", // 边框色
                barBorderWidth: 1, // 边框宽度
                // barBorderRadius: 0, //圆角半径
                label: {
                  // 标签显示位置
                  show: false,
                  position: "top", // insideTop 或者横向的 insideLeft
                },
              },
            },
            z: 0,
          },
         
        ],
      }
