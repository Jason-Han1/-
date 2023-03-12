var option = {
        title: {
          text: '车辆进出高峰时间'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['入场车辆', '出场车辆'],
          x: 'right',
          itemWidth: 10,
          icon: 'line',
          textStyle: {
            color: '#FFFFFF'
          },
        },
        grid: {
          left: '1%',
          right: '1%',
          bottom: '1%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,//坐标轴两边留白
          data: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
          axisLabel: { //坐标轴刻度标签的相关设置。
            interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
            //	margin:15,
            textStyle: {
              color: '#ACB3C4',
              fontStyle: 'normal',
              fontFamily: '微软雅黑',
              fontSize: 13,
            },
            formatter: function (params) {
              var newParamsName = "";
              var paramsNameNumber = params.length;
              var provideNumber = 4;  //一行显示几个字
              var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
              if (paramsNameNumber > provideNumber) {
                for (var p = 0; p < rowNumber; p++) {
                  var tempStr = "";
                  var start = p * provideNumber;
                  var end = start + provideNumber;
                  if (p == rowNumber - 1) {
                    tempStr = params.substring(start, paramsNameNumber);
                  } else {
                    tempStr = params.substring(start, end) + "\n";
                  }
                  newParamsName += tempStr;
                }

              } else {
                newParamsName = params;
              }
              return newParamsName
            },
            //rotate:50,
          },
          axisTick: {//坐标轴刻度相关设置。
            show: false,
          },
          axisLine: {//坐标轴轴线相关设置
            lineStyle: {
              color: '#E5E9ED',
              // opacity:0.2
            }
          },
        },
        yAxis: [
          {
            type: 'value',
            splitNumber: 5,
            axisLabel: {
              textStyle: {
                color: '#a8aab0',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 12,
              }
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#ACB3C4',
                width: 1,
                // 	opacity:0.1
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: '#E5E9ED',
                // 	opacity:0.1
              }
            }

          }
        ],
        series: [
          {
            name: '入场车辆',
            type: 'line',
            itemStyle: {
              normal: {
                color: 'rgba(51, 168, 132, 1.00)',
                lineStyle: {
                  color: "rgba(51, 168, 132, 1.00)",
                  width: 2
                },
                areaStyle: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: 'rgba(51, 168, 132, 0.7)'
                  }, {
                    offset: 1,
                    color: 'rgba(51, 168, 132, 0.1)'
                  }]),
                }
              }
            },
            symbol: 'circle',
            symbolSize: 0,
            showSymbol: false,
            data: [9, 5, 7, 8, 6, 7, 8, 7, 7, 6, 8, 6, 9, 5, 7, 8, 6, 7, 8, 7, 7, 6, 8, 6, 8, 6]
          },
          {
            name: '出场车辆',
            type: 'line',
            smooth: false,
            // smoothMonotone:"y",
            symbol: 'circle',
            symbolSize: 0,
            showSymbol: false,
            itemStyle: {
              normal: {
                color: 'rgba(96, 206, 212, 1.00)',
                lineStyle: {
                  color: "rgba(96, 206, 212, 1.00)",
                  width: 2
                },
                areaStyle: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: 'rgba(96, 206, 212, 0.7)'
                  }, {
                    offset: 1,
                    color: 'rgba(96, 206, 212, 0.1)'
                  }]),
                }
              }
            },
            data: [1, 2, 3, 3, 5, 6, 5, 3, 6, 5, 5, 4, 1, 2, 3, 3, 5, 6, 5, 3, 6, 5, 5, 4, 4,]
          }
        ]
      };