var uploadedDataURL = "/asset/get/s/data-1560850821493-6FG9jqvQH.geoJson";

myChart.showLoading();

$.get(uploadedDataURL, function(geoJson) {

    myChart.hideLoading();
    echarts.registerMap('chongqing', geoJson);

    myChart.setOption(option = {
        title: {
            text: '重庆市各区县工业企业分布情况',
            subtext: 'shujulaiyuanp重庆市统计局',
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}<br/>{c} (个)'
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'lift',
            top: 'center',
            feature: {
                dataView: {
                    readOnly: false
                },
                restore: {},
                saveAsImage: {}
            }
        },
        visualMap: {
            min: 0,
            max: 410,
            text: ['High','a', 'Low'],
            realtime: false,
            calculable: true,
            inRange: {
                color: ['light green','yellow', 'red']
            }
        },
        series: [{
            name: '重庆市各区县工业企业数目',
            type: 'map',
            zoom: 1,
            mapType: 'chongqing', // 自定义扩展图表类型
            itemStyle: {
                normal: {
                    borderColor: 'white',
                },
                emphasis: {
                    label: {
                        show: true,
                        textStyle: {
                            color: 'darkslategray',
                        },
                    }
                }
            },
            data: [
                {
                    name: '万州区',
                    value: 222
                },
                {
                    name: '黔江区',
                    value: 99
                },
                {
                    name: '涪陵区',
                    value: 257
                },
                {
                    name: '渝中区',
                    value: 4
                },
                {
                    name: '大渡口区',
                    value: 71
                },
                {
                    name: '江北区',
                    value: 109
                },
                {
                    name: '沙坪坝区',
                    value: 205
                },
                {
                    name: '九龙坡区',
                    value: 409
                },
                {
                    name: '南岸区',
                    value: 229
                },
                {
                    name: '北碚区',
                    value: 249
                },
                {
                    name: '綦江区',
                    value: 296
                },
                {
                    name: '大足区',
                    value: 344
                },
                {
                    name: '渝北区',
                    value: 357
                },
                {
                    name: '巴南区',
                    value: 194
                },
                {
                    name: '长寿区',
                    value: 216
                },
                {
                    name: '江津区',
                    value: 404
                },
                {
                    name: '合川区',
                    value: 336
                },
                {
                    name: '永川区',
                    value: 1.85
                },
                {
                    name: '南川区',
                    value: 138
                },
                {
                    name: '璧山区',
                    value: 271
                },
                {
                    name: '铜梁区',
                    value: 313
                },
                {
                    name: '潼南区',
                    value: 226
                },
                {
                    name: '荣昌区',
                    value: 324
                },
                {
                    name: '开州区',
                    value: 112
                },
                {
                    name: '梁平区',
                    value: 134
                },
                {
                    name: '武隆区',
                    value:33
                },
                {
                    name: '城口县',
                    value: 5
                },
                {
                    name: '丰都县',
                    value: 88
                },
                {
                    name: '垫江县',
                    value: 140
                },
                {
                    name: '忠县',
                    value: 63
                },
                {
                    name: '云阳县',
                    value: 81
                },
                {
                    name: '奉节县',
                    value: 46
                },
                {
                    name: '巫山县',
                    value: 18
                },
                {
                    name: '巫溪县',
                    value: 15
                },
                {
                    name: '石柱土家族自治县',
                    value: 53
                },
                {
                    name: '秀山土家族苗族自治县',
                    value: 63
                },
                {
                    name: '酉阳土家族苗族自治县',
                    value: 26
                },
                {
                    name: '彭水苗族土家族自治县',
                    value: 33
                }
            ],
        }]
    });
});
