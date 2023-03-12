var uploadedDataURL = "/asset/get/s/data-1605513271700-gUdP4HnUM.json";


var points = [{
    value: [85.5901, 38.3043],
    itemStyle: {
        color: '#f00'
    }
}, {
    value: [101.0823, 30.2568],
    itemStyle: {
        color: '#0f0'
    }
}, {
    value: [107.9199, 40.46639],
    itemStyle: {
        color: '#00f'
    }
}]


myChart.showLoading();
$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('china', geoJson);
    myChart.hideLoading();

    option = {
        backgroundColor: '#fff',
        geo: {
            map: 'china',
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
                scale: 5
            }
        }]
    };

    myChart.setOption(option);
});