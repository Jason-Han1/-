  var dataInfo = [{
          "name": "年",
          "count": [{
                  "name": "年",
                  "point": "订单金额",
                  "total": 5
              },
              {
                  "name": "年",
                  "point": "订单量",
                  "total": 9
              },
          ]
      },
      {
          "name": "月",
          "count": [{
                  "name": "月",
                  "point": "订单金额",
                  "total": 4
              },
              {
                  "name": "月",
                  "point": "订单量",
                  "total": 7
              },
          ]
      },
      {
          "name": "日",
          "count": [{
                  "name": "日",
                  "point": "订单金额",
                  "total": 4
              },
              {
                  "name": "日",
                  "point": "订单量",
                  "total": 7
              },
          ]
      },
  ];
  var legendData = [];
  var xAxisData = [];
  var seriesData = [];
  var contData = [];
  for (var i = 0; i < dataInfo.length; i++) {
      legendData.push(dataInfo[i].name);
      var arrDatas = [];
      for (var j = 0; j < dataInfo[i].count.length; j++) {
          arrDatas.push(dataInfo[i].count[j].total);
      }
      seriesData.push(arrDatas);
  }
  for (var k = 0; k < dataInfo[0].count.length; k++) {
      xAxisData.push(dataInfo[0].count[k].point);
  }

  var seriesColor = ["#48b3ff", "#64e5c1", "#a95ec3"];
  for (var v = 0; v < legendData.length; v++) {
      var serie = {
          name: legendData[v],
          type: "bar",
          barWidth: 14,
          barGap: 0.5, //柱间距离
          label: {
              //图形上的文本标签
              normal: {
                  show: true,
                  position: "right",
                  textStyle: {
                      color: "#e9ead9",
                      fontStyle: "normal",
                      fontFamily: "微软雅黑",
                      fontSize: 12
                  }
              }
          },
          itemStyle: {
              //图形样式
              normal: {
                  color: seriesColor[v]
              }
          },
          zlevel: 9,
          data: seriesData[v]
      };
      contData.push(serie);
  }
  var iconList = {
      type: "pictorialBar",
      symbol: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABMUlEQVRoQ+2aoU4DYRCEZ3uSF2l7fRkMmub6AKCrcHV9AdIQFBKPxiF7oYfBIbAIkia9aSBpgYQQuhlxm+zvZ7PzfXJ/GyzqO7R2/jgZLhHw2WBRk0QL4Joopk3Vf4nU47PAbmEC7yDmRDFrqv5bhCI/CnwV4atZ76J3xMv6pFx3ucivBfZFyGcYpqtxeQOzvakuFfqzwLciDyxw1pyO7ru0/Mcu/yqwW3rT2vHTZHjbpRIHFSAxXlXlVRYQEkgDQpiuUWnAhU0YSgNCmK5RacCFTRhKA0KYrlFpwIVNGEoDQpiuUWnAhU0YSgNCmK5RacCFTRhKA0KYrlFpwIVNGEoDQpiuUWnAhU0YSgNCmK5RacCFTRg6yEDYExPJmEc+Rj2zEkEP3WG/GkT/7BH6u80WK8dsQAaGofUAAAAASUVORK5CYII=",

      symbolSize: [30, 60],
      symbolRotate: 180,
      symbolOffset: [-36, 0],
      symbolBoundingData: 300,
      data: [1, 2, 3, 4],
      zlevel: 100,
      z: 100
  };
  contData.push(iconList);

  var option = {
      backgroundColor: '#0a2a43',
      tooltip: {
          trigger: "axis",
          formatter: function(params) {
              var rest = params[0].name + "<br />";
              var unit = params[0].name.substring(
                  params[0].name.indexOf("(") + 1,
                  params[0].name.indexOf(")")
              );
              for (var i = 0; i < params.length - 1; i++) {
                  rest +=
                      params[i].marker +
                      " " +
                      params[i].seriesName +
                      "：" +
                      params[i].data +
                      unit +
                      "<br />";
              }
              return rest;
          }
      },
      legend: {
          icon: "rect",
          left: "120",
          top: "0",
          right: "0",
          itemWidth: 14,
          itemHeight: 14,
          data: legendData,
          textStyle: {
              //图例文字的样式
              color: "#ffffff",
              fontSize: 12
          }
      },
      grid: {
          left: "6%",
          right: "13%",
          bottom: "12%",
          top: 40
      },
      yAxis: [{
          type: "category",
          boundaryGap: true, //坐标轴两边留白
          data: xAxisData,
          axisLabel: {
              interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
              margin: 20,
              textStyle: {
                  color: "#9eaab3",
                  fontSize: 14
              }
          },
          axisTick: {
              //坐标轴刻度相关设置。
              show: false
          },
          axisLine: {
              show: true,
              lineStyle: {
                  color: "#f0f2f3"
              }
          },
          splitLine: {
              //坐标轴在 grid 区域中的分隔线。
              show: false
          }
      }],
      xAxis: [{
          type: "value",
          axisLabel: {
              show: true,
              textStyle: {
                  color: "#9eaab3",
                  fontSize: 14
              }
          },
          axisLine: {
              show: true,
              lineStyle: {
                  color: "#f0f2f3"
              }
          },
          axisTick: {
              show: false
          },
          splitLine: {
              show: false
          }
      }],
      series: contData
  };