var mapIcons = {
    'sign': '/asset/get/s/data-1593933773676-FDpSjX2lK.png',
    'bg': '/asset/get/s/data-1593933762711-IHRMda0Rg.png'
};

/*
使用富文本制作复杂标签
wx:yangtaoxf

参考以下文章和作品，感谢相关作者
https://gallery.echartsjs.com/editor.html?c=x9dsJQiYl
https://gallery.echartsjs.com/editor.html?c=x_jX_bJ42L
https://hacpai.com/article/1591878043990
https://blog.csdn.net/liangayang/article/details/83311433
*/


// 全国省份列表	
var geoCoordMap = {
    "台湾": [121.509062, 25.044332],
    "河北": [114.502461, 38.045474],
    "山西": [112.549248, 37.857014],
    "内蒙古": [111.670801, 40.818311],
    "辽宁": [123.429096, 41.796767],
    "吉林": [125.3245, 43.886841],
    "黑龙江": [126.642464, 45.756967],
    "江苏": [118.767413, 32.041544],
    "浙江": [120.153576, 30.287459],
    "安徽": [117.283042, 31.86119],
    "福建": [119.306239, 26.075302],
    "江西": [115.892151, 28.676493],
    "山东": [117.000923, 36.675807],
    "河南": [113.665412, 34.757975],
    "湖北": [114.298572, 30.584355],
    "湖南": [112.982279, 28.19409],
    "广东": [113.280637, 23.125178],
    "广西": [108.320004, 22.82402],
    "海南": [110.33119, 20.031971],
    "四川": [104.065735, 30.659462],
    "贵州": [106.713478, 26.578343],
    "云南": [102.712251, 25.040609],
    "西藏": [91.132212, 29.660361],
    "陕西": [108.948024, 34.263161],
    "甘肃": [103.823557, 36.058039],
    "青海": [101.778916, 36.623178],
    "宁夏": [106.278179, 38.46637],
    "新疆": [87.617733, 43.792818],
    "北京": [116.405285, 39.904989],
    "天津": [117.190182, 39.125596],
    "上海": [121.472644, 31.231706],
    "重庆": [106.504962, 29.533155],
    "香港": [114.173355, 22.320048],
    "澳门": [113.54909, 22.198951]
};
var markPointData = [];

function randomData() {
    return Math.round(Math.random() * 2000);
}

var dataMap = [
    {
        name: '江苏',
        value: 400
    }, {
        name: '广东',
        value: 350
    },
    {
        name: '辽宁',
        value: 600
    }, 
    {
        name: '北京',
        value: 500
    }, 
    {
        name: '湖南',
        value: 280
    }, 
    {
        name: '甘肃',
        value: 600
    }, 
    {
        name: '新疆',
        value: 400
    }, 
    
    {
        name: '西藏',
        value: 320
    }, 
];
var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push(geoCoord.concat(data[i].value));
        }
    }
    return res;
};

var option = {
    backgroundColor: '#0e1c47',
    title: {
        text: '频谱干扰态势分布',
        textStyle: {
            align: 'center',
            color: '#fff',
            fontSize: 25,
        },
        top: '5%',
        left: 'center',
    },

    "animation": true,
    "progressiveThreshold": 3,
    "legend": {
        "left": 'left',
        "icon": 'circle',
        "textStyle": {
            "color": '#fff'
        }
    },
    "tooltip": {
        "trigger": "item",
        "showDelay": 0,
        "transitionDuration": 0.2,
        "formatter": "{b}",
        "triggerOn": "mousemove",
        "backgroundColor": "#eee",
        "borderColor": "#464849",
        "borderWidth": "1",
        "padding": [5, 10],
        "textStyle": {
            "color": "#000000",
            "fontSize": "16",
            "fontFamily": "Microsoft YaHei",
            "fontWeight": "bold"
        }
    },
    "grid": {},
    "geo": {
        "map": "china",
        //"center": [0, 12],
        "aspectScale": 0.8,
        "roam": true,
        "scaleLimit": {
            "min": 1.2,
            "max": 15
        },

        "zoom": 1.2,


        itemStyle: {
            normal: {
                borderColor: 'rgba(147, 235, 248, 1)',
                borderWidth: 1,
                areaColor: {
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.8,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(147, 235, 248, .5)' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                shadowColor: 'rgba(128, 217, 248, 1)',
                // shadowColor: 'rgba(255, 255, 255, 1)',
                shadowOffsetX: -5,
                shadowOffsetY: 12,
                shadowBlur: 10
            },
            emphasis: {
                areaColor: '#389BB7',
                borderWidth: 0
            }
        }
    },
    "series": [{
            "name": "",
            "type": "heatmap",
            "minAlpha": 0.5,
            "coordinateSystem": "geo",

            "data": convertData(dataMap),

            "markPoint": { //标记点
                // "symbol": 'path://M512 39.384615l169.353846 295.384615 342.646154 63.015385-240.246154 248.123077L827.076923 984.615385l-315.076923-145.723077L196.923077 984.615385l43.323077-334.769231L0 401.723077l342.646154-63.015385L512 39.384615',
                //"symbolSize": 14, //图形大小
                "label": {
                    "normal": {
                        formatter: function(params) {
                            return params.name;
                        },
                        "show": true,
                    },
                    "emphasis": {
                        show: true,
                    }
                },
                "itemStyle": {
                    "normal": {
                        "color": 'rgba(72,150,128,1)'
                    }
                },
                "data": markPointData
            }

        }

    ],
    "visualMap": [{
        "show": true,
        "left": "10%",
        "bottom": "5%",
        "max": 500,
        "min": 0,
        "z": 999,
        "calculable": false,
        "text": ["高", "低"],
        "inRange": {
            "color": ["#0033FF", "#FFFF00", "#FF3333"]
        },
        "textStyle": {
            "color": "#fff"
        },
        "seriesIndex": 0
    }]
};

var currentPage = 1,
    pageSize = 5,
    len = dataMap.length;


