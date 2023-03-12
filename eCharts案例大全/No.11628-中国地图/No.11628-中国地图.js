var data = [{
        name: '齐齐哈尔'
    }, {
        name: '重庆市'
    }, {
        name: '北京市'
    }, {
        name: '安徽'
    }, {
        name: '河北'
    }, {
        name: '山东'
    }, {
        name: '陕西'
    }, {
        name: '山西'
    }

];


var geoCoordMap = {
    '齐齐哈尔': [123.97, 47.33],
    '重庆市': [108.384366, 30.439702],
    '北京市': [116.4551, 40.2539],
    '安徽': [117.17, 31.52, 14],
    '河北': [114.30, 38.02, 8],
    '山东': [117.00, 36.40, 8],
    "陕西": [108.57, 34.17],
    "山西": [112.33, 37.54],

};

var dataFrom = '北京市';

var convertData = function(data) {
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

option = {
    visualMap: {
        min: 0,
        max: 100,
        left: 'left',
        top: 'bottom',
        text: ['高', '低'],
        calculable: true,
        inRange: {
            color: ['#ffffff', '#E0DAFF', '#ADBFFF', '#A1CDFF', '#54A6FF', '#248CFF']
        }
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            dataView: {
                readOnly: false
            },
            restore: {},
            saveAsImage: {}
        }
    },
    geo: {
        map: 'china',
        zoom: 1,
        label: {
            normal: {
                show: true,
                color: '#c1c4c8'
            },
            emphasis: {
                show: false,
                color: '#292929'
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#fbfbfb',
                borderColor: '#8A8A8A'

            },
            emphasis: {
                areaColor: ''
            }
        }
    },
    series: [{
            name: '',
            type: 'lines',
            zlevel: 2,
            symbol: 'circle',
            symbolSize: 2,
            effect: {
                show: true,
                period: 4, //箭头指向速度，值越小速度越快
                trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
                symbol: 'arrow', //箭头图标
                symbolSize: 5, //图标大小
            },
            lineStyle: {
                normal: {
                    color: '#5FE8F6',
                    width: 1,
                    opacity: 0.5,
                    curveness: 0.2
                }
            },
            data: data.map(function(dataItem) {
                return {
                    fromName: dataFrom,
                    toName: dataItem.name,
                    coords: [
                        geoCoordMap[dataFrom],
                        geoCoordMap[dataItem.name]
                    ]
                }
            })
        }, {
            name: '供需占比',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: 12,
            showEffectOn: 'render',
            rippleEffect: {
                scale: 5,
                brushType: 'stroke'
            },


            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#c60fff',
                    shadowBlur: 20,
                    shadowColor: '#333'
                }
            }
        },
        {
            type: 'map',
            mapType: 'china',
            geoIndex: 0,
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            data: [
                {
        name: '齐齐哈尔',
        "value": "35"
    }, {
        name: '重庆市',
        "value": "60"
    }, {
        name: '北京市',
        "value": "59"
    }, {
        name: '安徽',
        "value": "100"
    }, {
        name: '河北',
        "value": "89"
    }, {
        name: '山东',
        "value": "11"
    }, {
        name: '陕西',
        "value": "23"
    }, {
        name: '山西',
        "value": "54"
    }]
        }
    ]
};


myChart.setOption(option);