option ={
    title:{
        top:'5%',
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
            top:'20%',
	        bottom: '15%',
	        containLabel: true
		},
		tooltip : {
			show: true,
			trigger: 'axis',
			formatter: function(params) {
            let str = params[0].name + '<br/>';
            params.forEach(item => {
                if (item.seriesName == '正常数') {
                    str += item.marker + item.seriesName + ': ' + item.data + '<br/>';
                } else if (item.seriesName == "使用率") {
                    str += item.marker + item.seriesName + ': ' + item.data + '%';
                }
            });
            return str;
        }
		},
		legend: {
			show:true,
			x:'center',
			top:'12%',
			y:'35',
			icon: 'stack',
			itemWidth:16,
			itemHeight:10,
			textStyle:{
				color:'#E0E0E0'
			},
			data:['正常数','使用率']
		},
		xAxis : [
	        {
	            type : 'category',
	            boundaryGap : false,
	            axisLabel:{
	            	color: '#AFBCC4',
	            	fontSize: 12,
	            },
	            axisLine:{
               		show:false,
               		lineStyle:{
		            	  color:'#397cbc'
		            }
				},
				axisTick:{
	            	show:false,
	            },  
	            splitLine:{
	            	show:false,
		            lineStyle:{
		            	color:'#195384'
		            }
		        },
	            data : ['07/10','07/11','07/12','07/13','07/14','07/15','07/16']
	        }
	    ],
	    yAxis : [
			{
				type : 'value',
				name : '正常数',
				axisLabel : {
					// formatter: '{value}',
					textStyle:{
						color:'#AFBCC4',
						fontSize: 12,
					}
				},
				axisLine:{
					lineStyle:{
						color:'#fff'
					}
				},
				axisTick:{
	            	show:false,
	            },
				splitLine:{
					show:false,
					lineStyle:{
						color:'#D4D4D8'
					}
				}
			},
			{
				type : 'value',
				name : '使用率',
				axisLabel : {
				formatter: '{value} %',
					textStyle:{
						color:'#AFBCC4',
						fontSize: 12,
					}
				},
				axisLine:{
					lineStyle:{
						color:'#fff'
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
				name:'正常数',
				type:'line',
				symbol:'circle',
				symbolSize: 8,
				yAxisIndex: 0,
	            itemStyle: {
			        normal: {
						color:'#00FFFF',
			            lineStyle: {
							color: "#00FFFF",
							width:1
			            },
			            areaStyle: { 
							//color: '#94C9EC'
							color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
								offset: 0,
								color: 'rgba(0, 255, 255, 0.1)'
							}, {
								offset: 1,
								color: 'rgba(0, 255, 255, 0.52)'
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
				data:[120, 132, 101, 134, 90, 200, 210]
			},
			{
				name:'使用率',
				type:'line',
				symbol:'circle',
				symbolSize: 8,
				yAxisIndex: 1,
	            itemStyle: {
			        normal: {
			            color:'#FF9000',
			            lineStyle: {
							color: "#FF9000",
							width:1
			            },
			            areaStyle: { 
							//color: '#94C9EC'
							color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
								offset: 0,
								color: 'rgba(255, 144, 0, 0.1)'
							}, {
								offset: 1,
								color: 'rgba(255, 144, 0, 0.52)'
							}]),
			            }
			        }
				},
			data:[50, 65, 40, 50, 60, 70, 80]
			},
		]
	};