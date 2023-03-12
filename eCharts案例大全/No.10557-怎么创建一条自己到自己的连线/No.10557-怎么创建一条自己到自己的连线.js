var uploadedDataURL = "/asset/get/s/data-1519279347346-BkslpCjwf.json";

myChart.showLoading();
$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('jiangxi', geoJson);
    myChart.hideLoading();

    var linkData = [{
        "fromName": "合肥市",
        "toName": "合肥市",
        'coords': [
            [117.37, 31.386],
            [117.37, 31.386],
        ]
    }, ];
    var cityData = [{
        name: '合肥市',
        value: [117.37, 31.386]
    }, ];



    option = {
        backgroundColor: '#091c3d',
        geo: {
            show: true,
            map: 'jiangxi',
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: 'transparent',
                    borderColor: '#3fdaff',
                    borderWidth: 2,
                    shadowColor: 'rgba(63, 218, 255, 0.5)',
                },
            }
        },
        series: [{
                name: 'light',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: cityData,
                itemStyle: {
                    normal: {
                        color: '#F4E925'
                    }
                }
            },
            {
                name: '线路',
                type: 'lines',
                zlevel: 2,
                effect: {
                    show: true,
                    period: 4,
                    symbol: 'arrow',
                    symbolSize: 5,
                },
                lineStyle: {
                    normal: {
                        color: '#0fff17',
                        width: 2
                    }
                },
                data: linkData
            }

        ]
    };
    myChart.setOption(option);
});