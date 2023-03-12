var xAxisData=['北京地区', '西南地区', '华南地区', '华北地区', '西北地区'];
var seriesData=[120, 200, 150, 80, 70];
option = {
	    color:'#1785ef',
	    backgroundColor:'#ffffff',
	    xAxis: {
	        type: 'category',
	        data: xAxisData,
	        nameTextStyle: {
				color: '#8f8f9b',
				fontSize:14
			},
	        splitLine: {
				show:false
			},
			axisTick: {
				show: false
			},
			axisLine: {
				lineStyle: {
					type: 'solid',
					color:'#8f8f9b',
				}
			},
			axisLabel: {
				show: true,
				rotate: 0,
				interval:0,
				fontSize:14,
				textStyle: {
					color: '#8f8f9b',
				}
			}
	    },
	    yAxis: {
	        name: '销售额（万）',
	    	nameTextStyle: {
				color: '#8f8f9b',
				fontSize:14
			},
	        type: 'value',
	    	splitLine: {
				show:false
			},
			axisTick: {
				show: false
			},
			axisLine: {
				lineStyle: {
					type: 'solid',
					color:'#8f8f9b'
				}
			},
			axisLabel: {
	        	show: true,
	        	rotate: 0,
	        	fontSize:14,
	        	textStyle: {
	        		color: '#8f8f9b',
	        	}
	        }
	    },
	    series: [{
	        data: seriesData,
	        type: 'bar',
	        barWidth: '20px',
	        itemStyle:{
	            normal:{
	                barBorderRadius: [6, 6, 0, 0],
	            }
	        },
	       label: {
				normal: {
				    show: true,
					textStyle: {
						color: '#000'
					},
					position: 'top'
				}
			}
	    }]
	    
	    
}