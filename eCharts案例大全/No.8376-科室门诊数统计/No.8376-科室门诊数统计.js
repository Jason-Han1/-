var option = {
	title : {
		text: '科室门诊数统计',
		subtext: '',
		x:'center'
	},
	tooltip : {
		trigger: 'item',
		formatter: "{a} <br/>{b} : {c} ({d}%)"
	},
	legend: {
		orient : 'vertical',
		x :'left',
		y :'center',
		data:['消化内科',
			  '呼吸内科',
			  '心血管内科',
			  '传染病科',
			  '骨科',
			  '其他科室']
	},
	toolbox: {
		show : true,
		feature : {
			restore : {show: true},
			saveAsImage : {show: true}
		}
	},
	calculable : true,
	series : [
		{
			name:'门诊数',
			type:'pie',
			radius : '55%',
			center: ['60%', '55%'],
			itemStyle: {
				normal : {
					label : {
						position : 'outer',
						formatter : function (params) {                         
						  return params.name+","+(params.percent - 0).toFixed(0) + '%'
						}
					}
				}
			},
			data:[
				{value:450, name:'消化内科'},
				{value:335, name:'呼吸内科'},
				{value:310, name:'心血管内科'},
				{value:234, name:'传染病科'},
				{value:135, name:'骨科'},
				{value:100, name:'其他科室'}
			]
		}
	]
};
