var option = {
	title : {
		text: '每日门诊数统计',
		subtext: '',
		x:'center'
	},
	tooltip : {
		trigger: 'axis'
	},
	legend: {
		data:['患者自主预约数','社区医生转诊数'],
		y:'bottom',
		padding:[5,5,10,5]
	},
	toolbox: {
		show : true,
		feature : {
			//magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
			restore : {show: true},
			saveAsImage : {show: true}
		}
	},
	grid : {
		x : '25',
		x2 : '10',
		y2 : '65'
	},
	xAxis : [
		{
			type : 'category',
			boundaryGap : false,
			data : ['01','02','03','04','05','06','07']
		}
	],
	yAxis : [
		{
			type : 'value'
		}
	],
	series : [
		{
			name:'患者自主预约数',
			type:'line',
			stack: '总量',
			itemStyle: {
				normal: {
					areaStyle: {type: 'default'},
					label: {show: true}
				}
			},
			data:[10, 5, 8, 10, 6, 8, 7]
		},
		{
			name:'社区医生转诊数',
			type:'line',
			stack: '总量',
			itemStyle: {
				normal: {
					areaStyle: {type: 'default'},
					label: {show: true}
				}
			},
			data:[20, 25, 21, 30, 27, 26, 28]
		}
	]
};
