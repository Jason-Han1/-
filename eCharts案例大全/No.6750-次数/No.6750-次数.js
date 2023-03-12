

 let seriesLineData = [];
 let LineData = [
     {
         name: '实时警情',
         data: [63, 75, 82, 41, 59, 60, 35, 48, 46, 56, 60, 55, 62, 51, 52, 40, 65, 58, 42, 55, 33, 45, 43, 51, 49],
         color: ['#1cf2ff']
     }
     
 ];
 
 for (var i = 0; i < LineData.length; i++) {
     seriesLineData.push({
             name: LineData[i].name,
              type: 'bar',
            barWidth: 5,
            
            z: 1,
            
            itemStyle: {
                normal: {
                    color:LineData[i].color[0]
                },

            },
             data: LineData[i].data,
         })
 }

 option = {
     backgroundColor: '#010d14',
     title: {
         text: '次数',
         textStyle: {
             fontSize: 12,
             fontWeight: 'normal',
             color: '#8fd5f3' //标题颜色
         },
         left: '2%',
     },
     tooltip: {
         trigger: 'axis',
         axisPointer: {
             type: 'cross',
             label: {
                 backgroundColor: '#6a7985'
             },
         }
     },
     legend: {
         icon: 'roundRect',
         orient: 'horizontal',
         itemWidth:10,
         itemHeight:5,
         textStyle: {
             fontSize: 12, //字体大小
             color: '#b9c8d4', //字体颜色
         },
         right: '3%' //距离右侧
     },

     grid: {
         left: '3%',
         top: '5%',
         right: '4%',
         bottom: '3%',
         containLabel: true
     },
     xAxis: [{
         type: 'category',
        
         data: ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23'],
         axisLabel: {
              interval: 0,   //文字过多
			  rotate: 15,//倾斜角度
             show: true,
             textStyle: {
                 color: '#8fd5f3'
             }
         },
         axisLine: {
             lineStyle: {
                 color: '#0a2b52',
                 width: 0.5, //这里是为了突出显示加上的
             }
         }
     }],
     yAxis: [{
         type: 'value',
         interval: 20,
         max:100,
         axisLine: {
             onZero: false,
             lineStyle: {
                 color: '#0a2b52',
                 width: 1, //这里是为了突出显示加上的
             }
         },
         axisLabel: {
            
             show: true,
             textStyle: {
                 color: '#8fd5f3' //字体颜色
             }
         },
         splitLine: { //保留网格线
             show: true,

             lineStyle: { //y轴网格线设置
                 color: '#0a2b52',
                 width: 1,
                 type: 'dotted'
             }
         },
     }],
     series: seriesLineData
 };