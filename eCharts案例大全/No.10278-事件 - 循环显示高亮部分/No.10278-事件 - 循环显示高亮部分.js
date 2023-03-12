var option = {
		    tooltip: {
		        trigger: 'axis',
		        axisPointer: {
		            type: 'cross',
		            crossStyle: {
		                color: '#999'
		            }
		        }
		    },
		    grid: {
		        top: 30,
		        bottom: 30,
		        left: 45,
		        right: 30
		    },
		   	dataZoom: [
				{ type: 'inside' }
			],
		    legend: {
		        data:['指数'],
//		        data:[barLinechartData[1].name],
//		        right: 10,
		        textStyle: {
		            color: '#fff'
		        }
		    },
		    xAxis: [
		        {
		            type: 'category',
		            data: [9,8,7,6,5,4,3,2,1],
		            axisPointer: {
		                type: 'shadow'
		            },
		            axisTick: {
			          	show: false  
			        },
		            axisLabel: {
			          	textStyle: {
			              	color: '#8895A2',
			              	fontSize: 12
			          	}  
			        },
		        }
		    ],
		    yAxis: [
		   
		        {
		            type: 'value',
		            name: '',
		            min: 0,
		            axisTick: {
			          	show: false  
			        },
			        nameTextStyle: {
			        	color: '#fff',
			        	padding: [0, 8, 0, 0]
			        },
		            splitLine: {
		                lineStyle: {
		                    type: 'dashed',
		                    color: '#303437'
		                }
		            },
		            axisLabel: {
			          	textStyle: {
			              	color: '#8895A2',
			              	fontSize: 12
			          	}  
			        },
		        }
		    ],
		    series: [
		     
		        {
		            name: '指数',
		            type:'line',
		            // yAxisIndex: 1,
		            itemStyle: {
		              	color: '#FB8202'  
		            },
		            data: [11,12,13,14,15,16,17,18,19]
		        }
		    ]
		};
		app.currentIndex = -1;
		setInterval(function () {
    
    var dataLen = option.series[0].data.length;
    // 取消之前高亮的图形
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: app.currentIndex
    });
    app.currentIndex = (app.currentIndex + 1) % dataLen;
    // 高亮当前图形
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: app.currentIndex
    });
    // 显示 tooltip
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: app.currentIndex
    });
}, 1000);
