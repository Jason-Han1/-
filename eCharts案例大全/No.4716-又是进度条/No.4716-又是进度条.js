  var maxData = 100;
  var greenBar = [30];
  var symbolMargin = "20";
  option = {
      xAxis: {
          max: maxData,
          splitLine: {
              show: false
          },
          offset: 10,
          axisTick: {
              show: false
          },
          axisLine: {
              show: false
          },
          axisLabel: {
              show: false
          }
      },
      yAxis: {
          data: ['', '', ""],
          offset: 20,
          inverse: true,
          axisTick: {
              show: false
          },
          axisLine: {
              show: false
          },
          axisLabel: {
              //margin: 10,
              textStyle: {
                  color: '#999',
                  fontSize: 12
              }
          }
      },
      grid: {
          top: '40%',
          bottom: "3%",
          // height: "100%",
          left: '5%',
          right: '20%'
      },

      series: [{
              // current data
              type: 'pictorialBar',
              symbol: 'roundRect',
              itemStyle: {
                  normal: {
                      barBorderRadius: 1,
                      color: "#4456AE",
                  }
              },
              symbolRepeat: 'fixed',
              symbolMargin: symbolMargin + "%",
              symbolClip: true,
              symbolSize: [7, 14],
              // symbolBoundingData: maxData,
              data: greenBar,
              z: 99999999,
              // animationEasing: 'elasticOut',
              animationDelay: function(dataIndex, params) {
                  return params.index * 30;
              }
          },
          {
              // full data
              type: 'pictorialBar',
              itemStyle: {
                  normal: {
                      color: '#15192C'
                  }
              },
              label: {
                  normal: {
                      show: true,
                      formatter: function(params) {
                          return (params.value);
                      },
                      position: 'right',
                      offset: [50, 3],

                      textStyle: {
                          color: '#000',
                          fontSize: 18,
                          //fontWeight: 100,
                      },
                      align: "right",
                  }
              },
              animationDuration: 200,
              symbolRepeat: 'fixed',
              symbolMargin: symbolMargin + "%",
              symbol: 'roundRect',
              symbolSize: [7, 14],
              symbolBoundingData: maxData,
              data: greenBar,
              z: 99999,
              // animationEasing: 'elasticOut',
              // animationDelay: function (dataIndex, params) {
              //     return params.index * 30;
              // }
          }
      ]
  };