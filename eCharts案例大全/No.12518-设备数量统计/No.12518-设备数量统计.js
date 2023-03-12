var fontColor = '#fff';
option ={
        backgroundColor:'#02061d',
		grid: {
	        left: '5%',
            right: '5%',
            top:'20%',
	        bottom: '5%',
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
			itemWidth:15,
			itemHeight:15,
			textStyle:{
				color:'#fff',
				fontSize:15
			},
			nameTextStyle :{
			   color:'#fff' 
			},
			data:['状态1','状态2']
		},
		xAxis : [
	        {
	            type : 'category',
	            boundaryGap : false,
	            axisLabel:{
	            	color: fontColor,
	            	fontSize:16
	            },
	            axisLine:{
               		show:true,
               		lineStyle:{
		            	color:'#0D1543'
		            }
				},
				axisTick:{
	            	show:false,
	            },  
	            splitLine:{
	            	show:true,
		            lineStyle:{
		            	color:'#0D1543'
		            }
		        },
	            data : ['设备1','设备2','设备3','设备4','设备5','设备6','设备7']
	        }
	    ],
	    yAxis : [
			{
				type : 'value',
				name : '设备个数/个',
				nameTextStyle:{
				    color:'#fff',
				    fontSize:14
				},
				axisLabel : {
					formatter: '{value}',
					textStyle:{
						color:fontColor,
						fontSize:16
					}
				},
				axisLine:{
					lineStyle:{
						color:'#0D1543'
					}
				},
				axisTick:{
	            	show:false,
	            },
				splitLine:{
					show:true,
					lineStyle:{
						color:'#0D1543'
					}
				}
			}
			],
		series : [
			{
				name:'状态1',
				type:'line',
				symbol:'circle',
				symbolSize: 8,
				// smooth:true,  //这个是把线变成曲线
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
				data:[32, 13, 20, 14, 20, 23, 21]
			},
			{
				name:'状态2',
				type:'line',
				symbol:'circle',
				symbolSize: 8,
				// smooth:true,  //这个是把线变成曲线
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
				data:[22, 12, 11, 23, 29, 33, 31]
			}
		]
	};