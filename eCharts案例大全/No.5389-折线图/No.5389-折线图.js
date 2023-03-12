const data = [
        {
          name: "10-1",
          value: 10
        },
        {
          name: "10-2",
          value: 40
        },
        {
          name: "10-3",
          value: 30
        },
        {
          name: "10-4",
          value: 20
        },
        {
          name: "10-5",
          value: 10
        },
        {
          name: "10-6",
          value: 50
        },
        {
          name: "10-7",
          value: 70
        },
        {
          name: "10-8",
          value: 60
        },
        {
          name: "10-9",
          value: 80
        },
        {
          name: "10-10",
          value: 40
        }

      ];
option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0,
                  color: "rgba(0, 255, 233,0)"
                }, {
                  offset: 0.5,
                  color: "rgba(255, 255, 255,1)"
                }, {
                  offset: 1,
                  color: "rgba(0, 255, 233,0)"
                }],
                global: false
              }
            }
          }

        },
        color: "#52EDC5",
        grid: {
          left: "3%",
          right: "4%",
          top: "15%",
          bottom: "10%",
          containLabel: true
        },
        xAxis: [{
          type: "category",
          boundaryGap: false,
          data: data.map(item => item.name),
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            color: "#fff"
          },
          offset: 17
        }],
        yAxis: [{
          name: "个数",
          type: "value",
          splitLine: {
            show: true,
            lineStyle: {
              type: "solid",
              color: "rgba(199, 209, 219, 0.4)"
            }
          },
          axisLabel: {
            color: "#fff"
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          nameTextStyle: {
            color: "#fff",
            padding: [0, 0, 15, 0]
          },
          offset: 17
        }],
        series: [{
          name: "机构登录数",
          type: "line",
          symbolSize: 8,
          itemStyle: {
            color: "#fff",
            borderColor: "#24C19E"
          },
          lineStyle: {
            color: "#52EDC5"
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: "rgba(36, 193, 158, 0.6)"
            },
            {
              offset: 1,
              color: "rgba(14, 255, 201, 0)"
            }
            ], false)

          },
          data: data.map(item => item.value)
        }

        ]
      };;