function area(name, color) {
    var a = {
        name: name,
        selected: true,
        itemStyle: {
            emphasis: {
                areaColor: color,
                borderColor: '#f47920',
                borderWidth: 1
            }
        }
    };
    return a;
}

var geodata = [{
    name: '靖边',
    value: [108.848154, 37.599114]
}, {
    name: '榆林',
    value: [109.65821, 38.255808]
}, {
    name: '神木',
    value: [110.438658, 38.894441]
}, {
    name: '府谷',
    value: [111.077964, 39.070349]
}, {
    name: '神池',
    value: [112.238718, 39.148737]
}, {
    name: '应县',
    value: [113.200265, 39.479177]
}, {
    name: '灵丘',
    value: [114.210391, 39.432378]
}, {
    name: '易县',
    value: [115.503376, 39.374839]
}, {
    name: '琉璃河',
    value: [115.997552, 39.596328]
}, {
    name: '乌审旗',
    value: [109.001369, 38.633362]
}, {
    name: '鄂尔多斯',
    value: [109.537765, 39.55271]
}, {
    name: '托克托',
    value: [111.194241, 40.295713]
}, {
    name: '乌兰察布',
    value: [113.191641, 40.774453]
}, {
    name: '张家口',
    value: [114.858896, 40.692231]
}, {
    name: '高丽营',
    value: [116.482457, 40.170625]
}, {
    name: '兴县',
    value: [111.137755, 38.46902]
}, {
    name: '临县',
    value: [110.954357, 38.13012]
}, {
    name: '静乐',
    value: [111.939475, 38.344554]
}, {
    name: '太原',
    value: [112.748956, 38.110078]
}, {
    name: '石家庄',
    value: [114.62318, 38.178981]
}, {
    name: '肃宁',
    value: [115.929963, 38.375224]
}, {
    name: '永清',
    value: [116.486518, 39.34534]
}, {
    name: '克什克腾旗',
    value: [117.113715, 43.177816]
}, {
    name: '古北口',
    value: [117.097042, 40.535541]
}, {
    name: '曹妃甸LNG',
    value: [118.504184, 39.100286]
}, {
    name: '大港LNG',
    value: [117.606453, 38.720486]
}, {
    name: '唐山',
    value: [118.027004, 39.739306]
}, ];
var geodata1 = [{
    name: '深圳市',
    value: [114.07, 22.62]
}];

//var geoCoordMap = {
//'靖边': [108.848154, 37.599114],
//'榆林': [109.65821, 38.255808],
//'神木': [110.438658, 38.894441],
//'府谷': [111.077964, 39.070349],
//'神池': [112.238718, 39.148737],
//'应县': [113.200265, 39.479177],
//'浑源': [113.684343, 39.669611],
//'灵丘': [114.210391, 39.432378],
//'紫荆关': [115.172225, 39.429703],
//'易县': [115.503376, 39.374839],
//'涿州': [115.948936, 39.516705],
//'琉璃河': [115.997552, 39.596328],
//'衙门口': [116.220278, 39.89721],
//'红墩界': [108.935541, 38.01877],
//'兴县': [111.137755, 38.46902],
//'界河口': [111.399342, 38.537241],
//'静乐': [111.939475, 38.344554],
//'太原': [112.748956, 38.110078],
//'孟县': [113.414708, 38.10917],
//'石家庄': [114.62318, 38.178981],
//'安平': [115.466582, 38.271957],
//'肃宁': [115.929963, 38.375224],
//'任丘': [116.073441, 38.732519],
//'永清': [116.486518, 39.34534],
//'临县': [110.954357, 38.13012],
//'岚县': [111.645406, 38.309284],
//'乌审旗': [109.001369, 38.633362],
//'鄂尔多斯': [109.537765, 39.55271],
//'托克托': [111.194241, 40.295713],
//'乌兰察布': [113.191641, 40.774453],
//'张家口': [114.858896, 40.692231],
//'延庆': [115.921915, 40.467679],
//'高丽营': [116.482457, 40.170625],
//};

option = {
    backgroundColor: '#404a59',
    title: {
        text: '北京天然气供应',
        //subtext: '数据纯属虚构',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },

    legend: {
        x: '50%',
        top: '90%',
        zlevel: 1,
        selectedMode: 'multiple',
        selected: {
            '陕京一线':false,
            '陕京二线':false,
            '陕京三线':false,
            '陕京四线':false,
            '大唐煤制气':false,
            'LNG':false,
            
        },
        textStyle: {
            color: '#ffffff'
        },
        data: ['陕京一线', '陕京二线', '陕京三线', '陕京四线', '大唐煤制气', 'LNG']
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: true,
                color: '#fff'
            }
        },
        roam: true,
        center: [114.210391, 39.432378],
        zoom: 5,
        scaleLimit: {
            min: 4,
            max: 10,
        },
        //zlevel: 0,
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#404a59'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        },
        regions: [area('北京', '#694d9f'),
            area('河北', '#45224a'),
            area('内蒙古', '#45224a'),
            area('山西', '#45224a'),
            area('陕西', '#45224a'),
            area('天津', '#45224a'),
        ]

    },
    series: [{
        name: '陕京一线',
        type: 'lines',
        coordinateSystem: 'geo',
        //polyline:true,
        symbol: ['none', 'triangle'],
        zlevel: 2,
        effect: {
            show: true,
            symbol: 'roundRect',
            period: 2,
            delay: 100,
            trailLength: 0.6,
            symbolSize: 6,
        },
        lineStyle: {
            normal: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#ed1941'
                    }, {
                        offset: 1,
                        color: '#ffce7b'
                    }],
                    globalCoord: false
                },
                width: 1,
                opacity: 0.8,
                //type: 'dotted',
                curveness: 0.2,
            }
        },
        data: [{
            coords: [ //靖边-榆林
                [108.848154, 37.599114],
                [109.65821, 38.255808],
            ]
        }, {
            coords: [ //榆林-神木
                [109.65821, 38.255808],
                [110.438658, 38.894441],
            ]
        }, {
            coords: [ //神木-府谷
                [110.438658, 38.894441],
                [111.077964, 39.070349],
            ]
        }, {
            coords: [ //府谷-神池
                [111.077964, 39.070349],
                [112.238718, 39.148737],
            ]
        }, {
            coords: [ //神池-应县
                [112.238718, 39.148737],
                [113.200265, 39.479177],
            ]
        }, {
            coords: [ //应县-浑源
                [113.200265, 39.479177],
                [113.684343, 39.669611],
            ]
        }, {
            coords: [ //浑源-灵丘
                [113.684343, 39.669611],
                [114.210391, 39.432378],
            ]
        }, {
            coords: [ //灵丘-紫荆关
                [114.210391, 39.432378],
                [115.172225, 39.429703],
            ]
        }, {
            coords: [ //紫荆关-易县
                [115.172225, 39.429703],
                [115.503376, 39.374839],
            ]
        }, {
            coords: [ //易县-涿州
                [115.503376, 39.374839],
                [115.948936, 39.516705],
            ]
        }, {
            coords: [ //涿州-琉璃河
                [115.948936, 39.516705],
                [115.997552, 39.596328],
            ]
        }, {
            coords: [ //琉璃河-衙门口
                [115.997552, 39.596328],
                [116.220278, 39.89721],
            ]
        }, ]
    }, {
        name: '陕京二线',
        type: 'lines',
        coordinateSystem: 'geo',
        //polyline:true,
        symbol: ['none', 'triangle'],
        zlevel: 2,
        effect: {
            show: true,
            symbol: 'roundRect',
            period: 1.5,
            delay: 100,
            trailLength: 0.6,
            symbolSize: 6,
        },
        lineStyle: {
            normal: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#ed1941'
                    }, {
                        offset: 1,
                        color: '#ffce7b'
                    }],
                    globalCoord: false
                },
                width: 1,
                opacity: 0.8,
                //type: 'dotted',
                curveness: 0.2,
            }
        },
        data: [{
            coords: [ //靖边-榆林
                [108.848154, 37.599114],
                [109.65821, 38.255808],
            ]
        }, {
            coords: [ //榆林-兴县
                [109.65821, 38.255808],
                [111.137755, 38.46902],
            ]
        }, {
            coords: [ //兴县-界河口
                [111.137755, 38.46902],
                [111.399342, 38.537241],
            ]
        }, {
            coords: [ //界河口-静乐
                [111.399342, 38.537241],
                [111.939475, 38.344554],
            ]
        }, {
            coords: [ //静乐-太原
                [111.939475, 38.344554],
                [112.748956, 38.110078],
            ]
        }, {
            coords: [ //太原-孟县
                [112.748956, 38.110078],
                [113.414708, 38.10917],
            ]
        }, {
            coords: [ //孟县-石家庄
                [113.414708, 38.10917],
                [114.62318, 38.178981],
            ]
        }, {
            coords: [ //石家庄-安平
                [114.62318, 38.178981],
                [115.466582, 38.271957],
            ]
        }, {
            coords: [ //安平-肃宁
                [115.466582, 38.271957],
                [115.929963, 38.375224],
            ]
        }, {
            coords: [ //肃宁-任丘
                [115.929963, 38.375224],
                [116.073441, 38.732519],
            ]
        }, {
            coords: [ //任丘-永清
                [116.073441, 38.732519],
                [116.486518, 39.34534],
            ]
        }, ]
    }, {
        name: '陕京三线',
        type: 'lines',
        coordinateSystem: 'geo',
        //polyline:true,
        symbol: ['none', 'triangle'],
        zlevel: 2,
        effect: {
            show: true,
            symbol: 'roundRect',
            period: 1.5,
            delay: 100,
            trailLength: 0.6,
            symbolSize: 6,
        },
        lineStyle: {
            normal: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#ed1941'
                    }, {
                        offset: 1,
                        color: '#ffce7b'
                    }],
                    globalCoord: false
                },
                width: 1,
                opacity: 0.8,
                //type: 'dotted',
                curveness: 0.2,
            }
        },
        data: [{
            coords: [ //靖边-榆林
                [108.848154, 37.599114],
                [109.65821, 38.255808],
            ]
        }, {
            coords: [ //榆林-临县
                [109.65821, 38.255808],
                [110.954357, 38.13012],
            ]
        }, {
            coords: [ //临县-岚县
                [110.954357, 38.13012],
                [111.645406, 38.309284],
            ]
        }, {
            coords: [ //岚县-静乐
                [111.645406, 38.309284],
                [111.939475, 38.344554],
            ]
        }, {
            coords: [ //静乐-太原
                [111.939475, 38.344554],
                [112.748956, 38.110078],
            ]
        }, {
            coords: [ //太原-孟县
                [112.748956, 38.110078],
                [113.414708, 38.10917],
            ]
        }, {
            coords: [ //孟县-石家庄
                [113.414708, 38.10917],
                [114.62318, 38.178981],
            ]
        }, {
            coords: [ //石家庄-安平
                [114.62318, 38.178981],
                [115.466582, 38.271957],
            ]
        }, {
            coords: [ //安平-肃宁
                [115.466582, 38.271957],
                [115.929963, 38.375224],
            ]
        }, {
            coords: [ //肃宁-任丘
                [115.929963, 38.375224],
                [116.073441, 38.732519],
            ]
        }, {
            coords: [ //任丘-永清
                [116.073441, 38.732519],
                [116.486518, 39.34534],
            ]
        }, ]
    }, {
        name: '陕京四线',
        type: 'lines',
        coordinateSystem: 'geo',
        //polyline:true,
        symbol: ['none', 'triangle'],
        zlevel: 2,
        effect: {
            show: true,
            symbol: 'roundRect',
            period: 1.5,
            delay: 100,
            trailLength: 0.6,
            symbolSize: 6,
        },
        lineStyle: {
            normal: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#ed1941'
                    }, {
                        offset: 1,
                        color: '#ffce7b'
                    }],
                    globalCoord: false
                },
                width: 1,
                opacity: 0.8,
                //type: 'dotted',
                curveness: 0.2,
            }
        },
        data: [{
            coords: [ //靖边-红墩界
                [108.848154, 37.599114],
                [108.935541, 38.01877],
            ]
        }, {
            coords: [ //红墩界-乌审旗
                [108.935541, 38.01877],
                [109.001369, 38.633362],
            ]
        }, {
            coords: [ //乌审旗-鄂尔多斯
                [109.001369, 38.633362],
                [109.537765, 39.55271],
            ]
        }, {
            coords: [ //鄂尔多斯-托克托
                [109.537765, 39.55271],
                [111.194241, 40.295713],
            ]
        }, {
            coords: [ //托克托-乌兰察布
                [111.194241, 40.295713],
                [113.191641, 40.774453],
            ]
        }, {
            coords: [ //乌兰察布-张家口
                [113.191641, 40.774453],
                [114.858896, 40.692231],
            ]
        }, {
            coords: [ //张家口-延庆
                [114.858896, 40.692231],
                [115.921915, 40.467679],
            ]
        }, {
            coords: [ //延庆-高丽营
                [115.921915, 40.467679],
                [116.482457, 40.170625],
            ]
        }, ]
    }, {
        name: '大唐煤制气',
        type: 'lines',
        coordinateSystem: 'geo',
        //polyline:true,
        symbol: ['none', 'triangle'],
        zlevel: 2,
        effect: {
            show: true,
            symbol: 'roundRect',
            period: 1.5,
            delay: 100,
            trailLength: 0.6,
            symbolSize: 6,
        },
        lineStyle: {
            normal: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#0000FF'
                    }, {
                        offset: 1,
                        color: '#00FFFF'
                    }],
                    globalCoord: false
                },
                width: 1,
                opacity: 0.8,
                //type: 'dotted',
                curveness: 0.2,
            }
        },
        data: [{
            coords: [ //克什克腾旗-古北口
                [117.113715, 43.177816],
                [117.097042, 40.535541],
            ]
        }, {
            coords: [ //古北口-密云
                [117.097042, 40.535541],
                [116.966249, 40.370182],
            ]
        }, {
            coords: [ //密云-高丽营
                [116.966249, 40.370182],
                [116.482457, 40.170625],
            ]
        }, ]
    }, {
        name: 'LNG',
        type: 'lines',
        coordinateSystem: 'geo',
        //polyline:true,
        symbol: ['none', 'triangle'],
        zlevel: 2,
        effect: {
            show: true,
            symbol: 'roundRect',
            period: 1.5,
            delay: 100,
            trailLength: 0.6,
            symbolSize: 6,
        },
        lineStyle: {
            normal: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#0000FF'
                    }, {
                        offset: 1,
                        color: '#00FFFF'
                    }],
                    globalCoord: false
                },
                width: 1,
                opacity: 0.8,
                //type: 'dotted',
                curveness: 0.2,
            }
        },
        data: [{
            coords: [ //秦皇岛-唐山
                [119.570652, 40.00135],
                [118.027004, 39.739306],
            ]
        }, {
            coords: [ //唐山-永清
                [118.027004, 39.739306],
                [116.486518, 39.34534],
            ]
        }, {
            coords: [ //曹妃甸-唐山
                [118.504184, 39.100286],
                [118.027004, 39.739306],
            ]
        }, {
            coords: [ //大港-永清
                [117.606453, 38.720486],
                [116.486518, 39.34534],
            ]
        }, ]
    }, {
        type: 'effectScatter',
        coordinateSystem: 'geo',
        showEffectOn: 'render',
        zlevel: 3,
        symbol: 'circle',
        symbolSize: 5,
        rippleEffect: {
            brushType: 'stroke',
            period: 5,
            scale: 7
        },
        label: {
            normal: {
                formatter: '{b}',
                position: 'right',
                offset: [1, 6],
                show: true,
                textStyle: {
                    color: "yellow"
                }
            }
        },
        itemStyle: {
            normal: {
                show: true,
                color: 'yellow'
            }
        },
        data: geodata
    }]

};