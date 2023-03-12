option = {
          //   backgroundColor: "#081d5f",
          title: {
            text: '未完成工序',
            textStyle: {
              fontSize: 28,
              fontWeight: 500,
              color: "#fff",
            },
            left: "0%",
            top: "0%",
          },
          series: [
            {
              // 该系列为背景半胶囊
              data: [2000,2000,2000,2000,2000,2000],
              type: "bar",
              xAxisIndex: 0,
              silent: true,
              label: {
                normal: {
                  show: true,
                  position: "top",
                  formatter: (params) =>
                    `${ [1800, 1767, 1620, 1311, 1072, 810][params.dataIndex]}`,
                  fontSize: 20,
                  color: "#F6B00D",
                },
              },
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#474747" }, //柱图渐变色
                  { offset: 1, color: "#30ACFF" }, //柱图渐变色
                ]),
                barBorderRadius: 10,
              },
              barWidth: "80%",
              tooltip: {
                show: false,
              },
            },
            {
              data: [1800, 1767, 1620, 1311, 1072, 810],
              type: "bar",
              xAxisIndex: 1,
              itemStyle: {
                barBorderRadius: 10,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#FFB000" }, //柱图渐变色
                  { offset: 1, color: "#30ACFF" }, //柱图渐变色
                ]),
              },
              barWidth: "80%",
            },
          ],
          dataZoom: {
            type: "inside",
            xAxisIndex: [0, 1],
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
            },
          },
          xAxis: [
            {
              data: [2000,2000,2000,2000,2000,2000],
              axisLine: {
                show: false,
              },
              axisLabel: {
                show: false,
              },
              axisTick: {
                show: false,
              },
              position: "bottom",
            },
            {
              data: ["工序1", "工序2", "工序3", "工序4", "工序5", "工序6"],
              axisLine: {
                lineStyle: {
                  color: "#D8D8D8",
                },
              },
              axisLabel: {
                fontSize: 20,
                color: "#fff",
              },
              axisTick: {
                show: false,
              },
              position: "bottom",
            },
          ],
          yAxis: {
            axisLine: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
            },
          },
          grid: {
            left: "0%",
            right: "0%",
            bottom: "0",
            containLabel: true,
          },
          barCategoryGap: "0%",
        };
