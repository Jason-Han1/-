var name4 = ['1号','2号','3号','4号','5号','6号','7号','8号','9号','10号'];
var data4_1 = [10,8,30,8,30,8,30,8,30,8];
var data4_2 = [];
var data4_3 = [];
var max4 = Math.max.apply(null,data4_1) * 1.5;

var color=['#51D9A2', '#FAD700', '#FE8F3B', '#F7A899', '#60DAFD', '#D2DF1D', '#797AFF', '#FFC371', '#FAD700', '#FE8F3B'];
        
//data1存放背景条的数值，for循环使其数量与value一致
for (i =0 ; i < data4_1.length; i++) {
    data4_2.push(max4);   
    data4_3.push(data4_1[i] + 1); 
};
option =  {
  backgroundColor:"#051F54",
      grid: {
          top: '20%',
          left: '20%',
          right: '20%',
          bottom: '20%',
          gridIndex: 1,
      },
      tooltip: [{
          show: false
      }],
      yAxis: {
          type: 'value',
          min: 0,
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
      },
      xAxis: {
          //show: false,
          type: 'category',
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
              //margin: '-210',
              align: 'center',
              textStyle: {
                  color: '#fff',
                  fontSize: 14
              },
          },
          axisTick: {
              show: false
          },
          data: name4
      },
      series: [{
          name: '真实值',
          type: 'pictorialBar',
          barWidth: '10%',
          symbol: 'roundRect',
          symbolRepeat: 'true',
          symbolMargin: '80%',
          symbolSize: [15, 5],
          symbolRepeat: true,
          barMinHeight: 1,
          barMinWidth: 1,
          itemStyle: {
              normal: {
                  //borderRadius: [10,10],
                  color: '#155CFA',
                  //barBorderRadius: 2
              }
          },
          label: {
              normal: {
                  show: false,
              }
          },
          z: 10,
          data:data4_1
      },{
          name: '背景条',
          type: 'pictorialBar',
          barWidth: '10%',
          symbol: 'roundRect',
          symbolRepeat: 'true',
          symbolMargin: '80%',
          symbolSize: [15, 5],
          symbolRepeat: true,
          barMinHeight: 1,
          barMinWidth: 1,
          itemStyle: {
              normal: {
                  //borderRadius: [10,10],
                  color: 'rgba(21,92,250,0.1)',
                  //barBorderRadius: 2
              }
          },
          label: {
              normal: {
                  show: true,
                  position: 'top',
                  color: '#fff',
                  fontSize: 16,
                  formatter: function(params) {
                    //console.info(params);
                    return data4_1[params.dataIndex];
                  }
              }
          },
          z: 0,
          data:data4_2
      },{
          name: '辅助值',
          type: 'pictorialBar',
          barWidth: '10%',
          symbol: 'roundRect',
          symbolRepeat: 'true',
          symbolMargin: '80%',
          symbolSize: [15, 5],
          symbolRepeat: true,
          barMinHeight: 1,
          barMinWidth: 1,
          itemStyle: {
              normal: {
                  //borderRadius: [10,10],
                  color: function (params) {
                        return color[params.dataIndex];
                    },
                  //barBorderRadius: 2
              }
          },
          label: {
              normal: {
                  show: false,
              }
          },
          z: 5,
          data:data4_3
      }]
  }