option = {
		    title : {
		        text: '在售款式趋势',
		        x: 'center',
		        textStyle:{
		        	fontSize:16
		        }
		    },
			color:["#80cbc4","#82dae6","#81e7cf","#88e186","#acd680"],
			grid: {
		        bottom: 70
		    },
		    legend:{
		      data:["T恤","衬衫","卫衣","马甲","背心"],
		      x:'left'
		    },
		    tooltip : {
		        trigger: 'axis',
		        z:-1,
		        axisPointer:{
		        	type:'line',
		        	lineStyle:{
		        		type:'dashed',
		        		color:'#a4a4a4',
		        		opacity:0.7
		        	}
		        },
		        formatter: function(params) {
		            return params[0].name + '<br/>'
		                   + params[0].seriesName + ' : '  + params[0].value + '</br>'
		                   + params[1].seriesName + ' : '  + params[1].value + '</br>'
		                   + params[2].seriesName + ' : '  + params[2].value + '</br>'
		                   + params[3].seriesName + ' : '  + params[3].value + '</br>'
		                   + params[4].seriesName + ' : '  + params[4].value
		        }
		    },
		    dataZoom:[
		    	{
		    		show:true,
		    		realtime:true,
		    		start:30,
		    		end:70,
		    		handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
			        handleSize: '30%',
			        handleStyle: {
			            color: '#80cbc4'
			        },
	            	fillerColor:'#d8faf4',
		       		borderColor:"#b1b1b1"
		    	}
		    ],
		    xAxis : [
		        {
		            type : 'category',
		            axisTick: {
			            show: false
			        },
			        axisLine: {
			            lineStyle: {
			                color: '#90979c'
			            }
			        },
		            data : [
		            	'2009/6/1',
						'2009/6/2',
						'2009/6/3',
						'2009/6/4',
						'2009/6/5',
						'2009/6/6',
						'2009/6/7',
						'2009/6/8',
						'2009/6/9',
						'2009/6/10',
						'2009/6/11',
						'2009/6/12',
						'2009/6/13',
						'2009/6/14',
						'2009/6/15',
						'2009/6/16',
						'2009/6/17',
						'2009/6/18',
						'2009/6/19',
						'2009/6/20',
						'2009/6/21',
						'2009/6/22',
						'2009/6/23',
						'2009/6/24',
						'2009/6/25',
						'2009/6/26',
						'2009/6/27',
						'2009/6/28',
						'2009/6/29',
						'2009/6/30'
		            ].map(function (str) {
		                return str.replace(' ', '\n')
		            })
		        }
		    ],
		    yAxis: [
		        {
		            name: '',
		            axisTick: {
			            show: false
			        },
			        axisLine: {
			            lineStyle: {
			                color: '#90979c'
			            }
			        },
			        axisLabel:{
			            formatter:'{value}件'
			        },
		            type: 'value'
		        }
		    ],
		    series: [
		        {
		            name:'T恤',
		            type:'line',
//		            smooth:true,
		            hoverAnimation:true,
		            symbolSize:8,
		            itemStyle:{
		            	emphasis:{
		            		color:'#80cbc4',
		            		borderColor:'#fff',
		            		borderWidth:4,
		            		borderType:'solid',
		            		shadowBlur:5,
		            		shadowColor:'#9c9a9b',	
		            	}
		            },
		            lineStyle: {
		                normal: {
		                    width: 1,
		                }
		            },
		            data:[
		            	10,36,58,67,43,96,123,354,256,24,65,89,92,72,61,45,115,127,39,156,147,213,35,66,88,77,99,55,33,168
		            ]
		        },
		        {
		            name:'衬衫',
		            type:'line',
//		            smooth:true,
		            hoverAnimation:true,
		            symbolSize:8,
		            itemStyle:{
		            	emphasis:{
		            		color:'#82dae6',
		            		borderColor:'#fff',
		            		borderWidth:4,
		            		borderType:'solid',
		            		shadowBlur:5,
		            		shadowColor:'#9c9a9b',	
		            	}
		            },
		            lineStyle: {
		                normal: {
		                    width: 1,
		                }
		            },
		            data:[
		            	20,46,68,77,53,106,133,364,266,34,75,99,102,82,71,55,125,137,49,166,157,223,45,76,98,87,109,65,43,178
		            ]
		        },
		        {
		            name:'卫衣',
		            type:'line',
//		            smooth:true,
		            hoverAnimation:true,
		            symbolSize:8,
		            itemStyle:{
		            	emphasis:{
		            		color:'#81e7cf',
		            		borderColor:'#fff',
		            		borderWidth:4,
		            		borderType:'solid',
		            		shadowBlur:5,
		            		shadowColor:'#9c9a9b',	
		            	}
		            },
		            lineStyle: {
		                normal: {
		                    width: 1,
		                }
		            },
		            data:[
		            	30,56,78,87,63,116,143,374,276,44,85,109,112,92,81,65,135,147,59,176,167,233,55,86,108,97,119,75,53,188
		            ]
		        },
		        {
		            name:'马甲',
		            type:'line',
//		            smooth:true,
		            hoverAnimation:true,
		            symbolSize:8,
		            itemStyle:{
		            	emphasis:{
		            		color:'#88e186',
		            		borderColor:'#fff',
		            		borderWidth:4,
		            		borderType:'solid',
		            		shadowBlur:5,
		            		shadowColor:'#9c9a9b',	
		            	}
		            },
		            lineStyle: {
		                normal: {
		                    width: 1,
		                }
		            },
		            data:[
		            	40,66,88,97,73,126,153,384,286,54,95,119,122,102,91,75,145,157,69,186,177,243,65,96,118,107,129,85,63,198
		            ]
		        },
		        {
		            name:'背心',
		            type:'line',
//		            smooth:true,
		            hoverAnimation:true,
		            symbolSize:8,
		            itemStyle:{
		            	emphasis:{
		            		color:'#acd680',
		            		borderColor:'#fff',
		            		borderWidth:4,
		            		borderType:'solid',
		            		shadowBlur:5,
		            		shadowColor:'#9c9a9b',	
		            	}
		            },
		            lineStyle: {
		                normal: {
		                    width: 1,
		                }
		            },
		            data:[
		            	50,76,98,107,83,136,163,394,296,64,105,129,132,112,101,85,155,167,79,196,187,253,75,106,128,117,139,95,73,208
		            ]
		        }
		    ]
		};