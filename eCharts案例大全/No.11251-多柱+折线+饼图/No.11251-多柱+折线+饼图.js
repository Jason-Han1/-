option = {
    backgroundColor:'#040C5',
      	    legend: {
    	    	data: ['超出费用', '基金使用率'],
 		        textStyle: {
 		            color: '#B5C9FF'
 		        },
 		        show:true,
 		        x: "left",
 		        left:'20%',
 		        top:'0%', 	        		
    	    },
    	    tooltip: {
				show:true,
				 trigger: 'axis',
    	    },
		   
		    grid: {
		    	 left: '3%',
			        right: '30%',
			        top: '16%',
			        bottom: '5%',
		        containLabel: true
		    },
		    toolbox: {
		        "show": false,
		        feature: {
		            saveAsImage: {
		            }
		        }
		    },
		    xAxis: {
		        type: 'category',
		        axisTick: {
		            "show": false
		        },
		        axisLabel: {
		            textStyle: {
		                color: '#B5C9FF'
		            }
		        },
		        axisLine: {
    	            lineStyle: {
    	                color: '#484d8d'
    	            }
    	        },
		        data: ["1月", "2月", "3月", "4月", "5月", "6月"]
		    },
		    
		    yAxis: [{
 	            color:'#B5C9FF',
		        splitLine: {
    	            show: false
    	        },
		        axisLabel: {
		        	formatter: '{value}万元',
		            textStyle: {
		                color: '#B5C9FF'
		            }
		        },
		        axisLine: {
    	            lineStyle: {
    	                color: '#484d8d'
    	            }
    	        },
		        type: 'value'
		    },
		    {
		    	  color:'#B5C9FF',
		        splitLine: {
    	            show: false,
    	        },
		        axisLabel: {
		        	formatter: '{value}%',
		            textStyle: {
		                color: '#B5C9FF'
		            }
		        },
		        type: 'value'
		    },    
		    {
		        splitLine: {
    	            show: false,
    	            lineStyle: {
    	                color: '#FFF'
    	            }
    	        },
		        axisLabel: {
		            textStyle: {
		                color: '#00ecff'
		            }
		        },
		        axisLine: {
    	            lineStyle: {
    	                color: '#484d8d'
    	            }
    	        },
		        type: 'value'
		    },    	
		    ],  		    
		    series: [{
		    	name:'未超出费用',
		    	stack: "基金支出", 
	            type: "bar",
	            barMaxWidth: 10,
	            barGap: "10%",
	            itemStyle: {
	                normal: {
	                    color: "#1772ef",
	                    label: {
	                        show: false,
	                        textStyle: {
	                            color: "#fff"
	                        },
	                       
	                    }
	                }
	            },
		        data: [50,40,60,55,43,30]
		    }, 
		    {
		    	name:'超出费用',
		    	stack: "基金支出", 
	            type: "bar",
	            barMaxWidth: 10,
	            barGap: "10%",
	            itemStyle: {
	                normal: {
	                    color: "#F1667A",
	                    label: {
	                        show: false,
	                        textStyle: {
	                            color: "#fff"
	                        },
	                       
	                    }
	                }
	            },
		        data: [24,45,41,12,32,0]
		    }, 
		    {
	            name: "预警线",
	            type: "line",
	            symbolSize:2,
	            symbol:'circle',
	           itemStyle: {
	                normal: {
	                    color: "red",
	                    barBorderRadius: 0,
	                    label: {
	                        show: false,
	                        position: "top",
	                    }
	                }
	            },
	            data: [50,40,60,55,43,65]
	        },
		    {
	            name: "基金使用率",
	            type: "line",
	            yAxisIndex: 1,
	            symbolSize:2,
	            symbol:'circle',
	           itemStyle: {
	                normal: {
	                    color: "rgba(252,230,48,1)",
	                    barBorderRadius: 0,
	                    label: {
	                        show: false,
	                        position: "top",
	                    }
	                }
	            },
	            data: [73,55,65,55,33,55]
	        },
		    {
		        name: "收入占比",
		        type: 'pie',
		        center: ['83%', '20%'],
		        radius:  ['32%', '37%'],
		        label: {
		            normal: {
		                position: 'center'
		            }
		        },
		        
		        data: [{
                	itemStyle:{
                		normal: {color: "#203de0"}
                	},
                	label:{
                			normal: {formatter: "收入占比\n{d} %", 
                			textStyle: {color: "#ffd285", fontSize: 14}}
                		},
                	name: "",
                	value: 30
                },{
                	itemStyle:{
                		normal: {color: "#87cffb"}
                	},
                	value: 70
                },
                ]
		    },
		    {
		        name: "",
		        type: 'pie',
		        center: ['83%', '68%'],
		        radius:  ['32%', '37%'],
		        label: {
		            normal: {
		                position: 'center'
		            }
		        },
		        data: [{
                	itemStyle:{
                		normal: {color: "#203de0"}
                	},
                	label:{
                			normal: {formatter: "支出占比\n{d} %", 
                			textStyle: {color: "#ffd285", fontSize: 14}}
                		},
                	name: "",
                	value: 30
                },{
                	itemStyle:{
                		normal: {color: "#87cffb"}
                	},
                	value: 70
                },
                ]
		    },
		    
		    ]
	};