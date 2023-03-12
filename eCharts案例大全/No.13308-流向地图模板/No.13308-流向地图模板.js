/**
 * 底部背景地图可通过bmap.mapStyle去调整
 * 飞机流向可调整
 * 线条颜色可调整 也可调控每一个线条颜色值
 * 
 */

// --------------可动态获取的外置参数------------------------——
var title = ''
var ZOOM = 12 //地图默认放大
var isEffect = true //是否要飞机动效
var lineWidth = 2 //线条宽度
var pointSymbolSize = 18 //中心店黑色小球大小
//中心点
var point = [{
    //"name": "苏州市",
    "value": ["116", "40", 50007]
}]
//红色线条
var targetInPoint = [{
    //"name": "吴中区",
    "value": ["119.01676596157351", "32.08866397987989","96"]
}, {
    //"name": "姑苏区",
    "value": ["120.625897", "31.342892", "96"]
}, {
    //"name": "太仓市",
    "value": ["121.135272", "31.465661", "96"]
}, {
    //"name": "常熟市",
    "value": ["120.765601", "31.664541", "96"]
}, {
    //"name": "张家港市",
    "value": ["120.562656", "31.880165", 10007]
}]

//蓝色线条
var targetOutPoint = [{
    //"name": "相城区\n\n",
    "value": ["120.63", "31.37", "44"]
}, {
    //"name": "吴江区",
    "value": ["120.63", "31.16", "37"]
}, {
    //"name": "工业园区",
    "value": ["120.731969", "31.315254", "37"]
}, {
    //"name": "虎丘区",
    "value": ["120.573928", "31.304053", "37"]
}, {
    //"name": "昆山市",
    "value": ["120.994418", "31.389738", "37"]
}]

//飞机路径
//var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

var planePath = 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2765496845,2902786914&fm=27&gp=0.jpg';
// --------------可动态获取的外置参数/end------------------------——


var inPoint = []
var outPoint = []
targetInPoint.forEach((item, index) => {
    targetInPoint[index]['tag'] = 'in'
    inPoint.push({
        name: point[0].name,
        toname: item.name,
        coords: [point[0].value.slice(0, 2), item.value.slice(0, 2)],
    })
})
targetOutPoint.forEach((item, index) => {
    targetOutPoint[index]['tag'] = 'out'
    outPoint.push({
        name: point[0].name,
        toname: item.name,
        coords: [point[0].value.slice(0, 2), item.value.slice(0, 2)],
    })
})
var targetPoint = [...targetInPoint, ...targetOutPoint]


function getSeries() {
    var arr = [{
            type: 'lines',
            mapType: 'china',
            coordinateSystem: 'bmap',
            zlevel: 10,
            //data: outPoint,
            data: inPoint,
            //线上面的动态特效
            effect: {
                show: isEffect,
                period: 6,
                trailLength: 0,
                //symbol: planePath,
                symbolSize: 15
            },
            lineStyle: {
                normal: {
                    width: lineWidth,
                    color: '#ff3399',
                    curveness: 0.2,
                }
            }
        }, {
            type: 'lines',
            mapType: 'china',
            coordinateSystem: 'bmap',
            zlevel: 10,
            //data: inPoint,
            data: outPoint,
            effect: {
                show: isEffect,
                period: 6,
                trailLength: 0,
                //symbol: planePath,
                symbolSize: 15
            },
            lineStyle: {
                normal: {
                    width: lineWidth,
                    color: '#ff0000',
                    curveness: 0.3,
                }
            }
        }, {
            type: 'effectScatter',
            mapType: 'china',
            coordinateSystem: 'bmap',
            zlevel: 10,
            //symbolSize: 6,
            symbolSize: function(value) {
                var v = value && value[2] //可自动以更改
                var size = parseInt(v) / 4
                if (size >= 20) return 20
                if (size <= 2) return 2
                return size
                // return 20
            },
            label: {
                normal: {
                    show: true,
                    fontWeight: 300,
                    position: 'right',
                    formatter: ' {b}',
                    textStyle: {
                        fontFamily: '宋体', //字体样式可改
                    },
                    // color:function(value){
                    //   console.log(value)
                    // }
                    // color:'yellow'
                }
            },
            rippleEffect: {
                period: 8,
                scale: 2,
                brushType: 'stroke',
            },
            showEffectOn: 'render',
            itemStyle: {
                normal: {
                    textStyle: {
                        fontWeight: 700,
                        fontStyle: 'italic',
                        fontSize: '17',
                        fontFamily: 'cursive',
                    },
                    color: function(value) {
                        switch (value.data.tag) {
                            case 'in': //可调整颜色
                                return '#00ff00'
                                break;
                            case 'out': //可调整颜色
                                return '#6666cc'
                                break;
                            default:

                        }
                    },
                }
            },
            //data: point,
            data: targetPoint,
            // data: convertData(houseData),
        },
        {
            type: 'effectScatter',
            mapType: 'china',
            coordinateSystem: 'bmap',
            zlevel: 10,
            symbolSize: pointSymbolSize,
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}',
                    textStyle: {
                        fontWeight: 600,
                        fontSize: '16',
                        fontFamily: '宋体',
                    },
                }
            },
            showEffectOn: 'render',
            rippleEffect: {
                period: 8,
                scale: 2,
                brushType: 'stroke',
            },

            itemStyle: {
                normal: {
                    color: '#414957',
                },
                //shadowBlur: 10,
            },
            // data: convertData(schoolData),
            data: point,
            //data: targetPoint,
        },
    ]
    return arr
}
option = {
    title: {
        text: title
    },
    bmap: {
        center: point[0].value.slice(0, 2),
        zoom: 12,
        roam: true,
        //地图样式的调整
        mapStyle: {
            styleJson: [{
                    "featureType": "all",
                    "elementType": "all",
                    "stylers": {
                        "lightness": 0,
                        "saturation": 40
                    }
                },
                {
                    "featureType": "highway",
                    "elementType": "labels",
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
                    "featureType": "poi",
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
                    "featureType": "label",
                    "elementType": "all",
                    "stylers": {
                        "visibility": "on"
                    }
                }
            ]
        }
    },
    // legend: {
    //     orient: 'horizontal',
    //     top: 10,
    //     icon: 'circle',
    //     itemWidth: 6,
    //     itemHeight: 6,
    //     itemGap: 6,
    //     borderRadius: 6,
    //     data: ['网外', '网内']
    // },
    series: getSeries()
}
setTimeout(init, 0)


function init() {
    initMap();
}

function getMap() {
    return myChart.getModel().getComponent('bmap').getBMap();
}

function initMap() {
    //     BMAP_NAVIGATION_CONTROL_LARGE 表示显示完整的平移缩放控件。 
    // BMAP_NAVIGATION_CONTROL_SMALL 表示显示小型的平移缩放控件。 
    // BMAP_NAVIGATION_CONTROL_PAN 表示只显示控件的平移部分功能。 
    // BMAP_NAVIGATION_CONTROL_ZOOM 表示只显示控件的缩放部分功能。
    var top_right_navigation = new BMap.NavigationControl({
        type: BMAP_NAVIGATION_CONTROL_LARGE,
        anchor: BMAP_ANCHOR_TOP_RIGHT
    });
    var map = getMap();
    map.addControl(top_right_navigation);
    map.disableDoubleClickZoom();
    
        var mapStyle = {
            features: ["road", "building", "water", "land"], //隐藏地图上的"poi",
            style: "dark"
        };
        //map.setMapStyle({ styleJson:mapStyle});
        map.setMapStyle(mapStyle);
    return map;
}