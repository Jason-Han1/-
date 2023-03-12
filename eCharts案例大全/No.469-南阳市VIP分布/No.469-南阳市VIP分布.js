var uploadedDataURL = '/asset/get/s/data-1622300948628-4ZHAQ--U0.json';
myChart.showLoading();
$.getJSON(uploadedDataURL, function (geoJson) {
    echarts.registerMap('nanyang', geoJson);
    myChart.hideLoading();
    var geoCoordMap = {
        内乡县: [111.843801, 33.046358],
        南召县: [112.435583, 33.488617],
        卧龙区: [112.528789, 32.989877],
        唐河县: [112.838492, 32.687892],
        宛城区: [112.544591, 32.994857],
        新野县: [112.365624, 32.524006],
        方城县: [113.010933, 33.255138],
        桐柏县: [113.406059, 32.367153],
        淅川县: [111.489026, 33.136106],
        社旗县: [112.938279, 33.056126],
        西峡县: [111.485772, 33.302981],
        邓州市: [112.092716, 32.681642],
        镇平县: [112.232722, 33.036651],
    };
    var data = [
        { name: '唐河县', value: 12 },
        { name: '西峡县', value: 6 },
        { name: '宛城区', value: 16 },
        { name: '社旗县', value: 2000 },
        { name: '新野县', value: 10 },
        { name: '南召县', value: 11 },
    ];

    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value).concat(data[i].img),
                });
            }
        }
        return res;
    };
    option = {
        title: {
            top: 20,
            text: '南阳市VIP分布',
            subtext: '南阳市VIP分布',
            textStyle: {
                color: '#000',
            },
        },
        tooltip: {
            formatter: function (params) {
                var html = '';
                html =
                    '<div>' +
                    '<div >' +
                    params.name +
                    '</div>' +
                    '<div>' +
                    '<span style="font-size:14px;font-weight:bold;">' +
                    'IVP数：' +
                    params.data.value[2] +
                    ' ' +
                    '</span>' +
                    '</div>' +
                    '</div>';
                return html;
            },
        },
        geo: {
            map: 'nanyang',
            type: 'map',
            zoom: 1,
            showLegendSymbol: true,
            label: {
                normal: {
                    show: true,
                    color: '#fff',
                },
                emphasis: {
                    show: true,
                    color: 'red',
                },
            },
            itemStyle: {
                normal: {
                    areaColor: '#3a7fd5',
                    borderColor: '#0a53e9', //线
                    shadowColor: '#092f8f', //外发光
                    shadowBlur: 20,
                },
                emphasis: {
                    areaColor: '#0a2dae', //悬浮区背景
                },
            },
        },
        series: [
            {
                name: '666',
                type: 'scatter',
                coordinateSystem: 'geo',
                symbol: 'pin',
                symbolSize: [50, 50],
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            color: '#fff',
                            fontSize: 10,
                        },
                        formatter(value) {
                            return value.data.value[2];
                        },
                    },
                },
                itemStyle: {
                    normal: {
                        color: function (val) {
                            if (val.dataIndex == '0') {
                                return 'blue';
                            } else if (val.dataIndex == '1') {
                                return 'green';
                            } else if (val.dataIndex == '2') {
                                return '#ff9900';
                            } else {
                                return 'red';
                            }
                        },
                    },
                },
                data: convertData(
                    data.sort(function (a, b) {
                        return b.value - a.value;
                    })
                ),
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke',
                },
                hoverAnimation: true,
                zlevel: 1,
            },
        ],
    };
    myChart.setOption(option);
});
