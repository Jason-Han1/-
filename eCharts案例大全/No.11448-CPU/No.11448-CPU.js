
 var colors = [
      "#5793f3",
      "#d14a61",
      "#675bba",
      "#FF8C00",
      "#458B00",
      "#0000EE"
    ];
option = {
    color: colors,
      title: {
        text: "CPU"
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross"
        }
      },
      grid: {
        right: "15%"
      },
      legend: {
        orient: "vertical",
        right: "20",
        top: "middle",
        data: [
          "server1",
          "server2",
          "server3",
          "server1CPU",
          "server2CPU",
          "server3CPU"
        ]
      },
      xAxis: [
        {
          type: "category",
          axisTick: {
            alignWithLabel: true
          },
          data: [
            "1月1日",
            "1月2日",
            "1月3日",
            "1月4日",
            "1月5日",
            "1月6日",
            "1月7日",
            "1月8日",
            "1月9日",
            "1月10日",
            "1月11日",
            "1月12日"
          ]
        }
      ],
      yAxis: [
        {
          type: "value",
          name: "时长",
          scale: true,
          min: 0,
          max: 24,
          interval: 2,
          boundaryGap: [0.2, 0.2],
          axisLabel: {
            formatter: "{value}h"
          }
        },
        {
          type: "value",
          name: "CPU使用率",
          scale: true,
          min: 0,
          max: 100,
          interval: 10,
          splitLine: {
            show: false,
            color: "#FFEC8B",
            lineStyle: { type: "dashed" }
          },
          boundaryGap: [0.2, 0.2],
          axisLabel: {
            formatter: "{value}%"
          }
        }
      ],
      series: [
        {
          name: "server1",
          type: "bar",
          data: [14, 6, 22, 3, 16, 5, 6, 10, 16, 6, 15, 13]
        },
        {
          name: "server2",
          type: "bar",
          data: [14, 15, 23, 12, 5, 18, 1, 16, 3, 3, 15, 9]
        },
        {
          name: "server3",
          type: "bar",
          data: [9, 13, 4, 1, 17, 2, 7, 12, 7, 4, 7, 21]
        },
        {
          name: "server1CPU",
          yAxisIndex: 1,
          type: "line",
          data: [1, 54, 20, 31, 13, 48, 67, 30, 74, 41, 24, 59]
        },
        {
          name: "server2CPU",
          yAxisIndex: 1,
          type: "line",
          data: [54, 54, 4, 11, 68, 4, 46, 59, 24, 86, 50, 65]
        },
        {
          name: "server3CPU",
          yAxisIndex: 1,
          type: "line",
          data: [7, 65, 85, 27, 59, 77, 40, 82, 76, 34, 23, 52]
        }
      ]
};