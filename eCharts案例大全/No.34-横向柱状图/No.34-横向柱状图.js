 option = {
   backgroundColor:"#000",
        //color: ["#70DDFF", "#FF9F6A", "#20D469", "#D083FF", "#FF8282", "#769CFF", "#FFCF55"],
       legend: {
          itemHeight:14,
          itemWidth:14,
          icon: "rect",
          bottom: "0", 
          textStyle: {
            color: "#fff",
          },
        },
        color: [
          "#4AFFFC",
          "#FF6701",
          "#65FF00",
          "#F49673",
          "#9C58FF",
          "#FFCD07",
        ],
        grid: {
          x: 90,
          y: 20,
          x2: 30,
          y2: 70,
        },
        xAxis: {
          axisLine: {
            lineStyle: {
              color: "#44A0B7",
            },
          },
          axisLabel: {
            textStyle: {
              color: "#fff",
            },
          },
          show: true,
          type: "value",
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
        yAxis: {
          data: ["出租居住", "自营", "出租经营", "其他"],
          axisLine: {
            lineStyle: {
              color: "#44A0B7",
            },
          },
          axisLabel: {
            textStyle: {
              color: "#fff",
            },
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            name: "农户收入",
            type: "bar",
            stack: "all",
            barWidth: 12,
            data: [5, 3, 8, 9, 3, 7, 7, 1, 3, 2],
          },
          {
            name: "集体收入",
            type: "bar",
            stack: "all",
            barWidth: 12,
            data: [3, 4, 5, 2, 1, 10, 6, 1, 1, 1],
          },
          {
            name: "引进投资",
            type: "bar",
            stack: "all",
            barWidth: 12,
            data: [1, 3, 2, 4, 4, 2, 10, 9, 1, 6],
          },
          {
            name: "带动就业",
            type: "bar",
            stack: "all",
            barWidth: 12,
            data: [1, 10, 9, 8, 6, 9, 3, 2, 2, 7],
          },
          {
            name: "吸引人才",
            type: "bar",
            stack: "all",
            barWidth: 12,
            data: [8, 5, 10, 2, 2, 4, 6, 7, 9, 2],
          },
          {
            name: "新增产值",
            type: "bar",
            stack: "all",
            barWidth: 12,
            itemStyle: {
              barBorderRadius: [0, 20, 20, 0],
            },
            data: [9, 10, 7, 5, 8, 1, 8, 1, 6, 7],
          },
        ],
      };