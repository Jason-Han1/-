//数据定义区
var typeArr = ["鲜花"];
var typeIndex = 1;
var selectedRange = null;
var option = null;
var str = "";
var data = [];
var geoCoordMap = {};
var name = ""
var mapName = 'china'
// 地图特征
var mapFeatures = echarts.getMap(mapName).geoJson.features;
mapFeatures.forEach(function(v) {
    // 地区名称
    var name = v.properties.name;
    // 地区经纬度
    geoCoordMap[name] = v.properties.cp;
    data.push({
        // 需要挨个处理各地区数据（不使用随机产生的数）：另外需要构造的数据是柱图数据
        "name": name,
        "value": [{
            name: "鲜花",
            value: Math.round(Math.random() * 100 + 10)
        }]
    })
});
// 地理坐标图(打印出来方便查看)
console.log("===========geoCoordMap===============");
for (var i in geoCoordMap) {
    console.log(geoCoordMap[i]);
}
console.log(geoCoordMap);
console.log("==============data===============");
console.log(data);

/*变换地图数据（格式）：pie*/
function convertMapDta(type, data) {
    var mapData = [];
    data.forEach(function(v) {
        v.value.forEach(function(v1) {
            if (String(v1.name) === String(type)) {
                // 数据格式：data: [120, 200, 150, 80]
                mapData.push({
                    "name": v.name,
                    "value": v1.value
                })
            }
        })
    });
    return mapData;
}


/*变换地图数据（格式）：bar*/
// function convertMapDta_bar(type,data){
// 	var mapData = [];
// 	data.forEach(function(v){
// 		v.value.forEach(function(v1){
// 			if(String(v1.name) === String(type)){
//                 // 数据格式：data: [120, 200, 150, 80]
//                 mapData.push({
//                 	"name":v.name,"value":v1.value
//                 })
//             }
//         })
// 	});
// 	return mapData;
// }
console.log("================mapData==================")
// console.log(convertMapDta_bar(typeArr[typeIndex],data))
console.log(convertMapDta(typeArr[typeIndex], data))
console.log("=========================================")

/*resetPie*/
function resetPie(myChart, params, geoCoordMap, typeIndex) {
    var op = myChart.getOption();
    var ops = op.series;
    ops.forEach(function(v, i) {
        if (i > 0) {
            var geoCoord = geoCoordMap[v.name];
            var p = myChart.convertToPixel({
                seriesIndex: 0
            }, geoCoord);
            v.center = p;
            if (params != 0 && params.zoom) {
                v.radius = v.radius * params.zoom;
            }
            if (params != 0 && params.selected) {
                var rangeFirstNumber = params.selected[0];
                var rangeSecondNumber = params.selected[1];
                var pd = v.data[typeIndex].value;
                if (pd < rangeFirstNumber || pd > rangeSecondNumber) {
                    v.itemStyle.normal.opacity = 0;
                } else {
                    v.itemStyle.normal.opacity = 1;
                }
            }
        }
    });
    myChart.setOption(op, true);
}

function addPie(chart, data) {
    var op = chart.getOption();
    var sd = option.series;

    for (var i = 0; i < data.length; i++) {
         if (data[i].value[0].value > 30) {
        var randomValue = Math.round(Math.random() * 30);
        var radius = randomValue <= 10 ? 10 : randomValue;
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            var vr = [];
            (data[i].value).map(function(v, j) {
                vr.push({
                    name: v.name,
                    value: v.value
                });
            });
            var p = chart.convertToPixel({
                seriesIndex: 0
            }, geoCoord);
            sd.push({
                name: data[i].name,
                type: 'pie',
                //clockWise: false,
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        },
                        shadowBlur: 20,
                        shadowColor: '#203665'
                    }
                },
                radius: [30, 40],
                // center: ['15%', '50%'],
                hoverAnimation: false,
                // radius: radius,
                center: p,
                data: [{
                    value: data[i].value[0].value,
                    label: {
                        normal: {
                            rich: {
                                a: {
                                    color: '#3a7ad5',
                                    align: 'center',
                                    fontSize: 10,
                                    fontWeight: "bold"
                                },
                                b: {
                                    color: '#fff',
                                    align: 'center',
                                    fontSize: 10
                                }
                            },
                            formatter: "{c}\n{d}%",
                            position: 'center',
                            show: true,
                            textStyle: {
                                fontSize: '14',
                                fontWeight: 'normal',
                                color: '#fff'
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#16E3A7',
                            shadowColor: '#2c6cc4',
                            shadowBlur: 20
                        }
                    }
                }
                , {
        value: 2,
        itemStyle: {
    normal: {
        color: 'rgba(0, 0, 0, 0)',
        borderWidth: 0
    }
}
    }, {
                    value: 100 - data[i].value[0].value,
                    name: 'invisible',
                    itemStyle: {
                        normal: {
                            
                            color: new echarts.graphic.LinearGradient(0.8, 0.5, 0, 1,
                                [{
                                        offset: 0,
                                        color: "rgba(205,205,205,0.7)"
                                    },
                                    {
                                        offset: 0.5,
                                        color: "rgba(205,205,205,1)"
                                    },
                                    {
                                        offset: 0.1,
                                        color: "rgba(205,205,205,0.5)"
                                    }
                                ]
                            )
                        },
                        emphasis: {
                            color: '#24375c'
                        }
                    }
                } , {
        value: 2,
        itemStyle: {
    normal: {
        color: 'rgba(0, 0, 0, 0)',
        borderWidth: 0
    }
}
    }]
            });
        }
    }

    }
    return sd;
};

/* 指定图表的配置项和数据:pie*/
var option = {
    backgroundColor: '#404a59',
    title: {
        text: name,
        left: 'center',
        textStyle: {
            color: '#03A89E'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: function(params) {
            if (params.value) {
                return params.name + "<br/>" + typeArr[typeIndex] + ": " + params.value;
            }
        }
    },
    series: [{
        name: 'chinaMap',
        type: 'map',
        mapType: mapName,
        roam: true,
        zoom: 1,
        label: {
            normal: {
                show: true,
                textStyle: {
                    color: '#A8EBF5'
                }
            },
            emphasis: {
                textStyle: {
                    color: '#fff'
                }
            }
        },
        itemStyle: {
            normal: {
                // label: {
                //     show: true,
                //     formatter:'{b}\n{c}',
                // },
                areaColor: "#0f1e31",
                borderColor: new echarts.graphic.LinearGradient(0.8, 0.5, 0, 1,
                    [{
                            offset: 0,
                            color: "#09bbcc"
                        },
                        {
                            offset: 0.2,
                            color: "rgba(9,187,204,0.3)"
                        },
                        {
                            offset: 0.6,
                            color: "rgba(9,187,204,0.1)"
                        },
                        {
                            offset: 0.8,
                            color: 'rgba(9,187,204,0)'
                        }
                    ]
                ),
                borderWidth: 2,
                shadowColor: 'rgba(63, 218, 255, 0.5)',
                shadowBlur: 5
            },
            emphasis: {
                areaColor: "#2cd0e8",
                borderColor: "#09bbcc",
                borderWidth: 1,
                fontSize: 30,
                shadowColor: 'rgba(63, 218, 255, 0.5)',
                shadowBlur: 5
            }
        },
        data: convertMapDta(typeArr[typeIndex], data),
        /*zlevel:3*/
    }]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
/*pie*/
addPie(myChart, data);
/*bar*/
// addBar(myChart,data);
console.log("===========option=================");
console.log(option);
myChart.setOption(option, true);

/*饼图跟着地图移动:pie*/
myChart.on('georoam', function(params) {
    resetPie(myChart, params, geoCoordMap, typeIndex);
});
myChart.on('datarangeselected', function(params) {
    resetPie(myChart, params, geoCoordMap, typeIndex);
});
window.addEventListener("resize", function() {
    myChart.resize();
    resetPie(myChart, 0, geoCoordMap);  
})

/*饼图跟着地图移动:bar*/
// myChart.on('georoam', function (params) {
// 	resetBar(myChart,params,geoCoordMap,typeIndex);
// });
// myChart.on('datarangeselected', function (params) {
// 	resetBar(myChart,params,geoCoordMap,typeIndex);
// });
// window.addEventListener("resize",function(){
// 	myChart.resize();
// 	resetBar(myChart,0,geoCoordMap);
// })

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);