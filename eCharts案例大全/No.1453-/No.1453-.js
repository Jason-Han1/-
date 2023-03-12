option = {
        tooltip: {
          trigger: "axis",
          formatter:'{c}%',
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
                textStyle:{
                    color:"white"
                }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: ["A区", "B区", "C区", "D区", "E区", "F区", "G区"],
            axisLabel: {
                show: true,
                textStyle:{
                    color:"white"
                }
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
                show: true,
                textStyle:{
                    color:"white"
                }
            }
          }
          ,
        ],
        series: [
          {
            name: "已保养",
            type: "bar",
            stack: "Ad",
            color: "#0CCF67",
            axisLabel: {
                show: true,
                textStyle:{
                    color:"white"
                }
            },
            emphasis: {
              focus: "series",
            },
            data: [2, 2, 3, 2, 2, 2, 2],
            label:{
              show: true,
              formatter:'{c}%',
              position:'insideTop',
              color: 'black',
              fontSize: '20px'
            }
          },
          {
            name: "待保养",
            type: "bar",
            stack: "Ad",
            color: "#FEF770",
            emphasis: {
              focus: "series",
            },
            data: [2, 2, 1, 1, 2, 1, 1],
            label:{
              show: true,
              formatter:'{c}%',
              position:'insideTop',
              color: 'black',
              fontSize: '20px'
            }
          },
          {
            name: "到期",
            type: "bar",
            stack: "Ad",
            color: "red",
            emphasis: {
              focus: "series",
            },
            data: [1, 1, 1, 2, 1, 2, 2],
            label:{
              show: true,
              formatter:'{c}%',
              position:'insideTop',
              color: 'black',
              fontSize: '20px'
            }
          },
        ],
      };
      option && myChart.setOption(option);