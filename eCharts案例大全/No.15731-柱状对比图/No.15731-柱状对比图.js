/**
 * author: bingo
 * email: guobin@ebigdata.org
 * date: 2016-12-21
 * version: V1.0
 * description: 柱状对比图，针对两种不同类别，同一时间的数据做对比，能够根据数据的大小做出不同的等分，并且x轴上的负数和数值以正数显示
 */
var temMax = 0;
temInterval = 100;
var distributeRadarData = [{
    "types": ["重工业", "轻工业"]
}, {
    "time": "2012Q1",
    "values": [407.6, 289.4]
}, {
    "time": "2014Q1",
    "values": [619.7, 233.8]
}, {
    "time": "2016Q1",
    "values": [343.1, 136.1]
}];

function setMax() {
    for (var x = 1; x < 4; x++) {
        for (var y = 0; y < 2; y++) {
            if (Math.abs(distributeRadarData[x].values[y]) > temMax) {
                temMax = Math.abs(distributeRadarData[x].values[y]);
            }
        }
    }
}

function switchMax(value) {
    if (value <= 500) {
        temInterval = 100;
    } else if (value <= 1000) {
        temInterval = 200;
    } else {
        temInterval = 500;
    }
    temMax = Math.ceil(value / temInterval) * temInterval;
}
setMax();
switchMax(temMax);
option = {
    title: [{
        text: "柱状对比图",
        left: 'center',
        textStyle: {
            color: "#454545",
            fontSize: 16,
            fontWeight: 'bold'
        }
    }, {
        text: distributeRadarData[0].types[0],
        right: "28%",
        bottom: 30,
        textStyle: {
            color: "#00f6ff",
            fontSize: 12,
            fontWeight: 'normal'
        }
    }, {
        text: distributeRadarData[0].types[1],
        left: "28%",
        bottom: 30,
        textStyle: {
            color: "#00f6ff",
            fontSize: 12,
            fontWeight: 'normal'
        }
    }, {
        text: '单位：亿元',
        right: 10,
        textStyle: {
            color: "#006486",
            fontSize: 12,
            fontWeight: 'normal'
        }
    }],
    tooltip: {
        formatter: function(params) {
            if (params.seriesIndex % 2 === 0) {
                return params.seriesName + '<br/>' + distributeRadarData[0].types[0] + ': ' + params.value
            } else {
                return params.seriesName + '<br/>' + distributeRadarData[0].types[1] + ': ' + -params.value
            }
        }
    },
    legend: {
        data: [distributeRadarData[1].time, distributeRadarData[2].time, distributeRadarData[3].time],
        selectedMode: true,
        bottom: 'bottom'
    },
    xAxis: [{
        type: 'value',
        position: 'top',
        silent: true,
        axisLine: {
            onZero: true
        },
        splitArea: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#006486',
                width: 1,
                type: 'dashed'
            }
        },
        min: -temMax,
        max: temMax,
        interval: temInterval,
        axisLabel: {
            formatter: function(param) {
                if (param > 0) {
                    return param
                } else {
                    return -param
                }
            }
        }
    }],
    yAxis: [{
        axisTick: {
            show: true
        },
        data: []
    }],
    series: [{
        name: distributeRadarData[1].time,
        type: 'bar',
        stack: distributeRadarData[1].time,
        label: {
            normal: {
                show: true,
                position: 'right'
            }
        },
        data: [distributeRadarData[1].values[0]]
    }, {
        name: distributeRadarData[1].time,
        type: 'bar',
        stack: distributeRadarData[1].time,
        label: {
            normal: {
                formatter: function(param) {
                    return -param.value
                },
                show: true,
                position: 'left'
            }
        },
        data: [-distributeRadarData[1].values[1]]
    }, {
        name: distributeRadarData[2].time,
        type: 'bar',
        stack: distributeRadarData[2].time,
        label: {
            normal: {
                show: true,
                position: 'right'
            }
        },
        data: [distributeRadarData[2].values[0]]
    }, {
        name: distributeRadarData[2].time,
        type: 'bar',
        stack: distributeRadarData[2].time,
        label: {
            normal: {
                formatter: function(param) {
                    return -param.value
                },
                show: true,
                position: 'left'
            }
        },
        data: [-distributeRadarData[2].values[1]]
    }, {
        name: distributeRadarData[3].time,
        type: 'bar',
        stack: distributeRadarData[3].time,
        label: {
            normal: {
                show: true,
                position: 'right'
            }
        },
        data: [distributeRadarData[3].values[0]]
    }, {
        name: distributeRadarData[3].time,
        type: 'bar',
        stack: distributeRadarData[3].time,
        label: {
            normal: {
                formatter: function(param) {
                    return -param.value
                },
                show: true,
                position: 'left'
            }
        },
        data: [-distributeRadarData[3].values[1]]
    }]
};