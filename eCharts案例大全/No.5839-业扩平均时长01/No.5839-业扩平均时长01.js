var avgTimeLongs = ['15']; // 蓝色长度
var standardTimeLongs = ['20']; // 红色虚线框
var standardValues = ['20']; // 灰色阴影长度
// 指定图表的配置项和数据
var xdata = ['低压居民'];
 option = {
	grid:{
        bottom: '2%',
        top:'2%',
        left:'32%',
        right:'15%',
	},
	tooltip:{ // 悬浮窗口
	    trigger:'axis',
	    axisPointer:{
	        type:"none"
	    },
	    formatter:function(params){
	     var temp = params[0].name;
	         temp += "</br>"+params[1].seriesName+"："+params[1].data;
	         temp += "</br>"+params[2].seriesName+"："+params[2].data;
	      return temp;
	    }
	},
	xAxis : {
		min : 0,
		max: standardValues,
		show : false
	},
	yAxis : [{
	    type : 'category',
		min : 0,
		data : xdata,
		show : true,
		axisTick : {
			length : 0
		},
		axisLine : {
			show : false,
			lineStyle : {
				color : '#000',
				width : 5
			}
		},
		axisLabel : {
			textStyle : {
				align : 'right',
			}
		}
	},{
		show : false,
		data : xdata
	}],
	series : [{
		type : 'bar',
		name : '阴影值',
		xAxisIndex : 0,
		yAxisIndex : 0,
		zlevel : 0,
		barWidth:60/35*12,
		barGap : '-100%',
		barCategoryGap : 0,
		label : {
			normal : {
				show : true,
				position : 'right',
				formatter : function(params) {
					return avgTimeLongs[params.dataIndex];
				},
				textStyle : { 
					color : 'rgb(25,25,25)',
					fontSize : 12 
				}
			}
		},
		itemStyle : {
			normal : {
				color : 'rgb(209,209,209)',
				barBorderRadius:4
			}
		},
		data : standardValues,
	},{
		type : 'bar',
		name : '标准值',
		xAxisIndex : 0,
		yAxisIndex : 0,
		zlevel : 99,
		barWidth:60/35*12,
		barGap : '-100%',
		barCategoryGap : 0,
		itemStyle : {
			normal : {
				color : 'rgba(255,255,255,0)',
				barBorderColor : 'red',
				barBorderWidth : 3,
				barBorderRadius : 4,
				borderType : "dotted"
			}
		},
		data : standardTimeLongs,
	},{
		type : 'bar',
		name : '指标值',
		xAxisIndex : 0,
		yAxisIndex : 0,
		barWidth:60/35*12,
		barGap : '-100%',
		itemStyle : {
			normal : {
				barBorderRadius : 4,
				color : function(params) {
					var colorList = ['rgb(94,189,211)'];
					return colorList[params.dataIndex];
				}
			}
		},
		data : avgTimeLongs,
		
	}]
};




