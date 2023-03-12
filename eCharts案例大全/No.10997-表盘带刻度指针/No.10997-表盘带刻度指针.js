option = {
               		  series: [
            		       {
                	            "name": "仪表盘1",
                	            "type": "gauge",
                	             startAngle: 180,
            		    endAngle: 0,
                	            center: ['20%', '50%'],
                	            radius: '35%',
                	            "splitNumber": 10,
                	            "axisLine": {
                	                "lineStyle": {
                	                    "color": [
                [
                  80/100, new echarts.graphic.LinearGradient(
                  0, 0, 1, 0, [{
                  offset: 0,
                  color: '#f22a2c'
                },
                  {
                    offset: 1,
                    color: '#fe82b8'
                  }
                ]
                  )
                ],
               [
                  1, '#222e7d'
                ]
              ],
                	                    "width": 8
                	                }
                	            },
                	            axisLabel: {
                	                show: false,
                	            },
                	            "axisTick": {
                	                show: false,

                	            },
                	            "splitLine": {
                	                "show": false,
                	            },
                	            "itemStyle": {
                	                borderColor:'#f95e7e',
                	                borderWidth :2
                	            },
                	            "detail": {
                	                "formatter": function(value) {
                	                    if (value !== 0) {
                	                        return value+"%\n"+"人次";
                	                    } else {
                	                        return 0;
                	                    }
                	                },
                	                "offsetCenter": [0, "100%"],
                	                "textStyle": {
                	                	padding: [0, 0, 80, 0],
                	                    "fontSize": 18,
                	                    fontWeight: '700',
                	                    "color": '#f95e7e'
                	                }
                	            },
                	            "title": {
                	            	 color: '#fff',
                	            	 "fontSize": 10,
                	            	"offsetCenter": [0, "-25%"]
                	            }, 
                	            "data": [{
                	                "name": "",
                	                "value": 80,
                	            }],
                	            pointer: {
                	                 show: true,
                                     width: "2",
                                     length: '50%'
                	            },
                	        },
            		     
            		  {
            	            "name": "仪表盘2",
            	            "type": "gauge",
            	            radius: '65%',
            	            center: ['70%', '50%'],
            	            startAngle: 180,
            		        endAngle: 0,
            	            "splitNumber": 10,
            	            "axisLine": {
            	                "lineStyle": {
            	                    "color": [
                [
                	30/100 , new echarts.graphic.LinearGradient(
                  0, 0, 1, 0, [{
                  offset: 0,
                  color: '#50e2d7'
                },
                  {
                    offset: 1,
                    color: '#99f8a4'
                  }
                ]
                  )
                ],
               [
                  1, '#222e7d'
                ]
              ],
            	                    "width": 8
            	                }
            	            },
            	            axisLabel: {
            	                show: false,
            	            },
            	            "axisTick": {
            	                show: false,

            	            },
            	            "splitLine": {
            	                "show": false,
            	            },
            	            "itemStyle": {
            	                 borderColor:'#10e9be',
                	                borderWidth :2
            	            },
            	            "detail": {
            	                "formatter": function(value) {
            	                	   if (value !== 0) {
               	                        return value+"%\n"+"费用";
               	                    } else {
               	                        return 0;
               	                    }
            	                },
            	                "offsetCenter": [0, "100%"],
            	                "textStyle": {
            	                	padding: [0, 0, 80, 0],
            	                    "fontSize": 18,
            	                    fontWeight: '700',
            	                    "color":'#10e9be'
            	                }
            	            },
            	            "title": {
            	            	 color: '#fff',
            	            	 "fontSize": 10,
            	            	"offsetCenter": [0, "-25%"]
            	            }, 
            	            "data": [{
            	                "name": "",
            	                "value": 30,
            	            }],
            	            pointer: {
            	                show: true,
                                     width: "2",
                                     length: '50%'
            	            },
            	        },
        {
            		    name: '刻度1',
            		    type: 'gauge',
            		    radius: '30%',
            		     center: ['20%', '50%'],
            		    min:0,//最小刻度
            		    max:100,//最大刻度
            		    splitNumber: 5, //刻度数量
            		    startAngle: 180,
            		    endAngle: 0,
            		    axisLine: {
            		      show: true,
            		      lineStyle: {
            		        width: 1,
            		        color: [[1,'rgba(0,0,0,0)']] 
            		      }
            		    },//仪表盘轴线
            		    axisLabel: {
            		      show: false,
            		    
            		    },//刻度标签。
            		    axisTick: {
            		       show: true,
            		       splitNumber: 7,
            		      lineStyle: {
            		          color: '#5c53de',  //用颜色渐变函数不起作用
            		          width: 1,
            		      },
            		      length: -8
            		    },//刻度样式
            		    splitLine: {
            		      show: false,
            		    },//分隔线样式
            		    detail: {
            		      show: false
            		    },
            		    pointer: {
            		      show: false
            		    }
            		  }, 
            	        
            	        {
                		    name: '刻度2',
                		    type: 'gauge',
                		    center: ['70%', '50%'],
                		    radius: '50%',
                		    min:0,//最小刻度
                		    max:100,//最大刻度
                		    splitNumber: 5, //刻度数量
                		    startAngle: 180,
                		    endAngle: 0,
                		    axisLine: {
                		      show: true,
                		      lineStyle: {
                		        width: 1,
                		        color: [[1,'rgba(0,0,0,0)']] 
                		      }
                		    },//仪表盘轴线
                		    axisLabel: {
                		      show: false,
                		    },//刻度标签。
                		    axisTick: {
                		       show: true,
                		       splitNumber: 7,
                		      lineStyle: {
                		          color: '#5c53de',  //用颜色渐变函数不起作用
                		          width: 1,
                		      },
                		      length: -8
                		    },//刻度样式
                		    splitLine: {
                		      show: false,
                		    },//分隔线样式
                		    detail: {
                		      show: false
                		    },
                		    pointer: {
                		      show: false
                		    }
                		  },
                    	               	        
                	{//指针外环
                    "type": 'pie',
                    "hoverAnimation": false,
                    "legendHoverLink": false,
                    "radius": ['5%', '7%'],
                    center: ['20%', '50%'],
                    "label": {
                        "normal": {
                            "show": false
                        }
                    },
                    "labelLine": {
                        "normal": {
                            "show": false
                        }
                    },
                    "data": [{
                        "value": 100,
                        itemStyle: {
                            normal: {
                                color: "#fd479c"
                            }
                        }
                    }]
                },
                     {//指针外环
                    "type": 'pie',
                    "hoverAnimation": false,
                    "legendHoverLink": false,
                    "radius": ['5%', '7%'],
                    center: ['70%', '50%'],
                    "label": {
                        "normal": {
                            "show": false
                        }
                    },
                    "labelLine": {
                        "normal": {
                            "show": false
                        }
                    },
                    "data": [{
                        "value": 100,
                        itemStyle: {
                            normal: {
                                color: "#11e8bc"
                            }
                        }
                    }]
                },
                	 
                                	               	        
                	{//指针内环
                    "type": 'pie',
                    "hoverAnimation": false,
                    "legendHoverLink": false,
                    "radius": ['0%', '5%'],
                    center: ['20%', '50%'],
                    "label": {
                        "normal": {
                            "show": false
                        }
                    },
                    "labelLine": {
                        "normal": {
                            "show": false
                        }
                    },
                    "data": [{
                        "value": 100,
                        itemStyle: {
                            normal: {
                                color: "#fff"
                            }
                        }
                    }]
                },
                     {//指针内环
                    "type": 'pie',
                    "hoverAnimation": false,
                    "legendHoverLink": false,
                    "radius": ['0%', '5%'],
                    center: ['70%', '50%'],
                    "label": {
                        "normal": {
                            "show": false
                        }
                    },
                    "labelLine": {
                        "normal": {
                            "show": false
                        }
                    },
                    "data": [{
                        "value": 100,
                        itemStyle: {
                            normal: {
                                color: "#000657"
                            }
                        }
                    }]
                },
                	 
            	        
            		  ]
};