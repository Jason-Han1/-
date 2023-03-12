option= {
        xAxis: {
          name: "日期",
          data: ['9-5','9-6','9-7','9-8','9-9'],
          boundaryGap: false,
        },
        yAxis: {
          name: "时长(h)",
          max: 100,
          splitNumber: 5,
          maxInterval: 20,
        },
        tooltip: {
          trigger: "axis",
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'line', // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter:
            "{b0}<br />{a0}: {c0}h<br />{a1}: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{c1}h",
        },
        series: [
          {
            name: "年级优秀学生",
            type: "line",
            showSymbol: false,
            clip: false,
            itemStyle: {
              color: "#22D7BB",
            },
            data:[5,8,5,8,9],
            lineStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 1,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#B5F2E8", // 0% 处的颜色
                  },
                  {
                    offset: 0.5,
                    color: "#22D7BB", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#B5F2E8", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
            areaStyle: {
               
              opacity: 0.5,
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#22D7BB", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#fff", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
            smooth: true,

          },
          {
               data:[10,5,8,1,6],
            name: "班级学生",
            type: "line",
            showSymbol: false,
            clip: false,
            itemStyle: {
              color: "#22D7BB",
            },
            lineStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 1,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#B5E7FE", // 0% 处的颜色
                  },
                  {
                    offset: 0.5,
                    color: "#2DBCFF", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#B5E7FE", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
            areaStyle: {
              opacity: 0.5,
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#2DBCFF", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#fff", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
            smooth: true,
          },
        ],
      }