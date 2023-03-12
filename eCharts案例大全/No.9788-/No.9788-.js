var fontColor = '#30eee9';
option ={
        backgroundColor:'#11183c',
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
	            	show:false,
		        },
	            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
	        }
	    ],
	    yAxis : [
			{
				type : 'value',
				name : '',
			
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
			}
		],
		series : [
			{
				name:'已采纳',
				type:'line',
				stack: '总量',
				symbol:'circle',
				color:'yellow',
				lineStyle:{
				    width:1
				},
				markArea:{
				    silent: true,
				    data:[
				        [{
				            xAxis:'1月',
				            itemStyle:{
				                color:'rgba(84,255,0,.2)'
				            }
				        },{
				                xAxis:'4月',
				        }],
				        [{
				            xAxis:'4月',
				            itemStyle:{
				                color:'rgba(255,0,0,.15)'
				            }
				        },{
				                xAxis:'5月',
				        }],
				        [{
				            xAxis:'5月',
				            itemStyle:{
				                color:'rgba(255,0,126,.2)'
				            }
				        },{
				                xAxis:'7月',
				        }],
				        [{
				            xAxis:'7月',
				            itemStyle:{
				                color:'rgba(255,0,0,.15)'
				            }
				        },{
				                xAxis:'8月',
				        }],
				        [{
				            xAxis:'8月',
				            itemStyle:{
				                color:'rgba(246,255,0,.2)'
				            }
				        },{
				                xAxis:'12月',
				        }],
				    ]
				},
				data:[120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 290, 330]
			}
			
		]
	};