option = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "33%",
          left: "70%",
          orient: "vertical", //改变排列方式
          icon: "roundRect", //改变legend小图标形状
          itemGap: 30, // 设置legend的间距
          itemWidth: 20, // 设置宽度
          itemHeight: 15, // 设置高度
          textStyle: { fontSize: "15", color: "red" }, //legend字体大小
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["29%", "32%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "40",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: "Search Engine" },
              { value: 735, name: "Direct" },
              { value: 580, name: "Email" },
              { value: 484, name: "Union Ads" },
              { value: 300, name: "Video Ads" },
            ],
          },
        ],
      };