var colorList = [
                
                  '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                  '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
               ];
var xAxisData=['优秀', '良好', '一般'];
option = {
		title: [{
	        text: '一班',
	        x: '10%',
	        textAlign: 'center'
	       }, {
	        text: '二班',
	        x: '35%',
	        textAlign: 'center'
	       }, {
	        text: '三班',
	        x: '62%',
	        textAlign: 'center'
	        },
	        {
		        text: '四班',
		        x: '90%',
		        textAlign: 'center'
		        },
	        {
		        text: '五班',
		        x: '10%',
		        y:'50%',
		        textAlign: 'center'
		       }, {
		        text: '六班',
		        x: '35%',
		        y:'50%',
		        textAlign: 'center'
		       }, {
		        text: '七班',
		        x: '62%',
		        y:'50%',
		        textAlign: 'center'
		    },
		    {
		        text: '八班',
		        x: '90%',
		        y:'50%',
		        textAlign: 'center'
		    }],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    grid: [
           {
               show: false,
               left: 0,
               top: '12%',
               containLabel: true,
               width: '20%',
               height:'35%'
           },
           {
               show: false,
               left: '25%',
               top: '12%',
               containLabel: true,
               width: '20%',
               height:'35%'
           }, 
           {
               show: false,
               left: '50%',
               top: '12%',
               containLabel: true,
               width: '25%',
               height:'35%'
           }, 
           {
               show: false,
               left: '80%',
               top: '12%',
               containLabel: true,
               width: '20%',
               height:'35%'
           }, 
           {
               show: false,
               left: 0,
               top: '60%',
               containLabel: true,
               width: '20%',
               height:'35%'
           },
           {
               show: false,
               left: '25%',
               top: '60%',
               containLabel: true,
               width: '20%',
               height:'35%'
           },
           {
               show: false,
               left: '50%',
               top: '60%',
               containLabel: true,
               width: '20%',
               height:'35%'
           },
           {
               show: false,
               left: '80%',
               top: '60%',
               containLabel: true,
               width: '20%',
               height:'35%'
           },
       ],
       xAxis: [
           {
               gridIndex:0,
               axisTick:{
                   alignWithLabel: true
               },
               data:xAxisData
           },
            {
               gridIndex:1,
               axisTick:{
                   alignWithLabel: true
               },
               data:xAxisData
           },
            {
               gridIndex:2,
               axisTick:{
                   alignWithLabel: true
               },
               data:xAxisData
           },
            {
               gridIndex:3,
               axisTick:{
                   alignWithLabel: true
               },
               data:xAxisData
           },
           {
               gridIndex:4,
               axisTick:{
                   alignWithLabel: true
               },
               data:xAxisData
           },
            {
               gridIndex:5,
               axisTick:{
                   alignWithLabel: true
               },
               data:xAxisData
           },
           {
               gridIndex:6,
               axisTick:{
                   alignWithLabel: true
               },
               data:xAxisData
           },
            {
               gridIndex:7,
               axisTick:{
                   alignWithLabel: true
               },
               data:xAxisData
           },
       ],
       yAxis: [
           {
               gridIndex:0,
           },
           {
               gridIndex:1,
           },
           {
               gridIndex:2,
           },
           {
               gridIndex:3,
           },
           {
               gridIndex:4,
           },
           {
               gridIndex:5,
           },
           {
               gridIndex:6,
           },
           {
               gridIndex:7,
           },
       ],
      
       series: [
           {
               type: 'bar',
               xAxisIndex:0,
               yAxisIndex:0,
               itemStyle: {
                    normal: {
                   	   color: function(params) { return colorList[params.dataIndex];}
                   }
               },
               data:[20, 82, 10]
           },
           {
               type: 'bar',
               xAxisIndex:1,
               yAxisIndex:1,
               itemStyle: {
                    normal: {
                    	color: function(params) { return colorList[params.dataIndex];}
                    }
               },
               data:[80, 52, 10]
           },
           {
               type: 'bar',
               xAxisIndex:2,
               yAxisIndex:2,
               name:'3',
               itemStyle: {
            	   normal: {
                   	color: function(params) { return colorList[params.dataIndex];}
                   }
               },
               data:[91, 82, 15]
           },
           {
               type: 'bar',
               xAxisIndex:3,
               yAxisIndex:3,
               itemStyle: {
            	   normal: {
                   	color: function(params) { return colorList[params.dataIndex];}
                   }
   	   		},
               data:[71, 82, 31]
           }
           ,
           {
               type: 'bar',
               xAxisIndex:4,
               yAxisIndex:4,
               itemStyle: {
            	   normal: {
                   	color: function(params) { return colorList[params.dataIndex];}
                   }
   	   		},
               data:[89, 45, 30]
           }
           ,
           {
               type: 'bar',
               xAxisIndex:5,
               yAxisIndex:5,
               itemStyle: {
            	   normal: {
                   	color: function(params) { return colorList[params.dataIndex];}
                   }
   	   		},
               data:[31, 89,33]
           }
           ,
           {
               type: 'bar',
               xAxisIndex:6,
               yAxisIndex:6,
               itemStyle: {
            	   normal: {
                   	color: function(params) { return colorList[params.dataIndex];}
                   }
   	   		},
               data:[31, 89,21]
           }
           ,
           {
               type: 'bar',
               xAxisIndex:7,
               yAxisIndex:7,
               itemStyle: {
            	   normal: {
                   	color: function(params) { return colorList[params.dataIndex];}
                   }
   	   		},
               data:[31, 89,14]
           }
       ]
   };
