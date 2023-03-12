option = {
        grid: {
          top: 0,
          left: 5,
          right: 5,
          bottom: 5,
          containLabel: true,
        },
        legend: {
          icon: "circle",
          bottom: 200,
          itemWidth: 8,
          itemHeight: 8,
          textStyle: {
            color: "#000",
            fontSize: 12,
          },
          data: [
            {
              name: "来信",
            },
            {
              name: "来电",
            },
            {
              name: "走访收集",
            },
            {
              name: "来访",
            },
            {
              name: "网络",
            },
          ],
        },
        xAxis: [
          {
            type: "value",
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            splitLine: {
              show: false,
            },
          },
        ],
        yAxis: [
          {
            data: [""],
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: "来信",
            type: "bar",
            barWidth: 10,
            stack: "反映方式",
            label: {
              normal: {
                distance: 10,
                align: "center",
                verticalAlign: "middle",
                show: true,
                position: "top",
                formatter: "{c}%",
                color: "#4C4C4F",
                fontSize: 12,
              },
            },
            itemStyle: {
              barBorderRadius: [
                5,
                0,
                0,
                5,
              ],
              color: "#5DC4FE",
            },
            data: [
              {
                value: ((20 / 100) * 100).toFixed(2),
                itemStyle: {
                  normal: {
                    color: {
                      type: "bar",
                      colorStops: [
                        {
                          offset: 0,
                          color: "#7CF0FE", // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: "#5DC4FE", // 100% 处的颜色
                        },
                      ],
                      globalCoord: false, // 缺省为 false
                    },
                  },
                },
              },
            ],
          },
          {
            name: "来电",
            type: "bar",
            barWidth: 10,
            stack: "反映方式",
            label: {
              normal: {
                distance: 10,
                align: "center",
                verticalAlign: "middle",
                show: true,
                position: "top",
                formatter: "{c}%",
                color: "#4C4C4F",
                fontSize: 12,
              },
            },
            itemStyle: {
              color: "#FFB55A",
            },
            data: [
              {
                value: ((20 / 100) * 100).toFixed(2),
                itemStyle: {
                  normal: {
                    color: {
                      type: "bar",
                      colorStops: [
                        {
                          offset: 0,
                          color: "#FFB55A", // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: "#F9687A", // 100% 处的颜色
                        },
                      ],
                      globalCoord: false, // 缺省为 false
                    },
                  },
                },
              },
            ],
          },
          {
            name: "走访收集",
            type: "bar",
            barWidth: 10,
            stack: "反映方式",
            itemStyle: {
              color: "#7F87FC",
            },
            label: {
              normal: {
                distance: 10,
                align: "center",
                verticalAlign: "middle",
                show: true,
                position: "top",
                formatter: "{c}%",
                color: "#4C4C4F",
                fontSize: 12,
              },
            },
            data: [
              {
                value: ((20 / 100) * 100).toFixed(2),
                itemStyle: {
                  normal: {
                    color: {
                      type: "bar",
                      colorStops: [
                        {
                          offset: 0,
                          color: "#88A6FD", // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: "#7F87FC", // 100% 处的颜色
                        },
                      ],
                      globalCoord: false, // 缺省为 false
                    },
                  },
                },
              },
            ],
          },

          {
            name: "来访",
            type: "bar",
            barWidth: 10,
            stack: "反映方式",
            itemStyle: {
              color: "#2F6DFF",
            },
            label: {
              normal: {
                distance: 10,
                align: "center",
                verticalAlign: "middle",
                show: true,
                position: "top",
                formatter: "{c}%",
                color: "#4C4C4F",
                fontSize: 12,
              },
            },
            data: [
              {
                value: ((20 / 100) * 100).toFixed(2),
                itemStyle: {
                  normal: {
                    color: {
                      type: "bar",
                      colorStops: [
                        {
                          offset: 0,
                          color: "#79CBFD", // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: "#2F6DFF", // 100% 处的颜色
                        },
                      ],
                      globalCoord: false, // 缺省为 false
                    },
                  },
                },
              },
            ],
          },
          {
            name: "网络",
            type: "bar",
            barWidth: 1,
            stack: "反映方式",
            itemStyle: {
              barBorderRadius: [
                0,
                5,
               5,
                0,
              ],
              color: "#01C998",
            },
            label: {
              normal: {
                distance: 10,
                align: "center",
                verticalAlign: "middle",
                show: true,
                position: "top",
                formatter: "{c}%",
                color: "#4C4C4F",
                fontSize: 12,
              },
            },
            data: [
              {
                value: ((20 / 100) * 100).toFixed(2),
                itemStyle: {
                  normal: {
                    color: {
                      type: "bar",
                      colorStops: [
                        {
                          offset: 0,
                          color: "#8BF780", // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: "#01C998", // 100% 处的颜色
                        },
                      ],
                      globalCoord: false, // 缺省为 false
                    },
                  },
                },
              },
            ],
          },
        ],
      };