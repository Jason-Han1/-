var color =[ '#a1d3f5', '#6cb8ea', '#66b6ee','#aedbf5', '#a1d3f5', '#6fbaee','#acd9f6', '#69b4ee', '#7dc0f2','#a4d8f8', '#7ebff0' ]
var bgd =[20, 20, 20, 20, 20, 20, 20]
option = {
    title: {
        text: 'Awesome Chart'
    },
    color:color,
    xAxis: [{
        type:'value',
        axisLabel:{show:false},
        axisTick:{show:false},
        axisLine:{show:false},
        splitLine:{show:false}
    },{
        type:'value',
        axisLabel:{show:false},
        axisTick:{show:false},
        axisLine:{show:false},
        splitLine:{show:false}
    }],
    yAxis: [{
        type:'category',
        // axisLabel:{show:false},
        axisTick:{show:false},
        axisLine:{show:false},
        data:['一','二','三','四','五','六','齐']
    },{
        type:'category',
        // axisLabel:{show:false},
        axisTick:{show:false},
        axisLine:{show:false},
    }],
    series: [{
        //设置背景柱图。
        type: 'bar',
        data:bgd,
        yAxisIndex:1,
		xAxisIndex:1,
		barGap:"-100%",
		itemStyle:{
			normal:{
				color:"#ccc",
			},
			emphasis:{
				color:"#ccc",
			}
		},
		z:1,
    },{
        type: 'bar',
        data:[20, 18, 11, 24, 29, 33, 31],
        stack:'a',
         yAxisIndex:0,
		xAxisIndex:0,
    },{
        type: 'bar',
        data:[1, 1, 1, 1, 1, 1,1],
        stack:'a',
         yAxisIndex:0,
		xAxisIndex:0,
		itemStyle:{
			normal:{
				color:"#ccc",
			},
			emphasis:{
				color:"#ccc",
			}
		},
    },{
        type: 'bar',
        data:[20, 18, 11, 24, 29, 33, 31],
        stack:'a',
         yAxisIndex:0,
		xAxisIndex:0,
    }]
};