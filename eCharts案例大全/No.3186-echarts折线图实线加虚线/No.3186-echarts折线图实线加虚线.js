 option = {
        title: {
          text: "echarts折线图实线加虚线",
        },
        legend: {
          data: ["在线数"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        },
        yAxis: {
          type: "value",
          min: 0,
          max: 1,
          minInterval: 1,
        },
        series: [
          {
            name: "在线数",
            type: "line",
            data: [1, 1, 1, "-", "-", "1", "1"],
          },
          {
            name: "在线数",
            type: "line",
            smooth: false, //关键点，为true是不支持虚线，实线就用true
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 2,
                  type: "dotted", //'dotted'虚线 'solid'实线
                },
              },
            },

            data: ["-", "-", 1, 0, "-", "-", "-"],
          },
          {
            name: "在线数",
            type: "line",
            data: ["-", "-", "-", "-", 0, 1, "-"],
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 2,
                  type: "dotted", //'dotted'虚线 'solid'实线
                },
              },
            },
          },
          {
            name: "在线数",
            type: "line",
            smooth: false, //关键点，为true是不支持虚线，实线就用true

            data: ["-", "-", "-", 0, 0, "-", "-"],
          },
          {
            name: "液压异常报警",
            type: "line",
            showAllSymbol: true,
            symbol: "circle",
            symbolSize: 10,
            lineStyle: {
              normal: {
                color: "rgba(255,255,255,0)",
              },
            },
            label: {
              show: true,
              position: "top",
              textStyle: {
                color: "#000",
              },
            },
            itemStyle: {
              color: "#000",
              borderColor: "#000",
              borderWidth: 2,
            },

            data: [1, 1, 0, 0, 0, 1, 1], //data.values
          },
        ],
      };