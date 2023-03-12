//要查询的公交线路数组，可设为动态加载
var lineList = [
        "108", "112", "113", "114", "115", "118", "120", "125", "133", "138", "139", "149", "181", "183",
        "202", "268", "299",
        "319",
        "401", "403", "411", "412", "413", "416", "421", "462", "465", "466", "476",
        "601", "606", "612", "630", "636",
        "809", "818", "819", "821", "829", "842", "871", "872", "873", "886"
    ];
var lineData = new Array();
var busline=null;
var lineTag=0;
var hStep = 300 / (lineList.length - 1);
option = {
    bmap: {
        center: [106.558434, 29.568996],
        zoom: 12,
        roam: true,
        enableMapClick: false,
        mapStyle: {
            'styleJson': [{
                "featureType": "water",
                "elementType": "all",
                "stylers": {
                    "color": "#021019"
                }
            }, {
                "featureType": "highway",
                "elementType": "geometry.fill",
                "stylers": {
                    "color": "#000000"
                }
            }, {
                "featureType": "highway",
                "elementType": "geometry.stroke",
                "stylers": {
                    "color": "#147a92"
                }
            }, {
                "featureType": "arterial",
                "elementType": "geometry.fill",
                "stylers": {
                    "color": "#000000"
                }
            }, {
                "featureType": "arterial",
                "elementType": "geometry.stroke",
                "stylers": {
                    "color": "#0b3d51"
                }
            }, {
                "featureType": "local",
                "elementType": "geometry",
                "stylers": {
                    "color": "#000000"
                }
            }, {
                "featureType": "land",
                "elementType": "all",
                "stylers": {
                    "color": "#08304b"
                }
            }, {
                "featureType": "railway",
                "elementType": "geometry.fill",
                "stylers": {
                    "color": "#000000"
                }
            }, {
                "featureType": "railway",
                "elementType": "geometry.stroke",
                "stylers": {
                    "color": "#08304b"
                }
            }, {
                "featureType": "subway",
                "elementType": "geometry",
                "stylers": {
                    "lightness": -70
                }
            }, {
                "featureType": "building",
                "elementType": "geometry.fill",
                "stylers": {
                    "color": "#000000"
                }
            }, {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": {
                    "color": "#857f7f"
                }
            }, {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": {
                    "color": "#000000"
                }
            }, {
                "featureType": "building",
                "elementType": "geometry",
                "stylers": {
                    "color": "#022338"
                }
            }, {
                "featureType": "green",
                "elementType": "geometry",
                "stylers": {
                    "color": "#062032"
                }
            }, {
                "featureType": "boundary",
                "elementType": "all",
                "stylers": {
                    "color": "#1e1c1c"
                }
            }, {
                "featureType": "manmade",
                "elementType": "all",
                "stylers": {
                    "color": "#022338"
                }
            }]
        }
    },
    series: [{
        type: 'lines',
        coordinateSystem: 'bmap',
        polyline: true,
        data: lineData,
        silent: true,
        lineStyle: {
            normal: {
                opacity: 0.2,
                width: 1
            }
        },
        progressiveThreshold: 500,
        progressive: 100
    }, {
        type: 'lines',
        coordinateSystem: 'bmap',
        polyline: true,
        data: lineData,
        lineStyle: {
            normal: {
                width: 0.02
            }
        },
        effect: {
            constantSpeed: 40,
            show: true,
            trailLength: 0.02,
            symbolSize: 2
        },
        zlevel: 1
    }]
};
//动态添加查询到的线路数据
var addLineData= function(points) {
    var bPoints = new Array();
    for (var i = 0; i < points.length; i++) {
        bPoints.push([points[i].lng, points[i].lat]);
    }
    lineData.push({ "coords": bPoints, lineStyle: { "normal": { "color": echarts.color.modifyHSL('#5A94DF', Math.round(hStep * lineTag)) } } });

    var tmpOption ={
        series: [
            {
                data: lineData
            },
            {
                data: lineData
            }
        ]
    };
    myChart.setOption(tmpOption);
};
//查询线路数据
var searchBusLine = function (busName) {
    if (busline == null) {
        busline = new BMap.BusLineSearch("重庆", {
            //renderOptions: {panel: "r-result", autoViewport: false },
            onGetBusListComplete: function (result) {
                if (result) {
                    var fstLine = result.getBusListItem(0);
                    busline.getBusLine(fstLine);
                }
            },
            onGetBusLineComplete: function (e) {
                console.log(e.getPath());
                addLineData(e.getPath());
                lineTag++;
                if (lineTag < lineList.length) {
                    searchBusLine(lineList[lineTag]);
                }
            }
        });
    }
    busline.getBusList(busName);
};

$(function(){
    searchBusLine(lineList[lineTag]);
});