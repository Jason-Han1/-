option = {
    title: {
		text:"慢SQL趋势分析",
		subtext: '每日SQL访问数据库平均用时趋势',
	},
	grid: {
        left: '3%',
        top:'10%',
        containLabel: true
    },
	legend: {
        orient: 'vertical',
        left: 'right',
        data:["平均时长(s)"]
    },
    xAxis: {
    	name: "日/周/月",
        type: 'category',
        data: [100,200,300,400,500,600,700],
        axisLabel:{
			interval:0,
	        rotate:-45
        }
    },
    tooltip: {
    	show: true
    },
    yAxis: {
    	name: "平均时长(s)",
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],//[820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        name:"平均时长(s)"
    }]
};