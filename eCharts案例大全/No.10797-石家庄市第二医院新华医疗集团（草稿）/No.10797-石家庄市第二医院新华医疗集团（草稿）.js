var uploadedDataURL = "/asset/get/s/data-1562809498447-cNgQ9Iswh.json";

// 集团内各医院坐标
var geoCoordMap = {
    '石家庄市第二医院': [114.47697, 38.052536],
    '革新': [114.481869, 38.056937],
    '赵陵铺镇卫生院': [114.489795, 38.101993],
    '大郭镇卫生院': [114.41203, 38.085278],
    '杜北乡卫生院': [114.444291, 38.132607],
    '西三庄乡卫生院': [114.480454, 38.089162],
    '东焦': [114.47697, 38.059882],
    '宁安': [114.487631, 38.057334],
    '学府路社区卫生服务站': [114.479551, 38.1448]
}
// 各地区数据
var mydata = [{
    name: '石家庄市第二医院',
    value: '35'
}, {
    name: '革新',
    value: '23'
}, {
    name: '赵陵铺镇卫生院',
    value: '4'
}, {
    name: '大郭镇卫生院',
    value: '5'
}, {
    name: '杜北乡卫生院',
    value: '7'
}, {
    name: '西三庄乡卫生院',
    value: '5'
}, {
    name: '东焦',
    value: '4'
}, {
    name: '宁安',
    value: '2'
}, {
    name: '学府路社区卫生服务站',
    value: '4'
}];

// 数据转换
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

myChart.showLoading()

$.ajax({
    url: uploadedDataURL,
    async: false,
    dataType: 'json',
    success: function(data) {
        echarts.registerMap('xhq', data);

        myChart.hideLoading();

        option = {
            backgroundColor: '#151b53',
            tooltip: {
                formatter: function(e) {
                    if (typeof(e.value)[2] == "undefined") {
                        return e.name;
                    } else {
                        return '就诊人数<br>' + e.name + ':' + e.value[2] + '人';
                    }

                }
            },
            geo: {
                map: 'xhq',
                show: true,
                // label: {
                //     show: false,
                //     formatter: function(value) {
                //         return value.value[2]
                //     },
                //     color: '#fff',
                //     emphasis: {
                //         show: false
                //     }
                // },
                itemStyle: {
                    normal: {
                        areaColor: '#172260',
                        borderColor: '#216ca7',
                        borderWidth: 1,
                        shadowColor: '#216ca7',
                        shadowBlur: 1
                    }
                },
                zoom: 1.2,
            },
            series: [{
                    type: 'map',
                    map: 'xhq',
                    geoIndex: 1,
                    aspectScale: 0.75, //长宽比
                    zoom: 1.2,
                    label: {
                        show: true,
                        textStyle: {
                            fontSize: 16,
                            color: '#216ca7'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: 30,
                                color: '#216ca7'
                            }
                        }
                    },
                    roam: false,
                    itemStyle: {
                        normal: {
                            areaColor: 'transparent',
                            borderColor: 'transparent',
                            borderWidth: 1
                        },
                        emphasis: {
                            areaColor: '#C9E6FF',
                            shadowColor: '#5AB2FE',
                            shadowBlur: 20
                        }
                    },
                    data: convertData(mydata),
                },
                {
                    name: '就诊人数',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    symbolSize: function(val) {
                        var num = val[2];
                        if (num < 10) {
                            return 10
                        } else if (num > 30) {
                            return 30;
                        } else {
                            return num
                        }
                    },
                    // label: {
                    //     normal: {
                    //         show: true,
                    //         formatter: function(value) {
                    //             return value.value[2]
                    //         },
                    //         textStyle: {
                    //             color: '#fff',
                    //             fontSize: 12,
                    //         }
                    //     }
                    // },
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'bottom',
                            show: true,
                            textStyle: {
                                fontSize: 12,
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#216ca7', //标志颜色
                        },
                    },
                    zlevel: 6,
                    data: convertData(mydata),
                }
            ]
        }
        myChart.setOption(option);
    }
})
// 指定图表的配置项和数据