var name_title = "国内STEM教育研究机构分布"
var subname = '——版权所有 请勿复制'
var nameColor = "black"
var name_fontFamily = '等线'
var subname_fontSize = 15
var name_fontSize = 18
var mapName = 'china'
var data = [{
        name: "北京",
        value: 69
    },
    {
        name: "天津",
        value: 4
    },
    {
        name: "河北",
        value: 11
    },


    {
        name: "辽宁",
        value: 4
    },
    {
        name: "吉林",
        value: 25
    },
    {
        name: "黑龙江",
        value: 1
    },
    {
        name: "上海",
        value: 65
    },
    {
        name: "江苏",
        value: 51
    },
    {
        name: "浙江",
        value: 26
    },
    {
        name: "安徽",
        value: 1
    },
    {
        name: "福建",
        value: 1
    },

    {
        name: "山东",
        value: 7
    },
    {
        name: "河南",
        value: 22
    },
    {
        name: "湖北",
        value: 19
    },
    {
        name: "湖南",
        value: 4
    },
    {
        name: "重庆",
        value: 10
    },
    {
        name: "四川",
        value: 2
    },

    {
        name: "云南",
        value: 1
    },

    {
        name: "陕西",
        value: 16
    },
    {
        name: "甘肃",
        value: 5
    },

    {
        name: "宁夏",
        value: 3
    },
    {
        name: "广西",
        value: 1
    },
    {
        name: "广东",
        value: 23
    },


];

var geoCoordMap = {};
var toolTipData = [{
        name: "北京",
        value: [{
            name: "北京师范大学",
            value: 35
        }, {
            name: "首都师范大学",
            value: 8
        } ,{
            name: "北京大学",
            value: 4
        }, {
            name: "北京理工大学",
            value: 4
        }, {
            name: "清华大学",
            value: 3
        }, {
            name: "北京航空航天大学",
            value: 3
        }]
    },
    {
        name: "天津",
        value: [{
            name: "天津师范大学",
            value: 2
        }, {
            name: "天津职业技术师范大学",
            value: 2
        }]
    },
    {
        name: "河北",
        value: [{
            name: "河北师范大学",
            value: 3
        }, {
            name: "河北大学",
            value: 2
        }]
    },


    {
        name: "辽宁",
        value: [{
            name: "沈阳师范大学",
            value: 2
        }, {
            name: "辽宁师范大学",
            value: 1
        }]
    },
    {
        name: "吉林",
        value: [{
            name: "东北师范大学",
            value: 17
        }, {
            name: "吉林省互联网+教育科技创新中心",
            value: 2
        }]
    },
    {
        name: "黑龙江",
        value: [{
            name: "黑龙江大学",
            value: 1
        }]
    },
    {
        name: "上海",
        value: [{
            name: "华东师范大学",
            value: 46
        }, {
            name: "上海师范大学",
            value: 7
        }]
    },
    {
        name: "江苏",
        value: [{
            name: "南京师范大学",
            value: 21
        }, {
            name: "南京晓庄学院",
            value: 5
        }, {
            name: "江苏省苏州市吴江区鲈乡实验小学",
            value: 2
        }]
    },
    {
        name: "浙江",
        value: [{
            name: "温州大学",
            value: 5
        }, {
            name: "浙江大学",
            value: 4
        }, {
            name: "浙江师范大学",
            value: 4
        }]
    },
    {
        name: "安徽",
        value: [{
            name: "安徽师范大学",
            value: 1
        }]
    },
    {
        name: "福建",
        value: [{
            name: "福建师范大学",
            value: 1
        }]
    },
    {
        name: "江西",
        value: [{
            name: "文科",
            value: 49
        }, {
            name: "理科",
            value: 42
        }]
    },
    {
        name: "山东",
        value: [{
            name: "中国海洋大学",
            value: 2
        }, {
            name: "山东师范大学",
            value: 1
        }, {
            name: "曲阜师范大学大学",
            value: 1
        }]
    },
    {
        name: "河南",
        value: [{
            name: "河南大学",
            value: 16
        }, {
            name: "河南省教育信息化发展研究中心",
            value: 2
        }]
    },
    {
        name: "湖北",
        value: [{
            name: "华中师范大学",
            value: 8
        }, {
            name: "武汉大学",
            value: 6
        }]
    },
    {
        name: "湖南",
        value: [{
            name: "长沙师范学院",
            value: 2
        }, {
            name: "湖南大学",
            value: 1
        }, {
            name: "中南大学",
            value: 1
        }]
    },
    {
        name: "重庆",
        value: [{
            name: "西南大学",
            value: 8
        }, {
            name: "重庆渝北区天一新城小学",
            value: 1
        }, {
            name: "重庆市长寿川维中学校",
            value: 1
        }]
    },
    {
        name: "四川",
        value: [{
            name: "四川外国语大学",
            value: 1
        }, {
            name: "四川师范大学",
            value: 1
        }]
    },

    {
        name: "云南",
        value: [{
            name: "云南师范大学",
            value: 1
        }]
    },

    {
        name: "陕西",
        value: [{
            name: "陕西师范大学",
            value: 12
        }, {
            name: "西安交通大学",
            value: 2
        }]
    },
    {
        name: "甘肃",
        value: [{
            name: "西北师范大学",
            value: 5
        }]
    },

    {
        name: "宁夏",
        value: [{
            name: "宁夏大学",
            value: 3
        }]
    },

    {
        name: "广东",
        value: [{
            name: "华南师范大学",
            value: 7
        }, {
            name: "佛山科学技术学院",
            value: 2
        }]
    },
    {
        name: "广西",
        value: [{
            name: "广西师范学院",
            value: 1
        }]
    },

];

/*获取地图数据*/
myChart.showLoading();
var mapFeatures = echarts.getMap(mapName).geoJson.features;
myChart.hideLoading();
mapFeatures.forEach(function(v) {
    // 地区名称
    var name = v.properties.name;
    // 地区经纬度
    geoCoordMap[name] = v.properties.cp;

});

// console.log("============geoCoordMap===================")
// console.log(geoCoordMap)
// console.log("================data======================")
console.log(data)
console.log(toolTipData)
var max = 600,
    min = 9; // todo 
var maxSize4Pin = 220,
    minSize4Pin = 25;

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
option = {
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
        formatter: function(params) {
            if (typeof(params.value)[2] == "undefined") {
                var toolTiphtml = ''
                for (var i = 0; i < toolTipData.length; i++) {
                    if (params.name == toolTipData[i].name) {
                        toolTiphtml += toolTipData[i].name + ':<br>'
                        for (var j = 0; j < toolTipData[i].value.length; j++) {
                            toolTiphtml += toolTipData[i].value[j].name + ':' + toolTipData[i].value[j].value + "<br>"
                        }
                    }
                }
                console.log(toolTiphtml)
                // console.log(convertData(data))
                return toolTiphtml;
            } else {
                var toolTiphtml = ''
                for (var i = 0; i < toolTipData.length; i++) {
                    if (params.name == toolTipData[i].name) {
                        toolTiphtml += toolTipData[i].name + ':<br>'
                        for (var j = 0; j < toolTipData[i].value.length; j++) {
                            toolTiphtml += toolTipData[i].value[j].name + ':' + toolTipData[i].value[j].value + "<br>"
                        }
                    }
                }
                console.log(toolTiphtml)
                // console.log(convertData(data))
                return toolTiphtml;
            }
        }
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
        min: 0,
        max: 30,
        left: 'left',
        top: 'bottom',
        text: ['高', '低'], // 文本，默认为数值文本
        calculable: true,
        seriesIndex: [1],
        inRange: {
            // color: ['#3B5077', '#031525'] // 蓝黑
            // color: ['#ffc0cb', '#800080'] // 红紫
            // color: ['#3C3B3F', '#605C3C'] // 黑绿
            // color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
            // color: ['#23074d', '#cc5333'] // 紫红
            color: ['#e6d0d0', '#3ab8f2','orange'] // 蓝绿
            // color: ['#1488CC', '#2B32B2'] // 浅蓝
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#00467F', '#A5CC82'] // 蓝绿

        }
    },
    /*工具按钮组*/
    // toolbox: {
    //     show: true,
    //     orient: 'vertical',
    //     left: 'right',
    //     top: 'center',
    //     feature: {
    //         dataView: {
    //             readOnly: false
    //         },
    //         restore: {},
    //         saveAsImage: {}
    //     }
    // },
    geo: {
        show: true,
        map: mapName,
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false,
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#ebf2f5',//地图背景
                borderColor: '#3B5077',
            },
            emphasis: {
                areaColor: 'orange',
            }
        }
    },
    series: [{
            name: '散点',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: function(val) {
                return val[2] / 10;
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right', //身份标签位置
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: 'black'
                }
            }
        },
        {
            type: 'map',
            map: mapName,
            geoIndex: 0,
            aspectScale: 0.75, //长宽比
            showLegendSymbol: false, // 存在legend时显示
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: false,
                    textStyle: {
                        color: 'white'
                    }
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#d1e1e8',
                    borderColor: '#3B5077',
                },
                emphasis: {
                    areaColor: '#2B91B7'
                }
            },
            animation: false,
            data: data
        },
        {
            name: '点',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: 'pin', //气泡
            symbolSize: function(val) {
                var a = (maxSize4Pin - minSize4Pin) / (max - min);
                var b = minSize4Pin - a * min;
                b = maxSize4Pin - a * max;
                return a * val[2] + b;
            },
            label: {
                normal: {
                    formatter:function(obj){
                        console 
                        .log(obj.data.value[2]);
                        return obj.data.value[2];
                    },
                    show: true,
                    textStyle: {
                        color: 'white',
                        fontSize: 9,
                    }
                }
                
            },
            itemStyle: {
                normal: {
                    color: 'green', //标志颜色
                }
            },
            zlevel: 6,
            data: convertData(data),
        },



    ]
};
myChart.setOption(option);





 

 
