option = {
    title: {
        text: 'Awesome Chart'
    },
    tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
          formatter: function (params) {
            var tar = params[1];
            return tar.name + "<br/>" + tar.seriesName + " : " + tar.value;
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          splitLine: { show: false },
          axisLabel: {
            show: true,
            interval: 0,
          },
          axisTick: {
            alignWithLabel: true,
          },
          data: [
            "Total",
            "Rent",
            "Utilities",
            "Transportation",
            "Meals",
            "Other",
          ],
        },
        yAxis: {
          type: "value",
          splitLine: {
            show: true,
            lineStyle: {
              type: "dashed",
            },
          },
        },
        series: [
             {
            name: "背景",
            type: "bar",
            label: {
              show: true,
              position: "top",
              color: "#333",
            },
            barGap: "-100%",
            itemStyle: {
              normal: {
                color: "transparent",
              },
            },
            data: [300, 1200, 1400, 1700, 2900],
          },
          {
            name: "Placeholder",
            type: "bar",
            stack: "Total",
            itemStyle: {
              borderColor: "transparent",
              color: "transparent",
            },
            emphasis: {
              itemStyle: {
                borderColor: "transparent",
                color: "transparent",
              },
            },
            data: [0, 300, 1200, 1400, 1700, 0],
          },
          {
            name: "Life Cost",
            type: "bar",
            // barWidth: 30,
            stack: "Total",
            label: {
              show: true,
              position: "inside",
              color: "#fff",
            },
            itemStyle: {
              color: "#F35875",
              barBorderRadius: 6,
            },
            data: [
              300,
              900,
              200,
              300,
              1200,
              {
                value: 2900,
                itemStyle: {
                  color: "#F5A21D ",
                },
              },
            ],
          },
      ],
};
