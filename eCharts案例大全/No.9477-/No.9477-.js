var fontColor = '#fff';
let date =
['2019-11-05','2019-11-06','2019-11-07','2019-11-08','2019-11-09','2019-11-10','2019-11-11','2019-11-12','2019-11-13','2019-11-14'];
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
			y:'35',
			right:'5%',
			itemWidth:13,
			icon:'circle',
			itemHeight:13,
			textStyle:{
				color:'#fff',
				fontSize:15
			},
			nameTextStyle :{
			   color:'#fff' 
			},
			data:['安全','质量']
		},
		xAxis : [
	        {
	            type : 'category',
	            boundaryGap : true,
	            axisLabel:{
	            	color: fontColor,
	            	fontSize:16,
	            	interval:0,
	            	rotate:30
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
	            data : date
	        }
	    ],
	    yAxis : [
			{
				type : 'value',
				name : '',
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
				name:'质量',
				type:'line',
				symbol:'none',
				symbolSize: 8,
				// smooth:true,  //这个是把线变成曲线
	            itemStyle: {
			        normal: {
						color:'rgb(250,172,4)',
			            lineStyle: {
							color: "rgb(250,172,4)",
							width:2
			            },
			            areaStyle: { 
							//color: '#94C9EC'
							color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
								offset: 0,
								color: 'rgba(250,172,4,0)'
							}, {
								offset: 1,
								color: 'rgba(250,172,4,0.5)'
							}]),
			            }
			        }
				},
				data:[6, 25,16, 23, 28, 16, 21,10,12,8]
			},
			{
				name:'安全',
				type:'line',
				symbol:'none',
				symbolSize: 8,
				// smooth:true,  //这个是把线变成曲线
	            itemStyle: {
			        normal: {
			            color:'#00d4c7',
			            lineStyle: {
							color: "rgb(4,214,254)",
							width:2
			            },
			            areaStyle: { 
							//color: '#94C9EC'
							color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
								offset: 0,
								color: 'rgba(4,214,254,0)'
							}, {
								offset: 1,
								color: 'rgba(4,214,254,0.5)'
							}]),
			            }
			        }
				},
				data:[22, 12, 23, 17, 26, 14, 26,25,28,16]
			}
		]
	};