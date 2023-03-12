var geoCoordMap = {
    '北京': [116.405285, 39.904985],
    '福建': [119.306239, 26.075230],
    '贵州': [106.713478, 26.578343]
};
var data = [{
    "name": "北京",
    "value": 213
}, {
    "name": "福建",
    "value": 100
}, {
    "name": "贵州",
    "value": 50
}];

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
    title: {
        text: 'echarts 地图学习',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: function(params) {
            return params.name + ' : ' + params.value[2];
        }
    },
    visualMap: {
        min: 0,
        max: 300,
        left: 20,
        bottom: 20,
        calculable: true,
        text: ['高', '低'],
        inRange: {
            color: ['rgb(70, 240, 252)', 'rgb(250, 220, 46)', 'rgb(245, 38, 186)']
        },
        textStyle: {
            color: '#111'
        }
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        roam:true,
        itemStyle: {
            normal: {
                areaColor: 'rgb(19, 91, 153)',
                borderColor: 'rgb(9, 54, 95)'
            },
            emphasis: {
                areaColor: 'rgb(10, 105, 187)'
            }
        }
    },
    series: [{
            name: '散点测试',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: val=>{
                return parseInt(val)/6
            },
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
        },


        {
            type: 'map',
            map: 'china',
            geoIndex: 0,
            aspectScale: 0.75, 
            tooltip: {
                show: false
            }
        }
    ]
}

