var option;

      option = {
        legend: {
          // 图例
          icon: "circle",
          orient: "verticalAlign", // 垂直显示
          x: "800px", // 居右显示
          y: "center", // 延y轴居中
          textStyle: {
            fontSize: 30,
            color: "#fff"
          },
          // 显示数据并换行
          formatter: function(name) {
            var data = option.series[0].data;
            var total = 0;
            var tarValue;
            for (var i = 0; i < data.length; i++) {
              total += data[i].value;
              if (data[i].name == name) {
                tarValue = data[i].value;
              }
            }
            var v = tarValue;
            return `${v} \n${name}`;
          }
        },
        angleAxis: {},
        polar: {
          center: ["40%", "50%"],
          radius: "76%"
        },
        radiusAxis: {
          show: false
        },
        color: ["#27D9C8", "#D8D8D8"],
        title: {
          text: "0",
          left: "36%",
          top: "34%",
          textStyle: {
            color: "#fff",
            fontSize: 114,
            align: "center"
          }
        },
        graphic: {
          type: "text",
          left: "25%",
          top: "60%",
          style: {
            text: "网络设备总量",
            textAlign: "center",
            fill: "#999999",
            fontSize: 50
          }
        },
        series: [
          {
            type: "pie",
            radius: ["58%", "72%"],
            center: ["40%", "50%"],
            zlevel: 100,
            itemStyle: {
              borderWidth: 2,
              borderColor: "#000"
            },
            label: {
              show: false //隐藏标示文字
            },
            labelLine: {
              show: false //隐藏标示线
            },
            data: [
              {
                value: 0,
                name: "已恢复",
                itemStyle: {
                  color: "#00BFC9"
                }
              },
              {
                value: 0,
                name: "未恢复",
                itemStyle: {
                  color: "red"
                }
              }
            ]
          }
        ]
      };
      option && myChart.setOption(option);