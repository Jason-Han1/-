var imgs = ["/asset/get/s/data-1482837966337-HJLA1R1re.jpg",

    "/asset/get/s/data-1482837970905-HJjR1AySl.jpg",

    "/asset/get/s/data-1482837974987-SJJJl0JSe.jpg",

    "/asset/get/s/data-1482837980256-ByVyeC1He.jpg",

    "/asset/get/s/data-1482837985048-B1tJl0kBe.jpg",

    "/asset/get/s/data-1482837988459-Sk3JlA1rg.jpg",

    "/asset/get/s/data-1482837991259-By1ggAyHx.jpg",

    "/asset/get/s/data-1482837994637-r17leC1re.jpg",

    "/asset/get/s/data-1482837997091-B1rlx0kBl.jpg",

    "/asset/get/s/data-1482838000573-r1KxxAkrx.jpg"
];




var startPoint = {
    x: 121.482365, 
    y: 31.236
};
// 地图自定义样式
var bmap = {
    center: [startPoint.x, startPoint.y],
    zoom: 15,
    roam: true,
    mapStyle: {
        styleJson: [{
            "featureType": "water",
            "elementType": "all",
            "stylers": {
                "color": "#044161"
            }
        }, {
            "featureType": "land",
            "elementType": "all",
            "stylers": {
                "color": "#004981"
            }
        }, {
            "featureType": "boundary",
            "elementType": "geometry",
            "stylers": {
                "color": "#064f85"
            }
        }, {
            "featureType": "railway",
            "elementType": "all",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "highway",
            "elementType": "geometry",
            "stylers": {
                "color": "#004981"
            }
        }, {
            "featureType": "highway",
            "elementType": "geometry.fill",
            "stylers": {
                "color": "#005b96",
                "lightness": 1
            }
        }, {
            "featureType": "highway",
            "elementType": "labels",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "arterial",
            "elementType": "geometry",
            "stylers": {
                "color": "#004981"
            }
        }, {
            "featureType": "arterial",
            "elementType": "geometry.fill",
            "stylers": {
                "color": "#00508b"
            }
        }, {
            "featureType": "poi",
            "elementType": "all",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "green",
            "elementType": "all",
            "stylers": {
                "color": "#056197",
                "visibility": "off"
            }
        }, {
            "featureType": "subway",
            "elementType": "all",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "manmade",
            "elementType": "all",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "local",
            "elementType": "all",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "arterial",
            "elementType": "labels",
            "stylers": {
                "visibility": "off"
            }
        }, {
            "featureType": "boundary",
            "elementType": "geometry.fill",
            "stylers": {
                "color": "#029fd4"
            }
        }, {
            "featureType": "building",
            "elementType": "all",
            "stylers": {
                "color": "#1a5787"
            }
        }, {
            "featureType": "label",
            "elementType": "all",
            "stylers": {
                "visibility": "off"
            }
        }]
    }
}

var data = [{
    name: '上海信息大楼',
    value: 282,
    img: '9.jpg'
}, {
    name: '上海环球金融中心',
    value: 492,
    img: '2.jpg'
}, {
    name: '上海中心大厦',
    value: 632,
    img: '1.jpg'
}, {
    name: '上海香港新世界大厦',
    value: 278,
    img: '10.jpg'
}, {
    name: '会德丰国际大厦',
    value: 298,
    img: '6.jpg'
}, {
    name: '恒隆广场',
    value: 288,
    img: '7.jpg'
}, {
    name: '明天广场',
    value: 285,
    img: '8.jpg'
}, {
    name: '上海世茂国际广场',
    value: 333,
    img: '5.jpg'
}, {
    name: '东方明珠广播电视塔',
    value: 467.9,
    img: '3.jpg'
}, {
    name: '金茂大厦',
    value: 420.5,
    img: '4.jpg'
}];
var geoCoordMap = {
    '上海信息大楼': [121.517318, 31.241235],
    '上海环球金融中心': [121.514175, 31.240237],
    '上海中心大厦': [121.511781, 31.239064],
    '上海香港新世界大厦': [121.479966, 31.229652],
    '会德丰国际大厦': [121.451237, 31.228197],
    '恒隆广场': [121.46013, 31.233977],
    '明天广场': [121.476317, 31.236369],
    '上海世茂国际广场': [121.482365, 31.240334],
    '东方明珠广播电视塔': [121.506271, 31.245414],
    '金茂大厦': [121.511578, 31.240468]
};

var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value),
                symbol: 'image://' + imgs[i]
            });
        }
    }
    return res;
};
option = {
    backgroundColor: '#404a59',
    title: {
        text: '上海十大高楼',
        left: 'center',
        subtext: '源码',
        sublink: 'http://data-visual.cn/datav/demo.html#../test/bmap-test2.html',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        trigger: 'item'
    },
    bmap: bmap,
    series: [{
        name: '上海十大高楼',
        type: 'scatter',
        coordinateSystem: 'bmap',
        data: convertData(data),
        symbolSize: [40, 40],
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
                color: '#ddb926'
            }
        }
    }]
};
myChart.setOption(option);

setTimeout(delay, 1000)

function delay() {
    var w=myChart.getWidth();
    var h=myChart.getHeight();
    var map = myChart.getModel().getComponent("bmap").getBMap();

    var bdary = new BMap.Boundary();
    bdary.get("中国", function(rs) { //获取行政区域 
        var co = [],coord,coord2;
        co.push([0,0]);
        co.push([0,w]);
        co.push([w,h]);
        co.push([w,0]);
        co.push([0,0]);
        for (var i = 0; i < data.length; i++) {
            coord = geoCoordMap[data[i].name]; 
            coord2 = map.pointToPixel(new BMap.Point(coord[0], coord[1]));
            co.push([coord2.x, coord2.y]);
        }
        co.push(co[5]);

        var graphic = [{
            type: 'polygon',
            id: 'polygon1',
            shape: {
                points: co
            },
            style: {
                fill: 'green'
            }
        }]
        option.graphic = graphic;
        myChart.setOption(option);
    });
};