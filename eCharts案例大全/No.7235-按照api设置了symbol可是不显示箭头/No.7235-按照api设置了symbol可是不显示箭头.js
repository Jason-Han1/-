option = {
        // title: {
        //   text: "折线图堆叠"
        // },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["离职人数", "入职人数"],
          x: "center", // 'center' | 'left' | {number},
          y: "bottom" // 'center' | 'bottom' | {number}
        },
        grid: {
          top:"20px",
          left: "0",
          right: "4%",
          bottom: "10%",
          containLabel: true
        },
        toolbox: {
          feature: {
            // saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["5月9日","5月10日","5月11日","5月12日","5月13日","5月14日","5月15日",],
           axisLine:{
            symbol:['none','arrow'],
            symbolSize : [10, 15],
            symbolOffset : [0, 0]
          }
        },
        yAxis: {
          type: "value",
           axisLine:{
            symbol:['none','arrow'],
            symbolSize : [10, 15],
            symbolOffset : [0, 0]
          }
        },
        series: [
          {
            name: "考勤异常人数",
            type: "line",
            stack: "总量",
            data: ["10","13","20","23","20","21","11",],

            itemStyle: {
              normal: {
                color: "#0081FE", //改变折线点的颜色
                lineStyle: {
                  color: "#0081FE" //改变折线颜色
                }
              }
            }
          }
        ]
      };