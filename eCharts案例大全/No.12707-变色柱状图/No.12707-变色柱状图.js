let serverOne=[],serverTwo = [];
	serverList = [{"name":"windows","value":350},{"name":"linux","value":180},{"name":"unix","value":10},{"name":"netware","value":10},{"name":"其他","value":174}];
	for (let j = 0;j<serverList.length;j++) {
		serverOne.push(serverList[j].name);
		serverTwo.push(parseFloat(serverList[j].value));
	}
	option = {
		grid: {
			left: '2%',
			top: '8%',
			bottom: '2%',
			right: '0%',
			containLabel: true
		},
		backgroundColor:"#013d5a",
		xAxis: {
			data: serverOne,
			axisLine: {
				lineStyle: {
					color: '#0b4a61'
				}
			},
			axisLabel: {
				color: '#fff',
				fontSize: 20
			}
		},
		yAxis: {
			name: "",
			nameTextStyle: {
				color: '#fff',
				fontSize: 16
			},
			axisLine: {
				show: false,
				lineStyle: {
					color: 'transparent',
				}
			},
			axisLabel: {
				color: '#fff',
				fontSize: 16
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: '#0b4a61',
					width: 1
				}
			},
			interval: 100,
			max: 400

		},
		series: [{
			type: 'bar',
			barWidth: '46%',
			itemStyle: {
				normal: {
					color: function(params){
						let colorList = [new echarts.graphic.LinearGradient(0, 0, 0, 1,[{offset: 1, color: '#ff6a5d'}, {offset: 0, color: '#fe8c82'}]),
						new echarts.graphic.LinearGradient(0, 0, 0, 1,[{offset: 1, color: '#f78650'}, {offset: 0, color: '#fdb882'}]),
						new echarts.graphic.LinearGradient(0, 0, 0, 1,[{offset: 1, color: '#f78650'}, {offset: 0, color: '#fdb882'}]),
						new echarts.graphic.LinearGradient(0, 0, 0, 1,[{offset: 1, color: '#e9d851'}, {offset: 0, color: '#f9eb7f'}]),
						new echarts.graphic.LinearGradient(0, 0, 0, 1,[{offset: 1, color: '#e9d851'}, {offset: 0, color: '#f9eb7f'}])]
						return colorList[params.dataIndex]
					},
				}
			},
			data: serverTwo
		}]
	};