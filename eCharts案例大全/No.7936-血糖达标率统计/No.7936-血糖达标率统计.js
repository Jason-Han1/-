option = {
		backgroundColor: '#fffcfc',
		title: {
			text: '血糖达标率统计',
			left: '10px',
			textStyle: {
				color: '#333'
			}
		},
		name: 'a',
		tooltip: {
			trigger: 'axis', //按x轴显示
			show: true,
			 formatter :function(params){
			   var name = params[0].name + '<br>';
			   var barName = params[2].marker+params[2].seriesName + ':' + params[2].value +'%<br>';
			   var lineName = params[1].marker+params[1].seriesName + ':' + params[1].value +'%<br>';
			   var santName = params[0].marker+params[0].seriesName + ':' + params[0].value +'%';
			   return name + barName + lineName+santName
		   },
			axisPointer: {
				type:"line",
				lineStyle: {
					width:50,
					color: 'rgba(255,255,255,.3)',
					extraCssText: 'z-index: -111', //添加阴影
					symbolSize: 10
				},
				
			},
			backgroundColor: 'rgba(0,0,0,.5)',
			textStyle: {
				align: 'left',
				fontSize: 12,
				color: '#fff',
			}
		},
		color: ['#D26962','#41CBA6','#D26FD6','#4C91E3'],
		grid: {
			left: '5%',
			right: '6%',
			top: '20%',
			bottom: '6%',
			containLabel: true
		},
		legend: {
			show: true,
		    right: 45,
			shadowColor:'rgba(210, 105, 98, 1)',
            shadowBlur:10,
	        itemGap: 63,
			textStyle: {
				fontSize: 12,
				color: ['#D26962','#41CBA6','#D26FD6','#4C91E3']
			},
			data: ['血糖总达标率', '空腹血糖达标率', '非空腹达标']
		},
		xAxis: {
			show: true,
			type: 'category',
			axisTick: {
				show: false
			},
			axisLine: {
				show: false,
				lineStyle: {
					color: '#2A2A2A',
				}
			},
			splitLine: {
				show: false,
				lineStyle: {
					color: '#E0E0E0',
					type:"dashed"
				}
			},
			axisLabel: {
				rotate: 0,
				textStyle: {
					fontSize: '70%',
					color: '#aaa'
				},
			},
			data: ['4-1', '4-2', '4-3', '4-4', '4-5', '4-6', '4-7','4-8','4-9','4-10','4-11','4-12','4-13','4-14']
		},
		yAxis: {
			show: true,
			name: '单位: %',
			type: 'value',
			splitNumber : 12,
			axisTick: {
				show: false
			},
			axisLine: {
				show: false,
				lineStyle: {
					color: '#aaa',
				}
			},
			splitLine: {
				show: true,
				lineStyle: {
				    type:"dashed",
					color: '#E0E0E0'
				}
			},
			axisLabel: {
				textStyle: {
					fontSize: '70%',
					color: '#aaa'
				}
			}
		},
		series: [{
		    name: '血糖总达标率',
			type: 'line',
			symbol: 'circle',
			symbolSize: 3,
			data: [31,42,52,62,48,57,52,61,57,52,61,31,42,52],
			itemStyle:{
			     normal: {
    			    shadowColor:'rgba(210, 111, 214, 1)',
                    shadowBlur:10
			    }
			 }
		}, {
			name: '空腹血糖达标率',
			type: 'line',
			symbol: 'circle',
			symbolSize:3,
			data:[29,33,44,51,40,35,55,63,57,52,61,29,33,44],
			itemStyle:{
			     normal: {
    			    shadowColor:'rgba(65, 203, 166, 1)',
    			    shadowBlur:10
			    }
			 }
		}, {
			name: '非空腹达标',
			type: 'line',
			symbol: 'circle',
			symbolSize: 3,
			data:[31,43,52,52,61,47,67,35,57,52,61,31,43,52],
			itemStyle:{
			     normal: {
    			    shadowColor:'rgba(210, 105, 98, 1)',
                    shadowBlur:10
			    }
			 }
		},{
			name: '',
			type: 'line',
			symbol: 'circle',
			animation:false,
			symbolSize: 10,
			data:[0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			lineStyle:{
			    width:'0'
    		}
		},{
	            type: 'bar',
	            name: '',
	            tooltip: {
	                show: true
	            },
	            animation: true,
	            barWidth: 1,
	            hoverAnimation: false,
	            data: [13,25,57,62,38,17,51,63,57,52,61,13,25,57],
	            itemStyle: {
	                normal: {
	                    barBorderColor: '#e0e0e0',
	                    barBorderWidth:1,
	                    barBorderRadius:0,
	                    borderType:"dashed",
	                    label: {
	                        show: false
	                    }
	                }
	            }
	        }]
	};
	