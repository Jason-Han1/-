var datas = {
        company: "",
        ringColor: [
          {
            offset: 0,
            color: "rgba(0, 255, 236, 0)", // 0% 处的颜色
          },
          {
            offset: 1,
            color: "rgba(0, 255, 236, 1)", // 100% 处的颜色
          },
        ],
      };
      var seriesOption = [
        {
          name:'',
          type: "pie",
          hoverAnimation: false,
          radius: ["70%", "85%"],
          center: ["50%", "50%"],
          color: [
          "red",
          "yellow",
          "blue",
          "rgba(232, 232, 232, 1)"
          ],
          label: {
            show: false,
            position: "center",
          },
          labelLine: {
            show: false,
          },
          data:
          [
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }] ,
        },
      ];
      var option = {
        title: {
          text: 895,
          subtext:'分包商',
          x: "center",
          y: "32%",
          textStyle: {
            fontWeight: "normal",
            color: "#000000FF",
            fontSize: 24,
            lineHeight: 18,
          },
          subtextStyle: {
            fontSize: 12,
            color: "#000000FF",
            lineHeight: 10,
          },
        },

        tooltip: {
          show: true,
        },
        series: seriesOption,
      };
      option && myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      });