var arr=[81,101,50,67,77,80,90,100,109,98,89,70];
     var arrMonth = ['1月', '2月', '3月','4月', '5月', 
     	'6月','7月', '8月', '9月','10月', '11月', '12月'];
     var realValue = [8, 15, 100,23,56,78,65,45,34,22,34,67];
     var index = 0;
        // 指定图表的配置项和数据
        var option = {
        	    backgroundColor: '#0E2A43',
        	    title: {
        	        text: "月货量完成情况",
        	        textStyle: {
        	            color: '#00FFFF',
        	            fontSize: 24
        	        }
        	    },
        	    grid: {
        	        left: '3%',
        	        right: '4%',
        	        bottom: '10%',
        	        containLabel: true
        	    },
        	    tooltip: {
        	    	show: "false",
        	       /*  show: "true",
        	        trigger: 'axis',
        	        axisPointer: { // 坐标轴指示器，坐标轴触发有效
        	            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        	        } */
        	    },
        	    yAxis: {
        	        type: 'value',
        	        axisTick: {
        	            show: false
        	        },
        	        axisLine: {
        	            show: true,
        	            lineStyle: {
        	                color: '#fff',
        	            }
        	        },
        	        splitLine: {
        	            show: false,
        	            lineStyle: {
        	                color: '#aaa',
        	            }
        	        },
        	    },
        	    xAxis: [{
        	            type: 'category',
        	            axisTick: {
        	                show: false
        	            },
        	            axisLine: {
        	                show: true,
        	                lineStyle: {
        	                    color: '#fff',
        	                }
        	            },
        	            data: arrMonth
        	        } , {
        	            type: 'category',
        	            axisLine: {
        	                show: false
        	            },
        	            axisTick: {
        	                show: false
        	            },
        	            axisLabel: {
        	                show: false
        	            },
        	            splitArea: {
        	                show: false
        	            },
        	            splitLine: {
        	                show: false
        	            },
        	            data: arrMonth
        	        },
        	    ],
        	    series: [{
        	            name: '目标货量',
        	            type: 'bar',
        	            label: {
                            normal: {
                                show: true,
                                position: 'top',
                                padding: 10,
                                color: 'red',
            	                fontSize: 10,
            	                /* formatter: '{c}%' */
                            }
                        },
        	            xAxisIndex: 1,

        	            itemStyle: {
        	                normal: {
        	                    show: true,
        	                    color: 'white',
        	                    /* barBorderRadius: 50, */
        	                    borderWidth: 0,
        	                    borderColor: '#333',
        	                }
        	            },
        	            barWidth: '50%',
        	            data: arr
        	        },
        	        {
        	            name: '实际货量',
        	            type: 'bar',
        	            itemStyle: {
        	                normal: {
        	                    show: true,
        	                    color: "red",
        	                    borderWidth: 0,
        	                    borderColor: '#333',
        	                }
        	            },  
        	                label: {
                            normal: {
                                show: true,
                                position: 'inside',
                                color: 'white',
            	                fontSize: 10,
                                formatter:function(a){
                                	var number=1;
                                	for (var i = index; i < arr.length; i++) {
										number=arr[i];
										index++;
										break;
									}
                                	var result=(a.data*100/number).toFixed(0)+"%";
                                	return result;
                               	}
                            } 
                        }, 
        	            barWidth: '50%',
        	            data: realValue
        	        },
        	    ]
        	};