var allData = {
    "citys": [{
        "name": "上海",
        "value":[121.47,31.23],
        "symbolSize": 5, //点的大小
        "itemStyle": {
            "normal": {
                "color": "#F58158" //每个点的颜色
            }
        }
    }, {
        "name": "北京",
        "value": [116.4,39.9],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#58B3CC"
            }
        }
    }, {
        "name": "广州",
        "value": [113.5107,23.2196],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#58B3CC"
            }
        }
    }, {
        "name": "成都",
        "value": [104.07,30.67],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#58B3CC"
            }
        }
    }, {
        "name": "沈阳",
        "value": [123.43,41.8],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#58B3CC"
            }
        }
    }, {
        "name": "南京",
        "value": [118.78,32.07],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#58B3CC"
            }
        }
    }, {
        "name": "连云港",
        "value": [119.22,34.6],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#58B3CC"
            }
        }
    }, {
        "name": "青岛",
        "value": [120.38,36.07],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#58B3CC"
            }
        }
    }, {
        "name": "杭州",
        "value": [120.15,30.28],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#58B3CC"
            }
        }
    }, {
        "name": "西安",
        "value": [108.93,34.27],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#58B3CC"
            }
        }
    }, {
        "name": "郑州",
        "value": [113.62,34.75],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#58B3CC"
            }
        }
    }, {
        "name": "佛山",
        "value": [113.12,23.02],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#58B3CC"
            }
        }
    }, {
        "name": "珠海",
        "value": [113.57,22.27],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#58B3CC"
            }
        }
    }, {
        "name": "武汉",
        "value": [114.3,30.6],
        "symbolSize": 2,
        "itemStyle": {
            "normal": {
                "color": "#58B3CC"
            }
        }
    }],
    "moveLines": [{
        "fromName": "上海",
        "toName": "北京",
        "coords": [
            [121.47,31.23],
            [116.4,39.9]
        ]
    },{
        "fromName": "上海",
        "toName": "广州",
        "coords": [
            [121.47,31.23],
            [113.5107,23.2196]
        ]
    },{
        "fromName": "上海",
        "toName": "成都",
        "coords": [
            [121.47,31.23],
            [104.07,30.67]
        ]
    },{
        "fromName": "上海",
        "toName": "沈阳",
        "coords": [
            [121.47,31.23],
            [123.43,41.8]
        ]
    },{
        "fromName": "上海",
        "toName": "南京",
        "coords": [
            [121.47,31.23],
            [118.78,32.07]
        ]
    },{
        "fromName": "上海",
        "toName": "连云港",
        "coords": [
            [121.47,31.23],
            [119.22,34.6]
        ]
    },{
        "fromName": "上海",
        "toName": "青岛",
        "coords": [
            [121.47,31.23],
            [120.38,36.07]
        ]
    },{
        "fromName": "上海",
        "toName": "杭州",
        "coords": [
            [121.47,31.23],
            [120.15,30.28]
        ]
    },{
        "fromName": "上海",
        "toName": "西安",
        "coords": [
            [121.47,31.23],
            [108.93,34.27]
        ]
    },{
        "fromName": "上海",
        "toName": "郑州",
        "coords": [
            [121.47,31.23],
            [113.62,34.75]
        ]
    },{
        "fromName": "上海",
        "toName": "佛山",
        "coords": [
            [121.47,31.23],
            [113.12,23.02]
        ]
    },{
        "fromName": "上海",
        "toName": "珠海",
        "coords": [
            [121.47,31.23],
            [113.57,22.27]
        ]
    },{
        "fromName": "上海",
        "toName": "武汉",
        "coords": [
            [121.47,31.23],
            [114.3,30.6]
        ]
    }]
};

option = {toolbox: {
        feature: {

            saveAsImage: {
                show: true
            }
        }
    },
    backgroundColor: '#404a59', visualMap: {
        show:false,
        min: 0,
        max: 20,
        left: 'left',
        top: 'bottom',
        text: ['High', 'Low'],
        seriesIndex: [2],
        inRange: {
             color: ['#f3d999','#ea7e53']//有值地图块颜色区间
        },
        calculable: true
    },  
    title: {
        text: '',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: true
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#323c48',//地图块
                borderColor: '#404a59'//地图边线
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series: [{
        name: '地点',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
            brushType: 'stroke'
        },
        label: {
            normal: {
                fontSize:16,
                show: true,
                position: 'right',
                formatter: '{b}'
            }
        },
        symbolSize: 2,
        showEffectOn: 'render',
        itemStyle: {
            normal: {
                color: '#46bee9'
            }
        },
        
        data: allData.citys
    },{
        name: '线路',
        type: 'lines',
        coordinateSystem: 'geo',
        zlevel: 2,
        large: true,
        effect: {
            show: true,
            constantSpeed: 30,
            symbol: 'pin',
            symbolSize: 3,
            trailLength: 0,
        },
        lineStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#58B3CC'
                }, {
                    offset: 1,
                    color: '#F58158'
                }], false),
                width: 2,
                opacity: 0.2,
                curveness: 0.1
            }
        },
        data: allData.moveLines
    },{
        name: '',
        type: 'map',
        // coordinateSystem: 'geo',
        zlevel: 3,
        geoIndex: 0,
        rippleEffect: {
            brushType: 'stroke'
        },
        label: {
            normal: {
                show: true,
                position: 'right',
                formatter: '{b}'
            }
        },
        symbolSize: function(val) {
            return val[2] / 8;
        },
        itemStyle: {
            normal: {
                color: '#fff000'
            }
        },
        data: [{name:'广东',value:22},
{name:'重庆',value:8},
{name:'甘肃',value:12},
{name:'河南',value:2},
{name:'贵州',value:1},
{name:'四川',value:2},
{name:'陕西',value:21},
{name:'江西',value:1},
{name:'湖南',value:1},
{name:'宁夏',value:1},]
    }
    ]
};
