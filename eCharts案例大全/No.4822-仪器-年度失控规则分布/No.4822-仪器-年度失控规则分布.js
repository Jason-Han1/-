var weekDay = 0;
var data = [{
    name: '可可慕斯',
    value: [1, 2, 5, 7, 6, 7, 1]
}, {
    name: '马卡龙',
    value: [3, 4, 5, 8, 2, 9, 10]
}, {
    name: '布朗尼',
    value: [2, 4, 5, 7, 3, 9, 11]
}]
var data = [{
            name: '10X',
            value: [5156,
        		5233,
        		6984,
        		8221,
        		7730,
        		7847,
        		9028,
        		7167,
        		6630,
        		5898,
        		6096
        ]
        }, {
            name: '1_3S',
            value: [
            1748,
        1511,
        1480,
        1781,
        2220,
        2189,
        4826,
        11859,
        5174,
        1942,
        1410
        ]
        }, {
            name: '2_2S',
            value: [227,
        270,
        351,
        307,
        394,
        554,
        571,
        2386,
        859,
        404,
        212
        ]
        },
        {
            name: '4_1S ',
            value: [95,
        102,
        175,
        192,
        213,
        254,
        264,
        273,
        281,
        218,
        200
        
        ]
        }];

option = {
    backgroundColor:'#fff',
    title: {
        text: '仪器-年度失控规则分布',
        // subtext: '点击极坐标系下即可与圆环图交互',
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
            value: '2020-01',
            textStyle: {
                fontSize: 12,
            }
        }, '2020-02', '2020-03', '2020-04', '2020-05', '2020-06', '2020-07', '2020-08', '2020-09', '2020-10', '2020-11', '2020-12'],
        z: 10,
    },
    polar: {
        center: ['50%', '50%'],
        radius: 220,
    },
    radiusAxis: {
        show:true,
        max: 'dataMax',
        axisLine:{
            show:false
        },
        axisLabel:{
            show:false
        },
        axisTick:{
            show:false
        }
    },
    series: [{
        type: 'bar',
        data: [
            data["0"].value["0"],
            data["0"].value["1"],
            data["0"].value["2"],
            data["0"].value["3"],
            data["0"].value["4"],
            data["0"].value["5"],
            data["0"].value["6"],
            data["0"].value["7"],
            data["0"].value["8"],
            data["0"].value["9"],
            data["0"].value["10"],
            data["0"].value["11"],
            data["0"].value["12"],
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
            data["1"].value["6"],
            data["1"].value["7"],
            data["1"].value["8"],
            data["1"].value["9"],
            data["1"].value["10"],
            data["1"].value["11"],
            data["1"].value["12"],
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
            data["2"].value["6"],
            data["2"].value["7"],
            data["2"].value["8"],
            data["2"].value["9"],
            data["2"].value["10"],
            data["2"].value["11"],
            data["2"].value["12"],
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
    }, 
    {
        name: '每天销量',
        type: 'pie',
        radius: ['75%', '80%'],
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
    }
    ]
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
        var weekDayData = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'];;
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