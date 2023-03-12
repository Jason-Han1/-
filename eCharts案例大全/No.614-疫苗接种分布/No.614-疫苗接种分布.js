option = {
   title: {
          show: false,
        },
        tooltip: {
          trigger: "axis",
        },
        grid: {
          bottom: "15%",
          left: "5%",
          right: "5%",
        },
        legend: {
          data: ["未接种", "已接种", "应接种"],
          textStyle: {
            color: "#000",
            fontSize: 18,
          },
          bottom: "bottom",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "none",
          },
        },
        toolbox: {
          show: false,
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        calculable: true,
        xAxis: {
          type: "category",
          // prettier-ignore
          data:["0~3岁", "3~11岁", "12~17岁", "18~59岁", "60岁以上"],
          axisLabel: {
            color: "rgba(0,0,0,1)",
            fontSize: 18,
          },
          axisLine: {
            lineStyle: {
              color: "rgba(6, 140, 138, 1)",
              width: 1,
            },
          },
        },
        yAxis: {
          type: "value",
          axisLabel: {
            color: "rgba(0,0,0,1)",
            fontSize: 18,
          },
          axisLine: {
            show: false,
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "rgba(6, 140, 138, 0.5)",
              type: "dashed",
            },
          },
        },
        series: [
          {
            name: '未接种',
            type: "bar",
            barWidth: "20%",
            barGap: "25%",
            data: [2, 4, 17, 23, 25, 76],
            itemStyle: {
              color: {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                type: "linear",
                global: false,
                colorStops:[
        {
          offset: 0,
          color: "rgba(238, 76, 60, 1)",
        },
        {
          offset: 1,
          color: "rgba(238, 76, 60, 0.24)",
        },
      ],
              },
            },
          },
          {
            name: '已接种',
            type: "bar",
            barWidth: "20%",
            barGap: "25%",
            data: [2, 43, 7, 23, 25, 76],
            itemStyle: {
              color: {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                type: "linear",
                global: false,
                colorStops: [
        {
          offset: 0,
          color: "rgba(63, 207, 27, 1)",
        },
        {
          offset: 1,
          color: "rgba(63, 207, 27, 0.24)",
        },
      ],
              },
            },
          },
          {
            name: '应接种',
            type: "bar",
            barWidth: "20%",
            barGap: "25%",
            data: [2, 41, 27, 23, 25, 76],
            itemStyle: {
              color: {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                type: "linear",
                global: false,
                colorStops: [
        {
          offset: 0,
          color: "rgba(29, 166, 255, 1)",
        },
        {
          offset: 1,
          color: "rgba(29, 166, 255, 0.24)",
        },
      ],
              },
            },
          },
        ],
};
