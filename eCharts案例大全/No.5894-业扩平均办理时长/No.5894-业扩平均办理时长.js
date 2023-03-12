var avgTimeLongs = ['15','8','6']; //  蓝色长度
var standardTimeLongs = ['20','20','20']; //  红色虚线框
var standardValues = ['18','11','12']; //  灰色阴影长度


	// 指定图表的配置项和数据
	var xdata = ['低压居民', '低压非居民','中高压电源'];
	 option = {
		grid:{
	        bottom: '2%',
	        top:'2%',
	        left:'32%',
	        right:'15%',
		},
		xAxis : {
			min : 0,
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
			name : '数据',
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
			name : '所有数据',
			xAxisIndex : 0,
			yAxisIndex : 1,
			zlevel : 99,
			 barWidth:60/35*12,
			barGap : '-100%',
			barCategoryGap : 0,
			itemStyle : {
				normal : {
					color : 'rgba(255,255,255,0)',
					barBorderColor : 'red',
					barBorderWidth : 1,
					barBorderRadius : 4,
					borderType : "dotted"
				}
			},
			data : standardTimeLongs,
		},{
			type : 'bar',
			name : '方法组',
			xAxisIndex : 0,
			yAxisIndex : 0,
			 barWidth:60/35*12,
			barGap : '-100%',
			itemStyle : {
				normal : {
					barBorderRadius : 4,
					color : function(params) {
						var colorList = ['rgb(94,189,211)','rgb(94,189,211)','rgb(94,189,211)'];
						return colorList[params.dataIndex];
					}
				}
			},
			data : avgTimeLongs,
		}]
	};




