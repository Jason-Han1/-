 var xdata = ['0min', '2min', '4min', '6min', '8min', '10min', '12min', '14min', '16min', '18min', '20min'];
 var dataArr = [180, 150, 129, 148, 253, 246, 207, 149, 145, 139, 124];
 var colors=new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                     offset: 0,
                     color: 'rgba(1, 139, 181,.9)'
                 }, {
                     offset: 1,
                     color: 'rgba(3, 26, 119,.8)'
                 }]);
 var option = {
     backgroundColor: 'rgb(5, 7, 20)',
     tooltip: { // 提示框组件
         trigger: 'axis',
         axisPointer: { // 坐标轴指示器，坐标轴触发有效
             type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
         },
         show: true,
         formatter: function(params) {
             return params[0].name + "<br>" + params[0].data + '次';
         }
     },
     grid: {
         left: '2%',
         right: '4%',
         bottom: '14%',
         top: '16%',
         containLabel: true
     },
     xAxis: {
         type: 'category',
         data: xdata,
         axisTick: {
             show: false
         },
         axisLabel: {
             show: true,
             textStyle: {
                 color: "#fff",
                 fontSize: 14
             }
         },
         axisLine: {
             show: false
         },
     },

     yAxis: {
         type: 'value',
         axisTick: {
             show: false
         },
         axisLine: {
             show: false,
         },
         axisLabel: {
             show: true,
             textStyle: {
                 color: "#00E4FF",
                 fontSize: 14
             },
             formatter: '{value}次',
         },
         splitLine: {
             show: true,
             lineStyle: {
                 color: 'rgba(3, 26, 119,.7)'
             }
         },
     },
     series: [{
         name: '1',
         type: 'bar',
         barWidth: '100%',
         barGap: 0,
         itemStyle: {
             normal: {
                 color: colors
             },
         },
         data: dataArr
     }, ]
 };