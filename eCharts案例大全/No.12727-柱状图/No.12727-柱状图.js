var thebarone = [],	thebartwo = [];
	var myBgColor = ['#31ffe6', '#018ffd', '#715fcf'];
	var barData = [{
		"keyWord": '省直归集',
		"theData": 4.79
	}, {
		"keyWord": '市直归集',
		"theData": 2.86
	}, {
		"keyWord": '五区归集',
		"theData": 0.97
	}];

	for(var i = 0; i < barData.length; i++) {
		console.log(barData[i].keyWord)
		thebarone.push(barData[i].keyWord);
		thebartwo.push(parseFloat(barData[i].theData));

	}
// 指定图表的配置项和数据
	var option = {
		tooltip: {
			show: false
		},
		grid: {
			top: '20%',
			left: '25%',
			right: '25%',
			bottom: '15%',
		},
		backgroundColor:"#013d5a",
		xAxis: {
			data: thebarone,
			offset: 2,
			axisTick: {
				show: false
			},
			axisLine: {
				show: false
			},
			axisLabel: {
				color: '#79bff7',
				fontSize: 14
			}
		},
		yAxis: {
			min: 0,
			max: 6,
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
		series: [{
			type: 'bar',
			label: {
				normal:{
					show: true,
					position: 'top',
					padding: 10,
					color: '#a1d5ff',
					fontSize: 14,
					formatter: '{c}亿'
				}
			},
			itemStyle: {
				normal:{
					color: function(params) {
						var num = myBgColor.length;
						return myBgColor[params.dataIndex % num]
					}
				}
				
			},
			barWidth: '35%',
			data: thebartwo,
			z: 10
		}]
	};