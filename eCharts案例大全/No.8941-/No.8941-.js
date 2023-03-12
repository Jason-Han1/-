
option ={
    title:{
        // text:'分所销售水量占比',
        // top:'5%',
        left:'center',
        textStyle:{
            color:'#FFF',
            align:'center',
        }
    },
        backgroundColor:'#11183c',
		grid: {
	        left: '9%',
            right: '10%',
            top:'25%',
	        bottom: '15%',
	        containLabel: true
		},
		tooltip : {
			show: true,
			formatter:'{a}</br>{b}：{c}个',
			textStyle:{
			    fontSize:28,
			},
			trigger: 'item'
		},
		legend: {
			show:true,
			x:'30%',
			top:'12%',
			y:'35',
			icon: 'stack',
			itemWidth:10,
			itemHeight:10,
			textStyle:{
					color:'rgba(255,255,255,.6)',fontSize:'24',
			},
			data:['材料','电力电器','光电产品','机电','家居及家电','能源节能与汽车','石油化工煤炭','食品医药消费品','新一代信息技术','其他']
		},
		xAxis : [
	        {
	            type : 'category',
	            boundaryGap : false,
	            axisLabel:{
	            	color: 'rgba(255,255,255,.6)',fontSize:26,
	            },
	            axisLine:{
               		show:true,
               		lineStyle:{
		            	color:'rgba(255,255,255,.6)',width:1.5,
		            }
				},
				axisTick:{
	            	show:false,
	            },  
	            splitLine:{
	            	show:true,
		            lineStyle:{
		            	color:'rgba(255,255,255,.2)',
		            }
		        },
	            data : ['智能化生产','协同制造','个性定制','服务化转型','其他']
	        }
	    ],
	    yAxis : [
			{
				type : 'value',
				name : '个',
				min:0,
				max:350,
				interval:70,
				axisLabel : {
					formatter: '{value}',
					textStyle:{
						color:'rgba(255,255,255,.6)',fontSize:26,
					},
				
				},
				
				axisLine:{
					lineStyle:{
							color:'rgba(255,255,255,.6)',width:1.5,
						
					}
				},
				axisTick:{
	            	show:false,
	            },
				splitLine:{
					show:false,
				// 	lineStyle:{
				// 		color:'#11366e'
				// 	}
				},
					nameTextStyle:{
					    fontSize:26,	color:'rgba(255,255,255,.6)',
					},
			}],
		series : [
			{
				name:'材料',
				type:'line',
				stack: '总量',
				symbol:'circle',
				symbolSize: 8,
	            itemStyle: {
			        normal: {
						color:'rgb(123,205,220)',
			            lineStyle: {
							color: 'rgb(123,205,220)',
							width:1
			            },
			            areaStyle: { 
							//color: '#94C9EC'
							color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
								offset: 0,
								color: 'rgba(123,205,220,.1)'
							}, {
								offset: 1,
								color: 'rgba(123,205,220,.6)'
							}]),
			            }
			        }
				},
				markPoint:{
					itemStyle:{
						normal:{
							color:'red'
						}
					}
				},
				data:[72,16,15,20,44]
			},
			{
				name:'电力电器',
				type:'line',
				stack: '总量',
				symbol:'circle',
				symbolSize: 8,
				
	            itemStyle: {
			        normal: {
			            color:'rgb(218,136,117)',
			            lineStyle: {
							color: 'rgb(218,136,117)',
							width:1
			            },
			            areaStyle: { 
				// 			color: '#94C9EC'
							color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
								offset: 0,
								color:'rgba(218,136,117,.1)'
							}, {
								offset: 1,
								color: 'rgba(218,136,117,.6)'
							}]),
			            }
			        }
				},
				data:[21,1,4,16,18]
			},
			{
				name:'光电产品',
				type:'line',
				stack: '总量',
				symbol:'circle',
				symbolSize: 8,
	            itemStyle: {
			        normal: {
			            color: 'rgb(151,193,128)',
			            lineStyle: {
							color: 'rgb(151,193,128)',
							width:1
			            },
			            areaStyle: { 
							//color: '#94C9EC'
							color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
								offset: 0,
								color: 'rgba(151,193,128,.1)',
							}, {
								offset: 1,
								color: 'rgba(151,193,128,.6)',
							}]),
			            }
			        }
				},
				data:[12,2,4,6,11]
			},
			{
				name:'机电',
				type:'line',
				stack: '总量',
				symbol:'circle',
				symbolSize: 8,
	            itemStyle: {
			        normal: {
			            color: 'rgb(243,121,151)',
			            lineStyle: {
							color: 'rgb(243,121,151)',
							width:1
			            },
			            areaStyle: { 
							//color: '#94C9EC'
							color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
								offset: 0,
								color:  'rgba(243,121,151,.1)',
							}, {
								offset: 1,
								color: 'rgba(243,121,151,.6)',
							}]),
			            }
			        }
				},
				data:[43,7,18,26,36]
			},
			{
				name:'家居及家电',
				type:'line',
				stack: '总量',
				symbol:'circle',
				symbolSize: 8,
	            itemStyle: {
			        normal: {
        			            color: 'rgb(98,165,244)',
			            lineStyle: {
							color:'rgb(98,165,244)',
							width:1
			            },
			            areaStyle: { 
							color: '#94C9EC',
							color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
								offset: 0,
								color: 'rgba(98,165,244,.1)',
							}, {
								offset: 1,
								color:  'rgba(98,165,244,.6)',
							}]),
			            }
			        }
				},
				data:[11,5,4,3,5]
			},
			{
				name:'能源节能与汽车',
				type:'line',
				stack: '总量',
				symbol:'circle',
				symbolSize: 8,
	            itemStyle: {
			        normal: {
			            color: 'rgb(184,106,164)',
			            lineStyle: {
							color: 'rgb(184,106,164)',
							width:1
			            },
			            areaStyle: { 
							//color: '#94C9EC'
							color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
								offset: 0,
								color: 'rgba(184,106,164,.1)',
							}, {
								offset: 1,
								color: 'rgba(184,106,164,.6)',
							}]),
			            }
			        }
				},
				data:[54,16,20,23,49]
			},
					{
				name:'石油化工煤炭',
				type:'line',
				stack: '总量',
				symbol:'circle',
				symbolSize: 8,
	            itemStyle: {
			        normal: {
			            color: 'rgb(232,189,138)',
			            lineStyle: {
							color:'rgb(232,189,138)',
							width:1
			            },
			            areaStyle: { 
							//color: '#94C9EC'
							color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
								offset: 0,
								color: 'rgba(232,189,138,.1)',
							}, {
								offset: 1,
								color: 'rgba(232,189,138,.6)',
							}]),
			            }
			        }
				},
				data:[15,4,6,8,12]
			},
					{
				name:'食品医药消费品',
				type:'line',
				stack: '总量',
				symbol:'circle',
				symbolSize: 8,
	            itemStyle: {
			        normal: {
			            color: 'rgb(215,86,135)',
			            lineStyle: {
							color: 'rgb(215,86,135)',
							width:1
			            },
			            areaStyle: { 
							//color: '#94C9EC'
							color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
								offset: 0,
								color: 'rgba(215,86,135,.1)',
							}, {
								offset: 1,
								color: 'rgba(215,86,135,.6)',
							}]),
			            }
			        }
				},
				data:[57,10,16,10,51]
			},
					{
				name:'新一代信息技术',
				type:'line',
				stack: '总量',
				symbol:'circle',
				symbolSize: 8,
	            itemStyle: {
			        normal: {
			            color: 'rgb(162,123,205)',
			            lineStyle: {
							color: 'rgb(162,123,205)',
							width:1
			            },
			            areaStyle: { 
							//color: '#94C9EC'
							color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
								offset: 0,
								color: 'rgba(162,123,205,.1)',
							}, {
								offset: 1,
								color: 'rgba(162,123,205,.6)',
							}]),
			            }
			        }
				},
				data:[0,91,31,34,81]
			},
					{
				name:'其他',
				type:'line',
				stack: '总量',
				symbol:'circle',
				symbolSize: 8,
	            itemStyle: {
			        normal: {
			            color: 'rgb(243,67,110)',
			            lineStyle: {
							color: 'rgb(243,67,110)',
							width:1
			            },
			            areaStyle: { 
							//color: '#94C9EC'
							color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
								offset: 0,
								color: 'rgba(243,67,110,.1)',
							}, {
								offset: 1,
								color: 'rgba(243,67,110,.6)',
							}]),
			            }
			        }
				},
				data:[39,8,9,14,33]
			},
		]
	};