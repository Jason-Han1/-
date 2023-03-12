option = {
    backgroundColor: '#163455',
    tooltip: {
        trigger: "axis"
      },
      grid: {
        right: 0,
        top: 30,
        left: 30
      },
      legend: {
        itemWidth: 8,
        itemHeight: 2,
        itemGap: 3,
        bottom: 0,

        width: "100%",

        textStyle: {
          fontSize: 10,
          color: "#fff"
        },
        data: [
          { name: "24H授信通过率", icon: "react" },
          { name: "历史授信通过率", icon: "react" },
          { name: "24H借款通过率", icon: "react" },
          { name: "历史借款通过率", icon: "react" }
        ]
      },
      xAxis: {
        type: "category",
        boundaryGap: true,
        axisLine: {
          lineStyle: {
            color: "#fff"
          }
        },
        nameRotate: 45,
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          fontFamily: "PingFangSC-Regular",
          fontWeight: "bolder"
        },
        data: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ]
      },
      yAxis: {
        axisLine: {
          show: false,
          lineStyle: {
            color: "#fff"
          }
        },
        axisLabel: {
          fontFamily: "Roboto-Regular",
          fontWeight: "bolder"
        },
        axisTick: {
          show: false
        },
        // 分割线
        splitLine: {
          lineStyle: {
            color: "#5d7289",
            width: 2,
            type: "dashed"
          }
        },
        type: "value"
      },
      series: [
        {
          name: "24H授信通过率",
          type: "line",
          showAllSymbol: false,
          lineStyle: {
            color: "#2579D8"
          },
          itemStyle: {
            color: "#2579D8"
          },
          smooth: 0.2,
          data: [10, 12, 21, 54, 34, 20, 14, 21, 54, 34, 20, 14]
        },
        {
          name: "历史授信通过率",
          type: "line",
          lineStyle: {
            color: "#2579D8",
            opacity: 0.4
          },
          itemStyle: {
            color: "#2579D8",
            opacity: 0.4
          },
          smooth: 0.2,
          data: [30, 12, 14, 34, 24, 30, 10, 14, 34, 24, 30, 10]
        },
        {
          name: "24H借款通过率",
          type: "line",
          lineStyle: {
            color: "#2FC25B"
          },
          itemStyle: {
            color: "#2FC25B"
          },
          smooth: 0.2,
          data: [24, 42, 45, 67, 12, 90, 20, 45, 67, 12, 90, 20]
        },
        {
          name: "历史借款通过率",
          type: "line",
          lineStyle: {
            color: "#2FC25B",
            opacity: 0.4
          },
          itemStyle: {
            color: "#2FC25B",
            opacity: 0.4
          },
          smooth: 0.2,
          data: [43, 24, 45, 24, 56, 90, 20, 45, 24, 56, 90, 20]
        }
      ]
};