		var name_title = "2020年云梦山游客来源全国统计"
		var subname = '数据来自奇镜科技'
		var nameColor = " rgb(55, 75, 113)"
		var name_fontFamily = '等线'
		var subname_fontSize = 15
		var name_fontSize = 18
		var mapName = 'china'
		var data = [{
		        name: "河北",
		        value: 1986
		    },
		    {
		        name: "山西",
		        value: 213
		    },
		    {
		        name: "山东",
		        value: 133
		    },
		    {
		        name: "河南",
		        value: 71
		    },
		    {
		        name: "天津",
		        value: 40
		    },
		    {
		        name: "北京",
		        value: 25
		    },
		    {
		        name: "江苏",
		        value: 13
		    },
		    {
		        name: "广东",
		        value: 10
		    },
		    {
		        name: "移动",
		        value: 7
		    },
		    {
		        name: "陕西",
		        value: 6
		    },
		    {
		        name: "上海",
		        value: 6
		    },
		    {
		        name: "重庆",
		        value: 4
		    },
		    {
		        name: "四川",
		        value: 4
		    },
		    {
		        name: "广西",
		        value: 3
		    },
		    {
		        name: "云南",
		        value: 3
		    },
		    {
		        name: "浙江",
		        value: 3
		    },
		    {
		        name: "安徽",
		        value: 3
		    },
		    {
		        name: "湖北",
		        value: 2
		    },
		    {
		        name: "江西",
		        value: 2
		    },
		    {
		        name: "青海",
		        value: 2
		    },
		    {
		        name: "内蒙古",
		        value: 2
		    },
		    {
		        name: "甘肃",
		        value: 1
		    },
		    {
		        name: "福建",
		        value: 1
		    },
		    {
		        name: "黑龙江",
		        value: 1
		    },
		    {
		        name: "湖南",
		        value: 1
		    },
		    {
		        name: "吉林",
		        value: 1
		    },
		    {
		        name: "辽宁",
		        value: 1
		    },
		];
		var toolTipData = [{
		        name: "河北",
		        value: 1986
		    },
		    {
		        name: "山西",
		        value: 213
		    },
		    {
		        name: "山东",
		        value: 133
		    },
		    {
		        name: "河南",
		        value: 71
		    },
		    {
		        name: "天津",
		        value: 40
		    },
		    {
		        name: "北京",
		        value: 25
		    },
		    {
		        name: "江苏",
		        value: 13
		    },
		    {
		        name: "广东",
		        value: 10
		    },
		    {
		        name: "移动",
		        value: 7
		    },
		    {
		        name: "陕西",
		        value: 6
		    },
		    {
		        name: "重庆",
		        value: 4
		    },
		    {
		        name: "四川",
		        value: 4
		    },
		    {
		        name: "广西",
		        value: 3
		    },
		    {
		        name: "云南",
		        value: 3
		    },
		    {
		        name: "浙江",
		        value: 3
		    },
		    {
		        name: "安徽",
		        value: 3
		    },
		    {
		        name: "湖北",
		        value: 2
		    },
		    {
		        name: "江西",
		        value: 2
		    },
		    {
		        name: "青海",
		        value: 2
		    },
		    {
		        name: "内蒙古",
		        value: 2
		    },
		    {
		        name: "甘肃",
		        value: 1
		    },
		    {
		        name: "福建",
		        value: 1
		    },
		    {
		        name: "黑龙江",
		        value: 1
		    },
		    {
		        name: "湖南",
		        value: 1
		    },
		    {
		        name: "吉林",
		        value: 1
		    },
		    {
		        name: "辽宁",
		        value: 1
		    },
		];
		var geoCoordMap = {};


		/*获取地图数据*/
		myChart.showLoading();
		var mapFeatures = echarts.getMap(mapName).geoJson.features;
		myChart.hideLoading();
		mapFeatures.forEach(function(v) {
		    // 地区名称
		    var name = v.properties.name;
		    // 地区经纬度
		    geoCoordMap[name] = v.properties.cp;

		});

		var max = 6000,
		    min = 9; // todo 
		var maxSize4Pin = 35,
		    minSize4Pin = 30;

		var convertData = function(data) {
		    var res = [];
		    for (var i = 0; i < data.length; i++) {
		        var geoCoord = geoCoordMap[data[i].name];
		        if (geoCoord) {
		            res.push({
		                name: data[i].name,
		                value: geoCoord.concat(data[i].value),
		            });
		        }
		    }
		    return res;
		};
		option = {
		    title: {
		        text: name_title,
		        subtext: subname,
		        x: 'center',
		        textStyle: {
		            color: nameColor,
		            fontFamily: name_fontFamily,
		            fontSize: name_fontSize
		        },
		        subtextStyle: {
		            fontSize: subname_fontSize,
		            fontFamily: name_fontFamily
		        }
		    },
		    tooltip: {
		        trigger: 'item',
		        //  formatter: function(e, t, n) {
		        //  console.log(typeof(e.value)[2])
		        //  return e.name + "：" + (e.value[2] ? e.value[2] : 0) + '人'
		        //  }
		        formatter: function(params) {
		            if (typeof(params.value)[2] == "undefined") {
		                var toolTiphtml = ''
		                for (var i = 0; i < toolTipData.length; i++) {
		                    if (params.name == toolTipData[i].name) {
		                        toolTiphtml += toolTipData[i].name + ':' + toolTipData[i].value + '人'
		                    }
		                }
		                return toolTiphtml;
		            } else {
		                var toolTiphtml = ''
		                for (var i = 0; i < toolTipData.length; i++) {
		                    if (params.name == toolTipData[i].name) {
		                        toolTiphtml += toolTipData[i].name + ':' + toolTipData[i].value + '人'
		                    }
		                }
		                return toolTiphtml;
		            }
		        }
		    },
		    // legend: {
		    //     orient: 'vertical',
		    //     y: 'bottom',
		    //     x: 'right',
		    //     data: ['credit_pm2.5'],
		    //     textStyle: {
		    //         color: '#fff'
		    //     }
		    // },
		    visualMap: [{
		        show: true,
		        min: 1,
		        max: 300,
		        left: 'left',
		        top: 'bottom',
		        text: ['高', '低'], // 文本，默认为数值文本
		        calculable: true,
		        seriesIndex: [0],
		        inRange: {
		                color: [ '#74add1', '#ffd768', '#ff8c71', '#ff5428', '#7f1100']

		        }
		    },
		    {
		        show: true,
		        min: 1,
		        max: 300,
		        left: 'left',
		        top: 'bottom',
		        text: ['高', '低'], // 文本，默认为数值文本
		        calculable: true,
		        seriesIndex: [1],
		        inRange: {
		                color: ['#0b9df0', '#74add1', '#ffd768', '#ff8c71', '#ff5428']

		        }
		    }
		    ],
		    /*工具按钮组*/
		    toolbox: {
		        show: true,
		        orient: 'vertical',
		        left: 'right',
		        top: 'center',
		        feature: {
		            saveAsImage: {}
		        }
		    },
		    geo: {
		        show: true,
		        map: mapName,
		        label: {
		            normal: {
		                show: true
		            },
		            emphasis: {
		                show: false,
		            }
		        },
		        roam: true,
		        itemStyle: {
		            normal: {
		                areaColor: '#ffffff',
		                borderColor: '#3B5077',
		            },
		            emphasis: {
		                areaColor: '#2B91B7',
		            }
		        }
		    },
		    series: [{
		            type: 'map',
		            map: mapName,
		            geoIndex: 0,
		            aspectScale: 0.75, //长宽比
		            showLegendSymbol: false, // 存在legend时显示
		            label: {
		                normal: {
		                    show: true
		                },
		                emphasis: {
		                    show: false,
		                    textStyle: {
		                        color: '#fff'
		                    }
		                }
		            },
		            roam: true,
		            itemStyle: {
		                normal: {
		                    areaColor: '#031525',
		                    borderColor: '#3B5077',
		                },
		                emphasis: {
		                    areaColor: '#2B91B7'
		                }
		            },
		            animation: false,
		            data: data
		        },
		        {
		            name: '点',
		            type: 'scatter',
		            coordinateSystem: 'geo',
		            symbol: 'pin', //气泡
		            symbolSize: function(val) {
		                var a = (maxSize4Pin - minSize4Pin) / (max - min);
		                var b = minSize4Pin - a * min;
		                b = maxSize4Pin - a * max;
		                return a * val[2] + b;
		            },
		            label: {
		                normal: {
		                    formatter: function(obj) {
		                        return obj.data.value[2];
		                    },
		                    show: true,
		                    textStyle: {
		                        color: '#fff',
		                        fontSize: 9,
		                    }
		                }
		            },
		            itemStyle: {
		                normal: {
		                    color: '#F62157', //标志颜色
		                }
		            },
		            zlevel: 6,
		            data: convertData(data),
		        },

		    ]
		};
		myChart.setOption(option);