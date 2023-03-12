  var geoCoordMap = {};
var data = [
    {name: '北京', fileSizeCount: 514,fileCount:514,linkUnnormalCount:514,warnCount:514},
    {name: '山东', fileSizeCount: 514,fileCount:514,linkUnnormalCount:514,warnCount:514},
    {name: '江苏', fileSizeCount: 514,fileCount:514,linkUnnormalCount:514,warnCount:514},
    {name: '天津', fileSizeCount: 514,fileCount:514,linkUnnormalCount:514,warnCount:514},
    {name: '上海', fileSizeCount: 514,fileCount:514,linkUnnormalCount:514,warnCount:514},
    {name: '重庆', fileSizeCount: 514,fileCount:514,linkUnnormalCount:514,warnCount:514},
    {name: '河北', fileSizeCount: 514,fileCount:514,linkUnnormalCount:514,warnCount:514},
    {name: '河南', fileSizeCount: 514,fileCount:514,linkUnnormalCount:514,warnCount:514},
    {name: '云南', fileSizeCount: 514,fileCount:514,linkUnnormalCount:514,warnCount:514},
    {name: '辽宁', fileSizeCount: 514,fileCount:514,linkUnnormalCount:514,warnCount:514},
    {name: '黑龙江', fileSizeCount: 514,fileCount:514,linkUnnormalCount:514,warnCount:514},
    {name: '湖南', fileSizeCount: 514,fileCount:514,linkUnnormalCount:514,warnCount:514},
    {name: '安徽', fileSizeCount: 514,fileCount:514,linkUnnormalCount:514,warnCount:514},
    {name: '新疆', fileSizeCount: 514,fileCount:514,linkUnnormalCount:514,warnCount:514},
    {name: '浙江', fileSizeCount: 514,fileCount:514,linkUnnormalCount:514,warnCount:514},
    {name: '江西', fileSizeCount: 514,fileCount:514,linkUnnormalCount:514,warnCount:514},
    {name: '湖北', fileSizeCount: 514,fileCount:514,linkUnnormalCount:514,warnCount:514},
    {name: '广西', fileSizeCount: 514,fileCount:514,linkUnnormalCount:514,warnCount:514},
    {name: '甘肃', fileSizeCount: 514,fileCount:514,linkUnnormalCount:514,warnCount:514},
    {name: '山西', fileSizeCount: 514,fileCount:514,linkUnnormalCount:514,warnCount:514},
    {name: '内蒙古', fileSizeCount: 514,fileCount:514,linkUnnormalCount:514,warnCount:514},
    {name: '陕西', fileSizeCount: 514,fileCount:514,linkUnnormalCount:514,warnCount:514},
    {name: '吉林', fileSizeCount: 514,fileCount:514,linkUnnormalCount:514,warnCount:514},
    {name: '福建', fileSizeCount: 514,fileCount:514,linkUnnormalCount:514,warnCount:514},
    {name: '贵州', fileSizeCount: 514,fileCount:514,linkUnnormalCount:514,warnCount:514},
    {name: '广东', fileSizeCount: 514,fileCount:514,linkUnnormalCount:514,warnCount:514},
    {name: '青海', fileSizeCount: 514,fileCount:514,linkUnnormalCount:514,warnCount:514},
    {name: '西藏', fileSizeCount: 514,fileCount:514,linkUnnormalCount:514,warnCount:514},
    {name: '四川', fileSizeCount: 514,fileCount:514,linkUnnormalCount:514,warnCount:514},
    {name: '宁夏', fileSizeCount: 514,fileCount:514,linkUnnormalCount:514,warnCount:514},
    {name: '海南', fileSizeCount: 514,fileCount:514,linkUnnormalCount:514,warnCount:514},
    {name: '台湾', fileSizeCount: 514,fileCount:514,linkUnnormalCount:514,warnCount:514},
    {name: '香港', fileSizeCount: 514,fileCount:514,linkUnnormalCount:514,warnCount:514},
    {name: '澳门', fileSizeCount: 514,fileCount:514,linkUnnormalCount:514,warnCount:514},
];
var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value),
                fileSizeCount: data[i].fileSizeCount,
                fileCount: data[i].fileCount,
                linkUnnormalCount: data[i].linkUnnormalCount,
                warnCount: data[i].warnCount,
            });
        }
    }
    return res;
};
var convertData1 = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            geoCoord[0] = +geoCoord[0] + 0.8 + ''
            // geoCoord[1] = +geoCoord[1] + 2 + ''
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value),
                fileSizeCount: data[i].fileSizeCount,
                fileCount: data[i].fileCount,
                linkUnnormalCount: data[i].linkUnnormalCount,
                warnCount: data[i].warnCount,
            });
        }
    }
    return res;
};
var convertData2 = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            geoCoord[0] = +geoCoord[0] + 0.8 + ''
            // geoCoord[1] = +geoCoord[1]  + ''
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value),
                fileSizeCount: data[i].fileSizeCount,
                fileCount: data[i].fileCount,
                linkUnnormalCount: data[i].linkUnnormalCount,
                warnCount: data[i].warnCount,
            });
        }
    }
    return res;
};
var convertData3 = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            geoCoord[0] = +geoCoord[0] + 0.8 + ''
            // geoCoord[1] = +geoCoord[1]  + ''
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value),
                fileSizeCount: data[i].fileSizeCount,
                fileCount: data[i].fileCount,
                linkUnnormalCount: data[i].linkUnnormalCount,
                warnCount: data[i].warnCount,
            });
        }
    }
    return res;
};
var mapData = [];
var mapName = 'china';
//  myChart.showLoading();
var mapFeatures = echarts.getMap(mapName).geoJson.features;
myChart.hideLoading();
mapFeatures.forEach(function(v) {
    // 地区名称
    var name = v.properties.name;
    // 地区经纬度
    // geoCoordMap[name] = v.properties.cp;
    geoCoordMap[name] = [v.properties.cp[0]-1.2,v.properties.cp[1]+0.8]

});

for (var i = 0; i < data.length; i++) {
    var colors = "#00202E";


    mapData.push({
        name: data[i].name,
        selected: false,
        fileSizeCount: data[i].fileSizeCount,
        fileCount: data[i].fileCount,
        linkUnnormalCount: data[i].linkUnnormalCount,
        warnCount: data[i].warnCount,

    })
}
option = {
    // backgroundColor: '#030303',
    color:['#17A2FF','#00FFC0','#F55B5B','#FFC554'],
    title: {
    },
    tooltip: {
        padding: 0,
        trigger: 'item',
        // borderColor:"rgba(147, 235, 248, 1)",borderWidth:3,
        // backgroundImage
        formatter: function(params) {
            return [
                '<div style="height:242px;width:393px;padding:30px 30px 0px 30px;line-height:35px;'
                +'background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYkAAADyCAYAAAC4TzkLAAADmklEQVR4nO3csW3DMBBAUTHIAt5L43ovjsAUQQI7yG8sGzaM9yqpkMDu41jc2OZaGwD84/PwH07jfIdzAPAIc+1HPv+41zkAeD/j6rrJVADAxfRhkgAgiQQASSQASCIBQBIJAJJIAJBEAoAkEgAkkQAgiQQASSQASCIBQPpe8GexHwB/zbWbJABIIgFAEgkAkkgAkEQCgCQSACSRACCJBABJJABIIgFAEgkAkkgAkEQCgCQSACSRACCJBABJJABIIgFAEgkAkkgAkEQCgCQSACSRACCJBABJJABIIgFAEgkAkkgAkEQCgCQSACSRACCJBABJJABIIgFAEgkAkkgAkEQCgCQSACSRACCJBABJJABIIgFAEgkAkkgAkEQCgCQSACSRACCJBABJJABIIgFAEgkAkkgAkEQCgCQSACSRACCJBABJJABIIgFAEgkAkkgAkEQCgCQSACSRACCJBABJJABIIgFAEgkAkkgAkEQCgCQSACSRACCJBABJJABIIgFAEgkAkkgAkEQCgCQSACSRACCJBABJJABIIgFAEgkAkkgAkEQCgCQSACSRACCJBABJJABIIgFAEgkAkkgAkEQCgCQSACSRACCJBABJJABIIgFAEgkAkkgAkEQCgCQSACSRACCJBABJJABIIgFAEgkAkkgAkEQCgCQSACSRACCJBABJJABIIgFAEgkAkkgAkEQCgCQSACSRACCJBABJJABIIgFAEgkAkkgAkEQCgCQSACSRACCJBABJJABIIgFAEgkAkkgAkEQCgCQSACSRACCJBABJJABIIgFAEgkAkkgAkEQCgCQSACSRACCJBABJJABIIgFAEgkAkkgAkEQCgCQSACSRACCJBABJJABIIgFAEgkAkkgAkEQCgCQSACSRACCJBABJJABIIgFAEgkAkkgAkEQCgCQSACSRACCJBABJJABIIgFAEgkAkkgAkEQCgCQSACSRACCJBABJJABIIgFAEgkAkkgAkEQCgCQSACSRACCJBABJJABIIgFAEgkAkkgAkEQCgCQSACSRACCJBABJJABIIgFAEgkAkkgAkEQCgCQSACSRACCJBABJJABIIgFAEgkAkkgAkEQCgCQSACSRACCJBABJJABIY5tr/b6dxvmJZwHgFcy1/zyaJABIIgFAEgkAkkgAkEQCgCQSACSRACCJBABJJABIIgFAEgkAkkgAkK4X/N3CUkCA13WxrO8WJgkA0vFJAoC39QXuPSJvCDB/4gAAAABJRU5ErkJggg==\n)">' +
                '<a style="font-size: 32px;color: #17C9FD;font-weight: bold;"> '+params.name+'</a><br/>',
                '<a style="color:#FFFFFF;font-size: 22px;">采集文件总量(G) : </a> '+'<a style="float:right;color:#17A2FF;font-size: 28px;">'+ params.data.fileSizeCount  +  '</a><br/>',
                '<a style="color:#FFFFFF;font-size: 22px;">采集文件总数: </a>' +'<a style="float:right;color:#00FFC0;font-size: 28px;">'+ params.data.fileCount + '</a><br/>',
                '<a style="color:#FFFFFF;font-size: 22px;">采集告警数:  </a>' +'<a style="float:right;color:#F55B5B;font-size: 28px;">'+  params.data.linkUnnormalCount+'</a><br/>',
                '<a style="color:#FFFFFF;font-size: 22px;">采集服务心跳异常总数: 　　</a>' +'<a style="float:right;color:#FFC554;font-size: 28px;">'+ params.data.warnCount + '</a><br/></div>',
            ].join('');
            //   params.name+'<br/>',
            // return params.name + ' : ' + params.value[2];
        }
    },
    legend: {
        itemWidth: 16,
        itemHeight: 16,
        // top:60,
        // left:460,
        orient: 'horizontal',
        icon:'roundRect',
        data: ['采集文件总量', '采集文件总数','采集告警数','采集服务心跳异常总数'],
        textStyle: {
            color: '#fff',fontSize:20
        }

    },

    geo: {
        map: 'china',
        //  data: mapData,
        showLegendSymbol: true, // 存在legend时显示
        label: {
            normal: {
                show: true,//显示省份标签
                textStyle:{color:"#17C9FD",fontSize: 25,fontWeight:'bold'}//省份标签字体颜色
            },
            emphasis: {
                show: true,//对应的鼠标悬浮效果
                textStyle:{color:"#18FFE7",fontWeight:'bold',fontSize: 26}
            }
        },
        top:100,
        // geoIndex: 0,
        zoom: 1.12,//地图放大/缩小
        // aspectScale: 0.75, //长宽比
        // showLegendSymbol: false, // 存在legend时显示
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
                        color: '#002859' // 0% 处的颜色
                    },{
                        offset: .4,
                        color: '#002859' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#005b93' // 100% 处的颜色
                    }],
                    globalCoord: true // 缺省为 false
                },
                shadowColor: 'rgba(128, 217, 248, 1)',
                // shadowColor: 'rgba(255, 255, 255, 1)',
                shadowOffsetX: -2,
                shadowOffsetY: 2,
                shadowBlur: 10
            },
            emphasis: {
                // borderColor: 'rgba(147, 235, 248, 1)',
                // borderWidth: 1,
                areaColor: {
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.8,
                    colorStops: [{
                        offset: 0,
                        color: '#002859' // 0% 处的颜色
                    },{
                        offset: .4,
                        color: '#002859' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#005b93' // 100% 处的颜色
                    }],
                    globalCoord: true // 缺省为 false
                },
                borderWidth: 4,
                borderColor: 'rgba(24, 255, 231, 1)',
            }
        },
        animation: false,
        z: 1
    },
    series: [
        // 地图？


        {
            name: '采集文件总量',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: 14,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                emphasis: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            }
        },
        {
            name: '采集文件总数',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData1(data),
            symbolSize: 14,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
        },
        {
            name: '采集告警数',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData1(data),
            symbolSize: 14,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },

        },
        {
            name: '采集服务心跳异常总数',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData1(data),

            symbolSize: 14,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
        },

    ]
}
// myChart.setOption(option);