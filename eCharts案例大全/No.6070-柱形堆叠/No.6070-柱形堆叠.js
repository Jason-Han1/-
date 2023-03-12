option = {
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        dataZoom: [
          {
            show: true,
            start: 0,
            end: 100
          }
        ],
        legend: {
          data: [
            { name: "待审核", icon: "circle" },
            { name: "审核通过", icon: "circle" }
          ],
          // 大小 和位置 文字样式
          itemGap: 12,
          right: 20,
          textStyle: {
            fontSize: 14,
            color: "#5D6C8E",
            fontFamily: "SourceHanSansCN-Regular"
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: [
              "安邦安邦测试企业企业去",
              "安邦安邦测试企业企业去",
              "安邦安邦测试企业企业去",
              "安邦安邦测试企业企业去",
              "安邦安邦测试企业企业去",
              "安邦安邦测试企业企业去",
              "安邦安邦测试企业企业去"
            ],
            axisTick: {
              alignWithLabel: true,
              show: false
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              rotate: 30,
              textStyle: {
                fontSize: 12,
                color: "#65779E"
              }
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            axisLine: {
              show: false
            },
            splitLine: {
              //分割线配置
              show: true,
              lineStyle: {
                color: "#EBEEF2"
              }
            },
            axisTick: {
              alignWithLabel: true,
              show: false
            },
            axisLabel: {
              textStyle: {
                fontSize: 12,
                color: "#8F96A5"
              }
            }
          }
        ],
        series: [
          {
            name: "审核通过",
            type: "bar",
            stack: "总量",
            showBackground: true,
            backgroundStyle: {
              color: "#EEF2F9"
            },
            barWidth: 30,
            itemStyle: {
              normal: {
                show: true,
                textStyle: {
                  fontSize: 16
                },
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "#5EA1FF"
                    },
                    {
                      offset: 1,
                      color: "#90BEFF"
                    }
                  ],
                  false
                )
              }
            },
            data: [100, 502, 200, 334, 390, 330, 220]
          },
          {
            name: "待审核",
            type: "bar",
            barWidth: 30,
            stack: "总量",
            showBackground: true,
            backgroundStyle: {
              color: "#EEF2F9"
            },
            itemStyle: {
              normal: {
                show: true,
                textStyle: {
                  fontSize: 16
                },
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "#FFD355"
                    },
                    {
                      offset: 1,
                      color: "#FFF0A0"
                    }
                  ],
                  false
                )
              }
            },
            data: [110, 152, 200, 334, 390, 330, 220]
          }
        ]
      };