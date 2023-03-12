var option = {
        dataset: {
          source: [
            ["name:", "Line 1", "Line 2", "Line 3", "Line 4", "Line 5"],
            ["猪肉", 1200],
            ["蔬菜", 1000],
            ["饮料", 746],
            ["粮油", 636],
            ["牛羊肉", 581],
            ["水果", 426],
            ["禽肉", 326],
            ["豆制品", 271],
            ["调味料", 220],
            ["干货", 221],
            ["海鲜", 168],
          ],
        },
        grid: {
          top: "35%",
          left: "3%",
          // right: "4%",
          bottom: "5%",
          containLabel: true,
        },
        xAxis: {
          type: "category", // 不设置类目轴，抽离的dataset数据展示不出来
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,0.8)",
            },
          },
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,0.3)", // 分割线颜色
            },
          },
        },
        yAxis: {
          type: "value",
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,0.8)",
            },
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            type: "bar",
            animationCurve: "easeOutBack",
            barWidth: 16,
            label: {
              show: true,
              position: "top",
              offset: [0, 0],
              color: "#fff",
              // fontSize: "12",
              style: {
                fill: "#fff"
              },
            },
            backgroundBar: {
              show: true,
              style: {
                fill: "rgba(97,152,255,0.30)",
              },
            },
            barStyle: {
              stroke: "rgba(41,244,236,1)",
            },
            gradient: {
              color: ["rgba(41,244,236,1)", "rgba(41,244,236,0)"],
            },
            itemStyle: {
              label: {
                show: true
              },
              labelLine: {
                show: false,
              },
              color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                { offset: 0, color: "rgba(41,244,236,0)" },
                { offset: 1, color: "rgba(41,244,236,1)" },
              ]),
              borderColor: "#a2f9f7",
              shadowBlur: 16,
              shadowColor: "#a2f9f7",
            },
          },
        ],
      }