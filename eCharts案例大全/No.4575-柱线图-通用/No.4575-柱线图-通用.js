//   var weekStr = "";
//   for (let k = 1; k <= 6; k++) {
//       weekStr += k + "月份,";
//   }
//   var weekData = weekStr.substring(0, weekStr.lastIndexOf(",")).split(",");
    var Xname =["XXX","XXX","XXX","XXX","XXX","XXX"];//X轴名称
  var data1Arr = [100, 200, 300, 200, 100, 400]; //数据1
  var data2Arr = [200, 300, 400, 300, 200, 500]; //数据2
  var dataName = ["平均租金", "产权数"]; //类别
  var option = {
        backgroundColor:"#fff",
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
          data: Xname,
      }, ],
      yAxis: [{
          type: "value",
          splitLine: { //y轴网格线
              lineStyle: {
                  color: "#eee",
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
              lineStyle: {
                color: "#333",
            },
          },
      }, ],
      series: [{
              name: dataName[0],
              color: new echarts.graphic.LinearGradient( //渐变色
                  1, 1, 0, 0, [{
                          offset: 0,
                          color: '#5cd1f8'
                      }, {
                          offset: 1,
                          color: '#53b5f9'
                      }

                  ]
              ),
              type: "bar",
              barWidth: "15%", //柱型宽度
              data: data1Arr,
          },
          {
              name: dataName[1],
              color: "red",
              type: "line",
               smooth: true,
              barWidth: "15%",
              data: data2Arr,
          },
      ],
  };