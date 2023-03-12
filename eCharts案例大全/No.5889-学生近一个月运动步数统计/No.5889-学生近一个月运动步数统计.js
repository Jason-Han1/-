 var option = {
     title: {
         text: '学生近一个月运动步数统计',
         textStyle: {
             fontSize: 25,
             fontWeight: 'normal',
            //  color: '#fff',
         },
         x: 'center'
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
          data: ['个人步数', '全校当天平均值'],
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
          name: '个人步数',
          type: 'bar',
          barWidth: '10%',
          itemStyle: {
            normal: {
              barBorderRadius: 12
            }
          },
          data: [1230,2345,3456,234,1231,2321,2312,453,6576,5634,4432,5632,4365,123,4433,5342,4132,6452,3651,3458,5432,3456,4578,4555,5132,6434,6543,5467,432,5554,4444]
        },
        {
          name: '全校当天平均值',
          type: 'bar',
          barWidth: '10%',
          itemStyle: {
            normal: {
              barBorderRadius: 11
            }

          },
          data: [4567,5466,2342,6575,3345,6765,4533,5212,,4331,5234,5112,6452,5375,3456,5980,6555,5334,5432,4567,6123,6432,4357,3453,5675,3453,6665,3432,5432,5433,4542]
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