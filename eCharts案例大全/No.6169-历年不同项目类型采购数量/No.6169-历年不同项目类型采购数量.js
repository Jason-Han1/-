 var option = {
     title: {
         text: '历年不同项目类型招标情况',
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
         data: ['2017年', '2018年','2019年'],
         right: 10,
         top: 12,
         textStyle: {
             color: "#fff"
         },
         itemWidth: 12,
         itemHeight: 10,
         // itemGap: 35
     },
     xAxis: {
         type: 'category',
         data: ['人员外包',
             '会议服务',
             '办公用品',
             '医疗卫生服务',
             '印刷和出版服务',
             '咨询服务',
             '安全服务',
             '广告服务',
             '文化、体育、娱乐服务',
             '物业管理服务',
             '电信服务',
             '租赁服务',
             '维修和保养服务',
             '装修工程',
             '计算机硬件设备',
             '计算机软件设备',
             '软件开发服务',
             '运营服务',
             '运行维护服务',
             '餐饮服务'
         ],
         axisLine: {
             lineStyle: {
                 color: 'white'

             }
         },
         axisLabel: {
             // interval: 0,
             // rotate: 40,
            //  textStyle: {
            //      fontFamily: 'Microsoft YaHei'
            //  }
         },
     },

     yAxis: {
         type: 'value',
        
         axisLine: {
             show: false,
             lineStyle: {
                 color: 'white'
             }
         },
         splitLine: {
             show: true,
             lineStyle: {
                 color: 'rgba(255,255,255,0.3)'
             }
         },
         axisLabel: {}
     },
     "dataZoom": [{
         "show": true,
         "height": 12,
         "xAxisIndex": [
             0
         ],
         bottom: '8%',
         "start": 10,
         "end": 90,
         handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
         handleSize: '110%',
         handleStyle: {
             color: "#d3dee5",

         },
         textStyle: {
             color: "#fff"
         },
         borderColor: "#90979c"
     }, {
         "type": "inside",
         "show": true,
         "height": 15,
         "start": 1,
         "end": 35
     }],
     series: [{
             name: '2017年',
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
                     barBorderRadius: 12,
                 },
             },
             data: [45,24,243,51,62,130,165,175,82,199,18,47,251,385,274,127,331,288,67,74]
         },
         {
             name: '2018年',
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
                     barBorderRadius: 11,
                 }

             },
             data: [65,44,258,110,83,174,183,253,142,197,49,77,247,550,431,169,489,386,129,117]
         },{
             name: '2019年',
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
                     barBorderRadius: 12,
                 },
             },
             data: [101,72,331,143,86,251,307,515,206,235,60,105,333,647,607,277,849,730,199,154]
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