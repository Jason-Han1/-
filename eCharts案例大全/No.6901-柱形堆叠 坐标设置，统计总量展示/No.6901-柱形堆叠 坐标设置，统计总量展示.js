option = {
        backgroundColor: "#161627",
        legend: {
          data: [
            // 设为circle 默认  rect
            { name: "河北", icon: "circle" },
            { name: "山东", icon: "circle" },
            { name: "北京", icon: "circle" }
          ],
          textStyle: {
            color: "#fff",
            fontSize: 14
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        xAxis: {
          type: "value",
          position: "top",
          // 坐标轴的线 文字
          axisLabel: {
            // 位置 上右下左
            padding: [0, 0, 10, 0],
            textStyle: {
              color: "white",
              fontSize: 14
            }
          },
          // 横坐标的纵向分割线
          splitLine: {
            show: false
          },
          // 坐标分割线的 显隐 长度
          axisTick: {
            show: true,
            length: 12
          },
          // 坐标轴的线颜色
          axisLine: {
            lineStyle: {
              color: "#0068B7",
              width: 2
            }
          }
        },
        yAxis: {
          type: "category",
          data: [
            "应急队伍",
            "应急专家",
            "应急装备物资",
            "避难场所",
            "物资储备库"
          ],
          // 坐标轴 文字样式
          axisLabel: {
            // 位置 上右下左
            padding: [0, 5, 0, 0],
            textStyle: {
              color: "white",
              fontSize: 14
            }
          },
          // 坐标分割线的 显隐
          axisTick: {
            show: false
          },
          // 坐标轴的线颜色
          axisLine: {
            lineStyle: {
              color: "#0068B7",
              width: 2
            }
          }
        },
        series: [
          {
            name: "总计",
            type: "bar",
            barGap: "-96%",
            barWidth: "18",
            data: [1000, 1000, 1000, 1000, 1000],
            itemStyle: {
              normal: {
                color: "rgba(255,255,255,0.1)",
                borderWidth: 1,
                borderColor: "#0068B7"
              }
            }
          },
          {
            name: "河北",
            data: [120, 200, 150, 80, 70],
            type: "bar",
            stack: "统计",
            barWidth: "16"
          },
          {
            name: "山东",
            data: [120, 200, 150, 80, 70],
            type: "bar",
            stack: "统计",
            barWidth: "16"
          },
          {
            name: "北京",
            data: [120, 200, 150, 80, 70],
            type: "bar",
            stack: "统计",
            barWidth: "16",
            // 最后一个 显示统计数据 可传递变量获取值
            label: {
              show: true,
              position: "right",
              fontSize: 13,
              padding: [0, 0, 0, 5],
              color: "#fff",
              formatter: function() {
                return "可传递变量";
              }
            }
          }
        ]
      };