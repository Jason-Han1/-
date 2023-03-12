option ={
        backgroundColor: "#263361",
        tooltip: {},
        dataZoom: {
          type: "slider",
          start: 0,
          end: 70,
          yAxisIndex: [0],
          width: 10,
          // left: 3,
          textStyle: {
            color: "#ccc",
            fontSize: 10,
          },
        },
        grid: {
          top: 30,
          right: 50,
          left: 50,
          bottom: 20,
        },

        yAxis: [
          {
            name: "单位/(万个)",
            minInterval: 1,
            nameTextStyle: {
              color: "rgba(191,227,255,.5)",
              fontSize: 10,
            },

            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            axisLine: {
              show: true,
              lineStyle: {
                color: "rgba(191,227,255,.5)",
                width: 0.5,
              },
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              color: "rgba(191,227,255,.5)",
              fontSize: 12,
              interval: 0,
            },
          }
        ],
        xAxis: [
          {
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "#095D58",
              },
            },
            nameTextStyle: {
              color: "#095D58",
              fontSize: 12,
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: "#6F6D6D",
                fontSize: 10,
              },
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "#14396C",
              },
            },
          },
        ],
        series: [
          {
            type: "bar",
            silent: true,
            
            itemStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: "#08E8A4", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#FFA952", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
            // offset: [1, 2],
            data: [120, 200, 150, 80, 70, 110, 130],
            barWidth: 9,
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
            // padding:10,
            symbolRepeat: "fixed",
            symbolMargin: 2,
            symbol: "rect",
            symbolClip: true,
            symbolSize: [1, 9],
            symbolOffset: [1, -2],
            symbolPosition: "start",
            symbolBoundingData: 200,
            data: [120, 200, 150, 80, 70, 110, 130],
            z: 2,
            animationEasing: "elasticOut",
          },
          //外框
          {
            name: "",
            type: "bar",
            label: {
              normal:{
                show: true,
                position: "right",
                color:"#fff",
                // textBorderWidth:0
              },
            },
            barGap: "-120%", // 设置外框粗细
            // data: [220,220],
            data: [120, 200, 150, 80, 70, 110, 130],
            barWidth: 14,
            itemStyle: {
              normal: {
                color: "transparent", // 填充色
                barBorderColor: "#BFE3FF", // 边框色
                barBorderWidth: 0.5, // 边框宽度
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