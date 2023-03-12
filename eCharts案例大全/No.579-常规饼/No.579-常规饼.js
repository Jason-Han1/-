  var colors = ["#1879f6", "#03e0ff", "#4963ff", "#03e080"].reverse();
  var datas = [
        {
          name: "形式主义",
          value: 2
        },
        {
          name: "官僚主义",
          value: 2
        },
        {
          name: "享乐主义",
          value: 3
        },
        {
          name: "奢靡之风",
          value: 4
        }
      ];
      var total = datas.reduce((prev, curr) => prev + curr.value, 0);
option = {
        backgroundColor:'#02274A',
        color: colors,
        legend: {
          // orient: 'vertical',
          bottom: 0,
          itemGap: 15,
          itemWidth: 16,
          itemHeight: 16,
          textStyle: {
            color: "#fff",
            fontSize: 18
          },
          data: datas
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [
          {
            name: "风险预警",
            type: "pie",
            radius: ["20%", "55%"],
            center: ["50%", "40%"],
            roseType: "radius",
            minShowLabelAngle: 60,
            label: {
              show: true,
              normal: {
                position: "outside",
                fontSize: 16,
                formatter: params => {
                  return ((params.value / total) * 100).toFixed(2) + "%";
                }
              }
            },
            labelLine: {
              length: 1,
              length2: 10,
              smooth: true
            },
            data: datas
          }
        ]
      };
