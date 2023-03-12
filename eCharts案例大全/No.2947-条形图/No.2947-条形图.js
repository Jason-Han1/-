 var option = {
     //backgroundColor:'#323a5e',
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '2%',
          right: '4%',
          bottom: '14%',
          top:'8%',
          containLabel: true
        },
    legend: {
        data: ['指标1', '指标2', '指标3'],
        //right: 10,
        //top:12,
        textStyle: {
            color: "#000"
        },
        itemWidth: 12,
        itemHeight: 10,
        // itemGap: 35
        
orient: 'vertical' ,
align:'right',
top:'35%',
right:0,
    },
        xAxis: {
          name:'万',
          nameLocation: 'end' ,
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#000'

            }
          },
          axisLabel: {
            // interval: 0,
            // rotate: 40,
            show:true,
            textStyle: {
              fontFamily: 'Microsoft YaHei',
              fontSize:14,
            }
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: 'rgba(255,255,255,0.3)'
            }
          },
        },

        yAxis: {
          type: 'category',
          //max:'1200',
          inverse: true,
          data: ['安阳市','信阳市','驻马店市','商丘市','南阳市','洛阳市','开封市','郑州市'],
          axisLine: {
            show: true,
            lineStyle: {
              color: '#000'
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              type:'dotted',
              color: '#89c2f7'
            }
          },
          axisLabel: {
            //show:true,
            fontSize:16,
          }
        },
        dataZoom:{
          
type: 'inside' ,
 orient:'vertical',
 start:0,
 end:60,
        },
        series: [{
          name: '指标1',
          type: 'bar',
          barWidth: '15%',
          itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#fccb05'
                }, {
                    offset: 1,
                    color: '#f5804d'
                }]),
                barBorderRadius: [0,5,5,0],
            },
          },
          data: [550, 500, 600, 650, 550, 500, 450, 900]
        },
        {
          name: '指标2',
          type: 'bar',
          barWidth: '15%',
          itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#8bd46e'
                }, {
                    offset: 1,
                    color: '#09bcb7'
                }]),
                barBorderRadius: [0,5,5,0],
            }
            
          },
          data: [400.8, 450, 500, 360, 500, 400,400, 800]
        },
        {
          name: '指标3',
          type: 'bar',
          barWidth: '15%',
          itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#248ff7'
                }, {
                    offset: 1,
                    color: '#6851f1'
                }]),
                barBorderRadius: [0,5,5,0],
            }
          },
          data: [360, 340, 400, 280, 360, 320, 300, 700]
        }]
      };

      // var app = {
      //   currentIndex: -1,
      // };
      // setInterval(function () {
      //   var dataLen = option.series[0].data.length;

      //   // 取消之前高亮的图形
      //   myChart.dispatchAction({
      //     type: 'downplay',
      //     seriesIndex: 0,
      //     dataIndex: app.currentIndex
      //   });
      //   app.currentIndex = (app.currentIndex + 1) % dataLen;
      //   //console.log(app.currentIndex);
      //   // 高亮当前图形
      //   myChart.dispatchAction({
      //     type: 'highlight',
      //     seriesIndex: 0,
      //     dataIndex: app.currentIndex,
      //   });
      //   // 显示 tooltip
      //   myChart.dispatchAction({
      //     type: 'showTip',
      //     seriesIndex: 0,
      //     dataIndex: app.currentIndex
      //   });


      // }, 1000);