		var name_title = "2020年云梦山游客来源河北省统计"
		var subname = '数据来自奇镜科技'
		var nameColor = " rgb(55, 75, 113)"
		var name_fontFamily = '等线'
		var subname_fontSize = 15
		var name_fontSize = 18
		var uploadedDataURL = "/asset/get/s/data-1526018707993-B129M3z0f.json";
		var nameMap = '河北省';
		window.dataList = [{
		        name: '邢台市',
		        value: 808
		    },
		    {
		        name: '石家庄市',
		        value: 560
		    },
		    {
		        name: '秦皇岛市',
		        value: 189
		    },
		    {
		        name: '张家口市',
		        value: 133
		    },
		    {
		        name: '衡水市',
		        value: 108
		    },
		    {
		        name: '沧州市',
		        value: 76
		    },
		    {
		        name: '邯郸市',
		        value: 70
		    },
		    {
		        name: '保定市',
		        value: 23
		    },
		    {
		        name: '唐山市',
		        value: 11
		    },
		    {
		        name: '廊坊市',
		        value: 5
		    },
		    {
		        name: '承德市',
		        value: 3
		    }
		];
		var toolTipData = [{
		        name: '邢台市',
		        value: 808
		    },
		    {
		        name: '石家庄市',
		        value: 560
		    },
		    {
		        name: '秦皇岛市',
		        value: 189
		    },
		    {
		        name: '张家口市',
		        value: 133
		    },
		    {
		        name: '衡水市',
		        value: 108
		    },
		    {
		        name: '沧州市',
		        value: 76
		    },
		    {
		        name: '邯郸市',
		        value: 70
		    },
		    {
		        name: '保定市',
		        value: 23
		    },
		    {
		        name: '唐山市',
		        value: 11
		    },
		    {
		        name: '廊坊市',
		        value: 5
		    },
		    {
		        name: '承德市',
		        value: 3
		    }
		];
		var geoCoordMap = {};
		var max = 2000,
		    min = 1; // todo 
		var maxSize4Pin = 100,
		    minSize4Pin = 40;
		var convertData = function(data) {
		    console.log('data', data)
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
		    console.log('res', res)
		    return res;
		};


		$.get(uploadedDataURL, function(gdMap) {
		    echarts.registerMap(nameMap, gdMap);
		    /*获取地图数据*/
		    myChart.showLoading();
		    var mapFeatures = echarts.getMap(nameMap).geoJson.features;
		    myChart.hideLoading();
		    mapFeatures.forEach(function(v) {
		        // 地区名称
		        var name = v.properties.name;
		        // 地区经纬度
		        geoCoordMap[name] = v.properties.cp;

		    });
		    console.log(geoCoordMap)
		    //GDP
		    var optionMap = {
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
		        backgroundColor: "#fff",
		        grid: {
		            // left:'2%',
		            right: '10%',
		            bottom: '3%',
		            width: '20%',
		            height: '50%'
		        },
		        tooltip: {
		            // triggerOn: "click",
		            // formatter: function(e, t, n) {
		            //     return '.5' == e.value ? e.name + "：" : e.seriesName +
		            //         "<br />" + e.name + "：" + (e.value ? e.value : 0) + '人'
		            // }
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
		        // visualMap: {
		        //     min: 0,
		        //     max: 1000,
		        //     left: 26,
		        //     bottom: 30,
		        //     showLabel: !0,
		        //     text: ["高", "低"],
		        //     pieces: [{
		        //         gt: 200,
		        //         label: "> 200人",
		        //         color: "#7f1100"
		        //     }, {
		        //         gte: 100,
		        //         lte: 200,
		        //         label: "100 - 200人",
		        //         color: "#ff5428"
		        //     }, {
		        //         gte: 50,
		        //         lt: 100,
		        //         label: "50 - 100人",
		        //         color: "#ff8c71"
		        //     }, {
		        //         gt: 1,
		        //         lt: 50,
		        //         label: "1 - 50人",
		        //         color: "#ffd768"
		        //     }, {
		        //         value: 0,
		        //         color: "#ffffff"
		        //     }],
		        //     show: !0
		        // },
		        visualMap:[ {
		            show: true,
		            min: 1,
		            max: 1000,
		            left: 'left',
		            top: 'bottom',
		            text: ['高', '低'], // 文本，默认为数值文本
		            calculable: true,
		            seriesIndex: [0],
		            inRange: {
		                color: [ '#74add1', '#ffd768', '#ff8c71', '#ff5428', '#7f1100']

		            },
		        },
		        {
		            show: true,
		            min: 1,
		            max: 1000,
		            left: 'left',
		            top: 'bottom',
		            text: ['高', '低'], // 文本，默认为数值文本
		            calculable: true,
		            seriesIndex: [1],
		            inRange: {
		                color: ['#0b9df0', '#74add1', '#ffd768', '#ff8c71', '#ff5428', '#7f1100']

		            },
		        }],
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
		            map: nameMap,
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
		                name: "十一游客来源",
		                type: 'map',
		                map: nameMap,
		                // aspectScale: 0.75, //长宽比
		                // left: '2%',
		                // // right: '35%',
		                // top: 10,
		                // width: '90%',
		                // height: '90%',
		                roam: false,
		                // itemStyle: {
		                //     normal: {
		                //         areaColor: '#fff',
		                //         borderColor: '#00effc',
		                //         borderWidth: 1.5,
		                //         label: {
		                //             show: true,
		                //             color: '#fff',
		                //         },

		                //         emphasis: {
		                //             label: {
		                //                 show: true
		                //             }
		                //         }
		                //     }
		                // },
		                geoIndex: 0,
		                data: window.dataList
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
		                    // return  val[2] ;
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
		                data: convertData(window.dataList),
		            },
		        ]

		    };
		    myChart.setOption(optionMap, true);
		});