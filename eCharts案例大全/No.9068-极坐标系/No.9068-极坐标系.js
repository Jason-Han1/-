var weekDay = 0;
var data = [{
    name: 'TEST1',
    value: [1, 2, 5, 7, 6, 7, 1, 7, 6, 7, 1]
}, {
    name: 'TEST2',
    value: [3, 4, 5, 8, 2, 9, 10, 8, 2, 9, 10]
}, {
    name: 'TEST3',
    value: [2, 4, 5, 7, 3, 9, 11, 7, 3, 9, 11]
}, {
    name: 'TEST4',
    value: [2, 4, 5, 7, 3, 9, 11, 7, 3, 9, 11]
}, {
    name: 'TEST5',
    value: [2, 4, 5, 7, 3, 9, 11, 7, 3, 9, 11]
}, {
    name: 'TEST6',
    value: [2, 4, 5, 7, 3, 9, 11, 7, 3, 9, 11]
}]


//这玩意有缺陷

option = {
    backgroundColor: '#242424',

    tooltip: {
        trigger: 'item',
        padding: 10,
        backgroundColor: '#222',
        borderColor: '#777',
        borderWidth: 1,
        formatter: tooltipFormatter,

    },
    legend: {
        type: "scroll",
        orient: 'vertical',
        left: '10%',
        align: 'left',
        top: 'middle',
        textStyle: {
            color: '#FFF'
        },
    },

    angleAxis: {
        show: false,
        type: 'category',
        data: [{
            value: '',
            textStyle: {
                fontSize: 25,
            }
        }, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
        z: 10
    },
    polar: {
        center: ['50%', '50%'],
        radius: '80%',

    },
    radiusAxis: {
        min: 0,
        // max: 100,
        axisLine: {
            show: false,
            lineStyle: {
                color: "#00c7ff",
                width: 1,
                type: "dashed"
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: "#eee",
                width: 1,
                type: "dashed",
                opacity: 0.7
            }
        },
        splitArea: {
            show: true,
            areaStyle: {
                color: '#353535',
                opacity: 0.9
            }
        }
    },

    series: [{
            type: 'bar',
            color: '#375498',
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
            ],
            coordinateSystem: 'polar',
            name: data["0"].name,
            stack: 'a',
            itemStyle: {
                normal: {
                    borderWidth: 1,
                    borderColor: '#242424',
                },

            }
        },
        {
            type: 'bar',
            color: '#2e4a7a',
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
            ],
            coordinateSystem: 'polar',
            name: data["1"].name,
            stack: 'a',
            itemStyle: {
                normal: {
                    borderWidth: 2,
                    borderColor: '#242424',
                },
                emphasis: {
                    borderWidth: 0,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        },
        {
            type: 'bar',
            color: '#637696',
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
            ],
            coordinateSystem: 'polar',
            name: data["2"].name,
            stack: 'a',
            itemStyle: {
                normal: {
                    borderWidth: 1,
                    borderColor: '#242424',
                },
            }
        },
        {
            type: 'bar',
            color: '#7b8bad',
            data: [
                data["3"].value["0"],
                data["3"].value["1"],
                data["3"].value["2"],
                data["3"].value["3"],
                data["3"].value["4"],
                data["3"].value["5"],
                data["3"].value["6"],
                data["3"].value["7"],
                data["3"].value["8"],
                data["3"].value["9"],
                data["3"].value["10"],
            ],
            coordinateSystem: 'polar',
            name: data["2"].name,
            stack: 'a',
            itemStyle: {
                normal: {
                    borderWidth: 1,
                    borderColor: '#242424',
                },
            }
        },
        {
            type: 'bar',
            color: '#b6c7dc',
            data: [
                data["4"].value["0"],
                data["4"].value["1"],
                data["4"].value["2"],
                data["4"].value["3"],
                data["4"].value["4"],
                data["4"].value["5"],
                data["4"].value["6"],
                data["4"].value["7"],
                data["4"].value["8"],
                data["4"].value["9"],
                data["4"].value["10"],
            ],
            coordinateSystem: 'polar',
            name: data["2"].name,
            stack: 'a',
            itemStyle: {
                normal: {
                    borderWidth: 1,
                    borderColor: '#242424',
                },
            }
        },
        {
            type: 'bar',
            color: '#8e9baa',
            data: [
                data["5"].value["0"],
                data["5"].value["1"],
                data["5"].value["2"],
                data["5"].value["3"],
                data["5"].value["4"],
                data["5"].value["5"],
                data["5"].value["6"],
                data["5"].value["7"],
                data["5"].value["8"],
                data["5"].value["9"],
                data["5"].value["10"],
            ],
            coordinateSystem: 'polar',
            name: data["2"].name,
            stack: 'a',
            itemStyle: {
                normal: {
                    borderWidth: 1,
                    borderColor: '#242424',
                },
            }
        },
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
            '<span style="color:' + params.color + '">' + params.name + '</span> : ' + params.value + '<br>');
    }
    return valuesFormatter;
}