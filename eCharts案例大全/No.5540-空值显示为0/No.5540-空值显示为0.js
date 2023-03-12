option =  {
  backgroundColor:"#051F54",
      grid: [{
          top: '25%',
          left: '20%',
          right: '55%',
          bottom: '8%',
          gridIndex: 0,
      }, {
          top: '25%',
          left: '55%',
          right: '20%',
          bottom: '8%',
          gridIndex: 1,
      }],
      title: [{
          show: true,
          text: '一类',
          textStyle: {
              color: '#fff',
              fontSize: 16,
              fontWeight: 'normal'
          },
          left: '40%',
          top: '10%'
      }, {
          show: true,
          text: '二类',
          textStyle: {
              color: '#fff',
              fontSize: 16,
              fontWeight: 'normal'
          },
          right: '40%',
          top: '10%'
      }],
      tooltip: [{
          show: false
      }],
      xAxis: [{
          type: 'value',
          min: function (value) {
            if (value.min == value.max) {return value.min - 0.2}  else {return value.min - (value.max - value.min) / 5}
                //return value.min - (value.max - value.min) / 5;
              },
          gridIndex: 0,
          inverse: true,
          boundaryGap : ['20%','20%'],
          axisLine: {
              show: false,
          },
          splitLine: {
              show: false,
              lineStyle: {
                  color: 'rgba(96,118,173,0.3)'
              }
          },
          axisLabel: {
              show: false,
          },
          axisTick: {
              show: false,
          },
          max: function (value) {
                return value.max + 1;
              },
      }, {
          type: 'value',
          min: 0,
          gridIndex: 1,
          axisLine: {
              show: false,
          },
          splitLine: {
              show: false,
              lineStyle: {
                  color: 'rgba(255,255,255,1)'
              }
          },
          axisLabel: {
              show: false,
          },
          axisTick: {
              show: false,
          },
          max: 'dataMax'
      }],
      yAxis: [{
          //show: false,
          type: 'category',
          gridIndex: 0,
          splitLine: {
              show: false,
          },
          axisLine: {
              show: false,
              onZero:false
          },
          axisLabel: {
              show: true,
              interval: 0,
              margin: '-210',
              align: 'center',
              textStyle: {
                  color: '#fff',
                  fontSize: 14
              },
          },
          axisTick: {
              show: false
          },
          data: ['周一', '周二', '周三']
      }, {
          //show: false,
          type: 'category',
          gridIndex: 1,
          splitLine: {
              show: false,
          },
          axisLine: {
              show: false
          },
          axisLabel: {
              show: false,
          },
          axisTick: {
              show: false
          }
      }],
      series: [{
          name: "周一",
          type: 'pictorialBar',
          xAxisIndex: 0,
          yAxisIndex: 0,
          symbol: 'rect',
          symbolRepeat: 'true',
          symbolMargin: '20%',
          symbolSize: [8, 12],
          symbolRepeat: true,
          barMinHeight: 1,
          barMinWidth: 1,
          itemStyle: {
              normal: {
                  color: '#22E8FF',
                  barBorderRadius: 2
              }
          },
          label: {
              normal: {
                  show: true,
                  position: 'left',
                  color: '#fff',
                  fontSize: 14,
                  formatter: function(params) {
                     return params.value == 0.1 ? 0 : params.value.toFixed(0)
                     //if (params.value == 0.1 ) {return 0 }  else {return params.value.toFixed(0)};
                      }
              }
          },
          z: 1,
          data:[0,0,0]
  
      }, {
          name: '周二',
          type: 'pictorialBar',
          xAxisIndex: 1,
          yAxisIndex: 1,
          barWidth: '25%',
          symbol: 'rect',
          symbolRepeat: 'true',
          symbolMargin: '20%',
          symbolSize: [8, 12],
          symbolRepeat: true,
          barMinHeight: 1,
          barMinWidth: 1,
          itemStyle: {
              normal: {
                  color: '#B422FF',
                  barBorderRadius: 2
              }
          },
          label: {
              normal: {
                  show: true,
                  position: 'right',
                  color: '#fff',
                  fontSize: 14
              }
          },
          z: 0,
          data:[10,0,30]
      }]
  }