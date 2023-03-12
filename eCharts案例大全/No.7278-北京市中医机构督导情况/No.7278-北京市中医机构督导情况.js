var name_title = "北京市中医机构督导情况"
var subname = ''
var nameColor = "#ffffff"
var name_fontFamily = '等线'
var subname_fontSize = 15
var name_fontSize = 18
var mapName = 'beijing';
var beijingmapjson = "https://geo.datav.aliyun.com/areas/bound/110000_full.json";
var data = [{
    name: "北京王府中西医结合医院",
    value: 14
}, {
    name: "中国中医科学院望京医院",
    value: 7
}, {
    name: "中国中医科学院眼科医院",
    value: 6
}, {
    name: "北京中医药大学东直门医院",
    value: 5
}, {
    name: "北京中医药大学第三附属医院",
    value: 4
}, {
    name: "北京华医中西医结合皮肤病医院",
    value: 3
}, {
    name: "北京按摩医院",
    value: 10
}, {
    name: "北京藏医院",
    value: 10
}, {
    name: "裕和中西医结合康复医院",
    value: 8
}];

var geoCoordMap = {
    '北京王府中西医结合医院': [116.421084, 40.111241],
    '中国中医科学院望京医院': [116.479714, 39.988116],
    '中国中医科学院眼科医院': [116.237424, 39.910304],
    '北京中医药大学东直门医院': [116.433851, 39.943285],
    '北京中医药大学第三附属医院': [116.415561, 39.984592],
    '北京华医中西医结合皮肤病医院': [116.281196, 39.961771],
    '北京按摩医院': [116.377842, 39.941121],
    '北京藏医院': [116.420175, 39.986357],
    '裕和中西医结合康复医院': [116.270397, 39.92812]
};
var toolTipData = [{
    name: "北京",
    value: [{
        name: "男",
        value: 1012
    }, {
        name: "女",
        value: 948
    }]
}];

var max = 480,
    min = 9; // todo 
var maxSize4Pin = 100,
    minSize4Pin = 20;

var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value),
            });
        }
    }
    return res;
};
var dsets = {
    dimensions: ['机构', 'lng', 'lat', '风险分数', '风险级别'],
    source: [{
            '机构': '北京王府中西医结合医院',
            'lng': 116.421084,
            'lat': 40.111241,
            '风险分数': 10,
            '风险级别': '全局风险'
        },
        {
            '机构': '中国中医科学院望京医院',
            'lng': 116.479714,
            'lat': 39.988116,
            '风险分数': 7,
            '风险级别': '重大风险'
        },
        {
            '机构': '中国中医科学院眼科医院',
            'lng': 116.237424,
            'lat': 39.910304,
            '风险分数': 14,
            '风险级别': '局部风险'
        },
        {
            '机构': '北京中医药大学东直门医院',
            'lng': 116.433851,
            'lat': 39.943285,
            '风险分数': 4,
            '风险级别': '个体风险'
        },
    ]
};
$.getJSON(beijingmapjson, function(d) {
    echarts.registerMap(mapName, d);
    option = {
        dataset: dsets,
        backgroundColor: '#044161',
        title: {
            text: name_title,
            subtext: subname,
            x: 'center',
            textStyle: {
                color: nameColor,
                fontFamily: name_fontFamily,
                fontSize: name_fontSize
            },
            subtextStyle: {
                fontSize: subname_fontSize,
                fontFamily: name_fontFamily
            }
        },
        tooltip: {
            trigger: 'item',
            alwaysShowContent:true,
            //formatter: function(params) {
            //    var toolTiphtml = ''
            //    for (var i = 0; i < toolTipData.length; i++) {
            //        if (params.name == toolTipData[i].name) {
            //            toolTiphtml += toolTipData[i].name + ':<br>'
            //            for (var j = 0; j < toolTipData[i].value.length; j++) {
            //                toolTiphtml += toolTipData[i].value[j].name + ':' + toolTipData[i].value[j].value + "<br>"
            //            }
            //        }
            //    }
            //    console.log(toolTiphtml)
            // console.log(convertData(data))
            //    return toolTiphtml;
            //}
        },
        // legend: {
        //     orient: 'vertical',
        //     y: 'bottom',
        //     x: 'right',
        //     data: ['credit_pm2.5'],
        //     textStyle: {
        //         color: '#fff'
        //     }
        // },
        visualMap: {
            show: true,
            min: 2,
            max: 10,
            orient:'horizontal',
            left: 'center',
            top: '5%',
            dimension:4,
            categories:['全局风险','重大风险','局部风险','个体风险'],
            inRange:{
                color: ['red', 'orange', 'yellow','green' ],
            },
            textStyle:{
                color:'white'
            }
        },
        toolbox: {
             show: true,
             orient: 'vertical',
             left: 'right',
        //     top: 'center',
             feature: {
        //         dataView: {
        //             readOnly: false
        //         },
        //         restore: {},
                 saveAsImage: {}
             }
        },
        geo: {
            show: true,
            map: mapName,
            roam: true,
            zoom: 5,
            center: [116.421196, 39.991771],
            label: {
                show: true,
                color: '#959595'
            },
            itemStyle: {
                areaColor: '#004981',
                borderColor: '#029fd4',
                borderWidth: 1.0,
                borderType: 'dotted',
            },
            emphasis: {
                label: {
                    show: false,
                    color: '#959595'
                },
                itemStyle: {
                    areaColor: '#045c9e',
                    borderColor: '#029fd4',
                    borderWidth: 1.0,
                    borderType: 'dotted'
                }
            }
        },
        series: [{
                name: '机构风险',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                //data: convertData(data),
                encode: {
                    lng: 'lng',
                    lat: 'lat',
                    //seriesName: 0,
                    tooltip: [3, 4],
                    itemName: '机构'

                },
                symbolSize: function(val) {
                    return val['风险分数']+10;
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    formatter: '{b}',
                    position: 'right',
                    show: true,
                    fontStyle:'bold'
                    //color: '#ffffff'
                },
                itemStyle: {
                    color: 'yellow',
                    shadowBlur: 10,
                    shadowColor: 'white'
                },
                //emphasis: {label:{show:false}}
            },
            //{
            //    type: 'map',
            //    map: mapName,
            //    geoIndex: 0,
            //    aspectScale: 0.75, //长宽比
            //    showLegendSymbol: false, // 存在legend时显示
            //    label: {
            //        normal: {
            //            show: true
            //        },
            //        emphasis: {
            //           show: false,
            //            textStyle: {
            //                color: '#fff'
            //            }
            //        }
            //    },
            //roam: true,
            //    itemStyle: {
            //        normal: {
            //            areaColor: '#ffffff',
            //            borderColor: '#3B5077',
            //        },
            //        emphasis: {
            //            areaColor: '#2B91B7'
            //        }
            //    },
            //    animation: false,
            //data: data
            //},
        ]
    };
    myChart.setOption(option);
});