 		       option = {
		    backgroundColor: "#11325B",
		   
		    tooltip: {
		        trigger: 'axis',
		        axisPointer: {
		            type: 'shadow'
		        }
		    },
		    legend: {
		        type: 'scroll',
		        orient: 'horizontal',
		       top:'6%',
		       left:'center',
		        data: // ['图标数据']
		            [{
		                    name: '客服类'
		                },
		                {
		                    name: '运营类'
		                },
		                {
		                    name: '工建类'
		                },
		                {
		                    name: '漏气类'
		                },
		                {
		                     name: '投诉'
		                }
		               
		            ],
		        textStyle: {
		            color: "#ccc"
		        },
		        
		    },
		    grid: {
		        top: '13%',
		        left: '3%',
		        right: '3%',
		        bottom: '2%',
		        containLabel: true,
		    },
		    toolbox: {
		        show: true,
		        feature: {
		            magicType: {
		                type: ['line', 'bar']
		            },
		            restore: {},
		            saveAsImage: {}
		        }
		    },
		    xAxis: {
		        type: 'category', // 'category',
		        boundaryGap: true, // false,
		        data: [
		            '1 月', '2 月', '3 月', '4 月', '5 月', '6 月', '7 月', '8 月', '9 月', '10 月', '11月', '12 月'
		        ],
		        axisLabel:{
		            textStyle:{
		                fontSize:12,
		                color:'#ccc'
		            }
		        }
		    },
		    yAxis: {
		            type: 'value',
		            axisLabel: {
		                 show: true,
		                textStyle: {
		                    color: "#ebf8ac"
		                }
		            },
		             axisTick: {
                show: true
		            },
		            axisLine: {
		                show: true,
		                lineStyle: {
		                            color: '#FFFFFF'
		                            }
		            },
		            splitLine: {
		                lineStyle: {
		                    type: 'solid'
		                }
		            }
		        },
		        
		    
		    series: [{
		            type: 'bar',
		            name: '客服类',
		            stack: '客服类1',
		             itemStyle: {
                       normal: {
                       	color:'#5AAFEF'
                       }
                    },   
		            data: [
		                20, 30, 40, 60, 78, 42,67, 45, 38,42, 22, 45
		            ],
		            
		        }, {
		            type: 'bar',
		            name: '运营类',
		            stack: '运营类1',
		             itemStyle: {
                       normal: {
                       	color:'#FFBA7F'
                       }
                    }, 
		            data: [
		                47, 30, 40, 60, 24, 42,67, 45, 38,22, 33, 30
		            ]
		        }, {
		            type: 'bar',
		            name: '工建类',
		            stack: '工建类1',
		            itemStyle: {
                       normal: {
                       	color:'#B5A3DD'
                       }
                    }, 
		            data: [
		                34, 30, 40, 55, 45, 42,67, 45, 38,34, 55, 26
		            ]
		        }, {
		            type: 'bar',
		            name: '漏气类',
		            stack: '漏气类1',
		           itemStyle: {
                       normal: {
                       	color:'#5289F7'
                       }
                    }, 
		            data: [
		                 20, 30, 40, 44, 33, 42,54, 45, 38,23, 67, 44
		            ]
		        },{
		            type: 'bar',
		            name: '投诉',
		            stack: '投诉1',
		               itemStyle: {
                       normal: {
                       	color:'#05FC6F'
                       }
                    }, 
		            data: [
		                 16, 30, 40, 66, 27, 36,17, 45, 38,42, 56, 33
		            ]
		        }, 
		        
		
		
		    ]
		};