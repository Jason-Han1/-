 var data = {
     schoolYears: ['我是一个柱子', '耳机啊是你的', '啊就是觉得', '撒娇都是', '牛奶咖啡', '比比鸡鸡'],
     studentsInEachSchoolYear: [12, 23, 43, 63, 29, 33]
 };
 //  轮播间隔3秒
 var intervalSecs = 3000;
 
 var myColor=['#F0F8FF','#B0C4DE','#778899','#6495ED','#4169E1','#00008B'];



 option = {
     color: ['#1891FF'],
     tooltip: {
         trigger: 'axis',
         axisPointer: { // 坐标轴指示器，坐标轴触发有效
             type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
         },
         //  不固定
         position: function(pos, params, dom, rect, size) {
             // 鼠标在左侧时 tooltip 显示到右侧，鼠标在右侧时 tooltip 显示到左侧。
             var obj = {
                 top: 60
             };
             obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 5;
             return obj;
         }
         //  固定
         //  position: ['80%', '10%']
     },
     grid: {
         top: '12%',
         left: '6%',
         right: '6%',
         bottom: '6%',
         containLabel: true
     },
     xAxis: [{
         type: 'category',
         // data:['112','123','123'],
         data: !data.schoolYears ? [] : data.schoolYears,
         axisTick: {
             alignWithLabel: false,
             show: false
         },
         axisLine: {
             lineStyle: {
                 color: '#8098C5'
             }
         }

     }],
     yAxis: [{
         type: 'value',
         //分割线
         splitLine: {
             show: false
         },
         //刻度线
         axisTick: {
             show: false
         },
         //轴线
         axisLine: {
             lineStyle: {
                 color: '#8098C5'
             },
             symbol: ['none', 'arrow'], //箭头
             symbolSize: [4, 4],
         }
     }],
     series: [{
         type: 'bar',
         //柱子宽度
         barWidth: null,
         // data:[123,232,42]
         data: !data.studentsInEachSchoolYear ? [] : data.studentsInEachSchoolYear,
         itemStyle: {
             normal: {
                 show: true,
                //  循环颜色
                 color: function(params) {
                     var num = myColor.length;
                     return myColor[params.dataIndex % num]
                 },
                 barBorderRadius: 8,
                 borderWidth: 0,
                 borderColor: '#333',
             }
         },
     }]
 };



 /*轮播展示数据*/
 var count = 0;
 var timeTicket = null;
 var dataLength = option.xAxis[0].data.length;
 timeTicket && clearInterval(timeTicket);
 timeTicket = setInterval(function() {
     myChart.dispatchAction({
         type: 'downplay',
         seriesIndex: 0,
     });
     myChart.dispatchAction({
         type: 'highlight',
         seriesIndex: 0,
         dataIndex: (count) % dataLength
     });
     myChart.dispatchAction({
         type: 'showTip',
         seriesIndex: 0,
         dataIndex: (count) % dataLength
     });
     count++;
 }, intervalSecs);

 myChart.on('mouseover', function(params) {
     clearInterval(timeTicket);
     myChart.dispatchAction({
         type: 'downplay',
         seriesIndex: 0
     });
     myChart.dispatchAction({
         type: 'highlight',
         seriesIndex: 0,
         dataIndex: params.dataIndex
     });
     myChart.dispatchAction({
         type: 'showTip',
         seriesIndex: 0,
         dataIndex: params.dataIndex,
     });
 });
 myChart.on('mouseout', function(params) {
     timeTicket && clearInterval(timeTicket);
     timeTicket = setInterval(function() {
         myChart.dispatchAction({
             type: 'downplay',
             seriesIndex: 0,
         });
         myChart.dispatchAction({
             type: 'highlight',
             seriesIndex: 0,
             dataIndex: (count) % dataLength
         });
         myChart.dispatchAction({
             type: 'showTip',
             seriesIndex: 0,
             dataIndex: (count) % dataLength
         });
         count++;
     }, intervalSecs);
 });