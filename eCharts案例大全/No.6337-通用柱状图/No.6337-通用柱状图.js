  var weekStr = "";
  for (let k = 1; k <= 6; k++) {
      weekStr += k + "月份,";
  }
  var weekData = weekStr.substring(0, weekStr.lastIndexOf(",")).split(",");
  var data1Arr = [100, 200, 300, 200, 100, 400];
  var data2Arr = [200, 300, 400, 300, 200, 500];
  var dataName = ["档案录入", "维护"];
  var option = {

      tooltip: {
          trigger: "axis",
          textStyle: {
              fontSize: 14,
          },
      },
      legend: {
          data: dataName,
          left: "center",
          itemWidth: 20, // 设置宽度
          itemHeight: 15, // 设置高度
          top: 10,
          textStyle: {
              color: "#333",
              fontSize: 14,
              padding: [2, 0, 0, 0]
          },
      },
      grid: {
          left: "3%",
          right: "3%",
          bottom: "3%",
          top: 50,
          containLabel: true,
      },

      xAxis: [{
          type: "category",

          axisLine: {
              show: false,
              lineStyle: {
                  color: "#333",
              },
          },
          axisTick: {
              show: false,
          },
          axisLabel: {
              textStyle: {
                  fontSize: 14,
              },
          },
          data: weekData,
      }, ],
      yAxis: [{
          type: "value",
          splitLine: { //y轴网格线
              lineStyle: {
                  color: "#a7a7a7",
              },
          },
          axisLabel: { //y轴文本
              showMinLabel: false, //y轴是否设置最小刻度0
              color: "#333",
              textStyle: {
                  fontSize: 14,
              },
          },
          axisTick: {
              show: false,
          },
          axisLine: { //y轴线
              show: false,
          },
      }, ],
      series: [{
              name: dataName[0],
              color: new echarts.graphic.LinearGradient( //渐变色
                  1, 1, 0, 0, [{
                          offset: 1,
                          color: '#f9a84a'
                      }, {
                          offset: 0,
                          color: '#ef964d'
                      }

                  ]
              ),
              type: "bar",
              barWidth: "15%", //柱型宽度
              data: data1Arr,
          },
          {
              name: dataName[1],
              color: new echarts.graphic.LinearGradient(
                  1, 1, 0, 0, [{
                          offset: 1,
                          color: '#47bdfe'
                      }, {
                          offset: 0,
                          color: '#289af6'
                      }

                  ]
              ),
              type: "bar",
              barWidth: "15%",
              data: data2Arr,
          },
      ],
  };