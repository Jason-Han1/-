 var option = {
     title: {
         text: '学生近一个月书籍阅读趋势',
         textStyle: {
             fontSize: 25,
             fontWeight: 'normal',
            //  color: '#fff',
         },
         x: 'left'
     },
    //  backgroundColor: '#323a5e',
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
          data: ['语言、文学', '自然科学','生物科学','军事','综合性图书'],
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
            '1日','2日','3日','4日','5日','6日','7日','8日','9日','10日','11日','12日','13日','14日','15日','16日','17日','18日','19日','20日','21日','22日','23日','24日','25日','26日','27日','28日','29日','30日','31日'
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
          name: '语言、文学',
          type: 'line',
          barWidth: '10%',
          itemStyle: {
            normal: {
              barBorderRadius: 12
            }
          },
          data: [64,95,82,58,77,52,61,64,90,74,60,59,75,96,59,94,76,100,92,63,79,86,57,99,89,78,71,54,92,93,64]
        },
        {
          name: '自然科学',
          type: 'line',
          barWidth: '10%',
          itemStyle: {
            normal: {
              barBorderRadius: 11
            }

          },
          data: [76,82,67,60,95,55,80,88,79,90,65,88,97,86,79,86,67,93,66,61,78,78,56,100,66,61,84,92,84,66,52]
        },
        {
          name: '生物科学',
          type: 'line',
          barWidth: '10%',
          itemStyle: {
            normal: {
              barBorderRadius: 11
            }

          },
          data: [53,68,91,62,74,82,68,86,74,55,65,89,82,68,90,87,77,62,81,95,95,99,95,61,79,88,92,92,76,66,76]
        },
        {
          name: '军事',
          type: 'line',
          barWidth: '10%',
          itemStyle: {
            normal: {
              barBorderRadius: 11
            }

          },
          data: [53,70,97,86,62,96,79,91,68,61,84,59,97,80,65,55,72,90,95,52,59,63,74,72,83,71,87,96,66,89,64]
        },
        {
          name: '综合性图书',
          type: 'line',
          barWidth: '10%',
          itemStyle: {
            normal: {
              barBorderRadius: 11
            }

          },
          data: [22,47,43,41,58,91,22,61,33,29,80,35,66,86,84,95,44,69,62,43,44,23,34,45,37,24,83,40,97,67,91]
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