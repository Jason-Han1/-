 var data = [
     ["13:00", "1000", "2018-01"],
     ["13:15", "1000", "2018-01"],
     ["13:00", "1000", "2018-01"],
     ["13:00", "1500", "2018-01"],
     ["13:00", "1200", "2018-01"]
 ]

 var textStyle = {
     color: '#333',
     fontStyle: 'normal',
     fontWeight: 'normal',
     fontFamily: '微软雅黑',
     fontSize: 14,
 };
 option = {
     xAxis: {
         type: 'category',
         name: '时间轴',
         axisLine: {
             lineStyle: {
                 color: '#fff',
                 width: 1
             }
         },
         splitLine: {
             show: true,
             lineStyle: {
                 color: ['#666'],
                 width: 1,
                 type: 'solid'
             }
         }

     },
     yAxis: {
         type: 'value',
         name: '万千瓦',
         axisLine: {
             lineStyle: {
                 color: '#fff',
                 width: 1
             }
         },
         splitLine: {
             show: true,
             lineStyle: {
                 color: ['#888'],
                 width: 1,
                 type: 'solid'
             }
         }

     },

     tooltip: {
         // padding: 10,
         // backgroundColor: '#222',
         // borderColor: '#777',
         // borderWidth: 0,
         formatter: function(obj) {
             var value = obj.value;
             return value[2] + '<br>' + value[0] + '<br>' + value[1]
         }
     },
     series: [{
         name: '',
         data: data,
         type: 'scatter',
         symbolSize: 10
     }]
 };