option = {
	grid:{left:60,right:60,top:50,bottom:60},
	legend:{},
	tooltip:{},
	dataset:{
			dimensions:["group","黑龙江本期价格","黑龙江联动后电价"],
			source:[{group:"2018年1月",黑龙江本期价格:519.31,黑龙江联动后电价:374},
					{group:"2018年2月",黑龙江本期价格:522.83,黑龙江联动后电价:374},
					{group:"2018年3月",黑龙江本期价格:495.48,黑龙江联动后电价:374},
					{group:"2018年4月",黑龙江本期价格:477.43,黑龙江联动后电价:374},
					{group:"2018年5月",黑龙江本期价格:470,黑龙江联动后电价:374},
					{group:"2018年6月",黑龙江本期价格:472.85,黑龙江联动后电价:374},
					{group:"2018年7月",黑龙江本期价格:483.66,黑龙江联动后电价:374},
					{group:"2018年8月",黑龙江本期价格:520.07,黑龙江联动后电价:374},
					{group:"2018年9月",黑龙江本期价格:539.22,黑龙江联动后电价:374},
					{group:"2018年10月",黑龙江本期价格:537.95,黑龙江联动后电价:374},
					{group:"2018年11月",黑龙江本期价格:543.64,黑龙江联动后电价:374},
					{group:"2018年12月",黑龙江本期价格:535.24,黑龙江联动后电价:374}
					]
			},

	xAxis:{type:"category",nameLocation:"end",nameGap:20,nameTextStyle:{fontWeight:"bold"},axisLabel:{rotate:45},axisTick:{alignWithLabel:true},name:"时间"},
	yAxis:[
			{position:"left",nameGap:15,nameTextStyle:{fontWeight:"bold"},name:"元/吨"},
			{position:"right",nameGap:15,nameTextStyle:{fontWeight:"bold"},name:"元/千千瓦时"}
		],
		
	series:[
			{type:"line",yAxisIndex:1,color:["#ff0066"],showSymbol:true,label:{normal:{show:"true",
			    formatter:function (a){return a.value[a.seriesName] + "元";}}}},
			{type:"bar", yAxis:1,     color:["#7cb5ec"],showSymbol:true,label:{normal:{show:"true",
			    formatter:function (a){return a.value[a.seriesName] + "元";}}}}
			]
};