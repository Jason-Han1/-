option ={
          title: {
			text: '100%',
			subtext:'合格率',
			top: '48%',
			textAlign: "center",
            x: "center",
            y: "center",
            subtextStyle:{
                fontSize: 14,
              color: "#93695b",
              fontWeight: "normal",
            },
            textStyle: {
              fontSize: 16,
              color: "#93695b",
              fontWeight: "normal",
            },
          },
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)",
          },
          series: [
            {
              name: "aa",
              clockWise: false,
              type: "pie",
              radius: ["40%", "55%"],
              data: [{value: 11, name: '合格数'},{value: 1, name: '不合格数'}],
              itemStyle: {
                normal: {
                  color: function (params) {
                    var colorList = ["#f2ab50", "#fccd90"];
                    return colorList[params.dataIndex];
                  },
                },
              },
            },
          ],
        }