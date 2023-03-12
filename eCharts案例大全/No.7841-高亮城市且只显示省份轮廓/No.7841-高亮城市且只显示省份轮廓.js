var uploadedDataURL = "/asset/get/s/data-1588835086979-SBbbLHjMg.json";

myChart.showLoading();
cityname = [];
$.get(uploadedDataURL, function(geoJson) {

    myChart.hideLoading();
    echarts.registerMap('chinacity', geoJson);
    var mapFeatures = echarts.getMap('chinacity').geoJson.features;
    mapFeatures.forEach(function(v) {
        // 地区名称
        var name = v.properties.name;
        cityname.push(name)
    });

    myChart.setOption(option = {
        title: {
            text: '高亮城市且只显示省份轮廓',
            left: 'center',
        },
        visualMap: {
            show: true,
            type: 'piecewise',
            pieces: [{
                    min: 1000,
                    max: 5000
                },
                {
                    min: 500,
                    max: 1000
                }
            ],
            showLabel: true,
            text: ['good night'], // 文本，默认为数值文本
            calculable: true,
            inRange: {
                color: ['#1488CC', '#2B32B2'] // 浅蓝
            }
        },
        geo: [{
            z: 2,
            show: true,
            map: 'chinacity',
            label: {
                normal: {
                    show: false,
                },
                emphasis: {
                    show: false,
                }
            },
            itemStyle: {
                borderColor: 'rgba(255,255,255,0)',
                areaColor: 'rgba(255,255,255,0)',
                borderWidth: 1
            },
            regions: [{
                    name: '深圳市',
                    itemStyle: {
                        borderColor: 'red',
                        borderWidth: 2
                    }
                },
                {
                    name: '郑州市',
                    itemStyle: {
                        borderColor: 'red',
                        borderWidth: 2
                    }
                }
            ],
            roam: true,
        }, {
            z: 1,
            show: true,
            map: 'china',
            label: {
                normal: {
                    show: false,
                },
                emphasis: {
                    show: false,
                }
            },
            regions: [{
                    name: '深圳市',
                    itemStyle: {
                        borderColor: 'red',
                        borderWidth: 2
                    }
                },
                {
                    name: '郑州市',
                    itemStyle: {
                        borderColor: 'red',
                        borderWidth: 2
                    }
                }
            ],
            roam: false,
        }],
        toolbox: {
            show: true,
            feature: {
                dataView: {
                    readOnly: false
                },
                restore: {},
                saveAsImage: {
                    pixelRatio: 4
                }
            }
        },
        series: [{
                geoIndex: 0,
                name: '总人口',
                type: 'map',
                mapType: 'chinacity',
                label: {
                    normal: {
                        show: false
                    }
                },
                roam: true,
                data: [{
                        name: '万州区',
                        value: 39
                    },
                    {
                        name: '云阳县',
                        value: 18
                    },
                    {
                        name: '开州区',
                        value: 16
                    },
                    {
                        name: '江北区',
                        value: 12
                    },
                    {
                        name: '忠县',
                        value: 12
                    },
                    {
                        name: '垫江县',
                        value: 11
                    },
                    {
                        name: '渝北区',
                        value: 11
                    },
                    {
                        name: '石柱县',
                        value: 10
                    },
                    {
                        name: '长寿区',
                        value: 10
                    },
                    {
                        name: '两江新区',
                        value: 10
                    },
                    {
                        name: '巫溪县',
                        value: 10
                    },
                    {
                        name: '九龙坡区',
                        value: 9
                    },
                    {
                        name: '璧山区',
                        value: 8
                    },
                    {
                        name: '合川区',
                        value: 8
                    },
                    {
                        name: '渝中区',
                        value: 7
                    },
                    {
                        name: '巫山县',
                        value: 6
                    },
                    {
                        name: '大渡口区',
                        value: 6
                    },
                    {
                        name: '丰都县',
                        value: 5
                    },
                    {
                        name: '奉节县',
                        value: 5
                    },
                    {
                        name: '大足区',
                        value: 4
                    },
                    {
                        name: '綦江区',
                        value: 4
                    },
                    {
                        name: '江津区',
                        value: 3
                    },
                    {
                        name: '南岸区',
                        value: 3
                    },
                    {
                        name: '永川区',
                        value: 3
                    },
                    {
                        name: '梁平区',
                        value: 2
                    },
                    {
                        name: '铜梁区',
                        value: 2
                    },
                    {
                        name: '潼南区',
                        value: 2
                    },
                    {
                        name: '黔江区',
                        value: 2
                    },
                    {
                        name: '荣昌区',
                        value: 2
                    },
                    {
                        name: '沙坪坝区',
                        value: 2
                    },
                    {
                        name: '涪陵区',
                        value: 1
                    },
                    {
                        name: '秀山县',
                        value: 1
                    },
                    {
                        name: '城口县',
                        value: 1
                    },
                    {
                        name: '巴南区',
                        value: 1
                    },
                    {
                        name: '武隆区',
                        value: 1
                    },
                    {
                        name: '温州市',
                        value: 241
                    },
                    {
                        name: '杭州市',
                        value: 5000
                    },
                    {
                        name: '台州市',
                        value: 95
                    },
                    {
                        name: '宁波市',
                        value: 55
                    },
                    {
                        name: '金华市',
                        value: 34
                    },
                    {
                        name: '绍兴市',
                        value: 24
                    },
                    {
                        name: '嘉兴市',
                        value: 18
                    },

                    {
                        name: '乐东市',
                        value: 1
                    }
                ]
            },

        ]
    });
});


myChart.on('georoam', function(params) {
    var option = myChart.getOption(); //获得option对象
    if (params.zoom != null && params.zoom != undefined) { //捕捉到缩放时
        option.geo[1].zoom = option.geo[0].zoom; //下层geo的缩放等级跟着上层的geo一起改变
        option.geo[1].center = option.geo[0].center; //下层的geo的中心位置随着上层geo一起改变
    } else { //捕捉到拖曳时
        option.geo[1].center = option.geo[0].center; //下层的geo的中心位置随着上层geo一起改变
    }
    myChart.setOption({ geo: option.geo }); //设置option
});