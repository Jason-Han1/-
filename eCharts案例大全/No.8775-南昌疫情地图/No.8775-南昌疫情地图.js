var data = [{
        name: '南昌大学第一附属医院（象湖院区）',
        value: 43
    },
    {
        name: '南昌市第九医院',
        value: 14
    },
    {
        name: '安义县人民医院',
        value: 4
    },
    {
        name: '进贤县人民医院',
        value: 9
    },
    {
        name: '南昌大学第二附属医院',
        value: 1
    },
    {
        name: '江西省人民医院',
        value: 3
    },
    {
        name: '南昌大学第一附属医院',
        value: 6
    },
    {
        name: '解放军第九四医院',
        value: 1
    },
    {
        name: '南昌大学第一附属医院高新医院',
        value: 1
    },
    {
        name: '新建区人民医院',
        value: 1
    },




];
var geoCoordMap = {

    '南昌大学第一附属医院（象湖院区）': [115.868585, 28.595901],
    '南昌市第九医院': [28.67352601, 115.935618],
    '安义县人民医院': [28.84582899, 115.557194],
    '进贤县人民医院': [28.37463099, 116.281189],
    '南昌大学第二附属医院': [28.688661, 115.908469],
    '江西省人民医院': [28.55055302, 115.9484],
    '南昌大学第一附属医院': [28.69281003, 115.916894],
    '解放军第九四医院': [31.23107204, 121.4250082],
    '南昌大学第一附属医院高新医院': [28.69281003, 115.916894],
    '新建区人民医院': [28.68522501, 115.833058]

};

var convertData = function(data) {
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
};

option = {
    title: {
        text: '南昌疫情地图',
        subtext: '数据来源：南昌卫健委网站',
        sublink: 'http://jxyonyou.cn:8081',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    bmap: {
        center: [115.866253, 28.690463],
        zoom: 11,
        roam: true

    },
    series: [{
            name: 'pm2.5',
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: convertData(data),
            symbolSize: function(val) {
                return val[2] / 10;
            },
            label: {
                formatter: '{b}',
                position: 'right',
                show: false
            },
            itemStyle: {
                color: 'purple'
            },
            emphasis: {
                label: {
                    show: true
                }
            }
        },
        {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'bmap',
            data: convertData(data.sort(function(a, b) {
                return b.value - a.value;
            }).slice(0, 6)),
            symbolSize: function(val) {
                return val[2] / 10;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                formatter: '{b}',
                position: 'right',
                show: true
            },
            itemStyle: {
                color: 'purple',
                shadowBlur: 10,
                shadowColor: '#333'
            },
            zlevel: 1
        }
    ]
};