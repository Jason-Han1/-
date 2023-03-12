var geoCoordMap = {
    "湖州":[120.1,30.86],
    "苏州":[120.62,31.32],
    "杭州":[120.19,30.26],
};

var convertData = function (data) {
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
    timeline: {
        bottom: '6%',
        autoPlay: true,
        data: ['2002', '2003', '2004']
            },
    /*legend: {
        orient: 'vertical',
        y: 'bottom',
        x:'right',
        data:['pm2.5'],
        textStyle: {
            color: '#fff'
        }
    },
    visualMap: {
        min: 0,
        max: 1500,
        calculable: true,
        color: ['#d94e5d','#eac736','#50a3ba'],
        textStyle: {
            color: '#fff'
        }
    },*/
    options:[
    {backgroundColor: '#fff',
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            return params.name + ' : ' + params.value[2];
        }
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                areaColor: '#68BBFE',
                borderColor: '#fff',
                borderWidth: 3
            },
            emphasis: {
                areaColor: '#F2F4F7'
            }
        }
    },
    series: [
        {
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData([
                {name: "杭州", value: 1},
                {name: "湖州", value: 1},
                {name: "苏州", value: 1},
            ]),
            symbolSize: 12,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {color:'#F7CD45'},
                emphasis: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            }
        }
    ]},{backgroundColor: '#fff',
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            return params.name + ' : ' + params.value[2];
        }
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                areaColor: '#68BBFE',
                borderColor: '#fff',
                borderWidth: 3
            },
            emphasis: {
                areaColor: '#F2F4F7'
            }
        }
    },
    series: [
        {
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData([
                {name: "杭州", value: 2},
                {name: "苏州", value: 2},
            ]),
            symbolSize: 12,
            /*markArea: {
                    silent: true,
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                            borderWidth: 1,
                            borderType: 'dashed'
                        }
                    },
                    data: convertData([
                {name: "杭州", value: 2},
                {name: "苏州", value: 2},
            ])
                },*/
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {color:'#F7CD45'},
                emphasis: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            }
        }
    ]},{backgroundColor: '#fff',
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            return params.name + ' : ' + params.value[2];
        }
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                areaColor: '#68BBFE',
                borderColor: '#fff',
                borderWidth: 3
            },
            emphasis: {
                areaColor: '#F2F4F7'
            }
        }
    },
    series: [
        {
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData([
                {name: "杭州", value: 3},
                {name: "湖州", value: 3},
            ]),
            symbolSize: 12,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {color:'#F7CD45'},
                emphasis: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            }
        }
    ]}]
}