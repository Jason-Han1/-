var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
option = {
    tooltip: {
        trigger: 'item',
        formatter: function(params) {
            if (params.value) {
                return params.value[2]
            } else {
                return;
            }
        }
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: 'rgba(2,91,110,0.8)',
                borderColor: '#111'
            },
            emphasis: {
                areaColor: '#404a59'
            }
        }
    },
    series: [{
        name: '武汉迁徙图',
        type: 'lines',
        zlevel: 2,
        symbol: ['none', 'arrow'],
        symbolSize: 10,
        effect: {
            show: true,
            //period: 8,
            constantSpeed:20,
            trailLength: 0,
            symbol: planePath, //路径样式
            symbolSize: 15
        },
        lineStyle: {
            normal: {
                color: '#a6c84c',
                width: 1,
                opacity: 0.6,
                curveness: 0.2
            }
        },
        data: [{
            coords: [
                [116.4551, 40.2539, ], //北京
                [114.3896, 30.6628] //武汉坐标
            ]
        }, {
            coords: [
                [121.4648, 31.2891], //上海
                [114.3896, 30.6628] //武汉坐标
            ]
        }, {
            coords: [
                [114.5435, 22.5439], //深圳
                [114.3896, 30.6628] //武汉坐标
            ]
        }]
    }, {
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
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
            var symbolSize;
            if (val[2] / 12 >= 6) {
                symbolSize = 6;
            } else if (val[2] / 12 <= 3) {
                symbolSize = 3;
            } else {
                symbolSize = val[2] / 12;
            }
            return symbolSize;
        },
        itemStyle: {
            normal: {
                color: '#a6c84c',
            }
        },
        data: [{
            name: '武汉',
            value: [114.3896, 30.6628, 500] //自己加的，不然武汉是空白点
        }, {
            name: '上海',
            value: [121.4648, 31.2891, 100] //绘制起始点
        }, {
            name: '北京',
            value: [116.4551, 40.2539, 200] //绘制起始点
        }, {
            name: '深圳',
            value: [114.5435, 22.5439, 160] //绘制起始点
        }]
    }]
}
console.log(option.tooltip)