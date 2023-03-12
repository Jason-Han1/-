option={
    backgroundColor:'#082645',
    color: ["#FF0000", "#00BFFF", "#FF00FF", "#1ce322"],
				    // title: {
				    //     text: '折线图堆叠'
				    // },
				    tooltip: {
				        trigger: 'axis'
				    },
				    legend: {
				        data:['客户数','设备数','测点数','告警数'],
				        textStyle:{
								color:'#fff'
							},
				    },
//				    grid: {
//				        left: '3%',
//				        right: '4%',
//				        bottom: '3%',
//				        containLabel: true
//				    },
				    xAxis: {
				        type: 'category',
				        boundaryGap: false,
				        data: ['一月','二月','三月','四月','五月','六月'],
				        axisTick: {
								alignWithLabel: false,
								show: false
							},//y轴轴线上的刻度线
							axisLabel: {
								textStyle: {
										color: '#fff'
									}
										},
								axisLine: {
									show: true,
									lineStyle: {
										color: "#5BB2D7",
										width: 1,
										type: "solid"
								  	},
										},
				    },
				    yAxis: {
				        type: 'value',
				        axisLine: {
								show:false //y轴的轴线
							},
							axisTick: {
								alignWithLabel: false,
								show: false
							},//y轴轴线上的刻度线
							axisLabel: {
				                formatter: '{value}',
				                textStyle: {
										color: '#fff'
									}
				            },
							axisLine: {
								show: true,
								lineStyle: {
									color: "#5BB2D7",
									width: 1,
									type: "solid"
								},
							},
							splitLine: {
									show: false,
									lineStyle: {
										color: "#fff",
									}
								},
						    },
						    series: [
						        {
						            name:'客户数',
						            type:'line',
						            stack: '总量',
						            data:[25, 25, 28, 28,35,37]
						        },
						        {
						            name:'设备数',
						            type:'line',
						            stack: '总量',
						            data:[123, 145, 256, 289,333,365]
						        },
						        {
						            name:'测点数',
						            type:'line',
						            stack: '总量',
						            data:[1244,1345,1789,2413,2986,3199,]
						        },
						        {
						            name:'告警数',
						            type:'line',
						            stack: '总量',
						            data:[79,66,105,122,208,221]
						        },
        
   						 ]
}