var uploadedDataURL = "/asset/get/s/data-1560850821493-6FG9jqvQH.geoJson";

myChart.showLoading();

$.get(uploadedDataURL, function(geoJson) {

    myChart.hideLoading();

    echarts.registerMap('chongqing', geoJson);

    myChart.setOption(option = {
        title: {
            text: '标题 ************************',
            subtext: '副标题 ***********',
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}<br/>{c} (人)'
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                dataView: {
                    readOnly: false
                },
                restore: {},
                saveAsImage: {}
            }
        },
        series: [{
            name: 'aaaa',
            type: 'map',
            zoom: 1.1,
            mapType: 'chongqing', // 自定义扩展图表类型
            itemStyle: {
                normal: {
                    borderColor: 'green',
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
            data: [{
                    name: '主城区',
                    value: 4.12
                },
                {
                    name: '渝西片区',
                    value: 1.61
                },
                {
                    name: '渝东北片区',
                    value: 1.43
                },
                {
                    name: '渝东南片区',
                    value: 1.12
                },
                {
                    name: '万州区',
                    value: 2.45
                },
                {
                    name: '黔江区',
                    value: 1.74
                },
                {
                    name: '涪陵区',
                    value: 2.17
                },
                {
                    name: '渝中区',
                    value: 11.56
                },
                {
                    name: '大渡口区',
                    value: 4.17
                },
                {
                    name: '江北区',
                    value: 5.42
                },
                {
                    name: '沙坪坝区',
                    value: 4.12
                },
                {
                    name: '九龙坡区',
                    value: 4.26
                },
                {
                    name: '南岸区',
                    value: 3.09
                },
                {
                    name: '北碚区',
                    value: 2.86
                },
                {
                    name: '綦江区',
                    value: 1.47
                },
                {
                    name: '大足区',
                    value: 1.07
                },
                {
                    name: '渝北区',
                    value: 2.83
                },
                {
                    name: '巴南区',
                    value: 2.50
                },
                {
                    name: '长寿区',
                    value: 1.60
                },
                {
                    name: '江津区',
                    value: 1.49
                },
                {
                    name: '合川区',
                    value: 1.46
                },
                {
                    name: '永川区',
                    value: 1.85
                },
                {
                    name: '南川区',
                    value: 1.71
                },
                {
                    name: '璧山区',
                    value: 2.53
                },
                {
                    name: '铜梁区',
                    value: 1.77
                },
                {
                    name: '潼南区',
                    value: 1.03
                },
                {
                    name: '荣昌区',
                    value: 1.66
                },
                {
                    name: '开州区',
                    value: 1.27
                },
                {
                    name: '梁平区',
                    value: 1.32
                },
                {
                    name: '武隆区',
                    value: 0.62
                },
                {
                    name: '城口县',
                    value: 1.35
                },
                {
                    name: '丰都县',
                    value: 1.15
                },
                {
                    name: '垫江县',
                    value: 1.47
                },
                {
                    name: '忠县',
                    value: 1.24
                },
                {
                    name: '云阳县',
                    value: 1.20
                },
                {
                    name: '奉节县',
                    value: 1.12
                },
                {
                    name: '巫山县',
                    value: 1.22
                },
                {
                    name: '巫溪县',
                    value: 1.10
                },
                {
                    name: '石柱土家族自治县',
                    value: 1.66
                },
                {
                    name: '秀山土家族苗族自治县',
                    value: 1.17
                },
                {
                    name: '酉阳土家族苗族自治县',
                    value: 0.93
                },
                {
                    name: '彭水苗族土家族自治县',
                    value: 1.10
                }
            ],
        }]
    });
});