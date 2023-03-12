var obj = {
    0: '2.25%',
    1: '41.54%',
    2: '32.88%',
    3: '16.77%',
    4: '5.43%',
    5: '0.36%',
    6: '0.03%',
};

option = {
    grid: {
        left: '20%',
        right: '20%',
        bottom: '10%',
        top: '10%'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: function(params) {
            return params[0].name + ': ' + params[0].value;
        }
    },
    xAxis: {
        axisLabel: {
			textStyle: {
				color: '#000',
				fontSize: 12
			}
		},
		axisLine: {
			 show:false
		},
		splitLine: {
		    show:false
		},
		axisTick: {
		    show:false
		},
        data: ['中考','高考','自考'],
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
            show: false
        }
    },
    color: ['#e54035'],
    series: [{
        name: 'hill',
        type: 'pictorialBar',
        barCategoryGap: '-130%',
        symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
        label: {
            show: true,
            position: 'top',
            distance: 4,
            color: '#000',
            // fontWeight: 'bolder',
            fontSize: 12,
            formatter: function(params) {

                return obj[params.dataIndex];

            }
        },
        itemStyle: {
            normal: {
                color: function(params) {
                    let colorList = [
                        'rgba(124, 116, 238,.7)', 'rgba(60, 103, 215,.7)',
                        'rgba(196, 120, 70,.7)'
                    ];
                    return colorList[params.dataIndex];
                }
            },
            emphasis: {
                opacity: 1
            }
        },
        data: [500, 400, 250],
        z: 10
    }]
};