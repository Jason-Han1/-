var dataLine = [25, 33, 66, 50];
var myColor = ["#FF5D88", "#8B76FF", "#3BFFA3", "#4397FF"];
option = {
    backgroundColor: '#101E40',
          grid: [
            {
              left: '8%',
              top: '15%',
              right: '8%',
              bottom: '15%'
            }
          ],
          xAxis: [
            {
              max: 100,
              show: false
            }
          ],
          yAxis: [
            {
              axisTick: {
                  show: false
              },
              axisLine: {
                  show: false
              },
              axisLabel: {
                textStyle: {
                  color: "#fff",
                  fontSize: 18
                }
              },
              data: ["偏瘦", "正常", "偏胖", "肥胖"]
            },
            {
              axisTick: "none",
              axisLine: "none",
              show: false,
              axisLabel: {
                textStyle: {
                  color: "#fff",
                  fontSize: 16
                }
              },
              data: [1, 1, 1, 1]
            },
            {
              axisLine: {
                lineStyle: {
                  color: "rgba(0,0,0,0)"
                }
              },
              data: []
            }
          ],
          series: [
            {
              name: "条",
              type: "bar",
              stack: "b",
              yAxisIndex: 0,
              data: dataLine,
              label: {
                normal: {
                  show: false,
                  position: "right",
                  distance: 10,
                  formatter: function(param) {
                    return param.value + "%";
                  },
                  textStyle: {
                    color: "#2F6781",
                    fontSize: 16
                  }
                }
              },
              barWidth: 25,
              itemStyle: {
                normal: {
                  color: function(params) {
                    var num = myColor.length;
                    return myColor[params.dataIndex];
                  }
                }
              },
              z: 2
            },
            {
              name: "框",
              type: "bar",
              yAxisIndex: 1,
              barGap: "-100%",
              data: [100, 100, 100, 100],
              barWidth: 27,
              itemStyle: {
                normal: {
                  color: "#2F6781"
                }
              },
              z: 1,
              label: {
                normal: {
                  show: true,
                  position: "right",
                  distance: 8,
                  formatter: function(data) {
                    return dataLine[data.dataIndex] + "%";
                  },
                  textStyle: {
                    color: "#fff",
                    fontSize: 16
                  }
                }
              }
            }
          ]
        }