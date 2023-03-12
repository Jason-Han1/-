// 指定图表的配置项和数据
var option = {
	title : {
		text: '高血压控制率统计',
		//subtext: '纯属虚构',
		x:'center',
		//y:'center',
		padding:[20,0,0,0],
		textStyle: {
			"fontSize": 14,
			"fontWeight": "bolder",
			"color": "#333"
		}
	},
	tooltip : {
		trigger: 'item',
		formatter: "{b} : {c}人 (占比{d}%)"
	},
	legend: {
		show:false,
		orient: 'vertical',
		left: 'left',
		data: ['未达标','已达标']
	},
	color:['#da70d6', '#32cd32'],
	series : [
		{
			name: '控制率',
			type: 'pie',
			radius : '50%',
			center: ['50%', '60%'],
			data:[
				{value:200, name:'未达标'},
				{value:300, name:'已达标'}
			],
			label : {
				normal:{
					position : 'outer',
					formatter : function (params) {                         
					  return params.name+','+ params.value+'人,'+(params.percent - 0).toFixed(0) + '%'
					}
				}
			},
			itemStyle: {
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				},
				normal : {
					//color:'#61a0a8'
				}
			}
		}
	]
};
