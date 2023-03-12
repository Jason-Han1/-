var uploadedDataURL = "/asset/get/s/data-1483975567865-BJOcimZIg.json";

app.title = '65k+ 飞机航线';

myChart.showLoading();

$.getJSON(uploadedDataURL, function(data) {

    myChart.hideLoading();

    function getAirportCoord(idx) {
        return [data.airports[idx][3], data.airports[idx][4]];
    }
    // var routes = data.routes.map(function (airline) {
    //     return [
    //         getAirportCoord(airline[1]),
    //         getAirportCoord(airline[2])
    //     ];
    // });
    console.log(data);
    var points = data.airports.map(function (airport) {
        return [airport[3], airport[4]];
    });

    myChart.setOption(option = {
        backgroundColor: '#003',
        geo: {
            map: 'world',
            left: 0,
            right: 0,
            silent: true,
            itemStyle: {
                normal: {
                    borderColor: '#003',
                    color: '#005'
                }
            }
        },
        series: [{
            type: 'scatter',
            coordinateSystem: 'geo',
            data: points,
            symbolSize: 3,
            // large: true,
            largeThreshold: 100,
            itemStyle: {
                normal: {
                    opacity: 0.4
                }
            },
            // 设置混合模式为叠加
            blendMode: 'lighter'
        }]
    });
});