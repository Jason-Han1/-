var json = {
		chart0: {
			summarys: ['蔗糖溶液', '缓冲液PH值', '温度', '酶液'],
			xAxisData: ['', '0.1', '0.3', '0.6', '', '4.0', '5.0', '6.0', '', '25', '35', '50', '', '0.02', '0.06', '0.1', '', '']
		}
	};


	
opt = {
        showLogo:true,
		title: {
			text: function() {
				return '几种因素对蔗糖酶活力的影响'.split('').join('\n');
			}(),
			textStyle: {
				fontSize: 12
			},
			left: 10,
			top: 'middle'
		},
		legend: {
			data: []
		},
		tooltip: {
			formatter: function(params) {
				
				var stl = '';
				var summary = json.chart0.summarys[Math.floor(params[0].dataIndex / 4)];
				var serie = params[0];
				stl += '<br /> <div style="display:inline-block;width:10px;height:10px;border-radius:5px;background:' + getColorPalette()[0] + ';"></div>&emsp;' + (params[0] ? params[0].name : params.seriesName) + ':&emsp;' + serie.value;
				return stl ? '<div style="background:#fff;padding:15px;color:#999;border-radius:5px;">' + summary + stl + '</div>' : '';
			}
		},
		xAxis: [{
			type: 'category',
			splitLine: {
				show: false
			},
			boundaryGap: false,
			interval: 1,
			data: json.chart0.xAxisData
		}],
		yAxis: [{
			type: 'value',
			splitLine: {
				show: false
			},
			nameTextStyle: {
				fontSize: 14,
				rotation: 2
			},
			axisLabel: {
				show:false
			},
			name: function() {
				return '几种因素对蔗糖酶活力的影响'.split('').join('\n')
			}(),
			nameLocation: 'middle'
		}],
		series: [{
			name: '邮件营销',
			xAxisIndex: [0],
			yAxisIndex: [0],
			type: 'line',
			showAllSymbol: true,
			symbol: 'circle',
			symbolSize: '8',
			lineStyle: {
				normal: {
					color: '#999'
				}
			},
			itemStyle: {
				normal: {
					color: '#333'
				},
				emphais: {
					color: '#333'
				}
			},
			data: ['-', 120, 132, 101, '-', 90, 230, 210, '-', 90, 230, 210, '-', 90, 230, 210, '-', '-']
		}]
	};

option = zrUtil.merge(opt, baseOption, false)