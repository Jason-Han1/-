option = {
        // backgroundColor: "transparent",
        backgroundColor: "#080b30",
        // 默认色板 数据充足会挨着去色，数据超过颜色值 从头依次循环
        color: [
          "red",
          "#87cefa",
          "#da70d6",
          "#32cd32",
          "#6495ed",
          "#ff69b4",
          "#ba55d3",
          "#cd5c5c",
          "#ffa500",
          "#40e0d0",
          "#1e90ff",
          "#ff6347",
          "#7b68ee",
          "#00fa9a",
          "#ffd700",
          "#6699FF",
          "#ff6666",
          "#3cb371",
          "#b8860b",
          "#30e0e0"
        ],
        tooltip: {},
        legend: {
          data: ["邯郸", "武安", "北京", "上海", "广州"],
          bottom: 5, //位置
          left: 5, //位置
          textStyle: {
            color: "#fff",
            fontSize: 14
          },
          itemGap: 20,
          borderRadius: 4, //圆角
          itemWidth: 18, // 图例图形宽度
          itemHeight: 18 // 图例图形高度
        },
        radar: {
          // shape: 'circle',
          name: {
            textStyle: {
              color: "#fff"
            }
          },
          indicator: [
            { name: "应急队伍", max: 20 },
            { name: "应急专家", max: 20 },
            { name: "应急装备物资", max: 20 },
            { name: "避难场所", max: 20 },
            { name: "物资储备库", max: 20 }
          ],
          // 外边框的线
          splitLine: {
            lineStyle: {
              color: "rgba(57,103,195,1)"
            }
          },
          // 内部 间隔分布颜色
          splitArea: {
            show: false
          },
          // 内部连接线
          axisLine: {
            lineStyle: {
              color: "rgba(57,103,195,1)"
            }
          }
        },
        series: [
          {
            name: "统计",
            type: "radar",
            // areaStyle: {normal: {}},
            data: [
              {
                value: [12, 12, 11, 12, 11],
                name: "邯郸",
                areaStyle: {
                  opacity: 0.2
                }
              },
              {
                value: [17, 16, 4, 12, 2],
                name: "武安",
                areaStyle: {
                  opacity: 0.2
                }
              },
              {
                value: [14, 12, 13, 15, 11],
                name: "北京",
                // 所属区域透明度 和雷达图数据颜色一致
                areaStyle: {
                  opacity: 0.2
                }
              },
              {
                value: [11, 14, 15, 16, 3],
                name: "上海",
                areaStyle: {
                  opacity: 0.2
                }
              },
              {
                value: [7, 12, 14, 12, 10],
                name: "广州",
                areaStyle: {
                  opacity: 0.2
                }
              }
            ]
          }
        ]
      };