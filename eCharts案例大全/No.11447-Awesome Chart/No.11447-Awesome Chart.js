var allData = {
    "citys": [{
        "name": "香港",
        "value": [114.195466, 22.282751,100],
        "symbolSize": 20,
        "itemStyle": {
			"normal": {
				"color": "#F58158"
			}
		}
    },{
        "name": "加拿大温哥华",
        "value": [-123.023921, 49.311753, -30],
        "symbolSize": 2,
        "itemStyle": {
			"normal": {
				"color": "#58B3CC"
			}
		}
    },{
        "name": "美国洛杉矶",
        "value": [-118.24311, 34.052713, 2],
        "symbolSize": 8,
        "itemStyle": {
			"normal": {
				"color": "#58B3CC"
			}
		}
    },{
        "name": "英国曼彻斯特",
        "value": [-1.657222, 51.886863, 10],
        "symbolSize": 14,
        "itemStyle": {
			"normal": {
				"color": "#58B3CC"
			}
		}
    },{
        "name": "澳大利亚墨尔本",
        "value": [144.999416, -37.781726, 2],
        "symbolSize": 4,
        "itemStyle": {
			"normal": {
				"color": "#58B3CC"
			}
		}
    },{
        "name": "乌拉圭蒙得维的亚",
        "value": [-56.162231, -34.901113, -20],
        "symbolSize": 4,
        "itemStyle": {
			"normal": {
				"color": "#58B3CC"
			}
		}
        
    }],
    "moveLines": [{
        "fromName": "加拿大温哥华",
		"toName": "香港",
		"coords": [
			[-123.023921, 49.311753],
			[114.195466, 22.282751]
		]
    },{
        "fromName": "加拿大温哥华",
		"toName": "香港",
		"coords": [
			[-123.023921, 49.311753],
			[114.195466, 22.282751]
		]
    },{
        "fromName": "美国洛杉矶",
		"toName": "香港",
		"coords": [
			[-118.24311, 34.052713],
			[114.195466, 22.282751]
		]
    },{
        "fromName": "英国曼彻斯特",
		"toName": "香港",
		"coords": [
			[-1.657222, 51.886863],
			[114.195466, 22.282751]
		]
    },{
        "fromName": "澳大利亚墨尔本",
		"toName": "香港",
		"coords": [
			[144.999416, -37.781726],
			[114.195466, 22.282751]
		]
    },{
        "fromName": "加拿大温哥华",
		"toName": "香港",
		"coords": [
			[-123.023921, 49.311753],
			[114.195466, 22.282751]
		]
    },{
        "fromName": "香港",
		"toName": "乌拉圭蒙得维的亚",
		"coords": [
			[114.195466, 22.282751],
			[-56.162231, -34.901113]
		]
    },{
        "fromName": "乌拉圭蒙得维的亚",
		"toName": "美国洛杉矶",
		"coords": [
			[-56.162231, -34.901113],
			[-118.24311, 34.052713]
		]
    },{
        "fromName": "乌拉圭蒙得维的亚",
		"toName": "英国曼彻斯特",
		"coords": [
			[-56.162231, -34.901113],
			[-1.657222, 51.886863]
		]
    },{
        "fromName": "香港",
		"toName": "加拿大温哥华",
		"coords": [
		    [114.195466, 22.282751],
			[-123.023921, 49.311753],
			
		]
    },{
        "fromName": "加拿大温哥华",
		"toName": "香港",
		"coords": [
			[-123.023921, 49.311753],
			[114.195466, 22.282751]
		]
    },]
}

option = {
    title: {
        text: '全球数字货币交易',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    backgroundColor: '#404a59',
    legend: {
        show: false,
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        data: ['地点', '线路'],
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        trigger: "item",
        showDelay: 0,
        hideDelay: 0,
        enterable: true,
        transitionDuration: 0,
        extraCssText: "z-index:100",
        formatter: function(params, ticket, callback) {
            //根据业务自己拓展要显示的内容
            console.log('0')
            if(params.seriesType=="effectScatter") {
                var res = "";
                var name = params.name;
                var value = params.value[2];
                res =
                    "<span style='color:#fff;'>" +
                    name +
                    "</span><br/>交易量：" +
                    value;
                return res;
            }
        }
    },
    geo: {
        map: 'world',
        label: {
            emphasis: {
                show: false
            }
        },
        zoom: 1.25,
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
    series: [{
        name: '地点',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
            brushType: 'stroke'
        },
        symbolSize: 2,
        showEffectOn: 'render',
        itemStyle: {
            normal: {
                color: '#46bee9'
            }
        },
        data: allData.citys
    }, {
        name: '线路',
        type: 'lines',
        coordinateSystem: 'geo',
        zlevel: 2,
        large: true,
        effect: {
            show: true,
            period: 8, //箭头指向速度，值越小速度越快
            trailLength: 0.21, //特效尾迹长度[0,1]值越大，尾迹越长重
            symbol: "arrow", //箭头图标
            symbolSize: 5 //图标大小
        },
        lineStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0, color: '#58B3CC'
                    }, {
                        offset: 1, color: '#F58158'
                    }], false),
                width: 1,
                opacity: 0.02,
                curveness: 0.1
            }
        },
        data: allData.moveLines
    }]
};