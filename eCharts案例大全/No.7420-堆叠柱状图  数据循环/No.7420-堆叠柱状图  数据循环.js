   
   listmonth = [{
       name: '提权',
       data: [30],
       color:'red'
   }, {
       name: '错误日志',
       data: [60],
       color:'black'
   }, {
       name: '高危日志',
       data: [90],
       color:'blue'
   }, {
       name: '防火墙',
       data: [10],
       color:'pink'
   }, {
       name: '其他',
       data: [30],
       color:'yellow'
   }]
   var series = [];
   for (var i = 0; i < listmonth.length; i++) {
       console.log('listmonth',listmonth)
       series.push({
           name: listmonth[i].name,
           type: 'bar',
           data: listmonth[i].data,
           stack: '2',
           label: {
               normal: {
                   show: true,
                   position: 'inside',
                   textStyle: {
                       color: '#fff',
                       fontSize: 16
                   }
               }
           },
           barWidth: 40
       });

   }
   var legendData =[]
   let colorList =[]
   listmonth.forEach(item=>{
       legendData.push(item.name)
       colorList.push(item.color)
   })
   option = {
       backgroundColor: '#091034',
       color:colorList,
       legend: {
           top: '40%',
           data: legendData,
           textStyle: {
               color: '#ccc'
           }
       },
       grid: {
           containLabel: true,
           left: 10,
           right: 10,
       },
       tooltip: {},
       xAxis: {
           axisLine: {
               show: false
           },
           axisTick: {
               show: false
           },
           splitLine: {
               show: false
           },
           axisLabel: {
               show: false
           }

       },
       yAxis: {
           data: ['异常日志'],
           axisLabel: {
               fontSize: 16,
               color: '#fff'
           },
           axisLine: {
               show: false
           },
           axisTick: {
               show: false
           },
           splitLine: {
               show: false
           }
       },
       series: series
   }