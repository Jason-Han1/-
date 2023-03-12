
	option = {
	    backgroundColor:'#fff',
		title:{
			text:"圆滑折线面积图",
			top:10,
			left:15,
			textStyle:{
				color:"#35598d",
				fontSize:16,
				fontWeight:'normal'
			}
		},
	    tooltip:{
	    	trigger: 'axis',
	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        top: 60,
	        containLabel: true
	    },
	    legend: {
	    	icon:'rect',
	        right: "4%",
	        top:13,
	        itemWidth:20,
	        itemHeight:10,
	        data:['折线1','折线2'],
	        textStyle: {
	            color: '#555'
	        },
	    },
	    xAxis :{
            type : 'category',
            data:['day1','day2','day3','day4','day5','day6','day7'],
            axisLabel:{          //坐标轴字体颜色
            	textStyle:{
	                color: '#9eaaba'
	            }
            },
            axisLine:{
                lineStyle:{
                    color:"#e5e5e5"
                }
            }, 
	        axisTick:{       //y轴刻度线
	          show:false
	        },
            splitLine:{    //网格
            	show: false,
            },
        	boundaryGap: false,
        },
	    yAxis :{
            type : 'value',
            axisLabel:{        //坐标轴字体颜色
            	textStyle:{
	                color: '#9eaaba'
	            }
            },
            axisLine:{
            	show:false,
            },
	        axisTick:{       //y轴刻度线
	          show:false
	        },
            splitLine:{    //网格
            	show: true,
            	lineStyle:{
            		color:'#dadde4',
            		type:"dashed"
            	}
            }
        },
        
	    series:[{	
        	name:'折线1',
    		type: 'line',
    		smooth:true,
    		symbol: 'circle',
        	symbolSize: 8,
    		itemStyle: {
                color: "rgb(87, 120, 225)",
                borderColor: "#fff",
                borderWidth: 2,
                shadowColor: 'rgba(0, 0, 0, .3)',
            },
            lineStyle: {
                normal: {
					color:"rgb(87, 120, 225)",
                    shadowColor: 'rgba(87, 120, 225, .4)',
                    shadowBlur: 8,
                    shadowOffsetY: 10,
                    shadowOffsetX: 0,
                },
            },
        	areaStyle: {
        		normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                    offset: 0,
	                    color: 'rgba(87, 120, 225, .4)'
	                }, {
	                    offset: 1,
	                    color: 'rgba(87, 120, 225, 0)'
	                }]),
	            }
        	},
        	data: [80, 132, 119, 194, 129, 163, 112],
        },{	
        	name:'折线2',
    		type: 'line',
    		smooth:true,
    		symbol: 'circle',
        	symbolSize: 8,
    		itemStyle: {
                color: "rgb(55, 200, 143)",
                borderColor: "#fff",
                borderWidth: 1,
            },
            lineStyle: {
                normal: {
					color:"rgb(55, 200, 143)",
                    shadowColor: 'rgba(55, 200, 143, .4)',
                    shadowBlur: 8,
                    shadowOffsetY: 10,
                    shadowOffsetX: 0,
                },
            },
        	areaStyle: {
        		normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                    offset: 0,
	                    color: 'rgba(55, 200, 143, .4)'
	                }, {
	                    offset: 1,
	                    color: 'rgba(55, 200, 143, 0)'
	                }]),
	            }
        	},
        	data: [40, 162, 109, 164, 139, 193, 162],
        }]
	};
	