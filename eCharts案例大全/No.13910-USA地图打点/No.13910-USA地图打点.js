var uploadedDataURL = "/asset/get/s/data-1461584915575-B1nfVtix.json";

myChart.showLoading();

var geoCoordMap = {
    "奥马哈":[-96.054585,41.289106],
    "盐湖城":[-111.839466,40.787618],
    "休斯顿":[-95.429077,29.843149],
    "迈哈密":[-80.23291,25.82092]
};

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

$.get(uploadedDataURL, function (usaJson) {
    myChart.hideLoading();

    echarts.registerMap('USA', usaJson, {
        Alaska: {              // 把阿拉斯加移到美国主大陆左下方
            left: -131,
            top: 25,
            width: 15
        },
        Hawaii: {
            left: -110,        // 夏威夷
            top: 28,
            width: 5
        },
        'Puerto Rico': {       // 波多黎各
            left: -76,
            top: 26,
            width: 2
        }
    });
    option = {
        title: {
            text: 'USA Population Estimates (2012)',
            subtext: 'Data from www.census.gov',
            sublink: 'http://www.census.gov/popest/data/datasets.html',
            left: 'right'
        },
        toolbox: {
            show: true,
            //orient: 'vertical',
            left: 'left',
            top: 'top',
            feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
            }
        },
        
    geo: {
        map: 'USA',
        label: {
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#111'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
        series: [
        {
            name: 'pm2.5',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData([
                {name: "奥马哈", value: 9},
                {name: "盐湖城", value: 12},
                {name: "休斯顿", value: 12},
                {name: "迈哈密", value: 12}
            ]),
            symbolSize: 12,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                emphasis: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            }
        }
    ]
    };

    myChart.setOption(option);
});