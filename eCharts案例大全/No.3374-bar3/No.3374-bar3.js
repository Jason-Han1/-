option ={
        backgroundColor: "#263361",
        tooltip: {},
        grid: {
          top: 30,
          right: 10,
          left: 50,
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
            minInterval: 1,
            //scale:true,
            // min: function(item){
            // 	return parseInt(item.min / 10) * 10
            // },
            // max: 200,
            offset: 10,
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "rgba(191,227,255,.5)",
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
              // formatter: function(value){
              //   return parseInt(value * 100) + '%'
              // },
            },
          },
        ],
        series: [
          {
            type: "bar",
            showBackground: true,
            backgroundStyle: {color:"rgba(0,134,255,0.10)"},
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
                    color: "rgba(0,134,255,0.60)", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
            data: [120, 200, 150, 80, 70, 110, 130],
            barWidth: 8,
            z: 1,
          },{
            name: "",
            type: "line",
            // barWidth: 19,
            symbol: "rect",
            symbolSize: [6, 1],
            symbolOffset: [-4, -2],
            itemStyle: {
              color: "rgba(0,0,0,0)",
              borderWidth: 1,
              borderColor: "#fff",
              padding: 0,
            },
            hoverAnimation: false,
            legendHoverLink: false,
            z: 10,
            data: [120, 200, 150, 80, 70, 110, 130],
            label: {
              // 标签显示位置
              show: false,
            },
          },{
            name: "外框",
            type: "bar",
            barGap: "-200%", // 设置外框粗细
            data: [200, 200, 200, 200, 200, 200, 200],
            barWidth: 24,
            itemStyle: {
                normal: {
                    color: "transparent", // 填充色
                    barBorderColor: "rgba(9,200,137,.3)", // 边框色
                    barBorderWidth: 1, // 边框宽度
                    // barBorderRadius: 0, //圆角半径
                    label: {
                        // 标签显示位置
                        show: false,
                        position: "top" // insideTop 或者横向的 insideLeft
                    }
                }
            },
            z: 0,
          },
           {
            // 分隔
            type: "pictorialBar",
            itemStyle: {
              normal: {
                color: "#095D58",
              },
            },
            symbolRepeat: "fixed",
            symbolMargin: 13,
            symbol: "rect",
            symbolClip: true,
            symbolSize: [12, 1], 
            symbolPosition: "start",
            symbolBoundingData: 200,
            symbolOffset: [-4, 0],
            data: [200, 200, 200, 200, 200, 200, 200],
            z: 2,
            animationEasing: "elasticOut",
          },
          
        ],
      };
