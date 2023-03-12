var uploadedDataURL = "/asset/get/s/data-1605513321795-G3sJ_k0BO.json";


var points = [{
    value: [114.9199, 40.46639],
    itemStyle: {
        color: '#f00'
    }
}, {
    value: [115.0823, 39.1568],
    itemStyle: {
        color: '#0f0'
    }
}, {
    value: [114.1199, 38.36639],
    itemStyle: {
        color: '#00f'
    }
}]


myChart.showLoading();
$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('hebei', geoJson);
    myChart.hideLoading();

    option = {
        backgroundColor: '#fff',
        geo: {
            map: 'hebei',
            label: {
                normal: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    areaColor: '#2AB8FF'
                },
                emphasis: {
                    areaColor: '#8FF'
                }
            }
        },
        series: [{
            type: 'map',
            geoIndex: 0
        }, {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: points,
            showEffectOn: 'render',
            hoverAnimation: true,
            rippleEffect: {
                period: 2,
                scale: 5,
                brushType: 'stroke'
            }
        }]
    };

    myChart.setOption(option);
});