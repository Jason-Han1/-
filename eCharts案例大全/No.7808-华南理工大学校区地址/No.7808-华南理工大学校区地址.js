var uploadedDataURL = "/asset/get/s/data-1588985022602-m8t4b13Gs.json";

$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('guangzhou', geoJson);
});
//把校区地址罗列出来
var geoCoordMap = {
    "五山校区": [113.351557, 23.161069],
    "国际校区": [113.414809, 23.015209],
    "大学城校区": [113.411968, 23.054905]
};

var data = [{
        name: "五山校区",
        value: 100
    },
    {
        name: "国际校区",
        value: 100
    },
    {
        name: "大学城校区",
        value: 100
    }
];

var colors = ["#1DE9B6", "#F46E36", "#04B9FF"];
var linesData = [
    [{
        coord: [113.351557, 23.161069],
        value: 0.07
    }, {
        coord: [113.414809, 23.015209]
    }],
    [{
        coord: [113.414809, 23.015209],
        value: 0.04
    }, {
        coord: [113.351557, 23.161069]
    }],
    [{
        coord: [113.411968, 23.054905],
        value: 0.04
    }, {
        coord: [113.351557, 23.161069]
    }]
];

var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }

    return res;
};

option = {
    backgroundColor: '#013954',
    geo: {
        map: 'guangzhou',
        zoom: 1, //当前视角的缩放比例
        roam: true, //是否开启平游或缩放
        center: [113.351557, 23.161069],
        itemStyle: {
            areaColor: '#043967', //地图色
            borderColor: '#1FB2F2', //地图线条色
            borderWidth: 1.5,
            borderType: 'solid'
        },
        label: {
            emphasis: {
                show: false
            }
        },
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
                        color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                shadowColor: 'rgba(128, 217, 248, 1)',
                // shadowColor: 'rgba(255, 255, 255, 1)',
                shadowOffsetX: -2,
                shadowOffsetY: 2,
                shadowBlur: 10
            },
            emphasis: {
                areaColor: '#389BB7',
                borderWidth: 0
            }
        }

    },

    series: [
        //地图中闪烁的点
        {
            //  name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: function(val) {
                return val[2] / 10;
            },

            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke',
                scale: 5

            },
            hoverAnimation: true,
            label: {
                formatter: '{b}',
                position: 'right',
                show: true,
                distance: 30,
                fontSize: 14,
                fontWeight: 'bold'
            },
            itemStyle: {
                color: function(params) {
                    return colors[params.dataIndex]
                },
                shadowBlur: 100,
                shadowColor: '#333'
            },
            zlevel: 1,
            geoIndex: 0

        },

        {
            type: 'lines',
            zlevel: 2,
            effect: {
                show: true,
                period: 4, //箭头指向速度，值越小速度越快
                trailLength: 0.4, //特效尾迹长度[0,1]值越大，尾迹越长重
                symbol: 'arrow', //箭头图标
                symbolSize: 7, //图标大小
            },
            lineStyle: {
                normal: {
                    color: function(params) {
                        return colors[params.dataIndex]
                    },
                    width: 0.5, //尾迹线条宽度
                    opacity: 0.5, //尾迹线条透明度
                    curveness: 1 //尾迹线条曲直度
                }
            },
            data: linesData
        }

    ]
};
myChart.setOption(option);