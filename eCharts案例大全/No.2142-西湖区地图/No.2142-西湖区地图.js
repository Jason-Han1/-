var westLakeJson = '/asset/get/s/data-1629870668058-sUScloabor.json';
setTimeout(function () {
    mapInit();
}, 1000);
var mapInit = () => {
    // 这里需要这样使用地图JSON，实际开发中直接使用即可echarts.registerMap("XH", westLakeJson);
    $.getJSON(westLakeJson, function (geoJson) {
        echarts.registerMap('XH', geoJson);
        myChart.hideLoading();
        option = {
            tooltip: {
                trigger: 'item',
                formatter(value) {
                    return value.name;
                },
                show: false,
            },
            geo: {
                map: 'XH',
                geoIndex: -1,
                zoom: 1.285,
                selectedMode: false,
                aspectScale: 0.9,
                hoverAnimation: false,
                itemStyle: {
                    normal: {
                        label: { show: false },
                        borderWidth: 0,
                        borderColor: '#00a4e7',
                        areaColor: '#00a4e7',
                    },
                    emphasis: {
                        label: { show: false },
                        borderWidth: 0,
                        borderColor: '#00a4e7',
                        areaColor: '#00a4e7',
                    },
                },
            },
            series: [
                {
                    type: 'map',
                    mapType: 'XH',
                    animation: false,
                    hoverAnimation: true,
                    zoom: 1.25,
                    aspectScale: 0.9,
                    selectedMode: false,
                    itemStyle: {
                        normal: {
                            label: { show: false },
                            borderWidth: 0.5, //区域边框宽度
                            borderColor: '#00c3f1', //区域边框颜色
                            areaColor: '#1FA6ED', //区域颜色
                        },
                        emphasis: {
                            label: { show: true, color: '#fff', fontSize: '18px' },
                            borderWidth: 0.5,
                            borderColor: '#00c3f1',
                            areaColor: '#1FA6ED',
                            borderWidth: 1,
                            shadowColor: '#00c3f1',
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowOffsetY: 1,
                        },
                    },
                },
            ],
        };
        myChart.setOption(option);
    });
};
