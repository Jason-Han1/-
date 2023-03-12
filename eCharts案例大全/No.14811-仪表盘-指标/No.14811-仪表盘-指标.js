option = {
    backgroundColor: '#00264d',
    tooltip : {
		formatter: "{a} <br/>{b} : {c}%"
	},
	toolbox: {
		feature: {
			restore: {},
			saveAsImage: {}
		}
	},
	series: [
		{
			type: 'gauge',
			name: '业务指标',
			radius:'100%',
			startAngle:'195',
			endAngle:'-15',
			splitNumber:'50',
			pointer:{
				show:false
			},
			detail: {
				show : false,
				offsetCenter:[0,-20],
				formatter:'{value}%'
			},
			data: [{value: 60, name: '完成率'}],
			title: {
				show: true,
				offsetCenter: [0, '20px'],<!-- 【完成率】偏离中心的距离[左右,上下] -->
				textStyle: {
					color: '#fff',
					fontStyle: 'normal',
					fontWeight: 'normal',
					fontFamily: '微软雅黑',
					fontSize: 16
				}
			},
			axisLine:{
				show: true,
				lineStyle: {
					color:[[0.7, '#D14352'], [0.9, '#F6BB41'], [1, '#00FF00']],
					width: 10,
					shadowBlur: 0,
					shadowColor: '',
					shadowOffsetX: 0,
					shadowOffsetY: 0,
					opacity: 1
				}
			},
			axisTick: {
				show: false
			},
			splitLine: {
				show: true,
				length:10,
				lineStyle: {
					color: '#00377a',
					width: 2,
					type: 'solid',
					shadowColor: '#00377a',
					shadowBlur: 10,
					shadowOffsetX: 10,
					shadowOffsetY: 10,
					opacity: 0.5
				},
			},
			axisLabel: {
				show: false
			}
		},{
			type: 'gauge',
			name: '业务指标',
			radius:'90%',
			startAngle:'195',
			endAngle:'-15',
			splitNumber:'50',
			pointer:{
				show:false
			},
			detail: {
			offsetCenter:[0,-20],
			formatter:'{value}%'
			},
			data: [{value: 95, name: '完成率'}],
			title: [{
				show: true,
				offsetCenter: [0, '20px'],<!-- 【完成率】偏离中心的距离[左右,上下] -->
				textStyle: {
					color: '#fff',
					fontStyle: 'normal',
					fontWeight: 'normal',
					fontFamily: '微软雅黑',
					fontSize: 16
				}
			},{
				show: true,
				offsetCenter: [0, '40px'],<!-- 【完成率】偏离中心的距离[左右,上下] -->
				textStyle: {
					color: '#fff',
					fontStyle: 'normal',
					fontWeight: 'normal',
					fontFamily: '微软雅黑',
					fontSize: 16
				}
			}],
			axisLine:{
				show: true,
				lineStyle: {
					color:[[0, '#00ff00'], [0.95, '#00ff00'], [1, '#002c5d']],
					width: 25,
					shadowBlur: 15,
					shadowColor: '#00ff00',
					shadowOffsetX: 0,
					shadowOffsetY: 0,
					opacity: 1
				}
			},
			axisTick: {
				show: false
			},
			splitLine: {
				show: true,
				length:25,
				lineStyle: {
					color: '#00377a',
					width: 2,
					type: 'solid',
					shadowColor: '#00377a',
					shadowBlur: 25,
					shadowOffsetX: 10,
					shadowOffsetY: 10,
					opacity: 0.5
				},
			},
			axisLabel: {
				show: false
			}
		}
	]
};