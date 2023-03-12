
var geoCoordMap = {
    '兰考': [114.385481, 34.825227],
    '郑州': [113.4668, 34.6234],
    '开封': [114.311523, 34.809969],
    '洛阳': [112.471793, 34.62387],
    '平顶山': [113.198486, 33.775454],
    '安阳': [114.39891, 36.108225],
    '鹤壁': [114.306924, 35.752846],
    '新乡': [113.938978, 35.309189],
    '焦作': [113.249079, 35.222425],
    '濮阳': [115.038216, 35.764093],
    '许昌': [113.860789, 34.040073],
    '漯河': [114.021765, 33.590883],
    '三门峡': [111.179383, 34.783409],
    '南阳': [112.531584, 33.019279],
    '商丘': [115.659125, 34.44116],
    '信阳': [114.095355, 32.146995],
    '周口': [114.693267, 33.644758],
    '驻马店': [114.030964, 33.034777],
    '济源': [112.623571, 35.078872]
};
var dataFrom = '兰考';
var data = [
    { name: '郑州', value: 80 },
    { name: '开封', value: 80 },
    { name: '洛阳', value: 80 },
    { name: '平顶山', value: 80 },
    { name: '安阳', value: 80 },
    { name: '鹤壁', value: 80 },
    { name: '新乡', value: 80 },
    { name: '焦作', value: 80 },
    { name: '濮阳', value: 80 },
    { name: '许昌', value: 80 },
    { name: '漯河', value: 80 },
    { name: '三门峡', value: 80 },
    { name: '南阳', value: 80 },
    { name: '商丘', value: 80 },
    { name: '信阳', value: 80 },
    { name: '周口', value: 80 },
    { name: '驻马店', value: 80 },
    { name: '济源', value: 80 },
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
        map: '河南',
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