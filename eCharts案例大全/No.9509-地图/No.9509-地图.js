var geoCoordMap = {};
var data = [{
    name: '重庆',
    value: 0,
}, {
    name: '云南',
    value: 0
}, {
    name: '辽宁',
    value: 0
}, {
    name: '黑龙江',
    value: 0
}, {
    name: '广西',
    value: 0
}, {
    name: '甘肃',
    value: 0
}, {
    name: '山西',
    value: 0
}, {
    name: '陕西',
    value: 0
}, {
    name: '吉林',
    value: 0
}, {
    name: '贵州',
    value: 0
}, {
    name: '新疆',
    value: 0
}, {
    name: '青海',
    value: 0
}, {
    name: '西藏',
    value: 0
}, {
    name: '四川',
    value: 0
}, {
    name: '宁夏',
    value: 0
}, {
    name: '海南',
    value: 0
}, {
    name: '台湾',
    value: 0
}, {
    name: '香港',
    value: 0
}, {
    name: '澳门',
    value: 40
}, {
    name: '上海',
    value: 30
}, {
    name: '安徽',
    value: 52
}, {
    name: '江苏',
    value: 20
}, {
    name: '浙江',
    value: 20
}, {
    name: '北京',
    value: 20
}, {
    name: '天津',
    value: 30
}, {
    name: '河北',
    value: 10
}, {
    name: '河南',
    value: 10
}, {
    name: '内蒙古',
    value: 10
}, {
    name: '湖南',
    value: 10
}];

var convertData2 = function(data234) {
    var res = [];
    for (var i = 0; i < data234.length; i++) {
        var geoCoord = data3[data234[i].name];
        if (geoCoord) {
            res.push({
                name: data234[i].name,
                value: geoCoord.concat(data234[i].value)
            });
        }
    }
    console.log(res)
    return res;
};



option = {
    backgroundColor: "#1e345d", //蓝色背景
    color: ['red', '#fc5353', '#f4fc6c', '#e68b55', '#9a68ff', '#ff60c5'],
    /*地图上面的五大项颜色*/
    tooltip: {
        trigger: 'item',
        formatter: function(params) {
            var MAP_VALUE_DIC = {
                '0': '未发展省',
                '10': '试点省',
                '20': '推广省'
            }
           // console.log(params);
            return params.name
        },
    },

    visualMap: {
        type: 'piecewise',
        splitNumber: 3,
        pieces: [{
            max:50,
            min: 40,
            label: '推广省5',
            color: '#4044c6'
        }, {
            max:40,
            min: 30,
            label: '推广省4',
            color: '#2044c6'
        }, {
            max:30,
            min: 20,
            label: '推广省3',
            color: '#0244c6'
        }, {
            max:20,
            min: 10,
            label: '推广省2',
            color: '#0044c6'
        }, {
            max: 10,
            min: 1,
            label: '试点省1',
            color: '#2ab1fa'
        }, {
            value: 0,
            label: '未发展省',
            color: '#12d1ff'
        }, ],
        textStyle: {
            color: '#fff'
        },
        min: 0,
        max: 20,
        left: 'left',
        top: 'bottom',
        calculable: true,
        show: true,
        seriesIndex: 0,
    },
    geo: {
        map: 'china',
        zoom: 2.0,
        layoutCenter: ['50%', '50%'],
        layoutSize: '0%',

    },
    series: [{
            type: 'map',
            mapType: 'china',
            showLegendSymbol: false,
            zoom: 1.2,
            layoutCenter: ['50%', '50%'],
            layoutSize: '100%',
            label: {
                normal: {
                    show: true,
                    /*是否城市名字*/
                    textStyle: {
                        color: 'rgba(255,255,255,1)'
                    }
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    borderColor: '#fff', //区域边框颜色
                    borderWidth: 1.5,
                    shadowBlur: 6,
                    shadowColor: 'rgba(39,64,110,0.1)',
                    /*地图内的阴影*/
                    shadowOffsetY: 10,
                    shadowOffsetx: 10
                }
            },
            data: data
        },


    ]
}