var uploadedDataURL = '/asset/get/s/data-1640333495645-8PBGeVj3a.csv';
$.ajax({
    type: 'GET',
    url: uploadedDataURL,
    dataType: 'text',
    success: (csv) => {
        let jsonData = $.csv.toObjects(csv);
        let coordData = jsonData.map((item) => {
            return {
                name: item.ShortName,
                value: [+item.Longitude, +item.Latitude, 10],
            };
        });
        option = {
            backgroundColor: '#9c3022',
            tooltip: {
                trigger: 'item',
            },
            geo: {
                map: 'china',
                label: {
                    emphasis: {
                        show: false,
                    },
                },
                roam: true,
                itemStyle: {
                    normal: {
                        color: 'transparent',
                        borderColor: '#fff',
                    },
                },
                zlevel: 1,
            },
            series: [
                {
                    type: 'map',
                    map: 'china',
                    geoIndex: 0,
                    // silent: true,
                    zlevel: 2,
                    label: {
                        emphasis: {
                            show: false,
                        },
                    },
                    roam: true,
                    itemStyle: {
                        normal: {
                            color: '#9c3022',
                            borderWidth: 1,
                            borderColor: '#fff',
                        },
                        emphasis: {
                            color: '#000',
                            borderWidth: 1,
                            borderColor: '#fff',
                        },
                    },
                },
                {
                    name: 'point',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    zlevel: 3,
                    data: coordData,
                    symbolSize: function (val) {
                        return val[2] / 4;
                    },
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',

                            show: false,
                            textStyle: {
                                color: '#fff',
                                fontSize: 20,
                            },
                        },
                        emphasis: {
                            show: true,
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(255, 255, 255, 0.75)',
                            opacity: 1,
                        },
                    },
                    // animationDelay: function (idx) {
                    //     return idx * 10;
                    // },
                },
            ],
            // animationDelayUpdate: function (idx) {
            //     return idx * 100;
            // },
        };

        myChart.setOption(option);
    },
    error: (e) => {
        reject([]);
    },
});

function chartClickEvent(params) {
    var name = params.data.name;
    var seriesModel = myChart.getModel().getSeriesByIndex(0);
    var point = seriesModel.coordinateSystem._nameCoordMap['_ec_' + name];
    option.series[0].center = point; //[108.55,34.32]
    option.series[0].zoom = 5;

    option.geo.center = point;
    option.geo.zoom = 5;
    myChart.setOption(option);
}

function panelClickEvent() {
    option.series[0].center = null; //[108.55,34.32]
    option.series[0].zoom = null;

    option.geo.center = null;
    option.geo.zoom = null;
    myChart.setOption(option);
}

myChart.on('click', chartClickEvent);

myChart.on('mouseover', function () {
    myChart.on('click', chartClickEvent);
    $('#chart-panel').off('click');
});

myChart.on('mouseout', function () {
    myChart.off('click', chartClickEvent);
    $('#chart-panel').on('click', panelClickEvent);
});
