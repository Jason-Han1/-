  var data = [{
          name: '坂田街道',
          value: 10,
      },
      {
          name: '南湾街道',
          value: 4,
      },
      {
          name: '园山街道',
          value: 3,
      },
      {
          name: '龙岗街道',
          value: 3,
      },

      {
          name: '龙城街道',
          value: 9,
      },
      {
          name: '平湖街道',
          value: 6,
      },
      {
          name: '坪地街道',
          value: 7,
      },
      {
          name: '横岗街道',
          value: 5,
      },
      {
          name: '布吉街道',
          value: 12,
      },
      {
          name: '吉华街道',
          value: 3,
      }
  ];

  getArrByKey = (data, k) => {
      let key = k || "value";
      let res = [];
      if (data) {
          data.forEach(function(t) {
              res.push(t[key]);
          });
      }
      return res;
  };
  var option = {
      grid: {
          top: '2%',
          bottom: "3%",
          right: 30,
          left: 30,
          containLabel: true
      },
      tooltip: { //提示
          trigger: "axis",
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: "line", // 默认为直线，可选为：'line' | 'shadow'
              label: {
                  show: false
              }
          }
      },
      xAxis: {
          show: false
      },
      yAxis: [{
          triggerEvent: true,
          show: true,
          inverse: true,
          data: getArrByKey(data, 'name'),
          axisLine: {
              show: false
          },
          splitLine: {
              show: false
          },
          axisTick: {
              show: false
          },
          axisLabel: {
              interval: 0,
              color: ' #4b4b4b',
              align: 'right',
              margin: 10,
              fontSize: 13,
          },
      }, {
          triggerEvent: true,
          show: true,
          inverse: true,
          data: getArrByKey(data, 'name'),
          axisLine: {
              show: false
          },
          splitLine: {
              show: false
          },
          axisTick: {
              show: false
          },
          axisLabel: {
              interval: 0,
              color: ' #4b4b4b',
              align: 'right',
              margin: 60,
              fontSize: 13,
              //右边显示数量
              formatter: function(value, index) {
                  // return data[index].value + '个'
              },
          }
      }],
      series: [{
          name: '件',
          type: 'bar',
          yAxisIndex: 0,
          data: data,
          barWidth: 10,
          itemStyle: {
              normal: {
                  barBorderRadius: [0, 10, 10, 0],
                  //0, 0, 1, 0 :设置颜色方向从左到右渐变
                  //0, 0, 0, 1:设置颜色方向从上到下渐变
                  color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                          offset: 0,
                          color: '#2D8DED'
                      },
                      {
                          offset: 1,
                          color: "#5ED8FB"
                      }
                  ])
              }
          },
      }]
  };