var data = {
        name: "",
        value: [45],
        nAmount: 2566557.14,
      }; 
      option = {
          backgroundColor:"#000",
        title: {
          subtext: data.value[0] + "%",
          subtextStyle: {
            color: "#00E8FF",
            fontSize: 30,
            fontFamily: "Medium", fontWeight: "bold",
            lineHeight:"50"
          },
    textVerticalAlign: "auto",
          text: "已解决",
          textStyle: { 
            color: "#fff",
            fontSize: 16,
            fontFamily: "PingFangSC-Regular", 
          },
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
            radius: ["42%", "57%"],
          },
        ],
        series: [
          {
            type: "bar",
            z: 20,
            zlevel: 2,
            data: data.value,
            showBackground: false,
            backgroundStyle: {
              color: "rgba(0, 232, 255, 1)",
              borderWidth: 10,
              width: 10,
            },
            coordinateSystem: "polar",
            barWidth: 35,
            itemStyle: {
              normal: {
                opacity: 1,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
                  {
                    offset: 0,
                    color: "rgba(3, 219, 228, 1)",
                  },
                  {
                    offset: 1,
                    color: "rgba(9, 88, 160, 1)",
                  },
                ]),
              },
            },
          },
          {
            type: "pie",
            name: "内层细圆环",
            radius: ["48%", "52%"],
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