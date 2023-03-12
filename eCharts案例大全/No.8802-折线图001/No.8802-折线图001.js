var option = {
    tooltip: {
        trigger: 'axis'
    },

    legend: {
        data: ['今日', '昨日'],
        right: '0%',
        top: '0%'
    },
    grid: {
        top: '15%',
        left: '3%',
        right: '4%',
        bottom: '8%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: JSON.parse('["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"]'),
        axisTick: {
			show: false
		},
		axisLine: {
			lineStyle: {
				width: 1,
				color: '#CCC'
			}
		},
		axisLabel: {
			show: true,
			textStyle: {
				color: '#31394D'
			},
		},
    },
    yAxis: {
        type: 'value',
        axisLabel: {
			show: true,
			textStyle: {
				color: '#748AA1'
			},
		},
		axisTick: {
			show: false
		},
		axisLine: {
			lineStyle: {
				width: 1,
				color: '#CCC'
			}
		},
		splitLine: {
		    show: false,
			lineStyle: {
				color: '#F4F7FC'
			}
		}
    },
    color: ['#01C686', '#408EFF'],
    series: [
        {
            name: '今日',
            type: 'line',
            symbol: 'none',
            data: ["0","0","0","0","0","0","0","0","0","68388","39500","-36500","17400","11933","32495","43408","107292","0","0","8400","0","0","0","0"],
            lineStyle: {
				width: 3
			}
        },
        {
            name: '昨日',
            symbol: 'none',
            type: 'line',
            data: ["0","0","0","0","0","0","0","0","0","22400","-4400","0","0","0","8000","0","0","7700","10000","0","7600","7160","0","0"],
            lineStyle: {
				width: 3
			}
        }
    ]
};