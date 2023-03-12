option = {
      title: {
        text: "123",
        textStyle: {
          color: "#fff",
          fontSize: 16,
          fontWeight: "bold",
          fontFamily: "Microsoft YaHei"
        }
        //   left:"center",
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: 20,
        containLabel: true
      },
      yAxis: {
        type: "value",
        axisLabel: {
          show: true,
          formatter: "",
          color: "#00A4FF",
          fontSize: "12"
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        }
      },
      xAxis: [
        {
          type: "category",
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          axisLabel: {
            interval: 0,
            color: "#00A4FF",
            fontSize: 14,
            fontFamily: "Arial"
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          offset: 10
        }
      ],
      animationEasing: "elasticOut",
      series: [
        {
          type: "bar",
          itemStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              globalCoord: false // 缺省为 false
            },
            opacity: 1
          },
          silent: true,
          barWidth: 28,
          barGap: "-100%", // Make series be overlap
          data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
          markPoint: {
            label: { color: "#fff" },
            itemStyle: {
              color: "#00A4FF"
            },
            data: [
              { type: "max", name: "最大值" },
              { type: "min", name: "最小值" }
            ],
            animation: true,
            afterCompleteAnimation: el => {
              console.log("afterCompleteAnimation----------------");
              function animateLoop() {
                let symbolPath = el.childAt(0);
                let end = { position: [0, -20] };
                let animationEasing = "quinticInOut";
                symbolPath.animateTo(
                  end,
                  1000,
                  0,
                  animationEasing,
                  () => {
                    let start = { position: [0, 0] };
                    let animationEasing = "quinticInOut";
                    symbolPath.animateTo(
                      start,
                      1000,
                      0,
                      animationEasing,
                      undefined,
                      !!undefined,
                      false
                    );
                  },
                  !!undefined,
                  false
                );
              }

              let timeOut = el.dataIndex * 200;
              setTimeout(() => {
                animateLoop(el);
                self.setInterval(() => {
                  animateLoop(el);
                }, 1000 * 2 + 100);
              }, timeOut);
            }
          }
        }
      ]
    };