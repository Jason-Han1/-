 option = {
		    legend: {},
		    tooltip: {},
		    xAxis: [
		        {   gridIndex: 0,
		            show : false,
			        type : 'category',
			        boundaryGap : false,
			        data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
		        },
		        {   gridIndex: 1,
		            show : false,
			        type : 'category',
			        boundaryGap : false,
			        data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
		        },
		        {   gridIndex: 2,
		            show : false,
			        type : 'category',
			        boundaryGap : false,
			        data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
		        },
		        {   gridIndex: 3,
		            show : false,
			        type : 'category',
			        boundaryGap : false,
			        data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
		        },
		        {   gridIndex: 4,
			        type : 'category',
			        boundaryGap : false,
			        data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
		        }
		    ],
		    yAxis: [
		        {   gridIndex: 0,
		            axisLabel:{show:false},
		            axisTick:{show:false},
		            splitLine:{show:false},
		            splitNumber:1,
		            name:'安装',
		            nameLocation:'center',
		            nameRotate:360
		        
		        },
		        {   gridIndex: 1,
		            axisLabel:{show:false},
		            axisTick:{show:false},
		            splitLine:{show:false},
		            splitNumber:1,
		            name:'测量',
		            nameLocation:'center',
		            nameRotate:360
		        },
		        {   gridIndex: 2,
		            axisLabel:{show:false},
		            axisTick:{show:false},
		            splitLine:{show:false},
		            splitNumber:1,
		            name:'定检',
		            nameLocation:'center',
		            nameRotate:360
		        },
		        {   gridIndex: 3,
		            axisLabel:{show:false},
		            axisTick:{show:false},
		            splitLine:{show:false},
		            splitNumber:1,
		            name:'维护',
		            nameLocation:'center',
		            nameRotate:360
		        },
		        {   gridIndex: 4,
		            axisLabel:{show:false},
		            axisTick:{show:false},
		            splitLine:{show:false},
		            splitNumber:1,
		            name:'消缺',
		            nameLocation:'center',
		            nameRotate:360
		        }
		    ],
		    grid: [
		    	 {top: '17%', height: '15%'},
			     {top: '32%', height: '15%'},
			     {top: '47%', height: '15%'},
			     {top: '62%', height: '15%'},
			     {bottom: '8%', height: '15%'}
		    ],
		    series: [
		        {type: 'line', data:[0, 41.1, 30.4, 65.1, 53.3,53.3,53.3, 41.1, 30.4, 65.1, 53.3,0], xAxisIndex: 0, yAxisIndex: 0, smooth: true,areaStyle: {}},
		        {type: 'line', data:[0, 74.1, 67.2, 79.5, 46.4,46.4,46.4, 74.1, 67.2, 79.5, 46.4,0], xAxisIndex: 1, yAxisIndex: 1, smooth: true,areaStyle: {}},
		        {type: 'line', data:[0, 24.1, 7.2, 15.5, 42.4,42.4,42.4, 24.1, 7.2, 15.5, 42.4,0], xAxisIndex: 2, yAxisIndex: 2, smooth: true,areaStyle: {}},
		        {type: 'line', data:[0, 74.1, 67.2, 79.5, 46.4,46.4,46.4, 74.1, 67.2, 79.5, 46.4,0], xAxisIndex: 3, yAxisIndex: 3, smooth: true,areaStyle: {}},
		        {type: 'line', data:[0, 74.1, 67.2, 79.5, 46.4,46.4,46.4, 74.1, 67.2, 79.5, 46.4,0], xAxisIndex: 4, yAxisIndex: 4, smooth: true,areaStyle: {}}
		    ]
		};