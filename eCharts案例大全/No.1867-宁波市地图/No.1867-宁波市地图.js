var uploadedDataURL = '/asset/get/s/data-1631348115500-IVpQsgtly.json';
myChart.showLoading();
$.getJSON(uploadedDataURL, function (geoJson) {
    echarts.registerMap('ningbo', geoJson);
    myChart.hideLoading();
    var geoCoordMap = {
        下应街道: [111.843801, 33.046358],
        钟公庙街道: [111.843801, 33.046358],
        梅墟街道: [111.843801, 33.046358],
        中河街道: [111.843801, 33.046358],
        首南街道: [111.843801, 33.046358],
        潘火街道: [111.843801, 33.046358],
        百丈街道: [111.843801, 33.046358],
        东胜街道: [111.843801, 33.046358],
        明楼街道: [111.843801, 33.046358],
        白鹤街道: [111.843801, 33.046358],
        东柳街道: [111.843801, 33.046358],
        东郊街道: [111.843801, 33.046358],
        福明街道: [111.843801, 33.046358],
        新明街道: [111.843801, 33.046358],
        聚贤街道: [111.843801, 33.046358],
        瞻岐镇: [111.843801, 33.046358],
        咸祥镇: [111.843801, 33.046358],
        塘溪镇: [111.843801, 33.046358],
        东钱湖镇: [111.843801, 33.046358],
        东吴镇: [111.843801, 33.046358],
        五乡镇: [111.843801, 33.046358],
        邱隘镇: [111.843801, 33.046358],
        云龙镇: [111.843801, 33.046358],
        横溪镇: [111.843801, 33.046358],
        姜山镇: [111.843801, 33.046358],
    };
    var data = [{ name: '姜山镇', value: 12 }];

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
            map: 'ningbo',
            aspectScale: 1.3,
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
            regions: [
                {
                    name: '姜山镇',
                    itemStyle: {
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                        shadowBlur: 10,
                        borderType: [5, 10],

                        borderDashOffset: 500,
                    },
                },
            ],
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
