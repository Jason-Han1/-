var weekDay = 0;
var data = [{
    name: '预测课时',
    value: [3, 5, 12, 10, 6,3]
}, {
    name: '预测得分',
    value: [20, 21,32, 21, 12,8]
}, {
    name: '累计训练时长',
    value: [5, 6,12,10, 6, 5]
}]

option = {
    title: {
        text: '黑科技专业版PRO',
        subtext: '课程构成',
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
            value: '写作',
            textStyle: {
                fontSize: 25,
            }
        }, '听力', '阅读理解', '完型填空',  '语法填空','短文改错' ],
        z: 10
    },
    polar: {
        center: ['50%', '50%'],
        radius: 260,
    },
    radiusAxis: {},
    series: [{
        type: 'bar',
        data: [
            data["0"].value["0"],
            data["0"].value["1"],
            data["0"].value["2"],
            data["0"].value["3"],
            data["0"].value["4"],
            data["0"].value["5"],
            
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
            data["1"].value["3"],
            data["1"].value["4"],
            data["1"].value["5"],
            
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
            data["2"].value["3"],
            data["2"].value["4"],
            data["2"].value["5"],
            
        ],
        coordinateSystem: 'polar',
        name: data["2"].name,
        stack: 'a',
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
    }, {
        name: '参考人数',
        type: 'pie',
        radius: ['95%', '100%'],
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
        }],
        legend: {
            show: true,
            orient: 'vertical',
            x: 'right',
            y: 'top',
            data: [data["0"].name, data["1"].name, data["2"].name, ]
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
        option.series[3].data[0].value = data[0].value[weekDay];
        option.series[3].data[1].value = data[1].value[weekDay];
        option.series[3].data[2].value = data[2].value[weekDay];
        var weekDayData = ['写作','听力', '阅读理解', '完形填空','语法填空','短文改错',];
        weekDayData[weekDay] = {
            value: weekDayData[weekDay],
            textStyle: {
                fontSize: 25,
            }
        };
        option.angleAxis.data = weekDayData;
        myChart.setOption(option);
    }
});