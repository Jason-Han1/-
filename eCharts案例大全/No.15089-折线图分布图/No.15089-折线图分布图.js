var xData = ['11-2','11-3','11-4','11-5','11-6','11-7','11-8'];
var yData= [150,113,60,120,30,280,200];
option = {
        backgroundColor:'#212121',
        color: ['#ffc94c'],
        legend: {
          show: true,
          right: '6%',
          data: [{
            name: '销售数据',
            icon: 'circle',
            textStyle: {
              fontSize: '16',
              color: '#fff0c2'
            },
          }],
        },
        grid: {
          left: '6%',
          right: '7%',
          top: '18%',
          bottom: '6%',
          containLabel: true
        },
        textStyle: {
          fontSize: '14',
          fontWeight: 'normal',
          color: '#ffffff'
        },
        xAxis: {
          show: true,
          type: 'category',
          boundaryGap: false,
          data:xData ,
        },
        yAxis: {
          show: true,
          type: 'value',
          splitLine: {
            show: true,
            lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
              color: 'rgba(255, 255, 255, 0.06)',
            }
          },
          axisLabel: {
            formatter: function(params) {
              if (params === 0) {
                return ''
              } else {
                return params
              }
            }
          }
        },
        series: [{
          name: '销售数据',
          type: 'line',
          smooth: true,
          showSymbol: false,
          itemStyle: {
            normal: {
              lineStyle: {
                color: '#ffc94c'
              }
            }
          },
          areaStyle: {
            normal: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0,
                  color: 'rgba(255, 225, 0, 0.2)',
                }, {
                  offset: 1,
                  color: 'rgba(255, 225, 0, 0)',
                }],
                globalCoord: false
              },
            }
          },
          markPoint: {
            data: [{
              type: 'max',
              label: {
                normal: {
                  show: true,
                  formatter: ''
                }
              },
              itemStyle: {
                normal: {
                  color: '#ffc94c',
                  borderColor: 'rgba(255, 201, 76, 0.3)',
                  borderWidth: 12, // 标注边线线宽，单位px，默认为1
                }
              },
              symbol: 'circle',
              symbolSize: 12,
            }],
          },
          data: yData
        }]
};


// app.timeTicket = setInterval(function() {
//     xData.shift();
//     yData.shift();
// xData.push('11-9');
// if (new Date().getTime() % 2 === 1) {
//     yData.push(100);
// } else {
//     yData.push('');
// }
// option.xAxis.data =xData;
// option.series[0].data =yData;
//     myChart.setOption(option);
// }, 1500);