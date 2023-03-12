 var xdata = ['1', '2', '3'];
 var dataArr = [180, 150, 129];
 var dataArr1=[];
dataArr1=dataArr.map(item=>{
    return 2;
})
 var colors=new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                     offset: 0,
                     color: 'rgba(2, 117, 195,.9)'
                 }, {
                     offset: 1,
                     color: 'rgba(3, 26, 119,.2)'
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
         stack:"次数",
         barWidth: 'auto',
         barGap: "50%",
         itemStyle: {
             normal: {
                 color: colors
             },
         },
         data: dataArr
     },{
         name: '2',
         type: 'bar',
          stack:"次数",
         barWidth: '80',
         barGap: "50%",
         itemStyle: {
             normal: {
                 color: "rgb(59, 188, 254)"
             },
         },
         data: dataArr1
     }, ]
 };