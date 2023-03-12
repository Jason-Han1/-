option = {
        tooltip: {
          trigger: "axis"
        },
        legend: {
          top: 10,
          right:40,
          itemGap: 37,
           itemWidth: 20,
           itemHeight: 20,
         icon:"roundRect",
         textStyle:{
           color:"#666666",
            fontSize:16,
            padding: [2, 0,0,0]
         }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: true, //坐标轴两边留白
          data: ["12-01", "12-03", "12-05", "12-07", "12-09", "12-11", "12-13"],
          axisLabel: {
            textStyle: {
              color: "#999999",
              fontStyle: "normal",
              fontSize: 16
            }
          },
          axisTick: {
           
          },
          axisLine: {
            lineStyle: {
              color: "#E7E7E7"
            }
          }
        },
        yAxis: [
          {
            type: "value",
            splitNumber: 5,
            axisLabel: {
              textStyle: {
                color: "#999999",
                fontSize: 16
              }
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            }
          }
        ],
        series: [
          {
            name: "总办结数",
            type: "line",
            data: [5, 10, 5, 10, 5, 10,5],
            color: "#55F0FF",
            smooth: true,
            lineStyle:{
              width: 3
            }
          },
          {
            name: "线上预约办结数",
            type: "line",
            data: [15, 20, 15, 20, 15, 20, 15],
            color: "#2077FF",
            smooth: true,
            lineStyle:{
              width: 3
            }
          }
        ]
      };