var uploadedDataURL = "/asset/get/s/data-1577323610294-4zYmVBYI.json";

function randomData() {
    return Math.round(Math.random() * 10000);
}

var geoCoordMap = {
    "国家级基地1": [94.12, 39.66],
    "国家级基地2": [97.20, 39.55],
    "国家级基地3": [95.28, 40.29],
    "省级基地1": [98.36, 40.19],
    "省级基地2": [97.88, 39.49],
    "省级基地3": [95.77, 40.59],
    "市级基地1": [102.66, 38.89],
    "市级基地2": [101.23, 37.79],
    "市级基地3": [99.40, 39.69]
};
// 将坐标与值对应并反映在地图上
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
function showProvince() {
    var name = 'bj';

    // myChart.showLoading();

    $.get(uploadedDataURL, function(geoJson) {

        // myChart.hideLoading();

        echarts.registerMap(name, geoJson);

        myChart.setOption(option = {
            backgroundColor: '#044060',
            title: {
                text: "北京市顺义区新能源企业地图",
                left: 'center',
                textStyle: {
                    color: '#fff'
                }
            },
            visualMap: {
                min: 0,
                max: 10000,
                left: 'left',
                top: 'bottom',
                text: ['高', '低'], // 文本，默认为数值文本
                calculable: true
            },
            series: [{
                type: 'map',
                mapType: name,
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        borderColor: '#389BB7',
                        areaColor: '#fff',
                    },
                    emphasis: {
                        areaColor: '#389BB7',
                        borderWidth: 0
                    }
                },
                animation: false,
                data: [
                    ]
                    // animationDurationUpdate: 1000,
                    // animationEasingUpdate: 'quinticInOut'
            }]
        });
    });
}

var currentIdx = 0;

showProvince();