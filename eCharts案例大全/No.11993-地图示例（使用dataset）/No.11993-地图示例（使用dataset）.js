// No 北京 上海 江苏
var nameValueGeo0 = [
    {name: '天津', value: 514},
    {name: '上海', value: 863},
    {name: '重庆', value: 224},
    {name: '河北', value: 671},
    {name: '河南', value: 888},
    {name: '云南', value: 992},
    {name: '辽宁', value: 136},
    {name: '黑龙江', value: 406},
    {name: '湖南', value: 101},
    {name: '安徽', value: 885},
    {name: '新疆', value: 187},
    {name: '浙江', value: 1},
    {name: '江西', value: 138},
    {name: '湖北', value: 337},
    {name: '广西', value: 410},
    {name: '甘肃', value: 22},
    {name: '山西', value: 814},
    {name: '内蒙古', value: 449},
    {name: '陕西', value: 324},
    {name: '吉林', value: 429},
    {name: '福建', value: 377},
    {name: '贵州', value: 811},
    {name: '广东', value: 954},
    {name: '青海', value: 653},
    {name: '西藏', value: 297},
    {name: '四川', value: 981},
    {name: '宁夏', value: 66},
    {name: '海南', value: 667},
    {name: '台湾', value: 345},
    {name: '香港', value: 970},
    {name: '澳门', value: 683}
];
var nameValueGeo1 = [
    {name: '北京', value: 507},
    {name: '天津', value: 263},
    {name: '上海', value: 732},
    {name: '重庆', value: 976},
    {name: '河北', value: 299},
    {name: '安徽', value: 465},
    {name: '新疆', value: 259},
    {name: '浙江', value: 822},
    {name: '江西', value: 922},
    {name: '山西', value: 379},
    {name: '内蒙古', value: 544},
    {name: '吉林', value: 190},
    {name: '福建', value: 66},
    {name: '广东', value: 842},
    {name: '西藏', value: 827},
    {name: '四川', value: 71},
    {name: '宁夏', value: 428},
    {name: '香港', value: 466},
    {name: '澳门', value: 119}
]

option = {
    legend: {},
    tooltip: {},
    dataset: [{
        source: nameValueGeo0
    }, {
        source: nameValueGeo1
    }],
    visualMap: {
        min: 0,
        max: 1500,
        calculable: true
    },
    series: [{
        name: 'A',
        type: 'map',
        label: {
            show: true
        },
        mapType: 'china'
    }, {
        name: 'B',
        type: 'map',
        label: {
            show: true
        },
        mapType: 'china',
        datasetIndex: 1
    }]
};
