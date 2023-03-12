option =  {
			    legend: {
			        data:['维护次数','培训次数']
			    },grid: {
			         x: 50,
			         x2:30,
			         y:30,
			         y2:45
			    },
			    xAxis: [
			        {
			            type: 'category',
			            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
			            axisLine: {
			                show: false,
			                lineStyle: {
			                	
			                    color:'#277ace'
			                }
			            },
			            axisLabel: {
			                textStyle: {
			                    color: '#43eec6'
			                }
			            }
			        }
			    ],
			    yAxis: [
			        {
			            type: 'value',
			            axisLine: {
			                show: true,
			                lineStyle: {
			                	type:'dashed',
			                    color:'#277ace'
			                }
			            },
			            axisLabel: {
			                show: true,
			                textStyle: {
			                    color: '#43eec6'
			                }
			            },splitLine:{  
			                show:true ,
			                lineStyle:{
			                	type:'dashed',
			                    color:'#fff'
			                }
			            }
			        },
			        {
			             type: 'value',
			            axisLine: {
			                show: false,
			                lineStyle: {
			                	type:'dashed',
			                    color:'#277ace'
			                }
			            },
			            axisLabel: {
			                show: false,
			                textStyle: {
			                    color: '#277ace'
			                }
			            },splitLine:{  
			                show:false ,
			                lineStyle:{
			                	type:'dashed',
			                    color:'#fff'
			                }
			            }
			        },
			        {
			            type : 'value',
			            min: 0,
					  	max: 500,
					  	interval:100,
			            axisLine: {
			                show: false,
			                lineStyle: {
			                	type:'dashed',
			                    color:'#277ace'
			                }
			            },
			            axisLabel: {
			                show: false,
			                textStyle: {
			                    color: '#277ace'
			                }
			            },splitLine:{  
			                show:false ,
			                lineStyle:{
			                	type:'dashed',
			                    color:'#fff'
			                }
			            }
			        }
			    ],
			    series: [
			        {
			            name:'维护次数',
			            type:'bar',
			            data:[40, 50, 80, 45, 60, 70.7, 175.6, 182.2, 48.7, 18.8, 70,120],
			            itemStyle: {
				            normal: {
				                color: '#65f5f3',
			            		barBorderRadius:[10, 10, 10, 10],
			            		borderWidth:1,
			            		borderType:'solid',
			            		borderColor:'#adc4f8'
				            }
				        }
			        },
			        {
			            name:'培训次数',
			            type:'bar',
			            yAxisIndex: 1,
			            data:[40, 50, 80, 45, 60, 70.7, 175.6, 182.2, 48.7, 18.8, 70,120],
			             itemStyle: {
				            normal: {
				                color: '#277ace',
			            		barBorderRadius:[10, 10, 10, 10],
			            		borderWidth:1,
			            		borderType:'solid',
			            		borderColor:'#adc4f8'
				            }
				        }
			        },
			        {
			            name:'平均',
			            type:'line',
			            smooth:true,
			            yAxisIndex: 2,
			            data:[80, 200,120,70,90,160, 175.6, 182.2, 48.7, 90, 70,120],
			             itemStyle: {
				            normal: {
				                color: '#00fff5',
			            		barBorderRadius:[10, 10, 10, 10]
				            }
				        }
			        }
			    ]
			};