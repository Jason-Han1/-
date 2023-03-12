option = {
        tooltip: {
          trigger: "item",
          formatter: "{b}: {c}",
        },
        legend: {
        //   orient: "vertical",
          icon: "circle",
          itemWidth: 5, // 设置宽度
          itemHeight: 5, // 设置高度
          itemGap: 37, // 设置间距
          textStyle: {
            //图例文字的样式
            color: "#E3EDFF",
            fontSize: 16,
          },
          data: ["第一产业", "第二产业", "第三产业"],
          // 回调函数 实现标志图形字体后边加上百分比
           formatter(name) {
             // console.log(option);
             let than = option.series[0].data; //获取series中的data
             let total = 0;
             let tarValue = 0;
             for (let i = 0, l = than.length; i < l; i++) {
               total += than[i].value;
               console.log(total);
               if (than[i].name == name) {
                 tarValue = than[i].value;
               }
             }
             let p = ((tarValue / total) * 100).toFixed(1);
             return name + " " + " " + p + "%";
           },
        },
        series: [
          {
            name: "结构占比",
            type: "pie",
            radius: ["72%", "62%"],
            center: ["50%", "50%"],
            avoidLabelOverlap: false,
            itemStyle: {
              itemStyle: {
                color: {
                  type: "radial",
                  x: 0.5,
                  y: 0.5,
                  r: 0.5,
                  global: false,
                  colorStops: [
                    {
                      offset: 0,
                      color: "rgba(21, 118, 210, 0)",
                    },
                    {
                      offset: 1,
                      color: "rgba(21, 118, 210, 1)",
                    },
                  ],
                },
              },
              borderWidth: 3, //设置border的宽度有多大
              borderColor: "rgba(18,26,30,0.5)",
            },
            label: {
              show: false,
              position: "center",
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 33, name: "第一产业" },
              { value: 38.6, name: "第二产业" },
              { value: 58.1, name: "第三产业" },
            ],
          },
          {
            name: "结构占比",
            type: "pie",
            radius: ["62%", "43%"],
            center: ["50%", "50%"],
            avoidLabelOverlap: false,
            itemStyle: {
              itemStyle: {
                color: {
                  type: "radial",
                  x: 0.5,
                  y: 0.5,
                  r: 0.5,
                  global: false,
                  colorStops: [
                    {
                      offset: 0,
                      color: "rgba(21, 118, 210, 0)",
                    },
                    {
                      offset: 1,
                      color: "rgba(21, 118, 210, 1)",
                    },
                  ],
                },
              },
              borderWidth: 3, //设置border的宽度有多大
              borderColor: "rgba(18,26,30,0.5)",
            },
            label: {
              show: false,
              position: "center",
            },
            labelLine: {
              show: false,
            },
            data: [
              {
                value: 33,
                name: "第一产业",
                itemStyle: { color: "rgba(84,112,198,0.3)" },
              },
              {
                value: 38.6,
                name: "第二产业",
                itemStyle: { color: "rgba(145,204,117,0.3)" },
              },
              {
                value: 58.1,
                name: "第三产业",
                itemStyle: { color: "rgba(250,200,88,0.3)" },
              },
            ],
          },
          {
            type: "pie",
            radius: [0, "40%"],
            center: ["50%", "50%"],
            data: [
              { value: 1548, itemStyle: { color: "rgba(72,96,114,0.3)" } },
            ],
          },
        ],
};
