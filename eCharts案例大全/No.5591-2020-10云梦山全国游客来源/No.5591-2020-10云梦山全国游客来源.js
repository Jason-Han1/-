$('<div class="back">返 回</div>').appendTo(
    $('#chart-panel')
);

$('.back').css({
    'position': 'absolute',
    'left': '25px',
    'top': '25px',
    'color': 'rgb(179, 239, 255)',
    'font-size': '16px',
    cursor: 'pointer',
    'z-index': '100'
})

$('.back').click(function() {
    if (parentInfo.length === 1) {
        return;
    }
    parentInfo.pop()
    getGeoJson(parentInfo[parentInfo.length - 1].code)
})



var geoJson = {
    features: []
}

var parentInfo = [{
    cityName: '全国',
    level: 'china',
    code: 100000
}]

var timeTitle = ['10.1', '10.2', '10.3', '10.4', '10.5', '10.6', '10.7', '10.8']
getGeoJson(100000)


function getGeoJson(adcode) {
    AMapUI.loadUI(['geo/DistrictExplorer'], DistrictExplorer => {
        var districtExplorer = new DistrictExplorer()
        districtExplorer.loadAreaNode(adcode, function(error, areaNode) {
            if (error) {
                console.error(error);
                return;
            }
            let Json = areaNode.getSubFeatures()
            if (Json.length > 0) {
                geoJson.features = Json
            } else if (Json.length === 0) {
                geoJson.features = geoJson.features.filter(item => item.properties.adcode == adcode)
                if (geoJson.features.length === 0) return
            }
            getMapData()
        });
    })
}

//获取数据    拼接，获取近五年的数据
function getMapData() {
    let mapData = {},
        pointData = {}
    mapData = {
        '10.1': [{
            'name': '山西省',
            'value': 20,
            'level': 'province',
            'cityCode': 0
        }, {
            'name': '河北省',
            'value': 225,
            'level': 'province',
            'cityCode': 0
        }, {
            'name': '河南省',
            'value': 5,
            'level': 'province',
            'cityCode': 0
        }, {
            'name': '山东省',
            'value': 27,
            'level': 'province',
            'cityCode': 0
        }, {
            'name': '广东省',
            'value': 4,
            'level': 'province',
            'cityCode': 0
        }, {
            'name': '北京',
            'value': 3,
            'level': 'province',
            'cityCode': 0
        }, {
            'name': '不列颠哥伦比亚',
            'value': 1,
            'level': 'province',
            'cityCode': 0
        }, {
            'name': '湖北省',
            'value': 1,
            'level': 'province',
            'cityCode': 0
        }, {
            'name': '重庆',
            'value': 1,
            'level': 'province',
            'cityCode': 0
        }, {
            'name': '陕西省',
            'value': 1,
            'level': 'province',
            'cityCode': 0
        }, {
            'name': '广西',
            'value': 1,
            'level': 'province',
            'cityCode': 0
        }, {
            'name': '江苏省',
            'value': 1,
            'level': 'province',
            'cityCode': 0
        }, {
            'name': '江西省',
            'value': 1,
            'level': 'province',
            'cityCode': 0
        }],
        '10.2': [{
            'name': '河北省',
            'value': 294,
            'level': 'province',
            'cityCode': 0
        }, {
            'name': '河南省',
            'value': 2,
            'level': 'province',
            'cityCode': 0
        }, {
            'name': '山东省',
            'value': 7,
            'level': 'province',
            'cityCode': 0
        }, {
            'name': '南苏拉威西',
            'value': 1,
            'level': 'province',
            'cityCode': 0
        }, {
            'name': '山西省',
            'value': 41,
            'level': 'province',
            'cityCode': 0
        }, {
            'name': '江苏省',
            'value': 1,
            'level': 'province',
            'cityCode': 0
        }, {
            'name': '北京',
            'value': 5,
            'level': 'province',
            'cityCode': 0
        }, {
            'name': '陕西省',
            'value': 1,
            'level': 'province',
            'cityCode': 0
        }, {
            'name': '广东省',
            'value': 1,
            'level': 'province',
            'cityCode': 0
        }],
        '10.3': [{
            'name': '河北省',
            'value': 333,
            'level': 'province',
            'cityCode': 0
        }, {
            'name': '移动',
            'value': 4,
            'level': 'province',
            'cityCode': 0
        }, {
            'name': '河南省',
            'value': 18,
            'level': 'province',
            'cityCode': 0
        }, {
            'name': '广东省',
            'value': 3,
            'level': 'province',
            'cityCode': 0
        }, {
            'name': '山东省',
            'value': 7,
            'level': 'province',
            'cityCode': 0
        }, {
            'name': '山西省',
            'value': 34,
            'level': 'province',
            'cityCode': 0
        }, {
            'name': '天津',
            'value': 24,
            'level': 'province',
            'cityCode': 0
        }, {
            'name': '北京',
            'value': 7,
            'level': 'province',
            'cityCode': 0
        }, {
            'name': '江苏省',
            'value': 1,
            'level': 'province',
            'cityCode': 0
        }, {
            'name': '青海省',
            'value': 1,
            'level': 'province',
            'cityCode': 0
        }, {
            'name': '云南省',
            'value': 2,
            'level': 'province',
            'cityCode': 0
        }, {
            'name': '浙江省',
            'value': 1,
            'level': 'province',
            'cityCode': 0
        }, {
            'name': '四川省',
            'value': 1,
            'level': 'province',
            'cityCode': 0
        }, {
            'name': '陕西省',
            'value': 2,
            'level': 'province',
            'cityCode': 0
        }, {
            'name': '甘肃省',
            'value': 1,
            'level': 'province',
            'cityCode': 0
        }],
        '10.4': [{
                'name': '山西省',
                'value': 28,
                'level': 'province',
                'cityCode': 0
            }, {
                'name': '河北省',
                'value': 242,
                'level': 'province',
                'cityCode': 0
            }, {
                'name': '山东省',
                'value': 4,
                'level': 'province',
                'cityCode': 0
            }, {
                'name': '天津',
                'value': 6,
                'level': 'province',
                'cityCode': 0
            },
            {
                'name': '河南省',
                'value': 14,
                'level': 'province',
                'cityCode': 0
            }, {
                'name': '福建省',
                'value': 1,
                'level': 'province',
                'cityCode': 0
            }, {
                'name': '陕西省',
                'value': 1,
                'level': 'province',
                'cityCode': 0
            }, {
                'name': '江苏省',
                'value': 4,
                'level': 'province',
                'cityCode': 0
            }, {
                'name': '安徽省',
                'value': 2,
                'level': 'province',
                'cityCode': 0
            }, {
                'name': '浙江省',
                'value': 2,
                'level': 'province',
                'cityCode': 0
            }, {
                'name': '移动',
                'value': 1,
                'level': 'province',
                'cityCode': 0
            }, {
                'name': '青海省',
                'value': 1,
                'level': 'province',
                'cityCode': 0
            }, {
                'name': '四川省',
                'value': 1,
                'level': 'province',
                'cityCode': 0
            }
        ],
        '10.5': [{
                'name': '江苏省',
                'value': 3,
                'level': 'province',
                'cityCode': 0
            }, {
                'name': '河北省',
                'value': 232,
                'level': 'province',
                'cityCode': 0
            }, {
                'name': '黑龙江省',
                'value': 1,
                'level': 'province',
                'cityCode': 0
            }, {
                'name': '山西省',
                'value': 29,
                'level': 'province',
                'cityCode': 0
            },
            {
                'name': '北京',
                'value': 3,
                'level': 'province',
                'cityCode': 0
            }, {
                'name': '安徽省',
                'value': 1,
                'level': 'province',
                'cityCode': 0
            }, {
                'name': '山东省',
                'value': 6,
                'level': 'province',
                'cityCode': 0
            }, {
                'name': '重庆',
                'value': 1,
                'level': 'province',
                'cityCode': 0
            }, {
                'name': '河南省',
                'value': 18,
                'level': 'province',
                'cityCode': 0
            }, {
                'name': '内蒙古',
                'value': 1,
                'level': 'province',
                'cityCode': 0
            }
        ],
        '10.6': [{
            'name': '河北省',
            'value': 369,
            'level': 'province',
            'cityCode': 0
        }, {
            'name': '河南省',
            'value': 9,
            'level': 'province',
            'cityCode': 0
        }, {
            'name': '重庆',
            'value': 1,
            'level': 'province',
            'cityCode': 0
        }, {
            'name': '山西省',
            'value': 38,
            'level': 'province',
            'cityCode': 0
        }, {
            'name': '山东省',
            'value': 60,
            'level': 'province',
            'cityCode': 0
        }, {
            'name': '天津',
            'value': 7,
            'level': 'province',
            'cityCode': 0
        }, {
            'name': '北京',
            'value': 4,
            'level': 'province',
            'cityCode': 0
        }, {
            'name': '湖南省',
            'value': 1,
            'level': 'province',
            'cityCode': 0
        }, {
            'name': '湖北省',
            'value': 1,
            'level': 'province',
            'cityCode': 0
        }, {
            'name': '四川省',
            'value': 1,
            'level': 'province',
            'cityCode': 0
        }, {
            'name': '广东省',
            'value': 1,
            'level': 'province',
            'cityCode': 0
        }, {
            'name': '江苏省',
            'value': 2,
            'level': 'province',
            'cityCode': 0
        }, {
            'name': '陕西省',
            'value': 1,
            'level': 'province',
            'cityCode': 0
        }, {
            'name': '江西省',
            'value': 1,
            'level': 'province',
            'cityCode': 0
        }, {
            'name': '吉林省',
            'value': 1,
            'level': 'province',
            'cityCode': 0
        }, {
            'name': '广西',
            'value': 1,
            'level': 'province',
            'cityCode': 0
        }, {
            'name': '辽宁省',
            'value': 1,
            'level': 'province',
            'cityCode': 0
        }],
        '10.7': [{
                'name': '河北省',
                'value': 186,
                'level': 'province',
                'cityCode': 0
            }, {
                'name': '山东省',
                'value': 14,
                'level': 'province',
                'cityCode': 0
            },
            {
                'name': '天津',
                'value': 2,
                'level': 'province',
                'cityCode': 0
            }, {
                'name': '江苏省',
                'value': 1,
                'level': 'province',
                'cityCode': 0
            }, {
                'name': '广东省',
                'value': 1,
                'level': 'province',
                'cityCode': 0
            }, {
                'name': '山西省',
                'value': 12,
                'level': 'province',
                'cityCode': 0
            }, {
                'name': '河南省',
                'value': 3,
                'level': 'province',
                'cityCode': 0
            }, {
                'name': '广西',
                'value': 1,
                'level': 'province',
                'cityCode': 0
            }, {
                'name': '北京',
                'value': 1,
                'level': 'province',
                'cityCode': 0
            }, {
                'name': '移动',
                'value': 1,
                'level': 'province',
                'cityCode': 0
            }, {
                'name': '云南省',
                'value': 1,
                'level': 'province',
                'cityCode': 0
            }
        ],
        '10.8': [{
                'name': '河北省',
                'value': 105,
                'level': 'province',
                'cityCode': 0
            },
            {
                'name': '山东省',
                'value': 8,
                'level': 'province',
                'cityCode': 0
            }, {
                'name': '北京',
                'value': 2,
                'level': 'province',
                'cityCode': 0
            }, {
                'name': '重庆',
                'value': 1,
                'level': 'province',
                'cityCode': 0
            }, {
                'name': '内蒙古',
                'value': 1,
                'level': 'province',
                'cityCode': 0
            }, {
                'name': '山西省',
                'value': 11,
                'level': 'province',
                'cityCode': 0
            }, {
                'name': '河南省',
                'value': 2,
                'level': 'province',
                'cityCode': 0
            }, {
                'name': '四川省',
                'value': 1,
                'level': 'province',
                'cityCode': 0
            }, {
                'name': '移动',
                'value': 1,
                'level': 'province',
                'cityCode': 0
            }, {
                'name': '天津',
                'value': 1,
                'level': 'province',
                'cityCode': 0
            }
        ]
    }

    for (let i = 0; i < timeTitle.length; i++) {
        // mapData[timeTitle[i]] = []
        pointData[timeTitle[i]] = []
        for (let j = 0; j < geoJson.features.length; j++) {
            let value = Math.random() * 3000
            // mapData[timeTitle[i]].push({
            //     name: geoJson.features[j].properties.name,
            //     value: value,
            //     level: geoJson.features[j].properties.level,
            //     cityCode: geoJson.features[j].properties.adcode
            // })
            console.log(mapData[timeTitle[i]])
            console.log(geoJson.features[j].properties.name, )
            pointData[timeTitle[i]].push({
                name: geoJson.features[j].properties.name,
                value: [geoJson.features[j].properties.center[0], geoJson.features[j].properties.center[1], value],
                cityCode: geoJson.features[j].properties.adcode
            })

        }
        // mapData[timeTitle[i]] = mapData[timeTitle[i]].sort(function(a, b) {
        //     return b.value - a.value
        // });
    }

    // console.log(JSON.stringify(mapData))
    // console.log('s',sum)
    // console.log('p',pointData)
    initEchartMap(mapData, pointData)
}


//渲染echarts
function initEchartMap(mapData, pointData) {

    //这里做个切换，全国的时候才显示南海诸岛  只有当注册的名字为china的时候才会显示南海诸岛
    if (parentInfo.length === 1) {
        echarts.registerMap('china', geoJson); //注册
    } else {
        echarts.registerMap('map', geoJson); //注册
    }

    var option = {
        timeline: {
            data: timeTitle,
            axisType: 'category',
            autoPlay: true,
            playInterval: 3000,
            left: '10%',
            right: '10%',
            bottom: '2%',
            width: '80%',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgb(179, 239, 255)'
                    }
                },
                emphasis: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            symbolSize: 10,
            lineStyle: {
                color: '#8df4f4'
            },
            checkpointStyle: {
                borderColor: '#8df4f4',
                color: '#53D9FF',
                borderWidth: 2,
            },
            controlStyle: {
                showNextBtn: true,
                showPrevBtn: true,
                normal: {
                    color: '#53D9FF',
                    borderColor: '#53D9FF'
                },
                emphasis: {
                    color: 'rgb(58,115,192)',
                    borderColor: 'rgb(58,115,192)'
                }
            },

        },
        baseOption: {
            animation: true,
            animationDuration: 900,
            animationEasing: 'cubicInOut',
            animationDurationUpdate: 900,
            animationEasingUpdate: 'cubicInOut',
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
            },
            grid: {
                right: '2%',
                top: '12%',
                bottom: '8%',
                width: '20%'
            },
            toolbox: {
                feature: {
                    restore: {
                        show: false
                    },
                    dataView: {
                        optionToContent: function(opt) {
                            let series = opt.series[0].data //折线图数据
                            let tdHeads = '<th  style="padding: 0 20px">所在地区</th><th style="padding: 0 20px">销售额</th>' //表头
                            let tdBodys = '' //数据
                            let table = `<table border="1" style="margin-left:20px;border-collapse:collapse;font-size:14px;text-align:left;"><tbody><tr>${tdHeads} </tr>`
                            for (let i = 0; i < series.length; i++) {
                                table += `<tr>
                              <td style="padding: 0 50px">${series[i].name}</td>
                              <td style="padding: 0 50px">${series[i].value}万</td>
                              </tr>`
                            }
                            table += '</tbody></table>'
                            return table
                        }
                    },
                    saveAsImage: {
                        name: parentInfo[parentInfo.length - 1].cityName + '销售额统计图'
                    },
                    dataZoom: {
                        show: false
                    },
                    magicType: {
                        show: false
                    }
                },
                iconStyle: {
                    normal: {
                        borderColor: '#1990DA'
                    }
                },
                top: 15,
                right: 35
            },
            geo: {
                map: parentInfo.length === 1 ? 'china' : 'map',
                zoom: 1.1,
                roam: true,
                center: parentInfo.length === 1 ? ['118.83531246', '32.0267395887'] : false,
                tooltip: {
                    trigger: 'item',
                    formatter: (p) => {
                        let val = p.value[2];
                        if (window.isNaN(val)) {
                            val = 0;
                        }
                        let txtCon =
                            "<div style='text-align:left'>" + p.name + ":<br />销售额：" + val + '万</div>';
                        return txtCon;
                    }
                },
                label: {
                    normal: {
                        show: true,
                        color: "rgb(249, 249, 249)", //省份标签字体颜色
                        formatter: p => {
                            switch (p.name) {
                                case '内蒙古自治区':
                                    p.name = "内蒙古"
                                    break;
                                case '西藏自治区':
                                    p.name = "西藏"
                                    break;
                                case '新疆维吾尔自治区':
                                    p.name = "新疆"
                                    break;
                                case '宁夏回族自治区':
                                    p.name = "宁夏"
                                    break;
                                case '广西壮族自治区':
                                    p.name = "广西"
                                    break;
                                case '香港特别行政区':
                                    p.name = "香港"
                                    break;
                                case '澳门特别行政区':
                                    p.name = "澳门"
                                    break;
                                default:
                                    break;
                            }
                            return p.name;
                        }
                    },
                    emphasis: {
                        show: true,
                        color: '#f75a00',
                    }
                },
                itemStyle: {
                    normal: {
                        areaColor: '#24CFF4',
                        borderColor: '#53D9FF',
                        borderWidth: 1.3,
                        shadowBlur: 15,
                        shadowColor: 'rgb(58,115,192)',
                        shadowOffsetX: 7,
                        shadowOffsetY: 6,
                    },
                    emphasis: {
                        areaColor: '#8dd7fc',
                        borderWidth: 1.6,
                        shadowBlur: 25,
                    }

                },
            },

        },
        options: []
    }

    timeTitle.forEach(item => {
        var xData = [],
            yData = []
        var min = mapData[item][mapData[item].length - 1].value
        var max = mapData[item][0].value
        if (mapData[item].length === 1) {
            min = 0
        }
        mapData[item].forEach(c => {
            xData.unshift(c.name)
            yData.unshift(c.value)
        })
        option.options.push({
            backgroundColor: '#012248',
            title: [{
                    left: 'center',
                    top: 10,
                    text: item + parentInfo[parentInfo.length - 1].cityName + '游客来源',
                    textStyle: {
                        color: 'rgb(179, 239, 255)',
                        fontSize: 16
                    },
                },

            ],
            visualMap: {
                min: min,
                max: max,
                left: '3%',
                bottom: '5%',
                calculable: true,
                seriesIndex: [0],
                inRange: {
                    color: ['#24CFF4', '#2E98CA', '#1E62AC']
                },
                textStyle: {
                    color: '#24CFF4'
                }
            },
            xAxis: {
                type: 'value',
                scale: true,
                position: 'top',
                boundaryGap: false,
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#455B77'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    margin: 2,
                    textStyle: {
                        color: '#c0e6f9'
                    }
                },
            },
            yAxis: {
                type: 'category',
                nameGap: 16,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#455B77'
                    }
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        color: '#c0e6f9'
                    }
                },
                data: xData
            },
            series: [{
                    name: item + '游客来源',
                    type: 'map',
                    geoIndex: 0,
                    map: parentInfo.length === 1 ? 'china' : 'map',
                    roam: true,
                    zoom: 1.3,
                    tooltip: {
                        trigger: "item",
                        formatter: p => {
                            let val = p.value;
                            if (p.name == '南海诸岛') return
                            if (window.isNaN(val)) {
                                val = 0;
                            }
                            let txtCon =
                                "<div style='text-align:left'>" + p.name + ":" + val + '人</div>';
                            return txtCon;
                        }
                    },
                    label: {
                        normal: {
                            show: false,
                        },
                        emphasis: {
                            show: false,
                        }
                    },
                    data: mapData[item],

                }, {
                    name: '散点',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    rippleEffect: {
                        brushType: 'fill'
                    },
                    itemStyle: {
                        normal: {
                            color: '#F4E925',
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    // data: pointData[item],
                    // symbolSize: 8,
                    symbolSize: function(val) {
                        let value = val[2]
                        if (value == max) {
                            return 27
                        }
                        return 10
                    },
                    showEffectOn: 'render', //加载完毕显示特效
                },
                {
                    type: 'bar',
                    barGap: '-100%',
                    barCategoryGap: '60%',
                    itemStyle: {
                        normal: {
                            color: '#11AAFE'
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    data: yData
                }

            ]
        })
    })

    myChart.setOption(option, true)


    //点击前解绑，防止点击事件触发多次
    myChart.off('click');
    myChart.on('click', echartsMapClick);
}

//echarts点击事件
function echartsMapClick(params) {
    if (!params.data) {
        return
    } else {
        //如果当前是最后一级，那就直接return
        if (parentInfo[parentInfo.length - 1].code == params.data.cityCode) {
            return
        }
        let data = params.data
        parentInfo.push({
            cityName: data.name,
            level: data.level,
            code: data.cityCode
        })
        getGeoJson(data.cityCode)
    }
}