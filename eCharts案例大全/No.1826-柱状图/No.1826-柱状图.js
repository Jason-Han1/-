option = {
    tooltip: {
            trigger: "axis",
          },
          legend: {
            data: ["已完成", "作业中"],
            bottom: 25,
            left: "center",
          },
          toolbox: {
            show: false,
          },
          calculable: true,
          xAxis: [
            {
              type: "category",
              data: ["底稿模块", "TB模块", "报告模块", "归档模块"],
            },
          ],
          yAxis: [
            {
              type: "value",
            },
          ],
          itemStyle: {
            borderRadius: 3,
          },
          series: [
            {
              name: "已完成",
              type: "bar",
              data: [10, 20, 21, 24],
            },
            {
              name: "作业中",
              type: "bar",
              data: [11, 12, 2, 26],
            },
          ],
};
