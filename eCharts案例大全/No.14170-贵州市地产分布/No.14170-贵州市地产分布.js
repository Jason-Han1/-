var uploadedDataURL = "/asset/get/s/data-1517146749952-BkIYzUoHf.js";
//地图个性化配置
var mapConfig = [{
        'featureType': 'water',
        'elementType': 'all',
        'stylers': {
            'color': '#d1d1d1'
        }
    },
    {
        'featureType': 'land',
        'elementType': 'all',
        'stylers': {
            'color': '#f3f3f3'
        }
    },
    {
        'featureType': 'railway',
        'elementType': 'all',
        'stylers': {
            'visibility': 'off'
        }
    },
    {
        'featureType': 'highway',
        'elementType': 'all',
        'stylers': {
            'color': '#fdfdfd'
        }
    },
    {
        'featureType': 'highway',
        'elementType': 'labels',
        'stylers': {
            'visibility': 'off'
        }
    },
    {
        'featureType': 'arterial',
        'elementType': 'geometry',
        'stylers': {
            'color': '#fefefe'
        }
    },
    {
        'featureType': 'arterial',
        'elementType': 'geometry.fill',
        'stylers': {
            'color': '#fefefe'
        }
    },
    {
        'featureType': 'poi',
        'elementType': 'all',
        'stylers': {
            'visibility': 'off'
        }
    },
    {
        'featureType': 'green',
        'elementType': 'all',
        'stylers': {
            'visibility': 'off'
        }
    },
    {
        'featureType': 'subway',
        'elementType': 'all',
        'stylers': {
            'visibility': 'off'
        }
    },
    {
        'featureType': 'manmade',
        'elementType': 'all',
        'stylers': {
            'color': '#d1d1d1'
        }
    },
    {
        'featureType': 'local',
        'elementType': 'all',
        'stylers': {
            'color': '#d1d1d1'
        }
    },
    {
        'featureType': 'arterial',
        'elementType': 'labels',
        'stylers': {
            'visibility': 'off'
        }
    },
    {
        'featureType': 'boundary',
        'elementType': 'all',
        'stylers': {
            'color': '#fefefe'
        }
    },
    {
        'featureType': 'building',
        'elementType': 'all',
        'stylers': {
            'color': '#d1d1d1'
        }
    },
    {
        'featureType': 'label',
        'elementType': 'labels.text.fill',
        'stylers': {
            'color': '#000000'
        }
    }
]
//初始化地图背景及散点图数据以外的配置
option = {
    title: {
        text: 'G市楼盘概览 - 百度地图',
        subtext: '大小按评分高低分布',
        left: 'center'
    },
    bmap: {
        center: [106.69, 26.60],
        zoom: 12,
        roam: true,
        mapStyle: {
            styleJson: mapConfig
        }
    },
    series: [{
            name: 'premisesAll',
            type: 'scatter',
            coordinateSystem: 'bmap',
            zlevel: 2,
            data: [],
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color: 'purple'
                }
            }
        },

    ]
};
myChart.setOption(option);
myChart.showLoading();
var premisesAll = [],
    paramData = [];
//ajax获取数据,填充散点
$.ajax({
    url: uploadedDataURL,
    type: "GET",
    dataType: "json",
    sync: false,
    success: function(data) {
        //若premisesAll不为空，则可以跳过
        if (premisesAll.length === 0) {
            for (let i = 0; i < data.length; i++) {
                premisesAll.push({
                    lat: Number(data[i].lat),
                    lon: Number(data[i].lon),
                    averagePrice: data[i].均价,
                    volumeRate: data[i].容积率,
                    greeningRate: Number(data[i].绿化率),
                    grade: Number(data[i].评分),
                    commentNumber: Number(data[i].评论数),
                    areaCovered: data[i].小区占地面积,
                    builtupArea: data[i].小区建筑面积,
                    propertyFee: data[i].物业费,
                    address: data[i].楼盘地址,
                    name: data[i].名称,
                    feature: data[i].项目特色
                });
                paramData.push({
                    name: premisesAll[i].name,
                    value: [
                        premisesAll[i].lon,
                        premisesAll[i].lat,
                        premisesAll[i].grade,
                        premisesAll[i].address,
                        premisesAll[i].feature,
                        premisesAll[i].averagePrice
                    ],
                });
            }
        }
        myChart.hideLoading(); //关闭loading动画
        //配置tooltip提示框。填充散点图
        myChart.setOption({
            tooltip: {
                trigger: 'item',
                formatter: function(res) {
                    return "<div style='border-bottom: 1px solid rgba(255,255,255,0.3);" +
                        "font-size: 18px; padding-bottom: 7px; margin-bottom: 7px'>" +
                        res.name + "</div>" +
                        res.value[3] + '</br>' +
                        "特色: " + res.value[4] + "</br>" +
                        "均价: " + res.value[5] + "元/平米</br>" +
                        "评分: " + res.value[2]
                },
            },
            series: [{
                    name: 'premisesAll',
                    data: paramData,
                    symbolSize: function(val) {
                        return (val[2] - 2.9) * 20;
                    },
                },

            ]
        });
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
        alert(XMLHttpRequest.status);
        alert(XMLHttpRequest.readyState);
        alert(textStatus);
    }
});