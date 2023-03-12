var uploadedDataURL = "/asset/get/s/data-1526018707993-B129M3z0f.json";
var nameMap = '河北省';
var hbmap = [{
    name: '秦皇岛',
    value: '98'
}, {
    name: '衡水',
    value: '2223'
}, {
    name: '邢台',
    value: '437'
}, {
    name: '保定',
    value: '385'
}, {
    name: '唐山',
    value: '768'
}, {
    name: '张家口',
    value: '1233'
}, {
    name: '石家庄',
    value: '1633'
}];
var geoCoordMap = {
    '石家庄':[114.48,38.03],
    '保定':[115.48,38.85],
    '张家口':[114.87,40.82],
    '承德':[117.93,40.97] ,
    '秦皇岛':[119.57,39.95],
    '唐山':[118.02,39.63],
    '廊坊':[116.7,39.53],
    '沧州':[116.83,38.33],
    '邯郸':[114.47,36.6],
    '衡水':[115.72,37.72],
    '邢台':[114.48,37.05],

};

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
var seriesdata = [

    // {
    //     name: 'light',
    //     type: 'scatter',
    //     coordinateSystem: 'geo',
    //     data: convertData(hbmap),
    //     symbolSize:  10,
    //
    //     label: {
    //         normal: {
    //             formatter: '{b}',
    //             position: 'bottom',
    //             show: true
    //         },
    //         emphasis: {
    //             show: true
    //         }
    //     },
    //     itemStyle: {
    //         normal: {
    //             color: '#F4E925'
    //         }
    //     }
    // },
    {

        type: 'map',
        map: nameMap,
        aspectScale: 0.75, //长宽比
        left: '2%',
        // right: '35%',
        top: 10,
        width: '50%',
        height: '90%',
        roam: false,
        itemStyle: {
            normal: {
                areaColor: '#0C1564',
                borderColor: '#00effc',
                borderWidth: 1.5,
                label: {
                    show: true,
                    color: '#fff',
                },

                emphasis: {
                    label: {
                        show: true
                    }
                }
            }
        },

        data: hbmap

    },

    //右边柱状图

    {
        name: '',
        type: 'bar',
        xAxisIndex: 0,
        yAxisIndex: 0,
        barWidth: '45%',
        itemStyle: {
            normal: {
                color: '#00effc',

            }
        },
        label: {
            normal: {
                show: true,
                position: "right",
                textStyle: {
                    color: "#00effc"
                }
            }
        },
        data: hbmap
    },

];
var ynameMap = [];
for (var i = 0; i < 7; i++) {
    ynameMap.push(seriesdata[1].data[i].name);
}


//GDP
var optionMap = {
    backgroundColor: "#0C1564",
    grid: {
        // left:'2%',
        right: '10%',
        bottom: '3%',
        width: '20%',
        height: '50%'
    },
    tooltip: {
        trigger: 'item',
        formatter: function (data) {
            //console.log(data);
            if (!isNaN(data.value)) {
                return data.name + "：" + data.value;
            }
        },
    },
    xAxis: {
        gridIndex: 0,
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        }
    },
    yAxis: {
        gridIndex: 0,
        interval: 0,
        data: ynameMap,
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true
        },
        splitLine: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: "#00effc"
            }
        }
    },
    // geo: {
    //     map: hbmap,
    //     roam: 'move',
    //     // scaleLimit:{
    //     //   max:'1.2',
    //     //   min:'0.7'
    //     // },
    //     label: {
    //         normal: {
    //             show: true,
    //             textStyle: {
    //                 color: 'rgba(0,0,0,0.6)'
    //             }
    //         }
    //     },
    //     itemStyle: {
    //         normal: {
    //             borderColor: 'rgba(0, 0, 0, 0.2)'
    //         },
    //         emphasis: {
    //             areaColor: null,
    //             shadowOffsetX: 0,
    //             shadowOffsetY: 0,
    //             shadowBlur: 20,
    //             borderWidth: 0,
    //             shadowColor: 'rgba(0, 0, 0, 0.5)'
    //         }
    //     }
    // },
    series: seriesdata

};

$.get(uploadedDataURL, function (gdMap) {
    echarts.registerMap(nameMap, gdMap);
    myChart.setOption(optionMap, true);
});

