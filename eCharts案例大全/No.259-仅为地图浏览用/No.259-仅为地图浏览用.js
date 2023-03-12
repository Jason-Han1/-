var jsMap = '/asset/get/s/data-1639722772982-zTORvvpbw.json';
const mapJSON = $.getJSON(jsMap);
$.getJSON(jsMap, function (mapJSON) {
    echarts.registerMap('js', mapJSON);
    console.log(mapJSON);
    mapJSON.features = [mapJSON.features[0]];
    option = {
        geo: {
            map: 'js',
            layoutCenter: ['50%', '50%'],
            layoutSize: '80%',
            // silent: true,
            roam: false,
            label: {
                show: true,
                textStyle: {
                    color: '#fff',
                },
            },
            itemStyle: {
                areaColor: '#0f1874',
                borderColor: '#5ad4e6',
                shadowBlur: 10,
                borderWidth: 1,
            },
            emphasis: {
                itemStyle: {
                    // 鼠标移入颜色
                    areaColor: '#409EFF',
                    borderWidth: 0,
                },
            },
        },
        series: [],
    };
    myChart.setOption(option);
});
