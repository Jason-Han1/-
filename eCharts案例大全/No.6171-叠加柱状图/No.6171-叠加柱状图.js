    option = {
        backgroundColor:'#fff',
		title:{
			text:"策略变更",
			top:10,
			left:15,
			textStyle:{
				color:"#35598d",
				fontSize:16,
				fontWeight:'normal'
			}
		},
	    tooltip: {
	    	trigger: 'axis',
	    },
	    grid: {
	        left: '5%',
	        right: '6%',
	        bottom: '3%',
	        top: '20%',
	        containLabel: true
	    },
	    legend: {
	    	icon:'rect',
	        right: "3%",
	        top:13,
	        itemWidth:20,
	        itemHeight:10,
	        textStyle: {
	            color: '#555'
	        },
	        data:['新增','修改','删除']
	    },
	    xAxis :{
            type : 'category',
            data : ['周一','周二','周三','周四','周五','周六','周日'],
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

            }
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
        	name:'新增',
            type:'bar',
            stack:'策略变更',
            barWidth : '40%',  //柱子宽度
            itemStyle:{  //柱子颜色
                normal:{
                    color:'#4e73de',
                    borderColor: "#fff",
                	borderWidth: 1,
                }
           	},
            data:[232, 193, 240, 214, 239, 223, 202]
        },{
        	name:'修改',
            type:'bar',
            stack:'策略变更',
            barWidth : '40%',  //柱子宽度
            itemStyle:{  //柱子颜色
                normal:{
                    color:'#2dafeb',
                    borderColor: "#fff",
                	borderWidth: 1,
                }
           	},
            data:[320, 332, 301, 334, 390, 330, 320]
        },{
        	name:'删除',
            type:'bar',
            stack:'策略变更',
            barWidth : '40%',  //柱子宽度
            itemStyle:{  //柱子颜色
                normal:{
                    color:'#35c68d',
                    borderColor: "#fff",
                	borderWidth: 1,
                }
           	},
            data:[60, 82, 51, 94, 100, 68, 74]
        }]
	};
	