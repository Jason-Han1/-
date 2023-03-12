    var chartData = [762,737,634,530,426,323,219,114,101,69];
	var chartName = ['192.168.2.132','192.168.2.133','192.168.2.134','192.168.2.135','192.168.2.136','192.168.2.137','192.168.2.138','192.168.2.139','192.168.2.130','192.168.2.129'];
	
	var max = Math.max.apply(null,chartData);
	var emptyData = chartData.map(function(v, i) {
	    var item = {
	        value: max,
	        label: {   //右边数值
	            formatter: '{a|' + v + '}',
	            position: 'right',
	            rich: {
	                a: {
	                    color:'#3eb4fa',
	                    fontSize:16,
	                    padding:[5, 10]
	                }
	            }
	        }
	    }
	    return item
	})

	option = {
	    backgroundColor: '#061330',
	    tooltip: {
		    show: true,
		    trigger: 'item',
		    formatter: function(params, ticket, callback){
		        var res = "";
				var name = chartName[params.dataIndex];
				var value =chartData[params.dataIndex]
				res = name + "<br />访问量：" + value;
				return res;
		    },
		},
	    grid: {
	        top: '10%',
	        right: '10%',
	        left: '10%',
	        bottom: '10%',
	        containLabel: true
	    },
	    xAxis: [
		    {
	            show: false,
	        },{
	            type : 'value',
	            axisLabel:{      //坐标轴字体颜色
	            	show:false,
	            },
	            axisLine:{
	            	show:false,
	            	lineStyle: {
		                color: 'rgba(255,255,255,0.12)'
		            }
	            },
		        axisTick:{       //y轴刻度线
		            show:false
		        },
	            splitLine:{    //网格
	            	show: false,
	            },
	            max: function(value) {
		            return value.max
		        },
		    }
        ],
	    yAxis: [{
	        type: 'category',
	        show: true,
	        inverse: true,
	        data:chartName,
	        axisTick:{       //y轴刻度线
	           show:false
	        },
	        axisLabel: {
	            formatter: '{value}',
	            color: '#6fa7e0',
	            fontSize:16
	        },
        	axisLine: {
        		show:false,
	        },
	        splitLine: {
	            show:false
	        },
	    },
	    {
	        type: "category",
	        name: "",
	        axisTick: {
	            show: false
	        },
	        splitLine: {
	            show: false
	        },
	        axisLabel: {
	            show: false
	        },
	        axisLine: {
	            show: false
	        },
	        inverse: true,
	        data: chartName
	    }],
	    series: [
	       	{
	            type: 'bar',
	            barWidth: '30%',
	            yAxisIndex: 1,
            	silent:true,
	            itemStyle: {
	                normal: {
	                    color: 'rgba(7, 36, 74, 0.6)',
	                    barBorderRadius: [20,20],
	                }
	            },
	            label: {
	                show:true,
	            },
	            data: emptyData
	        },{
	            show: true,
	            type: 'bar',
	            barWidth: '35%',
	            z: 2,
	            label: {
	                show: false,
	            },
	            itemStyle: {
					normal: {
		                color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
		                    offset: 0,
		                    color: '#347ce9' // 0% 处的颜色
		                }, {
		                    offset: 1,
		                    color: '#28c3db' // 100% 处的颜色
		                }], false),
		                barBorderRadius: [20,20],
		            }
	            },
	            data: chartData,
	       	}
	    ]
	};
    