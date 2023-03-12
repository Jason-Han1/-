let changeDate = ['2017-03', '2017-04', '2017-05', '2017-06', '2017-07', '2017-08', '2017-09', '2017-10', '2017-11', '2017-12', '2018-01', '2018-02', '2018-03', '2018-04', '2018-05', '2018-06', '2018-07'];
let costData = [{
    startDate: '2017-03-01',
    endDate: '2017-03-31',
    cost: 900000,
    costState: '已确认',
    count: 88
}, {
    startDate: '2017-04-01',
    endDate: '2017-04-30',
    cost: 300000,
    costState: '已确认',
    count: 88
}, {
    startDate: '2017-05-01',
    endDate: '2017-05-31',
    cost: 850000,
    costState: '已确认',
    count: 88
}, {
    startDate: '2017-06-01',
    endDate: '2017-06-15',
    cost: 800000,
    costState: '已确认',
    count: 88
}, {
    startDate: '2017-06-16',
    endDate: '2017-06-30',
    cost: 1000000,
    costState: '已确认',
    count: 88
}, {
    startDate: '2017-07-01',
    endDate: '2017-07-04',
    cost: 1100000,
    costState: '已确认',
    count: 99
}, {
    startDate: '2017-07-05',
    endDate: '2017-07-21',
    costState: '已确认',
    cost: 880000,
    count: 99
}, {
    startDate: '2017-08-01',
    endDate: '2017-08-31',
    costState: '已确认',
    cost: 120000,
    count: 99
}, {
    startDate: '2017-09-01',
    endDate: '2017-09-30',
    cost: 300000,
    costState: '已确认',
    count: 99
}, {
    startDate: '2017-10-01',
    endDate: '2017-10-20',
    cost: 700000,
    costState: '已确认',
    count: 99
}, {
    startDate: '2017-10-21',
    endDate: '2017-11-15',
    cost: 700000,
    costState: '已确认',
    count: 99
}, {
    startDate: '2017-11-16',
    endDate: '2017-11-20',
    cost: 800000,
    costState: '已确认',
    count: 99
}, {
    startDate: '2017-12-01',
    endDate: '2017-12-31',
    cost: 600000,
    costState: '已确认',
    count: 99
}, {
    startDate: '2018-01-01',
    endDate: '2018-01-31',
    cost: 500000,
    costState: '已确认',
    count: 99
}, {
    startDate: '2018-02-01',
    endDate: '2018-02-28',
    cost: 300000,
    costState: '已确认',
    count: 99
}, {
    startDate: '2018-03-01',
    endDate: '2018-03-31',
    cost: 900000,
    costState: '已确认',
    count: 99
}, {
    startDate: '2018-04-01',
    endDate: '2018-04-30',
    cost: 300000,
    costState: '已确认',
    count: 99
}, {
    startDate: '2018-05-01',
    endDate: '2018-05-31',
    cost: 850000,
    costState: '已确认',
    count: 99
}, {
    startDate: '2018-06-01',
    endDate: '2018-06-15',
    cost: 800000,
    costState: '已确认',
    count: 99
}, {
    startDate: '2018-06-16',
    endDate: '2018-06-30',
    cost: 850000,
    costState: '已确认',
    count: 99
}, {
    startDate: '2018-07-01',
    endDate: '2018-07-04',
    cost: 1100000,
    costState: '未确认',
    count: 99
}, {
    startDate: '2018-07-05',
    endDate: '2018-07-21',
    cost: 880000,
    costState: '未确认',
    count: 99
}];

function getMinusDays(date1, date2) {
    var date1Str = date1.split('-');
    var date1Obj = new Date(date1Str[0], (date1Str[1] - 1), date1Str[2]);
    var date2Str = date2.split('-');
    var date2Obj = new Date(date2Str[0], (date2Str[1] - 1), date2Str[2]);
    var t1 = date1Obj.getTime();
    var t2 = date2Obj.getTime();
    var dateTime = 1000 * 60 * 60 * 24;
    var minusDays = Math.floor(((t2 - t1) / dateTime));
    var days = Math.abs(minusDays);
    return days;
}

function addDays(date1, count) {
    var date1Str = date1.split('-');
    var date1Obj = new Date(date1Str[0], (date1Str[1] - 1), date1Str[2]);
    date1Obj.setDate(date1Obj.getDate() + count);
    let midDate = date1Obj.getFullYear() + '-' + (date1Obj.getMonth() + 1) + '-' + date1Obj.getDate();
    return midDate;
}

let cost = [];

for (let i = 0; i < costData.length; i++) {
    let midDate = addDays(costData[i].startDate, getMinusDays(costData[i].startDate, costData[i].endDate) / 2);
    cost.push({
        name: costData[i].startDate + ' ~ ' + costData[i].endDate,
        value: [midDate, costData[i].cost]
    });
}

let costChange = {
    changeDate: changeDate,
    cost: cost,
    minDate: costData[0].startDate.slice(0, 7) + '-01',
    maxDate: costData[costData.length - 1].endDate.slice(0, 7) + '-31',
    dashLastStart: 2
};

let monthCount = costChange.changeDate.length;
let data = costChange.cost;
let chartData = {
    xAxisNames: costChange.changeDate,
    seriesData: data,
    axisLabelFormatter: '{value}w',
    name: '费用',
    seriesDash: true,
    dashStart: data.length - costChange.dashLastStart,
    minDate: costChange.minDate,
    maxDate: costChange.maxDate,
    scrollLen: Math.ceil(100 - 12 / this.monthCount * 100),
    showScroll: this.monthCount > 12,
    bottom: this.monthCount > 12 ? 50 : 0
};

let seriesData = [];
console.log(chartData.seriesData);
if (chartData.seriesDash) {
    let len = chartData.seriesData.length;
    let minusArr = [];
    for (let i = 0; i < len; i++) {
        minusArr.push({
            name: '-',
            value: []
        });
    }
    seriesData = [{
            name: chartData.name,
            symbol: 'circle',
            symbolSize: 12,
            type: 'line',
            smooth: false,
            data: (chartData.seriesData.slice(0, chartData.dashStart)).concat(minusArr.slice(0, len - chartData.dashStart))
        },
        {
            name: chartData.name,
            symbol: 'emptyCircle',
            symbolSize: 6,
            type: 'line',
            smooth: false,
            data: (chartData.seriesData.slice(0, chartData.dashStart)).concat(minusArr.slice(0, len - chartData.dashStart))
        },
        {
            name: chartData.name,
            symbol: 'circle',
            symbolSize: 12,
            type: 'line',
            smooth: false,
            itemStyle: {
                normal: {
                    color: '#95EBE1',
                    lineStyle: {
                        width: 2,
                        type: 'dashed'
                    }
                }
            },
            data: (minusArr.slice(0, chartData.dashStart - 1)).concat(chartData.seriesData.slice(chartData.dashStart - 1, len))
        },
        {
            name: chartData.name,
            symbol: 'circle',
            symbolSize: 6,
            type: 'line',
            smooth: false,
            itemStyle: {
                normal: {
                    lineStyle: {
                        width: 2,
                        type: 'dotted'
                    }
                }
            },
            data: (minusArr.slice(0, chartData.dashStart - 1)).concat(chartData.seriesData.slice(chartData.dashStart - 1, len))
        },
        {
            name: chartData.name,
            symbol: 'circle',
            symbolSize: 12,
            type: 'line',
            smooth: false,
            data: (minusArr.slice(0, chartData.dashStart - 1)).concat(chartData.seriesData.slice(chartData.dashStart - 1, chartData.dashStart)).concat(minusArr.slice(0, len - chartData.dashStart))
        },
        {
            name: chartData.name,
            symbol: 'emptyCircle',
            symbolSize: 6,
            type: 'line',
            smooth: false,
            data: (minusArr.slice(0, chartData.dashStart - 1)).concat(chartData.seriesData.slice(chartData.dashStart - 1, chartData.dashStart)).concat(minusArr.slice(0, len - chartData.dashStart))
        }
    ];
} else {
    seriesData = [{
            name: chartData.name,
            symbol: 'circle',
            symbolSize: 12,
            type: 'line',
            data: chartData.seriesData
        },
        {
            name: chartData.name,
            symbol: 'emptyCircle',
            symbolSize: 6,
            type: 'line',
            data: chartData.seriesData
        }
    ];
}

let xAxisNames1 = [];
for (let i = 0; i < chartData.seriesData.length; i++) {
    xAxisNames1.push('-');
}
option = {
    color: '#28BBAB',
    backgroundColor: '#404a59',
    tooltip: {
        backgroundColor: 'rgba(46, 126, 139, 0.90)',
        padding: [10, 20, 10, 8],
        textStyle: {
            fontSize: 12,
            lineHeight: 24
        },
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            lineStyle: {
                type: 'dashed',
                color: '#28BBAB'
            }
        },
        formatter: function(params, ticket, callback) {
            callback;
            var htmlStr = '';
            var valMap = {};
            for (var i = 0; i < params.length; i++) {
                var param = params[i];
                var xName = param.name;
                var seriesName = param.seriesName;
                var value = param.value;
                // var color = param.color;
                if (value.length === 0) {
                    continue;
                }
                if (valMap[seriesName] && valMap[seriesName][0] === value[0] && valMap[seriesName][1] === value[1]) {
                    continue;
                }
                htmlStr += xName;
                // if (chartData.dashStart && params[0].dataIndex >= chartData.dashStart) {
                //     htmlStr += '预估';
                // }
                htmlStr += '<br/><div>';
                // htmlStr += '<span style="margin-right:5px;display:inline-block;width:10px;height:10px;border-radius:5px;background-color:' + color + ';"></span>';
                htmlStr += seriesName + '：' + value[1];
                htmlStr += '</div>';
                valMap[seriesName] = value;
            }
            return htmlStr;
        }
    },
    grid: {
        left: 40,
        right: 14,
        bottom: 80,
        top: 20
    },
    dataZoom: [{
        type: 'slider',
        zoomLock: true,
        show: true,
        labelFormatter: () => {
            return '';
        },
        realtime: true,
        start: 30,
        filterMode: 'none',
        end: 100,
        throttle: 0,
        dataBackground: {
            lineStyle: {
                opacity: 0
            },
            areaStyle: {
                opacity: 0
            }
        },
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',
        handleStyle: {
            color: '#fff',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
        },
        xAxisIndex: 0
    }],
    xAxis: [{
        type: 'time',
        min: chartData.minDate,
        max: chartData.maxDate,
        interval: 3600 * 24 * 1000,
        // minInterval: 3600 * 24 * 1000 * 30,
        // maxInterval: 3600 * 24 * 1000 * 31,
        data: xAxisNames1,
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            color: '#ADB9C7',
            formatter: function(value) {
                let date = new Date(value);
                let day = date.getDate();
                if (day === 16) {
                    let year = date.getFullYear();
                    let month = date.getMonth() + 1;
                    month = month <= 9 ? ('0' + month) : month;
                    return year + '-' + month;
                } else {
                    return '';
                }
            }
        },
        axisTick: {
            show: false
        },
        axisPointer: {
            triggerTooltip: true
        }
    }],
    yAxis: {
        type: 'value',
        axisLine: {
            show: false,
            lineStyle: {
                color: '#999'
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: '#999'
            }
        },
        axisLabel: {
            color: '#ADB9C7',
            formatter: function(value) {
                if (chartData.axisLabelFormatter === '{value}w') {
                    return (parseInt(value, 10) / 10000) + 'w';
                } else {
                    return value;
                }
            }
        }
    },
    series: seriesData
};