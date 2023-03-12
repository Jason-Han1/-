var chartData = {
    "timelineData": [
        "1月", "2月", "3月"
    ],
    "optionsData": {
        "1月": [{
            "fault": 1,
            "target": 5
        }, {
            "fault": 2,
            "target": 6
        }, {
            "fault": 3,
            "target": 7
        }, {
            "fault": 8,
            "target": 5
        }],
        "2月": [{
            "fault": 2,
            "target": 5
        }, {
            "fault": 3,
            "target": 6
        }, {
            "fault": 1,
            "target": 7
        }, {
            "fault": 2,
            "target": 5
        }],
        "3月": [{
            "fault": 4,
            "target": 5
        }, {
            "fault": 9,
            "target": 6
        }, {
            "fault": 5,
            "target": 7
        }, {
            "fault": 5,
            "target": 5
        }]
    },
    "xData": ["系统1", "系统2", "系统3", "系统4"]
};



var dataMap = {};

function getColor(obj) {
    if (obj.fault > obj.target) {
        return ['#EA1644', "rgba(212,212,212,0.3)"]
    }
    return ['#27EBBD', "rgba(212,212,212,0.3)"];
}

//格式化好每月的数据
function dataFormatter(obj) {
    var temp;
    var objMap = {};
    for (var key of Object.keys(obj)) {
        temp = obj[key];
        objMap[key] = [];

        for (var i = 0, l = temp.length; i < l; i++) {
            objMap[key][i * 2] = {
                data: [{
                        value: temp[i].target,
                        name: '',
                        itemStyle: {
                            opacity: 0
                        },
                        label: {
                            show: false
                        }
                    },
                    {
                        value: temp[i].fault,
                        name: `故障\n${temp[i].fault}`,
                        itemStyle: {
                            color: getColor(temp[i])[0]
                        }
                    }
                ]
            }
            objMap[key][i * 2 + 1] = {
                data: [{
                        value: temp[i].fault,
                        name: '',
                        itemStyle: {
                            opacity: 0
                        },
                        label: {
                            show: false
                        }
                    },
                    {
                        value: temp[i].target,
                        name: `目标\n${temp[i].target}`,
                        itemStyle: {
                            color: getColor(temp[i])[1]
                        }
                    }
                ]
            }

        }
    }

    return objMap;
}



function optionsFormatter() {
    var optData = [];
    for (var value of chartData.timelineData) {
        optData.push({
            series: dataMap.dataGDP[value]

        });
    }

    return optData;
}

function seriesFormatter() {
    var seriesData = [];
    const oneSeries = {
        type: 'pie',
        selectedMode: 'single',
        label: {
            normal: {
                position: 'inner'
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
    };
    var preArr = ['12%', '37%', '62%', '87%']


    for (var i = 0; i < chartData.xData.length; i++) {
        seriesData.push({
            type: 'pie',
            selectedMode: 'single',
            radius: ['15%', '18%'],
            center: [`${preArr[i]}`, '47%'],
            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
        })
        seriesData.push({
            type: 'pie',
            selectedMode: 'single',
            radius: ['12%', '15%'],
            center: [`${preArr[i]}`, '47%'],
            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
        })
    }

    return seriesData;
}

dataMap.dataGDP = dataFormatter(chartData.optionsData);

option = {

    baseOption: {
        backgroundColor: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 1,
            colorStops: [{
                offset: 0, color: '#0f2c70' // 0% 处的颜色
            }, {
                offset: 1, color: '#091732' // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
        },
        timeline: {
            show: true,
            bottom: 150,
            axisType: 'category',
            // realtime: false,
            // loop: false,
            autoPlay: true,
            currentIndex: 0,
            playInterval: 3000,
            // controlStyle: {
            //     position: 'left'
            // },
            data: chartData.timelineData,
            itemStyle: {
                color: '#27C4F8'
            },
            label: {
                textStyle: {
                    color: '#d0d0d0'
                }
            },
            lineStyle: {
                color: '#57657c'
            },
            checkpointStyle: {
                color: '#27C4F8',
                borderColor: 'rgba(39,196,248,0.5)'
            },
            controlStyle: {
                color: '#57657c',
                borderColor: '#57657c'
            },
            emphasis: {
                controlStyle: {
                    color: '#27C4F8',
                    borderColor: '#27C4F8'
                },
                itemStyle: {
                    color: '#27C4F8'
                },
            }
        },
        series: seriesFormatter()
    },
    options: optionsFormatter()
};