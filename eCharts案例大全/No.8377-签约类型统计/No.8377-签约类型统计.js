// 指定图表的配置项和数据
var option = {
	title : {
			text: '签约类型统计',
			//subtext: '纯属虚构',
			x:'left',
			//y:'center',
			padding:[12,0,0,0],
			textStyle: {
				"fontSize": 14,
				"fontWeight": "bolder",
				"color": "#333"
			}
	},
	tooltip : {
		trigger: 'axis',
		axisPointer : {            // 坐标轴指示器，坐标轴触发有效
			type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		}
		//,formatter: "{b}<br/>{a1}：{c1}人<br/>{a}：{c}人"
		/*,formatter:function(params){
			 return params[0].name+'<br/>'+params[0].seriesName+'：'+params[0].value+'人'
					+'<br/>'+params[1].seriesName+'：'+params[1].data+'人'
		}*/
	},
	legend: {
		data:['总签约','新增签约'],
		x:'right',
		padding:[12,15,0,0]
	},
	grid: {
		left: '3%',
		right: '4%',
		bottom: '10%',
		top: '25%',
		containLabel: true
	},
	//color:['#ff7f50', '#87cefa'],
	xAxis : [
		{
			type : 'category',
			data : ['健康人群','高危人群','慢性病人群','老年人群']
		}
	],
	yAxis : [
		{
			name:'单位(人)',
			type:'value',
			interval:150
		}
	],
	series : [
		{
			name:'总签约',
			type:'bar',
			//stack: '签约',
			barWidth : 15,
			itemStyle:{
				normal:{
					color:'#87cefa'
				}
			},
			label:{
				normal:{
					show:true,
					position: 'top'/*,
					formatter: "{c}人"*/
				}
			},
			data:[620, 732, 701, 734]
		},
		{
			name:'新增签约',
			type:'bar',
			barWidth : 15,
			//stack: '签约',
			itemStyle:{
				normal:{
					color:'#ff7f50'
				}
			},
			label:{
				normal:{
					show:true,
					position: 'top'/*,
					formatter: "{c}人"*/
				}
			},
			data:[120, 132, 101, 134]
		}
	]
};