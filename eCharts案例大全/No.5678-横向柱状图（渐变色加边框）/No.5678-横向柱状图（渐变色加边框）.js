var maxDataList = [150000, 150000, 150000, 150000, 150000];
option = {
    backgroundColor: "#001d34",
	grid: {
		left: '3%',
		right: '3%',
		bottom: '0',
		top: '3%',
		containLabel: true
	},
	xAxis: {
		show: false,
	},
	yAxis: [{
		type: 'category',
		inverse: true,
		axisLabel: {
			interval: 0,
			textStyle: {
				fontSize: 12,
				height: 20,
				color: '#24C6F6'
			},
			formatter: function (value, index) {
				var ret = ""; //拼接加\n返回的类目项  
				var maxLength = 10; //每项显示文字个数  
				var valLength = value.length; //X轴的文字个数  
				var rowN = Math.ceil(valLength / maxLength); //需要换行的行数  
				if (rowN > 1) //如文字大于5,  
				{
					for (var i = 0; i < rowN; i++) {
						var temp = ""; //每次截取的字符串  
						var start = i * maxLength; //开始截取的位置  
						var end = start + maxLength; //结束截取的位置    
						temp = value.substring(start, end) + "\n";
						ret += temp; //最终字符串  
					}
					return ['{title|' + ret + '}'];
				} else {
					return value;
				}
			},
			rich: {}
		},
		splitLine: {
			show: false
		},
		axisTick: {
			show: false
		},
		axisLine: {
			show: false
		},
		data: ["车道保持","紧急停车","自动巡航","连续变道","坡道启停"]
	}],
	series: [{
			type: 'bar',
			zlevel: 1,
			itemStyle: {
				normal: {
					barBorderRadius: 5,
					color: {
						type: 'linear',
						x: 0,
						y: 0,
						x2: 1,
						y2: 0,
						colorStops: [{
							offset: 0,
							color: '#34aeec'
						}, {
							offset: 1,
							color: '#c4fdfd'
						}],
						globalCoord: false
					}
				},
			},
			barGap: '-100%',
			barWidth: '30%',
			data: [112132,93223,93223,89875,86541]
		},
		{
			name: '背景',
			type: 'bar',
			barGap: '-103%',
			barWidth: '32%',
			data: maxDataList,
			itemStyle: {
				normal: {
					color: 'rgba(24,31,68,0)',
					borderWidth: 2,
					borderColor: '#00ffff',
					barBorderRadius: 5,
				}
			},
		},
	]
};