myChart.showLoading();

$.get('https://unpkg.com/echarts@3.6.2/map/json/china-cities.json', function (json) {
    myChart.hideLoading();

    echarts.registerMap('china-cities', json); // 注册china-cities以便下面的map使用
    option = {
        series: [
            {
                name: 'china',
                type: 'map',
                map: 'china-cities'
            }
        ]
    };

    myChart.setOption(option);
});