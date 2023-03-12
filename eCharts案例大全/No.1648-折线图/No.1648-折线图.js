option = {
        tooltip: {
          trigger: "axis",
          backgroundColor: "#fff",
          borderRadius: 4,
          extraCssText: "box-shadow:0px 0px 10px 6px rgba(170,170,170,0.51); ",
          textStyle: {
            fontSize: 16,
            color: "#333",
          },
          formatter: function (params) {
            var value = params[0].name;
            return (
              "<div style='padding:10px 20px'>" +
              "<span style='color:#333333;font-weight: 700'>" +
              value +
              "</span>" +
              "<br/>" +
              "<span style='color:#999999'>" +
              params[0].seriesName +
              "</span>" +
              ":" +
              "<span style='color:#e5622c;padding-left:6px'>" +
              params[0].value +
              "</span>" +
              "</div>"
            );
          },
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
            shadowStyle: {
              color: "rgba(229,98,44,.2)",
            },
          },
        },
        color: ["#F38027"],
        grid: {
          left: 40,
          bottom: 30,
          right: 20,
          top: 40,
        },
        xAxis: {
          type: "category",
          data: [
            "09-04",
            "09-04",
            "09-04",
            "09-04",
            "09-04",
            "09-04",
            "09-04",
            "09-04",
            "09-04",
            "09-04",
            "09-04",
          ],
          axisLabel: {
            color: "#333333",
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              // 设置x轴颜色
              color: "#EFF0F1",
            },
          },
        },
        yAxis: {
          type: "value",
          min: 0,
          axisLabel: {
            color: "#999999",
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              // 设置x轴颜色
              color: "#EFF0F1",
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#F5F5F5",
              type: "solid",
            },
          },
        },
        series: [
          {
            name: "订单金额（元）",
            data: [10, 20, 30, 30, 30, 30, 20, 10, 20, 40, 40],
            type: "line",
            symbol: "circle",
            symbolSize: 8,
            itemStyle: {
              borderWidth: 2,
              borderColor: "white",
            },
            smooth: 0.1,
            lineStyle: {
              shadowColor: "rgba(229,98,44, 0.4) ",
              shadowBlur: 20,
              shadowOffsetY: 5,
            },
          },
        ],
      };