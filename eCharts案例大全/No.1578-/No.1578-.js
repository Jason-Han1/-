var uploadedDataURL = '/asset/get/s/data-1633144331217-KflboZvu1.json';
$.getJSON(uploadedDataURL, function (geoJson) {
    echarts.registerMap('wuwei', geoJson);
    var geoCoordMap = {
        凉州区: [102.753191, 37.912189],
        古浪县: [103.333461, 37.527981],
        天祝藏族自治县: [103.142034, 36.971678],
        民勤县: [103.187983, 38.831195],
    };
    var data = [
        { name: '凉州区', value: 12 },
        { name: '古浪县', value: 6 },
        { name: '天祝藏族自治县', value: 16 },
        { name: '民勤县', value: 2000 },
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
            text: '区域日工作量',
            subtext: '区域日工作量',
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
                    '巡检量：' +
                    params.data.value[2] +
                    ' ' +
                    '</span>' +
                    '</div>' +
                    '</div>';
                return html;
            },
        },
        geo: {
            map: 'wuwei',
            type: 'map',
            zoom: 1.2,
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
