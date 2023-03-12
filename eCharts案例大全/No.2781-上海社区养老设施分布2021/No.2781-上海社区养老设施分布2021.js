var uploadedDataURL = "/asset/get/s/data-1625818645149-0Ojbk4HcD.json";





var t_pos = {
    left: 0,
    top: 0
}

var last_point = [0, 0];
var counter = 0;
myChart.showLoading();
myChart.setOption(option = {
    title: {
        x: 'center',
        text: "上海社区型养老设施分布",
        subtext: '',
        textStyle: {
            color: '#696969',
            fontSize: 25
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
            return params.name;
        }
        
    },
    animation: true,


    bmap: {
        center: [121.4693, 31.2000],
        zoom: 11,
        roam: true,
        mapStyle: {
            styleJson: [{
                "featureType": "all",
                "elementType": "all",
                "stylers": {
                    "lightness": 15,
                    "saturation": -100
                }
            }, {
                "featureType": "highway",
                "elementType": "geometry.fill",
                "stylers": {
                    "color": "#c6c6c6"
                }
            }, {
                "featureType": "poi",
                "elementType": "labels.icon",
                "stylers": {
                    "visibility": "off"
                }
            }, {
                "featureType": "road",
                "elementType": "labels",
                "stylers": {
                    "visibility": "off"
                }
            }]
        }
    },
    visualMap: {
        type: 'piecewise',
        show: true,
        bottom: '50',
        left:"10",
        orient: 'vertical',
        backgroundColor:"rgba(255,255,255,0.8)",
        min: 0,
        max: 2000,
        seriesIndex: 0,
        calculable: true,
        pieces: [{
            max: 200, label: "助餐点", color: "#689dcd"
        },{
            max: 300, label: "社区养老服务组织", color: "#ff9900"
        },{
            max: 400, label: "日间照护中心", color: "#c062ff"
        }, {
            max: 500, label: "综合为老服务中心", color: "#cc0000"
        }],
        

    },
    series: [{
        type: 'scatter',
        coordinateSystem: 'bmap',
        symbolSize: 8,
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false
            }
        },
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

$.getJSON(uploadedDataURL, function(linedata) {

    myChart.hideLoading();
    myChart.setOption({

        visualMap: {
            max: linedata[1]
        },
        series: [{
            data: linedata[0]
        }]
    });
});