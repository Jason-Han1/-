var data = [{
    name: '2256',
    value: 2256
}, {
    name: '578',
    value: 578
}, {
    name: '744',
    value: 744
}, {
    name: '806',
    value: 806
}, {
    name: '336',
    value: 336
}, {
    name: '325',
    value: 325
}, {
    name: '487',
    value: 487
}, {
    name: '343',
    value: 343
}, {
    name: '432',
    value: 432
}, {
    name: '273',
    value: 273
}, {
    name: '1055',
    value: 1055
}, {
    name: '590',
    value: 590
}, {
    name: '319',
    value: 319
}, {
    name: '349',
    value: 349
}, {
    name: '126',
    value: 126
}, {
    name: '97',
    value: 97
}, {
    name: '201',
    value: 201
}, {
    name: '398',
    value: 398
}, {
    name: '795',
    value: 795
}, {
    name: '655',
    value: 655
}, {
    name: '295',
    value: 295
}, {
    name: '311',
    value: 311
}, {
    name: '993',
    value: 993
}, {
    name: '601',
    value: 601
}, {
    name: '275',
    value: 275
}, {
    name: '317',
    value: 317
}, {
    name: '1000',
    value: 1000
}, {
    name: '186',
    value: 186
}, {
    name: '261',
    value: 261
}, {
    name: '132',
    value: 132
}, {
    name: '18',
    value: 18
}, {
    name: '11',
    value: 11
}, ];

var geoCoordMap = {
    '2256': [116.46, 39.92],
    '578': [121.29, 31.14],
    '744': [117.2, 39.13],
    '806': [106.32, 29.32],
    '336': [126.41, 45.45],
    　'325': [125.19, 43.52],
    　'487': [123.24, 41.50],
    '343': [111.48, 40.49],
    　'432': [114.28, 38.02],
    　'273': [112.34, 37.52],
    '1055': [117, 36.38],
    '590': [113.42, 34.48],
    '319': [108.54, 34.16],
    '349': [103.49, 36.03],
    '126': [106.16, 38.20],
    '97': [101.45, 36.38],
    '201': [87.36, 43.48],
    '398': [117.18, 31.51],
    '795': [118.50, 32.02],
    '655': [120.09, 30.14],
    '295': [113, 28.11],
    '311': [115.52, 28.41],
    '993': [114.21, 30.37],
    '601': [104.05, 30.39],
    '275': [106.42, 26.35],
    '317': [119.18, 26.05],
    '1000': [113.15, 23.08],
    '186': [110.20, 20.02],
    '261': [108.20, 22.48],
    '132': [102.41, 25],
    '18': [91.10, 29.40],
    '11': [114.10, 22.18],
};

function convertData(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
}

option = {
    title: {
        text: '全国会员分布',
        subtext: '（单位/人）',

        x: 'center',
        textStyle: {
            color: '#424242'
        }
    },
    tooltip: {
        show: false
    },
    visualMap: {
        min: 0,
        max: 1500,
        left: '-100%',
        top: 'bottom',
        text: ['High', 'Low'],
        seriesIndex: [1],
        inRange: {//地图颜色
            // color: ['#6495ED', '#6495ED']
        },
        calculable: false
    },
    geo: {
        map: 'china',
        roam: true,
        // scaleLimit:{
        //   max:'1.2',
        //   min:'0.7'
        // },
        label: {
            normal: {
                show: true,
                textStyle: {
                    color: 'rgba(0,0,0,0.6)'
                }
            }
        },
        itemStyle: {
            normal: {
                borderColor: 'rgba(0, 0, 0, 0.2)'
            },
            emphasis: {
                areaColor: null,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 20,
                borderWidth: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    },
    // backgroundColor: 'rgba(0,51,102, 1)',
    series: [{
        type: 'scatter',
        coordinateSystem: 'geo',
        data: convertData(data),
        symbolSize: 20,
        symbol: 'path://M35.025,17.608c-5.209-4.786-11.483-2.301-15.303-4.281v-1.482c0-0.41-0.333-0.743-0.743-0.743c-0.411,0-0.743,0.333-0.743,0.743v24.682c-1.855,0.104-3.261,0.59-3.261,1.175c0,0.661,1.793,1.197,4.005,1.197c2.21,0,4.003-0.536,4.003-1.197c0-0.585-1.405-1.071-3.261-1.175V26.151C24.575,24.573,28.408,17.166,35.025,17.608z',
        symbolRotate: 0,
        symbolOffset: ['50%', '-100%'],
        label: {
            normal: {
                formatter: '{b}',
                position: 'top',
                show: false,
                textStyle: {
                    color: '#000000',
                    fontSize: 16
                }

            },
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                color: '#F06C00'
            }
        }
    }, {
        name: '个人会员数量',
        type: 'map',
        geoIndex: 0,
        tooltip: {
            show: true
        },
        data: [{
            name: '北京',
            value: 2256
        }, {
            name: '天津',
            value: 744
        }, {
            name: '上海',
            value: 578
        }, {
            name: '重庆',
            value: 806
        }, {
            name: '河北',
            value: 432
        }, {
            name: '河南',
            value: 590
        }, {
            name: '云南',
            value: 132
        }, {
            name: '辽宁',
            value: 487
        }, {
            name: '黑龙江',
            value: 336
        }, {
            name: '湖南',
            value: 295
        }, {
            name: '安徽',
            value: 398
        }, {
            name: '山东',
            value: 1055
        }, {
            name: '新疆',
            value: 201
        }, {
            name: '江苏',
            value: 795
        }, {
            name: '浙江',
            value: 655
        }, {
            name: '江西',
            value: 311
        }, {
            name: '湖北',
            value: 993
        }, {
            name: '广西',
            value: 261
        }, {
            name: '甘肃',
            value: 349
        }, {
            name: '山西',
            value: 273
        }, {
            name: '内蒙古',
            value: 343
        }, {
            name: '陕西',
            value: 319
        }, {
            name: '吉林',
            value: 325
        }, {
            name: '福建',
            value: 317
        }, {
            name: '贵州',
            value: 275
        }, {
            name: '广东',
            value: 1000
        }, {
            name: '青海',
            value: 97
        }, {
            name: '西藏',
            value: 18
        }, {
            name: '四川',
            value: 601
        }, {
            name: '宁夏',
            value: 126
        }, {
            name: '海南',
            value: 186
        }, {
            name: '台湾',
            value: 0
        }, {
            name: '香港',
            value: 11
        }, {
            name: '澳门',
            value: 0
        }]
    }]
};