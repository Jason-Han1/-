var uploadedDataURL = "/asset/get/s/data-1546417222786-o6UcdSCL-.txt";


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
        text: "",
        subtext: '',
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
            return params.name + ' : ' + params.value[2] + '次';
        }
    },
    animation: false,
    bmap: {
        center: [116.663922,39.896462],
        zoom: 14.5,
        roam: true,
        mapStyle: {
            styleJson: [{
                'featureType': 'land', //调整土地颜色
                'elementType': 'geometry',
                'stylers': {
                    'color': '#d4e4d7'
                }
            }, {
                'featureType': 'building', //调整建筑物颜色
                'elementType': 'geometry',
                'stylers': {
                    'color': '#fdffff'
                    //'visibility': 'off'
                }

            }, {
                'featureType': 'building', //调整建筑物标签是否可视
                'elementType': 'labels',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'highway', //调整高速道路颜色
                'elementType': 'geometry',
                'stylers': {
                    'color': '#fdfefc'
                }
            }, {
                'featureType': 'highway', //调整高速名字是否可视
                'elementType': 'labels',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'arterial', //调整一些干道颜色
                'elementType': 'geometry',
                'stylers': {
                    'color': '#fdfefc'
                }
            }, {
                'featureType': 'arterial',
                'elementType': 'labels',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'green',   //绿地
                'elementType': 'geometry',
                'stylers': {
                    //'visibility': 'off'
                    
                }
            }, {
                'featureType': 'water',
                'elementType': 'geometry',
                'stylers': {
                    'color': '#86b5bf'
                }
            }, {
                'featureType': 'subway', //调整地铁颜色
                'elementType': 'geometry.stroke',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'subway',
                'elementType': 'labels',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'railway',
                'elementType': 'geometry',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'railway',
                'elementType': 'labels',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'all', //调整所有的标签的边缘颜色
                'elementType': 'labels.text.stroke',
                'stylers': {
                    'color': '#313131'
                }
            }, {
                'featureType': 'all', //调整所有标签的填充颜色
                'elementType': 'labels.text.fill',
                'stylers': {
                    'color': '#FFFFFF'
                }
            }, {
                'featureType': 'manmade',
                'elementType': 'geometry',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'manmade',
                'elementType': 'labels',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'local',
                'elementType': 'geometry',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'local',
                'elementType': 'labels',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'subway',
                'elementType': 'geometry',
                'stylers': {
                    'lightness': -65
                }
            }, {
                'featureType': 'railway',
                'elementType': 'all',
                'stylers': {
                    'lightness': -40
                }
            }, {
                'featureType': 'boundary',
                'elementType': 'geometry',
                'stylers': {
                    
                    'color': '#8b8787',
                    'weight': '1',
                    'lightness': -29
                }
            }, {
                'featureType': 'label',
                'elementType': 'geometry',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'all',
                'elementType': 'labels',
                'stylers': {
                    'visibility': 'off'
                    //'color': 'fdfdf7',
                    //'weight': '1',
                    //'lightness': 0
                }
            }]
        }
    },
    visualMap: {
        min: 0,
        max: 2500,
        left: 120,
        bottom: 120,
        calculable: true,
        text: ['高', '低'],
        inRange: {
            color: ['#B3A100', '#FFE600','#FF6500', '#B34700']
        },
        textStyle: {
            color: '#000000',
        }

/*
    },
    visualMap: {
        //type: 'piecewise',
        top: '5%',
        splitNumber: 5,
        min: 0,
        max: 10,
        seriesIndex: 0,
        calculable: true,
        inRange: {
            color: ['green', '#eac736', '#d94e5d']
        },
        textStyle: {
            color: '#fff',
            formatter: 'aaaa{value}bbbb{value2}' // 范围标签显示内容。
        }
*/
    },
    series: [{
        type: 'scatter',
        coordinateSystem: 'bmap',
        symbolSize: 9,

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

;
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