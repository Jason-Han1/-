var SHData = [
    [{
        name: '105860084'
    }, {
        name: 'PLC',
        value: 95
    }],
    [{
        name: '109470173'
    }, {
        name: 'PLC',
        value: 95
    }],
    [{
        name: '105850050'
    }, {
        name: 'PLC',
        value: 90
    }],
    [{
        name: '100440557'
    }, {
        name: 'PLC',
        value: 90
    }],
    [{
        name: '100440553'
    }, {
        name: 'PLC',
        value: 80
    }],
    [{
        name: '109470204'
    }, {
        name: 'PLC',
        value: 80
    }],
    [{
        name: '104920114'
    }, {
        name: 'PLC',
        value: 70
    }],
    [{
        name: '104920110'
    }, {
        name: 'PLC',
        value: 70
    }],
    [{
        name: '105740102'
    }, {
        name: 'PLC',
        value: 60
    }],
    [{
        name: '109470182'
    }, {
        name: 'PLC',
        value: 60
    }],
    [{
        name: '104920115'
    }, {
        name: 'PLC',
        value: 50
    }],
    [{
        name: '105850123'
    }, {
        name: 'PLC',
        value: 50
    }]
];

var BJData = [
    [{
        name: '100040185'
    }, {
        name: '数控',
        value: 95
    }],
    [{
        name: '100040186'
    }, {
        name: '数控',
        value: 95
    }],
    [{
        name: '100040187'
    }, {
        name: '数控',
        value: 90
    }],
    [{
        name: '100040189'
    }, {
        name: '数控',
        value: 90
    }],
    [{
        name: '100040059'
    }, {
        name: '数控',
        value: 80
    }],
    [{
        name: '100040056'
    }, {
        name: '数控',
        value: 80
    }],
    [{
        name: '100440473'
    }, {
        name: '数控',
        value: 70
    }],
    [{
        name: '100260096'
    }, {
        name: '数控',
        value: 70
    }],
    [{
        name: '100040028'
    }, {
        name: '数控',
        value: 60
    }],
    [{
        name: '100040029'
    }, {
        name: '数控',
        value: 60
    }],
    [{
        name: '100040188'
    }, {
        name: '数控',
        value: 50
    }],
    [{
        name: '100440464'
    }, {
        name: '数控',
        value: 50
    }],
    [{
        name: '100440502'
    }, {
        name: '数控',
        value: 40
    }],
    [{
        name: '100260063'
    }, {
        name: '数控',
        value: 30
    }],
    [{
        name: '100440629'
    }, {
        name: '数控',
        value: 20
    }],
    [{
        name: '100040183'
    }, {
        name: '数控',
        value: 10
    }],
    [{
        name: '100040184'
    }, {
        name: '数控',
        value: 30
    }]
];
	var geoCoordMap = {
		'数控': [868, 210],
		'105860084': [75, 139],//100
		'109470173': [503, 50],//140
		'105850050': [520, 69],//160
		'100440557': [582, 113],//180-B
		'100440553': [618, 110],//190-A
		'109470204': [801, 127],//250
		'104920114': [773, 89],//260
		'104920110': [743, 59],//270
		'105740102': [771, 50],//280
		'109470182': [823, 97],//290
		'104920115': [894, 123],//300
		'105850123': [878, 93],//310
		
		'PLC': [603, 210],
		'100040185': [161, 130],//110-1
		'100040186': [210, 137],//110-2
		'100040187': [250, 138],//110-3
		'100040189': [380, 124],//120
		'100040059': [460, 96],//130-1
		'100040056': [458, 70],//130-2
		'100440473': [532, 111],//180-A
		'100260096': [560, 153],//190-B
		'100040028': [579, 56],//200
		'100040029': [607, 148],//210-A-1
		'100040188': [675, 151],//210-A-2
		'100440464': [638, 68],//215
		'100440502': [712, 71],//220-A-1
		'100260063': [679, 70],//220-A-2
		'100440629': [736, 126],//230
		'100040183': [380, 91],//220-B-1
		'100040184': [336, 92]//220-B-2
	};
var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
var convertData = function(data) {
		var res = [];
		for(var i = 0; i < data.length; i++) {
			var dataItem = data[i];
			var fromCoord = geoCoordMap[dataItem[0].name];
			var toCoord = geoCoordMap[dataItem[1].name];
			if(fromCoord && toCoord) {
				res.push({
					fromName: dataItem[0].name,
					toName: dataItem[1].name,
					coords: [fromCoord, toCoord]
				});
			}
		}
		return res;
	};

	var color = ['#08ce7b', '#01a5f7'];
	var series = [];
	[
		['北京', BJData],
		['上海', SHData]
	].forEach(function(item, i) {
		series.push({
			name: item[0] + ' Top10',
			type: 'lines',
			zlevel: 1,
			effect: {
				show: true,
				period: 6,
				trailLength: 0.7,
				color: '#fff',
				symbolSize: 2
			},
			lineStyle: {
				normal: {
					color: color[i],
					width: 0,
					curveness: 0.2
				}
			},
			data: convertData(item[1])
		}, {
			name: item[0] + ' Top10',
			type: 'lines',
			zlevel: 2,
			symbol: ['circle', 'none'],
			symbolSize: 5,

			lineStyle: {
				normal: {
					color: color[i],
					width: 1,
					opacity: 0.6,
					curveness: 0.2
				}
			},
			data: convertData(item[1])
		}, {
			name: item[0] + ' Top10',
			type: 'effectScatter',
			coordinateSystem: 'geo',
			zlevel: 2,
			rippleEffect: {
				brushType: 'stroke'
			},
			label: {
				normal: {
					show: false
				}
			},
			symbolSize: 25,
			itemStyle: {
				normal: {
					color: color[i]
				}
			},
			data: item[1].map(function(dataItem) {
				return {
					name: dataItem[1].name,
					value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
				};
			})
		});
	});
	option = {
	    backgroundColor:'#203958',
		/*		tooltip: {
					trigger: 'item'
				},
		*/
		geo: {
			map: '',
			label: {
				emphasis: {
					show: false
				}
			},
			roam: true,
			itemStyle: {
				normal: {
					areaColor: '#323c48',
					borderColor: '#404a59'
				},
				emphasis: {
					areaColor: '#2a333d'
				}
			}
		},
		series: series
	};