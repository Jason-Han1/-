app.title = '堆叠条形图';
var _boyActual = [100, 100, 120,12,13,14,15,13];
var _boyShould = [150, 150, 150,150,150,150,150,150];
var _bgshow=[100,100,100,100,100,100,100,100];
var _college = ['100万以内', '100-500万', '500-1000万', '1000-2000万', '2000-5000万','5000-100000万','10000万以上','其他'];

option = {
	backgroundColor: 'rgba(0, 68, 183, 1)',
	    tooltip: {
        show:"true",
        trigger: 'item',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
        },
    
    xAxis: {
        type: 'value',
        show: true,
        max: 100,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    yAxis: [{
        type: 'category',
        position: "left",
        data: _college, axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            color:'#fff'
        },
        splitLine: {
            show: false
        }
    }, {
        type: 'category',
        position: "left",
        data: _college, axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            color:'#fff'
        },
        splitLine: {
            show: false
        }
    }],
    series: [{
        name: '',
        type: 'bar',
        barWidth: 6,
		silent: true,
        yAxisIndex: 0,
        label: {
            normal: {
                show: true,
                color:'#fff',
                formatter: function(data) {
                    return _boyActual[data.dataIndex] ;
                },
                position: 'right'
            }
        },
        itemStyle: {
            normal: {
                	color: '#0B2A54',
					barBorderRadius: 20,
            }
        },
        data: _bgshow
    }, {
        name: '',
        type: 'bar',
        barWidth: 6,
		silent: false,
        yAxisIndex: 1,
        itemStyle: {
            normal: {
               barBorderRadius: 10,
		       color: {
						type: 'bar',
						colorStops: [{
						offset: 0,
						color: '#00ffa8' // 0% 处的颜色
						}, {
								offset: 1,
								color: '#ffea00' // 100% 处的颜色
							}],
							globalCoord: false, // 缺省为 false
				},
              label: {
                show: true,
                position: 'insideRight',
                formatter: '   ',
                backgroundColor: '#fff',
                distance: 0,
                borderColor: 'rgba(255, 234, 0, 0.5)',
                borderWidth: 8,
                borderRadius: 10,
                color: '#fff'
              }
            }
        },
        data: _boyActual.map(function(item, index) {
            return parseInt(item / _boyShould[index] * 100)
        })
    }]
};