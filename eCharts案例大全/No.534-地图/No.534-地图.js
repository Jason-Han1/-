var data = [{
        name: "海门",
        value: 12
    },
    {
        name: "鄂尔多斯",
        value: 30
    }];

	var geoCoordMap = {
		"海门": [121.15, 31.89],
		"鄂尔多斯": [109.781327, 39.608266]
	};

	function convertData(data) {
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
	}
option = {
             backgroundColor: '#010347',
            geo: {
                show: true,
                map: 'china',
                label: {
                    emphasis: {
                        show: true,
                        color: '#fff'
                    }
                },
                roam: false,
                itemStyle: {
                    normal: {
                        areaColor: '#01215c',
                        borderWidth: 1,//设置外层边框
                        borderColor:'#9ffcff',
                        shadowColor: 'rgba(0,54,255, 1)',
                        shadowBlur: 30
                    },
                    emphasis:{
                        areaColor: '#01215c',
                    }
                }
            },
            tooltip: { 
    			trigger: 'item',
    // 			formatter: function(params) {
    				//return params.name + ' : ' + params.value[2];
    				// var info =' <div class="yqmcbEct-cont">'+
    				// 				'<h1>公司名称公司名称公司名称</h1>'+
    				// 				'<h6>异常情况：</h6>'+
    				// 				'<h4 class="quezhen">确诊：<span>1234</span><var>较昨日<span>+123</span></var></h4>'+
    				// 				'<h4 class="yisi">疑似：<span>1234</span><var>较昨日<span>+123</span></var></h4>'+
    				// 				'<h4 class="geli">隔离：<span>1234</span><var>较昨日<span>+123</span></var></h4>'+
    				// 				'<h6>复工情况：</h6>'+
    				// 				'<h4 class="jiandang">入厂上班：<var>1234</var></h4>'+
    				// 				'<h4 class="jiandang">&nbsp;&nbsp;&nbsp;复工率：<var>70%</var></h4>'+
    				// 				'<h4 class="wuzi">物资情况：<var>充足</var></h4>'+
    				// 				'<h5>其他详情</h5>'+
    				// 			'</div>'
    				// return info; 
    // 			}
            },
            series: [
            {
                type: 'map',
                map: 'china',
                geoIndex: 1,
                aspectScale: 0.75, //长宽比
                showLegendSymbol: false, // 存在legend时显示
                tooltip:{
                	show:false
                },
    			label: {
    				normal: {
    					show: false
    				},
    				emphasis: {
    					show: false
    				}
    			} ,
                roam: false,
                
                itemStyle: {
                    normal: {
                        areaColor: '#01215c',
                        borderColor: '#3074d0',
                        borderWidth: 1
                    },
                    emphasis: {
                        areaColor: '#01215c'
                    }
                },
            },{
			name: '散点',
			type: 'effectScatter',
			coordinateSystem: 'geo',
			data: convertData(data),
			symbolSize: 20,
            symbol: 'circle',
// 			symbolSize: function (val) {
// 				return val[2];
// 			},
			label: {
				normal: {
					show: false
				},
				emphasis: {
					show: false
				}
			} ,
			showEffectOn: 'render',
            itemStyle: {
                normal: {
                    color: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.5,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(14,245,209,0.2)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(14,245,209,0.2)'
                        }, {
                            offset: 1,
                            color: 'rgba(14,245,209,1)'
                        }],
                        global: false // 缺省为 false
                    },
                }
    
            },  
				
		},
		]
        }