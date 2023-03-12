let dataFlaw = [3, 27, 150];
	let arr1=[],arr2=[];//arr1用于存名字，arr2用于存数据
	let maxNum =0;//用于存数组里面数据的总数
	let pieData2 = [{"name": '高危',"theData": 150}, {"name": '中危',"theData": 27}, {"name": '低危',"theData": 3}];
	for(let i = pieData2.length-1; i >=0; i--) {
		arr1.push(pieData2[i].name);//名字
		console.log(pieData2[i].name);
		maxNum += parseInt(pieData2[i].theData);
		arr2.push(pieData2[i].theData);//具体数据
	}
	option = {
		grid: {
			left: '12%',
			top: '25%',
			bottom: '40%',
			right: '29%',
			containLabel: true
		},
		legend: {
			show: false
		},
		backgroundColor:"#013d5a",
		xAxis: {
			splitLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			axisLine: {
				show: false
			},
			axisLabel: {
				show: false
			}
		},
		yAxis: {
			splitLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			axisLine: {
				show: false
			},
			axisLabel: {
				color: '#31ffe7',
				fontSize: 18
			},
			data: arr1
		},
		series: [{
			type: 'bar',
			barGap: '40%',
			barWidth: 45,
			itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(
						1, 0, 0, 0, [{
								offset: 0,
								color: '#0de5ff'
							},
							{
								offset: 1,
								color: '#179fe6'
							}
						]
					),
					barBorderRadius: 0
				}
			},
			z: -10,
			data: arr2
		}, {
			type: 'bar',
			barGap: '-100%',
			barWidth: 45,
			itemStyle: {
				normal: {
					color: '#041542',
					barBorderRadius: 0
				}
			},
			label: {
				normal: {
					show: true,
					position: 'right',
					rich: { //富文本
						green: {
							color: '#31ffe7',
							fontSize: 20,
						},
						newgreen: {
							color: '#53f466',
							fontSize: 20,
						},
						purple: {
							color: '#d25ef2',
							fontSize: 20,
						},
						yellow: {
							color: '#a4f453',
							fontSize: 20,
						}
					},
					offset: [15, 0],
					formatter: function(params, i) {
						i = params.dataIndex;
						if(i == 0) {
							return '{green|' + (dataFlaw[params.dataIndex] / maxNum * 100).toFixed(1) + '%  |  }{yellow|' + dataFlaw[params.dataIndex] + '  个}';
						} else if(i == 1) {
							return '{green|' + (dataFlaw[params.dataIndex] / maxNum * 100).toFixed(1) + '%  |  }{purple|' + dataFlaw[params.dataIndex] + '  个}';
						} else if(i == 2) {
							return '{green|' + (dataFlaw[params.dataIndex] / maxNum * 100).toFixed(1) + '%  |  }{newgreen|' + dataFlaw[params.dataIndex] + '  个}';
						}
					}
				}
			},
			z: -12,
			data: [maxNum, maxNum, maxNum]
		}]
	};