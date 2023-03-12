var uploadedDataURL = "https://geo.datav.aliyun.com/areas_v2/bound/450000_full.json";
var nameMap = 'guangxi';
window.dataList = [
    //{ name: '百色市', value: 396 },
    //{ name: '河池市', value: 66 },
    //{ name: '烟台市', value: 222 },
    {
        name: '柳州市',
        value: '1公司'
    },
    {
        name: '桂林市',
        value: '2公司'
    },
    {
        name: '崇左市',
        value: '3公司'
    },
    //{ name: '南宁市', value: 91 },
    //{ name: '来宾市', value: 479 },
    //{ name: '贺州市', value: 34 },
    //{ name: '贵港市', value: 631 },
    //{ name: '梧州市', value: 1203 },
    //{ name: '防城港市', value: 988 },
    //{ name: '钦州市', value: 693 },
    //{ name: '玉林市', value: 934 },
    //{ name: '北海市', value: 748 }
];
debugger
var geoCoordMap = {};
var convertData = function(data) {
    //console.log('data', data)
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
    //console.log('res', res)
    return res;
};


$.get(uploadedDataURL, function(gdMap) {
    //debugger
    echarts.registerMap(nameMap, gdMap);
    /*获取地图数据*/
    myChart.showLoading();
    var mapFeatures = echarts.getMap(nameMap).geoJson.features;
    myChart.hideLoading();
    mapFeatures.forEach(function(v) {
        // 地区名称
        var name = v.properties.name;
        // 地区经纬度
        geoCoordMap[name] = v.properties.center;
    });
    //console.log(geoCoordMap)
    //GDP
    var optionMap = {
        title: {
            //text: '地图',
            top: '2%',
            textStyle: {
                color: '#000',
                fontSize: 16
            }
        },
        geo: {
            map: nameMap,
            show: false,
            roam: true,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            }
        },
        series: [{ // 地图块的相关信息
                type: 'map',
                map: nameMap,
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            fontSize: 12,
                            fontWeight: 400,
                            color: 'rgb(255,0,0) '
                        }
                    }
                },
                data: window.dataList
            },
            {
                type: 'scatter',
                coordinateSystem: 'geo',
                symbol: 'pin',
                symbolSize: [40, 40],
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            color: '#000',
                            fontSize: 10,
                            fontWeight: 600
                        },
                        formatter(value) {
                            return value.data.value[2]
                        }
                    }
                },
                hoverAnimation: true,
                itemStyle: {
                    normal: {
                        color: 'pink', // 标志颜色
                        size: 400
                    }
                },
                zlevel: 10,
                data: convertData(window.dataList)
            }
        ]
    };
    myChart.setOption(optionMap, true);
});