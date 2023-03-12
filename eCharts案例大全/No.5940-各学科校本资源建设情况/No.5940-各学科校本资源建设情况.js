 var option = {
     title: {
         text: '各学科校本资源建设情况',
         textStyle: {
             fontSize: 25,
             fontWeight: 'normal',
             color: '#fff',
         },
         x: 'center'
     },
     backgroundColor: '#323a5e',
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
          top: '16%',
          containLabel: true
        },
        legend: {
          data: ['教学视频', '题库', '样板课件', '考试试卷', '学辅资料', '其它'],
          right: 10,
          top: 12,
          // textStyle: {
          //   color: '#fff'
          // },
          itemWidth: 12,
          itemHeight: 10
          // itemGap: 35
        },
        xAxis: {
          type: 'category',
          data: [
            '语文', '数学', '英语', '政治', '历史', '地理', '生物', '化学', '物理'
          ],
          axisLine: {
            // lineStyle: {
            //   color: 'white'

            // }
          },
          axisLabel: {
            // interval: 0,
            // rotate: 40,
            //  textStyle: {
            //      fontFamily: 'Microsoft YaHei'
            //  }
          }
        },

        yAxis: {
          type: 'value',

          axisLine: {
            show: false
            // lineStyle: {
            //   color: 'white'
            // }
          },
          splitLine: {
            show: true
            // lineStyle: {
            //   color: 'rgba(255,255,255,0.3)'
            // }
          },
          axisLabel: {}
        },
        'dataZoom': [{
          'show': true,
          'height': 12,
          'xAxisIndex': [
            0
          ],
          bottom: '8%',
          'start': 10,
          'end': 90,
          handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
          handleSize: '110%'
          // handleStyle: {
          //   color: '#d3dee5'

          // },
          // textStyle: {
          //   color: '#fff'
          // },
          // borderColor: '#90979c'
        }, {
          'type': 'inside',
          'show': true,
          'height': 15,
          'start': 1,
          'end': 35
        }],
        series: [{
          name: '教学视频',
          type: 'bar',
          barWidth: '10%',
          itemStyle: {
            normal: {
              // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              //   offset: 0,
              //   color: '#fccb05'
              // }, {
              //   offset: 1,
              //   color: '#f5804d'
              // }]),
              barBorderRadius: 12
            }
          },
          data: [345, 245, 543, 445, 512, 487, 467, 551, 523]
        },
        {
          name: '题库',
          type: 'bar',
          barWidth: '10%',
          itemStyle: {
            normal: {
              // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              //   offset: 0,
              //   color: '#8bd46e'
              // }, {
              //   offset: 1,
              //   color: '#09bcb7'
              // }]),
              barBorderRadius: 11
            }

          },
          data: [432, 453, 412, 541, 412, 426, 501, 456, 491]
        }, {
          name: '样板课件',
          type: 'bar',
          barWidth: '10%',
          itemStyle: {
            normal: {
              // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              //   offset: 0,
              //   color: '#fccb05'
              // }, {
              //   offset: 1,
              //   color: '#f5804d'
              // }]),
              barBorderRadius: 12
            }
          },
          data: [287, 398, 401, 451, 492, 473, 532, 587, 533]
        }, {
          name: '考试试卷',
          type: 'bar',
          barWidth: '10%',
          itemStyle: {
            normal: {
              // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              //   offset: 0,
              //   color: '#fccb05'
              // }, {
              //   offset: 1,
              //   color: '#f5804d'
              // }]),
              barBorderRadius: 12
            }
          },
          data: [372, 388, 411, 398, 453, 477, 561, 450, 552]
        }, {
          name: '学辅资料',
          type: 'bar',
          barWidth: '10%',
          itemStyle: {
            normal: {
              // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              //   offset: 0,
              //   color: '#fccb05'
              // }, {
              //   offset: 1,
              //   color: '#f5804d'
              // }]),
              barBorderRadius: 12
            }
          },
          data: [579, 589, 511, 598, 453, 497, 361, 550, 352]
        }, {
          name: '其他',
          type: 'bar',
          barWidth: '10%',
          itemStyle: {
            normal: {
              // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              //   offset: 0,
              //   color: '#fccb05'
              // }, {
              //   offset: 1,
              //   color: '#f5804d'
              // }]),
              barBorderRadius: 12
            }
          },
          data: [330, 376, 398, 437, 485, 507, 561, 559, 458]
        }
        ]
 };

 var app = {
     currentIndex: -1,
 };
 setInterval(function() {
     var dataLen = option.series[0].data.length;

     // 取消之前高亮的图形
     myChart.dispatchAction({
         type: 'downplay',
         seriesIndex: 0,
         dataIndex: app.currentIndex
     });
     app.currentIndex = (app.currentIndex + 1) % dataLen;
     //console.log(app.currentIndex);
     // 高亮当前图形
     myChart.dispatchAction({
         type: 'highlight',
         seriesIndex: 0,
         dataIndex: app.currentIndex,
     });
     // 显示 tooltip
     myChart.dispatchAction({
         type: 'showTip',
         seriesIndex: 0,
         dataIndex: app.currentIndex
     });


 }, 1000);