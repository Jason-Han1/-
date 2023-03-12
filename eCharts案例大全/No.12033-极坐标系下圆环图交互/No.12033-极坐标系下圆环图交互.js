var weekDay = 0;
var data = [{
    name: '故障',
    value: [1, 7, 13]
}, {
    name: '消音',
    value: [2, 8, 14]
}, {
    name: '火警',
    value: [3, 9, 15]
}, {
    name: '反馈',
    value: [4, 10, 16]
}, {
    name: '复位',
    value: [5, 11, 17]
}, {
    name: '启动',
    value: [6, 12, 18]
}]



var option = {
    title: {
        text: '',
        subtext: '',
        textAlign: 'left'
    },
    tooltip: {
        trigger: 'item',
        padding: 10,
        backgroundColor: '#222',
        borderColor: '#777',
        borderWidth: 1,
        formatter: tooltipFormatter,

    },
    angleAxis: {
        type: 'category',
        data: [{
            value: '一期',
            textStyle: {
                fontSize: 25,
            }
        }, '二期', '三期'],
        z: 10
    },
    polar: {
        center: ['50%', '50%'],
        radius: 200,
    },
    radiusAxis: {},
    series: [{
        type: 'bar',
        data: [
            data["0"].value["0"],
            data["0"].value["1"],
            data["0"].value["2"],
        ],
        coordinateSystem: 'polar',
        name: data["0"].name,
        stack: 'a',
        itemStyle: {
            normal: {
                borderWidth: 4,
                borderColor: '#ffffff',
            },
            emphasis: {
                borderWidth: 0,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }, {
        type: 'bar',
        data: [
            data["1"].value["0"],
            data["1"].value["1"],
            data["1"].value["2"],
        ],
        coordinateSystem: 'polar',
        name: data["1"].name,
        stack: 'a',
        itemStyle: {
            normal: {
                borderWidth: 4,
                borderColor: '#ffffff',
            },
            emphasis: {
                borderWidth: 0,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }, {
        type: 'bar',
        data: [
            data["2"].value["0"],
            data["2"].value["1"],
            data["2"].value["2"],
        ],
        coordinateSystem: 'polar',
        name: data["2"].name,
        stack: 'a',
        itemStyle: {
            normal: {
                borderWidth: 4,
                borderColor: '#ffffff',
            },
            emphasis: {
                borderWidth: 0,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    },{
        type: 'bar',
        data: [
            data["3"].value["0"],
            data["3"].value["1"],
            data["3"].value["2"],
        ],
        coordinateSystem: 'polar',
        name: data["3"].name,
        stack: 'a',
        itemStyle: {
            normal: {
                borderWidth: 4,
                borderColor: '#ffffff',
            },
            emphasis: {
                borderWidth: 0,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    },{
        type: 'bar',
        data: [
            data["4"].value["0"],
            data["4"].value["1"],
            data["4"].value["2"],
        ],
        coordinateSystem: 'polar',
        name: data["4"].name,
        stack: 'a',
        itemStyle: {
            normal: {
                borderWidth: 4,
                borderColor: '#ffffff',
            },
            emphasis: {
                borderWidth: 0,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }, {
        type: 'bar',
        data: [
            data["5"].value["0"],
            data["5"].value["1"],
            data["5"].value["2"],
        ],
        coordinateSystem: 'polar',
        name: data["5"].name,
        stack: 'a',
        itemStyle: {
            normal: {
                borderWidth: 4,
                borderColor: '#ffffff',
            },
            emphasis: {
                borderWidth: 0,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    },{
        name: '',
        type: 'pie',
        radius: ['80%', '85%'],
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: true,
                position: 'outside',
                formatter: '{b} : {c} ({d}%)'

            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: '15',
                    fontWeight: 'normal'
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: data["0"].value["0"],
            name: data["0"].name
        }, {
            value: data["1"].value["0"],
            name: data["1"].name
        }, {
            value: data["2"].value["0"],
            name: data["2"].name
        }, {
            value: data["3"].value["0"],
            name: data["3"].name
        }, {
            value: data["4"].value["0"],
            name: data["4"].name
        }, {
            value: data["5"].value["0"],
            name: data["5"].name
        }],
        legend: {
            show: true,
            orient: 'vertical',
            x: 'right',
            y: 'top',
            data: [data["0"].name, data["1"].name, data["2"].name,data["3"].name,data["4"].name,data["5"].name ]
        },
        itemStyle: {
            normal: {
                borderWidth: 3,
                borderColor: '#ffffff',
            },
            emphasis: {
                borderWidth: 3,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
}

function tooltipFormatter(params) {
    var valuesFormatter = [];
    if (params.componentSubType == 'pie') {
        valuesFormatter.push(
            '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
            option.angleAxis.data[weekDay].value + '<br>' + '</div>' +
            '<span style="color:' + params.color + '">' + params.name + '</span>: ' + params.value
        );
    } else {
        valuesFormatter.push(
            '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
            params.seriesName +
            '</div>' +
            '<span style="color:' + params.color + '">' + params.name + '</span>: ' + params.value + '<br>');
    }

    return valuesFormatter;
}
myChart.on('click', function(params) {
    if (params.componentSubType != 'pie') {
        weekDay = params.dataIndex;
        console.log(data[5].value[weekDay]);
        option.series[6].data[0].value = data[0].value[weekDay];
        option.series[6].data[1].value = data[1].value[weekDay];
        option.series[6].data[2].value = data[2].value[weekDay];
        option.series[6].data[3].value = data[3].value[weekDay];
        option.series[6].data[4].value = data[4].value[weekDay];
        option.series[6].data[5].value = data[5].value[weekDay];
        var weekDayData = ['一期', '二期', '三期'];
        weekDayData[weekDay] = {
            value: weekDayData[weekDay],
            textStyle: {
                fontSize: 25,
            }
        };
        option.angleAxis.data = weekDayData;
        console.dir(weekDayData);
        myChart.setOption(option);
    }
});