
var geoCoordMap = {
    '兰考': [114.385481, 34.825227],
    '北京': [116.4551, 40.2539],
    '上海': [121.4648, 31.2891],
    '重庆': [107.7539, 30.1904],
    '天津': [117.4219, 39.4189],
    '广东': [113.5107, 23.2196],
    '河北': [114.4995, 38.1006],
    '山西': [112.3352, 37.9413],
    '辽宁': [123.38, 41.8],
    '吉林': [125.8154, 44.2584],
    '黑龙江': [127.9688, 45.368],
    '江苏': [118.8062, 31.9208],
    '浙江': [119.5313, 29.8773],
    '安徽': [117.29, 32.0581],
    '福建': [119.4543, 25.9222],
    '江西': [116.0046, 28.6633],
    '山东': [117.1582, 36.8701],
    '河南': [113.4668, 34.6234],
    '湖北': [114.3896, 30.6628],
    '湖南': [113.0823, 28.2568],
    '海南': [110.3893, 19.8516],
    '四川': [103.9526, 30.7617],
    '贵州': [106.6992, 26.7682],
    '云南': [102.9199, 25.4663],
    '陕西': [109.1162, 34.2004],
    '甘肃': [103.5901, 36.3043],
    '青海': [101.4038, 36.8207],
    '内蒙古': [111.4124, 40.4901],
    '广西': [108.479, 23.1152],
    '西藏': [91.1865, 30.1465],
    '宁夏': [106.3586, 38.1775],
    '新疆': [87.9236, 43.5883],
    '香港': [114.173355,22.320048],
    '澳门': [113.54909, 22.198951],
    '台湾': [121.509062, 25.044332]
};
var dataFrom = '兰考';
var data = [
    { name: '上海', value: 95 },
    { name: '广东', value: 90 },
    { name:'台湾',value:70}
];


var series = [
    {
        name:  '兰考',
        type: 'lines',
        zlevel: 1,
        effect: {
            show: true,
            period: 6,
            trailLength: 0.7,
            color: '#fff',
            symbolSize: 3
        },
        lineStyle: {
            normal: {
                color:'#a6c84c',
                width: 0,
                curveness: 0.2
            }
        },
        data: data.map(function (dataItem) {
            return {
                fromName: dataFrom,
                toName: dataItem.name,
                coords: [
                    geoCoordMap[dataFrom],
                    geoCoordMap[dataItem.name]
                ]
            }
        })
    },
    {
        name: '兰考',
        type: 'lines',
        zlevel: 2,
        symbol: ['none', 'arrow'],
        symbolSize: 10,
        effect: {
            show: true,
            period: 6,
            trailLength: 0,

        },
        lineStyle: {
            normal: {
                color:'#a6c84c',
                width: 1,
                opacity: 0.6,
                curveness: 0.2
            }
        },
        data: data.map(function (dataItem) {
            return {
                fromName: dataFrom,
                toName: dataItem.name,
                coords: [
                    geoCoordMap[dataFrom],
                    geoCoordMap[dataItem.name]
                ]
            }
        })
    },
    {
        name:  '兰考',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
            scale: 5,
            brushType: 'stroke'
        },
        label: {
            normal: {
                show: true,
                position: 'right',
                formatter: '{b}'
            }
        },
        symbolSize: function (val) {
            return val[2] / 6;
        },
        itemStyle: {
            normal: {
                color: '#a6c84c'
            }
        },
        data: data.map(function (dataItem) {
            return {
                name: dataItem.name,
                value: geoCoordMap[dataItem.name].concat([dataItem.value])
            };
        })
    }
];

option = {
    backgroundColor: '#0145A8',
    dataRange: {
        min: 0,
        max: 100,
        calculable: true,
        color: ['#ff3333', 'orange', 'yellow', 'lime', 'aqua'],
        textStyle: {
            color: '#fff'
        },
        show: true,
        right:10
    },
    title: {
        text: '模拟迁徙',
        subtext: '数据纯属虚构',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    geo: {
        map: 'china',
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: 'black',
                borderColor: '#404a59'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        },

    },
    series: series
};