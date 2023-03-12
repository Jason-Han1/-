var img0 = "/asset/get/s/data-1568049553850-VkfO0I7uw.png";

var img1 = "/asset/get/s/data-1568049452851-43gRdndu6.png";

var img2 = "/asset/get/s/data-1568049460502-HMJMmLO84.png";




var sddata=[
			{name:'成都',val:1},
			{name:'绵阳',val:1},
			{name:'攀枝花',val:1},
			{name:'泸州',val:2},
			{name:'德阳',val:2},
			{name:'广元',val:3},
			{name:'遂宁',val:3}
		]
		var sddata2=[
			{name:'成都',val:3},
			{name:'绵阳',val:1},
			{name:'攀枝花',val:1},
			{name:'泸州',val:2},
			{name:'德阳',val:2},
			{name:'广元',val:3},
			{name:'遂宁',val:3}
		]
		var sddata3=[
			{name:'成都',val:2},
			{name:'绵阳',val:1},
			{name:'攀枝花',val:1},
			{name:'泸州',val:2},
			{name:'德阳',val:2},
			{name:'广元',val:3},
			{name:'遂宁',val:3}
		]
option = {
    xAxis: [
				    {
				        type: 'value',
        		        show:false,//网格线
        		        min:80
				    },
				    {
				        type: 'value',
				        gridIndex: 1,
				        min:80,
				        show:false,//网格线
				    },{
				        type: 'value',
				        show:false,//网格线
				        min:80,
				        gridIndex: 2
				    },
			    ],
			    yAxis: [
				    {
				        axisTick: {show: false},//去掉间隔线
        		        axisLine: {show: false,},//去掉轴线
				    	data: ['成都','绵阳','攀枝花','泸州','德阳','广元','遂宁'],
				    	axisLabel: {
				            formatter: function (value,index) {
				                var val='';
				                if(sddata[index].val==1){
				                	val='{a| }{value|' +' '+ value + '}';
				                }else if(sddata[index].val==2){
				                	val='{b| }{value|' +' '+ value + '}';
				                }else if(sddata[index].val==3){
				                	val='{c| }{value|' +' '+ value + '}';
				                }
				                return val
				            },
				            margin: 20,
				            rich: {
				                a: {
				                    height: 20,
				                    align: 'center',
				                    backgroundColor: {
				                        image: img0
				                    }
				                },
				                b: {
				                    height:20,
				                    align: 'center',
				                    backgroundColor: {
				                        image:img1
				                    }
				                },
				                c: {
				                    height: 20,
				                    align: 'center',
				                    backgroundColor: {
				                        image:img2
				                    }
				                },
				            }
				        }
				    },
				    {
				        axisTick: {show: false},//去掉间隔线
        		        axisLine: {show: false,},//去掉轴线
				    	data: ['成都','绵阳','攀枝花','泸州','德阳','广元','遂宁'],
				    	axisLabel: {
				            formatter: function (value,index) {
				                var val='';
				                if(sddata2[index].val==1){
				                	val='{a| }{value|' +' '+ value + '}';
				                }else if(sddata2[index].val==2){
				                	val='{b| }{value|' +' '+ value + '}';
				                }else if(sddata2[index].val==3){
				                	val='{c| }{value|' +' '+ value + '}';
				                }
				                return val
				            },
				            margin: 20,
				            rich: {
				                a: {
				                    height: 20,
				                    align: 'center',
				                    backgroundColor: {
				                        image: img0
				                    }
				                },
				                b: {
				                    height:20,
				                    align: 'center',
				                    backgroundColor: {
				                        image:img1
				                    }
				                },
				                c: {
				                    height: 20,
				                    align: 'center',
				                    backgroundColor: {
				                        image:img2
				                    }
				                },
				            }
				        },
				        gridIndex: 1
				    },{
				        axisTick: {show: false},//去掉间隔线
        		        axisLine: {show: false,},//去掉轴线
				    	data: ['成都','绵阳','攀枝花','泸州','德阳','广元','遂宁'],
				    	axisLabel: {
				            formatter: function (value,index) {
				                var val='';
				                if(sddata3[index].val==1){
				                	val='{a| }{value|' +' '+ value + '}';
				                }else if(sddata3[index].val==2){
				                	val='{b| }{value|' +' '+ value + '}';
				                }else if(sddata3[index].val==3){
				                	val='{c| }{value|' +' '+ value + '}';
				                }
				                return val
				            },
				            margin: 20,
				            rich: {
				                a: {
				                    height: 20,
				                    align: 'center',
				                    backgroundColor: {
				                        image: img0
				                    }
				                },
				                b: {
				                    height:20,
				                    align: 'center',
				                    backgroundColor: {
				                        image:img1
				                    }
				                },
				                c: {
				                    height: 20,
				                    align: 'center',
				                    backgroundColor: {
				                        image:img2
				                    }
				                },
				            }
				        },
				        gridIndex: 2
				    }
			    ],
			    grid: [
				    {
				    	top:'6%',
				    	right:'70%',
				        bottom: '10%',
				        left:'12%'
				    },
				    {
				    	top:'6%',
				    	right:'35%',
				    	bottom: '10%',
				    	left:'37%',
				    }, {
				    	top:'6%',
				    	right:'2%',
				    	bottom: '10%',
				    	left:'72%',
				    }
			    ],
			    series: [
			    	{	
			    		type: 'bar',
			    		data: [82,83,85,86,87,88,95],
			    		itemStyle: {
			                normal: {
			                    color: '#3297DB'
			                }
			            },
			            barWidth: '17',
				        label: {
				            normal: {
				            	show: true,
				            	color:'#fff',
				                position: ['5','20%'],
				                formatter:'{c}%'
				            }
				        }
				    }, 
				    {
			            name: '',
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
	                            color:'red'
	                        }
	                    },
				    },
				    {
			            name: '',
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
	                            position:'start',
	                            formatter:'{c}%'
	                        },
	                        lineStyle:{
	                            color:'#4FEE27'
	                        }
	                    },
			        },
				    {
				        type: 'bar',
			    		data: [82,83,85,86,87,88,95],
			    		itemStyle: {
			                normal: {
			                    color: '#3297DB'
			                }
			            },
			            barWidth: '17',
				        label: {
				            normal: {
				            	show: true,
				            	color:'#fff',
				                position: ['5','20%'],
				                formatter:'{c}%'
				            }
				        },
				        xAxisIndex: 1,
				        yAxisIndex: 1
				    },
				    {
			            name: '',
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
	                            color:'red'
	                        }
	                    },
	                    xAxisIndex: 1,
				        yAxisIndex: 1
				    },
				    {
			            name: '',
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
	                            position:'start',
	                            formatter:'{c}%'
	                        },
	                        lineStyle:{
	                            color:'#4FEE27'
	                        }
	                    },
	                    xAxisIndex: 1,
				        yAxisIndex: 1
			        },
				    {
				        type: 'bar',
			    		data: [82,83,85,86,87,88,95],
			    		itemStyle: {
			                normal: {
			                    color: '#3297DB'
			                }
			            },
			            barWidth: '17',
				        label: {
				            normal: {
				            	show: true,
				            	color:'#fff',
				                position: ['5','20%'],
				                formatter:'{c}%'
				            }
				        },
				        xAxisIndex: 2,
				        yAxisIndex: 2
				    },
				    {
			            name: '',
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
	                            color:'red'
	                        }
	                    },
	                    xAxisIndex: 2,
				        yAxisIndex: 2
				    },
				    {
			            name: '',
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
	                            position:'start',
	                            formatter:'{c}%'
	                        },
	                        lineStyle:{
	                            color:'#4FEE27'
	                        }
	                    },
	                    xAxisIndex: 2,
				        yAxisIndex: 2
			        },
			    ]
};