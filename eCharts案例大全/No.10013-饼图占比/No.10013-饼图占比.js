  var dataEcharts = [{
      "name": "8-10分 | 10%",
      "value": "0.10"
  }, {
      "name": "6-8分 | 25%",
      "value": "0.25"
  }, {
      "name": "4-6分 | 35%",
      "value": "0.35"
  }, {
      "name": "2-4分 | 20%",
      "value": "0.20"
  }, {
      "name": "0-2分 | 10%",
      "value": "0.10"
  }];
  var dataNames = ["8-10分 | 10%", "6-8分 | 25%", "4-6分 | 35%", "2-4分 | 20%", "0-2分 | 10%"];
  var app = {};
  option = null;
  app.title = '评分分布';

  var ydata = dataEcharts;
  var color = ["#BC8DEE", "#8693F3", "#89C3F8", "#F2A695", "#FCC667", "#AEB7F9", "#748BFA"]
  var xdata = dataNames;
  option = {
      backgroundColor: "rgba(255,255,255,1)",
      color: color,
      legend: {
          orient: "vartical",
          x: "left",
          top: "10%",
          left: "50%",
          bottom: "0%",
          data: xdata,
          // itemWidth: 20,
          // itemHeight: 14,
          // itemGap :15,
          formatter: function(name) {
              return name;
          }
      },
      series: [{
          name: '评分分布',
          type: 'pie',
          clockwise: false, //饼图的扇区是否是顺时针排布
          minAngle: 20, //最小的扇区角度（0 ~ 360）
          radius: ["40%", "58%"],
          center: ["20%", "50%"],
          avoidLabelOverlap: false,
          itemStyle: { //图形样式
              normal: {
                  borderColor: '#ffffff',
                  borderWidth: 1,
              },
          },
          label: {
              normal: {
                  show: false,
                  position: 'center',
                  formatter: function(value) {
                      return value.name.split('|')[0] + "\n" + parseInt(value.value * 100) + '%'
                  },
                  rich: {
                      text: {
                          color: "#666",
                          fontSize: 12,
                          align: 'center',
                          verticalAlign: 'middle',
                          padding: 5
                      },
                      value: {
                          color: "#8693F3",
                          fontSize: 16,
                          align: 'center',
                          verticalAlign: 'middle',
                      },
                  }
              },
              emphasis: {
                  show: true,
                  textStyle: {
                      fontSize: 16,
                  }
              }
          },
          data: ydata
      }]
  };
  myChart.setOption(option);

  setTimeout(function() {
      myChart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: 0
      });

      myChart.on('mouseover', function(params) {
          if (params.name == ydata[0].name) {
              myChart.dispatchAction({
                  type: 'highlight',
                  seriesIndex: 0,
                  dataIndex: 0
              });
          } else {
              myChart.dispatchAction({
                  type: 'downplay',
                  seriesIndex: 0,
                  dataIndex: 0
              });
          }
      });

      myChart.on('mouseout', function(params) {
          myChart.dispatchAction({
              type: 'highlight',
              seriesIndex: 0,
              dataIndex: 0
          });
      });
  }, 1000);