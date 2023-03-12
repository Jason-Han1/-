option = {
    tooltip : {
		        trigger: 'axis',
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        },
		      //  formatter:function(params){ // 改鼠标悬浮提示值格式
//		         	
		          //  return 6;
		      //  }
		    },
		    grid: {
				    	top:'10%',
				        left: '3%',
				        right: '6%',
				        bottom: '3%',
				        containLabel: true
				    },
		    yAxis: [{
		        axisTick: {
		            show: false
		        },
		        axisLine: {
		            show: false,
		        },
		        axisLabel: {
		            color: '#3e4956',
		            fontSize: 13,
		        },
		
		        type: 'category',
		        position: 'left',
		        data: ['成都','成都','成都','成都','成都']
		
		    }],
		
		    xAxis: [
		        {
		            position:'top',
    		        axisTick: {
    		            show: false
    		        },
    		        type: 'value',
    		        axisLine: {
    		            show: false,
    		        },
		            axisLabel: {rotate: 90 }
		        },
		        {
                    type: 'value',
                    gridIndex: 0,
                    min: 0,
                    max: 100,
                    splitNumber: 12,
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    }
                }
		    ],
		    series: [
		    	{
		
		            name: '拆除数量',
		            align: 'left',
		            type: 'bar',
		            yAxisIndex: 0,
		            itemStyle: {
		                normal: {
		                    color: '#3297DB'
		                }
		            },
		            barWidth: '10',
		            label: {
		                normal: {
		                    position: 'right',
		                }
		            },
		            data: [70,80,90,80,70]
		       },
		       {
		
		            name: '拆除数量2',
		            show:false,
		            align: 'left',
		            type: 'bar',
		            yAxisIndex: 0,
		            itemStyle: {
		                normal: {
		                    color: '#3297DB'
		                }
		            },
		            barWidth: '0.01',
		            label: {
		                normal: {
		                    position: 'right',
		                }
		            },
		           data: [92,92,92,92,92,],
		            markLine:{
		                symbol:'none',//去掉箭头
                        data:[
                                {type:'average',name:'平均值'}
                            ],
                        label:{
                            position:'end',
                            formatter:'{c}%'
                        },
                        lineStyle:{
                            color:'#FF2207'
                        }
                    },
		       },
		       {
		
		            name: '拆除数量3',
		            show:false,
		            align: 'left',
		            type: 'bar',
		            yAxisIndex: 0,
		            itemStyle: {
		                normal: {
		                    color: '#3297DB'
		                }
		            },
		            barWidth: '0.01',
		            label: {
		                normal: {
		                    position: 'right',
		                }
		            },
		            data: [95,95,95,95,95],
		            markLine:{
		                padding: [0, -70],
		                symbol:'none',//去掉箭头
                        data:[
                                {type:'average',name:'平均值'}
                            ],
                        label:{
                            position:'end',
                            formatter:'{c}%'
                        },
                        lineStyle:{
                            color:'#FF7E03'
                        }
                    },
		       },
		    
		        
		
		    ]
};