var nan_ning = "/asset/get/s/data-1630552661640-gUYX6az2W_.json"; // 南宁市地图

var colors = [
    ["#1DE9B6", "#F46E36", "#04B9FF", "#5DBD32", "#FFC809", "#FB95D5", "#BDA29A", "#6E7074", "#546570", "#C4CCD3"],
    ["#37A2DA", "#67E0E3", "#32C5E9", "#9FE6B8", "#FFDB5C", "#FF9F7F", "#FB7293", "#E062AE", "#E690D1", "#E7BCF3", "#9D96F5", "#8378EA", "#8378EA"],
    ["#DD6B66", "#759AA0", "#E69D87", "#8DC1A9", "#EA7E53", "#EEDD78", "#73A373", "#73B9BC", "#7289AB", "#91CA8C", "#F49F42"],
];
$.getJSON(nan_ning, function (json) {
    // 注册地图
    echarts.registerMap("nan_ning", json);
    // console.info(json)
    var mapData = [];
    for (var i = 0; i < json.features.length; i++) {
        mapData.push({
            name: json.features[i].properties.name,
            value: json.features[i].properties.centroid,
            itemStyle: {
                color: colors[0][i]
            }
        })
    }
    myChart.setOption({
        backgroundColor: '#051b4a',
        tooltip: {
            formatter: function(params) {
                // console.info(params)
                    return "<div style = 'background:rgba(22,80,158,0.8);padding:20px;margin:0;color:#fff;font-size:12px;'>" +
                    "<p style = 'padding:0;margin:0;'>地区：" + params.name + "</p>" + 
                    "<p>发放总人数：4000</p>" + 
                    "<p>发放总金额：23465.23</p>" + 
                    "</div>";
            }
        },
        geo: [{
            map: "nan_ning",
            itemStyle: {
                normal: {
                    areaColor: "rgb(0,139,138,0.5)",
                    borderColor: 'rgba(147, 235, 248, 1)',
                    shadowColor: 'rgba(128, 217, 248, 1)',
                    shadowOffsetX: -2,
                    shadowOffsetY: 2,
                    shadowBlur: 10
                },
                emphasis: {
                    areaColor: '#389BB7',
                    borderWidth: 0
                }
            },
            label: {
                emphasis: {
                    show: false
                }
            },
            tooltip: {
                padding: 0,
                show: true,
                formatter: function (params){
                    console.info(params)
                    return "<div style = 'background:rgba(22,80,158,0.8);padding:20px;margin:0;color:#fff;font-size:12px;'>" +
                    "<p style = 'padding:0;margin:0;'>地区：" + params.name + "</p>" + 
                    "</div>";
                }
            }
        }],
        series: [
           {
               type: 'scatter',
               coordinateSystem: "geo",
               label: {
                   show: true,
                   formatter: function(params){
                      return params.name
                   },
                   position: 'right',
               },
               symbolSize: 18,
               itemStyle: {
                   normal: {
                    //   color: "#04B9FF"
                   }
               },
               data: mapData
           },
           {
               type: "effectScatter",
               coordinateSystem: "geo",
               symbolSize: 18,
               rippleEffect: {
                   brushType: "stroke",
                   color: "#04B9FF"
               },
               itemStyle: {
                    // normal: {
                    //     color: "#04B9FF",
                    //     shadowBlur: 10,
                    //     shadowColor:  "#04B9FF"
                    // }
                },
               data: mapData
           }
        ]
    });
})
