option = {
		title:{
			text: '文章统计',
			left: 110,
			textStyle: {
				color: '#000',
				fontSize: 26,
				fontWeight: 100
			}
		},
		tooltip : {
        	trigger: 'asix',
        	backgroundColor: 'rgba(255,255,255,1)',
        	padding: [5,10],
        	textStyle: {
        		color: '#7588E4',
        	},
        	extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)'
    	},
		xAxis: {
			type: 'category',
			data: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
			boundaryGap: false,
			axisTick: {
				show: false
			},
			axisLine: {
				lineStyle: {
					color: '#7588E4'
				}
			},
			axisLabel: {
				margin: 18,
				textStyle: {
					fontSize: 14
				}
			}
		},
		yAxis: {
			type: 'value',
			splitLine: {
				lineStyle: {
					color: ['#D4DFF5']
				}
			},
			axisTick: {
				show: false
			},
			axisLine: {
				lineStyle: {
					color: '#7588E4'
				}
			},
			axisLabel: {
				margin: 27,
				textStyle: {
					fontSize: 16
				}
			}
		},
		series: [
			{
				name: '数量',
				type: 'line',
				smooth: true,				
				showSymbol: false,		
				symbol: 'circle',
				symbolSize: 15,
				data:['12','4','8','4','6','8','10','16','11','10','8','3'],
				areaStyle: {				
					normal: {
						color: new echarts.graphic.LinearGradient(0,0,0,1,[{
							offset: 0, color: 'rgba(117,136,228,0.5)'
						},{
							offset: 1, color: 'rgba(117,136,228,0.2)'
						}],false)
					}
				},  
				itemStyle: {			
					normal: {	
						color: '#ffd178'
					}
				},
				lineStyle: {
					normal: {
						width: 3,
						color: new echarts.graphic.LinearGradient(0,0,1,0,[{
							offset: 0, color: '#5B6DC1'
						},{
							offset: 1, color: '#4AA8FF'
						}],false)
					}
				}
			}
		]
	}