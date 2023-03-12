var data = {
        name: "",
        value: [45],
        nAmount: 2566557.14,
      };
 
 option = {
        title: {
          subtext: data.value[0] + "%",
          subtextStyle: {
            color: "#00E8FF",
            fontSize: 40,
            fontFamily: "Medium",
            fontWeight: "bold",
          },
          text: "已处理",
          textStyle: {
            color: "#fff",
            fontSize: 16,
            fontFamily: "PingFangSC-Regular",
          },
          textVerticalAlign: "auto",
          left: "center",
          top: "center",
        },

        tooltip: {
          formatter: function (params) {
            return (
              '<span style="color: #fff;">占比：' + params.value + "%</span>"
            );
          },
        },
        angleAxis: {
          max: 100,
          clockwise: false, // 逆时针
          // 隐藏刻度线
          show: false,
        },
        radiusAxis: {
          type: "category",
          show: true,
          axisLabel: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
        },
        polar: [
          {
            center: ["50%", "50%"], //中心点位置
            radius: ["70%", "85%"],
          },
        ],
        series: [
          {
            stack: "测试",
            type: "bar",
            data: data.value,
            showBackground: false,
            backgroundStyle: {
              color: "rgba(0, 28, 52, 1)",
              borderWidth: 3,
            },
            coordinateSystem: "polar",
            barWidth: 30,
            silent: true,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 1,
                    color: "rgba(3, 219, 228, 1)",
                  },
                  {
                    offset: 0,
                    color: "rgba(9, 88, 160, 1)",
                  },
                ]),
              },
            },
          },
          {
            stack: "测试",
            type: "bar",
            zlevel: 5,
            data: [0.01],
            coordinateSystem: "polar",
            roundCap: true,
            barWidth: 30,
            itemStyle: {
              color: "rgba(3, 219, 228, 1)",
              borderColor: "rgba(3, 219, 228, 1)",
              borderWidth: 3,
            },
          },
          {
            type: "pie",
            name: "内层细圆环",
            radius: ["75%", "80%"],
            hoverAnimation: false,
            clockWise: true,
            zlevel: 3,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
                  {
                    offset: 0,
                    color: "#001C34",
                  },
                  {
                    offset: 1,
                    color: "#001C34",
                  },
                ]),
              },
            },
            tooltip: {
              show: false,
            },
            label: {
              show: false,
            },
            data: [100],
          },
        ],
      };