var data = [
     {name: '万寿西宫', value: 49},
     {name: '定陵', value: 32},
     {name: '东四', value: 62},
     {name: '天坛', value: 23},
     {name: '农展馆', value: 43},
     {name: '官园', value: 105},
     {name: '海淀区万柳', value: 29},
     {name: '顺义新城', value: 73},
     {name: '怀柔镇', value: 63},
     {name: '昌平镇', value: 53},
     {name: '奥体中心', value: 33},
     {name: '古城', value: 13},
     {name: '中国环境科学研究院', value: 32}
];
var geoCoordMap = {
    '万寿西宫':[116.375,39.886],
    '定陵':[116.232,40.301],
    '东四':[116.396,39.93],
    '天坛':[116.413,39.886],
    '农展馆':[116.47,39.947],
    '官园':[116.365,39.937],
    '海淀区万柳':[116.306,39.973],
    '顺义新城':[116.659,40.187],
    '怀柔镇':[116.647,40.308],
    '昌平镇':[116.227,40.229],
    '奥体中心':[116.407,39.991],
    '古城':[116.502,40.11],
    '中国环境科学研究院':[116.426,40.048]
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

var uploadedDataURL = "/asset/get/s/data-1482818963027-Hko9SKJrg.json";

myChart.showLoading();
$.get(uploadedDataURL, function(chinaJson) {
    echarts.registerMap('北京', chinaJson);
    myChart.hideLoading();
    myChart.setOption({
        title: {
            text: '地图空气质量测点展示',
            subtext: '数据纯属虚构'
        },
        tooltip : {
            trigger: 'item',
            formatter: '{b}'
        },
        legend: {
            orient: 'vertical',
            y: 'bottom',
            x:'right',
            data:['pm2.5'],
            textStyle: {
                color: '#000000'
            }
        },
        geo: {
            map: '北京',
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: true
        },
        series : [{
            name: 'pm2.5',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbol: 'pin',
            symbolSize: 30,
            label: {
                normal: {
                    color: '#fff',
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: function(params) {
                        var val = params.value[2]
                        if(val <= 50) {
                            return 'green'
                        } else if (val <= 100) {
                            return 'orange'
                        } else if (val <= 200) {
                            return 'red'
                        } else {
                            return 'purple'
                        }
                    }
                }
            }
        }]
    });
});