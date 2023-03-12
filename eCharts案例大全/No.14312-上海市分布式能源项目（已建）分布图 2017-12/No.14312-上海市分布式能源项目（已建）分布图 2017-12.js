var data = [
     
     {name: '黄埔区中心医院分布式', value: 1000},
     {name: '浦东机场分布式', value: 4000},
     {name: '上海理工大学教学试验型分布式', value: 60},
     {name: '舒雅健康休闲中心分布式', value: 336},
     {name: '天庭大酒店分布式', value: 357},
     {name: '交大紫竹院分布式', value: 60},
     {name: '金桥联合发展有限公司分布式', value: 315},
     {name: '华夏宾馆分布式', value: 480},
     {name: '上海英格索兰压缩机公司分布式', value: 250},
     {name: '上海老港垃圾填埋场一期分布式', value: 250},
     {name: '奥特斯中国有限公司分布式', value: 1160},
     {name: '上海航天能源有限公司分布式', value: 60},
     {name: '闵行区中心医院分布式', value: 350},
     {name: '东海啤酒厂分布式', value: 80},
     {name: '同济大学汽车学院分布式', value: 100},
     {name: '同济医院分布式', value: 500}, 
     {name: '中电投高培中心分布式', value: 250}, 
     {name: '上海科技大学分布式', value: 13200},
     {name: '中博会分布式', value: 26400},
     {name: '迪士尼分布式', value: 22000},
     {name: '闵行分布式', value: 120000},
     {name: '上海老港再生能源有限公司分布式', value: 14942},
     {name: '上海燃气市北销售公司分布式', value: 65},
     {name: '中国船舶重工711所分布式', value: 453},
     {name: '上海齐耀动力技术有限公司分布式', value: 50},
     {name: '花园饭店分布式', value: 350},
     {name: '仁济医院西院分布式', value: 350},
     {name: '申能集团分布式', value: 200},
     {name: '虹桥商务区公共事务中心大厦分布式', value: 454},
     {name: '第一人民医院松江分院分布式', value: 195},
     {name: '仁济医院南院分布式', value: 464},
     {name: '虹桥商务区能源中心1号站', value: 5600},
     {name: '第六人民医院南院分布式', value: 357},
     {name: '瑞金医院北院分布式', value: 334},
     {name: '东方医院南院分布式', value: 232},
     {name: '上海市第一妇婴保健院分布式', value: 130},
     {name: '上海竹惠五金制品有限公司', value: 520},
     {name: '世博B片区能源中心', value: 6700},
     {name: '上海航天设备制造总厂分布式', value: 1084},
     {name: '华能上海大厦分布式', value: 800},
     {name: '上海中心大厦分布式', value: 2320},
     {name: '上海大众安亭分布式能源站', value: 26520},
     {name: '上海国际汽车城研发科技港', value: 1600},
     {name: '青浦腾讯数据中心分布式能源站', value: 3600},
     {name: '真如电信数据中心分布式及能源站', value: 2000},
     {name: '申能集团万科翡翠公园分布式', value: 5000},
     {name: '大唐上海国际医学园区分布式能源项目', value: 8000},
     {name: '申能张江高科郭守敬路178号能源站', value: 8000},
     {name: '申能张江高科哈雷路175号能源站', value: 8000},
     {name: '虹桥商务区能源中心2号站', value: 5600},
     {name: '西虹桥分布式能源1号站', value: 3000},
     {name: '老港工业园区分布式能源站', value: 10000},
];
var geoCoordMap = {
   
    '黄埔区中心医院分布式':[121.495246,31.239689],
    '浦东机场分布式':[121.812031,31.15627],
    '上海理工大学教学试验型分布式':[121.559583,31.297207],
    '舒雅健康休闲中心分布式':[121.495571,31.304091],
    '天庭大酒店分布式':[121.512418,31.240675],
    '交大紫竹院分布式':[121.454985,31.028417],
    '金桥联合发展有限公司':[121.526954,31.240338],
    '华夏宾馆分布式':[121.436516,31.173949],
    '上海英格索兰压缩机公司分布式':[121.385073,31.018269],
    '上海老港垃圾填埋场一期分布式':[121.879473,31.057013],
    '奥特斯中国有限公司分布式':[121.373785,31.077832],
    '上海航天能源有限公司分布式':[121.669859,31.236071],
    '闵行区中心医院分布式':[121.383071,31.114917],
    '东海啤酒厂分布式':[121.298411,30.813662],
    '同济大学汽车学院分布式':[121.217352,31.295079],
    '同济医院分布式':[121.437763,31.272878],
    '中电投高培中心分布式':[121.441187,31.037403],
    '上海科技大学分布式':[121.597479,31.185356],
    '中博会分布式':[121.308826,31.197438],
    '迪士尼分布式':[121.670502,31.146231],
    '闵行分布式':[121.37003,31.061957],
    '上海老港再生能源有限公司分布式':[121.925502,31.011462],
    '上海燃气市北销售公司分布式':[121.486784,31.296078],
    '中国船舶重工711所分布式':[121.567598,31.293296],
    '上海齐耀动力技术有限公司分布式':[121.598292,31.209187],
    '花园饭店分布式':[121.466416,31.225932],
    '仁济医院西院分布式':[121.490624,31.2394],
    '申能集团分布式':[121.377504,31.180183],
    '虹桥商务区公共事务中心大厦分布式':[121.322583,31.197788],
    '第一人民医院松江分院分布式':[121.231522,31.044851],
    '仁济医院南院分布式':[121.231522,31.044851],
    '虹桥商务区能源中心1号站':[121.318216,31.193727],
    '第六人民医院南院分布式':[121.468515,30.91822],
    '瑞金医院北院分布式':[121.265506,31.341085],
    '东方医院南院分布式':[121.519365,31.153849],
    '上海市第一妇婴保健院分布式':[121.555777,31.196138],
    '上海竹惠五金制品有限公司':[121.500195,30.898208],
    '上海老港工业区分布式':[121.844439,31.062267],
    '世博B片区能源中心':[121.493402,31.18789],
    '上海航天设备制造总厂分布式':[121.403143,31.01123],
    '华能上海大厦分布式':[121.494169,31.187727],
    '上海中心大厦分布式':[121.512273,31.239103],
    '上海大众安亭分布式能源站':[121.170776,31.295348],
    '上海国际汽车城研发科技港':[121.20436,31.284321],
    '青浦腾讯数据中心分布式能源站':[121.102169,31.19116],
    '真如电信数据中心分布式及能源站':[121.102169,31.19116],
    '申能集团万科翡翠公园分布式':[121.617908,31.184254],
    '大唐上海国际医学园区分布式能源项目':[121.61842,31.112445],
    '申能张江高科哈雷路175号能源站':[121.610451,31.21821],
    '申能张江高科郭守敬路178号能源站':[121.598726,31.215396],
    '虹桥商务区能源中心2号站':[121.313758,31.202679],
    '西虹桥分布式能源1号站':[121.309985,31.18728],
    '老港工业园区分布式能源站':[121.852669,31.064819],
};

var convertData = function (data) {
     var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name  + ' : ' + data[i].value + 'KW',
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

option = {
    title: {
        text: '上海燃气分布式项目分布图',
        subtext: '数据来源于网络',
        sublink: 'http://www.pm25.in',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            return params.name;
        }
    },
    bmap: {
        center: [121.587394,31.182971],
        zoom:12,
        roam: true,
        mapStyle: {
            styleJson: [{
                'featureType': 'water',
                'elementType': 'all',
                'stylers': {
                    'color': '#d1d1d1'
                }
            }, {
                'featureType': 'land',
                'elementType': 'all',
                'stylers': {
                    'color': '#f3f3f3'
                }
            }, {
                'featureType': 'railway',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'highway',
                'elementType': 'all',
                'stylers': {
                    'color': '#fdfdfd'
                }
            }, {
                'featureType': 'highway',
                'elementType': 'labels',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'arterial',
                'elementType': 'geometry',
                'stylers': {
                    'color': '#fefefe'
                }
            }, {
                'featureType': 'arterial',
                'elementType': 'geometry.fill',
                'stylers': {
                    'color': '#fefefe'
                }
            }, {
                'featureType': 'poi',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'green',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'subway',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'manmade',
                'elementType': 'all',
                'stylers': {
                    'color': '#d1d1d1'
                }
            }, {
                'featureType': 'local',
                'elementType': 'all',
                'stylers': {
                    'color': '#d1d1d1'
                }
            }, {
                'featureType': 'arterial',
                'elementType': 'labels',
                'stylers': {
                    'visibility': 'on'
                }
            }, {
                'featureType': 'boundary',
                'elementType': 'all',
                'stylers': {
                    'color': '#fefefe'
                }
            }, {
                'featureType': 'building',
                'elementType': 'all',
                'stylers': {
                    'color': '#d1d1d1'
                }
            }, {
                'featureType': 'label',
                'elementType': 'labels.text.fill',
                'stylers': {
                    'color': '#999999'
                }
            }]
        }
    },
    series : [
        {
            name: 'pm2.5',
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: convertData(data),
            symbolSize: function (val) {
                if(val[2]/10<=50)
                {
                return 10;
                }
                else if(val[2]/10>=200)
                {
                return 25;
                }
                else{
                return val[2] / 200;
                }
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: 'green'
                }
            }
        },
        {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'bmap',
            data: convertData(data.sort(function (a, b) {
                return b.value - a.value;
            }).slice(0, 11)),
            symbolSize: function (val) {
                 if(val[2]/10<=50)
                {
                return 10;
                }
                else if(val[2]/10>=200)
                {
                return 25;
                }
                else{
                return val[2] / 100;
                }
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color: 'green',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        }
    ]
};