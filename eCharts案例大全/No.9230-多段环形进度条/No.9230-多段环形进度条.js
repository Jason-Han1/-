    var dataArr = [
        { name: "健康度", value: 70 },
        { name: "繁忙度", value: 50 },
        { name: "可用性", value: 30 }
      ];
      var seriseData = [];
      dataArr.forEach((el, index) => {
        var color = new echarts.graphic.LinearGradient(0, 0, 1, 0, [
          {
            offset: 0,
            color: "#5CF9FE" // 0% 处的颜色
          },
          {
            offset: 1,
            color: "#468EFD" // 100% 处的颜色
          }
        ]);
        if (
          el.value > 60
        ) {
          color = new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            {
              offset: 0,
              color: "#ae2829" // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#b57c35" // 100% 处的颜色
            }
          ]);
        }
        var colorSet = [[el.value / 100, color], [1, "rgba(255,255,255,0.1)"]];
        seriseData[index] = {
          type: "gauge",
          radius: "60%",
          center: ["60%", "50%"],
          startAngle: "-" + 120 * index - 270,
          endAngle: "-" + (120 * (index + 1) - 5) - 270,
          pointer: {
            show: false
          },
          data:[el],
          detail: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: colorSet,
              width:60,
              // shadowBlur: 15,
              // shadowColor: '#B0C4DE',
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              opacity: 1
            }
          },
          axisTick: {
            show: false
          },
          title:{
            show:false
          },
          splitLine: {
            show: false,
            length: 25,
            lineStyle: {
              color: "#00377a",
              width: 1,
              type: "solid"
            }
          },
          axisLabel: {
            show: false
          }
        };
      });
     option = {
         backgroundColor:"#012b4e",
        series: seriseData
      };