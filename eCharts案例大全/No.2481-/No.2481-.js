var outname = ['北京', '山东', '天津', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江','广东','台湾', '广西', '海南','南海诸岛','重庆', '四川', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆','安徽', '江西', '河南', '湖北', '湖南','江苏', '浙江', '福建', '上海']
var outvalue = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22, 22, 22, 22, 22, 33, 33, 33, 33]

var outvalue1 = [0, 70, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22, 22, 22, 22, 22, 33, 33, 33, 33]
var outvalue2 = [0, 70, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22, 22, 22, 22, 22, 33, 33, 33, 33]

var outdata = [];

var dqname=["华北东北大区","华东大区","华南大区","华中大区","西南西北大区"]
var dqcsname=["北京","上海","广东","河南","新疆"];//华北东北大区
var dqcsvalue=[32,23,65,25,55];
var dqfcvalue=[32,23,65,25,55];
var dqcs=[];

for (var i = 0; i < outname.length; i++) {
    outdata.push({
        name: outname[i],
        value: outvalue[i],
        numbers: outvalue1[i],
        moneys:outvalue2[i],
    })
}

for (var i = 0; i < dqcsname.length; i++) {
    dqcs.push({
        name: dqcsname[i],
        value: dqcsvalue[i]
    })
}

var geoCoordMap = {};
/*获取地图数据*/
var mapFeatures = echarts.getMap('china').geoJson.features;
//  console.log(mapFeatures)
mapFeatures.forEach(function(v) {
    console.info(v)
    // 地区名称
    var name = v.properties.name;
    // 地区经纬度
    geoCoordMap[name] = v.properties.cp;

});
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
    tooltip: {
        show: false,
        formatter: function(params) {
            if (params.value.length > 1) {
                return '&nbsp;&nbsp;' + params.name + '&nbsp;&nbsp;&nbsp;' + params.value1[2] + '人&nbsp;&nbsp;';
            } else {
                return '&nbsp;&nbsp;' + params.name + '&nbsp;&nbsp;&nbsp;' + params.value1 + '人&nbsp;&nbsp;';
            }
        },

    },

    geo: {
        map: 'china',
        show: true,
        roam: false,
        label: {
            emphasis: {
                show: false
            }
        },
        layoutSize: "100%",
        itemStyle: {
            normal: {
                borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#00F6FF'
                }, {
                    offset: 1,
                    color: '#53D9FF'
                }], false),
                borderWidth: 3,
                shadowColor: 'rgba(10,76,139,1)',
                shadowOffsetY: 0,
                shadowBlur: 60
            }
        }
    },
        visualMap: {
        min: 0,
        max: 1000,
        left: 26,
        bottom: 40,
        showLabel: !0,
        text: ["高", "低"],
        pieces: [{
            gt: 31,
            label: "> 100 ",
            color: "rgba(57, 111, 255)"
        }, {
            gte: 1,
            lte: 10,
            label: "10 - 100 ",
            color: "rgba(50, 97, 222)"
        }, {
            gte: 11,
            lt: 20,
            label: "1 - 9 ",
            color: "rgba(42, 82, 189)"
        }, {
            gt: 21,
            lt: 30,
            label: "其他",
            color: "rgba(35, 68, 156)"
        }, {
            value: 0,
            color: "rgba(27, 53, 122)"
        }],
        show: false
    },
    series: [{
        type: 'map',
        map: 'china',
        aspectScale: 0.75,
        tooltip: {
            show: true,
            formatter: function (params) {
                if (params.value.length > 1) {
                    return (
                        '&nbsp;&nbsp;' + params.name + '&nbsp;&nbsp;&nbsp;' + params.data.numbers[2] +'次&nbsp;&nbsp;<br>&nbsp;&nbsp;付出成本：'+ params.data.moneys[2] +'元&nbsp;&nbsp;'
                    );
                } else {
                    return (
                        '&nbsp;&nbsp;' + params.name + '&nbsp;&nbsp;&nbsp;' + params.data.numbers +'次&nbsp;&nbsp;<br>&nbsp;&nbsp;付出成本：'+ params.data.moneys +'元&nbsp;&nbsp;'
                    );
                }
            },
        },
        //zoom:1.1,
        label: {
            normal: {
show: false,
                 
            },
            emphasis: {
                show: false,
            }
        },
        itemStyle: {
            normal: {
                areaColor: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#073684' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#061E3D' // 100% 处的颜色
                    }],
                },
                borderColor: '#215495',
                borderWidth: 1,
            },
            emphasis: {
                areaColor: {

                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#073684' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#061E3D' // 100% 处的颜色
                    }],
                },
            }
        },
        data: outdata,
    },{
            type: 'scatter',
            coordinateSystem: 'geo',
            label: {
                normal: {
                    show: true,
                    formatter: function(params) {
                        return '{fline|' +dqname[params.dataIndex]+ '}{tline|' + params.data.value[2] + '次}\n{fline|付出成本}{tline|' + dqfcvalue[params.dataIndex] + '元}';                     },
                    position: [1, 0, 0, 0],
                    backgroundColor: 'rgba(0,2,89,.75)',
                    padding: [0, 0],
                    borderRadius: [0, 3, 3, 0],
                    lineHeight: 25,
                    color: '#ffffff',
                    rich: {
                        fline: {
                            padding: [0, 5, 0, 10],
                            color: '#ffffff',
                            fontSize: 16,
                        },
                        tline: {
                            padding: [0, 10, 0, 5],
                            color: '#ffffff',
                            fontSize: 16,
                        },
                    }
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                color: '#00FFF6',
            },
            symbol: 'rect',
            symbolSize: [1, 70],
            z: 999,
            data: convertData(dqcs),
        }]
};