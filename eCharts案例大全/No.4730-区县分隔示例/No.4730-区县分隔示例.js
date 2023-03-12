var uploadedDataURL = "/asset/get/s/data-1607346581517-5pfOCZKKB.json";

//各个区中心点位（不需要修改）
var GeoCoordMap = {
    "黄浦区": [121.490317, 31.222771],
    "徐汇区": [121.43752, 31.179973],
    "长宁区": [121.4222, 31.218123],
    "静安区": [121.448224, 31.229003],
    "普陀区": [121.392499, 31.241701],
    "虹口区": [121.491832, 31.26097],
    "杨浦区": [121.522797, 31.270755],
    "闵行区": [121.375972, 31.111658],
    "宝山区": [121.489934, 31.398896],
    "嘉定区": [121.250333, 31.383524],
    "金山区": [121.330736, 30.724697],
    "松江区": [121.223543, 31.03047],
    "青浦区": [121.113021, 31.151209],
    "奉贤区": [121.458472, 30.912345],
    "崇明区": [121.397516, 31.626946],
    "沪南公路沿线、南汇": [121.7271, 31.0329],
    "临港": [121.8864, 30.9552],
    "11号线沿线": [121.6049, 31.1035],
    "外环高速以东、机场路": [121.7519, 31.1752],
    "12号线以北": [121.6104, 31.3196],
    "金桥、张江高科以东": [121.6187, 31.1934],
    "金桥、张江": [121.5788, 31.1928],
    "世纪公园": [121.5445, 31.1828],
    "陆家嘴": [121.5005, 31.1746]
};

var GeoCoordData = [{
        name: '静安区',
        value: (Math.random() * 100).toFixed(0)
    },
    {
        name: '黄浦区',
        value: (Math.random() * 100).toFixed(0),
        label: {
            show: true
        }
    },
    {
        name: '松江区',
        value: (Math.random() * 100).toFixed(0),
        label: {
            show: true
        }
    },
    {
        name: '徐汇区',
        value: (Math.random() * 100).toFixed(0),
        label: {
            show: true
        }
    },
    {
        name: '长宁区',
        value: (Math.random() * 100).toFixed(0),
        label: {
            show: true
        }
    },
    {
        name: '普陀区',
        value: (Math.random() * 100).toFixed(0),
        label: {
            show: true
        }
    },
    {
        name: '虹口区',
        value: (Math.random() * 100).toFixed(0)
    },
    {
        name: '杨浦区',
        value: (Math.random() * 100).toFixed(0),
        label: {
            show: true
        }
    },
    {
        name: '闵行区',
        value: (Math.random() * 100).toFixed(0),
        label: {
            show: true
        }
    },
    {
        name: '宝山区',
        value: (Math.random() * 100).toFixed(0),
        label: {
            show: true
        }
    },
    {
        name: '嘉定区',
        value: (Math.random() * 100).toFixed(0),
        label: {
            show: true
        }
    },
    {
        name: '金山区',
        value: (Math.random() * 100).toFixed(0),
        label: {
            show: true
        }
    },
    {
        name: '青浦区',
        value: (Math.random() * 100).toFixed(0),
        label: {
            show: true
        }
    },
    {
        name: '奉贤区',
        value: (Math.random() * 100).toFixed(0),
        label: {
            show: true
        }
    },
    {
        name: '崇明区',
        value: (Math.random() * 100).toFixed(0),
        label: {
            show: true
        }
    },
    {
        name: '临港',
        value: (Math.random() * 100).toFixed(0)
    },
    {
        name: '沪南公路沿线、南汇',
        value: (Math.random() * 100).toFixed(0)
    },
    {
        name: '外环高速以东、机场路',
        value: (Math.random() * 100).toFixed(0)
    },
    {
        name: '11号线沿线',
        value: (Math.random() * 100).toFixed(0)
    },
    {
        name: '金桥、张江高科以东',
        value: (Math.random() * 100).toFixed(0)
    },
    {
        name: '金桥、张江',
        value: (Math.random() * 100).toFixed(0)
    },
    {
        name: '陆家嘴',
        value: (Math.random() * 100).toFixed(0)
    },
    {
        name: '世纪公园',
        value: (Math.random() * 100).toFixed(0)
    },
    {
        name: '12号线以北',
        value: (Math.random() * 100).toFixed(0)
    }
];
GeoCoordData.sort(function(a, b) {
    return a.value - b.value;
});
var GeoCoordData_name = [];
var GeoCoordData_value = [];
for (var t = 0; t < GeoCoordData.length; t++) {
    GeoCoordData_name[t] = GeoCoordData[GeoCoordData.length - 1 - t].name;
    GeoCoordData_value[t] = GeoCoordData[GeoCoordData.length - 1 - t].value;
}
var LinesEndCoords = {
    "静安区": [GeoCoordMap['静安区'][0] + 0.3, GeoCoordMap['静安区'][1] + 0.50],
    "虹口区": [GeoCoordMap['虹口区'][0] + 0.4, GeoCoordMap['虹口区'][1] + 0.45],
    "临港": [GeoCoordMap['临港'][0] + 0.2, GeoCoordMap['临港'][1]],
    "沪南公路沿线、南汇": [GeoCoordMap['沪南公路沿线、南汇'][0] + 0.3, GeoCoordMap['沪南公路沿线、南汇'][1]],
    "外环高速以东、机场路": [GeoCoordMap['外环高速以东、机场路'][0] + 0.3, GeoCoordMap['外环高速以东、机场路'][1]],
    "11号线沿线": [GeoCoordMap['11号线沿线'][0] + 0.4, GeoCoordMap['11号线沿线'][1]],
    "金桥、张江高科以东": [GeoCoordMap['金桥、张江高科以东'][0] + 0.5, GeoCoordMap['金桥、张江高科以东'][1] + 0.30],
    "金桥、张江": [GeoCoordMap['金桥、张江'][0] + 0.5, GeoCoordMap['金桥、张江'][1] + 0.35],
    "陆家嘴": [GeoCoordMap['陆家嘴'][0] + 0.5, GeoCoordMap['陆家嘴'][1] + 0.50],
    "世纪公园": [GeoCoordMap['世纪公园'][0] + 0.5, GeoCoordMap['世纪公园'][1] + 0.45],
    "12号线以北": [GeoCoordMap['12号线以北'][0] + 0.5, GeoCoordMap['12号线以北'][1]]
};
var Lines = ["静安区", "虹口区", "临港", "沪南公路沿线、南汇", "外环高速以东、机场路", "11号线沿线", "金桥、张江高科以东", "金桥、张江", "陆家嘴", "世纪公园", "12号线以北"];

function getValue(name) {
    var res = 0;
    $(GeoCoordData).each(function(i, item) {
        if (item.name == name) {
            res = item.value;
            return false;
        }
    });
    return res;
}

function DataLines(province, data) {
    var res = [];
    province.forEach(name => {
        res.push({
            name: name,
            value: getValue(name),
            coords: [GeoCoordMap[name], LinesEndCoords[name]]
        })
    });
    return res;
}

$.getJSON(uploadedDataURL, function(SH) {
    echarts.registerMap('SH', SH);
    option = {
        title: {
            text: '上海行政区赔付率热力图',
            subtext: '演示数据'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}<br/>{c}%'
        },
        toolbox: {
            show: true,
            feature: {
                dataView: {
                    readOnly: false
                },
                restore: {},
                saveAsImage: {}
            }
        },
        visualMap: {
            min: 0,
            max: 100,
            text: ['高', '低'],
            realtime: false,
            calculable: true,
            inRange: {
                color: ['lightskyblue', 'yellow', 'orangered']
            }
        },
        grid: {
            right: '20',
            top: '20',
            width: '8%'
        },
        xAxis: {
            min: 0,
            max: 100,
            show: false
        },
        yAxis: {
            inverse: true,
            offset: '2',
            'type': 'category',
            data: GeoCoordData_name,
            nameTextStyle: {
                color: '#fff'
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    fontSize: 14,
                    color: '#000000',
                },
                interval: 0
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
        },
        geo: {
            label: {
                show: false
            },
            type: 'map',
            map: 'SH',
            roam: false,
            aspectScale: 1,
            zoom: 1.2
        },
        series: [{
                type: 'lines',
                symbol: 'arrow',
                symbolSize: [6, 6],
                zlevel: 10,
                effect: {
                    show: true,
                    period: 3,
                    loop: false
                },
                label: {
                    show: true,
                    formatter: function(item) {
                        return item.name;
                    },
                    padding: [0, 0, 0, 5],
                    color: "#666"
                },
                lineStyle: {
                    type: 'dotted',
                    opacity: 1
                },
                emphasis: {
                    lineStyle: {
                        type: 'dotted',
                        opacity: 1
                    }
                },
                data: DataLines(Lines, GeoCoordData)
            },
            {
                name: 'map',
                type: 'map',
                mapType: 'SH',
                roam: false,
                aspectScale: 1,
                zoom: 1.2,
                label: {
                    show: false,
                    formatter: function(item) {
                        return item.name;
                    }
                },
                data: GeoCoordData
            },
            {
                name: 'bar',
                type: 'bar',
                zlevel: 10,
                barWidth: '40%',
                label: {
                    show: false,
                    formatter: function(item) {
                        return item.name;
                    }
                },
                data: GeoCoordData_value,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'lightskyblue'
                        }, {
                            offset: 1,
                            color: 'orangered'
                        }], false)
                    }
                }
            }
        ]
    };
    myChart.setOption(option);
});