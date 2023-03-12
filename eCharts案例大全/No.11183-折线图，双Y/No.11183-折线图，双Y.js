option = {
    color: ['#00C1DE', '#6F7AF8', '#F5A547'],

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            lineStyle: {
                color: 'rgba(0,0,0,0.25)',
            },
        },
        backgroundColor: 'rgba(255,255,255,0.90)',
        padding: 12,
        textStyle: {
            color: 'rgba(0,0,0,0.65);',
        },
        extraCssText: 'box-shadow: 0 2px 4px 0 rgba(169,169,169,0.50); border-radius: 4px',
        formatter: function(param) {
				const d0 = param[0];
				const d1 = param[1];
				const d2 = param[2];
				return `
					<div class='slot-chart-tooltip'>
					${d2.marker} <span class='slot-chart-name'>${d2.seriesName}</span>${d2.value}<br>
					${d1.marker} <span class='slot-chart-name'>${d1.seriesName}</span>${d1.value}%<br>
					${d0.marker} <span class='slot-chart-name'>${d0.axisValue} ${d0.seriesName}</span>${d0.value}%<br>
					</div>
				`;
        }

    },
    grid: {
        left: 20,
        right: 20,
        bottom: 20,
        containLabel: true,
    },
    legend: {
        data: [{
            name: 'cpu使用率',
            icon: 'circle'
        }, {
            name: '内存使用率',
            icon: 'circle'
        }, {
            name: '实例数',
            icon: 'circle'
        }, ]
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    }],
    yAxis: [{
            type: 'value',
            name: '使用率（%）',
            position: 'left',
            min: 0,
            max: 100,
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name: '实例数',
            position: 'right',
            scale: true,
            axisLabel: {
                formatter: '{value}'
            }
        }
    ],
    series: [{
            name: 'cpu使用率',
            type: 'line',
            yAxisIndex: 0,
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 15.6, 12.2, 32.6, 20.0, 6.4, 3.3]
        },
        {
            name: '内存使用率',
            type: 'line',
            yAxisIndex: 0,
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 15.6, 12.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
            name: '实例数',
            type: 'line',
            yAxisIndex: 1,
            data: [222.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
    ]
};