option = {
    backgroundColor:'#409EFF',
        grid: {
          left: "2%",
          right: "2%",
          bottom: "-5%",
          top: "3%",
          containLabel: true,
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "none",
          },
          formatter: function (params) {
            return params[0].name + " : " + params[0].value;
          },
        },
        xAxis: {
          show: false,
          type: "value",
        },
        yAxis: [
          {
            type: "category",
            inverse: true,
            axisLabel: {
              show: true,
              textStyle: {
                color: "#fff",
                fontSize: "16",
              },
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            data: [ "企业信息接口_股东信息", "企业信息接口_股东信息2", "企业信息接口_股东信息3", "企业信息接口_股东信息4", "企业信息接口_股东信息5", "企业信息接口_股东信息6"],
          },
          {
            type: "category",
            inverse: true,
            axisTick: "none",
            axisLine: "none",
            show: false,
            axisLabel: {
              textStyle: {
                color: "#ffffff",
                fontSize: "16",
              },
            },
            data: [ "企业信息接口_股东信息", "企业信息接口_股东信息2", "企业信息接口_股东信息3", "企业信息接口_股东信息4", "企业信息接口_股东信息5", "企业信息接口_股东信息6"],
          },
        ],
        series: [
          {
            name: "值",
            type: "bar",
            zlevel: 1,
            label: {
              show: true,
              fontSize: 16,
              position: [10, 4],
              color: "#ffffff",
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                  {
                    offset: 0,
                    color: "#00f2fe",
                  },
                  {
                    offset: 1,
                    color: "#4facfe",
                  },
                ]),
              },
            },
            barWidth: 20,
            data: [55,11,33,44,55,66],
          },
        ],
      };
