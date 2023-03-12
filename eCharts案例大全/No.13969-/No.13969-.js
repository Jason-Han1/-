
option = {
   color: ['#eee'],
		    tooltip : {
		        trigger: 'axis',
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        }
		    },
		    grid: {
		        left: '3%',
		        right: '4%',
		        bottom: '3%',
		        containLabel: true
		    },
		    xAxis : [
		        {
		            type : 'category',
		            data : ['13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30'],
		            axisTick: {
		                alignWithLabel: true
		            }
		        }
		    ],
		    yAxis : [
		        {
		            min: 0,
		            max:10,
		            interval: 2,
		            axisTick: {
		                alignWithLabel: true
		            }
		        }
		    ],
		    series : [
		        {
		            name:'直接访问',
		            type:'bar',
		            barWidth: '40%',
		            data:[1, 3, 2, 3, 4, 2, 1],
		             markPoint : {
		                 data : [
		                     {name : '占比率', value : 4, xAxis: 4, yAxis:4,symbolSize:80,
		                         itemStyle:{
		                            normal:{
		                                color:'#6080d3',
		                            },
		                            
		                        }
		                    },
		                ],
		                itemStyle:{  
		                    normal:{
		                    	label:{  
		                            show: true,  
		                            formatter:function (data) {
						                 var data = (data.value || 0).toString(), result = '';
						                 while (data.length > 3) {
						                 	result = ',' + data.slice(-3) + result;
						                 	data= data.slice(0,data.length - 3);
						                 }
						                 if (data) { result = data + result; }
						                 return '最高\n\n'+result;
					                 },     
		                          } ,
		                    }  
		                }
		            },
		            itemStyle: {
		                normal: {
		                 
		                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
		                        offset: 0,
		                        color: 'rgba(17, 168,171, 1)'
		                    }, {
		                        offset: 1,
		                        color: 'rgba(17, 168,171, 0.1)'
		                    }]),
		                    shadowColor: 'rgba(0, 0, 0, 0.1)',
		                    shadowBlur: 10,
		                    
		                }
		            }
		        },
		        
		    ],
		    label: {
		            normal: {
		                show: true,
		                position: 'top',
		                formatter: '{c}'
		            }
		        },


};