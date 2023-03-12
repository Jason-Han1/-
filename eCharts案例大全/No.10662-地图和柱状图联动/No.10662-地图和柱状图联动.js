var uploadedDataURL = "/asset/get/s/data-1503046655395-rkvb3QV_-.json";

var ppdata = [{
    name: '茂南区',
    value: '84'
}, {
    name: '电白区',
    value: '197'
}, {
    name: '高州市',
    value: '173'
}, {
    name: '化州市',
    value: '165'
}, {
    name: '信宜市',
    value: '142'
}];
var gdpdata = [{
    name: '茂南区',
    value: '205'
}, {
    name: '电白区',
    value: '516'
}, {
    name: '高州市',
    value: '437'
}, {
    name: '化州市',
    value: '385'
}, {
    name: '信宜市',
    value: '350'
}];
var seriesdata = [
    //人口
    {
        name: '人口',
        type: 'map',
        map: '茂名',
        itemStyle: {
            normal: {
                label: {
                    show: true
                },

                emphasis: {
                    label: {
                        show: true
                    }
                }
            }
        },
        data: ppdata
    },
    //GDP
    // {
    //     name: 'GDP',
    //     type: 'map',
    //     map: '茂名',
    //     itemStyle: {
    //         normal: {
    //             label: {
    //                 show: true
    //             },

    //             emphasis: {
    //                 label: {
    //                     show: true
    //                 }
    //             }
    //         }
    //     },
    //     data: gdpdata
    // },

    //右边图表人口
    {
        name: '人口',
        type: 'bar',
        xAxisIndex: 0,
        yAxisIndex: 0,
        barWidth: '45%',
        itemStyle: {
            normal: {
                color: '#F4A460'
            }
        },
        label: {
            normal: {
                show: true,
                position: "right",
                textStyle: {
                    color: "#9EA7C4"
                }
            }
        },
        data: ppdata
    },
    //图表GDP
    // {
    //     name: 'GDP',
    //     type: 'bar',
    //     xAxisIndex: 0,
    //     yAxisIndex: 0,
    //     barWidth: '45%',
    //     itemStyle: {
    //         normal: {
    //             color: '#F4A460'
    //         }
    //     },
    //     label: {
    //         normal: {
    //             show: true,
    //             position: "right",
    //             textStyle: {
    //                 color: "#9EA7C4"
    //             }
    //         }
    //     },
    //     data: gdpdata
    // },
];
var yname = [];
for (var i = 0; i < 5; i++) {
    yname.push(seriesdata[1].data[i].name);
}

//人口
var option ={
    width:200,
    height:200,
    title: {
        text: '广东省茂名市各县(区)人口(2017)',
        subtext: '数据来源网络（单位：万）',
        left: 'center',
        textStyle: {
            color: '#000'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}万"
    },
    legend: {
        orient: 'vertical',
        top: '7%',
        left: '20%',
        data: ['人口', 'GDP'],
        selectedMode: 'single',
        selected: {
            '人口': true,
            'gdp': false
        }

    },
    visualMap: {
        min: 80,
        max: 200,
        text: ['高', '低'],
        realtime: false,
        calculable: true,
        left: '10%',
        inRange: {
            color: ['LightSkyBlue', 'Yellow', 'orangered']
        },
        dimension: 0
    },

    grid: {
        x: '80%',
        y: '27%',
        width: '15%',
        height: '50%'
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
        data: yname,
        axisTick: {
            show: true
        },
        axisLabel: {
            show: true
        },
        splitLine: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#6173a3"
            }
        }
    },

    toolbox: {
        feature: {
            dataView: {
                readOnly: false
            },
            restore: {},
            saveAsImage: {}
        }
    },
    series: seriesdata
};
//GDP
var option1 = { 
    width:200,
    height:200,
    title: {
        text: '广东省茂名市各县(区)GDP(2017)',
        subtext: '数据来源网络（单位：亿）',
        left: 'center',
        textStyle: {
            color: '#000'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}亿"
    },
    legend: {
        orient: 'vertical',
        top: '7%',
        left: '20%',
        data: ['人口', 'GDP'],
        selectedMode: 'single',
        selected: {
            '人口': false,
            'gdp': true
        }

    },
    visualMap: {
        min: 200,
        max: 520,
        text: ['高', '低'],
        realtime: false,
        calculable: true,
        left: '10%',
        inRange: {
            color: ['SkyBlue', 'Yellow', 'orangered']
        },
        dimension: 0
    },

    grid: {
        x: '80%',
        y: '27%',
        width: '5%',
        height: '10%'
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
        data: yname,
        axisTick: {
            show: true
        },
        axisLabel: {
            show: true
        },
        splitLine: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#6173a3"
            }
        }
    },

    toolbox: {
        feature: {
            dataView: {
                readOnly: false
            },
            restore: {},
            saveAsImage: {}
        }
    },
    series: seriesdata
};

$.get(uploadedDataURL, function(gdMap) {
    echarts.registerMap('茂名', gdMap);
    myChart.setOption(option, true);
});

myChart.on('legendselectchanged', function(params) {
    if (params.name == '人口') {
        //$.get(uploadedDataURL, function(gdMap) {
            //echarts.registerMap('茂名', gdMap);
            myChart.setOption(option, true);
        //});
    } else {
        //$.get(uploadedDataURL, function(gdMap) {
            //echarts.registerMap('茂名', gdMap);
            myChart.setOption(option1, true);
        //});
    }
});