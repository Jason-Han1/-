var uploadedDataURL = "/asset/get/s/data-1563024396113-aWeDXq8C1.json";


var t_pos = {
    left: 0,
    top: 0
}

var last_point = [0, 0];
var counter = 0;
myChart.showLoading();
myChart.setOption(option = {
    title: {
        x: 'right',
        text: "Beijing Renting",
        subtext: 'Data collected from lianjia',
        textStyle: {
            color: '#fff',
            fontSize: 30
        }
    },
    tooltip: {
        trigger: 'item',
        transitionDuration: 0,
        position: function(point, params, dom, rect, size) {
            var least_area = 20;
            var offset_x = 30; /* 相对于point的偏移 */
            var offset_y = 30;

            /* last_point的least_area范围内不会产生新的t_pos */
            if (Math.abs(point[0] - last_point[0]) < least_area &&
                Math.abs(point[1] - last_point[1]) < least_area &&
                counter >= 2) {
                return t_pos;
            }
            if (Math.abs(point[0] - last_point[0]) >= least_area ||
                Math.abs(point[1] - last_point[1]) >= least_area) {
                counter = 0;
            }
            counter += 1;
            /* 使real_x,real_y有数值 */
            if (counter == 1) {
                t_pos.left = point[0] + offset_x;
                t_pos.top = point[1] + offset_y;
                last_point = [point[0], point[1]];
            }
            /* 此处进行修正tooltip的位置 */
            if (counter == 2) {
                var real_x = $(dom).position().left;
                var real_y = $(dom).position().top;
                t_pos.left += point[0] - real_x + offset_x;
                t_pos.top += point[1] - real_y + offset_y;
            }
            return t_pos;
        },
        formatter: function(params) {
            return params.elevation;
        }
    },
    animation: false,
    bmap: {
        center: [116.39, 39.90],
        zoom: 11,
        roam: true,
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
    visualMap: {
        show: false,
        top: 'top',
        min: 0,
        max: 6,
        seriesIndex: 0,
        calculable: true,
        inRange: {
            color: ['green', 'green', 'green','yellow', 'yellow','yellow','red']
        }

    },
    series: [{
        type: 'heatmap',
        coordinateSystem: 'bmap',
        pointSize: 8,
        blurSize: 6
    }]
});
if (!app.inNode) {
    // 添加百度地图插件
    var bmap = myChart.getModel().getComponent('bmap').getBMap();
    bmap.addControl(new BMap.MapTypeControl());
}


if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

$.getJSON(uploadedDataURL, function(data) {
    var points = [].concat.apply([], data.map(function (track) {
        return track.map(function (seg) {
            return seg.coord.concat([1]);
        });
    }));
    myChart.hideLoading();
    myChart.setOption({
        series: [{
            data: points
        }]
    });
});