
let legendData = ['报警机车','运行机车']
let seriesDataNum = 28
option = {
    backgroundColor:'#032257',
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		color:['#C6001A','#043574'],
		legend: {
			x: 'center',
			bottom:'35',
			data:legendData,
			itemWidth: 20,
			itemHeight:14,
			itemGap:50,
			textStyle:{
				color:'#ACCFFF',
				fontSize:16,
			},
		},
		series: [{
			name: '机车状态',
			type: 'pie',
			radius: ['45%', '65%'],
			center: ["50%", "45%"],
			label: {
				normal: {
					position: 'center'
				}
			},
			data:[{
				value: seriesDataNum,
				name: legendData[0],
				hoverAnimation:"false",
				label: {
					normal: {
						formatter: '{d} %',
						textStyle: {
							fontSize: 30,
							color: '#A7D6F4',
						}
					}
				},
			}, {
				value: 100 - seriesDataNum,
				name:  legendData[1],
				hoverAnimation:"false",
				label: {
					normal: {
						formatter: '\n',
						textStyle: {
							color: '#A7D6F4',
							fontSize: 16
						}
					}
				},
			}]
		}]
	};