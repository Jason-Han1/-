// var uploadedDataURL = "/asset/get/s/data-1519207554130-HJcFV69PG.json";

var uploadedDataURL = "/asset/get/s/data-1519188124693-rkro_O5vz.json";
// var uploadedDataURL = "/asset/get/s/data-1519004377467-ByWkioPwf.json";

myChart.showLoading();
cityname = [];
$.get(uploadedDataURL, function(geoJson) {

    myChart.hideLoading();

    echarts.registerMap('chinacity', geoJson);
    var mapFeatures = echarts.getMap('chinacity').geoJson.features;
    console.log('==========mapFeatures==============')
    console.log(mapFeatures)
    mapFeatures.forEach(function(v) {
        // 地区名称
        var name = v.properties.name;
        cityname.push(name)
    });
    console.log(cityname)
    myChart.setOption(option = {
        // backgroundColor: '#021926',
        title: {
            text: '到过的城市',
            left: 'center',
        },
        visualMap: {
            show: false,
            type: 'piecewise',
            pieces: [{
                    min: 1000,
                    max: 5000
                }, // 不指定 max，表示 max 为无限大（Infinity）。
                {
                    min: 500,
                    max: 1000
                },
                {
                    min: 100,
                    max: 500,
                },
                {
                    min: 20,
                    max: 100
                },
                {
                    min: 1,
                    max: 20
                },
                // {min:0,max: 2000},
                // {max:100}// 不指定 min，表示 min 为无限大（-Infinity）。
            ],
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}'
        },
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
                name: '',
                type: 'map',
                mapType: 'chinacity',
                label: {
                    normal: {
                        show: false
                    }
                },
                roam: true,
                itemStyle: {
                    normal: {
                        borderColor: '#F0FFFF',
                        areaColor: '#A9A9A9',
                        borderWidth: 0.5,
                        opacity: 0.3
                    }
                },
                data: [{
                        name: '平顶山市',
                        value: 1
                    },
                    {
                        name: '郑州市',
                        value: 1
                    },
                    {
                        name: '洛阳市',
                        value: 1
                    },
                    {
                        name: '开封市',
                        value: 1
                    },
                    {
                        name: '新乡市',
                        value: 1
                    },
                    {
                        name: '漯河市',
                        value: 1
                    },
                    {
                        name: '南阳市',
                        value: 1
                    },
                    {
                        name: '驻马店市',
                        value: 1
                    },
                    {
                        name: '信阳市',
                        value: 1
                    },
                    {
                        name: '武汉市',
                        value: 1
                    },
                    {
                        name: '襄樊市',
                        value: 1
                    },
                    {
                        name: '十堰市',
                        value: 1
                    },
                    {
                        name: '马鞍山市',
                        value: 1
                    },
                    {
                        name: '阜阳市',
                        value: 1
                    },
                    {
                        name: '青岛市',
                        value: 1
                    },
                    {
                        name: '西安市',
                        value: 1
                    },
                    {
                        name: '咸阳市',
                        value: 1
                    },
                    {
                        name: '宝鸡市',
                        value: 1
                    },
                    {
                        name: '廊坊市',
                        value: 1
                    },
                    {
                        name: '兰州市',
                        value: 1
                    },
                    {
                        name: '天水市',
                        value: 1
                    },
                    {
                        name: '张掖市',
                        value: 1
                    },
                    {
                        name: '酒泉市',
                        value: 1
                    },
                    {
                        name: '嘉峪关市',
                        value: 1
                    },
                    {
                        name: '平凉市',
                        value: 1
                    },
                    {
                        name: '银川市',
                        value: 1
                    },
                    {
                        name: '中卫市',
                        value: 1
                    },
                    {
                        name: '上饶市',
                        value: 1
                    },
                    {
                        name: '南京市',
                        value: 1
                    },
                    {
                        name: '无锡市',
                        value: 1
                    },
                    {
                        name: '苏州市',
                        value: 1
                    },
                    {
                        name: '杭州市',
                        value: 1
                    },
                    {
                        name: '舟山市',
                        value: 1
                    },
                    {
                        name: '泉州市',
                        value: 1
                    },
                    {
                        name: '厦门市',
                        value: 1
                    },
                    {
                        name: '广州市',
                        value: 1
                    },
                    {
                        name: '深圳市',
                        value: 1
                    },
                    {
                        name: '珠海市',
                        value: 1
                    },
                    {
                        name: '昌平区',
                        value: 1
                    },
                    {
                        name: '海淀区',
                        value: 1
                    },
                    {
                        name: '门头沟区',
                        value: 1
                    },
                    {
                        name: '石景山区',
                        value: 1
                    },
                    {
                        name: '房山区',
                        value: 1
                    },
                    {
                        name: '大兴区',
                        value: 1
                    },
                    {
                        name: '丰台区',
                        value: 1
                    },
                    {
                        name: '西城区',
                        value: 1
                    },
                    {
                        name: '东城区',
                        value: 1
                    },
                    {
                        name: '朝阳区',
                        value: 1
                    },
                    {
                        name: '通州区',
                        value: 1
                    },
                    {
                        name: '顺义区',
                        value: 1
                    },
                    {
                        name: '平谷区',
                        value: 1
                    },
                     {
                        name: '宣武区',
                        value: 1
                    },
                    {
                        name: '崇文区',
                        value: 1
                    },
                    {
                        name: '密云县',
                        value: 1
                    },
                    {
                        name: '怀柔区',
                        value: 1
                    },
                    {
                        name: '延庆县',
                        value: 1
                    },
                    {
                        name: '崇明县',
                        value: 1
                    },
                    {
                        name: '浦东新区',
                        value: 1
                    },
                    {
                        name: '南汇区',
                        value: 1
                    },
                    {
                        name: '黄浦区',
                        value: 1
                    },
                    {
                        name: '青浦区',
                        value: 1
                    },
                    {
                        name: '虹口区',
                        value: 1
                    },
                    {
                        name: '杨浦区',
                        value: 1
                    },
                    {
                        name: '静安区',
                        value: 1
                    },
                    {
                        name: '闸北区',
                        value: 1
                    },
                    {
                        name: '长宁区',
                        value: 1
                    },
                    {
                        name: '嘉定区',
                        value: 1
                    },
                    {
                        name: '闵行区',
                        value: 1
                    },
                    {
                        name: '松江区',
                        value: 1
                    },
                    {
                        name: '金山区',
                        value: 1
                    },
                    {
                        name: '奉贤区',
                        value: 1
                    },
                    {
                        name: '宝山区',
                        value: 1
                    },
                    {
                        name: '普陀区',
                        value: 1
                    },
                    {
                        name: '徐汇区',
                        value: 1
                    },
                    {
                        name: '卢湾区',
                        value: 1
                    },
                ]
            },

        ]
    });
});