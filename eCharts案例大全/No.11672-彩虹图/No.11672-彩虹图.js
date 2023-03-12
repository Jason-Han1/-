var test_data = [
          {
              "name": "22",
              "value": "1224760.49"
          },
          {
              "name": "33",
              "value": "1418392.50"
          },
          {
              "name": "25-29",
              "value": "1318392.50"
          }
      ];
      var maxData = 1418392.50,
          seriesd = [],
          legend = [];
      
      for (var j in test_data) {
          if (legend.indexOf(test_data[j]["name"] == -1)) {
              legend.push({
                  'icon': 'rect',
                  "name": test_data[j]["name"]
              });
          }
          var ra = test_data.length - 1 - j;
          seriesd.push({
              name: test_data[j]["name"],
              type: 'pie',
              radius: [(ra*20 + 52)+"%", (43 + ra * 20) +"%" ],
              itemStyle: {
                  normal: {
                      label: {
                          show: false
                      }
                  }
              },
              hoverAnimation: false,
              startAngle: 180,
              center: ["45%", "75%"],
              data: [{
                      value: test_data[j]["value"],
                      name: test_data[j]["name"],
                      label: {
                          normal: {
                              postion: "center"
                          }
                      },
                  },
                  {
                      value: maxData - test_data[j]["value"],
                      itemStyle: {
                          normal: {
                              color: 'rgba(203,203,203,0.5)',
                              label: {
                                  show: false
                              },
                              labelLine: {
                                  show: false
                              }
                          },
                          emphasis: {
                              color: 'rgba(203,203,203,1)'
                          }
                      },
                      name: 'showtip_' + test_data[j]["value"]
                  },
                  {
                      value: maxData,
                      itemStyle: {
                          normal: {
                              color: 'rgba(0,0,0,0)',
                              label: {
                                  show: true
                              },
                              labelLine: {
                                  show: true
                              }
                          },
                          emphasis: {
                              color: 'rgba(0,0,0,0)'
                          }
                      },
                      name: 'hide'
                  }
              ]
          })
      }
      var initnum = parseFloat(seriesd[0].data[0]["value"] * 100 / maxData).toFixed(2);
      seriesd.push({
          type: 'gauge',
          z: 3,
          min: 0,
          max: 100,
          splitNumber: 5,
          center: ['45%', '75%'], // 默认全局居中
          radius: '0%',
          endAngle: 0,
          startAngle: 180,
          axisLabel: {
              show: false,
              formatter: "{value}%"
          },
          axisLine: { // 坐标轴线 
              show: false,
              lineStyle: {
                  color: [
                      [1, "rgba(203,203,203,1)"]
                  ], //仪表盘颜色
                  width: 2, //仪表盘宽度
              }
          },
          axisTick: { // 坐标轴小标记
              show:false,
              length: 5, // 属性length控制线长
              lineStyle: { // 属性lineStyle控制线条样式
                  color: 'auto'
              }
          },
          splitLabel: {show: false},
          pointer: {show: false},
          splitLine: { // 分隔线
              show: false,
              
          },
          title: {
              show: false
          },
          detail: { //显示数据
              show: false,
          },
          itemStyle: {
              normal: {
                  color: "#676767", //仪表盘颜色
              }
          },
          data: [{
              value: initnum
          }]
      
      })
option = {
  maxnum: maxData,
  tooltip: {
      show: true,
      formatter: function(params) {
          if (params.name == "hide") {
              return null
          } else {
              if (params.name.indexOf("showtip_") != -1) {
                  var num = Number(params.name.split("_")[1]);
              } else {
                  var num = params.value;
              }
              if (Number(num) == 0) return params.seriesName + ":" + Number(num) + "";
              return params.seriesName + ":" + parseFloat(num * 100 / maxData).toFixed(2) + "%";
          }
      }
  },
 
  grid: {
      top: 0,
      height: 0,
      left: "10%",
      right: '10%',
  },
  series: seriesd,
  color:["red","#afa"]
};