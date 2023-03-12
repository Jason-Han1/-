var uploadedDataURL = "/asset/get/s/data-1572844176115-JKDKTM3-.json";

var data = [
    {name:'111',value:'80'},
    {name:'222',value:'150'},
    {name:'333',value:'90'},
    {name:'444',value:'80'}
];
var geoCoordMap = {
    '111':[106.084091, 30.795572],
    '222':[105.685928,31.595053],
    '333':[105.689296,31.597604],
    '444':[105.820395,31.474247]
};

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

option = {
    backgroundColor: '#404a59',
    title:false,
    tooltip :{},
    geo: [{
			map: data,
			label: {
				normal: {
	                show: true,
	                textStyle: {
	                    color: 'rgba(102,246,255,1)',
	                    fontWeight:'500',
	                    fontSize:10
	                }
	            },
				emphasis: {
					show: true
				}
			},
			aspectScale: 0.75,
			//长宽比
			width: '62%',
			height: '98%',
			bottom: 0,
			roam: false,
			silent: true,
			itemStyle: {
				normal: {
					borderWidth: 1.5,
					borderColor: 'rgba(102,246,255,1)',
					areaColor: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.8,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(102,246,255, 0)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(102,246,255,.25)' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
	                shadowBlur:0,
	                shadowColor: 'rgba(102,246,255, 0.1)',
					shadowOffsetX: 2.2,
					shadowOffsetY: 2.2
				}
			}
		}],
    series : [
        {
			type: 'scatter',
			coordinateSystem: 'geo',
			data: convertData(data),
			symbolSize: function(val) {
				return val[1] / 8;
			},

			label: {
				normal: {
					formatter: '{b}',
					position: 'right',
					show: false
				},
				emphasis: {
					show: false
				}
			},
			itemStyle: {
				normal: {
					color: 'rgba(255, 250, 111, .6)',
					shadowBlur: 10,
					shadowColor: 'rgba(255, 250, 111, .6)',
				}
			},
		},
        {
            name: '巡河信息',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: function(val) {
				return val[2] / 12;
			},
			showEffectOn: 'render',
			rippleEffect: {
				brushType: 'stroke',
				scale: 3
				//设置缩放
				// period: 5,
				//设置时间
			},
			hoverAnimation: true,
			label: {
				normal: {
					formatter: '{b}',
					position: 'right',
					show: false
				}
			},
			itemStyle: {
				normal: {
					color: 'rgba(255, 250, 111, 1)',
					shadowBlur: 10,
					shadowColor: 'rgba(255, 250, 111, .6)',
				}
			},
			zlevel: 1
        }
    ]
};
$.get(uploadedDataURL, function (gdMap) {
    echarts.registerMap(data, gdMap);
    myChart.setOption(option, true);
});