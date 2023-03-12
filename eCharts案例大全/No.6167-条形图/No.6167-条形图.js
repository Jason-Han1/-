    var chartData = [40,28,15,10,6];
	var chartName = ['网络安全自动防护系统', '数据审计平台', '互联网敏感信息告警系统','文档安全管理系统','大数据审查系统'];
	option = {
	    backgroundColor: '#04192f',
	    grid: {
	        left: '10%',
	        right: '10%',
	        bottom:'5%',
	        top: 20,
	        containLabel: true
	    },
	    xAxis: [
	    	{
	            axisLabel:{
	            	textStyle:{
		                color: '#5b97d5'
		            }
	           	},
	            axisLine:{
	                lineStyle:{
	                    color:'#1f3b58',
	                }
	            }, 
	            splitLine:{
	            	show: true,
	            	lineStyle:{
	            		color:'#1f3b58',
	            	}
	            },
	        },
	        {
	            show: false,
	        }
	    ],
	    yAxis: {
	        type: 'category',
	        inverse: true,
	        show: false,
	    },
	    series: [
	    	{   //条形图（2个X轴）百分比
	            show: true,
	            type: 'bar',
	            barGap: '-100%',
	            barWidth: '25%',
	            z: 2,
	            itemStyle: {
	                normal: {
	                    color: new echarts.graphic.LinearGradient(0, 1, 1, 1, [{
		                    offset: 0,
		                    color: '#3a79eb'
		                }, {
		                    offset: 1,
		                    color: '#5fd3e4'
		                }]),
		                //barBorderRadius: [0, 100, 100, 0],
	                }
	            },
	            label: {
	                normal: {
	                    show: true,
	                    textAlign: 'center',
			    		textStyle:{
			    			color:'#4d9dff',
			    			fontSize:18,
			    			fontWeight:'normal',
			    			padding:[5, 10]
			    		},
	                    position: 'right',
	                    formatter: function(data) {
	                        return chartData[data.dataIndex];
	                    }
	                }
	            },
	            data: chartData,
	      	},
	        {    //名称
	            show: true,
	            type: 'bar',
	            xAxisIndex: 1, //代表使用第二个X轴刻度
	            barGap: '-100%',
	            barWidth: '25%',
	            itemStyle: {
	                normal: {
	                    barBorderRadius: 200,
	                    color: 'transparent'
	                }
	            },
	            label: {
	                normal: {
	                    show: true,
	                    position: [0, '-25'],
	                    textStyle: {
	                        fontSize:16,
	                        color: '#4e73a0',
			    			padding:[0, 10]
	                    },
	                    formatter: function(data) {
	                        return chartName[data.dataIndex];
	                    }
	                }
	            },
	            data: chartData
	        }
	    ]
	};
	