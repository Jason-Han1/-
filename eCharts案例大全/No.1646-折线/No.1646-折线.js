option = {
        legend: {
          data: ["新用户", "访问用户", "累计用户"],
          left: 0,
        },
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
              "<div style='padding:10px 20px;display:flex;flex-direction: column;justify-content: center;align-items: center;'>" +
              "<span style='color:#333333;font-weight: 700';align-self: flex-end;>" +
              value +
              "</span>" +
              "<span style='color:#999999;align-self: flex-end;'>" +
              params[0].seriesName +
              ":" +
              "<span style='color:#078B54;padding-left:6px;'>" +
              params[0].value +
              "</span>" +
              "</span>" +
              "<span style='color:#999999';align-self: flex-end;>" +
              params[1].seriesName +
              ":" +
              "<span style='color:#0851A5;padding-left:6px'>" +
              params[1].value +
              "</span>" +
              "</span>" +
              "<span style='color:#999999';align-self: flex-end;>" +
              params[2].seriesName +
              ":" +
              "<span style='color:#E5622C;padding-left:6px'>" +
              params[2].value +
              "</span>" +
              "</span>" +
              "</div>"
            );
          },

          axisPointer: {
            lineStyle: {
              color: "#E1E1E1",
            },
          },
        },
        color: ["#078B54", "#F38027", "#0851A5"],
        grid: {
          left: 40,
          bottom: 30,
          right: 20,
          top: 60,
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
            name: "新用户",
            data: [
              100, 20, 10, 30, 30, 100, 20, 10, 20, 40, 400, 20, 40, 40, 10, 10,
              10, 54, 7,
            ],
            type: "line",
            symbol: "circle",
            symbolSize: 8,
            smooth: 0.1,
            itemStyle: {
              borderWidth: 2,
              borderColor: "white",
            },
          },
          {
            name: "访问用户",
            data: [
              10, 20, 100, 301, 30, 30, 20, 10, 20, 40, 40, 10, 10, 10, 54, 70,
            ],
            type: "line",
            symbol: "circle",
            symbolSize: 8,
            smooth: 0.1,
            itemStyle: {
              borderWidth: 2,
              borderColor: "white",
            },
          },
          {
            name: "累计用户",
            data: [
              10, 20, 300, 30, 30, 300, 230, 10, 20, 40, 40, 20, 40, 40, 10, 10,
              10, 54, 70,
            ],
            type: "line",
            symbol: "circle",
            symbolSize: 8,
            smooth: 0.1,
            itemStyle: {
              borderWidth: 2,
              borderColor: "white",
            },
          },
        ],
      };