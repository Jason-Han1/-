var fontColor = '#30eee9';
option ={
        backgroundColor:'#000',
		grid: {
	        left: '5%',
            right: '10%',
            top:'20%',
	        bottom: '15%',
	        containLabel: true
		},
		tooltip : {
			show: true,
			trigger: 'item'
		},
		legend: {
			show:true,
			x:'center',
			y:'35',
			icon: 'stack',
			itemWidth:10,
			itemHeight:10,
			textStyle:{
				color:'#1bb4f6'
			},
			data:['已采纳','已发布','浏览量']
		},
		xAxis : [
	        {
	            type : 'category',
	            boundaryGap : false,
	            axisLabel:{
	            	color: fontColor
	            },
	            axisLine:{
               		show:true,
               		lineStyle:{
		            	color:'#397cbc'
		            }
				},
				axisTick:{
	            	show:false,
	            },  
	            splitLine:{
	            	show:true,
		            lineStyle:{
		            	color:'#195384'
		            }
		        },
	            data :  [
      "2020-02-25 16:22:41",
      "2020-02-25 16:23:11",
      "2020-02-25 16:23:41",
      "2020-02-25 16:24:11",
      "2020-02-25 16:24:41",
    ]
	        }
	    ],
	    yAxis : [
			{
				type : 'value',
				// name : '信息量',
				axisLabel : {
					formatter: '{value}',
					textStyle:{
						color:'#2ad1d2'
					}
				},
				axisLine:{
					lineStyle:{
						color:'#27b4c2'
					}
				},
				axisTick:{
	            	show:false,
	            },
				splitLine:{
					show:true,
					lineStyle:{
						color:'#11366e'
					}
				}
			},
		
		],
		series : [
			{
				name:'已采纳',
				type:'line',
				stack: '总量',
				symbol:'circle',
				symbolSize: 8,
	            itemStyle: {
			        normal: {
						color:'#0092f6',
			            lineStyle: {
							color: "#0092f6",
							width:1
			            },
			            areaStyle: { 
							//color: '#94C9EC'
							color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
								offset: 0,
								color: 'rgba(7,44,90,0.3)'
							}, {
								offset: 1,
								color: 'rgba(0,146,246,0.9)'
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
				data: [9,3,5,3,2]
			},
			{
				name:'已发布',
				type:'line',
				stack: '总量',
				symbol:'circle',
				symbolSize: 8,
				
	            itemStyle: {
			        normal: {
			            color:'#00d4c7',
			            lineStyle: {
							color: "#00d4c7",
							width:1
			            },
			            areaStyle: { 
							//color: '#94C9EC'
							color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
								offset: 0,
								color: 'rgba(7,44,90,0.3)'
							}, {
								offset: 1,
								color: 'rgba(0,212,199,0.9)'
							}]),
			            }
			        }
				},
				data:[1,3,6,5,2]
			},
			{
				name:'浏览量',
				type:'line',
				stack: '总量',
				symbol:'circle',
				symbolSize: 8,
	            itemStyle: {
			        normal: {
			            color: '#aecb56',
			            lineStyle: {
							color: "#aecb56",
							width:1
			            },
			            areaStyle: { 
							//color: '#94C9EC'
							color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
								offset: 0,
								color: 'rgba(7,44,90,0.3)'
							}, {
								offset: 1,
								color: 'rgba(114,144,89,0.9)'
							}]),
			            }
			        }
				},
				data:[1,2,3,4,7]
			}
		]
	};