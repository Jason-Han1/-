var uploadedDataURL = "/asset/get/s/data-1558504999148-FYury9CCf.json";
var target = '乌鲁木齐市'; //目标点城市名称
var data = [ //城市数据
    {
        "name": "乌鲁木齐市",
        "value": "20.18"
    },
    {
        "name": "巴音郭楞蒙古自治州",
        "value": "10.18"
    },
    {
        "name": "克拉玛依市",
        "value": "30.18"
    },
    {
        "name": "克孜勒苏柯尔克孜自治州",
        "value": "40.18"
    },
    {
        "name": "哈密市",
        "value": "50.18"
    },
    {
        "name": "和田地区",
        "value": "0.18"
    },
    {
        "name": "博尔塔拉蒙古自治州",
        "value": "80.18"
    }
]
var chart = echarts.init(document.getElementById('chart-panel'));
//根据数值获取颜色
var getColor = function(value) {
    if (value <= 20) {
        return '#00ffff';
    } else if (value <= 40) {
        return '#00ff00';
    } else if (value <= 60) {
        return '#ffff00'
    } else if (value <= 80) {
        return '#ffa500';
    } else if (value <= 100) {
        return '#ff3333';
    } else {
        return '#ddd';
    }
}
var geoJson; //地图json
$.ajax({
    url: uploadedDataURL,
    dataType: 'json',
    success: function(json) {
        geoJson = json;
        echarts.registerMap('XJ', json);

        //点击点位时切换目标点位
        chart.on('click', function(obj) {
            if (obj.seriesName == 'city') {
                target = obj.data.name;
                setData();
            }
        });
        setData();
    }
});

function setData() {
    var pointData = []; //点位数据
    var lineData = []; //连线数据
    var center = []; //目标点坐标
    var features = geoJson.features;
    var targetCoord; //目标点坐标
    //获取目标点坐标
    $.each(features, function(i, v) {
        if (target == v.properties.name) {
            targetCoord = v.properties.center;
            return false;
        }
    });
    //匹配点位坐标 和 连线的坐标
    $.each(data, function(i, v) {
        $.each(features, function(j, val) {
            if (val.properties.name === v.name) {
                if (v.name !== target) {
                    //debugger;
                    lineData.push({
                        coords: [
                            val.properties.center,
                            targetCoord
                        ],
                        lineStyle: {
                            color: getColor(v.value)
                        }
                    });
                }
                pointData.push({
                    name: v.name,
                    value: val.properties.center.concat(v.name, v.value)
                });
                return false;
            }
        });
    });

    var option = {
        backgroundColor: '#162838',
        tooltip: {
            trigger: 'item'
        },
        geo: { //地图
            show: true,
            map: 'XJ',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false,
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#001425',
                    borderColor: '#999',
                    borderWidth: 2,
                },
                emphasis: {
                    areaColor: '#001425',
                }
            }
        },
        series: [{ //城市点位
                name: 'city',
                type: 'scatter',
                coordinateSystem: 'geo',
                symbol: 'circle',
                symbolSize: function(v) {
                    if (v[2] == target) { //目标点放大
                        return 25;
                    } else {
                        return 15;
                    }
                },
                itemStyle: {
                    normal: {
                        color: function(obj) { //标志颜色
                            return getColor(obj.data.value[3]);
                        }
                    }
                },
                zlevel: 9,
                data: pointData,
                tooltip: {
                    formatter: function(obj) {
                        var label = obj.data.name == target ? '本地排放：' : '区域输送：';
                        var str = obj.data.name + '<br/>' + label + obj.data.value[3];
                        return str;
                    }
                }
            },
            { //城市点位的涟漪效果
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: pointData,
                symbolSize: 5,
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke',
                    scale: 10
                },
                hoverAnimation: false,
                itemStyle: {
                    normal: {
                        color: function(obj) { //标志颜色
                            return getColor(obj.value[3]);
                        },
                        shadowBlur: 20,
                    }
                },
                zlevel: 5,
                label: {
                    normal: {
                        show: true,
                        position: 'bottom',
                        offset: [0, 10],
                        formatter: function(value) {
                            return value.name
                        },
                        textStyle: {
                            color: '#fff',
                            fontSize: 12,
                        }
                    }
                },
            }, { //连线的尾部效果
                type: 'lines',
                zlevel: 1,
                effect: {
                    symbol: 'arrow',
                    show: true,
                    period: 6,
                    trailLength: 0.5,
                    color: '#fff',
                    symbolSize: 8
                },
                lineStyle: {
                    normal: {
                        color: '#c2f555',
                        width: 0,
                        curveness: 0.2
                    }
                },
                data: lineData
            }, { //连线的线条和箭头
                type: 'lines',
                zlevel: 2,
                symbol: 'none',
                symbolSize: 10,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0,
                    symbol: 'arrow',
                    symbolSize: 15
                },
                lineStyle: {
                    normal: {
                        color: '#c2f555',
                        width: 3,
                        opacity: 0.6,
                        curveness: 0.2
                    }
                },
                data: lineData
            }
        ]
    };
    chart.setOption(option);
}