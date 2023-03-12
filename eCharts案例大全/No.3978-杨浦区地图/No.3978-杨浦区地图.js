var uploadedDataURL = "/asset/get/s/data-1614136754164-gtFXp-Vey.json";


var gdGeoCoordMap = {
    '五角场镇': [121.526334, 31.310941],
    '长白新村街道': [121.549671, 31.298968],
    '定海路街道': [121.555545, 31.285143],
    '殷行街道': [121.544765, 31.330254],
    '新江湾城街道': [121.528567, 31.335124],
    '平凉路街道': [121.525759, 31.267174],
    '大桥街道': [121.536462, 31.274097],
    '控江路街道': [121.528998, 31.281956],
    '四平路街道': [121.518641, 31.282312],
    '延吉新村街道': [121.539507, 31.290323],
    '江浦路街道': [121.523961, 31.272465],
    '长海路街道': [121.527068, 31.314377],
};

var scatterList = [];
Object.keys(gdGeoCoordMap).forEach(street => {
    var value = Math.random() * 20 + 10;
    scatterList.push({
        "name": street,
        "value": gdGeoCoordMap[street].concat(value)
    })
})
console.log(scatterList)

function showProvince() {
    var name = 'yangpu';

    $.get(uploadedDataURL, function(geoJson) {
        // console.log(typeof geoJson)

        echarts.registerMap(name, geoJson);

        myChart.setOption(option = {
            backgroundColor: '#333',
            geo: {
                map: name,
                show: true,
            },
            series: [{
                type: 'map',
                mapType: name,
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        areaColor: '#fff'
                    },
                    emphasis: {
                        areaColor: '#fff'
                    }
                },
                animation: false,
                data: []
            }, {
                type: 'effectScatter',
                coordinateSystem: 'geo',
                rippleEffect: {
                    brushType: 'stroke',
                },
                showEffectOn: 'render',
                itemStyle: {
                    normal: {
                        color: 'orange'
                    }
                },
                symbolSize: val => {
                    return val[2];
                },
                label: {
                    normal: {
                        color: '#fff',
                    },
                },
                symbol: 'circle',
                data: scatterList,
                zlevel: 1,
            }]
        });
    });
}

var currentIdx = 0;

showProvince();