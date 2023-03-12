var uploadedDataURL = "/asset/get/s/data-1577153065762-Zq6YVYcp.js";

var uploadedDataURL = "/asset/get/s/data-1577153005327-oQERdTEn.js";

var uploadedDataURL = "/asset/get/s/data-1577152995195-oBuEJOTu.js";

var data = [
		        {name: '兰州',value: 30},
		        {name: '嘉峪关',value: 30},
		        {name: '金昌',value: 30},
		        {name: '白银',value: 30},
				{name: '天水',value: 30},
				{name: '酒泉',value: 30},
				{name: '张掖',value: 30},
				{name: '武威',value: 30},
				{name: '定西',value: 30},
				{name: '陇南',value: 30},
				{name: '平凉',value: 30},
				{name: '庆阳',value: 30},
				{name: '临夏',value: 30},
				{name: '甘南',value: 30},
	];
	var toolTipData = [
		{name: "兰州",value: [{name: "人员数量",value: 30}]},
		{name: "嘉峪关",value: [{name: "人员数量",value: 30}]},
		{name: "金昌",value: [{name: "人员数量",value: 30}]},
		{name: "白银",value: [{name: "人员数量",value: 30}]},
		{name: "天水",value: [{name: "人员数量",value: 30}]},
		{name: "酒泉",value: [{name: "人员数量",value: 30}]},
		{name: "张掖",value: [{name: "人员数量",value: 30}]},
		{name: "武威",value: [{name: "人员数量",value: 30}]},
		{name: "定西",value: [{name: "人员数量",value: 30}]},
		{name: "陇南",value: [{name: "人员数量",value: 30}]},
		{name: "平凉",value: [{name: "人员数量",value: 30}]},
		{name: "庆阳",value: [{name: "人员数量",value: 30}]},
		{name: "临夏",value: [{name: "人员数量",value: 30}]},
		{name: "甘南",value: [{name: "人员数量",value: 30}]},
	];
	var geoCoordMap = {
		'兰州': [103.82, 36.07],
		'酒泉': [96.20, 40.10],
		'金昌': [102.18, 38.50],
		'白银': [104.18, 36.55],
		'天水': [105.72, 34.58],
		'嘉峪关': [98.52, 39.75],
		'张掖': [100.45, 38.93],
		'武威': [102.63, 37.93],
		'定西': [104.62, 35.58],
		'陇南': [104.92, 33.40],
		'平凉': [106.67, 35.55],
		'庆阳': [107.63, 36.23],
		'临夏': [103.22, 35.60],
		'甘南': [102.92, 34.98],
	};

	var convertData = function(data) {
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
		tooltip: {
			trigger: 'item',
			borderRadius: 4,
			padding: 5,
			textStyle: {
				color: "#f5f5f5",
				fontSize: 14,
			},
			formatter: function(params) {
				if (typeof(params.value)[2] == "undefined") {
					var toolTiphtml = ''
					for (var i = 0; i < toolTipData.length; i++) {
						if (params.name == toolTipData[i].name) {
							toolTiphtml += toolTipData[i].name + ':<br>'
							for (var j = 0; j < toolTipData[i].value.length; j++) {
								toolTiphtml += toolTipData[i].value[j].name + ':' + toolTipData[i].value[j].value + '个' + "<br>"
							}
						}
					}
				
					
					return toolTiphtml;
				} else {
					var toolTiphtml = ''
					for (var i = 0; i < toolTipData.length; i++) {
						if (params.name == toolTipData[i].name) {
							toolTiphtml += toolTipData[i].name + ':<br>'
							for (var j = 0; j < toolTipData[i].value.length; j++) {
								toolTiphtml += toolTipData[i].value[j].name + ':' + toolTipData[i].value[j].value + '个' + "<br>"
							}
						}
					}
					
					
					return toolTiphtml;
				}
			}
		},
		
		geo: {
                show: true,
                map: "gansu",
				zoom: 1.1,
                roam: false,
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false,
                    }
                },
                itemStyle: {
                    normal: {
                        areaColor: 'rgba(103, 193, 184)', // 没有值得时候颜色
                        borderColor: 'rgba(103, 193, 184)',
                    },
                    emphasis: {
                        areaColor: '#069f8a', // 鼠标滑过选中的颜色
                    }
                }
            },
		series: [{
                    name: '散点',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: convertData(data),
                    symbolSize: '6',
				
                    label: {
                        normal: {
                            show: true,
                            formatter: '{b}',
                            position: 'right',
							offset:[5, 0],
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#fff' // 字体颜色
                        }
                    }
                },
			 {
                   
                    type: 'map',
                     map: 'gansu',
                    roam: false, //是否开启鼠标缩放和平移漫游
					zoom: 1.1,
                    data:data,
                    // top: "3%",//组件距离容器的距离
                    // geoIndex: 0,
                    // aspectScale: 0.75,       //长宽比
                    // showLegendSymbol: false, // 存在legend时显示
                    selectedMode: 'single',
                    label: {
                        normal: {
                            show: false, //显示省份标签
					
                            textStyle: {
                                color: "#895139"
                            } //省份标签字体颜色
                        },
                        emphasis: { //对应的鼠标悬浮效果
                            show: false,
                            textStyle: {
                                color: "#323232"
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderWidth: 1, //区域边框宽度
                            borderColor: 'rgba(64, 2, 134, 0.2)', //区域边框颜色
                            areaColor: "rgba(103, 193, 184)", //区域颜色
                        },
                        emphasis: {
                            borderWidth: 1,
                            borderColor: 'rgba(13, 140, 176, 1)',
                            areaColor: "#069f8a",
                        }
                    }
                },
			{
                    name: '点',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    symbol: 'pin', //气泡
				    symbolSize: 30,
                   /* symbolSize: function(val) {
                        var a = (maxSize4Pin - minSize4Pin) / (max - min);
                        var b = minSize4Pin - a * min;
                        b = maxSize4Pin - a * max;
                        return a * val[2] + b;
                    },*/
                    label: {
                        normal: {
                            show: true,
                            /*formatter: function(params) {
                                return params.data.value[2];
                            },*/
                            textStyle: {
                                color: '#fff',
                                fontSize: 9
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#F62157' //标志颜色'#F62157'
							/*color: '#fd3030' */
                        }
                    },
                    zlevel: 6,
                    data: convertData(data),
                },
			     {
								name: 'Top',
								type: 'effectScatter',
								coordinateSystem: 'geo',
								/*data: convertData(data.sort(function(a, b) {
									return b.value - a.value;
								}).slice(0, 5)),*/
			
								data:  convertData(data),
								symbolSize: 12,
								showEffectOn: 'render',
								rippleEffect: {
									brushType: 'stroke'
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
										color: '#f2fb01',

										shadowBlur: 10,
										shadowColor: '#f2fb01'//颜色'#05C3F9'
									}
								},
								zlevel: 1
							}
		]

	};
     